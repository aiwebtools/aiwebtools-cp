
import { Tool } from "@/types/tools";

interface ToolCardMediaProps {
  tool: Tool;
  isFeatured: boolean;
  imageHeight: string;
}

const ToolCardMedia = ({ tool, isFeatured, imageHeight }: ToolCardMediaProps) => {
  const hasImage = tool.imageUrl && tool.imageUrl.trim() !== '';
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;
  const hasVideo = tool.videoUrl && tool.videoUrl.trim() !== '';
  
  // For AI Web Tools original tools: prioritize image if available, then video, then emoji
  const shouldShowImage = hasImage;
  const shouldShowVideo = isAIWebToolsOriginal && hasVideo && !hasImage;
  
  const getOptimizedEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=0`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=0`;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      return `https://player.vimeo.com/video/${videoId}?autoplay=0`;
    }
    return url;
  };
  
  return (
    <div 
      className={`${isFeatured ? 'mb-6' : 'mb-4'} rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-200`}
      style={{ height: imageHeight }}
    >
      {shouldShowImage ? (
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
      ) : shouldShowVideo ? (
        <iframe
          width="100%"
          height="100%"
          src={getOptimizedEmbedUrl(tool.videoUrl!)}
          title={`${tool.title} Demo`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full rounded-lg"
          loading="lazy"
        />
      ) : null}
      
      {/* Emoji fallback - always present but hidden if image/video loads */}
      <div className={`${(shouldShowImage || shouldShowVideo) ? 'hidden absolute inset-0' : ''} flex items-center justify-center text-6xl ${isFeatured ? 'text-7xl' : ''} opacity-50`}>
        {tool.emoji}
      </div>
      
      {/* Overlay gradient for better text readability - only show for images, not videos */}
      {!shouldShowVideo && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}
    </div>
  );
};

export default ToolCardMedia;
