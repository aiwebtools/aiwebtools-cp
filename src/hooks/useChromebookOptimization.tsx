import { useState, useEffect } from 'react';

interface ChromebookDetection {
  isChromebook: boolean;
  isLowPowerDevice: boolean;
  shouldReduceAnimations: boolean;
  shouldOptimizeVideos: boolean;
  performanceLevel: 'high' | 'medium' | 'low';
}

export const useChromebookOptimization = (): ChromebookDetection => {
  const [detection, setDetection] = useState<ChromebookDetection>({
    isChromebook: false,
    isLowPowerDevice: false,
    shouldReduceAnimations: false,
    shouldOptimizeVideos: false,
    performanceLevel: 'high'
  });

  useEffect(() => {
    const detectDevice = () => {
      const ua = navigator.userAgent.toLowerCase();
      const platform = navigator.platform?.toLowerCase() || '';
      
      // Detect Chromebook
      const isChromebook = ua.includes('cros') || 
                          platform.includes('cros') ||
                          ua.includes('chromebook');
      
      // Detect device capabilities
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = (navigator as any).deviceMemory || 8;
      const connection = (navigator as any).connection;
      
      // Chromebooks often report lower specs or have ARM processors
      const isLowPowerDevice = 
        isChromebook ||
        hardwareConcurrency <= 4 ||
        deviceMemory <= 4 ||
        (connection && connection.effectiveType && 
         ['slow-2g', '2g', '3g'].includes(connection.effectiveType));
      
      // Determine performance level
      let performanceLevel: 'high' | 'medium' | 'low' = 'high';
      
      if (isChromebook) {
        // Chromebooks get special treatment
        if (hardwareConcurrency <= 2 || deviceMemory <= 2) {
          performanceLevel = 'low';
        } else if (hardwareConcurrency <= 4 || deviceMemory <= 4) {
          performanceLevel = 'medium';
        }
      } else if (isLowPowerDevice) {
        if (hardwareConcurrency <= 2 || deviceMemory <= 2) {
          performanceLevel = 'low';
        } else {
          performanceLevel = 'medium';
        }
      }
      
      const shouldReduceAnimations = performanceLevel !== 'high';
      const shouldOptimizeVideos = performanceLevel !== 'high' || isChromebook;
      
      console.log('🖥️ Device Detection:', {
        isChromebook,
        isLowPowerDevice,
        hardwareConcurrency,
        deviceMemory,
        performanceLevel,
        userAgent: ua
      });
      
      setDetection({
        isChromebook,
        isLowPowerDevice,
        shouldReduceAnimations,
        shouldOptimizeVideos,
        performanceLevel
      });

      // Apply global optimizations
      if (shouldReduceAnimations) {
        document.documentElement.classList.add('reduce-animations');
        document.documentElement.style.setProperty('--animation-speed', '0.5');
      }
      
      if (isChromebook) {
        document.documentElement.classList.add('chromebook-mode');
        // Disable hardware acceleration for certain elements on Chromebook
        document.documentElement.style.setProperty('--transform-3d', 'none');
      }
    };

    detectDevice();
  }, []);

  return detection;
};
