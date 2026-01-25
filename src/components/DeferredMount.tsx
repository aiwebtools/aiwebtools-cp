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
const DeferredMount = ({ children, delay = 0, fallback = null }: DeferredMountProps) => {
  // For delay=0, mount immediately - no deferral needed
  const [shouldMount, setShouldMount] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return; // Already mounted
    
    // For small delays, use RAF for instant mounting
    if (delay <= 16) {
      requestAnimationFrame(() => setShouldMount(true));
      return;
    }
    
    // For larger delays, schedule after idle
    if ('requestIdleCallback' in window) {
      const idleId = (window as any).requestIdleCallback(() => {
        setShouldMount(true);
      }, { timeout: delay });
      
      return () => (window as any).cancelIdleCallback(idleId);
    } else {
      const timer = setTimeout(() => setShouldMount(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  if (!shouldMount) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default DeferredMount;
