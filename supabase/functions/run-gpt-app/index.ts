// Streams a hosted AIWebTools GPT. Members only. Instructions stay server-side.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const DAILY_LIMIT = 60;
const MAX_HISTORY = 24;

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
    .select("slug, display_name, model, is_active")
    .eq("slug", slug)
    .maybeSingle();
  if (!app || !app.is_active) return json({ error: "This tool is not available." }, 404);

  const { data: promptRow } = await admin
    .from("gpt_app_prompts")
    .select("system_prompt")
    .eq("app_slug", slug)
    .maybeSingle();
  if (!promptRow?.system_prompt) return json({ error: "This tool is not available." }, 404);

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

  const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Lovable-API-Key": LOVABLE_API_KEY,
    },
    body: JSON.stringify({
      model: app.model || "google/gemini-3.7-flash",
      stream: true,
      messages: [{ role: "system", content: promptRow.system_prompt }, ...messages],
    }),
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

  // Pass the stream through while collecting the reply for the saved conversation.
  let assistant = "";
  const decoder = new TextDecoder();
  const transform = new TransformStream<Uint8Array, Uint8Array>({
    transform(chunk, controller) {
      const text = decoder.decode(chunk, { stream: true });
      for (const line of text.split("\n")) {
        if (!line.startsWith("data: ")) continue;
        const payload = line.slice(6).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          const delta = JSON.parse(payload)?.choices?.[0]?.delta?.content;
          if (typeof delta === "string") assistant += delta;
        } catch { /* partial frame */ }
      }
      controller.enqueue(chunk);
    },
    async flush() {
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
    },
  });

  return new Response(upstream.body.pipeThrough(transform), {
    headers: {
      ...corsHeaders,
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "X-Conversation-Id": conversationId ?? "",
      "Access-Control-Expose-Headers": "X-Conversation-Id",
    },
  });
});
