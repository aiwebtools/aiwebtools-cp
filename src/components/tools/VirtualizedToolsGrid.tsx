
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Tool } from "@/types/tools";
import MinimalToolCard from "../MinimalToolCard";

export interface VirtualizedToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  searchTerm: string;
  selectedCategory: string | null;
  filteredToolsCount?: number; // Number of tools from selected categories (before recommendations)
}

// MinimalToolCard is intentionally given a stable height below. Keeping this
// value in sync prevents the mobile window from drifting away from the real
// card positions and rendering an empty viewport.
const DEFAULT_ROW_HEIGHT = 220;
const ROW_GAP = 16;
const OVERSCAN_ROWS = 3;

const getColumnCount = () => {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1280) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};

interface WindowedSectionProps {
  tools: Tool[];
  indexOffset?: number;
  keyPrefix?: string;
}

const WindowedSection = memo(({ tools, indexOffset = 0, keyPrefix = "tool" }: WindowedSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [columns, setColumns] = useState(getColumnCount);
  const [range, setRange] = useState({ start: 0, end: 10 });

  const rowCount = Math.ceil(tools.length / columns);
  const stride = DEFAULT_ROW_HEIGHT + ROW_GAP;
  const totalHeight = Math.max(0, rowCount * stride - ROW_GAP);

  const updateRange = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const viewportTop = -rect.top;
    const viewportBottom = viewportTop + window.innerHeight;

    // Clamp both edges. The old calculation produced a negative `end` while
    // the grid was below the viewport (mounting almost every card via
    // Array.slice) and a `start` beyond rowCount after mobile momentum scroll,
    // which caused the visible black/flickering gaps.
    const start = Math.min(
      rowCount,
      Math.max(0, Math.floor(viewportTop / stride) - OVERSCAN_ROWS)
    );
    const end = Math.max(
      start,
      Math.min(rowCount, Math.ceil(viewportBottom / stride) + OVERSCAN_ROWS)
    );
    setRange((current) => current.start === start && current.end === end ? current : { start, end });
  }, [rowCount, stride]);

  useEffect(() => {
    const schedule = () => {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        updateRange();
      });
    };
    const handleResize = () => {
      setColumns(getColumnCount());
      schedule();
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", handleResize);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [updateRange]);

  useEffect(() => updateRange(), [tools.length, columns, updateRange]);

  const startIndex = range.start * columns;
  const endIndex = Math.min(tools.length, range.end * columns);
  const visibleTools = useMemo(() => tools.slice(startIndex, endIndex), [tools, startIndex, endIndex]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: `${totalHeight}px`, contain: "layout style" }}>
      <div
        className="absolute left-0 right-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        style={{ top: `${range.start * stride}px`, touchAction: "pan-y" }}
      >
        {visibleTools.map((tool, localIndex) => {
          const absoluteIndex = startIndex + localIndex;
          return (
            <div
              className="h-[220px] min-w-0"
              key={`${keyPrefix}__${tool.title}__${tool.directUrl ?? absoluteIndex}`}
            >
              <MinimalToolCard tool={tool} index={indexOffset + absoluteIndex} />
            </div>
          );
        })}
      </div>
    </div>
  );
});

WindowedSection.displayName = "WindowedSection";

// Real row-windowed grid: loaded tools remain available while only nearby rows
// are mounted, keeping DOM size bounded even after thousands of results load.
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
      {/* Main filtered tools grid - optimized for touch scrolling */}
      <WindowedSection tools={filteredTools} />
      
      {/* Separator and Recommended tools */}
      {hasRecommendations && recommendedTools.length > 0 && (
        <>
          <div className="w-full flex flex-col items-center justify-center my-12 px-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-cyan-500"></div>
              <div className="text-cyan-400 text-sm font-medium">
                ✓ End of {selectedCategory || 'filtered'} tools ({filteredToolsCount} shown)
              </div>
              <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
            
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
          
          <WindowedSection tools={recommendedTools} indexOffset={filteredToolsCount} keyPrefix="rec" />
        </>
      )}
    </>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.tools === nextProps.tools &&
    prevProps.displayedCount === nextProps.displayedCount &&
    prevProps.filteredToolsCount === nextProps.filteredToolsCount
  );
});

VirtualizedToolsGrid.displayName = "VirtualizedToolsGrid";
export default VirtualizedToolsGrid;
