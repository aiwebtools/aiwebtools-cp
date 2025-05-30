
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import LoadMoreButton from "@/components/tools/LoadMoreButton";
import SimilarToolsRecommendation from "@/components/tools/SimilarToolsRecommendation";
import SeeMoreCategoriesButton from "@/components/tools/SeeMoreCategoriesButton";
import { getContextAwareSimilarTools, shouldShowSimilarTools } from "@/utils/contextAwareSimilarTools";
import { getStandardizedCategoriesWithCounts } from "@/utils/categoryTitles";
import { useMemo } from "react";

interface ToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  selectedCategory: string | null;
  searchTerm: string;
  onLoadMore: () => void;
  hasInfiniteScroll?: boolean;
  isLoading?: boolean;
  onCategoryChange?: (category: string) => void;
}

const ToolsGrid = ({ 
  tools, 
  displayedCount, 
  selectedCategory, 
  searchTerm, 
  onLoadMore,
  hasInfiniteScroll = false,
  isLoading = false,
  onCategoryChange
}: ToolsGridProps) => {
  // Use the already deduplicated tools directly - no further deduplication needed
  const displayTools = tools.slice(0, displayedCount);
  const shouldShowSimilar = shouldShowSimilarTools(tools.length);
  const similarTools = shouldShowSimilar ? getContextAwareSimilarTools(tools, searchTerm, selectedCategory) : [];
  const hasMoreTools = displayedCount < tools.length;

  // Get standardized categories for the "See More Categories" button
  const categoriesWithCounts = getStandardizedCategoriesWithCounts();
  const shouldShowCategoriesButton = tools.length < 15 && !selectedCategory && !searchTerm;

  const getSectionTitle = () => {
    if (selectedCategory) {
      return <>🎯 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">{selectedCategory}</span></>;
    }
    if (searchTerm) {
      return <>🔍 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Search Results</span></>;
    }
    return <>🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">AI TOOLS COLLECTION</span></>;
  };

  // Create a unique key for each tool to prevent React reconciliation issues
  const toolsWithUniqueKeys = useMemo(() => {
    return displayTools.map((tool, index) => ({
      ...tool,
      uniqueKey: `${tool.title}-${tool.category}-${index}`
    }));
  }, [displayTools]);

  if (toolsWithUniqueKeys.length === 0) return null;

  return (
    <>
      {/* Only show title for category/search results, not for main page */}
      {(selectedCategory || searchTerm) && (
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-100 mb-6 sm:mb-8 cyber-glow">
            {getSectionTitle()}
          </h3>
          {selectedCategory && (
            <p className="text-gray-300 text-sm">
              Showing {displayTools.length} of {tools.length} tools in {selectedCategory}
              {tools.length > displayTools.length && " (scroll for more related tools)"}
            </p>
          )}
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

      {/* Optimized grid with better performance */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0" 
        style={{ 
          contentVisibility: 'auto',
          containIntrinsicSize: '300px'
        }}
      >
        {toolsWithUniqueKeys.map((tool) => (
          <ToolCard key={tool.uniqueKey} tool={tool} />
        ))}
      </div>

      {/* Show context-aware similar tools recommendation only for limited results */}
      <SimilarToolsRecommendation 
        similarTools={similarTools}
        originalCount={tools.length}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />

      {/* Show "See More Categories" button when results are limited and not filtered */}
      {shouldShowCategoriesButton && onCategoryChange && (
        <SeeMoreCategoriesButton 
          categoriesWithCounts={categoriesWithCounts}
          onCategoryChange={onCategoryChange}
        />
      )}

      {/* Improved loading state */}
      {hasInfiniteScroll && isLoading && hasMoreTools && (
        <div className="text-center mt-8 py-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
            <span className="text-cyan-200 text-lg">Loading more tools...</span>
          </div>
        </div>
      )}

      {/* Show completion message when all tools in category are displayed */}
      {hasInfiniteScroll && !hasMoreTools && !isLoading && tools.length > 15 && (
        <div className="text-center mt-12 py-8 text-cyan-300">
          <div className="text-2xl mb-2">🎉</div>
          <div className="text-lg font-semibold mb-2">
            {selectedCategory 
              ? `You've explored all ${tools.length} tools in ${selectedCategory}!`
              : `You've explored all ${tools.length} tools!`
            }
          </div>
          <div className="text-sm opacity-80">
            {selectedCategory 
              ? "Try exploring other categories to discover more tools."
              : "Try searching or filtering by category to discover specific tools."
            }
          </div>
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
