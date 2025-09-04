import { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  searchTime: number;
  renderTime: number;
  toolCount: number;
}

export const usePerformanceMonitor = () => {
  const metricsRef = useRef<PerformanceMetrics>({
    searchTime: 0,
    renderTime: 0,
    toolCount: 0
  });

  const startTimer = useCallback((operation: string) => {
    return performance.now();
  }, []);

  const endTimer = useCallback((startTime: number, operation: string, threshold = 100) => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    if (duration > threshold) {
      console.warn(`⚠️ Performance warning: ${operation} took ${duration.toFixed(2)}ms (threshold: ${threshold}ms)`);
    }
    
    return duration;
  }, []);

  const monitorSearchPerformance = useCallback((searchFn: Function, searchTerm: string) => {
    const startTime = startTimer('search');
    const result = searchFn();
    const duration = endTimer(startTime, `Search for "${searchTerm}"`, 50);
    
    metricsRef.current.searchTime = duration;
    return result;
  }, [startTimer, endTimer]);

  const monitorRenderPerformance = useCallback((renderFn: Function, componentName: string) => {
    const startTime = startTimer('render');
    const result = renderFn();
    const duration = endTimer(startTime, `Render ${componentName}`, 16); // 60fps threshold
    
    metricsRef.current.renderTime = duration;
    return result;
  }, [startTimer, endTimer]);

  const getMetrics = useCallback(() => {
    return { ...metricsRef.current };
  }, []);

  // Monitor long tasks
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 50) {
            console.warn(`🐌 Long task detected: ${entry.duration.toFixed(2)}ms`);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Long task API not supported
      }

      return () => observer.disconnect();
    }
  }, []);

  return {
    startTimer,
    endTimer,
    monitorSearchPerformance,
    monitorRenderPerformance,
    getMetrics
  };
};