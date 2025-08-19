
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
  
  // Prioritize video if available, then fallback to image
  const shouldShowVideo = hasVideo;
  const shouldShowImage = hasImage && !hasVideo;
  
  if (import.meta.env.DEV) {
    console.log('ToolCardMedia for', tool.title, {
      hasImage,
      hasVideo,
      shouldShowImage,
      shouldShowVideo,
      videoUrl: tool.videoUrl,
      imageUrl: tool.imageUrl
    });
  }
  
  const getOptimizedEmbedUrl = (url: string) => {
    // Detect connection speed for quality optimization
    const connection = (navigator as any).connection;
    const isSlowConnection = connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g';
    
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      const quality = isSlowConnection ? '&vq=medium' : '&vq=hd720';
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&mute=1&autoplay=1&controls=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark&enablejsapi=1&origin=${window.location.origin}&preload=metadata${quality}&start=0`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      const quality = isSlowConnection ? '&vq=medium' : '&vq=hd720';
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&mute=1&autoplay=1&controls=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark&enablejsapi=1&origin=${window.location.origin}&preload=metadata${quality}&start=0`;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      const quality = isSlowConnection ? '720p' : '1080p';
      return `https://player.vimeo.com/video/${videoId}?muted=1&autoplay=1&quality=${quality}&preload=metadata`;
    }
    return url;
  };
  
  return (
    <div 
      className={`${isFeatured ? 'mb-6' : 'mb-4'} rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative group-hover:scale-105 transition-transform duration-200`}
      style={{ aspectRatio: '16/9' }}
    >
      {shouldShowVideo ? (
        <iframe
          width="100%"
          height="100%"
          src={getOptimizedEmbedUrl(tool.videoUrl!)}
          title={`${tool.title} Demo`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full rounded-lg"
          loading="eager"
          style={{ border: 'none' }}
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
            onError={(e) => {
              console.error('Image failed to load for', tool.title, tool.imageUrl);
              // Fallback to emoji display if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                target.nextElementSibling.classList.remove('hidden');
              }
            }}
            onLoad={() => {
              if (import.meta.env.DEV) {
                console.log('Image loaded successfully for', tool.title);
              }
            }}
          />
          {/* Hidden emoji fallback */}
          <div className="hidden absolute inset-0 flex items-center justify-center text-6xl opacity-50">
            {tool.emoji}
          </div>
        </>
      ) : (
        /* Default emoji display when no image or video */
        <div className="flex items-center justify-center text-6xl opacity-50 w-full h-full">
          {tool.emoji}
        </div>
      )}
      
      {/* Overlay gradient for better text readability - only show for images, not videos */}
      {shouldShowImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}
    </div>
  );
};

export default ToolCardMedia;
