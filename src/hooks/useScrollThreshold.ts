import { useEffect, useState } from "react";

type Options = {
  enabled?: boolean;
  /** If true, state toggles back to false when user scrolls above threshold. */
  allowReset?: boolean;
};

const getScrollY = (): number => {
  if (typeof window === "undefined") return 0;

  if (typeof window.scrollY === "number") return window.scrollY;
  if (typeof window.pageYOffset === "number") return window.pageYOffset;

  const docEl = document.documentElement;
  const body = document.body;
  const scrollingEl = document.scrollingElement as HTMLElement | null;

  return (
    scrollingEl?.scrollTop ??
    docEl?.scrollTop ??
    body?.scrollTop ??
    0
  );
};

/**
 * Robust scroll threshold detector.
 *
 * Uses BOTH passive scroll listeners and short rAF polling bursts.
 * This prevents edge cases where scroll events don't fire reliably in some
 * browser/iframe/device combinations.
 */
export function useScrollThreshold(thresholdPx: number, options: Options = {}) {
  const { enabled = true, allowReset = true } = options;

  const [passed, setPassed] = useState(() => {
    if (!enabled) return false;
    return getScrollY() > thresholdPx;
  });

  useEffect(() => {
    if (!enabled) {
      setPassed(false);
      return;
    }

    let rafId = 0;
    let pollStopTimeout: number | null = null;
    let last = -1;

    const evaluate = () => {
      const y = getScrollY();
      if (y === last) return;
      last = y;

      if (y > thresholdPx) {
        setPassed(true);
      } else if (allowReset) {
        setPassed(false);
      }
    };

    const onScroll = () => evaluate();
    const onResize = () => {
      // layout shifts can change scroll position; re-evaluate and briefly poll
      evaluate();
      startPolling(600);
    };

    const startPolling = (ms: number) => {
      if (pollStopTimeout) window.clearTimeout(pollStopTimeout);

      const tick = () => {
        evaluate();
        rafId = window.requestAnimationFrame(tick);
      };

      rafId = window.requestAnimationFrame(tick);
      pollStopTimeout = window.setTimeout(() => {
        window.cancelAnimationFrame(rafId);
      }, ms);
    };

    // initial evaluation + short polling burst to catch scroll position after first paint
    evaluate();
    startPolling(1200);

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      if (pollStopTimeout) window.clearTimeout(pollStopTimeout);
      window.cancelAnimationFrame(rafId);
    };
  }, [enabled, thresholdPx, allowReset]);

  return passed;
}
