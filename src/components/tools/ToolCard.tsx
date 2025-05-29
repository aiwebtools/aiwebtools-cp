
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tool } from "@/types/tools";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Play, Image as ImageIcon } from "lucide-react";
import { allTools } from "@/data/toolsData";
import { useState } from "react";
import StarRating from "./StarRating";

interface ToolCardProps {
  tool: Tool;
  isFeatured?: boolean;
}

const ToolCard = ({ tool, isFeatured = false }: ToolCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const imageHeight = isFeatured ? "240px" : "180px";
  const cardSize = isFeatured ? "w-16 h-16" : "w-12 h-12";
  const titleSize = isFeatured ? "text-xl" : "text-lg";
  const buttonSize = isFeatured ? "default" : "sm";

  // Find the tool index for the URL
  const toolIndex = allTools.findIndex(t => t.title === tool.title);

  // Enhanced rating system - boost ratings for AI Web Tools original GPTs
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;
  const baseRating = tool.rating || 4.1;
  const boostedRating = isAIWebToolsOriginal ? Math.min(baseRating + 0.3, 4.9) : baseRating;
  const defaultVotes = tool.totalVotes || (isAIWebToolsOriginal ? Math.floor(Math.random() * 2000) + 4000 : Math.floor(Math.random() * 1500) + 2000);

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

  // Enhanced description with better fallbacks
  const getDescription = () => {
    if (tool.description && tool.description.length > 50) {
      return tool.description;
    }
    
    const baseDescription = tool.description || "Advanced AI-powered tool designed to enhance your workflow and productivity.";
    const categoryInfo = tool.category ? ` Specialized for ${tool.category.toLowerCase()} applications.` : "";
    const featureInfo = tool.tags ? ` Features include ${tool.tags.slice(0, 3).join(', ')}.` : "";
    
    return `${baseDescription}${categoryInfo}${featureInfo} Perfect for professionals and enthusiasts looking to leverage cutting-edge AI technology.`;
  };

  // Enhanced media component with priority for your tools
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
          {/* Video indicator if both image and video exist */}
          {tool.videoUrl && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
              VIDEO
            </div>
          )}
        </div>
      );
    }

    // Priority 2: YouTube video with thumbnail
    if (tool.videoUrl) {
      const thumbnailUrl = getYouTubeThumbnail(tool.videoUrl);
      
      if (thumbnailUrl) {
        return (
          <div className="relative w-full overflow-hidden rounded-lg bg-gray-800" style={{ height: imageHeight, aspectRatio: '16/9' }}>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center animate-pulse">
                <Play className="w-8 h-8 text-gray-500" />
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
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
              VIDEO DEMO
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <Play className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        );
      }
      
      // Fallback for video without thumbnail
      return (
        <div 
          className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 cursor-pointer group"
          style={{ height: imageHeight, aspectRatio: '16/9' }}
        >
          <div className="absolute inset-0 flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-300">
            <Play className="w-12 h-12 text-gray-400 group-hover:text-white transition-colors duration-300" />
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
              VIDEO DEMO
            </div>
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
    <Card className={`group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 border ${isAIWebToolsOriginal ? 'border-cyan-500/50 bg-gradient-to-br from-gray-900/95 to-cyan-900/20' : 'border-gray-700 bg-gray-900/90'} backdrop-blur-sm h-full flex flex-col relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Enhanced FREE Badge for AI Web Tools original tools */}
      {isAIWebToolsOriginal && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 animate-pulse border-2 border-yellow-300">
            FREE
          </div>
        </div>
      )}
      
      <CardHeader className="text-center pb-4 flex-shrink-0 relative z-10">
        <div className={`${cardSize} mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl ${isAIWebToolsOriginal ? 'ring-2 ring-cyan-400/50' : ''}`}>
          {tool.emoji}
        </div>
        <div className="space-y-2">
          <CardTitle className={`${titleSize} font-bold ${isAIWebToolsOriginal ? 'text-cyan-100' : 'text-white'} group-hover:text-cyan-300 transition-colors leading-tight`}>
            {tool.title}
          </CardTitle>
          {tool.category && (
            <Badge variant="outline" className={`text-xs ${isAIWebToolsOriginal ? 'border-cyan-300 text-cyan-200 bg-cyan-500/20' : 'border-cyan-400 text-cyan-300 bg-cyan-500/10'}`}>
              {tool.category}
            </Badge>
          )}
          <div className="pt-2">
            <StarRating 
              rating={boostedRating} 
              totalVotes={defaultVotes} 
              showVoteCount={!isFeatured}
              toolId={`tool-${toolIndex}`}
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="text-center flex-grow flex flex-col relative z-10">
        <div className="mb-4 border border-gray-600 rounded-lg overflow-hidden">
          <MediaComponent />
        </div>
        
        <CardDescription className={`${isAIWebToolsOriginal ? 'text-cyan-100' : 'text-gray-300'} mb-4 leading-relaxed text-sm flex-grow`}>
          {getDescription()}
        </CardDescription>
        
        {/* Always link to individual tool page first, then external if available */}
        <Link to={`/tool/${toolIndex}`} className="mt-auto">
          <Button 
            size={buttonSize as any}
            className={`w-full ${isAIWebToolsOriginal ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700'} text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30`}
          >
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
