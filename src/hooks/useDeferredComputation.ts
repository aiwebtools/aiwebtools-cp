import { useState, useEffect, useRef } from 'react';

/**
 * Hook to defer expensive computations off the main thread
 * Uses requestIdleCallback when available, falls back to setTimeout
 */
export function useDeferredComputation<T>(
  compute: () => T,
  deps: React.DependencyList,
  fallback: T
): { value: T; isComputing: boolean } {
  const [value, setValue] = useState<T>(fallback);
  const [isComputing, setIsComputing] = useState(true);
  const pendingIdRef = useRef<number | NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsComputing(true);
    
    // Cancel any pending computation
    if (pendingIdRef.current !== null) {
      if ('cancelIdleCallback' in window) {
        (window as any).cancelIdleCallback(pendingIdRef.current);
      } else {
        clearTimeout(pendingIdRef.current as NodeJS.Timeout);
      }
    }

    const runComputation = () => {
      const startTime = performance.now();
      const result = compute();
      const duration = performance.now() - startTime;
      
      if (duration > 16) {
        console.log(`⚠️ Deferred computation took ${duration.toFixed(1)}ms`);
      }
      
      setValue(result);
      setIsComputing(false);
      pendingIdRef.current = null;
    };

    // Use requestIdleCallback for non-blocking computation
    if ('requestIdleCallback' in window) {
      pendingIdRef.current = (window as any).requestIdleCallback(runComputation, { timeout: 100 });
    } else {
      // Fallback to setTimeout with minimal delay
      pendingIdRef.current = setTimeout(runComputation, 0);
    }

    return () => {
      if (pendingIdRef.current !== null) {
        if ('cancelIdleCallback' in window) {
          (window as any).cancelIdleCallback(pendingIdRef.current);
        } else {
          clearTimeout(pendingIdRef.current as NodeJS.Timeout);
        }
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { value, isComputing };
}

/**
 * Schedules a callback to run during browser idle time
 */
export function scheduleIdleTask(callback: () => void, timeout = 100): void {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 0);
  }
}
