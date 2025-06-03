
import { Tool } from "@/types/tools";
import { useState, useRef, useCallback } from "react";

interface ToolCardMediaProps {
  tool: Tool;
  isFeatured: boolean;
  imageHeight: string;
}

const ToolCardMedia = ({ tool, isFeatured, imageHeight }: ToolCardMediaProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  
  const hasImage = tool.imageUrl && tool.imageUrl.trim() !== '';
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;
  const hasVideo = tool.videoUrl && tool.videoUrl.trim() !== '';
  
  // Prioritize video if available, then fallback to image
  const shouldShowVideo = hasVideo && shouldLoadVideo;
  const shouldShowImage = hasImage && !shouldShowVideo;
  
  const getOptimizedEmbedUrl = useCallback((url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&fs=0&iv_load_policy=3&cc_load_policy=0`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&fs=0&iv_load_policy=3&cc_load_policy=0`;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      return `https://player.vimeo.com/video/${videoId}?dnt=1&autopause=0`;
    }
    return url;
  }, []);

  const handleVideoClick = useCallback(() => {
    if (hasVideo && !shouldLoadVideo) {
      setShouldLoadVideo(true);
    }
  }, [hasVideo, shouldLoadVideo]);

  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true);
  }, []);
  
  return (
    <div 
      className={`${isFeatured ? 'mb-6' : 'mb-4'} rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative group-hover:scale-105 transition-transform duration-200`}
      style={{ aspectRatio: '16/9' }}
      ref={videoRef}
    >
      {hasVideo && !shouldLoadVideo ? (
        // Video thumbnail with subtle play overlay
        <div 
          className="w-full h-full relative cursor-pointer group"
          onClick={handleVideoClick}
        >
          {shouldShowImage ? (
            <img 
              src={tool.imageUrl} 
              alt={`${tool.title} preview`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-4xl">{tool.emoji}</div>
            </div>
          )}
          {/* Subtle play button overlay - only visible on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="w-12 h-12 bg-red-600/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          {/* Small video indicator in corner */}
          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            ▶️ Video
          </div>
        </div>
      ) : shouldShowVideo ? (
        // Actual video iframe - only load when clicked
        <div className="relative w-full h-full">
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <div className="text-gray-400">Loading video...</div>
            </div>
          )}
          <iframe
            width="100%"
            height="100%"
            src={getOptimizedEmbedUrl(tool.videoUrl!)}
            title={`${tool.title} Demo`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
            loading="lazy"
            onLoad={handleVideoLoad}
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
