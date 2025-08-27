
import React, { memo } from "react";
import { Tool } from "@/types/tools";
import PerformanceOptimizedCard from "../ui/performance-optimized-card";

interface VirtualizedToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  searchTerm: string;
  selectedCategory: string | null;
}

// Ultra-optimized grid with performance-first design
const VirtualizedToolsGrid = memo(({ 
  tools, 
  displayedCount 
}: VirtualizedToolsGridProps) => {
  // Optimized slicing with minimal computation
  const toolsToDisplay = tools.slice(0, Math.min(displayedCount, tools.length));

  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
      style={{ 
        contain: 'layout style',
        contentVisibility: 'auto'
      }}
    >
      {toolsToDisplay.map((tool, index) => (
        <PerformanceOptimizedCard 
          key={`${tool.title}-${index}`} 
          tool={tool} 
          index={index} 
        />
      ))}
    </div>
  );
});

VirtualizedToolsGrid.displayName = "VirtualizedToolsGrid";
export default VirtualizedToolsGrid;
