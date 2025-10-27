import { useEffect, useCallback, useRef, useState } from 'react';
import { useMobile } from './useMobile';

interface PerformanceConfig {
  enableReducedMotion?: boolean;
  enableLazyLoading?: boolean;
  maxConcurrentAnimations?: number;
  throttleScrollEvents?: number;
}

export const usePerformanceOptimization = (config: PerformanceConfig = {}) => {
  const { isMobile, isTouch } = useMobile();
  const [isLowPerformanceDevice, setIsLowPerformanceDevice] = useState(false);
  const animationCountRef = useRef(0);
  const throttleRef = useRef<NodeJS.Timeout>();

  const {
    enableReducedMotion = isMobile,
    enableLazyLoading = true,
    maxConcurrentAnimations = isMobile ? 2 : 5,
    throttleScrollEvents = isMobile ? 16 : 8
  } = config;

  // Enhanced device detection including Chromebooks
  useEffect(() => {
    const detectPerformance = () => {
      const ua = navigator.userAgent.toLowerCase();
      const platform = navigator.platform?.toLowerCase() || '';
      
      // Detect Chromebook
      const isChromebook = ua.includes('cros') || 
                          platform.includes('cros') ||
                          ua.includes('chromebook');
      
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      const connection = (navigator as any).connection;
      
      // More aggressive detection for low-end devices, especially Chromebooks
      const isLowEnd = 
        isChromebook ||
        hardwareConcurrency <= 4 ||
        deviceMemory <= 4 ||
        (connection && connection.effectiveType && 
         ['slow-2g', '2g', '3g', 'slow-3g'].includes(connection.effectiveType));
      
      if (isLowEnd) {
        console.log('🔧 Low-performance device detected, applying optimizations', {
          isChromebook,
          hardwareConcurrency,
          deviceMemory
        });
      }
      
      setIsLowPerformanceDevice(isLowEnd);
    };

    detectPerformance();
  }, []);

  // Animation throttling
  const requestAnimationSafely = useCallback((callback: FrameRequestCallback) => {
    if (animationCountRef.current >= maxConcurrentAnimations) {
      // Defer animation if too many are running
      setTimeout(() => requestAnimationSafely(callback), 50);
      return;
    }

    animationCountRef.current++;
    requestAnimationFrame((time) => {
      try {
        callback(time);
      } finally {
        animationCountRef.current--;
      }
    });
  }, [maxConcurrentAnimations]);

  // Throttled scroll handler
  const createThrottledScrollHandler = useCallback((handler: () => void) => {
    return () => {
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
      
      throttleRef.current = setTimeout(() => {
        handler();
      }, throttleScrollEvents);
    };
  }, [throttleScrollEvents]);

  // CSS optimization utilities
  const getOptimizedStyles = useCallback(() => {
    const baseStyles: React.CSSProperties = {};

    if (enableReducedMotion || isLowPerformanceDevice) {
      baseStyles.animationDuration = '0.01ms';
      baseStyles.animationIterationCount = 1;
      baseStyles.transitionDuration = '0.01ms';
    }

    if (isMobile) {
      baseStyles.willChange = 'auto';
      baseStyles.backfaceVisibility = 'hidden';
      baseStyles.perspective = '1000px';
    }

    return baseStyles;
  }, [enableReducedMotion, isLowPerformanceDevice, isMobile]);

  // Intersection Observer for lazy loading
  const createLazyLoadObserver = useCallback((callback: IntersectionObserverCallback) => {
    if (!enableLazyLoading) return null;

    const options: IntersectionObserverInit = {
      rootMargin: isMobile ? '50px' : '100px',
      threshold: 0.1
    };

    return new IntersectionObserver(callback, options);
  }, [enableLazyLoading, isMobile]);

  // Performance monitoring
  const measurePerformance = useCallback((name: string, fn: () => void) => {
    if (process.env.NODE_ENV === 'development') {
      performance.mark(`${name}-start`);
      fn();
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
    } else {
      fn();
    }
  }, []);

  // Resource preloading
  const preloadResource = useCallback((href: string, type: 'image' | 'script' | 'style' = 'image') => {
    if (!enableLazyLoading) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    
    switch (type) {
      case 'image':
        link.as = 'image';
        break;
      case 'script':
        link.as = 'script';
        break;
      case 'style':
        link.as = 'style';
        break;
    }
    
    document.head.appendChild(link);
  }, [enableLazyLoading]);

  useEffect(() => {
    // Set global CSS variables for reduced motion
    if (enableReducedMotion || isLowPerformanceDevice) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    }

    // Enable hardware acceleration hints for mobile
    if (isMobile) {
      document.documentElement.style.setProperty('transform-style', 'preserve-3d');
    }

    return () => {
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
    };
  }, [enableReducedMotion, isLowPerformanceDevice, isMobile]);

  return {
    isMobile,
    isTouch,
    isLowPerformanceDevice,
    enableReducedMotion: enableReducedMotion || isLowPerformanceDevice,
    requestAnimationSafely,
    createThrottledScrollHandler,
    getOptimizedStyles,
    createLazyLoadObserver,
    measurePerformance,
    preloadResource
  };
};