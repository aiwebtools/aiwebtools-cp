
import { Tool } from "@/types/tools";
import { useState, useRef, useCallback } from "react";

interface ToolCardMediaProps {
  tool: Tool;
  isFeatured: boolean;
  imageHeight: string;
}

const ToolCardMedia = ({ tool, isFeatured, imageHeight }: ToolCardMediaProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  
  const hasImage = tool.imageUrl && tool.imageUrl.trim() !== '';
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;
  const hasVideo = tool.videoUrl && tool.videoUrl.trim() !== '';
  
  // Prioritize video if available and should play, then fallback to image
  const shouldShowVideo = hasVideo && !videoError && shouldPlayVideo;
  const shouldShowImage = hasImage && !shouldShowVideo;
  
  const getOptimizedEmbedUrl = useCallback((url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&fs=0&iv_load_policy=3&cc_load_policy=0&showinfo=0`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&fs=0&iv_load_policy=3&cc_load_policy=0&showinfo=0`;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&background=1&controls=0`;
    }
    return url;
  }, []);

  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  const handleVideoError = useCallback(() => {
    setVideoError(true);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (hasVideo && !videoError) {
      setShouldPlayVideo(true);
    }
  }, [hasVideo, videoError]);

  const handleMouseLeave = useCallback(() => {
    setShouldPlayVideo(false);
    setVideoLoaded(false);
  }, []);
  
  return (
    <div 
      className={`${isFeatured ? 'mb-6' : 'mb-4'} rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative group-hover:scale-105 transition-transform duration-200`}
      style={{ aspectRatio: '16/9' }}
      ref={videoRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {shouldShowVideo ? (
        // Load video when user hovers
        <div className="relative w-full h-full">
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center z-10">
              <div className="text-gray-400 text-sm">Loading video...</div>
            </div>
          )}
          <iframe
            width="100%"
            height="100%"
            src={getOptimizedEmbedUrl(tool.videoUrl!)}
            title={`${tool.title} Demo`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
            loading="eager"
            onLoad={handleVideoLoad}
            onError={handleVideoError}
          />
        </div>
      ) : shouldShowImage ? (
        <img 
          src={tool.imageUrl} 
          alt={`${tool.title} screenshot`}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // Fallback to emoji display if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.nextElementSibling) {
              target.nextElementSibling.classList.remove('hidden');
            }
          }}
        />
      ) : (
        /* Default emoji display when no image or video */
        <div className="flex items-center justify-center text-6xl opacity-50 w-full h-full">
          {tool.emoji}
        </div>
      )}
      
      {/* Show play button overlay when video is available but not playing */}
      {hasVideo && !shouldPlayVideo && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
          </div>
        </div>
      )}
      
      {/* Hidden emoji fallback for failed images */}
      {shouldShowImage && (
        <div className="hidden absolute inset-0 flex items-center justify-center text-6xl opacity-50">
          {tool.emoji}
        </div>
      )}
    </div>
  );
};

export default ToolCardMedia;
