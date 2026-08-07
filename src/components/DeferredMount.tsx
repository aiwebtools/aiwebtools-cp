import { ReactNode, useEffect, useRef, useState } from 'react';

interface DeferredMountProps {
  children: ReactNode;
  delay?: number; // ms to wait after first paint
  fallback?: ReactNode;
  mountOnVisible?: boolean;
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
let interactionBound = false;

const markScroll = () => {
  lastScrollAt = performance.now();
};

const markInteraction = () => {
  lastScrollAt = performance.now();
};

const bindScroll = () => {
  if (scrollBound || typeof window === 'undefined') return;
  scrollBound = true;
  window.addEventListener('scroll', markScroll, { passive: true });
  window.addEventListener('touchmove', markScroll, { passive: true });
  if (!interactionBound) {
    interactionBound = true;
    window.addEventListener('pointerdown', markInteraction, { passive: true, capture: true });
    window.addEventListener('touchstart', markInteraction, { passive: true, capture: true });
    window.addEventListener('wheel', markInteraction, { passive: true, capture: true });
  }
};

const scheduleFlush = () => {
  if (flushing) return;
  flushing = true;

  const run = () => {
    // Mid-scroll: postpone so we never hijack the scroll frame.
    // Require a real quiet window. Trackpads and touch momentum often leave
    // 100–250ms gaps between events; treating those gaps as "scroll finished"
    // allowed a heavy section commit to collide with the next gesture.
    if (performance.now() - lastScrollAt < 700) {
      window.setTimeout(run, 120);
      return;
    }

    const next = queue.shift();
    next?.();

    if (queue.length > 0) {
      const ric = (window as any).requestIdleCallback;
      if (ric) ric(run, { timeout: 1000 });
      else window.setTimeout(run, 32);
    } else {
      flushing = false;
    }
  };

  const ric = (window as any).requestIdleCallback;
  if (ric) ric(run, { timeout: 1000 });
  else window.setTimeout(run, 16);
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
const DeferredMount = ({ children, delay = 100, fallback = null, mountOnVisible = true }: DeferredMountProps) => {
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

    // Near-viewport mounting still goes through the global queue. Several
    // deferred placeholders can share the same collapsed Y position, so an
    // observer may flag all of them in one frame. Mounting them directly here
    // caused the exact "first scroll does not move" freeze we are preventing.
    let observer: IntersectionObserver | null = null;
    if (mountOnVisible && placeholderRef.current && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            observer?.disconnect();
            request();
          }
        },
        { rootMargin: '1600px 0px' }
      );
      observer.observe(placeholderRef.current);
    }

    const timerId = window.setTimeout(request, delay);

    return () => {
      mounted = false;
      observer?.disconnect();
      window.clearTimeout(timerId);
    };
  }, [delay, mountOnVisible]);

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
