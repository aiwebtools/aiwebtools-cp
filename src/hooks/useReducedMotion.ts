// Detect if we're in a limited browser and should defer animations for faster initial load
import { useState, useEffect } from 'react';

export const useReducedMotion = () => {
  // Always return false - we want to show effects to everyone
  return false;
};

// Hook to defer heavy animations until after initial paint
export const useDeferredAnimation = (delayMs: number = 500) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Detect Facebook/Instagram/TikTok in-app browsers
    const ua = navigator.userAgent || '';
    const isLimitedBrowser = ua.includes('FBAN') || ua.includes('FBAV') || ua.includes('FB_IAB') ||
                             ua.includes('Instagram') || ua.includes('LinkedInApp') || ua.includes('BytedanceWebview');
    
    // Longer delay for limited browsers, shorter for regular browsers
    const delay = isLimitedBrowser ? 1000 : delayMs;
    
    if (isLimitedBrowser) {
      console.log('📱 Limited browser detected - deferring animations for faster load');
    }

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        setTimeout(() => setReady(true), delay);
      });
    } else {
      setTimeout(() => setReady(true), delay);
    }
  }, [delayMs]);

  return ready;
};

export default useReducedMotion;
