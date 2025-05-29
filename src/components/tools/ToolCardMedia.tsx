
import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { Tool } from "@/types/tools";

interface ToolCardMediaProps {
  tool: Tool;
  isFeatured: boolean;
  imageHeight: string;
}

const ToolCardMedia = ({ tool, isFeatured, imageHeight }: ToolCardMediaProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Enhanced rating system - boost ratings for AI Web Tools original GPTs
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;

  // Generate YouTube thumbnail URL from video URL
  const getYouTubeThumbnail = (url: string) => {
    console.log('Generating YouTube thumbnail for:', url);
    
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return null;
  };

  // Enhanced media component with priority for your tools - NO VIDEO OVERLAYS in card view
  const MediaComponent = () => {
    console.log('Tool media check for card:', {
      title: tool.title,
      hasImage: !!tool.imageUrl,
      hasVideo: !!tool.videoUrl,
      imageError,
      isAIWebToolsOriginal
    });

    // Priority 1: Direct image URL (wsimg.com or other image URLs)
    if (tool.imageUrl && !imageError) {
      return (
        <div className="relative w-full overflow-hidden rounded-lg bg-gray-800" style={{ height: imageHeight, aspectRatio: '16/9' }}>
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center animate-pulse">
              <ImageIcon className="w-8 h-8 text-gray-500" />
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

    // Priority 2: YouTube video with thumbnail - NO OVERLAY, just thumbnail
    if (tool.videoUrl) {
      const thumbnailUrl = getYouTubeThumbnail(tool.videoUrl);
      
      if (thumbnailUrl) {
        return (
          <div className="relative w-full overflow-hidden rounded-lg bg-gray-800" style={{ height: imageHeight, aspectRatio: '16/9' }}>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center animate-pulse">
                <ImageIcon className="w-8 h-8 text-gray-500" />
              </div>
            )}
            <img
              src={thumbnailUrl}
              alt={`${tool.title} Video Preview`}
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
      
      // Fallback for video without thumbnail - simple placeholder
      return (
        <div 
          className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-700 to-gray-900"
          style={{ height: imageHeight, aspectRatio: '16/9' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`${isFeatured ? 'text-4xl' : 'text-3xl'} text-gray-400`}>{tool.emoji}</span>
          </div>
        </div>
      );
    }
    
    // Priority 3: Emoji fallback with enhanced styling for AI Web Tools originals
    return (
      <div 
        className={`w-full bg-gradient-to-br ${isAIWebToolsOriginal ? 'from-cyan-700 to-blue-800 border-2 border-cyan-500' : 'from-gray-700 to-gray-800'} flex items-center justify-center text-gray-400 border border-gray-600 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300 rounded-lg`}
        style={{ height: imageHeight, aspectRatio: '16/9' }}
      >
        <span className={`${isFeatured ? 'text-5xl' : 'text-4xl'} group-hover:scale-110 transition-transform duration-300 ${isAIWebToolsOriginal ? 'filter drop-shadow-lg' : ''}`}>{tool.emoji}</span>
      </div>
    );
  };

  return (
    <div className="mb-4 border border-gray-600 rounded-lg overflow-hidden">
      <MediaComponent />
    </div>
  );
};

export default ToolCardMedia;
