
import { useCallback } from "react";
import CategoryFilters from "@/components/tools/CategoryFilters";
import ActiveFilters from "@/components/tools/ActiveFilters";
import ToolsGrid from "@/components/tools/ToolsGrid";
import { Button } from "@/components/ui/button";
import { useFeaturedToolsState } from "@/hooks/useFeaturedToolsState";
import { useScrollMemory } from "@/hooks/useScrollMemory";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

interface FeaturedToolsProps {
  showLoadMoreButton?: boolean;
  onToolsLoaded?: (count: number) => void;
}

const FeaturedTools = ({ showLoadMoreButton = false, onToolsLoaded }: FeaturedToolsProps) => {
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

  // Handle scroll position memory
  useScrollMemory({ displayedCount, selectedCategory, searchTerm });

  const handleLoadMore = useCallback(() => {
    if (isLoading || !hasMoreTools) return;
    
    console.log(`🚀 Loading more tools - Current: ${displayedCount}, Total: ${filteredTools.length}`);
    setIsLoading(true);
    
    setTimeout(() => {
      const newCount = Math.min(displayedCount + 16, filteredTools.length); // Load 16 more tools at a time
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
    const currentScrollPosition = window.pageYOffset;
    handleLoadMore();
    
    // Scroll to the newly loaded tools after a brief delay
    setTimeout(() => {
      // Calculate approximate position of new tools
      const toolHeight = 300; // Approximate height of each tool card
      const toolsPerRow = window.innerWidth >= 1280 ? 4 : window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
      const newRows = Math.ceil(16 / toolsPerRow);
      const scrollOffset = newRows * toolHeight;
      
      window.scrollTo({
        top: currentScrollPosition + scrollOffset,
        behavior: 'smooth'
      });
    }, 200);
  };

  // Enable infinite scroll for homepage - always active when not filtering
  const enableInfiniteScroll = !selectedCategory && !searchTerm;
  
  console.log(`🔄 Infinite scroll enabled: ${enableInfiniteScroll}, Has more tools: ${hasMoreTools}`);

  // Handle infinite scroll - enabled for homepage
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false, // Always use infinite scroll for homepage
    displayedCount,
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
        displayedCount={displayedCount}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onLoadMore={handleLoadMore}
        hasInfiniteScroll={true}
        isLoading={isLoading}
        onCategoryChange={handleCategoryChange}
      />

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
            Showing {displayedCount} of {totalToolsCount} amazing AI tools
          </div>
        </div>
      )}

      {/* Always visible Load More Button for homepage when there are more tools */}
      {!showLoadMoreButton && hasMoreTools && !selectedCategory && !searchTerm && (
        <div className="text-center mt-8 mb-8 px-4">
          <Button
            onClick={handleLoadMore}
            size="lg"
            disabled={isLoading}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Loading More Tools...</span>
              </div>
            ) : (
              "Load More AI Tools"
            )}
          </Button>
          <div className="mt-3 text-cyan-300 text-sm">
            {displayedCount} of {totalToolsCount} tools loaded
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
