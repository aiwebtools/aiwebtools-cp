// Build and runtime optimizations for maximum performance

// Bundle analysis and optimization
export const analyzeBundleSize = () => {
  if (typeof window === 'undefined') return;

  // Measure bundle loading performance
  const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  if (navigationEntries.length > 0) {
    const navigation = navigationEntries[0];
    console.log('Page Load Performance:', {
      'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
      'TCP Connect': navigation.connectEnd - navigation.connectStart,
      'Request': navigation.responseStart - navigation.requestStart,
      'Response': navigation.responseEnd - navigation.responseStart,
      'DOM Processing': navigation.domContentLoadedEventStart - navigation.responseEnd,
      'Total Load Time': navigation.loadEventEnd - navigation.fetchStart
    });
  }
};

// Critical CSS extraction
export const extractCriticalCSS = () => {
  const criticalStyles = [
    'body, html { margin: 0; padding: 0; }',
    '.min-h-screen { min-height: 100vh; }',
    '.bg-black { background-color: rgb(0, 0, 0); }',
    '.text-white { color: rgb(255, 255, 255); }'
  ].join('\n');

  const styleSheet = document.createElement('style');
  styleSheet.textContent = criticalStyles;
  document.head.insertBefore(styleSheet, document.head.firstChild);
};

// Resource hints for better loading
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.youtube.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });
};

// Image optimization utilities
export const optimizeImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px 0px'
  });

  images.forEach(img => imageObserver.observe(img));
};

// Code splitting utilities
export const loadComponentAsync = async <T>(
  importFn: () => Promise<{ default: T }>,
  fallback?: T
): Promise<T> => {
  try {
    const module = await importFn();
    return module.default;
  } catch (error) {
    console.warn('Failed to load component:', error);
    if (fallback) return fallback;
    throw error;
  }
};

// Service Worker registration for caching
export const registerServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered:', registration);
      
      // Listen for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, prompt user to refresh
              console.log('New content available, please refresh the page.');
            }
          });
        }
      });
    } catch (error) {
      console.warn('SW registration failed:', error);
    }
  }
};

// Memory management
export const optimizeMemoryUsage = () => {
  // Clean up unused DOM elements
  const cleanupUnusedElements = () => {
    const elements = document.querySelectorAll('[data-cleanup]');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isVisible && rect.top > window.innerHeight * 2) {
        // Element is far below viewport, remove it temporarily
        el.setAttribute('data-removed', 'true');
        el.remove();
      }
    });
  };

  // Throttled cleanup on scroll
  let cleanupTimeout: NodeJS.Timeout;
  window.addEventListener('scroll', () => {
    clearTimeout(cleanupTimeout);
    cleanupTimeout = setTimeout(cleanupUnusedElements, 1000);
  }, { passive: true });
};

// Font loading optimization
export const optimizeFontLoading = () => {
  // Preload critical fonts
  const fontFaces = [
    {
      family: 'Inter',
      src: 'url(/fonts/inter-var.woff2) format("woff2")',
      display: 'swap'
    }
  ];

  fontFaces.forEach(font => {
    const fontFace = new FontFace(font.family, font.src, { display: font.display as FontDisplay });
    fontFace.load().then(loadedFont => {
      document.fonts.add(loadedFont);
    }).catch(console.warn);
  });
};

// Initialize all optimizations
export const initializeOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Run immediately
  extractCriticalCSS();
  addResourceHints();
  
  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeImages();
      optimizeFontLoading();
      optimizeMemoryUsage();
    });
  } else {
    optimizeImages();
    optimizeFontLoading();
    optimizeMemoryUsage();
  }
  
  // Run on load
  window.addEventListener('load', () => {
    analyzeBundleSize();
    registerServiceWorker();
  });
};

// Performance budget monitoring
export const monitorPerformanceBudget = () => {
  const budgets = {
    firstContentfulPaint: 1500, // 1.5s
    largestContentfulPaint: 2500, // 2.5s
    cumulativeLayoutShift: 0.1,
    firstInputDelay: 100 // 100ms
  };

  if ('PerformanceObserver' in window) {
    // Monitor LCP
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.startTime > budgets.largestContentfulPaint) {
          console.warn('LCP budget exceeded:', entry.startTime);
        }
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor CLS
    new PerformanceObserver((list) => {
      let cls = 0;
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          cls += (entry as any).value;
        }
      }
      if (cls > budgets.cumulativeLayoutShift) {
        console.warn('CLS budget exceeded:', cls);
      }
    }).observe({ entryTypes: ['layout-shift'] });

    // Monitor FID
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if ((entry as any).processingStart - entry.startTime > budgets.firstInputDelay) {
          console.warn('FID budget exceeded:', (entry as any).processingStart - entry.startTime);
        }
      }
    }).observe({ entryTypes: ['first-input'] });
  }
};