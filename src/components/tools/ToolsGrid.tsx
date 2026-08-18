import React, { useMemo, memo, useEffect, useRef } from "react";
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import SimilarToolsRecommendation from "@/components/tools/SimilarToolsRecommendation";
import SeeMoreCategoriesButton from "@/components/tools/SeeMoreCategoriesButton";
import { getContextAwareSimilarTools, shouldShowSimilarTools } from "@/utils/contextAwareSimilarTools";
import { getStandardizedCategoriesWithCounts } from "@/utils/categoryTitles";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

// Regular import instead of lazy loading to prevent module loading errors
import VirtualizedToolsGrid from "./VirtualizedToolsGrid";

interface ToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  selectedCategory: string | null;
  searchTerm: string;
  onLoadMore: () => void;
  hasInfiniteScroll?: boolean;
  isLoading?: boolean;
  onCategoryChange?: (category: string) => void;
  isFilterSearch?: boolean;
  filteredToolsCount?: number; // Number of tools from selected categories (before recommendations)
}

const ToolsGrid = memo(({ 
  tools, 
  displayedCount, 
  selectedCategory, 
  searchTerm, 
  onLoadMore,
  hasInfiniteScroll = false,
  isLoading = false,
  onCategoryChange,
  isFilterSearch = false,
  filteredToolsCount = 0
}: ToolsGridProps) => {
  // Memoize expensive calculations - simplified for performance
  const { 
    displayTools, 
    shouldShowSimilar, 
    similarTools, 
    hasMoreTools,
    categoriesWithCounts,
    shouldShowCategoriesButton
  } = useMemo(() => {
    const displayTools = tools.slice(0, displayedCount);
    const shouldShowSimilar = false; // Disabled for performance
    const similarTools = []; // Disabled for performance
    
    const hasMoreTools = displayedCount < tools.length;
    const categoriesWithCounts = {}; // Simplified for performance
    const shouldShowCategoriesButton = false; // Disabled for performance
    
    return {
      displayTools,
      shouldShowSimilar,
      similarTools,
      hasMoreTools,
      categoriesWithCounts,
      shouldShowCategoriesButton
    };
  }, [tools, displayedCount, searchTerm, selectedCategory]);

  // Enable infinite scroll when hasInfiniteScroll is true
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false, // Never show manual buttons
    displayedCount,
    totalTools: tools.length,
    onLoadMore,
    searchTerm,
    selectedCategory,
    enableInfiniteScroll: hasInfiniteScroll
  });

  // IntersectionObserver sentinel as a robust fallback to trigger loading EARLY
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!hasInfiniteScroll || displayedCount >= tools.length) return;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting && !isLoading && displayedCount < tools.length) {
        onLoadMore();
      }
    }, { root: null, rootMargin: '1500px', threshold: 0 }); // Trigger 1500px before visible
    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [hasInfiniteScroll, isLoading, onLoadMore, displayedCount, tools.length]);

  const getSectionTitle = useMemo(() => {
    if (selectedCategory) {
      return <>🎯 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">{selectedCategory}</span></>;
    }
    if (searchTerm) {
      return <>🔍 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Search Results for "{searchTerm}"</span></>;
    }
    return <>🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">AI TOOLS COLLECTION</span></>;
  }, [selectedCategory, searchTerm]);

  // Create a stable key for each tool to prevent React reconciliation issues
  const toolsWithStableKeys = useMemo(() => {
    return displayTools.map((tool, index) => ({
      ...tool,
      stableKey: `${tool.title}-${tool.category}-${index}`
    }));
  }, [displayTools]);

  if (toolsWithStableKeys.length === 0) return null;

  // Always use virtualized grid for maximum performance - simplified
  const useVirtualization = true;

  return (
    <>
      {/* Show title for search results and categories */}
      {(selectedCategory || searchTerm) && (
        <div className="text-center mb-8 sm:mb-12 px-4" data-search-results>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-100 mb-6 sm:mb-8 cyber-glow">
            {getSectionTitle}
          </h3>
          {searchTerm && (
            <p className="text-gray-300 text-sm">
              Found {tools.length} {tools.length === 1 ? 'tool' : 'tools'} matching "{searchTerm}"
              {tools.length > displayTools.length && " • Scroll down to see more results"}
            </p>
          )}
          {selectedCategory && !searchTerm && (
            <p className="text-gray-300 text-sm">
              Exploring {selectedCategory} - endless AI tools await! Keep scrolling for automatic discovery.
            </p>
          )}
        </div>
      )}

      {/* Show title for main page only when not at the beginning */}
      {(!selectedCategory && !searchTerm && displayedCount > 12) && (
        <div className="text-center mb-8 sm:mb-12 px-4" data-search-results>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-100 mb-6 sm:mb-8 cyber-glow">
            {getSectionTitle}
          </h3>
          <p className="text-gray-300 text-sm">
            Scroll down to discover more amazing AI tools!
          </p>
        </div>
      )}

      {/* Direct VirtualizedToolsGrid without Suspense */}
      {useVirtualization ? (
        <VirtualizedToolsGrid
          tools={tools}
          displayedCount={displayedCount}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          filteredToolsCount={filteredToolsCount}
        />
      ) : (
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-3 sm:px-4 lg:px-0 efficient-grid" 
          style={{ 
            contain: 'layout style',
            contentVisibility: 'auto',
            containIntrinsicSize: '300px 400px'
          }}
        >
          {toolsWithStableKeys.map((tool, index) => (
            <ToolCard key={tool.stableKey} tool={tool} index={index} />
          ))}
        </div>
      )}

      {/* Only show similar tools on homepage, not on category pages */}
      {!searchTerm && !selectedCategory && (
        <SimilarToolsRecommendation 
          similarTools={similarTools}
          originalCount={tools.length}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />
      )}

      {/* Only show categories button on homepage */}
      {shouldShowCategoriesButton && onCategoryChange && (
        <SeeMoreCategoriesButton 
          categoriesWithCounts={categoriesWithCounts}
          onCategoryChange={onCategoryChange}
        />
      )}

      {/* Smooth loading indicator for infinite scroll */}
      {hasInfiniteScroll && isLoading && (
        <div className="text-center mt-8 py-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
            <span className="text-cyan-200 text-lg">
              {searchTerm ? `Loading more search results...` : selectedCategory ? `Auto-loading more AI tools...` : `Loading more amazing AI tools...`}
            </span>
          </div>
        </div>
      )}

      {/* Show completion message only for search results that have ended */}
      {hasInfiniteScroll && !hasMoreTools && !isLoading && searchTerm && tools.length > 15 && (
        <div className="text-center mt-12 py-8 text-cyan-300">
          <div className="text-2xl mb-2">🔍</div>
          <div className="text-lg font-semibold mb-2">
            You've seen all {tools.length} tools matching "{searchTerm}"!
          </div>
          <div className="text-sm opacity-80">
            Try a different search term to discover more tools.
          </div>
        </div>
      )}

      {/* Endless scroll encouragement for categories (no end message ever) */}
      {hasInfiniteScroll && selectedCategory && !searchTerm && displayTools.length > 100 && !isLoading && (
        <div className="text-center mt-12 py-8 text-cyan-300">
          <div className="text-2xl mb-2">🌟</div>
          <div className="text-lg font-semibold mb-2">
            Amazing! You're discovering our endless AI tools collection.
          </div>
          <div className="text-sm opacity-80">
            Keep scrolling - we automatically load similar tools and related categories!
          </div>
        </div>
      )}

      {/* COMPLETELY DISABLE MANUAL LOAD MORE BUTTONS - Use infinite scroll or featured button only */}

      {hasInfiniteScroll && (
        <div ref={sentinelRef} aria-hidden className="h-px w-full" />
      )}
    </>
  );
}, (prevProps, nextProps) => {
  // Custom comparison for performance - also check first tool to detect shuffle
  const sameFirstTool = prevProps.tools[0]?.title === nextProps.tools[0]?.title;
  const sameFilteredCount = prevProps.filteredToolsCount === nextProps.filteredToolsCount;
  
  return (
    prevProps.tools.length === nextProps.tools.length &&
    prevProps.displayedCount === nextProps.displayedCount &&
    prevProps.selectedCategory === nextProps.selectedCategory &&
    prevProps.searchTerm === nextProps.searchTerm &&
    prevProps.isLoading === nextProps.isLoading &&
    sameFirstTool &&
    sameFilteredCount
  );
});

ToolsGrid.displayName = "ToolsGrid";

export default ToolsGrid;
