
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import LoadMoreButton from "@/components/tools/LoadMoreButton";

interface ToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  selectedCategory: string | null;
  searchTerm: string;
  onLoadMore: () => void;
  hasInfiniteScroll?: boolean;
}

const ToolsGrid = ({ 
  tools, 
  displayedCount, 
  selectedCategory, 
  searchTerm, 
  onLoadMore,
  hasInfiniteScroll = false 
}: ToolsGridProps) => {
  const displayTools = tools.slice(0, displayedCount);

  const getSectionTitle = () => {
    if (selectedCategory) {
      return <>🎯 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">{selectedCategory}</span></>;
    }
    if (searchTerm) {
      return <>🔍 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Search Results</span></>;
    }
    return <>🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Complete AI Tools Collection</span></>;
  };

  if (displayTools.length === 0) return null;

  return (
    <>
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-100 mb-6 sm:mb-8 cyber-glow">
          {getSectionTitle()}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
        {displayTools.map((tool, index) => (
          <ToolCard key={`${tool.title}-${index}`} tool={tool} />
        ))}
      </div>

      {/* Show loading indicator when infinite scroll is active and more tools are available */}
      {hasInfiniteScroll && displayedCount < tools.length && (
        <div className="text-center mt-8 text-cyan-200">
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-500"></div>
            <span>Loading more tools...</span>
          </div>
        </div>
      )}

      {/* Show completion message when all tools are displayed */}
      {hasInfiniteScroll && displayedCount >= tools.length && tools.length > 20 && (
        <div className="text-center mt-12 text-cyan-300">
          🎉 You've seen all {tools.length} tools! 
          <span className="block mt-2">Try searching or filtering by category to discover specific tools.</span>
        </div>
      )}

      {/* Fallback load more button for non-infinite scroll scenarios */}
      {!hasInfiniteScroll && (
        <LoadMoreButton 
          displayedCount={displayedCount}
          totalCount={tools.length}
          onLoadMore={onLoadMore}
        />
      )}
    </>
  );
};

export default ToolsGrid;
