
import { useState, useMemo } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getCategoriesWithCounts, getToolsByCategory } from "@/utils/categoryUtils";
import { getStandardizedCategoriesWithCounts } from "@/utils/categoryTitles";

export const useFeaturedToolsState = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedCount, setDisplayedCount] = useState<number>(12);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setDisplayedCount(12);
    setIsLoading(false);
    // Clear saved state when actively changing filters
    sessionStorage.removeItem('aitools-scroll-position');
    sessionStorage.removeItem('aitools-displayed-count');
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setDisplayedCount(12);
    setIsLoading(false);
    // Clear saved state when actively searching
    sessionStorage.removeItem('aitools-scroll-position');
    sessionStorage.removeItem('aitools-displayed-count');
  };

  const filteredTools = useMemo(() => {
    console.log(`🔧 Filtering tools - Category: ${selectedCategory}, Search: ${searchTerm}, Total tools: ${allTools.length}`);
    
    let tools = allTools;

    if (selectedCategory) {
      tools = getToolsByCategory(allTools, selectedCategory);
      console.log(`📂 Filtered by category "${selectedCategory}": ${tools.length} tools`);
    } else if (searchTerm) {
      tools = searchTools(allTools, searchTerm);
      console.log(`🔍 Filtered by search "${searchTerm}": ${tools.length} tools`);
    }

    return tools;
  }, [selectedCategory, searchTerm]);

  const totalToolsCount = filteredTools.length;
  // Use standardized category titles and counts
  const categoriesWithCounts = getStandardizedCategoriesWithCounts();
  const hasMoreTools = displayedCount < filteredTools.length;

  console.log(`📊 Hook state - Total: ${totalToolsCount}, Displayed: ${displayedCount}, Has more: ${hasMoreTools}`);

  return {
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
  };
};
