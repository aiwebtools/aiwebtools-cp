
import React, { memo } from "react";
import { Tool } from "@/types/tools";
import MinimalToolCard from "../MinimalToolCard";

interface VirtualizedToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  searchTerm: string;
  selectedCategory: string | null;
}

// Ultra-simplified grid for maximum performance
const VirtualizedToolsGrid = memo(({ 
  tools, 
  displayedCount 
}: VirtualizedToolsGridProps) => {
  // Minimal slicing without complex virtualization
  const toolsToDisplay = tools.slice(0, Math.min(displayedCount, tools.length));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
      {toolsToDisplay.map((tool, index) => (
        <MinimalToolCard key={`${tool.title}-${index}`} tool={tool} index={index} />
      ))}
    </div>
  );
});

VirtualizedToolsGrid.displayName = "VirtualizedToolsGrid";
export default VirtualizedToolsGrid;
