
import React, { useMemo, memo, useState, useEffect } from "react";
import { Tool } from "@/types/tools";
import ToolCard from "./ToolCard";

interface VirtualizedToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  searchTerm: string;
  selectedCategory: string | null;
}

// Virtual scrolling implementation for large tool lists
const VirtualizedToolsGrid = memo(({ 
  tools, 
  displayedCount, 
  searchTerm, 
  selectedCategory 
}: VirtualizedToolsGridProps) => {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 50 });
  
  // Memoize the tools to display to prevent unnecessary re-renders
  const toolsToDisplay = useMemo(() => {
    return tools.slice(0, Math.min(displayedCount, tools.length));
  }, [tools, displayedCount]);

  // Memoize visible tools for virtual scrolling
  const visibleTools = useMemo(() => {
    return toolsToDisplay.slice(visibleRange.start, visibleRange.end);
  }, [toolsToDisplay, visibleRange]);

  // Optimize scroll handling with intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleRange(prev => ({
              start: Math.max(0, index - 25),
              end: Math.min(toolsToDisplay.length, index + 75)
            }));
          }
        });
      },
      { 
        rootMargin: '200px',
        threshold: 0.1
      }
    );

    // Observe every 10th tool card for performance
    const cards = document.querySelectorAll('[data-index]');
    cards.forEach((card, index) => {
      if (index % 10 === 0) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, [toolsToDisplay.length]);

  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      style={{
        // Optimize large grid rendering
        contain: 'layout style',
        contentVisibility: 'auto',
        containIntrinsicSize: '300px 400px'
      }}
    >
      {visibleTools.map((tool, index) => {
        const actualIndex = visibleRange.start + index;
        return (
          <div
            key={`${tool.title}-${actualIndex}`}
            data-index={actualIndex}
            style={{
              // Improve rendering performance
              contain: 'layout style paint',
            }}
          >
            <ToolCard tool={tool} index={actualIndex} />
          </div>
        );
      })}
    </div>
  );
});

VirtualizedToolsGrid.displayName = "VirtualizedToolsGrid";

export default VirtualizedToolsGrid;
