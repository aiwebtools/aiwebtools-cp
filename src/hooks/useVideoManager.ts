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

    // Browser-specific video handling
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isFacebook = /FBAN|FBAV|Instagram/i.test(navigator.userAgent);
    
    console.log(`🔍 Browser Detection - Mobile: ${isMobile}, Facebook: ${isFacebook}`);
    
    // Set up intersection observer to play/pause based on visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible
            console.log(`🎥 Video ${toolId} visible - attempting play`);
            
            if (isFacebook) {
              // Facebook Browser: Requires explicit user interaction
              console.log('📘 Facebook browser detected - requiring user interaction for video unmute');
              
              const handleFacebookPlay = () => {
                console.log('👆 Facebook: User interaction received - attempting video play and unmute');
                this.playVideo(iframe);
                this.currentVideo = iframe;
                // Remove all listeners after first interaction
                document.removeEventListener('touchstart', handleFacebookPlay);
                document.removeEventListener('click', handleFacebookPlay);
                document.removeEventListener('touchend', handleFacebookPlay);
                document.removeEventListener('scroll', handleFacebookPlay);
              };
              
              // For Facebook: Only play after user interaction
              document.addEventListener('touchstart', handleFacebookPlay, { once: true, passive: true });
              document.addEventListener('click', handleFacebookPlay, { once: true });
              document.addEventListener('touchend', handleFacebookPlay, { once: true, passive: true });
              document.addEventListener('scroll', handleFacebookPlay, { once: true, passive: true });
              
              // Don't auto-play in Facebook browser
              console.log('📘 Facebook: Waiting for user interaction...');
              
            } else if (isMobile) {
              // Other Mobile: Add user interaction listener for autoplay
              const handleMobilePlay = () => {
                this.playVideo(iframe);
                this.currentVideo = iframe;
                document.removeEventListener('touchstart', handleMobilePlay);
                document.removeEventListener('click', handleMobilePlay);
              };
              
              // Try immediate play first
              this.playVideo(iframe);
              this.currentVideo = iframe;
              
              // Add interaction listeners as backup
              document.addEventListener('touchstart', handleMobilePlay, { once: true, passive: true });
              document.addEventListener('click', handleMobilePlay, { once: true });
            } else {
              // Desktop: Direct play
              this.playVideo(iframe);
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

  private playVideo(iframe: HTMLIFrameElement) {
    try {
      // Browser-specific video play commands
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isFacebook = /FBAN|FBAV|Instagram/i.test(navigator.userAgent);
      
      if (isFacebook) {
        // Facebook Browser: More aggressive unmuting approach
        console.log('📘 Facebook browser video play - using enhanced unmute sequence');
        
        // Method 1: Immediate play and unmute
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
        
        // Method 2: Immediate unmute attempts
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"unMute","args":""}',
          '*'
        );
        
        // Method 3: Multiple volume and unmute attempts with delays
        setTimeout(() => {
          iframe.contentWindow?.postMessage(
            '{"event":"command","func":"setVolume","args":"100"}',
            '*'
          );
          iframe.contentWindow?.postMessage(
            '{"event":"command","func":"unMute","args":""}',
            '*'
          );
        }, 250);
        
        setTimeout(() => {
          iframe.contentWindow?.postMessage(
            '{"event":"command","func":"unMute","args":""}',
            '*'
          );
          iframe.contentWindow?.postMessage(
            '{"event":"command","func":"setVolume","args":"100"}',
            '*'
          );
        }, 750);
        
      } else if (isMobile) {
        // Other mobile: Try multiple methods to ensure playback
        console.log('📱 Mobile video play attempt');
        
        // Method 1: Standard YouTube API command
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
        
        // Method 2: Fallback with user interaction trigger
        setTimeout(() => {
          iframe.contentWindow?.postMessage(
            '{"event":"command","func":"unMute","args":""}',
            '*'
          );
          iframe.contentWindow?.postMessage(
            '{"event":"command","func":"setVolume","args":"100"}',
            '*'
          );
        }, 500);
        
      } else {
        // Desktop: Standard play command
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
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