import { useEffect, useRef } from 'react';

// Global video manager to ensure only one video plays at a time
class VideoManager {
  private currentVideo: HTMLIFrameElement | null = null;
  private observers: Map<HTMLIFrameElement, IntersectionObserver> = new Map();

  registerVideo(iframe: HTMLIFrameElement, toolId: string) {
    // Stop any currently playing video
    if (this.currentVideo && this.currentVideo !== iframe) {
      this.pauseVideo(this.currentVideo);
    }

    // Enhanced browser detection for video handling
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isRestrictiveBrowser = (
      userAgent.includes('facebook') ||
      userAgent.includes('instagram') ||
      userAgent.includes('twitter') ||
      !navigator.cookieEnabled
    );
    
    // Set up intersection observer to play/pause based on visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible
            console.log(`🎥 Video ${toolId} visible - attempting play`);
            
            if (isRestrictiveBrowser) {
              // Restrictive browsers: Wait for explicit user interaction
              console.log(`🚫 Restrictive browser detected - waiting for user interaction for ${toolId}`);
              
              const handleRestrictivePlay = () => {
                console.log(`🎥 User interaction - playing ${toolId} in restrictive browser`);
                this.playVideo(iframe, true); // Force unmute for restrictive browsers
                this.currentVideo = iframe;
                
                // Remove all listeners
                document.removeEventListener('click', handleRestrictivePlay);
                document.removeEventListener('touchstart', handleRestrictivePlay);
                document.removeEventListener('scroll', handleRestrictivePlay);
              };
              
              // Multiple interaction types for restrictive browsers
              document.addEventListener('click', handleRestrictivePlay, { once: true });
              document.addEventListener('touchstart', handleRestrictivePlay, { once: true, passive: true });
              document.addEventListener('scroll', handleRestrictivePlay, { once: true, passive: true });
              
            } else if (isMobile) {
              // Mobile: Enhanced autoplay handling
              const handleMobilePlay = () => {
                console.log(`📱 Mobile interaction - playing ${toolId}`);
                this.playVideo(iframe, false);
                this.currentVideo = iframe;
                document.removeEventListener('touchstart', handleMobilePlay);
                document.removeEventListener('click', handleMobilePlay);
              };
              
              // Try immediate play first
              this.playVideo(iframe, false);
              this.currentVideo = iframe;
              
              // Add interaction listeners as backup
              document.addEventListener('touchstart', handleMobilePlay, { once: true, passive: true });
              document.addEventListener('click', handleMobilePlay, { once: true });
            } else {
              // Desktop: Direct play with cookie independence
              console.log(`🖥️ Desktop - playing ${toolId}`);
              this.playVideo(iframe, false);
              this.currentVideo = iframe;
            }
          } else {
            // Video is not visible, pause it
            this.pauseVideo(iframe);
            if (this.currentVideo === iframe) {
              this.currentVideo = null;
            }
          }
        });
      },
      {
        threshold: isMobile ? 0.3 : 0.5, // Lower threshold for mobile
        rootMargin: isMobile ? '-5px' : '-10px' // Smaller margin for mobile
      }
    );

    observer.observe(iframe);
    this.observers.set(iframe, observer);
  }

  unregisterVideo(iframe: HTMLIFrameElement) {
    const observer = this.observers.get(iframe);
    if (observer) {
      observer.disconnect();
      this.observers.delete(iframe);
    }

    if (this.currentVideo === iframe) {
      this.currentVideo = null;
    }
  }

  private playVideo(iframe: HTMLIFrameElement, forceUnmute: boolean = false) {
    try {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isRestrictiveBrowser = (
        userAgent.includes('facebook') ||
        userAgent.includes('instagram') ||
        userAgent.includes('twitter') ||
        !navigator.cookieEnabled
      );
      
      console.log(`🎥 Playing video - Mobile: ${isMobile}, Restrictive: ${isRestrictiveBrowser}, ForceUnmute: ${forceUnmute}`);
      
      // Enhanced video commands with cookie independence
      const commands = [
        '{"event":"command","func":"playVideo","args":""}',
      ];
      
      if (forceUnmute || isRestrictiveBrowser) {
        // For restrictive browsers or when explicitly requested
        commands.push(
          '{"event":"command","func":"unMute","args":""}',
          '{"event":"command","func":"setVolume","args":"100"}'
        );
      }
      
      // Send commands with staggered timing for better compatibility
      commands.forEach((command, index) => {
        setTimeout(() => {
          try {
            iframe.contentWindow?.postMessage(command, '*');
          } catch (cmdError) {
            console.warn(`Video command ${index} failed:`, cmdError);
          }
        }, index * 200);
      });
      
      // Additional retry for restrictive browsers
      if (isRestrictiveBrowser) {
        setTimeout(() => {
          try {
            iframe.contentWindow?.postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              '*'
            );
          } catch (retryError) {
            console.warn('Video retry failed:', retryError);
          }
        }, 1000);
      }
      
    } catch (error) {
      console.warn('Could not send play command to video:', error);
    }
  }

  private pauseVideo(iframe: HTMLIFrameElement) {
    try {
      // Send pause command to YouTube iframe
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
    } catch (error) {
      console.warn('Could not send pause command to video:', error);
    }
  }

  cleanup() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();
    this.currentVideo = null;
  }
}

// Global instance
const videoManager = new VideoManager();

export const useVideoManager = (toolId: string) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      // Small delay to ensure iframe is ready
      const timer = setTimeout(() => {
        videoManager.registerVideo(iframe, toolId);
      }, 100);

      return () => {
        clearTimeout(timer);
        videoManager.unregisterVideo(iframe);
      };
    }
  }, [toolId]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (iframeRef.current) {
        videoManager.unregisterVideo(iframeRef.current);
      }
    };
  }, []);

  return iframeRef;
};

export default videoManager;