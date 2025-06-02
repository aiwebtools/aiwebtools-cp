
import { useMemo } from "react";
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import { allTools } from "@/data/toolsData";
import { createTimePortalEffect } from "@/utils/timeEffects";

interface SimilarToolsProps {
  currentTool: Tool;
  currentToolIndex: number;
}

const SimilarTools = ({ currentTool, currentToolIndex }: SimilarToolsProps) => {
  // Find similar tools based on category and tags
  const similarTools = useMemo(() => {
    const similar = allTools.filter((tool, index) => {
      if (index === currentToolIndex) return false;
      
      // Check category match
      const categoryMatch = tool.category === currentTool.category;
      
      // Check tag overlap
      const tagOverlap = currentTool.tags && tool.tags ? 
        tool.tags.some(tag => currentTool.tags?.includes(tag)) : false;
      
      return categoryMatch || tagOverlap;
    });
    
    // Shuffle and return first 6
    return similar.sort(() => 0.5 - Math.random()).slice(0, 6);
  }, [currentTool, currentToolIndex]);

  if (similarTools.length === 0) {
    // If no similar tools, show random tools
    const randomTools = allTools
      .filter((_, index) => index !== currentToolIndex)
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
    
    return (
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8 cyber-glow">
          Explore More AI Tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomTools.map((tool, index) => {
            const toolIndex = allTools.findIndex(t => t.title === tool.title);
            return (
              <ToolCard key={`random-${tool.title}-${index}`} tool={tool} />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8 cyber-glow">
        Similar AI Tools in {currentTool.category}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarTools.map((tool, index) => {
          const toolIndex = allTools.findIndex(t => t.title === tool.title);
          return (
            <ToolCard key={`similar-${tool.title}-${index}`} tool={tool} />
          );
        })}
      </div>
    </div>
  );
};

export default SimilarTools;
