import { useState, useRef, useEffect, useCallback } from "react";
import { Image as ImageIcon } from "lucide-react";
import { Tool } from "@/types/tools";
import { getToolTagline } from "@/data/toolTaglines";

interface ToolMediaProps {
  tool: Tool;
  toolIndex: number;
}

const ToolMedia = ({ tool, toolIndex }: ToolMediaProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Unmute this video (after user clicks or interacts)
  const unmuteToolVideo = useCallback(() => {
    if (iframeRef.current) {
      try {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'unMute' }),
          'https://www.youtube.com'
        );
      } catch {}
    }
  }, []);

  // Mute this video when pinned player starts playing
  const handlePinnedPlayerPlaying = useCallback(() => {
    if (iframeRef.current) {
      try {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'mute' }),
          'https://www.youtube.com'
        );
      } catch {}
    }
  }, []);

  // NOTE: Tool pages do not show the pinned player; avoid listening for pinned-player events here
  // (this was causing occasional unexpected muting on individual tool pages).

  // Track last visibility state to prevent redundant events
  const lastVisibilityRef = useRef<boolean | null>(null);
  const visibilityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection observer to detect when video is in viewport - with debouncing
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const nowVisible = entry.isIntersecting;
          
          // Skip if visibility hasn't actually changed
          if (lastVisibilityRef.current === nowVisible) return;
          
          // Clear any pending visibility change
          if (visibilityTimeoutRef.current) {
            clearTimeout(visibilityTimeoutRef.current);
          }
          
          // Debounce visibility changes to prevent flickering during scroll
          visibilityTimeoutRef.current = setTimeout(() => {
            lastVisibilityRef.current = nowVisible;
            
            // Dispatch stable visibility event
            window.dispatchEvent(new CustomEvent('toolVideoVisibility', { 
              detail: { isVisible: nowVisible } 
            }));
            
            if (nowVisible) {
              setIsVisible(true);
              // When tool video becomes visible, mute the pinned player and unmute this video
              window.dispatchEvent(new CustomEvent('toolVideoPlaying'));
              // Try to force immediate sound + playback when it becomes visible
              // (Autoplay-with-sound may still be blocked until a user gesture in some browsers)
              setTimeout(() => {
                unmuteToolVideo();
                try {
                  iframeRef.current?.contentWindow?.postMessage(
                    JSON.stringify({ event: 'command', func: 'playVideo' }),
                    'https://www.youtube.com'
                  );
                } catch {}
              }, 0);
            }
          }, 150); // 150ms debounce prevents flickering
        });
      },
      { 
        threshold: [0.2, 0.5], // Multiple thresholds for smoother detection
        rootMargin: '-50px 0px' // Requires more of the video to be visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      // Clear pending timeout
      if (visibilityTimeoutRef.current) {
        clearTimeout(visibilityTimeoutRef.current);
      }
      // Reset visibility when unmounting
      lastVisibilityRef.current = null;
      window.dispatchEvent(new CustomEvent('toolVideoVisibility', { 
        detail: { isVisible: false } 
      }));
    };
  }, [unmuteToolVideo]);

  const getOptimizedEmbedUrl = (url: string) => {
    // Extract video ID from various YouTube formats
    let videoId = '';
    
    if (url.includes('youtu.be/')) {
      const pathPart = url.split('youtu.be/')[1];
      videoId = pathPart.split(/[?&#]/)[0];
    } else if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1].split(/[?&#]/)[0];
    }
    
    if (videoId) {
      // Force 1080p HD quality with immediate autoplay unmuted
      // Using multiple quality parameters for maximum compatibility
      // Adaptive quality — YouTube picks the best stream for the player size & connection (prevents buffer/glitch).
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&playsinline=1&modestbranding=1&fs=1&iv_load_policy=3&cc_load_policy=0&start=0`;
    }
    
    if (url.includes('vimeo.com/')) {
      const vimeoId = url.split('vimeo.com/')[1].split('?')[0];
      // Force 1080p quality with immediate autoplay unmuted
      return `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=0&autopause=0&muted=0&quality=1080p&dnt=1`;
    }
    
    return url;
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const MediaComponent = () => {
    // Prioritize video if available, then fallback to image
    if (tool.videoUrl && !videoError) {
      const embedUrl = getOptimizedEmbedUrl(tool.videoUrl);
      
      return (
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-800" style={{ aspectRatio: '16/9' }}>
          {/* Only render iframe when visible - prevents autoplay before scroll */}
          {isVisible ? (
            <iframe
              ref={iframeRef}
              width="100%"
              height="100%"
              src={embedUrl}
              title={`${tool.title} Demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              className="w-full h-full rounded-xl"
              loading="eager"
              style={{ 
                border: 'none',
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
              onError={handleVideoError}
            />
          ) : (
            /* Clean gradient placeholder until user scrolls to video */
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
          )}
        </div>
      );
    }

    // Convert /src/assets/ path to proper import URL for Vite (same as SpecialServices)
    const getResolvedImageUrl = (url: string): string => {
      if (url.startsWith('/src/assets/')) {
        const filename = url.replace('/src/assets/', '');
        return new URL(`../../assets/${filename}`, import.meta.url).href;
      }
      return url;
    };

    if (tool.imageUrl && !imageError) {
      const resolvedImageUrl = getResolvedImageUrl(tool.imageUrl);
      
      return (
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-800" style={{ aspectRatio: '16/9' }}>
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center animate-pulse">
              <ImageIcon className="w-8 sm:w-12 h-8 sm:h-12 text-gray-500" />
            </div>
          )}
          <img
            src={resolvedImageUrl}
            alt={`${tool.title} Preview`}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      );
    }
    
    return (
      <div className="w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-cyan-500/30 neon-border rounded-xl" style={{ aspectRatio: '16/9' }}>
        <span className="text-4xl sm:text-6xl glow-effect">{tool.emoji}</span>
      </div>
    );
  };

  // Get custom tagline or generate from description
  const tagline = getToolTagline(tool.title, tool.description);

  return (
    <div ref={containerRef} className="mb-4 sm:mb-6 px-4 sm:px-0">
      {/* Compact tagline above video */}
      {tagline && (
        <p className="text-gray-400 text-xs mb-2 text-center leading-snug max-w-lg mx-auto">
          {tagline}
        </p>
      )}
      <div className="shadow-lg border border-cyan-500/30 neon-border rounded-xl overflow-hidden">
        <MediaComponent />
      </div>
    </div>
  );
};

export default ToolMedia;
