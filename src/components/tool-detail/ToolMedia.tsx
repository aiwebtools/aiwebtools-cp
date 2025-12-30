import { useState, useRef, useEffect } from "react";
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

  // Intersection observer to detect when video is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Dispatch custom event for pinned player to know when main video is visible
          window.dispatchEvent(new CustomEvent('toolVideoVisibility', { 
            detail: { isVisible: entry.isIntersecting } 
          }));
          
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      // Reset visibility when unmounting
      window.dispatchEvent(new CustomEvent('toolVideoVisibility', { 
        detail: { isVisible: false } 
      }));
    };
  }, []);

  const getOptimizedEmbedUrl = (url: string) => {
    // Handle youtu.be short URLs (including ?si= query params)
    if (url.includes('youtu.be/')) {
      const pathPart = url.split('youtu.be/')[1];
      const videoId = pathPart.split(/[?&#]/)[0];
      // Autoplay unmuted at 1080p
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&enablejsapi=1&origin=${window.location.origin}&playsinline=1&modestbranding=1&fs=1&vq=hd1080`;
    }
    
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      // Autoplay unmuted at 1080p
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&enablejsapi=1&origin=${window.location.origin}&playsinline=1&modestbranding=1&fs=1&vq=hd1080`;
    }
    
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      // Autoplay unmuted at 1080p
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=0&autopause=1&muted=0&quality=1080p`;
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
          {isVisible ? (
            <iframe
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
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl sm:text-6xl glow-effect mb-4 block">{tool.emoji}</span>
                <span className="text-gray-400 text-sm">Loading video...</span>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (tool.imageUrl && !imageError) {
      return (
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-800" style={{ aspectRatio: '16/9' }}>
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center animate-pulse">
              <ImageIcon className="w-8 sm:w-12 h-8 sm:h-12 text-gray-500" />
            </div>
          )}
          <img
            src={tool.imageUrl}
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
