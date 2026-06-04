import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const body = await req.json();
    // Use the anon key (the error_logs table has an RLS policy allowing anon INSERT).
    // Pass through the caller's Authorization header so RLS evaluates under their real role.
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization') ?? '' },
        },
      }
    );

    // Bound metadata: must be a plain object, serialized JSON ≤ 4 KB, ≤ 50 keys.
    let safeMetadata: Record<string, unknown> | null = null;
    if (
      body.metadata &&
      typeof body.metadata === 'object' &&
      !Array.isArray(body.metadata)
    ) {
      const keys = Object.keys(body.metadata);
      if (keys.length <= 50) {
        try {
          const serialized = JSON.stringify(body.metadata);
          if (serialized.length <= 4096) {
            safeMetadata = body.metadata as Record<string, unknown>;
          }
        } catch {
          safeMetadata = null;
        }
      }
    }

    const { error } = await supabase.from('error_logs').insert({
      error_type: String(body.error_type || 'unknown').slice(0, 200),
      message: String(body.message || 'no message').slice(0, 4000),
      stack: body.stack ? String(body.stack).slice(0, 8000) : null,
      source: body.source ? String(body.source).slice(0, 500) : null,
      line_number: typeof body.line_number === 'number' ? body.line_number : null,
      column_number: typeof body.column_number === 'number' ? body.column_number : null,
      url: body.url ? String(body.url).slice(0, 1000) : null,
      user_agent: body.user_agent ? String(body.user_agent).slice(0, 500) : null,
      session_id: body.session_id ? String(body.session_id).slice(0, 100) : null,
      component_stack: body.component_stack ? String(body.component_stack).slice(0, 8000) : null,
      severity: ['error', 'warning', 'fatal', 'info'].includes(body.severity) ? body.severity : 'error',
      metadata: safeMetadata,
    });

    if (error) {
      console.error('Insert failed:', error);
      return new Response(JSON.stringify({ ok: false }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('log-error exception:', e);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});