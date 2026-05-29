import { lazy, ComponentType } from "react";

const RELOAD_FLAG = "aiwt:chunk-reload";

const isChunkLoadError = (err: unknown): boolean => {
  const msg = err instanceof Error ? err.message : String(err ?? "");
  return (
    /Failed to fetch dynamically imported module/i.test(msg) ||
    /Loading chunk [\d]+ failed/i.test(msg) ||
    /Importing a module script failed/i.test(msg)
  );
};

/**
 * lazy() wrapper that retries the dynamic import a few times before giving up.
 * If the failure is a chunk-load error (stale build after deploy, flaky
 * mobile network), it triggers a single hard reload to fetch fresh asset URLs.
 * Prevents "Something went wrong" screens and blank pages from orphan
 * chunk fetches.
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  retries = 3,
  delayMs = 400,
) {
  return lazy(async () => {
    let lastErr: unknown;
    for (let i = 0; i <= retries; i++) {
      try {
        const mod = await factory();
        try {
          sessionStorage.removeItem(RELOAD_FLAG);
        } catch {
          // ignore
        }
        return mod;
      } catch (err) {
        lastErr = err;
        await new Promise((r) => setTimeout(r, delayMs * (i + 1)));
      }
    }
    if (isChunkLoadError(lastErr) && typeof window !== "undefined") {
      try {
        if (!sessionStorage.getItem(RELOAD_FLAG)) {
          sessionStorage.setItem(RELOAD_FLAG, "1");
          window.location.reload();
          // Return a never-resolving promise so React keeps the Suspense
          // fallback until the reload happens.
          return await new Promise<{ default: T }>(() => {});
        }
      } catch {
        // ignore storage errors and fall through to throw
      }
    }
    throw lastErr;
  });
}
