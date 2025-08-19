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

    // Set up intersection observer to play/pause based on visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible, play it
            this.playVideo(iframe);
            this.currentVideo = iframe;
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
        threshold: 0.5, // Play when 50% visible
        rootMargin: '-10px' // Add some margin
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
      // Send play command to YouTube iframe
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
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