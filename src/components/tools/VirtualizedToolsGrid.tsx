
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
  filteredToolsCount = 0,
  selectedCategory
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
          {/* Visual Separator - End of Category Section */}
          <div className="w-full flex flex-col items-center justify-center my-12 px-4">
            {/* End of category indicator */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-cyan-500"></div>
              <div className="text-cyan-400 text-sm font-medium">
                ✓ End of {selectedCategory || 'filtered'} tools ({filteredToolsCount} shown)
              </div>
              <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
            
            {/* Recommendations banner */}
            <div className="flex items-center space-x-4 bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl px-10 py-6 border border-purple-500/40 shadow-2xl shadow-purple-500/20">
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-cyan-400"></div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl">🚀</span>
                  <span className="text-white font-bold text-xl">
                    Explore All AI Tools
                  </span>
                  <span className="text-3xl">🌟</span>
                </div>
                <div className="text-base text-gray-300">
                  Discover more amazing AI tools from our complete database
                </div>
                <div className="text-xs text-purple-300 mt-2">
                  {recommendedTools.length}+ additional tools loading as you scroll
                </div>
              </div>
              <div className="w-24 h-[2px] bg-gradient-to-l from-transparent via-cyan-400 to-purple-400"></div>
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
}, (prevProps, nextProps) => {
  // Detect shuffle by checking first tool
  const sameFirstTool = prevProps.tools[0]?.title === nextProps.tools[0]?.title;
  return (
    prevProps.tools.length === nextProps.tools.length &&
    prevProps.displayedCount === nextProps.displayedCount &&
    prevProps.filteredToolsCount === nextProps.filteredToolsCount &&
    sameFirstTool
  );
});

VirtualizedToolsGrid.displayName = "VirtualizedToolsGrid";
export default VirtualizedToolsGrid;
