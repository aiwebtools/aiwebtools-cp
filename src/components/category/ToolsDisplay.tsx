
import { forwardRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ToolCard from "@/components/tools/ToolCard";
import { Button } from "@/components/ui/button";
import { Tool } from "@/types/tools";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";

interface ToolsDisplayProps {
  selectedCategory: string;
  categoryTools: Tool[];
  displayedCount?: number;
  hasInfiniteScroll?: boolean;
  isLoading?: boolean;
}

const ToolsDisplay = forwardRef<HTMLDivElement, ToolsDisplayProps>(
  ({ selectedCategory, categoryTools, displayedCount, hasInfiniteScroll = false, isLoading = false }, ref) => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate('/');
    };

    // Apply deduplication to prevent frequent repeats
    const deduplicatedTools = useMemo(() => {
      return createDeduplicatedToolsList(categoryTools, 8);
    }, [categoryTools]);

    // Use displayedCount if provided, otherwise show all tools
    const toolsToDisplay = displayedCount ? deduplicatedTools.slice(0, displayedCount) : deduplicatedTools;
    const hasMoreTools = displayedCount ? displayedCount < deduplicatedTools.length : false;

    return (
      <div className="mb-16 px-4 sm:px-0" ref={ref}>
        {deduplicatedTools.length > 0 ? (
          <>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                AI Tools in {selectedCategory}
              </h2>
              <p className="text-sm sm:text-base text-gray-400">
                Showing {toolsToDisplay.length} of {deduplicatedTools.length} tools
              </p>
            </div>
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
              style={{ 
                contentVisibility: 'auto',
                containIntrinsicSize: '300px'
              }}
            >
              {toolsToDisplay.map((tool, index) => (
                <ToolCard key={`${tool.title}-${index}`} tool={tool} />
              ))}
            </div>

            {/* Improved loading state for category pages */}
            {hasInfiniteScroll && isLoading && hasMoreTools && (
              <div className="text-center mt-8 py-8">
                <div className="flex items-center justify-center space-x-3">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
                  <span className="text-cyan-200 text-lg">Loading more tools...</span>
                </div>
              </div>
            )}

            {/* Show completion message when all tools are displayed */}
            {hasInfiniteScroll && !hasMoreTools && !isLoading && deduplicatedTools.length > 20 && (
              <div className="text-center mt-12 py-8 text-cyan-300">
                <div className="text-2xl mb-2">🎉</div>
                <div className="text-lg font-semibold mb-2">
                  You've seen all {deduplicatedTools.length} tools in {selectedCategory}!
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
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">No Tools Found</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6">This category doesn't have any tools yet.</p>
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
);

ToolsDisplay.displayName = "ToolsDisplay";

export default ToolsDisplay;
