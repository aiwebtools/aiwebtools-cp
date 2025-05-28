
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tool } from "@/types/tools";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { allTools } from "@/data/toolsData";

interface ToolCardProps {
  tool: Tool;
  isFeatured?: boolean;
}

const ToolCard = ({ tool, isFeatured = false }: ToolCardProps) => {
  const imageHeight = isFeatured ? "240px" : "180px";
  const cardSize = isFeatured ? "w-16 h-16" : "w-12 h-12";
  const titleSize = isFeatured ? "text-xl" : "text-lg";
  const buttonSize = isFeatured ? "default" : "sm";

  // Find the tool index for the URL
  const toolIndex = allTools.findIndex(t => t.title === tool.title);

  // Helper function to convert YouTube URL to embed URL with 1080p quality
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?quality=hd1080&mute=0&autoplay=0`;
    }
    return url;
  };

  // Handle button click - either go to tool page or external URL
  const handleButtonClick = (e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      window.open(tool.directUrl, '_blank', 'noopener,noreferrer');
    }
    // If no directUrl, let the Link component handle navigation to tool page
  };

  // Ensure description is well-written and informative
  const getDescription = () => {
    if (tool.description && tool.description.length > 50) {
      return tool.description;
    }
    
    // Fallback enhanced description based on tool title and category
    const baseDescription = tool.description || "Advanced AI-powered tool designed to enhance your workflow and productivity.";
    const categoryInfo = tool.category ? ` Specialized for ${tool.category.toLowerCase()} applications.` : "";
    const featureInfo = tool.tags ? ` Features include ${tool.tags.slice(0, 3).join(', ')}.` : "";
    
    return `${baseDescription}${categoryInfo}${featureInfo} Perfect for professionals and enthusiasts looking to leverage cutting-edge AI technology.`;
  };

  return (
    <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 bg-gray-800/80 backdrop-blur-sm h-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="text-center pb-4 flex-shrink-0 relative z-10">
        <div className={`${cardSize} mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
          {tool.emoji}
        </div>
        <div className="space-y-2">
          <CardTitle className={`${titleSize} font-bold text-white group-hover:text-purple-300 transition-colors leading-tight`}>
            {tool.title}
          </CardTitle>
          {tool.category && (
            <Badge variant="outline" className="text-xs border-purple-400 text-purple-300 bg-purple-500/10">
              {tool.category}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="text-center flex-grow flex flex-col relative z-10">
        <div className="mb-4 rounded-lg overflow-hidden border border-gray-600" style={{ aspectRatio: '16/9' }}>
          {tool.imageUrl ? (
            <img
              src={tool.imageUrl}
              alt={`${tool.title} Preview`}
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ height: imageHeight }}
            />
          ) : tool.videoUrl ? (
            <iframe
              width="100%"
              height={imageHeight}
              src={getEmbedUrl(tool.videoUrl)}
              title={`${tool.title} Demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
              style={{ aspectRatio: '16/9' }}
            ></iframe>
          ) : (
            <div 
              className="w-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-gray-400 border border-gray-600"
              style={{ height: imageHeight, aspectRatio: '16/9' }}
            >
              <span className="text-4xl">{tool.emoji}</span>
            </div>
          )}
        </div>
        
        <CardDescription className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
          {getDescription()}
        </CardDescription>
        
        {/* Button logic: Use direct URL if available, otherwise link to tool page */}
        {tool.directUrl ? (
          <Button 
            size={buttonSize as any}
            onClick={handleButtonClick}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105 glow-effect mt-auto"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            USE IT NOW
          </Button>
        ) : (
          <Link to={`/tool/${toolIndex}`} className="mt-auto">
            <Button 
              size={buttonSize as any}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105 glow-effect"
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
