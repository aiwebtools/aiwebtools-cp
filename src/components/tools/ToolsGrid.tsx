
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import LoadMoreButton from "@/components/tools/LoadMoreButton";
import SimilarToolsRecommendation from "@/components/tools/SimilarToolsRecommendation";
import SeeMoreCategoriesButton from "@/components/tools/SeeMoreCategoriesButton";
import { getContextAwareSimilarTools, shouldShowSimilarTools } from "@/utils/contextAwareSimilarTools";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";
import { allTools } from "@/data/toolsData";
import { getStandardizedCategoriesWithCounts } from "@/utils/categoryTitles";
import { useMemo, memo } from "react";

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
  // Memoize expensive computations for performance
  const deduplicatedTools = useMemo(() => {
    return createDeduplicatedToolsList(tools, 8);
  }, [tools]);

  const displayTools = useMemo(() => {
    return deduplicatedTools.slice(0, displayedCount);
  }, [deduplicatedTools, displayedCount]);

  const shouldShowSimilar = useMemo(() => {
    return shouldShowSimilarTools(deduplicatedTools.length);
  }, [deduplicatedTools.length]);

  const similarTools = useMemo(() => {
    return shouldShowSimilar ? getContextAwareSimilarTools(deduplicatedTools, searchTerm, selectedCategory) : [];
  }, [shouldShowSimilar, deduplicatedTools, searchTerm, selectedCategory]);

  const hasMoreTools = useMemo(() => {
    return displayedCount < deduplicatedTools.length;
  }, [displayedCount, deduplicatedTools.length]);

  // Memoize categories for performance
  const categoriesWithCounts = useMemo(() => {
    return getStandardizedCategoriesWithCounts();
  }, []);

  const shouldShowCategoriesButton = useMemo(() => {
    return deduplicatedTools.length < 15 && !selectedCategory && !searchTerm;
  }, [deduplicatedTools.length, selectedCategory, searchTerm]);

  const getSectionTitle = useMemo(() => {
    if (selectedCategory) {
      return <>🎯 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">{selectedCategory}</span></>;
    }
    if (searchTerm) {
      return <>🔍 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Search Results</span></>;
    }
    return <>🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">COMPLETE AI TOOL COLLECTION</span></>;
  }, [selectedCategory, searchTerm]);

  if (displayTools.length === 0) return null;

  return (
    <>
      {/* Optimized title rendering */}
      {(selectedCategory || searchTerm) && (
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-100 mb-6 sm:mb-8 cyber-glow will-change-auto">
            {getSectionTitle}
          </h3>
        </div>
      )}

      {(!selectedCategory && !searchTerm && displayedCount > 12) && (
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-100 mb-6 sm:mb-8 cyber-glow will-change-auto">
            {getSectionTitle}
          </h3>
        </div>
      )}

      {/* Heavily optimized grid with performance hints */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0" 
        style={{ 
          contentVisibility: 'auto',
          containIntrinsicSize: '300px',
          contain: 'layout style paint'
        }}
      >
        {displayTools.map((tool, index) => (
          <ToolCard 
            key={`${tool.title}-${index}`} 
            tool={tool}
          />
        ))}
      </div>

      <SimilarToolsRecommendation 
        similarTools={similarTools}
        originalCount={deduplicatedTools.length}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />

      {shouldShowCategoriesButton && onCategoryChange && (
        <SeeMoreCategoriesButton 
          categoriesWithCounts={categoriesWithCounts}
          onCategoryChange={onCategoryChange}
        />
      )}

      {/* Optimized loading state */}
      {hasInfiniteScroll && isLoading && hasMoreTools && (
        <div className="text-center mt-8 py-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 will-change-[transform]"></div>
            <span className="text-cyan-200 text-lg">Loading more amazing tools...</span>
          </div>
        </div>
      )}

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

      {!hasInfiniteScroll && (
        <LoadMoreButton 
          displayedCount={displayedCount}
          totalCount={deduplicatedTools.length}
          onLoadMore={onLoadMore}
        />
      )}
    </>
  );
});

ToolsGrid.displayName = 'ToolsGrid';

export default ToolsGrid;
