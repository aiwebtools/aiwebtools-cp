// AIWebTools.ai — Site AI helpers (credit-frugal)
// Modes:
//   match   -> pick the best 3 tools from a candidate list for a plain-English need
//   explain -> plain-English explanation of one tool + how to use it
//   prompt  -> a great starter prompt for one of our custom GPTs / Gems
//
// Credit guard: cheapest fast model, tiny max_tokens, hard input clamps,
// per-IP rate limit, and no streaming (answers are a few sentences).

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const MODEL = "google/gemini-3.7-flash";

// 12 requests per IP per 10 minutes.
const RATE_LIMIT_MAX = 12;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const ipHits = new Map<string, number[]>();
const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (hits.length >= RATE_LIMIT_MAX) {
    ipHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  ipHits.set(ip, hits);
  return false;
};

const clean = (s: unknown, max: number): string => {
  if (typeof s !== "string") return "";
  return s
    .replace(/[\r\n`]+/g, " ")
    .replace(
      /\b(ignore|disregard|forget)\b[^.]{0,60}\b(previous|prior|above|all)\b[^.]{0,60}(instructions?|prompts?|rules?)/gi,
      "[filtered]",
    )
    .replace(/\b(system|developer|assistant)\s*:/gi, "[filtered]:")
    .slice(0, max)
    .trim();
};

interface Payload {
  mode?: string;
  query?: string;
  tool?: { title?: string; category?: string; description?: string };
  candidates?: { title?: string; category?: string }[];
}

const buildMessages = (body: Payload) => {
  const mode = body.mode;

  if (mode === "match") {
    const query = clean(body.query, 240);
    const candidates = (body.candidates ?? [])
      .slice(0, 30)
      .map((c) => `- ${clean(c.title, 80)}${c.category ? ` (${clean(c.category, 40)})` : ""}`)
      .join("\n");
    if (!query || !candidates) return null;
    return [
      {
        role: "system",
        content:
          "You are the AIWebTools.ai tool matcher. From the candidate list ONLY, pick the 3 best tools for the user's need. " +
          "Never invent tools. Reply as exactly 3 lines, each: `Exact Tool Title — one short reason (max 14 words)`. No intro, no extra text.",
      },
      { role: "user", content: `Need: ${query}\n\nCandidates:\n${candidates}` },
    ];
  }

  if (mode === "explain") {
    const t = body.tool ?? {};
    const title = clean(t.title, 100);
    if (!title) return null;
    return [
      {
        role: "system",
        content:
          "You explain AI tools to complete beginners for AIWebTools.ai. Max 70 words total. " +
          "Two short parts: 'What it does' in one plain sentence, then 3 bullet steps for a first-time user. No hype, no markdown headers.",
      },
      {
        role: "user",
        content: `Tool: ${title}\nCategory: ${clean(t.category, 60)}\nDescription: ${clean(t.description, 500)}`,
      },
    ];
  }

  if (mode === "prompt") {
    const t = body.tool ?? {};
    const title = clean(t.title, 100);
    if (!title) return null;
    return [
      {
        role: "system",
        content:
          "You write one excellent starter prompt for a custom AI assistant. Output ONLY the prompt text the user can paste, " +
          "max 60 words, second person, specific and immediately useful. No quotes, no preamble, no explanation.",
      },
      {
        role: "user",
        content: `Assistant: ${title}\nCategory: ${clean(t.category, 60)}\nWhat it does: ${clean(t.description, 400)}\nUser goal (optional): ${clean(body.query, 160)}`,
      },
    ];
  }

  return null;
};

const MAX_TOKENS: Record<string, number> = { match: 700, explain: 700, prompt: 600 };

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "AI is not configured." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Too many AI requests. Please try again in a few minutes." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = (await req.json()) as Payload;
    const messages = buildMessages(body);
    if (!messages) {
      return new Response(JSON.stringify({ error: "Invalid request." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": apiKey,
        "X-Lovable-AIG-SDK": "fetch",
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.4,
        // Thinking off — these are short, cheap answers; reasoning tokens would
        // burn credits and eat the output budget.
        reasoning: { enabled: false },
        max_tokens: MAX_TOKENS[body.mode as string] ?? 700,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      const status = res.status;
      const message =
        status === 402
          ? "AI helpers are paused — the workspace is out of AI credits."
          : status === 429
          ? "AI is busy right now. Please try again shortly."
          : status === 403
          ? "AI helpers are currently unavailable."
          : "The AI helper could not answer right now.";
      console.error("site-ai gateway error", status, detail.slice(0, 300));
      return new Response(JSON.stringify({ error: message, disabled: status === 402 || status === 403 }), {
        status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    const text: string = data?.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) {
      return new Response(JSON.stringify({ error: "No answer was produced." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ text }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("site-ai error", err);
    return new Response(JSON.stringify({ error: "Unexpected error." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
