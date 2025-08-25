
import { Tool } from "@/types/tools";
import { memo, useState, useCallback } from "react";

interface ToolCardMediaProps {
  tool: Tool;
  isFeatured: boolean;
  imageHeight: string;
}

const ToolCardMedia = memo(({ tool, isFeatured, imageHeight }: ToolCardMediaProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const hasImage = tool.imageUrl && tool.imageUrl.trim() !== '';
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;
  const hasVideo = tool.videoUrl && tool.videoUrl.trim() !== '';
  
  // Prioritize video if available, then fallback to image
  const shouldShowVideo = hasVideo;
  const shouldShowImage = hasImage && !hasVideo;
  
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);
  
  const handleImageError = useCallback(() => {
    setImageError(true);
    console.error('Image failed to load for', tool.title, tool.imageUrl);
  }, [tool.title, tool.imageUrl]);
  
  const getOptimizedEmbedUrl = useCallback((url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=0&autohide=1&controls=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=0&autohide=1&controls=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark`;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      return `https://player.vimeo.com/video/${videoId}?autoplay=0`;
    }
    return url;
  }, []);
  
  return (
    <div 
      className={`${isFeatured ? 'mb-6' : 'mb-4'} rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative transition-transform duration-200`}
      style={{ 
        aspectRatio: '16/9',
        contain: 'layout style',
        contentVisibility: 'auto',
        containIntrinsicSize: '300px 200px'
      }}
    >
      {shouldShowVideo ? (
          <iframe
            width="100%"
            height="100%"
            src={getOptimizedEmbedUrl(tool.videoUrl!)}
            title={`${tool.title} Demo`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded-lg"
            loading="lazy"
            style={{ border: 'none' }}
          />
      ) : shouldShowImage && !imageError ? (
        <>
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 animate-pulse">
              <div className="text-4xl opacity-50">{tool.emoji}</div>
            </div>
          )}
          <img 
            src={tool.imageUrl} 
            alt={`${tool.title} screenshot`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            fetchPriority="low"
            onError={handleImageError}
            onLoad={handleImageLoad}
            style={{ 
              transform: 'translateZ(0)' // Hardware acceleration
            }}
          />
        </>
      ) : (
        /* Default emoji display when no image/video or error */
        <div className="flex items-center justify-center text-6xl opacity-50 w-full h-full bg-gray-800">
          {tool.emoji}
        </div>
      )}
      
      {/* Overlay gradient for better text readability - only show for images */}
      {shouldShowImage && imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      )}
    </div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.tool.imageUrl === nextProps.tool.imageUrl &&
    prevProps.tool.videoUrl === nextProps.tool.videoUrl &&
    prevProps.tool.title === nextProps.tool.title &&
    prevProps.isFeatured === nextProps.isFeatured
  );
});

ToolCardMedia.displayName = "ToolCardMedia";

export default ToolCardMedia;
