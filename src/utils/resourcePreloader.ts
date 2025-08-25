// Resource preloading utilities for faster loading

interface PreloadOptions {
  priority?: 'high' | 'low';
  as?: 'image' | 'script' | 'style' | 'font' | 'fetch';
  crossOrigin?: 'anonymous' | 'use-credentials';
}

class ResourcePreloader {
  private preloadedResources = new Set<string>();
  private preloadQueue: Array<{ url: string; options: PreloadOptions }> = [];
  private isProcessing = false;

  preloadImage(src: string, priority: 'high' | 'low' = 'low'): Promise<void> {
    if (this.preloadedResources.has(src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.preloadedResources.add(src);
        resolve();
      };
      img.onerror = reject;
      img.src = src;
      
      // Add priority attributes for browsers that support it
      if (priority === 'high') {
        img.loading = 'eager';
        img.decoding = 'sync';
      } else {
        img.loading = 'lazy';
        img.decoding = 'async';
      }
    });
  }

  preloadResource(url: string, options: PreloadOptions = {}): void {
    if (this.preloadedResources.has(url)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    
    if (options.as) link.as = options.as;
    if (options.crossOrigin) link.crossOrigin = options.crossOrigin;
    if (options.priority === 'high') link.setAttribute('importance', 'high');

    document.head.appendChild(link);
    this.preloadedResources.add(url);
  }

  preloadCriticalResources(): void {
    // Preload critical images
    const criticalImages = [
      '/lovable-uploads/d96aa982-9238-415c-b8ae-c2f4b91d5392.png',
      '/lovable-uploads/e6d2f727-a376-43a3-850b-fd2606230975.png'
    ];

    criticalImages.forEach(src => {
      this.preloadImage(src, 'high').catch(console.warn);
    });

    // Preload critical styles
    this.preloadResource('/src/index.css', { as: 'style', priority: 'high' });
  }

  preloadToolImages(tools: any[]): void {
    // Preload first batch of tool images
    const visibleTools = tools.slice(0, 12);
    visibleTools.forEach(tool => {
      if (tool.imageUrl) {
        this.preloadImage(tool.imageUrl, 'low').catch(() => {
          // Silent fail for non-critical images
        });
      }
    });
  }

  preloadRouteChunks(routes: string[]): void {
    // Preload route chunks for faster navigation
    routes.forEach(route => {
      const moduleId = `./pages/${route}.tsx`;
      if ('modulePreload' in document.createElement('link')) {
        this.preloadResource(moduleId, { as: 'script' });
      }
    });
  }

  // Intersection Observer for lazy preloading
  createLazyPreloader(selector: string): IntersectionObserver {
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const imageSrc = element.dataset.preloadSrc;
          if (imageSrc) {
            this.preloadImage(imageSrc, 'low');
            element.removeAttribute('data-preload-src');
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });
  }

  // Queue system for batched preloading
  queueResource(url: string, options: PreloadOptions = {}): void {
    this.preloadQueue.push({ url, options });
    this.processQueue();
  }

  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.preloadQueue.length === 0) return;
    
    this.isProcessing = true;
    
    // Process in batches to avoid overwhelming the browser
    const batchSize = 3;
    while (this.preloadQueue.length > 0) {
      const batch = this.preloadQueue.splice(0, batchSize);
      
      await Promise.allSettled(
        batch.map(({ url, options }) => {
          if (options.as === 'image') {
            return this.preloadImage(url, options.priority);
          } else {
            this.preloadResource(url, options);
            return Promise.resolve();
          }
        })
      );
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 16));
    }
    
    this.isProcessing = false;
  }

  // Cleanup method
  cleanup(): void {
    this.preloadedResources.clear();
    this.preloadQueue.length = 0;
    this.isProcessing = false;
  }
}

export const resourcePreloader = new ResourcePreloader();

// Initialize critical resource preloading
if (typeof window !== 'undefined') {
  // Preload on page load
  window.addEventListener('load', () => {
    resourcePreloader.preloadCriticalResources();
  });

  // Preload on idle
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      resourcePreloader.preloadRouteChunks(['CategoryPage', 'ToolDetail']);
    });
  }
}

// React hook for component-level preloading
import * as React from 'react';

export const useResourcePreloader = (resources: Array<{ url: string; options?: PreloadOptions }>) => {
  React.useEffect(() => {
    resources.forEach(({ url, options }) => {
      resourcePreloader.queueResource(url, options);
    });
  }, [resources]);
};