
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
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?quality=hd1080&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?quality=hd1080&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`;
    }
    return url;
  };

  const MediaComponent = () => {
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
      return (
        <div className="relative w-full h-80 overflow-hidden rounded-xl bg-gray-800">
          <iframe
            width="100%"
            height="320"
            src={getOptimizedEmbedUrl(tool.videoUrl)}
            title={`${tool.title} Demo`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded-xl"
            loading="eager"
            onError={() => setVideoError(true)}
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
