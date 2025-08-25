// Performance optimization index - exports all performance utilities
import { 
  initializeOptimizations,
  monitorPerformanceBudget
} from './buildOptimizations';

import { 
  clearPerformanceCaches as searchCleanup 
} from './search/performanceOptimizations';

// Core performance utilities
export { useDebounce } from '@/hooks/useDebounce';
export { 
  performanceMonitor,
  withPerformanceTracking,
  createThrottledHandler,
  createDebouncedHandler,
  cleanupPerformanceCaches
} from './performanceMonitoring';

// Search and cache optimizations
export {
  fastTitleMatch,
  fastFilter,
  fastSearch,
  batchDOMOperations,
  throttle,
  clearPerformanceCaches
} from './search/performanceOptimizations';

export {
  searchCache,
  imageCache,
  componentCache,
  useCachedValue,
  getCachedSearchResults,
  setCachedSearchResults
} from './cacheManager';

// Resource management
export {
  resourcePreloader,
  useResourcePreloader
} from './resourcePreloader';

// Build and runtime optimizations
export {
  analyzeBundleSize,
  extractCriticalCSS,
  addResourceHints,
  optimizeImages,
  loadComponentAsync,
  registerServiceWorker,
  optimizeMemoryUsage,
  optimizeFontLoading,
  initializeOptimizations,
  monitorPerformanceBudget
} from './buildOptimizations';

// Performance constants and thresholds
export const PERFORMANCE_THRESHOLDS = {
  SEARCH_DEBOUNCE_MS: 150,
  SCROLL_THROTTLE_MS: 16, // ~60fps
  CACHE_TTL_MS: 5 * 60 * 1000, // 5 minutes
  IMAGE_PRELOAD_COUNT: 12,
  VIRTUAL_SCROLL_THRESHOLD: 100,
  BATCH_SIZE: 3,
  MEMORY_CLEANUP_DELAY: 1000
} as const;

// Performance measurement utilities
export const measurePerformance = <T>(
  name: string,
  fn: () => T
): T => {
  const start = performance.now();
  const result = fn();
  const duration = performance.now() - start;
  
  if (duration > 100) {
    console.warn(`Performance: ${name} took ${duration.toFixed(2)}ms`);
  }
  
  return result;
};

// Async performance measurement
export const measureAsync = async <T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> => {
  const start = performance.now();
  try {
    const result = await fn();
    const duration = performance.now() - start;
    
    if (duration > 200) {
      console.warn(`Async Performance: ${name} took ${duration.toFixed(2)}ms`);
    }
    
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    console.error(`Async Performance Error: ${name} failed after ${duration.toFixed(2)}ms`, error);
    throw error;
  }
};

// Bundle size estimation
export const estimateBundleImpact = (componentName: string, size: number) => {
  console.log(`Bundle Impact: ${componentName} adds ~${(size / 1024).toFixed(1)}KB`);
  
  if (size > 100 * 1024) { // 100KB
    console.warn(`Large component detected: ${componentName} (${(size / 1024).toFixed(1)}KB)`);
  }
};

// Real-time performance monitoring
export const startPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;

  let frameCount = 0;
  let lastTime = performance.now();

  const measureFrameRate = () => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) { // Every second
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      
      if (fps < 30) {
        console.warn(`Low FPS detected: ${fps}fps`);
      }
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(measureFrameRate);
  };

  requestAnimationFrame(measureFrameRate);
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    console.log('Memory Usage:', {
      used: `${(memory.usedJSHeapSize / 1048576).toFixed(1)}MB`,
      total: `${(memory.totalJSHeapSize / 1048576).toFixed(1)}MB`,
      limit: `${(memory.jsHeapSizeLimit / 1048576).toFixed(1)}MB`
    });
    
    if (memory.usedJSHeapSize / memory.jsHeapSizeLimit > 0.9) {
      console.warn('High memory usage detected');
    }
  }
};

// Complete performance initialization
export const initializeAllPerformanceFeatures = () => {
  // Core optimizations
  initializeOptimizations();
  
  // Monitoring
  startPerformanceMonitoring();
  monitorPerformanceBudget();
  
  // Memory management
  setInterval(monitorMemoryUsage, 30000); // Every 30 seconds
  
  // Cache cleanup
  setInterval(() => {
    searchCleanup();
  }, 5 * 60 * 1000); // Every 5 minutes
  
  console.log('🚀 All performance features initialized');
};