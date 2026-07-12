// Screens a submitted tool URL for safety using Lovable AI Gateway.
// Returns { verdict: "safe" | "suspicious" | "blocked", score, reason }.
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const HARD_BLOCK_KEYWORDS = [
  "phishing", "verify-account", "wallet-drain", "seed-phrase", "porn", "nsfw",
  "xxx", "onlyfans", "casino", "gambl", "malware", "keygen", "crack",
];

const HARD_BLOCK_TLDS = [".zip", ".mov", ".click", ".xyz.link"];

async function fetchMeta(url: string): Promise<{ status: number; title: string; description: string; finalUrl: string } | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; AIWebToolsBot/1.0; +https://aiwebtools.ai)",
        "Accept": "text/html,application/xhtml+xml",
      },
    });
    const buf = await res.arrayBuffer();
    const text = new TextDecoder("utf-8", { fatal: false }).decode(buf.slice(0, 50000));
    const title = /<title[^>]*>([^<]{0,300})<\/title>/i.exec(text)?.[1]?.trim() ?? "";
    const description = /<meta[^>]+name=["']description["'][^>]+content=["']([^"']{0,500})["']/i.exec(text)?.[1]?.trim() ?? "";
    return { status: res.status, title, description, finalUrl: res.url };
  } catch (err) {
    console.error("fetchMeta failed", err);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { url, name, description } = await req.json();
    if (!url || typeof url !== "string") {
      return new Response(JSON.stringify({ error: "url required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    let parsed: URL;
    try { parsed = new URL(url); } catch {
      return new Response(JSON.stringify({ verdict: "blocked", score: 0, reason: "Invalid URL format" }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return new Response(JSON.stringify({ verdict: "blocked", score: 0, reason: "Only http(s) URLs allowed" }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const lowerHost = parsed.hostname.toLowerCase();
    const lowerHref = parsed.href.toLowerCase();

    // Fast-fail block on obvious keywords / TLDs
    for (const kw of HARD_BLOCK_KEYWORDS) {
      if (lowerHref.includes(kw)) {
        return new Response(JSON.stringify({ verdict: "blocked", score: 5, reason: `URL contains blocked keyword: ${kw}` }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
    }
    for (const tld of HARD_BLOCK_TLDS) {
      if (lowerHost.endsWith(tld)) {
        return new Response(JSON.stringify({ verdict: "suspicious", score: 40, reason: `Uncommon/risky TLD: ${tld}` }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
    }

    // Fetch page metadata
    const meta = await fetchMeta(url);
    if (!meta) {
      return new Response(JSON.stringify({ verdict: "suspicious", score: 45, reason: "Site unreachable during screening" }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (meta.status >= 400) {
      return new Response(JSON.stringify({ verdict: "suspicious", score: 40, reason: `Site returned HTTP ${meta.status}` }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // Cross-origin redirect check
    let redirectedOffDomain = false;
    try {
      const finalHost = new URL(meta.finalUrl).hostname.toLowerCase();
      redirectedOffDomain = finalHost !== lowerHost && !finalHost.endsWith("." + lowerHost) && !lowerHost.endsWith("." + finalHost);
    } catch {}

    // Ask Lovable AI to classify
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      // Without AI, be conservative
      return new Response(JSON.stringify({ verdict: "suspicious", score: 55, reason: "AI screener unavailable; queued for manual review" }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const prompt = `You are a safety screener for an AI tool directory. Decide whether this URL is safe to auto-publish.

Submitted name: ${String(name ?? "").slice(0, 200)}
Submitted description: ${String(description ?? "").slice(0, 500)}
URL: ${meta.finalUrl}
Page title: ${meta.title.slice(0, 200)}
Page meta description: ${meta.description.slice(0, 300)}
Redirected off original domain: ${redirectedOffDomain}

Return a JSON object with these exact keys:
- "verdict": one of "safe", "suspicious", "blocked"
- "score": integer 0-100 (100 = totally safe legit AI tool; 0 = malware/phishing/scam)
- "reason": one short sentence explaining the verdict

Rules:
- "blocked" for phishing, malware, wallet drainers, scams, NSFW/porn, illegal content, or clearly non-AI content pretending to be an AI tool.
- "suspicious" for parked domains, thin/broken pages, off-domain redirects, unclear content, or anything you can't confirm as a legitimate AI product.
- "safe" only for clearly legitimate, working AI-related products/services.
Return ONLY the JSON object, no markdown, no prose.`;

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      console.error("AI gateway failure", aiRes.status, errText);
      return new Response(JSON.stringify({ verdict: "suspicious", score: 50, reason: "AI screener failed; queued for manual review" }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const aiJson = await aiRes.json();
    let content = aiJson?.choices?.[0]?.message?.content ?? "";
    if (typeof content !== "string") content = JSON.stringify(content);
    let parsedVerdict: { verdict?: string; score?: number; reason?: string } = {};
    try {
      parsedVerdict = JSON.parse(content);
    } catch {
      const match = content.match(/\{[\s\S]*\}/);
      if (match) { try { parsedVerdict = JSON.parse(match[0]); } catch {} }
    }

    let verdict = String(parsedVerdict.verdict ?? "suspicious").toLowerCase();
    if (!["safe", "suspicious", "blocked"].includes(verdict)) verdict = "suspicious";
    let score = Number(parsedVerdict.score);
    if (!Number.isFinite(score)) score = 50;
    score = Math.max(0, Math.min(100, Math.round(score)));
    const reason = String(parsedVerdict.reason ?? "").slice(0, 500) || "Screened by AI safety model";

    if (redirectedOffDomain && verdict === "safe") {
      verdict = "suspicious";
      score = Math.min(score, 65);
    }

    return new Response(JSON.stringify({ verdict, score, reason, finalUrl: meta.finalUrl, title: meta.title }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("screen-tool-url error", err);
    return new Response(JSON.stringify({ verdict: "suspicious", score: 50, reason: "Screener error; queued for manual review" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});