// Performance optimization utilities

export const prefetchRoute = (route: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

export const prefetchComponent = async (componentPath: string) => {
  try {
    await import(componentPath);
  } catch (error) {
    console.warn(`Failed to prefetch component: ${componentPath}`, error);
  }
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Virtual scrolling helper for large lists
export const calculateVisibleItems = (
  scrollTop: number,
  itemHeight: number,
  containerHeight: number,
  totalItems: number,
  overscan: number = 5
) => {
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    totalItems - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  );
  
  return { startIndex, endIndex, visibleCount: endIndex - startIndex + 1 };
};

// Intersection Observer for lazy loading
export const createLazyLoadObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers without IntersectionObserver
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  });
};

// Resource preloading
export const preloadResources = (resources: Array<{ href: string; type: 'image' | 'script' | 'style' }>) => {
  resources.forEach(({ href, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = type;
    document.head.appendChild(link);
  });
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
    };
  }
  return null;
};

// Performance mark utilities
export const markPerformance = (name: string) => {
  if ('performance' in window && performance.mark) {
    performance.mark(name);
  }
};

export const measurePerformance = (name: string, startMark: string, endMark: string) => {
  if ('performance' in window && performance.measure) {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      console.log(`Performance: ${name} took ${measure.duration.toFixed(2)}ms`);
      return measure.duration;
    } catch (error) {
      console.warn(`Failed to measure performance for ${name}:`, error);
    }
  }
  return null;
};