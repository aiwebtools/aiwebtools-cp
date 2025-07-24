
import React, { memo } from "react";
import { Tool } from "@/types/tools";
import { Card } from "@/components/ui/card";
import ToolCardHeader from "./ToolCardHeader";
import ToolCardContent from "./ToolCardContent";

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

// Memoized ToolCard for performance with large lists
const ToolCard = memo(({ tool, index = 0 }: ToolCardProps) => {
  // Determine if this is an AIWebTools original
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;
  
  // Dynamic sizing based on featured status
  const isFeatured = index < 12; // First 12 tools are considered featured
  const cardSize = isFeatured ? "w-16 h-16" : "w-12 h-12";
  const titleSize = isFeatured ? "text-lg sm:text-xl" : "text-base sm:text-lg";
  const buttonSize = isFeatured ? "default" : "sm";
  const imageHeight = isFeatured ? "200px" : "160px";
  
  // Enhanced rating calculation
  const baseRating = tool.rating || 4.2;
  const boostFactor = isAIWebToolsOriginal ? 0.5 : 0.2;
  const boostedRating = Math.min(5.0, baseRating + boostFactor);
  const defaultVotes = tool.totalVotes || (isAIWebToolsOriginal ? 847 : 324);

  // Description function
  const getDescription = () => {
    if (!tool.description) return "Powerful AI tool for enhanced productivity.";
    
    const maxLength = isFeatured ? 180 : 140;
    if (tool.description.length <= maxLength) return tool.description;
    
    const truncated = tool.description.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > maxLength * 0.8 
      ? truncated.substring(0, lastSpace) + "..."
      : truncated + "...";
  };

  return (
    <Card 
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 h-full flex flex-col focus-within:border-cyan-400 focus-within:shadow-cyan-400/20"
      style={{
        // Optimize rendering with contain property
        contain: 'layout style paint',
        // Improve scroll performance
        willChange: 'transform',
      }}
      tabIndex={0}
      role="article"
      aria-label={`AI Tool: ${tool.title}`}
    >
      <ToolCardHeader 
        tool={tool}
        toolIndex={index}
        isFeatured={isFeatured}
        cardSize={cardSize}
        titleSize={titleSize}
        isAIWebToolsOriginal={isAIWebToolsOriginal}
        boostedRating={boostedRating}
        defaultVotes={defaultVotes}
      />
      
      <ToolCardContent 
        tool={tool}
        toolIndex={index}
        isFeatured={isFeatured}
        buttonSize={buttonSize}
        isAIWebToolsOriginal={isAIWebToolsOriginal}
        imageHeight={imageHeight}
        getDescription={getDescription}
      />
    </Card>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for memo
  return (
    prevProps.tool.title === nextProps.tool.title &&
    prevProps.tool.directUrl === nextProps.tool.directUrl &&
    prevProps.tool.category === nextProps.tool.category &&
    prevProps.index === nextProps.index
  );
});

ToolCard.displayName = "ToolCard";

export default ToolCard;
