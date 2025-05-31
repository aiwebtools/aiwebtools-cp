
import React, { useCallback, useImperativeHandle, forwardRef, useState } from "react";
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

const FeaturedTools = ({ showLoadMoreButton = false, onToolsLoaded }: FeaturedToolsProps) => {
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

  // Find Marriage Mender GPT index to determine initial display count
  const marriageMenderIndex = filteredTools.findIndex(tool => 
    tool.title.toLowerCase().includes('marriage mender')
  );
  
  // Set initial display count based on Marriage Mender GPT position or default to 20
  const initialDisplayCount = marriageMenderIndex !== -1 ? marriageMenderIndex + 1 : 20;
  
  // Calculate actual displayed count based on show more state
  const actualDisplayedCount = (!selectedCategory && !searchTerm && !showAllFeaturedTools) 
    ? Math.min(initialDisplayCount, filteredTools.length)
    : displayedCount;

  // Check if we should show the "Show More Featured Tools" button
  const shouldShowFeaturedToolsButton = !selectedCategory && !searchTerm && 
    filteredTools.length > initialDisplayCount && !showAllFeaturedTools;

  // Run comprehensive verification on component mount
  React.useEffect(() => {
    console.log('🚀 Running featured tools verification...');
    
    // Run full tool verification
    const verificationResults = runFullToolVerification(searchTools);
    
    // Verify featured tools content specifically
    const featuredVerification = verifyFeaturedToolsContent(filteredTools);
    
    console.log('📊 Featured Tools Verification Results:', featuredVerification);
    
    if (featuredVerification.missingCount > 0) {
      console.error(`❌ CRITICAL ISSUE: ${featuredVerification.missingCount} AI Web Tools GPTs missing from featured tools!`);
      console.error('Missing tools:', featuredVerification.missingTitles.slice(0, 20));
    } else {
      console.log('✅ All AI Web Tools GPTs are properly included in featured tools!');
    }
  }, [filteredTools]);

  // Handle scroll position memory
  useScrollMemory({ displayedCount: actualDisplayedCount, selectedCategory, searchTerm });

  // Enhanced logging with verification details
  console.log(`📊 FeaturedTools Component Stats:`);
  console.log(`   Total tools available: ${totalToolsCount}`);
  console.log(`   Filtered tools: ${filteredTools.length}`);
  console.log(`   Currently displayed: ${actualDisplayedCount}`);
  console.log(`   Has more tools: ${hasMoreTools}`);
  
  // Count AI Web Tools GPTs in current display
  const aiWebToolsInDisplay = filteredTools.slice(0, actualDisplayedCount).filter(tool => 
    tool.directUrl?.includes('lovable.app')
  ).length;
  console.log(`🎯 AI Web Tools GPTs currently displayed: ${aiWebToolsInDisplay}`);
  
  // Log first few tool titles for debugging
  console.log(`🔍 First 15 filtered tools:`, filteredTools.slice(0, 15).map(t => t.title));

  const handleLoadMore = useCallback(() => {
    if (isLoading || !hasMoreTools) return;
    
    console.log(`🚀 Loading more tools - Current: ${displayedCount}, Total: ${filteredTools.length}`);
    setIsLoading(true);
    
    setTimeout(() => {
      const newCount = Math.min(displayedCount + 25, filteredTools.length); // Load 25 more tools at a time
      console.log(`📈 Setting new count: ${newCount}`);
      setDisplayedCount(newCount);
      setIsLoading(false);
      // Notify parent component about tools loaded
      if (onToolsLoaded) {
        onToolsLoaded(newCount);
      }
    }, 100);
  }, [isLoading, displayedCount, setDisplayedCount, setIsLoading, onToolsLoaded, hasMoreTools, filteredTools.length]);

  const handleLoadMoreButton = () => {
    // Just load more tools without any scrolling
    handleLoadMore();
  };

  const handleShowMoreFeaturedTools = () => {
    setShowAllFeaturedTools(true);
    setDisplayedCount(filteredTools.length); // Show all tools
  };

  // Enable infinite scroll for homepage - always active when not filtering
  const enableInfiniteScroll = !selectedCategory && !searchTerm;
  
  console.log(`🔄 Infinite scroll enabled: ${enableInfiniteScroll}, Has more tools: ${hasMoreTools}`);

  // Handle infinite scroll - enabled for homepage
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false, // Always use infinite scroll for homepage
    displayedCount: actualDisplayedCount,
    totalTools: filteredTools.length,
    onLoadMore: handleLoadMore
  });

  return (
    <div className="w-full">
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

      {/* Always visible Load More Button for homepage when there are more tools */}
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

      {/* Show completion message when all tools are loaded */}
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
};

export default FeaturedTools;
