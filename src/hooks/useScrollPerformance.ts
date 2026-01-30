import { useEffect } from "react";

/**
 * Adds/removes 'is-scrolling' class on document to enable CSS perf optimizations.
 * - During scroll: transitions & animations are disabled via CSS
 * - After scroll stops: normal rendering resumes
 */
export function useScrollPerformance() {
  useEffect(() => {
    let scrollTimeout: number | null = null;
    let isScrolling = false;

    const onScrollStart = () => {
      if (!isScrolling) {
        isScrolling = true;
        document.documentElement.classList.add("is-scrolling");
      }

      // Clear existing timeout
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }

      // Remove class 150ms after scroll stops
      scrollTimeout = window.setTimeout(() => {
        isScrolling = false;
        document.documentElement.classList.remove("is-scrolling");
      }, 150);
    };

    window.addEventListener("scroll", onScrollStart, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollStart);
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
      document.documentElement.classList.remove("is-scrolling");
    };
  }, []);
}
