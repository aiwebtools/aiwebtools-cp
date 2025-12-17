import { useEffect, useCallback, useRef } from 'react';
import { useMobile } from './useMobile';

interface ScrollOptimizationOptions {
  enablePassiveListeners?: boolean;
  throttleMs?: number;
  enableMomentumScrolling?: boolean;
}

export const useScrollOptimization = (options: ScrollOptimizationOptions = {}) => {
  const { isMobile } = useMobile();
  const throttleRef = useRef<NodeJS.Timeout>();
  
  const {
    enablePassiveListeners = true,
    throttleMs = isMobile ? 16 : 8,
    enableMomentumScrolling = isMobile
  } = options;

  // Optimized scroll handler with RAF throttling (smoother than setTimeout)
  const createOptimizedScrollHandler = useCallback((
    handler: (event: Event) => void,
    customThrottle?: number
  ) => {
    let rafId: number | null = null;
    let lastTime = 0;
    const throttleTime = customThrottle || throttleMs;
    
    return (event: Event) => {
      const now = performance.now();
      
      if (now - lastTime < throttleTime) {
        return;
      }
      
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        handler(event);
        lastTime = performance.now();
        rafId = null;
      });
    };
  }, [throttleMs]);

  // Apply scroll optimizations to element
  const optimizeScrollElement = useCallback((element: HTMLElement) => {
    if (!element) return;

    // Enable hardware acceleration
    element.style.transform = 'translateZ(0)';
    element.style.willChange = 'scroll-position';
    
    // Enable momentum scrolling on iOS
    if (enableMomentumScrolling) {
      (element.style as any).WebkitOverflowScrolling = 'touch';
      element.style.overscrollBehavior = 'contain';
    }

    // Optimize for performance
    element.style.contain = 'layout style paint';
    
    return () => {
      element.style.transform = '';
      element.style.willChange = '';
      (element.style as any).WebkitOverflowScrolling = '';
      element.style.overscrollBehavior = '';
      element.style.contain = '';
    };
  }, [enableMomentumScrolling]);

  // Add optimized scroll listener
  const addOptimizedScrollListener = useCallback((
    element: HTMLElement | Window,
    handler: (event: Event) => void,
    customThrottle?: number
  ) => {
    const optimizedHandler = createOptimizedScrollHandler(handler, customThrottle);
    const options = enablePassiveListeners ? { passive: true } : false;
    
    element.addEventListener('scroll', optimizedHandler, options);
    
    return () => {
      element.removeEventListener('scroll', optimizedHandler, options as any);
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
    };
  }, [createOptimizedScrollHandler, enablePassiveListeners]);

  // Intersection observer for scroll-triggered animations
  const createScrollIntersectionObserver = useCallback((
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
  ) => {
    const defaultOptions: IntersectionObserverInit = {
      rootMargin: isMobile ? '20px' : '50px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
      ...options
    };

    return new IntersectionObserver(callback, defaultOptions);
  }, [isMobile]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
    };
  }, []);

  return {
    createOptimizedScrollHandler,
    optimizeScrollElement,
    addOptimizedScrollListener,
    createScrollIntersectionObserver,
    isMobile
  };
};