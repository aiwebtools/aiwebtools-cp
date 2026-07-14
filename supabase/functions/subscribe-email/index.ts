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
      .select("id, unsubscribe_token, confirmed, updated_at, created_at")
      .eq("email", email)
      .maybeSingle();

    let unsubscribeToken = existing?.unsubscribe_token as string | undefined;
    let shouldSendConfirmation = true;

    if (existing) {
      // Do NOT auto-confirm on re-submit. Only update profile fields.
      await supabase
        .from("email_subscribers")
        .update({ name, source })
        .eq("id", existing.id);

      // Already confirmed subscribers should not receive another email —
      // prevents using the endpoint as a mail relay to harass known addresses.
      if (existing.confirmed) {
        shouldSendConfirmation = false;
      } else {
        // Rate-limit confirmation resends to at most one per hour per email.
        const last = new Date(
          (existing.updated_at as string) || (existing.created_at as string) || 0,
        ).getTime();
        if (Date.now() - last < 60 * 60 * 1000) {
          shouldSendConfirmation = false;
        }
      }
    } else {
      const { data: inserted, error: insertErr } = await supabase
        .from("email_subscribers")
        .insert({ email, name, source, confirmed: false })
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

    // Send double opt-in CONFIRMATION email via Resend (best-effort).
    // Only fires for new or unconfirmed subscribers, at most once per hour.
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (shouldSendConfirmation && LOVABLE_API_KEY && RESEND_API_KEY && unsubscribeToken) {
      try {
        const confirmUrl = `https://aiwebtools.ai/?confirm=${unsubscribeToken}`;
        const html = `
          <div style="background:#000;color:#00ff41;font-family:'Courier New',monospace;padding:32px;border-radius:12px;">
            <h1 style="color:#00ff41;text-shadow:0 0 8px #00ff41;">🕊️ Confirm your AIWebTools.ai subscription</h1>
            <p>Someone (hopefully you) asked to join the AIWebTools.ai weekly signal. Confirm below to start receiving updates. If this wasn't you, ignore this email — you'll never hear from us again.</p>
            <p style="margin-top:24px;">
              <a href="${confirmUrl}" style="background:#00ff41;color:#000;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Confirm subscription →</a>
            </p>
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
            subject: "🕊️ Confirm your AIWebTools.ai subscription",
            html,
          }),
        });
      } catch (e) {
        console.warn("Confirmation email failed (non-fatal):", e);
      }
    }

    return new Response(
      JSON.stringify({ ok: true, pending_confirmation: true }),
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