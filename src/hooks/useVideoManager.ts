import { useEffect, useRef } from 'react';

// Global video manager to ensure only one video plays at a time
class VideoManager {
  private currentVideo: HTMLIFrameElement | null = null;
  private observers: Map<HTMLIFrameElement, IntersectionObserver> = new Map();
  private isMuted: boolean = false;

  registerVideo(iframe: HTMLIFrameElement, toolId: string) {
    // Prevent duplicate registrations
    if (this.observers.has(iframe)) {
      console.log(`⚠️ Video ${toolId} already registered, skipping...`);
      return;
    }

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
        threshold: isMobile ? 0.5 : 0.6, // Higher threshold for smoother transitions
        rootMargin: '0px' // No margin to avoid edge cases
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
      const isRestrictiveBrowser = (
        userAgent.includes('facebook') ||
        userAgent.includes('instagram') ||
        userAgent.includes('twitter') ||
        !navigator.cookieEnabled
      );
      
      // Single, clean play command to avoid stuttering
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
      
      // Only unmute if specifically needed
      if (forceUnmute || isRestrictiveBrowser) {
        setTimeout(() => {
          iframe.contentWindow?.postMessage(
            '{"event":"command","func":"unMute","args":""}',
            '*'
          );
        }, 100);
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

  muteAll() {
    this.isMuted = true;
    this.observers.forEach((_, iframe) => {
      try {
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"mute","args":""}',
          '*'
        );
      } catch (error) {
        console.warn('Could not mute video:', error);
      }
    });
  }

  unmuteAll() {
    this.isMuted = false;
    this.observers.forEach((_, iframe) => {
      try {
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"unMute","args":""}',
          '*'
        );
      } catch (error) {
        console.warn('Could not unmute video:', error);
      }
    });
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