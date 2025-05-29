
import { useState, useMemo, useEffect, useCallback } from "react";
import { allTools, searchTools, getCategoriesWithCounts, getToolsByCategory } from "@/data/toolsData";
import CategoryFilters from "@/components/tools/CategoryFilters";
import ActiveFilters from "@/components/tools/ActiveFilters";
import ToolsGrid from "@/components/tools/ToolsGrid";
import { Button } from "@/components/ui/button";

interface FeaturedToolsProps {
  showLoadMoreButton?: boolean;
}

const FeaturedTools = ({ showLoadMoreButton = false }: FeaturedToolsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedCount, setDisplayedCount] = useState<number>(12);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setDisplayedCount(12);
    setIsLoading(false);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setDisplayedCount(12);
    setIsLoading(false);
  };

  const handleLoadMore = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedCount((prevCount) => prevCount + 8);
      setIsLoading(false);
    }, 100);
  }, [isLoading]);

  const handleLoadMoreButton = () => {
    handleLoadMore();
  };

  // Improved infinite scroll with better performance and glitch prevention
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (isLoading || showLoadMoreButton) return; // Don't auto-scroll if button mode is enabled
      
      // Clear previous timeout to prevent multiple triggers
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // More conservative threshold to prevent glitches
        const threshold = 600;
        const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
        
        if (nearBottom && displayedCount < filteredTools.length && !isLoading) {
          handleLoadMore();
        }
      }, 100); // Debounce scroll events
    };

    if (!showLoadMoreButton) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton]);

  const filteredTools = useMemo(() => {
    let tools = allTools;

    if (selectedCategory) {
      tools = getToolsByCategory(allTools, selectedCategory);
    } else if (searchTerm) {
      tools = searchTools(allTools, searchTerm);
    }

    return tools;
  }, [allTools, selectedCategory, searchTerm]);

  const totalToolsCount = filteredTools.length;
  const categoriesWithCounts = getCategoriesWithCounts(allTools);
  const hasMoreTools = displayedCount < filteredTools.length;

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
        hasInfiniteScroll={!showLoadMoreButton}
        isLoading={isLoading}
      />

      {/* SEE MORE AI TOOLS Button - only show on main page when there are more tools */}
      {showLoadMoreButton && !selectedCategory && !searchTerm && hasMoreTools && (
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
    </div>
  );
};

export default FeaturedTools;
