
import React, { memo } from "react";
import { Tool } from "@/types/tools";
import MinimalToolCard from "../MinimalToolCard";

export interface VirtualizedToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  searchTerm: string;
  selectedCategory: string | null;
  filteredToolsCount?: number; // Number of tools from selected categories (before recommendations)
}

// Ultra-simplified grid for maximum performance with separator support
const VirtualizedToolsGrid = memo(({ 
  tools, 
  displayedCount,
  filteredToolsCount = 0
}: VirtualizedToolsGridProps) => {
  // Minimal slicing without complex virtualization
  const toolsToDisplay = tools.slice(0, Math.min(displayedCount, tools.length));
  
  // Split tools into filtered and recommendations if we have a filteredToolsCount
  const hasRecommendations = filteredToolsCount > 0 && toolsToDisplay.length > filteredToolsCount;
  const filteredTools = hasRecommendations ? toolsToDisplay.slice(0, filteredToolsCount) : toolsToDisplay;
  const recommendedTools = hasRecommendations ? toolsToDisplay.slice(filteredToolsCount) : [];

  return (
    <>
      {/* Main filtered tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {filteredTools.map((tool, index) => (
          <MinimalToolCard key={`${tool.title}-${index}`} tool={tool} index={index} />
        ))}
      </div>
      
      {/* Separator and Recommended tools */}
      {hasRecommendations && recommendedTools.length > 0 && (
        <>
          {/* Visual Separator */}
          <div className="w-full flex items-center justify-center my-10 px-4">
            <div className="flex items-center space-x-4 bg-gradient-to-r from-purple-900/40 via-cyan-900/40 to-purple-900/40 backdrop-blur-md rounded-2xl px-8 py-5 border border-cyan-500/40 shadow-xl shadow-cyan-500/20">
              <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-purple-400"></div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-2xl">✨</span>
                  <span className="text-cyan-100 font-bold text-lg">
                    Recommended For You
                  </span>
                  <span className="text-2xl">✨</span>
                </div>
                <div className="text-sm text-gray-300">
                  Similar tools based on your selected categories
                </div>
              </div>
              <div className="w-20 h-[2px] bg-gradient-to-l from-transparent via-purple-400 to-cyan-400"></div>
            </div>
          </div>
          
          {/* Recommended tools grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {recommendedTools.map((tool, index) => (
              <MinimalToolCard 
                key={`rec-${tool.title}-${index}`} 
                tool={tool} 
                index={filteredToolsCount + index} 
              />
            ))}
          </div>
        </>
      )}
    </>
  );
});

VirtualizedToolsGrid.displayName = "VirtualizedToolsGrid";
export default VirtualizedToolsGrid;
