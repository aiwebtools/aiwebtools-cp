import { useState, useRef, useEffect } from "react";
import { Tool } from "@/types/tools";
import { Play } from "lucide-react";

interface ToolCardMediaProps {
  tool: Tool;
  isFeatured: boolean;
  imageHeight: string;
}

// Extract video ID from various YouTube URL formats (handles ?si= query params)
const extractYouTubeId = (url: string): string | null => {
  if (!url) return null;
  
  if (url.includes('youtube.com/watch?v=')) {
    return url.split('v=')[1].split('&')[0];
  }
  if (url.includes('youtu.be/')) {
    // Handle youtu.be/VIDEO_ID?si=... format
    const pathPart = url.split('youtu.be/')[1];
    return pathPart.split(/[?&#]/)[0];
  }
  if (url.includes('youtube.com/embed/')) {
    return url.split('embed/')[1].split(/[?&#]/)[0];
  }
  return null;
};

// Convert /src/assets/ path to proper import URL for Vite
const getResolvedImageUrl = (url: string): string => {
  if (!url) return '';
  if (url.startsWith('/src/assets/')) {
    const filename = url.replace('/src/assets/', '');
    return new URL(`../../assets/${filename}`, import.meta.url).href;
  }
  return url;
};

const ToolCardMedia = ({ tool, isFeatured, imageHeight }: ToolCardMediaProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Resolve the image URL for Vite asset handling
  const resolvedImageUrl = tool.imageUrl ? getResolvedImageUrl(tool.imageUrl) : '';
  
  const hasImage = resolvedImageUrl && resolvedImageUrl.trim() !== '';
  const hasVideo = tool.videoUrl && tool.videoUrl.trim() !== '';
  const videoId = hasVideo ? extractYouTubeId(tool.videoUrl!) : null;
  const isYouTube = !!videoId;
  
  // Thumbnail URLs for fast loading
  const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNearViewport(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' }
    );
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVideoLoaded(true);
  };
  
  const getOptimizedEmbedUrl = (url: string) => {
    // Always use HD 1080p quality for best viewing experience
    if (videoId) {
      // Let YouTube auto-pick quality based on player size — forcing HD on tiny cards causes buffering/glitch playback.
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&playsinline=1&modestbranding=1&fs=1&iv_load_policy=3`;
    }
    if (url.includes('vimeo.com/')) {
      const vimeoId = url.split('vimeo.com/')[1].split('?')[0];
      return `https://player.vimeo.com/video/${vimeoId}?autoplay=1&volume=1&muted=0`;
    }
    return url;
  };
  
  return (
    <div 
      ref={containerRef}
      className={`${isFeatured ? 'mb-6' : 'mb-4'} rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative group-hover:scale-105 transition-transform duration-200`}
      style={{ aspectRatio: '16/9' }}
    >
      {/* YouTube video with thumbnail lazy loading */}
      {hasVideo && isYouTube && !isVideoLoaded ? (
        <div 
          className="relative w-full h-full cursor-pointer"
          onClick={handlePlayClick}
        >
          {/* Thumbnail - loads instantly */}
          {isNearViewport && thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={`${tool.title} video thumbnail`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse" />
          )}
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-white ml-1" fill="white" />
            </div>
          </div>
        </div>
      ) : hasVideo && isVideoLoaded ? (
        /* Full video iframe - only loaded after click */
        <iframe
          width="100%"
          height="100%"
          src={getOptimizedEmbedUrl(tool.videoUrl!)}
          title={`${tool.title} Demo`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
          className="w-full h-full rounded-lg"
          style={{ minHeight: '200px' }}
        />
      ) : hasVideo && !isYouTube ? (
        /* Non-YouTube video - load directly but lazy */
        <iframe
          width="100%"
          height="100%"
          src={getOptimizedEmbedUrl(tool.videoUrl!)}
          title={`${tool.title} Demo`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
          className="w-full h-full rounded-lg"
          loading="lazy"
          style={{ minHeight: '200px' }}
        />
      ) : hasImage ? (
        /* Image display */
        <>
        <img 
            src={resolvedImageUrl} 
            alt={`${tool.title} screenshot`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            fetchPriority="low"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                target.nextElementSibling.classList.remove('hidden');
              }
            }}
          />
          <div className="hidden absolute inset-0 flex items-center justify-center text-6xl opacity-50">
            {tool.emoji}
          </div>
        </>
      ) : (
        /* Default emoji display */
        <div className="flex items-center justify-center text-6xl opacity-50 w-full h-full">
          {tool.emoji}
        </div>
      )}
      
      {/* Overlay gradient for images */}
      {hasImage && !hasVideo && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}
    </div>
  );
};

export default ToolCardMedia;
