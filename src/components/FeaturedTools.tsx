
import { useState, useMemo, useEffect, useCallback } from "react";
import { allTools, searchTools, getCategoriesWithCounts, getToolsByCategory } from "@/data/toolsData";
import CategoryFilters from "@/components/tools/CategoryFilters";
import ActiveFilters from "@/components/tools/ActiveFilters";
import FeaturedToolsSection from "@/components/tools/FeaturedToolsSection";
import ToolsGrid from "@/components/tools/ToolsGrid";

const FeaturedTools = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedCount, setDisplayedCount] = useState<number>(20);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setSearchTerm(""); // Clear search term when a category is selected
    setDisplayedCount(20); // Reset displayed count when category changes
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null); // Clear category when a search term is entered
    setDisplayedCount(20); // Reset displayed count when search term changes
  };

  const handleLoadMore = useCallback(() => {
    setDisplayedCount((prevCount) => prevCount + 20);
  }, []);

  // Infinite scroll implementation
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000 // Load more when 1000px from bottom
      ) {
        const filteredToolsLength = filteredTools.length;
        if (displayedCount < filteredToolsLength) {
          handleLoadMore();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayedCount, handleLoadMore]);

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

      {(!selectedCategory && !searchTerm) && (
        <div className="px-4 sm:px-0">
          <FeaturedToolsSection featuredTools={allTools.slice(0, 6)} />
        </div>
      )}

      <ToolsGrid
        tools={filteredTools}
        displayedCount={displayedCount}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onLoadMore={handleLoadMore}
        hasInfiniteScroll={true}
      />
    </div>
  );
};

export default FeaturedTools;
