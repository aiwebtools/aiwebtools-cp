// Screens a submitted tool URL for safety using Lovable AI Gateway.
// Returns { verdict: "safe" | "suspicious" | "blocked", score, reason }.
// SSRF-hardened: only public http(s) hosts are fetched; redirects are
// followed manually with DNS re-validation on every hop.
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const HARD_BLOCK_KEYWORDS = [
  "phishing", "verify-account", "wallet-drain", "seed-phrase", "porn", "nsfw",
  "xxx", "onlyfans", "casino", "gambl", "malware", "keygen", "crack",
];

const HARD_BLOCK_TLDS = [".zip", ".mov", ".click", ".xyz.link"];

const MAX_REDIRECTS = 4;
const MAX_BODY_BYTES = 512 * 1024; // hard cap on what we download

const BLOCKED_HOSTNAMES = new Set([
  "localhost", "metadata.google.internal", "instance-data", "169.254.169.254",
]);

function isPrivateIPv4(ip: string): boolean {
  const parts = ip.split(".").map((p) => parseInt(p, 10));
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return true; // malformed = unsafe
  const [a, b] = parts;
  if (a === 0 || a === 10 || a === 127) return true;               // loopback / private / "this" net
  if (a === 169 && b === 254) return true;                          // link-local (cloud metadata)
  if (a === 172 && b >= 16 && b <= 31) return true;                 // private
  if (a === 192 && b === 168) return true;                          // private
  if (a === 100 && b >= 64 && b <= 127) return true;                // CGNAT
  if (a >= 224) return true;                                        // multicast / reserved
  if (a === 192 && b === 0) return true;                            // IETF protocol assignments
  if (a === 198 && (b === 18 || b === 19)) return true;             // benchmarking
  if (a === 198 && b === 51) return true;                           // documentation
  if (a === 203 && b === 0) return true;                            // documentation
  return false;
}

function isPrivateIPv6(ip: string): boolean {
  const s = ip.toLowerCase();
  return (
    s === "::1" || s === "::" ||
    s.startsWith("fe80:") ||          // link-local
    s.startsWith("fc") || s.startsWith("fd") || // unique local
    s.startsWith("::ffff:127.") || s.startsWith("::ffff:10.") ||
    s.startsWith("::ffff:169.254") || s.startsWith("::ffff:192.168")
  );
}

// Numeric IP supplied directly in the URL must also be a public address.
function hostIsBlocked(hostname: string): boolean {
  const h = hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (BLOCKED_HOSTNAMES.has(h) || h.endsWith(".internal") || h.endsWith(".local")) return true;
  if (/^\d+\.\d+\.\d+\.\d+$/.test(h)) return isPrivateIPv4(h);
  if (h.includes(":")) return isPrivateIPv6(h);
  return false;
}

// Resolve DNS and refuse any hostname that points at a private/reserved IP.
async function resolvesToPrivateIP(hostname: string): Promise<boolean> {
  try {
    const [a, aaaa] = await Promise.allSettled([
      Deno.resolveDns(hostname, "A"),
      Deno.resolveDns(hostname, "AAAA"),
    ]);
    const addrs: string[] = [];
    if (a.status === "fulfilled") addrs.push(...a.value);
    if (aaaa.status === "fulfilled") addrs.push(...aaaa.value);
    if (addrs.length === 0) return true; // cannot resolve = do not fetch
    return addrs.some((ip) => (ip.includes(":") ? isPrivateIPv6(ip) : isPrivateIPv4(ip)));
  } catch {
    return true; // DNS failure = do not fetch
  }
}

async function validateTarget(url: URL): Promise<{ ok: boolean; reason: string }> {
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return { ok: false, reason: "Only http(s) URLs allowed" };
  }
  if (url.username || url.password) {
    return { ok: false, reason: "URLs with embedded credentials are not allowed" };
  }
  const hostname = url.hostname;
  if (hostIsBlocked(hostname)) {
    return { ok: false, reason: "Internal or private network addresses are not allowed" };
  }
  if (await resolvesToPrivateIP(hostname)) {
    return { ok: false, reason: "Host resolves to a private or reserved address" };
  }
  return { ok: true, reason: "" };
}

