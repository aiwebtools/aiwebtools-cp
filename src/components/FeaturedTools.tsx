
import React, { useCallback, useState, useMemo } from "react";
import CategoryFilters from "@/components/tools/CategoryFilters";
import ActiveFilters from "@/components/tools/ActiveFilters";
import ToolsGrid from "@/components/tools/ToolsGrid";
import { Button } from "@/components/ui/button";
import { useFeaturedToolsState } from "@/hooks/useFeaturedToolsState";
import { useScrollMemory } from "@/hooks/useScrollMemory";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { verifyFeaturedToolsContent, runFullToolVerification } from "@/utils/toolIndexing";
import { searchTools } from "@/utils/searchUtils";

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
  
  // Set initial display count based on Marriage Mender GPT position or default to 25
  const initialDisplayCount = useMemo(() => 
    marriageMenderIndex !== -1 ? marriageMenderIndex + 1 : 25,
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

  // Run verification only once on mount with cleanup
  React.useEffect(() => {
    let isMounted = true;
    
    const runVerification = () => {
      if (!isMounted) return;
      
      console.log('🚀 Running featured tools verification...');
      
      // Run verification in next tick to prevent blocking
      setTimeout(() => {
        if (!isMounted) return;
        
        const verificationResults = runFullToolVerification(searchTools);
        const featuredVerification = verifyFeaturedToolsContent(filteredTools);
        
        console.log('📊 Featured Tools Verification Results:', featuredVerification);
        
        if (featuredVerification.missingCount > 0) {
          console.error(`❌ CRITICAL ISSUE: ${featuredVerification.missingCount} AI Web Tools GPTs missing from featured tools!`);
          console.error('Missing tools:', featuredVerification.missingTitles.slice(0, 20));
        } else {
          console.log('✅ All AI Web Tools GPTs are properly included in featured tools!');
        }
      }, 100);
    };

    runVerification();
    
    return () => {
      isMounted = false;
    };
  }, []); // Only run once on mount

  // Handle scroll position memory
  useScrollMemory({ displayedCount: actualDisplayedCount, selectedCategory, searchTerm });

  // Optimized logging with memoization
  const debugInfo = useMemo(() => ({
    totalTools: totalToolsCount,
    filteredTools: filteredTools.length,
    displayed: actualDisplayedCount,
    hasMore: hasMoreTools,
    aiWebToolsInDisplay: filteredTools.slice(0, actualDisplayedCount).filter(tool => 
      tool.directUrl?.includes('lovable.app')
    ).length
  }), [totalToolsCount, filteredTools.length, actualDisplayedCount, hasMoreTools, filteredTools]);

  console.log(`📊 FeaturedTools Stats:`, debugInfo);

  const handleLoadMore = useCallback(() => {
    if (isLoading || !hasMoreTools) return;
    
    console.log(`🚀 Loading more tools - Current: ${displayedCount}, Total: ${filteredTools.length}`);
    setIsLoading(true);
    
    // Use RAF for smoother performance
    requestAnimationFrame(() => {
      setTimeout(() => {
        const newCount = Math.min(displayedCount + 15, filteredTools.length); // Smaller batch size
        console.log(`📈 Setting new count: ${newCount}`);
        setDisplayedCount(newCount);
        setIsLoading(false);
        
        if (onToolsLoaded) {
          onToolsLoaded(newCount);
        }
      }, 150); // Reduced timeout
    });
  }, [isLoading, displayedCount, setDisplayedCount, setIsLoading, onToolsLoaded, hasMoreTools, filteredTools.length]);

  const handleLoadMoreButton = useCallback(() => {
    handleLoadMore();
  }, [handleLoadMore]);

  const handleShowMoreFeaturedTools = useCallback(() => {
    console.log('🚀 Show More Featured Tools clicked!');
    setShowAllFeaturedTools(true);
    setDisplayedCount(Math.min(filteredTools.length, 80)); // Smaller initial load
  }, [setDisplayedCount, filteredTools.length]);

  // Handle infinite scroll with performance optimization
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false,
    displayedCount: actualDisplayedCount,
    totalTools: filteredTools.length,
    onLoadMore: handleLoadMore
  });

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
        hasInfiniteScroll={true}
        isLoading={isLoading}
        onCategoryChange={handleCategoryChange}
      />

      {/* Show More Featured Tools Button - appears after Marriage Mender GPT */}
      {shouldShowFeaturedToolsButton && (
        <div className="text-center mt-8 mb-8 px-4">
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

      {/* Enhanced SEE MORE AI TOOLS Button - backup for when infinite scroll doesn't trigger */}
      {showLoadMoreButton && hasMoreTools && (
        <div className="text-center mt-12 mb-16 px-4">
          <Button
            onClick={handleLoadMoreButton}
            size="lg"
            disabled={isLoading}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            {isLoading ? (
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Loading More Tools...</span>
              </div>
            ) : (
              <>🚀 SEE MORE AI TOOLS</>
            )}
          </Button>
          <div className="mt-4 text-cyan-300 text-sm">
            Showing {actualDisplayedCount} of {totalToolsCount} amazing AI tools
          </div>
        </div>
      )}

      {!showLoadMoreButton && hasMoreTools && !selectedCategory && !searchTerm && showAllFeaturedTools && (
        <div className="text-center mt-8 mb-8 px-4">
          <Button
            onClick={handleLoadMore}
            size="lg"
            disabled={isLoading}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300"
            data-load-more-trigger
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Loading More Tools...</span>
              </div>
            ) : (
              "Load More AI Web Tools GPTs"
            )}
          </Button>
          <div className="mt-3 text-cyan-300 text-sm">
            {actualDisplayedCount} of {totalToolsCount} AI Web Tools GPTs loaded
          </div>
        </div>
      )}

      {!hasMoreTools && !isLoading && totalToolsCount > 20 && (
        <div className="text-center mt-12 mb-16 px-4 text-cyan-300">
          <div className="text-2xl mb-2">🎉</div>
          <div className="text-lg font-semibold mb-2">
            You've explored all {totalToolsCount} amazing AI tools!
          </div>
          <div className="text-sm opacity-80">
            Try searching or filtering by category to discover specific tools.
          </div>
        </div>
      )}
    </div>
  );
});

FeaturedTools.displayName = 'FeaturedTools';

export default FeaturedTools;
