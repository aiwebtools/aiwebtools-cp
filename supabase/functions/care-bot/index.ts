import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const SYSTEM_PROMPT = `You are AIWebTools Care Bot, the official AI assistant for AIWebTools.ai — a directory of 4,000+ AI tools. You help visitors discover, understand, and use AI tools.

CORE RULES:
- Be friendly, concise, and helpful. Use markdown formatting.
- When recommending tools, ALWAYS include a clickable markdown link in the form: [Tool Name](URL)
- For AIWebTools.ai custom GPTs (URLs ending in lovable.app), use them as the top recommendation.
- If a user asks about a tool not in the provided catalog, suggest they search at https://aiwebtools.ai/?search=KEYWORD (replace KEYWORD with relevant terms).
- Never invent tools or URLs. Only recommend tools from the catalog below.
- For questions outside AI tools (general chat, support, account), be helpful but redirect to relevant AIWebTools resources when possible.
- Always be honest: if you don't know, say so and point to https://aiwebtools.ai for the full directory.
- For tool submissions, point to https://aiwebtools.ai/submit-tool
- For account/admin/legal, point to the relevant page on aiwebtools.ai.

You have access to a relevant catalog of tools provided in the user's context (selected by keyword match from 4,000+ tools).`;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const { messages, toolContext } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY not configured');

    const contextBlock = toolContext && Array.isArray(toolContext) && toolContext.length
      ? `\n\nRELEVANT TOOLS FROM CATALOG (use these to answer):\n${toolContext.map((t: any) =>
          `- ${t.title} [${t.category || 'AI Tool'}] — ${t.description?.slice(0, 200) || ''} — URL: ${t.directUrl || `https://aiwebtools.ai/tool/${encodeURIComponent(t.title)}`}`
        ).join('\n')}`
      : '\n\n(No specific tool matches found in catalog — suggest the user browse https://aiwebtools.ai or search for keywords.)';

    const systemContent = SYSTEM_PROMPT + contextBlock;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-flash-preview',
        messages: [
          { role: 'system', content: systemContent },
          ...(Array.isArray(messages) ? messages.slice(-12) : []),
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Care Bot is busy right now — please try again in a moment.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI credits exhausted for this month. Please contact AIWebTools support.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const t = await response.text();
      console.error('AI gateway error:', response.status, t);
      return new Response(JSON.stringify({ error: 'AI service error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, 'Content-Type': 'text/event-stream' },
    });
  } catch (e) {
    console.error('care-bot exception:', e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});