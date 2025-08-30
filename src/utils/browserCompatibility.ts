// Browser compatibility utilities
export const browserCompatibility = {
  // Check for various browser features
  supportsWebP: (): boolean => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  },

  supportsWebM: (): boolean => {
    const video = document.createElement('video');
    return video.canPlayType('video/webm; codecs="vp8, vorbis"') !== '';
  },

  supportsMP4: (): boolean => {
    const video = document.createElement('video');
    return video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') !== '';
  },

  supportsIntersectionObserver: (): boolean => {
    return 'IntersectionObserver' in window;
  },

  supportsPassiveListeners: (): boolean => {
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: () => {
          supportsPassive = true;
          return true;
        }
      });
      window.addEventListener('testPassive', () => {}, opts);
      window.removeEventListener('testPassive', () => {}, opts);
    } catch (e) {
      // Silent fail
    }
    return supportsPassive;
  },

  isTouchDevice: (): boolean => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0
    );
  },

  isIOS: (): boolean => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  },

  isAndroid: (): boolean => {
    return /Android/.test(navigator.userAgent);
  },

  isSafari: (): boolean => {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  },

  isChrome: (): boolean => {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  },

  isFirefox: (): boolean => {
    return navigator.userAgent.indexOf('Firefox') > -1;
  },

  isEdge: (): boolean => {
    return /Edge/.test(navigator.userAgent);
  },

  // Get optimal image format based on browser support
  getOptimalImageFormat: (): 'webp' | 'jpg' => {
    return browserCompatibility.supportsWebP() ? 'webp' : 'jpg';
  },

  // Get optimal video format based on browser support
  getOptimalVideoFormat: (): 'webm' | 'mp4' => {
    return browserCompatibility.supportsWebM() ? 'webm' : 'mp4';
  },

  // Add vendor prefixes for CSS properties
  addVendorPrefix: (property: string, value: string): Record<string, string> => {
    const prefixed: Record<string, string> = {};
    const prefixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];
    
    prefixes.forEach(prefix => {
      prefixed[prefix + property] = value;
    });
    
    return prefixed;
  },

  // Feature detection for modern capabilities
  supportsModernFeatures: (): boolean => {
    return (
      'requestAnimationFrame' in window &&
      'addEventListener' in window &&
      'querySelector' in document &&
      'localStorage' in window &&
      'sessionStorage' in window &&
      'JSON' in window
    );
  },

  // Get device performance tier
  getDevicePerformanceTier: (): 'high' | 'medium' | 'low' => {
    const memory = (navigator as any).deviceMemory;
    const cores = navigator.hardwareConcurrency || 1;
    
    // High-end devices
    if (memory >= 8 && cores >= 4) return 'high';
    
    // Mid-range devices  
    if (memory >= 4 && cores >= 2) return 'medium';
    
    // Low-end devices
    return 'low';
  },

  // Check if device prefers reduced motion
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Check if device has limited bandwidth
  hasLimitedBandwidth: (): boolean => {
    const connection = (navigator as any).connection;
    return connection && (
      connection.effectiveType === 'slow-2g' ||
      connection.effectiveType === '2g' ||
      connection.saveData === true
    );
  }
};

// Polyfills for older browsers
export const addPolyfills = (): void => {
  // IntersectionObserver polyfill
  if (!browserCompatibility.supportsIntersectionObserver()) {
    // Simple fallback that assumes all elements are visible
    (window as any).IntersectionObserver = class {
      constructor(callback: Function) {
        setTimeout(() => {
          callback([{ isIntersecting: true }]);
        }, 100);
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  }

  // RequestAnimationFrame polyfill
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (callback: FrameRequestCallback): number => {
      return window.setTimeout(callback, 1000 / 60);
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (id: number): void => {
      clearTimeout(id);
    };
  }
};