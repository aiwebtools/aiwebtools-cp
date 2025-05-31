
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import LoadMoreButton from "@/components/tools/LoadMoreButton";
import SimilarToolsRecommendation from "@/components/tools/SimilarToolsRecommendation";
import SeeMoreCategoriesButton from "@/components/tools/SeeMoreCategoriesButton";
import { getContextAwareSimilarTools, shouldShowSimilarTools } from "@/utils/contextAwareSimilarTools";
import { getStandardizedCategoriesWithCounts } from "@/utils/categoryTitles";
import { useMemo, useCallback, memo } from "react";

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

// Memoized ToolCard to prevent unnecessary re-renders
const MemoizedToolCard = memo(ToolCard);

const ToolsGrid = memo(({ 
  tools, 
  displayedCount, 
  selectedCategory, 
  searchTerm, 
  onLoadMore,
  hasInfiniteScroll = false,
  isLoading = false,
  onCategoryChange
}: ToolsGridProps) => {
  // Optimized tool slicing with memoization
  const displayTools = useMemo(() => {
    return tools.slice(0, Math.min(displayedCount, tools.length));
  }, [tools, displayedCount]);

  const shouldShowSimilar = useMemo(() => 
    shouldShowSimilarTools(tools.length) && !searchTerm,
    [tools.length, searchTerm]
  );

  const similarTools = useMemo(() => 
    shouldShowSimilar ? getContextAwareSimilarTools(tools, searchTerm, selectedCategory) : [],
    [shouldShowSimilar, tools, searchTerm, selectedCategory]
  );

  const hasMoreTools = displayedCount < tools.length;

  // Get standardized categories for the "See More Categories" button
  const categoriesWithCounts = useMemo(() => getStandardizedCategoriesWithCounts(), []);
  const shouldShowCategoriesButton = tools.length < 15 && !selectedCategory && !searchTerm;

  const getSectionTitle = useCallback(() => {
    if (selectedCategory) {
      return <>🎯 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">{selectedCategory}</span></>;
    }
    if (searchTerm) {
      return <>🔍 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Search Results for "{searchTerm}"</span></>;
    }
    return <>🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">AI TOOLS COLLECTION</span></>;
  }, [selectedCategory, searchTerm]);

  // Create stable keys for tools to prevent React reconciliation issues
  const toolsWithStableKeys = useMemo(() => {
    return displayTools.map((tool, index) => ({
      ...tool,
      stableKey: `${tool.title.replace(/[^a-zA-Z0-9]/g, '')}-${index}`
    }));
  }, [displayTools]);

  if (toolsWithStableKeys.length === 0) return null;

  return (
    <>
      {/* Show title for search results and categories */}
      {(selectedCategory || searchTerm) && (
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-100 mb-6 sm:mb-8 cyber-glow">
            {getSectionTitle()}
          </h3>
          {searchTerm && (
            <p className="text-gray-300 text-sm">
              Found {tools.length} tools matching "{searchTerm}"
              {tools.length > displayTools.length && " - scroll down to see more!"}
            </p>
          )}
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

      {/* Highly optimized grid with performance enhancements */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0" 
        style={{ 
          contentVisibility: 'auto',
          containIntrinsicSize: '300px',
          contain: 'layout style paint'
        }}
      >
        {toolsWithStableKeys.map((tool) => (
          <MemoizedToolCard key={tool.stableKey} tool={tool} />
        ))}
      </div>

      {/* Show context-aware similar tools recommendation only for limited results (not for search) */}
      {!searchTerm && (
        <SimilarToolsRecommendation 
          similarTools={similarTools}
          originalCount={tools.length}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />
      )}

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
            <span className="text-cyan-200 text-lg">
              {searchTerm ? `Loading more search results...` : `Loading more tools...`}
            </span>
          </div>
        </div>
      )}

      {/* Show completion message when all tools are displayed */}
      {hasInfiniteScroll && !hasMoreTools && !isLoading && tools.length > 15 && (
        <div className="text-center mt-12 py-8 text-cyan-300">
          <div className="text-2xl mb-2">🎉</div>
          <div className="text-lg font-semibold mb-2">
            {searchTerm 
              ? `You've seen all ${tools.length} tools matching "${searchTerm}"!`
              : selectedCategory 
                ? `You've explored all ${tools.length} tools in ${selectedCategory}!`
                : `You've explored all ${tools.length} tools!`
            }
          </div>
          <div className="text-sm opacity-80">
            {searchTerm 
              ? "Try a different search term to discover more tools."
              : selectedCategory 
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
});

ToolsGrid.displayName = 'ToolsGrid';

export default ToolsGrid;
