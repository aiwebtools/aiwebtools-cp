// Performance monitoring utilities

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  searchTime: number;
  scrollPerformance: number;
}

class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private startTimes: Map<string, number> = new Map();

  startTimer(name: string): void {
    this.startTimes.set(name, performance.now());
  }

  endTimer(name: string): number {
    const startTime = this.startTimes.get(name);
    if (!startTime) return 0;
    
    const duration = performance.now() - startTime;
    this.startTimes.delete(name);
    
    // Store metric
    switch (name) {
      case 'search':
        this.metrics.searchTime = duration;
        break;
      case 'render':
        this.metrics.renderTime = duration;
        break;
      case 'scroll':
        this.metrics.scrollPerformance = duration;
        break;
    }
    
    return duration;
  }

  measureSearchPerformance<T>(searchFn: () => T): T {
    this.startTimer('search');
    const result = searchFn();
    const duration = this.endTimer('search');
    
    if (duration > 100) {
      console.warn(`Search took ${duration.toFixed(2)}ms - consider optimization`);
    }
    
    return result;
  }

  measureRenderPerformance(): void {
    if (typeof window === 'undefined') return;

    // Measure First Contentful Paint
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime);
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // Measure Largest Contentful Paint
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  }

  getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  logPerformanceIssues(): void {
    const { searchTime, renderTime } = this.metrics;
    
    if (searchTime && searchTime > 200) {
      console.warn('Search performance issue detected:', searchTime);
    }
    
    if (renderTime && renderTime > 100) {
      console.warn('Render performance issue detected:', renderTime);
    }
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

// React performance utilities
import * as React from 'react';

export const withPerformanceTracking = (
  Component: React.ComponentType<any>,
  componentName: string
) => {
  const WrappedComponent = React.memo(React.forwardRef((props: any, ref: any) => {
    React.useEffect(() => {
      performanceMonitor.startTimer(`${componentName}-mount`);
      return () => {
        performanceMonitor.endTimer(`${componentName}-mount`);
      };
    }, []);

    return React.createElement(Component, { ...props, ref });
  }));
  
  WrappedComponent.displayName = `withPerformanceTracking(${componentName})`;
  return WrappedComponent;
};

// Throttle function for scroll events
export const createThrottledHandler = <T extends (...args: any[]) => void>(
  handler: T,
  delay: number = 16 // ~60fps
): T => {
  let lastCall = 0;
  let timeoutId: NodeJS.Timeout;

  return ((...args: Parameters<T>) => {
    const now = Date.now();
    
    if (now - lastCall >= delay) {
      handler(...args);
      lastCall = now;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handler(...args);
        lastCall = Date.now();
      }, delay - (now - lastCall));
    }
  }) as T;
};

// Debounce function for search inputs
export const createDebouncedHandler = <T extends (...args: any[]) => void>(
  handler: T,
  delay: number = 300
): T => {
  let timeoutId: NodeJS.Timeout;

  return ((...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => handler(...args), delay);
  }) as T;
};

// Memory cleanup utilities
export const cleanupPerformanceCaches = (): void => {
  // Clear any performance caches when needed
  if (typeof window !== 'undefined') {
    // Clear image caches
    const images = document.querySelectorAll('img[data-cached]');
    images.forEach(img => {
      img.removeAttribute('data-cached');
    });
  }
};

// Virtual scrolling performance helper
export const getVisibleRange = (
  scrollTop: number,
  containerHeight: number,
  itemHeight: number,
  totalItems: number,
  overscan: number = 3
): { start: number; end: number } => {
  const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const end = Math.min(totalItems - 1, start + visibleCount + overscan * 2);
  
  return { start, end };
};