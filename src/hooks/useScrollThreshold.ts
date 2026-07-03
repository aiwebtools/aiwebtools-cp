import { useEffect, useState, useRef } from "react";

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
 * Lightweight scroll threshold detector.
 *
 * Uses PASSIVE scroll events only (no rAF polling during normal scroll).
 * Runs multiple delayed checks after mount to catch initial position reliably.
 */
export function useScrollThreshold(thresholdPx: number, options: Options = {}) {
  const { enabled = true, allowReset = true } = options;

  const [passed, setPassed] = useState(() => {
    if (!enabled) return false;
    return getScrollY() > thresholdPx;
  });

  // Track last value to avoid unnecessary state updates
  const lastRef = useRef<boolean>(passed);

  useEffect(() => {
    if (!enabled) {
      setPassed(false);
      return;
    }

    const evaluate = () => {
      const y = getScrollY();
      const shouldPass = y > thresholdPx;

      // Only update state if value changed
      if (shouldPass !== lastRef.current) {
        lastRef.current = shouldPass;
        if (shouldPass || allowReset) {
          setPassed(shouldPass);
        }
      }
    };

    let raf = 0;

    // Passive scroll listener - rAF throttled so mobile scroll is never forced
    // through duplicate synchronous threshold reads.
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        evaluate();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Also listen on scrollingElement directly (catches edge cases)
    const scrollingEl = document.scrollingElement;
    if (scrollingEl && scrollingEl !== document.documentElement) {
      scrollingEl.addEventListener("scroll", onScroll, { passive: true });
    }

    // Initial check + multiple delayed checks for navigation/layout cases
    evaluate();
    const delays = [50, 100, 250, 500, 1000];
    const timeouts = delays.map(delay => setTimeout(evaluate, delay));

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollingEl && scrollingEl !== document.documentElement) {
        scrollingEl.removeEventListener("scroll", onScroll);
      }
      if (raf) window.cancelAnimationFrame(raf);
      timeouts.forEach(clearTimeout);
    };
  }, [enabled, thresholdPx, allowReset]);

  return passed;
}
