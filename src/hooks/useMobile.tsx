import { useState, useEffect } from 'react';

interface MobileHookReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  orientation: 'portrait' | 'landscape';
  isTouch: boolean;
}

export const useMobile = (): MobileHookReturn => {
  const [screenInfo, setScreenInfo] = useState<MobileHookReturn>(() => {
    if (typeof window === 'undefined') {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        screenWidth: 1024,
        orientation: 'landscape' as const,
        isTouch: false
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    return {
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024,
      screenWidth: width,
      orientation: width > height ? 'landscape' : 'portrait',
      isTouch
    };
  });

  useEffect(() => {
    let resizeTimeoutId: NodeJS.Timeout;
    let orientationTimeoutId: NodeJS.Timeout;
    
    const updateScreenInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      setScreenInfo({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        screenWidth: width,
        orientation: width > height ? 'landscape' : 'portrait',
        isTouch
      });
    };
    
    const handleResize = () => {
      // Fast debounce for resize - 50ms is enough
      clearTimeout(resizeTimeoutId);
      resizeTimeoutId = setTimeout(updateScreenInfo, 50);
    };

    const handleOrientationChange = () => {
      // Add class to freeze animations during orientation change
      document.documentElement.classList.add('orientation-changing');
      
      // Clear any pending resize
      clearTimeout(resizeTimeoutId);
      clearTimeout(orientationTimeoutId);
      
      // Wait for orientation animation to complete (Safari needs longer)
      orientationTimeoutId = setTimeout(() => {
        updateScreenInfo();
        // Remove the freezing class after layout settles
        requestAnimationFrame(() => {
          document.documentElement.classList.remove('orientation-changing');
        });
      }, 300);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleOrientationChange, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      clearTimeout(resizeTimeoutId);
      clearTimeout(orientationTimeoutId);
      document.documentElement.classList.remove('orientation-changing');
    };
  }, []);

  return screenInfo;
};