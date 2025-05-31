
import React, { useCallback, useState, useMemo } from "react";
import CategoryFilters from "@/components/tools/CategoryFilters";
import ActiveFilters from "@/components/tools/ActiveFilters";
import ToolsGrid from "@/components/tools/ToolsGrid";
import { Button } from "@/components/ui/button";
import { useFeaturedToolsState } from "@/hooks/useFeaturedToolsState";

interface FeaturedToolsProps {
  showLoadMoreButton?: boolean;
  onToolsLoaded?: (count: number) => void;
}

const FeaturedTools = React.memo(({ showLoadMoreButton = false, onToolsLoaded }: FeaturedToolsProps) => {
  const [showAllFeaturedTools, setShowAllFeaturedTools] = useState(false);
  
  const {
    selectedCategory,
    searchTerm,
    displayedCount,
    isLoading,
    setDisplayedCount,
    setIsLoading,
    handleCategoryChange,
    handleSearchChange,
    filteredTools,
    totalToolsCount,
    categoriesWithCounts,
    hasMoreTools
  } = useFeaturedToolsState();

  // Optimized Marriage Mender GPT detection with memoization
  const marriageMenderIndex = useMemo(() => 
    filteredTools.findIndex(tool => 
      tool.title.toLowerCase().includes('marriage mender') ||
      (tool.title.toLowerCase().includes('marriage') && tool.title.toLowerCase().includes('mender'))
    ), [filteredTools]
  );
  
  // Set initial display count based on Marriage Mender GPT position or default to 20
  const initialDisplayCount = useMemo(() => 
    marriageMenderIndex !== -1 ? marriageMenderIndex + 1 : 20,
    [marriageMenderIndex]
  );

  // Calculate actual displayed count based on show more state
  const actualDisplayedCount = useMemo(() => 
    (!selectedCategory && !searchTerm && !showAllFeaturedTools) 
      ? Math.min(initialDisplayCount, filteredTools.length)
      : displayedCount,
    [selectedCategory, searchTerm, showAllFeaturedTools, initialDisplayCount, filteredTools.length, displayedCount]
  );

  // Check if we should show the "Show More Featured Tools" button
  const shouldShowFeaturedToolsButton = useMemo(() => 
    !selectedCategory && !searchTerm && 
    filteredTools.length > initialDisplayCount && !showAllFeaturedTools,
    [selectedCategory, searchTerm, filteredTools.length, initialDisplayCount, showAllFeaturedTools]
  );

  const handleLoadMore = useCallback(() => {
    if (isLoading || !hasMoreTools) return;
    
    console.log(`🚀 Loading more tools - Current: ${displayedCount}, Total: ${filteredTools.length}`);
    setIsLoading(true);
    
    // Use immediate update for better performance
    requestAnimationFrame(() => {
      const newCount = Math.min(displayedCount + 12, filteredTools.length); // Smaller batch
      console.log(`📈 Setting new count: ${newCount}`);
      setDisplayedCount(newCount);
      setIsLoading(false);
      
      if (onToolsLoaded) {
        onToolsLoaded(newCount);
      }
    });
  }, [isLoading, displayedCount, setDisplayedCount, setIsLoading, onToolsLoaded, hasMoreTools, filteredTools.length]);

  const handleShowMoreFeaturedTools = useCallback(() => {
    console.log('🚀 Show More Featured Tools clicked!');
    setShowAllFeaturedTools(true);
    setDisplayedCount(Math.min(filteredTools.length, 60)); // Smaller load
  }, [setDisplayedCount, filteredTools.length]);

  return (
    <div className="w-full">
      {/* Show More Featured Tools Button - placed above search bar */}
      {shouldShowFeaturedToolsButton && (
        <div className="text-center mb-8 px-4">
          <Button
            onClick={handleShowMoreFeaturedTools}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            ✨ Show More Featured AI Web Tools GPTs
          </Button>
          <div className="mt-4 text-purple-300 text-sm">
            Discover {filteredTools.length - initialDisplayCount} more amazing AI tools from our collection
          </div>
        </div>
      )}

      <div className="px-4 sm:px-0">
        <CategoryFilters
          categoriesWithCounts={categoriesWithCounts}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
          searchTerm={searchTerm}
        />

        <ActiveFilters
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          totalTools={totalToolsCount}
        />
      </div>

      <ToolsGrid
        tools={filteredTools}
        displayedCount={actualDisplayedCount}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onLoadMore={handleLoadMore}
        hasInfiniteScroll={false}
        isLoading={isLoading}
        onCategoryChange={handleCategoryChange}
      />

      {/* Load More Button */}
      {hasMoreTools && (showLoadMoreButton || selectedCategory || searchTerm || showAllFeaturedTools) && (
        <div className="text-center mt-8 mb-8 px-4">
          <Button
            onClick={handleLoadMore}
            size="lg"
            disabled={isLoading}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300"
          >
            {isLoading ? "Loading More Tools..." : "Load More AI Tools"}
          </Button>
          <div className="mt-3 text-cyan-300 text-sm">
            {actualDisplayedCount} of {filteredTools.length} tools loaded
          </div>
        </div>
      )}
    </div>
  );
});

FeaturedTools.displayName = 'FeaturedTools';

export default FeaturedTools;
