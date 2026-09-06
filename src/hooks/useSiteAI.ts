import { useCallback, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type SiteAIMode = "match" | "explain" | "prompt";

interface SiteAIRequest {
  mode: SiteAIMode;
  query?: string;
  tool?: { title?: string; category?: string; description?: string };
  candidates?: { title?: string; category?: string }[];
}

// ---- Credit guard (client side) -------------------------------------------
// Answers are cached for 7 days and each visitor gets a small daily allowance,
// so the same question never costs credits twice.
const CACHE_PREFIX = "aiwt_ai_cache_";
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const QUOTA_KEY = "aiwt_ai_quota";
const DAILY_LIMIT = 8;
const DISABLED_KEY = "aiwt_ai_disabled_until";
const DISABLE_MS = 6 * 60 * 60 * 1000;

const safeGet = (k: string): string | null => {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
};
const safeSet = (k: string, v: string) => {
  try {
    localStorage.setItem(k, v);
  } catch {
    /* storage unavailable — fine */
  }
};

const hashKey = (input: string): string => {
  let h = 5381;
  for (let i = 0; i < input.length; i++) h = ((h << 5) + h + input.charCodeAt(i)) | 0;
  return Math.abs(h).toString(36);
};

const readCache = (key: string): string | null => {
  const raw = safeGet(CACHE_PREFIX + key);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as { t: number; v: string };
    if (Date.now() - parsed.t > CACHE_TTL_MS) return null;
    return parsed.v;
  } catch {
    return null;
  }
};

const writeCache = (key: string, value: string) =>
  safeSet(CACHE_PREFIX + key, JSON.stringify({ t: Date.now(), v: value }));

const today = () => new Date().toISOString().slice(0, 10);

const quotaLeft = (): number => {
  try {
    const parsed = JSON.parse(safeGet(QUOTA_KEY) || "{}") as { d?: string; n?: number };
    if (parsed.d !== today()) return DAILY_LIMIT;
    return Math.max(0, DAILY_LIMIT - (parsed.n ?? 0));
  } catch {
    return DAILY_LIMIT;
  }
};

const spendQuota = () => {
  try {
    const parsed = JSON.parse(safeGet(QUOTA_KEY) || "{}") as { d?: string; n?: number };
    const n = parsed.d === today() ? (parsed.n ?? 0) + 1 : 1;
    safeSet(QUOTA_KEY, JSON.stringify({ d: today(), n }));
  } catch {
    /* noop */
  }
};

export const isSiteAIDisabled = (): boolean => {
  const until = Number(safeGet(DISABLED_KEY) || 0);
  return Number.isFinite(until) && Date.now() < until;
};

const disableSiteAI = () => safeSet(DISABLED_KEY, String(Date.now() + DISABLE_MS));

export const useSiteAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const ask = useCallback(async (req: SiteAIRequest): Promise<string | null> => {
    setError(null);

    const cacheKey = hashKey(
      `${req.mode}|${req.query ?? ""}|${req.tool?.title ?? ""}|${(req.candidates ?? [])
        .slice(0, 30)
        .map((c) => c.title)
        .join(",")}`,
    );

    const cached = readCache(cacheKey);
    if (cached) {
      setResult(cached);
      return cached;
    }

    if (isSiteAIDisabled()) {
      setError("AI helpers are resting right now. Please try again later.");
      return null;
    }

    if (quotaLeft() <= 0) {
      setError("You've used today's free AI helper answers. They reset tomorrow.");
      return null;
    }

    setLoading(true);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("site-ai", { body: req });

      const payload = data as { text?: string; error?: string; disabled?: boolean } | null;

      if (payload?.disabled) disableSiteAI();

      if (fnError || payload?.error || !payload?.text) {
        const message = payload?.error || "The AI helper could not answer right now.";
        setError(message);
        return null;
      }

      spendQuota();
      writeCache(cacheKey, payload.text);
      setResult(payload.text);
      return payload.text;
    } catch {
      setError("The AI helper could not answer right now.");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { ask, loading, error, result, setResult, quotaLeft: quotaLeft() };
};
