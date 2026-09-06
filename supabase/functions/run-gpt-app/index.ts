// Streams a hosted AIWebTools GPT. Members only. Instructions stay server-side.
// Supports image generation (Nano Banana) for bots whose instructions require it.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const DAILY_LIMIT = 60;
const MAX_HISTORY = 24;
const CHAT_URL = "https://ai.gateway.lovable.dev/v1/chat/completions";
const IMAGE_URL = "https://ai.gateway.lovable.dev/v1/images/generations";
const IMAGE_MODEL = "google/gemini-3.1-flash-image";
const SIGNED_URL_TTL = 60 * 60 * 24 * 365;

const IMAGE_TOOL = {
  type: "function",
  function: {
    name: "generate_image",
    description:
      "Create an image, illustration, diagram, infographic, logo or any other visual for the user. Use it whenever a visual would answer better than text, or whenever the user asks for one.",
    parameters: {
      type: "object",
      properties: {
        prompt: {
          type: "string",
          description:
            "A rich, detailed visual description of the image to create, including style, composition, colours and any text that must appear inside the image.",
        },
      },
      required: ["prompt"],
      additionalProperties: false,
    },
  },
};

interface ChatMsg {
  role: string;
  content: string | null;
  tool_calls?: unknown;
  tool_call_id?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) return json({ error: "AI is not configured" }, 500);

  const authHeader = req.headers.get("Authorization") || "";
  if (!authHeader.startsWith("Bearer ")) return json({ error: "Please sign in to use this tool." }, 401);

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  let userId: string | undefined;
  try {
    const authClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );
    const { data } = await authClient.auth.getClaims(authHeader.replace("Bearer ", ""));
    userId = data?.claims?.sub as string | undefined;
  } catch (_e) {
    userId = undefined;
  }
  if (!userId) return json({ error: "Please sign in to use this tool." }, 401);

  let body: { slug?: string; messages?: { role: string; content: string }[]; conversationId?: string | null } = {};
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  const slug = typeof body.slug === "string" ? body.slug.slice(0, 120) : "";
  const incoming = Array.isArray(body.messages) ? body.messages : [];
  if (!slug || incoming.length === 0) return json({ error: "Invalid request" }, 400);

  const messages = incoming
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 8000) }));
  if (messages.length === 0) return json({ error: "Invalid request" }, 400);

  // Daily usage cap
  const today = new Date().toISOString().slice(0, 10);
  const { data: usage } = await admin
    .from("gpt_usage")
    .select("message_count")
    .eq("user_id", userId)
    .eq("usage_date", today)
    .maybeSingle();
  const used = usage?.message_count ?? 0;
  if (used >= DAILY_LIMIT) {
    return json(
      { error: `You have reached today's limit of ${DAILY_LIMIT} messages. It resets at midnight UTC.` },
      429,
    );
  }

  const { data: app } = await admin
    .from("gpt_apps")
    .select("slug, display_name, model, is_active, supports_images")
    .eq("slug", slug)
    .maybeSingle();
  if (!app || !app.is_active) return json({ error: "This tool is not available." }, 404);

  const { data: promptRow } = await admin
    .from("gpt_app_prompts")
    .select("system_prompt")
    .eq("app_slug", slug)
    .maybeSingle();
  if (!promptRow?.system_prompt) return json({ error: "This tool is not available." }, 404);

  const { data: profile } = await admin
    .from("profiles")
    .select("display_name")
    .eq("id", userId)
    .maybeSingle();

  let systemPrompt = promptRow.system_prompt;
  if (profile?.display_name) {
    systemPrompt += `\n\nThe member you are speaking with is called ${profile.display_name}. Remember details they share during this conversation and refer back to them naturally.`;
  }
  if (app.supports_images) {
    systemPrompt +=
      "\n\nYou can create images. Call the generate_image tool whenever a picture, illustration, diagram, infographic, chart, logo or any other visual would help — and always when the user asks for one. Describe the visual richly in the tool prompt.";
  }

  // Conversation bookkeeping
  let conversationId = body.conversationId || null;
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!conversationId) {
    const { data: conv } = await admin
      .from("gpt_conversations")
      .insert({
        user_id: userId,
        app_slug: slug,
        title: (lastUser?.content || app.display_name).slice(0, 80),
      })
      .select("id")
      .single();
    conversationId = conv?.id ?? null;
  }
  if (conversationId && lastUser) {
    await admin.from("gpt_messages").insert({
      conversation_id: conversationId,
      user_id: userId,
      role: "user",
      content: lastUser.content,
    });
  }

  await admin.from("gpt_usage").upsert(
    { user_id: userId, usage_date: today, message_count: used + 1, updated_at: new Date().toISOString() },
    { onConflict: "user_id,usage_date" },
  );

  const callGateway = (payload: Record<string, unknown>) =>
    fetch(CHAT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Lovable-API-Key": LOVABLE_API_KEY },
      body: JSON.stringify(payload),
    });

  const basePayload = {
    model: app.model || "google/gemini-3.7-flash",
    stream: true,
    ...(app.supports_images ? { tools: [IMAGE_TOOL] } : {}),
  };

  const upstream = await callGateway({
    ...basePayload,
    messages: [{ role: "system", content: systemPrompt }, ...messages],
  });

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    console.error("gateway error", upstream.status, detail.slice(0, 400));
    if (upstream.status === 429) return json({ error: "Our AI is busy right now. Try again in a moment." }, 429);
    if (upstream.status === 402) {
      return json({ error: "The in-site AI has run out of credits for now. Please try again later." }, 402);
    }
    return json({ error: "The AI could not respond right now." }, 502);
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const frame = (text: string) =>
    encoder.encode(`data: ${JSON.stringify({ choices: [{ delta: { content: text } }] })}\n\n`);

  let assistant = "";

  const makeImage = async (prompt: string): Promise<string> => {
    const res = await fetch(IMAGE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Lovable-API-Key": LOVABLE_API_KEY },
      body: JSON.stringify({
        model: IMAGE_MODEL,
        messages: [{ role: "user", content: prompt }],
        modalities: ["image", "text"],
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("image error", res.status, detail.slice(0, 300));
      throw new Error("image failed");
    }
    const payload = await res.json();
    const b64 = payload?.data?.[0]?.b64_json;
    if (!b64) throw new Error("image failed");
    const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    const path = `${userId}/${slug}/${crypto.randomUUID()}.png`;
    const { error: upErr } = await admin.storage
      .from("gpt-images")
      .upload(path, bytes, { contentType: "image/png", upsert: false });
    if (upErr) throw new Error("image failed");
    const { data: signed } = await admin.storage.from("gpt-images").createSignedUrl(path, SIGNED_URL_TTL);
    if (!signed?.signedUrl) throw new Error("image failed");
    return signed.signedUrl;
  };

  // Reads an upstream SSE stream, forwards text deltas, collects tool calls.
  const pump = async (
    res: Response,
    controller: ReadableStreamDefaultController<Uint8Array>,
  ): Promise<{ name: string; args: string; id: string }[]> => {
    const reader = res.body!.getReader();
    const calls: { name: string; args: string; id: string }[] = [];
    let buffer = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const payload = line.slice(6).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          const delta = JSON.parse(payload)?.choices?.[0]?.delta;
          if (typeof delta?.content === "string" && delta.content) {
            assistant += delta.content;
            controller.enqueue(frame(delta.content));
          }
          if (Array.isArray(delta?.tool_calls)) {
            for (const tc of delta.tool_calls) {
              const index = tc.index ?? 0;
              calls[index] = calls[index] || { name: "", args: "", id: "" };
              if (tc.id) calls[index].id = tc.id;
              if (tc.function?.name) calls[index].name += tc.function.name;
              if (tc.function?.arguments) calls[index].args += tc.function.arguments;
            }
          }
        } catch {
          /* partial frame */
        }
      }
    }
    return calls.filter(Boolean);
  };

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const calls = await pump(upstream, controller);
        const imageCall = calls.find((c) => c.name === "generate_image");

        if (imageCall) {
          controller.enqueue(frame("\n\n_Creating your image…_\n\n"));
          let toolResult = "The image could not be created this time. Apologise briefly and offer to try again.";
          try {
            const parsed = JSON.parse(imageCall.args || "{}");
            const url = await makeImage(String(parsed.prompt || "").slice(0, 2000));
            const md = `![Generated image](${url})`;
            assistant += `\n\n${md}\n\n`;
            controller.enqueue(frame(`${md}\n\n`));
            toolResult = "The image was created and is already shown to the user. Briefly describe it and offer refinements. Do not include a markdown image link yourself.";
          } catch (_e) {
            /* handled by toolResult */
          }

          const follow = await callGateway({
            ...basePayload,
            messages: [
              { role: "system", content: systemPrompt },
              ...messages,
              {
                role: "assistant",
                content: null,
                tool_calls: [
                  {
                    id: imageCall.id || "call_1",
                    type: "function",
                    function: { name: "generate_image", arguments: imageCall.args || "{}" },
                  },
                ],
              } as ChatMsg,
              { role: "tool", tool_call_id: imageCall.id || "call_1", content: toolResult } as ChatMsg,
            ],
          });
          if (follow.ok && follow.body) {
            await pump(follow, controller);
          }
        }
      } catch (err) {
        console.error("stream error", err);
      } finally {
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
        if (conversationId && assistant.trim()) {
          await admin.from("gpt_messages").insert({
            conversation_id: conversationId,
            user_id: userId,
            role: "assistant",
            content: assistant.slice(0, 40000),
          });
          await admin
            .from("gpt_conversations")
            .update({ updated_at: new Date().toISOString() })
            .eq("id", conversationId);
        }
      }
    },
  });

  return new Response(stream, {
    headers: {
      ...corsHeaders,
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "X-Conversation-Id": conversationId ?? "",
      "Access-Control-Expose-Headers": "X-Conversation-Id",
    },
  });
});
