// Simple performance monitoring for loading optimizations
export class PerformanceMonitor {
  private static marks: Map<string, number> = new Map();
  
  static mark(name: string) {
    if (typeof performance !== 'undefined') {
      performance.mark(name);
      this.marks.set(name, performance.now());
    }
  }
  
  static measure(name: string, startMark: string, endMark: string) {
    if (typeof performance !== 'undefined') {
      try {
        performance.measure(name, startMark, endMark);
        const entry = performance.getEntriesByName(name)[0];
        console.log(`⚡ Performance: ${name} took ${entry.duration.toFixed(2)}ms`);
        return entry.duration;
      } catch (error) {
        console.warn(`Failed to measure ${name}:`, error);
      }
    }
    return null;
  }
  
  static getPageLoadTime() {
    if (typeof performance !== 'undefined' && performance.timing) {
      const timing = performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      console.log(`📊 Total page load time: ${loadTime}ms`);
      return loadTime;
    }
    return null;
  }
  
  static trackInitialRender() {
    if (typeof performance !== 'undefined') {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            console.log(`🎨 ${entry.name}: ${entry.startTime.toFixed(2)}ms`);
          }
        });
      });
      
      try {
        observer.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('Paint timing not supported');
      }
    }
  }
}

// Auto-track page performance
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      PerformanceMonitor.getPageLoadTime();
      PerformanceMonitor.trackInitialRender();
    }, 100);
  });
}