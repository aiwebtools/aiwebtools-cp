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
    // Use requestIdleCallback if available, otherwise requestAnimationFrame
    if ('requestIdleCallback' in window) {
      const idleId = (window as any).requestIdleCallback(() => {
        setShouldMount(true);
      }, { timeout: delay });
      
      return () => (window as any).cancelIdleCallback(idleId);
    } else {
      // Fallback: use requestAnimationFrame + setTimeout for browsers without requestIdleCallback
      let mounted = true;
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (mounted) {
            setShouldMount(true);
          }
        }, delay);
      });
      
      return () => {
        mounted = false;
      };
    }
  }, [delay]);

  if (!shouldMount) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default DeferredMount;
