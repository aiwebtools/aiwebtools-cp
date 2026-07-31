import { ReactNode, useEffect, useRef, useState } from 'react';

interface DeferredMountProps {
  children: ReactNode;
  delay?: number; // ms to wait after first paint
  fallback?: ReactNode;
}

/* ------------------------------------------------------------------ *
 * Global scroll-aware mount scheduler
 * ------------------------------------------------------------------ *
 * Mounting several heavy below-the-fold sections at once blocks the main
 * thread and freezes scrolling. So we:
 *   1. queue every deferred mount,
 *   2. never flush while the user is actively scrolling,
 *   3. flush at most ONE section per idle slot so each React commit stays
 *      small enough to keep the frame budget.
 * ------------------------------------------------------------------ */
const queue: Array<() => void> = [];
let flushing = false;
let lastScrollAt = 0;
let scrollBound = false;

const markScroll = () => {
  lastScrollAt = performance.now();
};

const bindScroll = () => {
  if (scrollBound || typeof window === 'undefined') return;
  scrollBound = true;
  window.addEventListener('scroll', markScroll, { passive: true });
  window.addEventListener('touchmove', markScroll, { passive: true });
};

const scheduleFlush = () => {
  if (flushing) return;
  flushing = true;

  const run = () => {
    // Mid-scroll: postpone so we never hijack the scroll frame.
    if (performance.now() - lastScrollAt < 250) {
      window.setTimeout(run, 200);
      return;
    }

    const next = queue.shift();
    next?.();

    if (queue.length > 0) {
      const ric = (window as any).requestIdleCallback;
      if (ric) ric(run, { timeout: 800 });
      else window.setTimeout(run, 120);
    } else {
      flushing = false;
    }
  };

  const ric = (window as any).requestIdleCallback;
  if (ric) ric(run, { timeout: 800 });
  else window.setTimeout(run, 60);
};

const enqueueMount = (mount: () => void) => {
  bindScroll();
  queue.push(mount);
  scheduleFlush();
};

/**
 * Defers mounting of heavy components until after first paint.
 * Mounts as soon as the placeholder nears the viewport (so scrolling never
 * reveals an empty gap), otherwise after `delay` — always through the
 * scroll-aware scheduler above, so the page never freezes mid-scroll.
 */
const DeferredMount = ({ children, delay = 100, fallback = null }: DeferredMountProps) => {
  const [shouldMount, setShouldMount] = useState(false);
  const placeholderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    let queued = false;

    const request = () => {
      if (queued || !mounted) return;
      queued = true;
      enqueueMount(() => {
        if (mounted) setShouldMount(true);
      });
    };

    // Near-viewport mounting: scrolling toward a section pulls it in early.
    let observer: IntersectionObserver | null = null;
    if (placeholderRef.current && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            observer?.disconnect();
            request();
          }
        },
        { rootMargin: '600px 0px' }
      );
      observer.observe(placeholderRef.current);
    }

    const timerId = window.setTimeout(request, delay);

    return () => {
      mounted = false;
      observer?.disconnect();
      window.clearTimeout(timerId);
    };
  }, [delay]);

  if (!shouldMount) {
    return (
      <div ref={placeholderRef} style={{ minHeight: 1 }}>
        {fallback}
      </div>
    );
  }

  return <>{children}</>;
};

export default DeferredMount;
