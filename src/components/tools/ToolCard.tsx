
import React, { memo } from "react";
import { Tool } from "@/types/tools";
import ToolCardHeader from "./ToolCardHeader";
import ToolCardContent from "./ToolCardContent";
import ToolCardMedia from "./ToolCardMedia";

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

// Memoized ToolCard for performance with large lists
const ToolCard = memo(({ tool, index }: ToolCardProps) => {
  return (
    <div 
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 h-full flex flex-col"
      style={{
        // Optimize rendering with contain property
        contain: 'layout style paint',
        // Improve scroll performance
        willChange: 'transform',
      }}
    >
      <ToolCardHeader tool={tool} />
      <ToolCardContent tool={tool} />
      <ToolCardMedia tool={tool} />
    </div>
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
