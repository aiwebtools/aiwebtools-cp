// Performance optimization utilities for super-fast loading
import React, { useEffect, useState, useRef } from 'react';

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontPreloads = [
    'Inter',
    'system-ui',
  ];
  
  fontPreloads.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // Preload critical images
  const criticalImages = [
    '/lovable-uploads/d96aa982-9238-415c-b8ae-c2f4b91d5392.png',
    '/lovable-uploads/e6d2f727-a376-43a3-850b-fd2606230975.png'
  ];
  
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Optimize scroll performance
export const useScrollOptimization = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return { isScrolling };
};

// Intersection Observer for lazy loading
export const useLazyLoad = (
  ref: React.RefObject<Element>,
  threshold = 0.1
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [wasVisible, setWasVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisible) {
          setIsVisible(true);
          setWasVisible(true);
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, wasVisible]);

  return isVisible;
};

// Memory optimization for large lists
export const useMemoryOptimization = () => {
  const [memoryPressure, setMemoryPressure] = useState<'low' | 'medium' | 'high'>('low');
  
  useEffect(() => {
    // Check if we're on a low-end device
    const isLowEnd = 
      (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4 ||
      (navigator as any).hardwareConcurrency && (navigator as any).hardwareConcurrency < 4;
    
    if (isLowEnd) {
      setMemoryPressure('high');
    } else if ((navigator as any).deviceMemory && (navigator as any).deviceMemory < 8) {
      setMemoryPressure('medium');
    }
  }, []);

  return { memoryPressure };
};

// Bundle size optimization
export const loadComponentWhenNeeded = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ComponentType
) => {
  return React.lazy(importFunc);
};

// CSS optimization
export const optimizeCSS = () => {
  useEffect(() => {
    // Remove unused CSS (in production)
    if (import.meta.env.PROD) {
      // Add critical CSS inlining logic here if needed
      const style = document.createElement('style');
      style.textContent = `
        /* Critical above-the-fold CSS */
        body { font-family: Inter, system-ui, sans-serif; }
        .bg-black { background-color: #000; }
        .text-white { color: #fff; }
      `;
      document.head.appendChild(style);
    }
  }, []);
};

// Network optimization
export const useNetworkOptimization = () => {
  const [connectionType, setConnectionType] = useState<'slow' | 'fast'>('fast');
  
  useEffect(() => {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    
    if (connection) {
      const updateConnectionInfo = () => {
        // Check for slow connections (2G, slow-2g)
        if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
          setConnectionType('slow');
        } else {
          setConnectionType('fast');
        }
      };
      
      updateConnectionInfo();
      connection.addEventListener('change', updateConnectionInfo);
      
      return () => {
        connection.removeEventListener('change', updateConnectionInfo);
      };
    }
  }, []);

  return { connectionType };
};

// Performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals in production
    if (import.meta.env.PROD && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Log performance metrics
          if ('value' in entry) {
            console.log(`${entry.name}: ${(entry as any).value}`);
          } else {
            console.log(`${entry.name}: ${entry.duration || entry.startTime}`);
          }
        });
      });
      
      observer.observe({ entryTypes: ['measure', 'paint', 'largest-contentful-paint'] });
      
      return () => observer.disconnect();
    }
  }, []);
};

export default {
  preloadCriticalResources,
  useScrollOptimization,
  useLazyLoad,
  useMemoryOptimization,
  optimizeCSS,
  useNetworkOptimization,
  usePerformanceMonitoring
};