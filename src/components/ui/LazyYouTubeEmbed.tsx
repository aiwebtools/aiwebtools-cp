import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

interface LazyYouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  aspectRatio?: string;
  autoplayOnVisible?: boolean;
  showPlayButton?: boolean;
}

// Extract video ID from various YouTube URL formats
export const extractYouTubeId = (url: string): string | null => {
  if (!url) return null;
  
  // Already just an ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
  
  // Standard youtube.com/watch?v=
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];
  
  // Shortened youtu.be/ - extract ID before any query params (handles ?si= etc)
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})(?:[?&]|$)/);
  if (shortMatch) return shortMatch[1];
  
  // Embed URL
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];
  
  return null;
};

const LazyYouTubeEmbed = ({
  videoId,
  title = "YouTube Video",
  className = "",
  aspectRatio = "16/9",
  autoplayOnVisible = false,
  showPlayButton = true
}: LazyYouTubeEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Extract ID if full URL was passed
  const actualVideoId = extractYouTubeId(videoId) || videoId;
  
  // High quality thumbnail URL
  const thumbnailUrl = `https://i.ytimg.com/vi/${actualVideoId}/hqdefault.jpg`;
  const maxResThumbnail = `https://i.ytimg.com/vi/${actualVideoId}/maxresdefault.jpg`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNearViewport(true);
            if (autoplayOnVisible) {
              setIsLoaded(true);
            }
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" } // Start loading when 200px from viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoplayOnVisible]);

  const handleClick = () => {
    setIsLoaded(true);
  };

  // Adaptive quality — forcing HD on small embeds causes buffering & glitchy playback.
  const embedUrl = `https://www.youtube.com/embed/${actualVideoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-slate-800 cursor-pointer ${className}`}
      style={{ aspectRatio }}
      onClick={!isLoaded ? handleClick : undefined}
    >
      {!isLoaded ? (
        <>
          {/* Thumbnail with progressive loading */}
          {isNearViewport && (
            <picture>
              <source srcSet={maxResThumbnail} type="image/jpeg" />
              <img
                src={thumbnailUrl}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
          )}
          
          {/* Loading placeholder when not near viewport */}
          {!isNearViewport && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 animate-pulse" />
          )}
          
          {/* Play button overlay */}
          {showPlayButton && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
              </div>
            </div>
          )}
          
          {/* Video title tooltip */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <span className="text-white text-sm font-medium truncate block">{title}</span>
          </div>
        </>
      ) : (
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={title}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyYouTubeEmbed;
