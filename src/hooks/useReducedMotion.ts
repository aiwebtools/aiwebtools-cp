// Detect if we should reduce animations (Facebook browser, low-power mode, user preference)
import { useState, useEffect } from 'react';

export const useReducedMotion = () => {
  const [shouldReduce, setShouldReduce] = useState(false);

  useEffect(() => {
    // Check user's OS-level reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Detect Facebook in-app browser (has limited JS performance)
    const ua = navigator.userAgent || '';
    const isFacebookBrowser = ua.includes('FBAN') || ua.includes('FBAV') || ua.includes('FB_IAB');
    
    // Detect other in-app browsers with limited performance
    const isInstagramBrowser = ua.includes('Instagram');
    const isLinkedInBrowser = ua.includes('LinkedInApp');
    const isTikTokBrowser = ua.includes('BytedanceWebview');
    
    const isLimitedBrowser = isFacebookBrowser || isInstagramBrowser || isLinkedInBrowser || isTikTokBrowser;
    
    setShouldReduce(prefersReducedMotion || isLimitedBrowser);
    
    if (isLimitedBrowser) {
      console.log('📱 Limited in-app browser detected - reducing animations for better performance');
    }
  }, []);

  return shouldReduce;
};

export default useReducedMotion;
