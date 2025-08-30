
import { useState } from "react";
import { Tool } from "@/types/tools";

interface ToolCardMediaProps {
  tool: Tool;
  isFeatured: boolean;
  imageHeight: string;
}

const ToolCardMedia = ({ tool, isFeatured, imageHeight }: ToolCardMediaProps) => {
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const hasImage = tool.imageUrl && tool.imageUrl.trim() !== '';
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;
  const hasVideo = tool.videoUrl && tool.videoUrl.trim() !== '';
  
  // Prioritize video if available and no error, then fallback to image
  const shouldShowVideo = hasVideo && !videoError;
  const shouldShowImage = hasImage && !shouldShowVideo && !imageError;
  const shouldShowEmoji = !shouldShowVideo && !shouldShowImage;
  
  const getOptimizedEmbedUrl = (url: string) => {
    console.log('🎥 Processing video URL for card:', tool.title, url);
    
    try {
      if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1].split('&')[0];
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=1&rel=0&hd=1&vq=hd720&quality=hd720&enablejsapi=0&origin=${window.location.origin}&playsinline=1&modestbranding=1&autohide=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark&start=0`;
        console.log('✅ YouTube embed URL created:', embedUrl);
        return embedUrl;
      }
      if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=1&rel=0&hd=1&vq=hd720&quality=hd720&enablejsapi=0&origin=${window.location.origin}&playsinline=1&modestbranding=1&autohide=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark&start=0`;
        console.log('✅ YouTube short embed URL created:', embedUrl);
        return embedUrl;
      }
      if (url.includes('vimeo.com/')) {
        const videoId = url.split('vimeo.com/')[1].split('?')[0];
        const embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=0&quality=720p&volume=0&muted=1`;
        console.log('✅ Vimeo embed URL created:', embedUrl);
        return embedUrl;
      }
      console.log('⚠️ Using original URL:', url);
      return url;
    } catch (error) {
      console.error('❌ Error processing video URL:', error, url);
      return url;
    }
  };

  const handleVideoError = () => {
    console.error('❌ Video failed to load for card:', tool.title, tool.videoUrl);
    setVideoError(true);
    setIsLoading(false);
  };

  const handleVideoLoad = () => {
    console.log('✅ Video loaded successfully for card:', tool.title);
    setIsLoading(false);
  };

  const handleImageError = () => {
    console.error('❌ Image failed to load for card:', tool.title, tool.imageUrl);
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    console.log('✅ Image loaded successfully for card:', tool.title);
    setIsLoading(false);
  };
  
  return (
    <div 
      className={`${isFeatured ? 'mb-6' : 'mb-4'} rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative group-hover:scale-105 transition-transform duration-200`}
      style={{ aspectRatio: '16/9' }}
    >
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
        </div>
      )}

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
          loading="eager"
          onLoad={handleVideoLoad}
          onError={handleVideoError}
        />
      ) : shouldShowImage ? (
        <>
          <img 
            src={tool.imageUrl} 
            alt={`${tool.title} screenshot`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            fetchPriority="low"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          {/* Hidden emoji fallback */}
          <div className="hidden absolute inset-0 flex items-center justify-center text-6xl opacity-50">
            {tool.emoji}
          </div>
        </>
      ) : (
        /* Default emoji display when no image or video, or when media failed to load */
        <div className="flex items-center justify-center text-6xl opacity-50 w-full h-full">
          {tool.emoji}
          {(videoError || imageError) && (
            <div className="absolute bottom-2 right-2 text-xs text-red-400 bg-red-900/50 px-2 py-1 rounded">
              Media Error
            </div>
          )}
        </div>
      )}
      
      {/* Overlay gradient for better text readability - only show for images, not videos */}
      {shouldShowImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}
      
      {/* Error indicator for failed videos */}
      {videoError && (
        <div className="absolute top-2 right-2 text-xs text-red-400 bg-red-900/80 px-2 py-1 rounded backdrop-blur-sm">
          Video Failed
        </div>
      )}
    </div>
  );
};

export default ToolCardMedia;
