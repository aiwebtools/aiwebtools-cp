// Streams a hosted AIWebTools GPT. Members only. Instructions stay server-side.
// Supports image generation (Nano Banana) for bots whose instructions require it.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const DAILY_LIMIT = 60;
const GUEST_DAILY_LIMIT = 10;
const MAX_HISTORY = 24;
const CHAT_URL = "https://ai.gateway.lovable.dev/v1/chat/completions";
const IMAGE_URL = "https://ai.gateway.lovable.dev/v1/images/generations";
const IMAGE_MODEL = "openai/gpt-image-2.5-sunburst";
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

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  let userId: string | undefined;
  if (authHeader.startsWith("Bearer ")) {
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
  }

  let body: {
    slug?: string;
    messages?: { role: string; content: string }[];
    conversationId?: string | null;
    guestId?: string;
  } = {};
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  // Guests may run tools for free with a smaller daily allowance.
  const isGuest = !userId;
  let guestKey = "";
  if (isGuest) {
    const rawGuestId = typeof body.guestId === "string" ? body.guestId.slice(0, 80) : "";
    if (rawGuestId.length < 8) return json({ error: "Invalid request" }, 400);
    const ip =
      (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";
    const digest = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(`${rawGuestId}|${ip}`),
    );
    guestKey = Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  const slug = typeof body.slug === "string" ? body.slug.slice(0, 120) : "";
  const incoming = Array.isArray(body.messages) ? body.messages : [];
  if (!slug || incoming.length === 0) return json({ error: "Invalid request" }, 400);

  const messages = incoming
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 8000) }));
  if (messages.length === 0) return json({ error: "Invalid request" }, 400);

  // Daily usage cap (members get the full allowance, guests a free taster)
  const today = new Date().toISOString().slice(0, 10);
  const limit = isGuest ? GUEST_DAILY_LIMIT : DAILY_LIMIT;
  const { data: usage } = isGuest
    ? await admin
        .from("gpt_guest_usage")
        .select("message_count")
        .eq("guest_key", guestKey)
        .eq("usage_date", today)
        .maybeSingle()
    : await admin
        .from("gpt_usage")
        .select("message_count")
        .eq("user_id", userId)
        .eq("usage_date", today)
        .maybeSingle();
  const used = usage?.message_count ?? 0;
  if (used >= limit) {
    return json(
      {
        error: isGuest
          ? `You have used today's ${GUEST_DAILY_LIMIT} free messages. Create a free account to keep going, or come back tomorrow.`
          : `You have reached today's limit of ${DAILY_LIMIT} messages. It resets at midnight UTC.`,
      },
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

  const { data: profile } = userId
    ? await admin.from("profiles").select("display_name").eq("id", userId).maybeSingle()
    : { data: null as { display_name?: string } | null };

  let systemPrompt = promptRow.system_prompt;
  if (profile?.display_name) {
    systemPrompt += `\n\nThe member you are speaking with is called ${profile.display_name}. Remember details they share during this conversation and refer back to them naturally.`;
  }
  systemPrompt +=
    "\n\nYou can create images. Call the generate_image tool whenever the user explicitly asks for a picture, image, illustration, diagram, infographic, chart, logo, artwork, visual, scene, portrait, design, or photo. Never merely promise to create it: call the tool in the same response. Describe the visual richly and preserve every requested detail in the tool prompt.";

  // Conversation bookkeeping (members only — guest chats are not stored)
  let conversationId = body.conversationId || null;
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (userId) {
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
  } else {
    conversationId = null;
  }

  if (isGuest) {
    await admin.from("gpt_guest_usage").upsert(
      {
        guest_key: guestKey,
        usage_date: today,
        message_count: used + 1,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "guest_key,usage_date" },
    );
  } else {
    await admin.from("gpt_usage").upsert(
      { user_id: userId, usage_date: today, message_count: used + 1, updated_at: new Date().toISOString() },
      { onConflict: "user_id,usage_date" },
    );
  }

  const callGateway = (payload: Record<string, unknown>) =>
    fetch(CHAT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Lovable-API-Key": LOVABLE_API_KEY },
      body: JSON.stringify(payload),
    });

  const basePayload = {
    model: app.model || "google/gemini-3.7-flash",
    stream: true,
    tools: [IMAGE_TOOL],
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
    const requestImage = () => fetch(IMAGE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Lovable-API-Key": LOVABLE_API_KEY },
      body: JSON.stringify({ model: IMAGE_MODEL, prompt, stream: true, partial_images: 1 }),
    });
    let res = await requestImage();
    if (res.status === 429 || res.status >= 500) {
      const retryAfter = Math.min(Number(res.headers.get("Retry-After") || "2"), 8);
      await new Promise((resolve) => setTimeout(resolve, Math.max(1, retryAfter) * 1000));
      res = await requestImage();
    }
    if (!res.ok || !res.body) {
      const detail = await res.text().catch(() => "");
      console.error("image error", res.status, detail.slice(0, 300));
      if (res.status === 402) throw new Error("Picture credits are temporarily unavailable.");
      if (res.status === 429) throw new Error("Picture generation is busy. Please try again shortly.");
      throw new Error("The picture could not be created this time.");
    }
    const imageReader = res.body.getReader();
    const imageDecoder = new TextDecoder();
    let imageBuffer = "";
    let b64 = "";
    let imageError = "";
    let completed = false;
    while (true) {
      const { done, value } = await imageReader.read();
      if (done) break;
      imageBuffer += imageDecoder.decode(value, { stream: true });
      const frames = imageBuffer.split("\n\n");
      imageBuffer = frames.pop() ?? "";
      for (const frameText of frames) {
        const eventName = frameText.split("\n").find((line) => line.startsWith("event:"))?.slice(6).trim() ?? "";
        const data = frameText.split("\n").filter((line) => line.startsWith("data:"))
          .map((line) => line.slice(5).trim()).join("\n");
        if (!data || data === "[DONE]") continue;
        try {
          const payload = JSON.parse(data);
          if (eventName === "error" || payload?.type === "error") {
            imageError = payload?.error?.message || "Picture generation failed.";
          }
          if (eventName === "image_generation.completed" || payload?.type === "image_generation.completed") {
            b64 = payload?.b64_json || "";
            completed = Boolean(b64);
          }
        } catch {
          console.warn("image stream frame could not be parsed");
        }
      }
    }
    if (imageError) throw new Error(imageError);
    if (!completed || !b64) throw new Error("Picture generation ended before the final image was ready.");
    const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    const path = `${userId ?? `guest-${guestKey.slice(0, 16)}`}/${slug}/${crypto.randomUUID()}.png`;
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
        const imageCalls = calls.filter((c) => c.name === "generate_image").slice(0, 2);

        if (imageCalls.length > 0) {
          controller.enqueue(frame("\n\n_Creating your image…_\n\n"));
          const toolResults: ChatMsg[] = [];
          for (const [index, imageCall] of imageCalls.entries()) {
            let toolResult = "The picture could not be created this time. Explain that clearly and offer to try again.";
            try {
              const parsed = JSON.parse(imageCall.args || "{}");
              const url = await makeImage(String(parsed.prompt || "").slice(0, 4000));
              const md = `![Generated image ${index + 1}](${url})`;
              assistant += `\n\n${md}\n\n`;
              controller.enqueue(frame(`${md}\n\n`));
              toolResult = "The picture was created and is already visible in the chat. Briefly describe it and offer refinements. Do not repeat the image link.";
            } catch (error) {
              toolResult = error instanceof Error ? error.message : toolResult;
              controller.enqueue(frame(`\n\n_${toolResult}_\n\n`));
            }
            toolResults.push({ role: "tool", tool_call_id: imageCall.id || `call_${index + 1}`, content: toolResult });
          }

          const follow = await callGateway({
            ...basePayload,
            messages: [
              { role: "system", content: systemPrompt },
              ...messages,
              {
                role: "assistant",
                content: null,
                tool_calls: imageCalls.map((imageCall, index) => ({
                    id: imageCall.id || `call_${index + 1}`,
                    type: "function",
                    function: { name: "generate_image", arguments: imageCall.args || "{}" },
                  })),
              } as ChatMsg,
              ...toolResults,
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
