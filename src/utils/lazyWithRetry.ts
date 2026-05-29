import { lazy, ComponentType } from "react";

/**
 * lazy() wrapper that retries the dynamic import a few times before giving up.
 * Prevents "Failed to fetch dynamically imported module" (stale Vite chunks,
 * transient CDN hiccups, flaky mobile networks) from triggering the global
 * ErrorBoundary "Something went wrong" screen.
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
        return await factory();
      } catch (err) {
        lastErr = err;
        await new Promise((r) => setTimeout(r, delayMs * (i + 1)));
      }
    }
    throw lastErr;
  });
}
