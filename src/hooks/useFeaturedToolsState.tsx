
import { useState, useMemo, useCallback } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getToolsByCategory } from "@/utils/categoryUtils";
import { getSortedStandardizedCategories } from "@/utils/categoryTitles";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";
import { createFeaturedTools } from "@/utils/featuredTools";
import { useDebounce } from "./useDebounce";

export const useFeaturedToolsState = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedCount, setDisplayedCount] = useState<number>(60);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Simpler debounce
  const debouncedSearchTerm = useDebounce(searchTerm, 200);

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setDisplayedCount(60);
    setIsLoading(false);
  }, []);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setDisplayedCount(60);
    setIsLoading(false);
  }, []);

  // Simplified filtering logic
  const filteredTools = useMemo(() => {
    let tools = allTools;

    if (selectedCategory) {
      const categoryTools = getToolsByCategory(allTools, selectedCategory);
      tools = createDeduplicatedToolsList(categoryTools, 0);
    } else if (debouncedSearchTerm) {
      tools = searchTools(allTools, debouncedSearchTerm);
    } else {
      tools = createFeaturedTools(allTools);
    }

    return tools;
  }, [selectedCategory, debouncedSearchTerm]);

  const totalToolsCount = filteredTools.length;
  
  // Simple categories calculation
  const categoriesWithCounts = useMemo(() => {
    const categories = getSortedStandardizedCategories();
    return categories.map(([name, count]) => ({ name, count }));
  }, []);
  
  const hasMoreTools = displayedCount < filteredTools.length;

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