// Fetch with manual redirect following; every hop is re-validated so a
// public-looking URL cannot bounce us into an internal network.
async function fetchMeta(url: string): Promise<{ status: number; title: string; description: string; finalUrl: string } | null> {
  let current = url;
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    let parsed: URL;
    try { parsed = new URL(current); } catch { return null; }
    const check = await validateTarget(parsed);
    if (!check.ok) {
      console.warn("blocked fetch target", current, check.reason);
      return null;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    let res: Response;
    try {
      res = await fetch(current, {
        redirect: "manual",
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; AIWebToolsBot/1.0; +https://aiwebtools.ai)",
          "Accept": "text/html,application/xhtml+xml",
        },
      });
    } catch (err) {
      console.error("fetchMeta failed", err);
      return null;
    } finally {
      clearTimeout(timeout);
    }

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location");
      await res.body?.cancel().catch(() => {});
      if (!location) return null;
      try {
        current = new URL(location, current).href;
      } catch {
        return null;
      }
      continue;
    }

    // Cap download size: read at most MAX_BODY_BYTES then abort the rest.
    const reader = res.body?.getReader();
    if (!reader) return { status: res.status, title: "", description: "", finalUrl: res.url };
    const chunks: Uint8Array[] = [];
    let total = 0;
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done || !value) break;
        total += value.byteLength;
        if (total > MAX_BODY_BYTES) { chunks.push(value.slice(0, value.byteLength - (total - MAX_BODY_BYTES))); break; }
        chunks.push(value);
      }
    } catch { /* partial read is fine */ } finally {
      reader.cancel().catch(() => {});
    }
    const merged = new Uint8Array(Math.min(total, MAX_BODY_BYTES));
    let offset = 0;
    for (const c of chunks) { merged.set(c, offset); offset += c.byteLength; }

    const text = new TextDecoder("utf-8", { fatal: false }).decode(merged.slice(0, 50000));
    const title = /<title[^>]*>([^<]{0,300})<\/title>/i.exec(text)?.[1]?.trim() ?? "";
    const description = /<meta[^>]+name=["']description["'][^>]+content=["']([^"']{0,500})["']/i.exec(text)?.[1]?.trim() ?? "";
    return { status: res.status, title, description, finalUrl: res.url };
  }
  return null; // too many redirects
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { url, name, description } = await req.json();
    if (!url || typeof url !== "string" || url.length > 2048) {
      return new Response(JSON.stringify({ error: "valid url required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    let parsed: URL;
    try { parsed = new URL(url); } catch {
      return new Response(JSON.stringify({ verdict: "blocked", score: 0, reason: "Invalid URL format" }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return new Response(JSON.stringify({ verdict: "blocked", score: 0, reason: "Only http(s) URLs allowed" }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const target = await validateTarget(parsed);
    if (!target.ok) {
      return new Response(JSON.stringify({ verdict: "blocked", score: 0, reason: target.reason }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const lowerHost = parsed.hostname.toLowerCase();
    const lowerHref = parsed.href.toLowerCase();

    // Fast-fail block on obvious keywords / TLDs
    for (const kw of HARD_BLOCK_KEYWORDS) {
      if (lowerHref.includes(kw)) {
        return new Response(JSON.stringify({ verdict: "blocked", score: 5, reason: `URL contains blocked keyword: ${kw}` }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
    }
    for (const tld of HARD_BLOCK_TLDS) {
      if (lowerHost.endsWith(tld)) {
        return new Response(JSON.stringify({ verdict: "suspicious", score: 40, reason: `Uncommon/risky TLD: ${tld}` }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
    }

    // Fetch page metadata (validated at every redirect hop)
    const meta = await fetchMeta(url);
    if (!meta) {
      return new Response(JSON.stringify({ verdict: "suspicious", score: 45, reason: "Site unreachable or disallowed during screening" }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (meta.status >= 400) {
      return new Response(JSON.stringify({ verdict: "suspicious", score: 40, reason: `Site returned HTTP ${meta.status}` }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // Cross-origin redirect check
    let redirectedOffDomain = false;
    try {
      const finalHost = new URL(meta.finalUrl).hostname.toLowerCase();
      redirectedOffDomain = finalHost !== lowerHost && !finalHost.endsWith("." + lowerHost) && !lowerHost.endsWith("." + finalHost);
    } catch {}

    // Ask Lovable AI to classify
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      // Without AI, be conservative
      return new Response(JSON.stringify({ verdict: "suspicious", score: 55, reason: "AI screener unavailable; queued for manual review" }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const prompt = `You are a safety screener for an AI tool directory. Decide whether this URL is safe to auto-publish.

Submitted name: ${String(name ?? "").slice(0, 200)}
Submitted description: ${String(description ?? "").slice(0, 500)}
URL: ${meta.finalUrl}
Page title: ${meta.title.slice(0, 200)}
Page meta description: ${meta.description.slice(0, 300)}
Redirected off original domain: ${redirectedOffDomain}

Return a JSON object with these exact keys:
- "verdict": one of "safe", "suspicious", "blocked"
- "score": integer 0-100 (100 = totally safe legit AI tool; 0 = malware/phishing/scam)
- "reason": one short sentence explaining the verdict

Rules:
- "blocked" for phishing, malware, wallet drainers, scams, NSFW/porn, illegal content, or clearly non-AI content pretending to be an AI tool.
- "suspicious" for parked domains, thin/broken pages, off-domain redirects, unclear content, or anything you can't confirm as a legitimate AI product.
- "safe" only for clearly legitimate, working AI-related products/services.
Return ONLY the JSON object, no markdown, no prose.`;

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      console.error("AI gateway failure", aiRes.status, errText);
      return new Response(JSON.stringify({ verdict: "suspicious", score: 50, reason: "AI screener failed; queued for manual review" }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const aiJson = await aiRes.json();
    let content = aiJson?.choices?.[0]?.message?.content ?? "";
    if (typeof content !== "string") content = JSON.stringify(content);
    let parsedVerdict: { verdict?: string; score?: number; reason?: string } = {};
    try {
      parsedVerdict = JSON.parse(content);
    } catch {
      const match = content.match(/\{[\s\S]*\}/);
      if (match) { try { parsedVerdict = JSON.parse(match[0]); } catch {} }
    }

    let verdict = String(parsedVerdict.verdict ?? "suspicious").toLowerCase();
    if (!["safe", "suspicious", "blocked"].includes(verdict)) verdict = "suspicious";
    let score = Number(parsedVerdict.score);
    if (!Number.isFinite(score)) score = 50;
    score = Math.max(0, Math.min(100, Math.round(score)));
    const reason = String(parsedVerdict.reason ?? "").slice(0, 500) || "Screened by AI safety model";

    if (redirectedOffDomain && verdict === "safe") {
      verdict = "suspicious";
      score = Math.min(score, 65);
    }

    return new Response(JSON.stringify({ verdict, score, reason, finalUrl: meta.finalUrl, title: meta.title }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("screen-tool-url error", err);
    return new Response(JSON.stringify({ verdict: "suspicious", score: 50, reason: "Screener error; queued for manual review" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
