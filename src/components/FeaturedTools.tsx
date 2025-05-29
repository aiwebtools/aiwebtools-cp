import { useState, useMemo } from "react";
import { allTools, searchTools, getCategoriesWithCounts, getToolsByCategory } from "@/data/toolsData";
import CategoryFilters from "@/components/tools/CategoryFilters";
import ActiveFilters from "@/components/tools/ActiveFilters";
import FeaturedToolsSection from "@/components/tools/FeaturedToolsSection";
import ToolsGrid from "@/components/tools/ToolsGrid";
import InspirationMessage from "@/components/tools/InspirationMessage";

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

  const handleLoadMore = () => {
    setDisplayedCount((prevCount) => prevCount + 20);
  };

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
    <div>
      <InspirationMessage />

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

      {(!selectedCategory && !searchTerm) && (
        <FeaturedToolsSection featuredTools={allTools.slice(0, 6)} />
      )}

      <ToolsGrid
        tools={filteredTools}
        displayedCount={displayedCount}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default FeaturedTools;
