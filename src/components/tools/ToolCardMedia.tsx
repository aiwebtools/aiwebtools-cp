
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
  
  const getOptimizedEmbedUrl = (url: string) => {
    // Detect device capabilities for optimal video quality
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEnd = navigator.hardwareConcurrency <= 2 || (navigator as any).deviceMemory <= 2;
    const quality = (isMobile || isLowEnd) ? 'hd720' : 'hd1080';
    const vq = (isMobile || isLowEnd) ? 'hd720' : 'hd1080';

    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&rel=0&hd=1&vq=${vq}&quality=${quality}&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&playsinline=1&modestbranding=1&autohide=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark`;
    }
    if (url.includes('youtu.be/')) {
      // Handle URLs with si parameter or other query parameters
      const videoId = url.split('youtu.be/')[1].split('?')[0].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&rel=0&hd=1&vq=${vq}&quality=${quality}&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&playsinline=1&modestbranding=1&autohide=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark`;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      const vimeoQuality = (isMobile || isLowEnd) ? '720p' : '1080p';
      return `https://player.vimeo.com/video/${videoId}?autoplay=0&quality=${vimeoQuality}&volume=1&muted=0`;
    }
    return url;
  };
  
  return (
    <div 
      className={`${isFeatured ? 'mb-6' : 'mb-4'} rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative group-hover:scale-105 transition-transform duration-200`}
      style={{ aspectRatio: '16/9' }}
    >
      {shouldShowVideo ? (
        <div className="relative w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src={getOptimizedEmbedUrl(tool.videoUrl!)}
            title={`${tool.title} Demo`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            className="w-full h-full rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => console.log(`✅ Video loaded: ${tool.title}`)}
            onError={(e) => {
              console.error(`❌ Video failed to load: ${tool.title}`, e);
              // Hide the iframe and show emoji fallback
              const iframe = e.target as HTMLIFrameElement;
              iframe.style.display = 'none';
              const fallback = iframe.parentElement?.querySelector('.video-fallback') as HTMLElement;
              if (fallback) {
                fallback.classList.remove('hidden');
              }
            }}
          />
          {/* Video loading fallback */}
          <div className="video-fallback hidden absolute inset-0 flex items-center justify-center text-6xl opacity-50 bg-gradient-to-br from-gray-800 to-gray-900">
            {tool.emoji}
          </div>
        </div>
      ) : shouldShowImage ? (
        <div className="relative w-full h-full">
          <img 
            src={tool.imageUrl} 
            alt={`${tool.title} screenshot`}
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            fetchPriority="low"
            onError={(e) => {
              console.error('❌ Image failed to load for', tool.title, tool.imageUrl);
              // Fallback to emoji display if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.opacity = '0';
              const fallback = target.parentElement?.querySelector('.image-fallback') as HTMLElement;
              if (fallback) {
                fallback.classList.remove('hidden');
              }
            }}
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.opacity = '1';
              console.log(`✅ Image loaded: ${tool.title}`);
            }}
            style={{ opacity: '0' }}
          />
          {/* Image loading fallback */}
          <div className="image-fallback hidden absolute inset-0 flex items-center justify-center text-6xl opacity-50 bg-gradient-to-br from-gray-800 to-gray-900">
            {tool.emoji}
          </div>
        </div>
      ) : (
        /* Default emoji display when no image or video */
        <div className="flex items-center justify-center text-6xl opacity-50 w-full h-full">
          {tool.emoji}
        </div>
      )}
      
      {/* Overlay gradient for better text readability - only show for images, not videos */}
      {shouldShowImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      )}
    </div>
  );
};

export default ToolCardMedia;
