import { useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Global navigation state for instant transitions
let isNavigating = false;
let navigationTimeout: NodeJS.Timeout | null = null;

/**
 * Hook for instant navigation with optimistic UI updates
 * Prevents navigation blocking and ensures smooth transitions
 */
export const useInstantNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Reset navigation state when location changes
  useEffect(() => {
    isNavigating = false;
    if (navigationTimeout) {
      clearTimeout(navigationTimeout);
      navigationTimeout = null;
    }
  }, [location.pathname]);

  // Instant navigate function - prevents double navigation
  const instantNavigate = useCallback((path: string, options?: { replace?: boolean }) => {
    if (isNavigating) return;
    
    isNavigating = true;
    
    // Use requestAnimationFrame for smoother visual transition
    requestAnimationFrame(() => {
      navigate(path, options);
      
      // Reset navigation lock after a short delay
      navigationTimeout = setTimeout(() => {
        isNavigating = false;
      }, 100);
    });
  }, [navigate]);

  // Scroll to top instantly
  const scrollToTop = useCallback(() => {
    // Use instant scroll for perceived speed
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return {
    instantNavigate,
    scrollToTop,
    isNavigating: () => isNavigating,
  };
};

/**
 * Optimized scroll handler with passive events
 * Use for scroll-based animations and effects
 */
export const useOptimizedScroll = (
  callback: (scrollY: number) => void,
  throttleMs: number = 16 // ~60fps
) => {
  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        requestAnimationFrame(() => {
          callback(lastScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback, throttleMs]);
};

/**
 * Intersection observer hook for lazy loading
 * More efficient than scroll-based detection
 */
export const useLazyLoad = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.dataset.visible = 'true';
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options]);
};
