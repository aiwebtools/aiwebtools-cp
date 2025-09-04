
import React, { forwardRef, useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";
import ToolCard from "@/components/tools/ToolCard";
import { Button } from "@/components/ui/button";
import { Tool } from "@/types/tools";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";

interface ToolsDisplayProps {
  tools: Tool[];
  displayedCount: number;
  onLoadMore: () => void;
  hasMoreTools: boolean;
  categoryName: string;
  searchTerm: string;
}

const ToolsDisplay = memo(forwardRef<HTMLDivElement, ToolsDisplayProps>(
  ({ tools, displayedCount, onLoadMore, hasMoreTools, categoryName, searchTerm }, ref) => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate('/');
    };

    // Memoize deduplication to prevent unnecessary recalculation
    const deduplicatedTools = useMemo(() => {
      return createDeduplicatedToolsList(tools, 8);
    }, [tools]);

    // Memoize tools to display
    const toolsToDisplay = useMemo(() => {
      return deduplicatedTools.slice(0, displayedCount);
    }, [deduplicatedTools, displayedCount]);

    // Memoize tools with stable keys
    const toolsWithStableKeys = useMemo(() => {
      return toolsToDisplay.map((tool, index) => ({
        ...tool,
        stableKey: `${tool.title}-${tool.category}-${index}`
      }));
    }, [toolsToDisplay]);

    return (
      <div className="mb-16 px-4 sm:px-0" ref={ref}>
        {deduplicatedTools.length > 0 ? (
          <>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                {searchTerm ? `Search Results in ${categoryName}` : `AI Tools in ${categoryName}`}
              </h2>
              <p className="text-sm sm:text-base text-gray-400">
                Showing {toolsToDisplay.length} of {deduplicatedTools.length} tools
              </p>
            </div>
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
              style={{ 
                contain: 'layout style',
                contentVisibility: 'auto',
                containIntrinsicSize: '300px 400px'
              }}
            >
              {toolsWithStableKeys.map((tool) => (
                <ToolCard key={tool.stableKey} tool={tool} />
              ))}
            </div>

            {/* Load more button */}
            {hasMoreTools && (
              <div className="text-center mt-8">
                <Button
                  onClick={onLoadMore}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Load More Tools
                </Button>
              </div>
            )}

            {/* Show completion message when all tools are displayed */}
            {!hasMoreTools && deduplicatedTools.length > 20 && (
              <div className="text-center mt-12 py-8 text-cyan-300">
                <div className="text-2xl mb-2">🎉</div>
                <div className="text-lg font-semibold mb-2">
                  You've seen all {deduplicatedTools.length} tools in {categoryName}!
                </div>
                <div className="text-sm opacity-80">
                  Try exploring other categories to discover more tools.
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="text-4xl sm:text-6xl mb-4">🔍</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              {searchTerm ? 'No Search Results' : 'No Tools Found'}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              {searchTerm 
                ? `No tools found for "${searchTerm}" in ${categoryName}.`
                : `This category doesn't have any tools yet.`
              }
            </p>
            <Button 
              onClick={goBack}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Explore Other Categories
            </Button>
          </div>
        )}
      </div>
    );
  }
), (prevProps, nextProps) => {
  return (
    prevProps.tools.length === nextProps.tools.length &&
    prevProps.displayedCount === nextProps.displayedCount &&
    prevProps.hasMoreTools === nextProps.hasMoreTools &&
    prevProps.categoryName === nextProps.categoryName &&
    prevProps.searchTerm === nextProps.searchTerm
  );
});

ToolsDisplay.displayName = "ToolsDisplay";

export default ToolsDisplay;
