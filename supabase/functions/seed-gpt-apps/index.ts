// Admin/cron-only: loads the canonical GPT library into the database.
// The operational instructions live server-side only and are never exposed to the browser.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import apps from "./apps.json" with { type: "json" };

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-cron-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type SeedApp = {
  slug: string;
  display_name: string;
  tool_title: string | null;
  tagline: string;
  greeting: string;
  starter_prompts: string[];
  system_prompt: string;
  source_file: string;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const CRON_SECRET = Deno.env.get("DIGEST_CRON_SECRET");
  const cronAuthorized = !!CRON_SECRET && req.headers.get("x-cron-secret") === CRON_SECRET;

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  let authorized = cronAuthorized;
  const authHeader = req.headers.get("Authorization") || "";
  if (!authorized && authHeader.startsWith("Bearer ")) {
    try {
      const authClient = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_ANON_KEY")!,
        { global: { headers: { Authorization: authHeader } } },
      );
      const { data } = await authClient.auth.getClaims(authHeader.replace("Bearer ", ""));
      const userId = data?.claims?.sub;
      if (userId) {
        const { data: isAdmin } = await admin.rpc("has_role", { _user_id: userId, _role: "admin" });
        authorized = isAdmin === true;
      }
    } catch (e) {
      console.warn("seed auth check failed", e);
    }
  }

  if (!authorized) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const list = apps as SeedApp[];
  let upserted = 0;
  const errors: string[] = [];

  for (let i = 0; i < list.length; i += 25) {
    const batch = list.slice(i, i + 25);
    const { error: appErr } = await admin.from("gpt_apps").upsert(
      batch.map((a) => ({
        slug: a.slug,
        display_name: a.display_name,
        tool_title: a.tool_title,
        tagline: a.tagline,
        greeting: a.greeting,
        starter_prompts: a.starter_prompts,
        source_file: a.source_file,
        is_active: true,
      })),
      { onConflict: "slug" },
    );
    if (appErr) {
      errors.push(appErr.message);
      continue;
    }
    const { error: promptErr } = await admin.from("gpt_app_prompts").upsert(
      batch.map((a) => ({ app_slug: a.slug, system_prompt: a.system_prompt })),
      { onConflict: "app_slug" },
    );
    if (promptErr) errors.push(promptErr.message);
    else upserted += batch.length;
  }

  return new Response(JSON.stringify({ ok: errors.length === 0, upserted, total: list.length, errors }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
