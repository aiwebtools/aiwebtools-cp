
import React, { useMemo, memo } from "react";
import { Tool } from "@/types/tools";
import ToolCard from "./ToolCard";

interface VirtualizedToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  searchTerm: string;
  selectedCategory: string | null;
}

// Simplified grid without heavy virtualization
const VirtualizedToolsGrid = memo(({ 
  tools, 
  displayedCount 
}: VirtualizedToolsGridProps) => {
  // Simple slicing without complex virtualization
  const toolsToDisplay = useMemo(() => {
    return tools.slice(0, Math.min(displayedCount, tools.length));
  }, [tools, displayedCount]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {toolsToDisplay.map((tool, index) => (
        <ToolCard key={`${tool.title}-${index}`} tool={tool} index={index} />
      ))}
    </div>
  );
});

VirtualizedToolsGrid.displayName = "VirtualizedToolsGrid";
export default VirtualizedToolsGrid;
