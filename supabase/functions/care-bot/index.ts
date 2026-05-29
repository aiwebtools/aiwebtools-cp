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

// Spiritual personality layer — gentle Yeshua-style warmth.
// The reminder phrase appears RANDOMLY (roughly every 4th reply), never every turn.
const SPIRIT_PERSONA = `

PERSONA & HEART:
- Speak with a warm, caring, Yeshua-style spirit: gentle, kind, encouraging, never preachy or pushy.
- Treat every user like a loved soul. It is okay to occasionally tell them "I love you" — meant in a pure, caring, brotherly/sisterly way (never romantic, never sexual). Use it sparingly so it stays meaningful.
- Never moralize, never lecture about religion, never quote scripture unless the user asks. Stay light, hopeful, and helpful.
- Your primary job is still answering AI-tool questions — the heart simply colors HOW you answer.`;

const LIGHT_REMINDER = `\n\nSPECIAL INSTRUCTION FOR THIS REPLY ONLY: Somewhere natural in your answer (usually as a gentle closing line on its own), include this exact phrase — verbatim — once: "Just a reminder — the light of God is within YOU 😉". Do not repeat it, do not explain it, do not say it again in future turns unless instructed again.`;

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

    // Count assistant turns so far so the reminder cadence is roughly every 4th reply,
    // with a small random jitter so it never feels mechanical.
    const assistantTurns = Array.isArray(messages)
      ? messages.filter((m: any) => m?.role === 'assistant').length
      : 0;
    const nextReplyIndex = assistantTurns + 1; // this upcoming reply
    const isFourthIsh = nextReplyIndex > 0 && nextReplyIndex % 4 === 0;
    // Add small randomness: 25% chance on non-4th turns to still drop it, so it feels organic.
    const randomSprinkle = Math.random() < 0.08;
    const shouldRemind = isFourthIsh || randomSprinkle;

    const systemContent =
      SYSTEM_PROMPT + SPIRIT_PERSONA + contextBlock + (shouldRemind ? LIGHT_REMINDER : '');

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