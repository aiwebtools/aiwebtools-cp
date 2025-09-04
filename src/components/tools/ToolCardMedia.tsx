
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
  
  // Debug logging removed to reduce console noise
  
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
      const videoId = url.split('youtu.be/')[1].split('?')[0];
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
        <>
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
            sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"
            style={{ minHeight: '200px' }}
            onLoad={() => {
              console.log(`✅ Video loaded successfully: ${tool.title}`);
            }}
            onError={(e) => {
              console.error(`❌ Video failed to load: ${tool.title}`);
              // Add fallback handling for failed videos
              const target = e.target as HTMLIFrameElement;
              if (target) {
                target.style.display = 'none';
                const fallbackDiv = target.nextElementSibling as HTMLElement;
                if (fallbackDiv) {
                  fallbackDiv.classList.remove('hidden');
                }
              }
            }}
          />
          {/* Video fallback - shown if iframe fails */}
          <div className="hidden absolute inset-0 flex items-center justify-center text-6xl opacity-50 bg-gradient-to-br from-gray-800 to-gray-900">
            {tool.emoji}
          </div>
        </>
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
              // Image loaded successfully
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
