
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
  
  // Ultra-fast debounce for category page (25ms instead of 200ms)
  const debouncedSearchTerm = useDebounce(searchTerm, 25);

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

  // Optimized filtering logic with faster search for short terms
  const filteredTools = useMemo(() => {
    let tools = allTools;

    if (selectedCategory) {
      const categoryTools = getToolsByCategory(allTools, selectedCategory);
      tools = createDeduplicatedToolsList(categoryTools, 0);
    } else if (debouncedSearchTerm) {
      const trimmedTerm = debouncedSearchTerm.trim();
      
      // For single character, use instant simple matching
      if (trimmedTerm.length === 1) {
        tools = allTools.filter(tool => 
          tool.title.toLowerCase().startsWith(trimmedTerm.toLowerCase())
        );
      }
      // For two characters, use fast matching
      else if (trimmedTerm.length === 2) {
        tools = allTools.filter(tool => 
          tool.title.toLowerCase().includes(trimmedTerm.toLowerCase()) ||
          tool.category?.toLowerCase().includes(trimmedTerm.toLowerCase())
        );
      }
      // For longer terms, use full search
      else {
        tools = searchTools(allTools, debouncedSearchTerm);
      }
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
