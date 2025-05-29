
import { Card } from "@/components/ui/card";
import { Tool } from "@/types/tools";
import { allTools } from "@/data/toolsData";
import ToolCardHeader from "./ToolCardHeader";
import ToolCardContent from "./ToolCardContent";

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

  // Enhanced rating system - boost ratings for AI Web Tools original GPTs
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;
  const baseRating = tool.rating || 4.1;
  const boostedRating = isAIWebToolsOriginal ? Math.min(baseRating + 0.3, 4.9) : baseRating;
  const defaultVotes = tool.totalVotes || (isAIWebToolsOriginal ? Math.floor(Math.random() * 2000) + 4000 : Math.floor(Math.random() * 1500) + 2000);

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

  return (
    <Card className={`group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-200 transform hover:-translate-y-1 border ${isAIWebToolsOriginal ? 'border-cyan-500/50 bg-gradient-to-br from-gray-900/95 to-cyan-900/20' : 'border-gray-700 bg-gray-900/90'} backdrop-blur-sm h-full flex flex-col relative overflow-hidden will-change-transform`}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      
      {/* Enhanced FREE Badge for AI Web Tools original tools */}
      {isAIWebToolsOriginal && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 animate-pulse border-2 border-yellow-300">
            FREE
          </div>
        </div>
      )}
      
      <ToolCardHeader
        tool={tool}
        toolIndex={toolIndex}
        isFeatured={isFeatured}
        cardSize={cardSize}
        titleSize={titleSize}
        isAIWebToolsOriginal={isAIWebToolsOriginal}
        boostedRating={boostedRating}
        defaultVotes={defaultVotes}
      />
      
      <ToolCardContent
        tool={tool}
        toolIndex={toolIndex}
        isFeatured={isFeatured}
        buttonSize={buttonSize}
        isAIWebToolsOriginal={isAIWebToolsOriginal}
        imageHeight={imageHeight}
        getDescription={getDescription}
      />
    </Card>
  );
};

export default ToolCard;
