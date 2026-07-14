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

  // Authorization: allow either (a) a shared cron secret header, or
  // (b) an authenticated admin JWT verified server-side via has_role().
  const CRON_SECRET = Deno.env.get("DIGEST_CRON_SECRET");
  const providedCronSecret = req.headers.get("x-cron-secret") || "";
  const cronAuthorized = !!CRON_SECRET && providedCronSecret === CRON_SECRET;

  let adminAuthorized = false;
  const authHeader = req.headers.get("Authorization") || "";
  if (!cronAuthorized && authHeader.startsWith("Bearer ")) {
    try {
      const authClient = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_ANON_KEY")!,
        { global: { headers: { Authorization: authHeader } } },
      );
      const token = authHeader.replace("Bearer ", "");
      const { data: claimsData } = await authClient.auth.getClaims(token);
      const userId = claimsData?.claims?.sub;
      if (userId) {
        const adminClient = createClient(
          Deno.env.get("SUPABASE_URL")!,
          Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
        );
        const { data: isAdmin } = await adminClient.rpc("has_role", {
          _user_id: userId,
          _role: "admin",
        });
        adminAuthorized = isAdmin === true;
      }
    } catch (e) {
      console.warn("digest auth check failed:", e);
    }
  }

  if (!cronAuthorized && !adminAuthorized) {
    return new Response(
      JSON.stringify({ error: "Unauthorized" }),
      { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Email service not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  let body: { subject?: string; message?: string } = {};
  try {
    body = await req.json();
  } catch {}

  const subject = body.subject || "🕊️ AIWebTools.ai — This Week's New AI Tools";
  const message =
    body.message ||
    "New AI tools, custom GPTs, and music videos have been added this week. Come explore the latest at aiwebtools.ai — 4,000+ real AI tools waiting for you.";

  const { data: subs, error } = await supabase
    .from("email_subscribers")
    .select("email, unsubscribe_token")
    .eq("confirmed", true)
    .eq("pref_weekly_digest", true);

  if (error) {
    console.error("Fetch subscribers error:", error);
    return new Response(
      JSON.stringify({ error: "Could not load subscribers" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  let sent = 0;
  let failed = 0;
  for (const s of subs || []) {
    try {
      const html = `
        <div style="background:#000;color:#00ff41;font-family:'Courier New',monospace;padding:32px;border-radius:12px;">
          <h1 style="color:#00ff41;text-shadow:0 0 8px #00ff41;">🕊️ AIWebTools.ai Weekly Signal</h1>
          <p>${message.replace(/</g, "&lt;")}</p>
          <p style="margin-top:24px;">
            <a href="https://aiwebtools.ai" style="background:#00ff41;color:#000;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Explore Now →</a>
          </p>
          <p style="opacity:0.5;font-size:11px;margin-top:24px;">
            <a href="https://aiwebtools.ai/?unsubscribe=${s.unsubscribe_token}" style="color:#00ff41;">Unsubscribe</a>
          </p>
        </div>`;
      const r = await fetch(`${GATEWAY_URL}/emails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "X-Connection-Api-Key": RESEND_API_KEY,
        },
        body: JSON.stringify({
          from: "AIWebTools <onboarding@resend.dev>",
          to: [s.email],
          subject,
          html,
        }),
      });
      if (r.ok) sent++;
      else failed++;
    } catch (e) {
      console.warn("send error:", e);
      failed++;
    }
  }

  await supabase
    .from("email_subscribers")
    .update({ last_sent_at: new Date().toISOString() })
    .eq("confirmed", true)
    .eq("pref_weekly_digest", true);

  return new Response(
    JSON.stringify({ ok: true, sent, failed, total: subs?.length || 0 }),
    { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
  );
});