import { ReactNode, useEffect, useState } from 'react';

interface DeferredMountProps {
  children: ReactNode;
  delay?: number; // ms to wait after first paint
  fallback?: ReactNode;
}

/**
 * Defers mounting of heavy components until after first paint
 * to improve perceived load time and Core Web Vitals (LCP, FID)
 */
const DeferredMount = ({ children, delay = 100, fallback = null }: DeferredMountProps) => {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    // Wait the requested delay FIRST, then mount during idle/next frame. The
    // old requestIdleCallback(timeout: delay) could run immediately on mobile,
    // causing every deferred below-fold chunk to mount at once and block the
    // first touch-scroll after the loader disappeared.
    let mounted = true;
    let idleId: number | null = null;

    const timerId = window.setTimeout(() => {
      const mount = () => {
        if (mounted) setShouldMount(true);
      };

      if ('requestIdleCallback' in window) {
        idleId = (window as any).requestIdleCallback(mount, { timeout: 1200 });
      } else {
        requestAnimationFrame(mount);
      }
    }, delay);

    return () => {
      mounted = false;
      window.clearTimeout(timerId);
      if (idleId !== null && 'cancelIdleCallback' in window) {
        (window as any).cancelIdleCallback(idleId);
      }
    };
  }, [delay]);

  if (!shouldMount) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default DeferredMount;
