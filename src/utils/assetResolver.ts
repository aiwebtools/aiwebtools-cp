/**
 * Shared resolver for hero images stored as raw "/src/assets/..." paths.
 *
 * The build-time URL map lives in a lazily imported chunk, but once it has
 * loaded we keep it in a module-level cache so every later card resolves its
 * image synchronously on the first render — no emoji flash, no second paint.
 */
import { useEffect, useState } from "react";

let cache: Record<string, string> | null = null;
let pending: Promise<Record<string, string>> | null = null;

export const isLegacyAssetPath = (url?: string | null): boolean =>
  typeof url === "string" && url.trim().startsWith("/src/");

export const getCachedAssetUrl = (path: string): string | undefined => cache?.[path];

export const loadAssetUrls = (): Promise<Record<string, string>> => {
  if (cache) return Promise.resolve(cache);
  pending ??= import("@/utils/search/toolAssetUrls")
    .then((mod) => {
      cache = mod.assetUrlByPath;
      return cache;
    })
    .catch(() => ({}));
  return pending;
};

/**
 * Returns the resolved URL for a tool image. Non "/src/" URLs pass straight
 * through, so remote images never wait on the asset map.
 */
export const useResolvedToolImage = (rawUrl?: string | null): string | undefined => {
  const raw = typeof rawUrl === "string" ? rawUrl.trim() : "";
  const legacy = isLegacyAssetPath(raw);
  const [resolved, setResolved] = useState<string | undefined>(() =>
    legacy ? getCachedAssetUrl(raw) : raw || undefined,
  );

  useEffect(() => {
    let active = true;
    if (!legacy) {
      setResolved(raw || undefined);
      return () => {
        active = false;
      };
    }
    const cached = getCachedAssetUrl(raw);
    if (cached) {
      setResolved(cached);
      return () => {
        active = false;
      };
    }
    loadAssetUrls().then((map) => {
      if (active) setResolved(map[raw]);
    });
    return () => {
      active = false;
    };
  }, [raw, legacy]);

  return resolved;
};

// Warm the map as soon as the module is used so the very first grid paints
// with real artwork instead of emoji placeholders.
if (typeof window !== "undefined") {
  const warm = () => loadAssetUrls();
  if ("requestIdleCallback" in window) {
    (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(warm);
  } else {
    setTimeout(warm, 0);
  }
}
