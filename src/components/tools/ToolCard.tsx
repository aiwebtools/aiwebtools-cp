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
  const [videoError, setVideoError] = useState(false);
  
  const imageHeight = isFeatured ? "240px" : "180px";
  const cardSize = isFeatured ? "w-16 h-16" : "w-12 h-12";
  const titleSize = isFeatured ? "text-xl" : "text-lg";
  const buttonSize = isFeatured ? "default" : "sm";

  // Find the tool index for the URL
  const toolIndex = allTools.findIndex(t => t.title === tool.title);

  // Generate default rating if not set
  const defaultRatings = [4.1, 4.2, 4.3, 4.4];
  const defaultRating = tool.rating || defaultRatings[toolIndex % defaultRatings.length];
  const defaultVotes = tool.totalVotes || Math.floor(Math.random() * 3000) + 2000;

  // Optimized YouTube URL conversion with quality and performance settings
  const getOptimizedEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?quality=hd720&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?quality=hd720&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`;
    }
    return url;
  };

  // Handle button click - either go to tool page or external URL
  const handleButtonClick = (e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      window.open(tool.directUrl, '_blank', 'noopener,noreferrer');
    }
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

  // Optimized image component with lazy loading and error handling
  const MediaComponent = () => {
    if (tool.imageUrl && !imageError) {
      return (
        <div className="relative w-full h-full overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center animate-pulse">
              <ImageIcon className="w-8 h-8 text-gray-500" />
            </div>
          )}
          <img
            src={tool.imageUrl}
            alt={`${tool.title} Preview`}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-105`}
            style={{ height: imageHeight }}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      );
    }
    
    if (tool.videoUrl && !videoError) {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            width="100%"
            height={imageHeight}
            src={getOptimizedEmbedUrl(tool.videoUrl)}
            title={`${tool.title} Demo`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded-lg"
            style={{ aspectRatio: '16/9' }}
            loading="lazy"
            onError={() => setVideoError(true)}
          />
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1">
            <Play className="w-4 h-4 text-white" />
          </div>
        </div>
      );
    }
    
    // Fallback when no media or error occurred
    return (
      <div 
        className="w-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-gray-400 border border-gray-600 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300"
        style={{ height: imageHeight, aspectRatio: '16/9' }}
      >
        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{tool.emoji}</span>
      </div>
    );
  };

  return (
    <Card className="group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 bg-gray-900/90 backdrop-blur-sm h-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="text-center pb-4 flex-shrink-0 relative z-10">
        <div className={`${cardSize} mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
          {tool.emoji}
        </div>
        <div className="space-y-2">
          <CardTitle className={`${titleSize} font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight`}>
            {tool.title}
          </CardTitle>
          {tool.category && (
            <Badge variant="outline" className="text-xs border-cyan-400 text-cyan-300 bg-cyan-500/10">
              {tool.category}
            </Badge>
          )}
          <div className="pt-2">
            <StarRating rating={defaultRating} totalVotes={defaultVotes} showVoteCount={!isFeatured} />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="text-center flex-grow flex flex-col relative z-10">
        <div className="mb-4 rounded-lg overflow-hidden border border-gray-600 bg-gray-800" style={{ aspectRatio: '16/9' }}>
          <MediaComponent />
        </div>
        
        <CardDescription className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
          {getDescription()}
        </CardDescription>
        
        {/* Optimized button with better performance */}
        {tool.directUrl ? (
          <Button 
            size={buttonSize as any}
            onClick={handleButtonClick}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 mt-auto"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            USE IT NOW
          </Button>
        ) : (
          <Link to={`/tool/${toolIndex}`} className="mt-auto">
            <Button 
              size={buttonSize as any}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
            >
              Learn More
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default ToolCard;
