/**
 * Central external-link sanitizer.
 *
 * Some destinations reject unknown query parameters (or any params at all)
 * with ERR_BLOCKED_BY_RESPONSE — v0.dev is the canonical example: opening
 * https://v0.dev/?via=aiwebtools returns a blocked response while
 * https://v0.dev/ loads fine.
 *
 * Affiliate tagging (?via=aiwebtools) stays the default for every partner
 * destination. We only strip it for hosts that have no affiliate program AND
 * are known to reject/ignore the parameter.
 */

const AFFILIATE_PARAMS = ['via', 'ref', 'aff'];

/** Hosts (and their subdomains) where the affiliate param must NOT be sent. */
const NO_AFFILIATE_HOSTS = [
  'v0.dev',
  'vercel.com',
  'google.com',
  'google.dev',
  'gemini.google.com',
  'youtube.com',
  'youtu.be',
  'openai.com',
  'chatgpt.com',
  'chat.openai.com',
  'sora.com',
  'anthropic.com',
  'claude.ai',
  'x.ai',
  'grok.com',
  'meta.ai',
  'microsoft.com',
  'bing.com',
  'copilot.microsoft.com',
  'apple.com',
  'github.com',
  'github.io',
  'huggingface.co',
  'deepmind.google',
  'nvidia.com',
  'adobe.com',
  'aws.amazon.com',
  'amazon.com',
  'ibm.com',
  'mistral.ai',
  'deepseek.com',
  'qwen.ai',
  'kimi.com',
  'perplexity.ai',
  'notebooklm.google.com',
];

const matchesHost = (hostname: string, entry: string): boolean =>
  hostname === entry || hostname.endsWith(`.${entry}`);

export const shouldStripAffiliate = (hostname: string): boolean =>
  NO_AFFILIATE_HOSTS.some((entry) => matchesHost(hostname.toLowerCase(), entry));

/**
 * Returns a safe, openable URL. Never throws — falls back to the raw input.
 */
export const sanitizeExternalUrl = (rawUrl: string): string => {
  const trimmed = (rawUrl || '').trim();
  if (!trimmed) return trimmed;
  // Internal / sentinel schemes pass through untouched
  if (!/^https?:\/\//i.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);

    if (shouldStripAffiliate(url.hostname)) {
      AFFILIATE_PARAMS.forEach((param) => url.searchParams.delete(param));
    }

    // Strip empty trailing "?" so hosts that reject stray params stay happy
    let out = url.toString();
    if (out.endsWith('?')) out = out.slice(0, -1);
    return out;
  } catch {
    return trimmed;
  }
};
