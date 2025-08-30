import { useEffect, useState, useCallback } from 'react';
import { browserCompatibility, addPolyfills } from '@/utils/browserCompatibility';

interface OptimizationState {
  isLoaded: boolean;
  performanceTier: 'high' | 'medium' | 'low';
  shouldReduceMotion: boolean;
  shouldOptimizeImages: boolean;
  shouldLazyLoad: boolean;
  touchOptimized: boolean;
}

export const useCrossBrowserOptimization = () => {
  const [state, setState] = useState<OptimizationState>({
    isLoaded: false,
    performanceTier: 'medium',
    shouldReduceMotion: false,
    shouldOptimizeImages: false,
    shouldLazyLoad: true,
    touchOptimized: false
  });

  useEffect(() => {
    // Add polyfills for older browsers
    addPolyfills();

    // Detect capabilities and set optimization state
    const performanceTier = browserCompatibility.getDevicePerformanceTier();
    const shouldReduceMotion = browserCompatibility.prefersReducedMotion();
    const hasLimitedBandwidth = browserCompatibility.hasLimitedBandwidth();
    const isTouchDevice = browserCompatibility.isTouchDevice();

    setState({
      isLoaded: true,
      performanceTier,
      shouldReduceMotion,
      shouldOptimizeImages: hasLimitedBandwidth || performanceTier === 'low',
      shouldLazyLoad: hasLimitedBandwidth || performanceTier !== 'high',
      touchOptimized: isTouchDevice
    });

    // Apply browser-specific CSS classes to document
    document.documentElement.classList.add(`device-${performanceTier}`);
    
    if (browserCompatibility.isIOS()) {
      document.documentElement.classList.add('is-ios');
    }
    if (browserCompatibility.isAndroid()) {
      document.documentElement.classList.add('is-android');
    }
    if (browserCompatibility.isSafari()) {
      document.documentElement.classList.add('is-safari');
    }
    if (browserCompatibility.isChrome()) {
      document.documentElement.classList.add('is-chrome');
    }
    if (browserCompatibility.isFirefox()) {
      document.documentElement.classList.add('is-firefox');
    }
    if (isTouchDevice) {
      document.documentElement.classList.add('touch-device');
    }
    if (shouldReduceMotion) {
      document.documentElement.classList.add('reduce-motion');
    }

    // Optimize performance based on device capabilities
    if (performanceTier === 'low') {
      // Disable expensive effects for low-end devices
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    }

  }, []);

  // Optimized event listener setup
  const addOptimizedEventListener = useCallback((
    element: Element,
    event: string,
    handler: EventListener,
    options?: AddEventListenerOptions
  ) => {
    const usePassive = browserCompatibility.supportsPassiveListeners();
    const optimizedOptions = {
      ...options,
      passive: usePassive && (event === 'touchstart' || event === 'touchmove' || event === 'wheel')
    };

    element.addEventListener(event, handler, optimizedOptions);
    
    return () => element.removeEventListener(event, handler, optimizedOptions);
  }, []);

  // Get optimized styles for current browser/device
  const getOptimizedStyles = useCallback(() => {
    const styles: React.CSSProperties = {};

    // iOS-specific fixes
    if (browserCompatibility.isIOS()) {
      styles.WebkitOverflowScrolling = 'touch';
      styles.WebkitTransform = 'translateZ(0)';
    }

    // Performance-based optimizations
    if (state.performanceTier === 'low') {
      styles.willChange = 'auto';
    } else {
      styles.willChange = 'transform, opacity';
    }

    return styles;
  }, [state.performanceTier]);

  // Safe feature detection
  const safeFeatureUse = useCallback((
    modernFeature: () => any,
    fallback: () => any
  ): any => {
    try {
      if (browserCompatibility.supportsModernFeatures()) {
        return modernFeature();
      }
      return fallback();
    } catch (error) {
      console.warn('Feature not supported, using fallback:', error);
      return fallback();
    }
  }, []);

  return {
    ...state,
    addOptimizedEventListener,
    getOptimizedStyles,
    safeFeatureUse,
    browserInfo: {
      isIOS: browserCompatibility.isIOS(),
      isAndroid: browserCompatibility.isAndroid(),
      isSafari: browserCompatibility.isSafari(),
      isChrome: browserCompatibility.isChrome(),
      isFirefox: browserCompatibility.isFirefox(),
      isEdge: browserCompatibility.isEdge(),
      isTouchDevice: browserCompatibility.isTouchDevice(),
      supportsWebP: browserCompatibility.supportsWebP(),
      supportsWebM: browserCompatibility.supportsWebM()
    }
  };
};