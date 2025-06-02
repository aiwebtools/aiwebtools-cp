
import React, { useMemo, memo, useState, useEffect, useCallback } from "react";
import { Tool } from "@/types/tools";
import ToolCard from "./ToolCard";
import { allTools } from "@/data/toolsData";

interface VirtualizedToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  searchTerm: string;
  selectedCategory: string | null;
  enableInfiniteScroll?: boolean;
  onLoadMore?: () => void;
  isLoading?: boolean;
  hasMoreTools?: boolean;
}

// Virtual scrolling implementation for large tool lists with infinite scroll support
const VirtualizedToolsGrid = memo(({ 
  tools, 
  displayedCount, 
  searchTerm, 
  selectedCategory,
  enableInfiniteScroll = false,
  onLoadMore,
  isLoading = false,
  hasMoreTools = true
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

  // Infinite scroll handler
  const handleInfiniteScroll = useCallback(() => {
    if (!enableInfiniteScroll || isLoading || !hasMoreTools || !onLoadMore) return;

    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Trigger load more when user is near bottom (500px threshold)
    const threshold = 500;
    const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
    
    if (nearBottom) {
      console.log('🔄 Infinite scroll triggered - Loading more similar tools...');
      onLoadMore();
    }
  }, [enableInfiniteScroll, isLoading, hasMoreTools, onLoadMore]);

  // Set up infinite scroll listener
  useEffect(() => {
    if (!enableInfiniteScroll) return;

    let ticking = false;
    
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleInfiniteScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [handleInfiniteScroll, enableInfiniteScroll]);

  // Optimize scroll handling with intersection observer for virtual scrolling
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
    <div>
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

      {/* Loading indicator for infinite scroll */}
      {enableInfiniteScroll && isLoading && (
        <div className="text-center py-8 mt-6">
          <div className="inline-flex items-center space-x-2 text-cyan-400">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400"></div>
            <span>Loading more similar tools...</span>
          </div>
        </div>
      )}

      {/* End message for infinite scroll */}
      {enableInfiniteScroll && !hasMoreTools && toolsToDisplay.length > 12 && (
        <div className="text-center py-8 mt-6">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3">
            <span className="text-2xl mr-3">🎯</span>
            <div>
              <h3 className="text-lg font-semibold text-white">
                You've discovered all similar tools!
              </h3>
              <p className="text-sm text-gray-300">
                Found {toolsToDisplay.length} amazing AI tools similar to your selection
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

VirtualizedToolsGrid.displayName = "VirtualizedToolsGrid";

export default VirtualizedToolsGrid;
