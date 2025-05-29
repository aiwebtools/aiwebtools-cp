
import { useState } from "react";
import { Play, Image as ImageIcon } from "lucide-react";
import { Tool } from "@/types/tools";

interface ToolMediaProps {
  tool: Tool;
  toolIndex: number;
}

const ToolMedia = ({ tool, toolIndex }: ToolMediaProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const getOptimizedEmbedUrl = (url: string) => {
    console.log('Processing video URL:', url);
    
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
      console.log('YouTube embed URL:', embedUrl);
      return embedUrl;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
      console.log('YouTube short embed URL:', embedUrl);
      return embedUrl;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      const embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=0`;
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
    // Log what media we're trying to display
    console.log('Tool media check:', {
      title: tool.title,
      hasImage: !!tool.imageUrl,
      hasVideo: !!tool.videoUrl,
      imageError,
      videoError
    });

    if (tool.imageUrl && !imageError) {
      return (
        <div className="relative w-full h-80 overflow-hidden rounded-xl bg-gray-800">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center animate-pulse">
              <ImageIcon className="w-12 h-12 text-gray-500" />
            </div>
          )}
          <img
            src={tool.imageUrl}
            alt={`${tool.title} Preview`}
            className={`w-full h-full object-contain transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      );
    }
    
    if (tool.videoUrl && !videoError) {
      const embedUrl = getOptimizedEmbedUrl(tool.videoUrl);
      
      return (
        <div className="relative w-full h-80 overflow-hidden rounded-xl bg-gray-800">
          <iframe
            width="100%"
            height="320"
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
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
            <Play className="w-6 h-6 text-white" />
          </div>
        </div>
      );
    }
    
    return (
      <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-cyan-500/30 neon-border rounded-xl">
        <span className="text-6xl glow-effect">{tool.emoji}</span>
      </div>
    );
  };

  return (
    <div className="mb-8">
      <div className="shadow-lg border border-cyan-500/30 neon-border rounded-xl overflow-hidden">
        <MediaComponent />
      </div>
    </div>
  );
};

export default ToolMedia;
