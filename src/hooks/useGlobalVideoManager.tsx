import { createContext, useContext, useCallback, useRef, useEffect } from 'react';

interface VideoManagerContextType {
  registerVideo: (id: string, pauseCallback: () => void) => void;
  unregisterVideo: (id: string) => void;
  notifyVideoPlaying: (id: string) => void;
}

const VideoManagerContext = createContext<VideoManagerContextType | null>(null);

// Global registry for videos - persists across component renders
const videoRegistry = new Map<string, () => void>();
let currentlyPlayingId: string | null = null;

export const VideoManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const registerVideo = useCallback((id: string, pauseCallback: () => void) => {
    videoRegistry.set(id, pauseCallback);
  }, []);

  const unregisterVideo = useCallback((id: string) => {
    videoRegistry.delete(id);
    if (currentlyPlayingId === id) {
      currentlyPlayingId = null;
    }
  }, []);

  const notifyVideoPlaying = useCallback((id: string) => {
    // Pause all other videos
    videoRegistry.forEach((pauseCallback, videoId) => {
      if (videoId !== id) {
        pauseCallback();
      }
    });
    currentlyPlayingId = id;
  }, []);

  return (
    <VideoManagerContext.Provider value={{ registerVideo, unregisterVideo, notifyVideoPlaying }}>
      {children}
    </VideoManagerContext.Provider>
  );
};

export const useGlobalVideoManager = () => {
  const context = useContext(VideoManagerContext);
  if (!context) {
    // Return no-op functions if used outside provider
    return {
      registerVideo: () => {},
      unregisterVideo: () => {},
      notifyVideoPlaying: () => {},
    };
  }
  return context;
};

// Hook for individual video components to use
export const useManagedVideo = (videoId: string) => {
  const { registerVideo, unregisterVideo, notifyVideoPlaying } = useGlobalVideoManager();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const isPlayingRef = useRef(false);

  const pauseVideo = useCallback(() => {
    if (iframeRef.current && isPlayingRef.current) {
      // For YouTube iframes, we need to use postMessage API
      const iframe = iframeRef.current;
      if (iframe.src.includes('youtube.com') || iframe.src.includes('youtu.be')) {
        iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
      isPlayingRef.current = false;
    }
  }, []);

  const onPlay = useCallback(() => {
    isPlayingRef.current = true;
    notifyVideoPlaying(videoId);
  }, [notifyVideoPlaying, videoId]);

  useEffect(() => {
    registerVideo(videoId, pauseVideo);
    return () => {
      unregisterVideo(videoId);
    };
  }, [videoId, registerVideo, unregisterVideo, pauseVideo]);

  return {
    iframeRef,
    onPlay,
    pauseVideo,
    setIframeRef: (ref: HTMLIFrameElement | null) => {
      iframeRef.current = ref;
    }
  };
};

// Utility to pause all videos globally (useful for popups)
export const pauseAllVideos = () => {
  videoRegistry.forEach((pauseCallback) => {
    pauseCallback();
  });
  currentlyPlayingId = null;
};

// Listen for YouTube iframe API messages to detect play events
if (typeof window !== 'undefined') {
  window.addEventListener('message', (event) => {
    // YouTube sends messages when video state changes
    try {
      const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
      if (data.event === 'onStateChange' && data.info === 1) {
        // Video started playing - this is handled by individual components
      }
    } catch {
      // Not a JSON message, ignore
    }
  });
}
