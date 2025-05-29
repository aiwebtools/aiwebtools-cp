
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import LoadMoreButton from "@/components/tools/LoadMoreButton";
import SimilarToolsRecommendation from "@/components/tools/SimilarToolsRecommendation";
import { getSimilarTools, shouldShowSimilarTools } from "@/utils/similarTools";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";
import { allTools } from "@/data/toolsData";
import { useMemo } from "react";

interface ToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  selectedCategory: string | null;
  searchTerm: string;
  onLoadMore: () => void;
  hasInfiniteScroll?: boolean;
  isLoading?: boolean;
}

const ToolsGrid = ({ 
  tools, 
  displayedCount, 
  selectedCategory, 
  searchTerm, 
  onLoadMore,
  hasInfiniteScroll = false,
  isLoading = false
}: ToolsGridProps) => {
  // Apply deduplication to prevent frequent repeats
  const deduplicatedTools = useMemo(() => {
    return createDeduplicatedToolsList(tools, 8);
  }, [tools]);

  const displayTools = deduplicatedTools.slice(0, displayedCount);
  const shouldShowSimilar = shouldShowSimilarTools(deduplicatedTools.length);
  const similarTools = shouldShowSimilar ? getSimilarTools(deduplicatedTools, allTools) : [];
  const hasMoreTools = displayedCount < deduplicatedTools.length;

  const getSectionTitle = () => {
    if (selectedCategory) {
      return <>🎯 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">{selectedCategory}</span></>;
    }
    if (searchTerm) {
      return <>🔍 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Search Results</span></>;
    }
    return <>🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">COMPLETE AI TOOL COLLECTION</span></>;
  };

  if (displayTools.length === 0) return null;

  return (
    <>
      {/* Only show title for category/search results, not for main page */}
      {(selectedCategory || searchTerm) && (
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-100 mb-6 sm:mb-8 cyber-glow">
            {getSectionTitle()}
          </h3>
        </div>
      )}

      {/* Show title for main page only when not at the beginning */}
      {(!selectedCategory && !searchTerm && displayedCount > 12) && (
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-100 mb-6 sm:mb-8 cyber-glow">
            {getSectionTitle()}
          </h3>
        </div>
      )}

      {/* Optimized grid with virtual scrolling hints for better performance */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0" 
        style={{ 
          contentVisibility: 'auto',
          containIntrinsicSize: '300px' // Helps with layout stability
        }}
      >
        {displayTools.map((tool, index) => (
          <ToolCard key={`${tool.title}-${index}`} tool={tool} />
        ))}
      </div>

      {/* Show similar tools recommendation when original results are limited */}
      <SimilarToolsRecommendation 
        similarTools={similarTools}
        originalCount={deduplicatedTools.length}
      />

      {/* Improved loading state - only show when actually loading more tools */}
      {hasInfiniteScroll && isLoading && hasMoreTools && (
        <div className="text-center mt-8 py-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
            <span className="text-cyan-200 text-lg">Loading more amazing tools...</span>
          </div>
        </div>
      )}

      {/* Show completion message only when all tools are displayed and not loading */}
      {hasInfiniteScroll && !hasMoreTools && !isLoading && deduplicatedTools.length > 15 && (
        <div className="text-center mt-12 py-8 text-cyan-300">
          <div className="text-2xl mb-2">🎉</div>
          <div className="text-lg font-semibold mb-2">
            You've explored all {deduplicatedTools.length} tools!
          </div>
          <div className="text-sm opacity-80">
            Try searching or filtering by category to discover specific tools.
          </div>
        </div>
      )}

      {/* Fallback load more button for non-infinite scroll scenarios */}
      {!hasInfiniteScroll && (
        <LoadMoreButton 
          displayedCount={displayedCount}
          totalCount={deduplicatedTools.length}
          onLoadMore={onLoadMore}
        />
      )}
    </>
  );
};

export default ToolsGrid;
