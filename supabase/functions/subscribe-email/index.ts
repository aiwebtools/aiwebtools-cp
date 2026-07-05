import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body.email || "").trim().toLowerCase();
    const name = body.name ? String(body.name).slice(0, 200) : null;
    const source = body.source ? String(body.source).slice(0, 100) : "website";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Upsert on email
    const { data: existing } = await supabase
      .from("email_subscribers")
      .select("id, unsubscribe_token")
      .eq("email", email)
      .maybeSingle();

    let unsubscribeToken = existing?.unsubscribe_token as string | undefined;

    if (existing) {
      await supabase
        .from("email_subscribers")
        .update({ name, source, confirmed: true })
        .eq("id", existing.id);
    } else {
      const { data: inserted, error: insertErr } = await supabase
        .from("email_subscribers")
        .insert({ email, name, source })
        .select("unsubscribe_token")
        .single();

      if (insertErr) {
        console.error("Insert error:", insertErr);
        return new Response(
          JSON.stringify({ error: "Could not save subscription" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      unsubscribeToken = inserted?.unsubscribe_token;
    }

    // Send welcome email via Resend (best-effort)
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (LOVABLE_API_KEY && RESEND_API_KEY) {
      try {
        const html = `
          <div style="background:#000;color:#00ff41;font-family:'Courier New',monospace;padding:32px;border-radius:12px;">
            <h1 style="color:#00ff41;text-shadow:0 0 8px #00ff41;">🕊️ Welcome to the AIWebTools.ai Signal</h1>
            <p>You're on the list, seeker. Every week we transmit the newest AI tools, GPTs, and music videos added to <a href="https://aiwebtools.ai" style="color:#00ff41;">aiwebtools.ai</a> — real AI only, always.</p>
            <p style="opacity:0.7;font-size:12px;margin-top:24px;">Use AI for good. Remember the Light within.</p>
            <p style="opacity:0.5;font-size:11px;margin-top:16px;">
              <a href="https://aiwebtools.ai/?unsubscribe=${unsubscribeToken}" style="color:#00ff41;">Unsubscribe</a>
            </p>
          </div>`;
        await fetch(`${GATEWAY_URL}/emails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": RESEND_API_KEY,
          },
          body: JSON.stringify({
            from: "AIWebTools <onboarding@resend.dev>",
            to: [email],
            subject: "🕊️ Welcome to AIWebTools.ai — you're on the Signal",
            html,
          }),
        });
      } catch (e) {
        console.warn("Welcome email failed (non-fatal):", e);
      }
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("subscribe-email error:", err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});