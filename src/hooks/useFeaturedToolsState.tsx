
import { useState, useMemo, useCallback } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getToolsByCategory } from "@/utils/categoryUtils";
import { getSortedStandardizedCategories } from "@/utils/categoryTitles";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";
import { createFeaturedTools } from "@/utils/featuredTools";

export const useFeaturedToolsState = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedCount, setDisplayedCount] = useState<number>(20); // Reduced for faster initial loading
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCategoryChange = useCallback((category: string | null) => {
    console.log('🏷️ Category change requested:', category);
    setSelectedCategory(category);
    setSearchTerm("");
    setDisplayedCount(20); // Reduced for faster loading
    setIsLoading(false);
  }, []);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setDisplayedCount(20); // Reduced for faster loading
    setIsLoading(false);
  }, []);

  // LIGHTNING FAST filtering logic - optimized for homepage speed
  const filteredTools = useMemo(() => {
    let tools = allTools;

    if (selectedCategory) {
      console.log('🔍 Filtering by category:', selectedCategory);
      const categoryTools = getToolsByCategory(allTools, selectedCategory);
      tools = createDeduplicatedToolsList(categoryTools, 0);
    } else if (searchTerm) {
      const trimmedTerm = searchTerm.trim();
      
      // LIGHTNING FAST simple matching for homepage
      if (trimmedTerm.length === 1) {
        tools = allTools.filter(tool => 
          tool.title.toLowerCase().startsWith(trimmedTerm.toLowerCase())
        ).slice(0, 50); // Limit for speed
      }
      // Fast matching for two characters
      else if (trimmedTerm.length === 2) {
        tools = allTools.filter(tool => 
          tool.title.toLowerCase().includes(trimmedTerm.toLowerCase()) ||
          tool.category?.toLowerCase().includes(trimmedTerm.toLowerCase())
        ).slice(0, 100); // Limit for speed
      }
      // Optimized search for longer terms
      else {
        const results = searchTools(allTools, searchTerm);
        tools = results.slice(0, 200); // Performance limit
      }
    } else {
      tools = createFeaturedTools(allTools);
    }

    return tools;
  }, [selectedCategory, searchTerm]);

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
