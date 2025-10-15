
import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { Tool } from "@/types/tools";
import { useVideoManager } from "@/hooks/useVideoManager";

interface ToolMediaProps {
  tool: Tool;
  toolIndex: number;
}

const ToolMedia = ({ tool, toolIndex }: ToolMediaProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  // Use video manager to control playback
  const videoRef = useVideoManager(`tool-${toolIndex}`);

  const getOptimizedEmbedUrl = (url: string) => {
    console.log('Processing video URL:', url);
    
    // Handle youtu.be short URLs
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      // Optimized for smooth HD playback with better buffering
      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&loop=1&playlist=${videoId}&vq=hd720&enablejsapi=1&origin=${window.location.origin}&playsinline=1&modestbranding=1&fs=1&iv_load_policy=3`;
      console.log('YouTube short embed URL:', embedUrl);
      return embedUrl;
    }
    
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      // Optimized for smooth HD playback with better buffering
      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&loop=1&playlist=${videoId}&vq=hd720&enablejsapi=1&origin=${window.location.origin}&playsinline=1&modestbranding=1&fs=1&iv_load_policy=3`;
      console.log('YouTube embed URL:', embedUrl);
      return embedUrl;
    }
    
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      // Optimized for smooth playback
      const embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&quality=720p&volume=1&muted=0`;
      console.log('Vimeo embed URL:', embedUrl);
      return embedUrl;
    }
    console.log('Using original URL:', url);
    return url;
  };

  const handleVideoError = () => {
    console.error('Video failed to load for tool:', tool.title);
    setVideoError(true);
  };

  const MediaComponent = () => {
    console.log('Tool media check:', {
      title: tool.title,
      hasImage: !!tool.imageUrl,
      hasVideo: !!tool.videoUrl,
      videoUrl: tool.videoUrl,
      imageError,
      videoError
    });

    // Prioritize video if available, then fallback to image
    if (tool.videoUrl && !videoError) {
      const embedUrl = getOptimizedEmbedUrl(tool.videoUrl);
      
      return (
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-800" style={{ aspectRatio: '16/9' }}>
          <iframe
            ref={videoRef}
            width="100%"
            height="100%"
            src={embedUrl}
            title={`${tool.title} Demo`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded-xl"
            loading="eager"
            onError={handleVideoError}
            onLoad={() => console.log('Video loaded successfully for:', tool.title)}
          />
        </div>
      );
    }

    if (tool.imageUrl && !imageError) {
      return (
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-800" style={{ aspectRatio: '16/9' }}>
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center animate-pulse">
              <ImageIcon className="w-8 sm:w-12 h-8 sm:h-12 text-gray-500" />
            </div>
          )}
          <img
            src={tool.imageUrl}
            alt={`${tool.title} Preview`}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      );
    }
    
    return (
      <div className="w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-cyan-500/30 neon-border rounded-xl" style={{ aspectRatio: '16/9' }}>
        <span className="text-4xl sm:text-6xl glow-effect">{tool.emoji}</span>
      </div>
    );
  };

  return (
    <div className="mb-6 sm:mb-8 px-4 sm:px-0">
      <div className="shadow-lg border border-cyan-500/30 neon-border rounded-xl overflow-hidden">
        <MediaComponent />
      </div>
    </div>
  );
};

export default ToolMedia;
