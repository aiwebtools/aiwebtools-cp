
import { useState, useCallback } from "react";
import { Image as ImageIcon } from "lucide-react";
import { Tool } from "@/types/tools";

interface ToolMediaProps {
  tool: Tool;
  toolIndex: number;
}

const ToolMedia = ({ tool, toolIndex }: ToolMediaProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const getOptimizedEmbedUrl = useCallback((url: string) => {
    // Handle youtu.be short URLs
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&fs=1&iv_load_policy=3&cc_load_policy=0`;
    }
    
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&fs=1&iv_load_policy=3&cc_load_policy=0`;
    }
    
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      return `https://player.vimeo.com/video/${videoId}?dnt=1&autopause=0`;
    }
    
    return url;
  }, []);

  const handleVideoError = useCallback(() => {
    console.error('Video failed to load for tool:', tool.title);
    setVideoError(true);
  }, [tool.title]);

  const handleVideoClick = useCallback(() => {
    if (tool.videoUrl && !shouldLoadVideo) {
      setShouldLoadVideo(true);
    }
  }, [tool.videoUrl, shouldLoadVideo]);

  const MediaComponent = () => {
    // Prioritize video if available, then fallback to image
    if (tool.videoUrl && !videoError) {
      if (!shouldLoadVideo) {
        // Show video thumbnail/placeholder
        return (
          <div 
            className="relative w-full overflow-hidden rounded-xl bg-gray-800 cursor-pointer" 
            style={{ aspectRatio: '16/9' }}
            onClick={handleVideoClick}
          >
            {tool.imageUrl && !imageError ? (
              <img
                src={tool.imageUrl}
                alt={`${tool.title} Preview`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-4xl sm:text-6xl glow-effect">{tool.emoji}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
              Click to play video
            </div>
          </div>
        );
      }
      
      // Show actual video iframe
      const embedUrl = getOptimizedEmbedUrl(tool.videoUrl);
      
      return (
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-800" style={{ aspectRatio: '16/9' }}>
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title={`${tool.title} Demo`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded-xl"
            loading="lazy"
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
