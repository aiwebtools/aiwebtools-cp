
import { useState, useMemo, useCallback } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/search/searchUtils";
import { getToolsByCategory } from "@/utils/categoryUtils";
import { getSortedStandardizedCategories } from "@/utils/categoryTitles";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";
import { createFeaturedTools } from "@/utils/featuredTools";
import { isFreeTool } from "@/utils/freeToolDetection";

export const useFeaturedToolsState = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedCount, setDisplayedCount] = useState<number>(24); // Initial display count
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showFreeOnly, setShowFreeOnly] = useState<boolean>(false);

  const handleCategoryChange = useCallback((category: string | null) => {
    console.log('🏷️ Category change requested:', category);
    setSelectedCategory(category);
    setSearchTerm("");
    setDisplayedCount(24);
    setIsLoading(false);
  }, []);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setDisplayedCount(24);
    setIsLoading(false);
  }, []);

  const handleFreeOnlyChange = useCallback((freeOnly: boolean) => {
    setShowFreeOnly(freeOnly);
    setDisplayedCount(24);
    setIsLoading(false);
  }, []);

  // Use intelligent search function for proper intent-based ranking
  const filteredTools = useMemo(() => {
    let tools = allTools;

    if (selectedCategory) {
      console.log('🔍 Filtering by category:', selectedCategory);
      const categoryTools = getToolsByCategory(allTools, selectedCategory);
      tools = createDeduplicatedToolsList(categoryTools, 0);
    } else if (searchTerm) {
      const trimmedTerm = searchTerm.trim();
      
      // Use the intelligent searchTools function for proper ranking
      // This ensures intent-based matching and no repetition
      if (trimmedTerm.length >= 1) {
        tools = searchTools(allTools, trimmedTerm);
      }
    } else {
      tools = createFeaturedTools(allTools);
    }

    // Apply FREE filter if enabled
    if (showFreeOnly) {
      tools = tools.filter(isFreeTool);
    }

    return tools;
  }, [selectedCategory, searchTerm, showFreeOnly]);

  const totalToolsCount = filteredTools.length;
  
  // Simple categories calculation
  const categoriesWithCounts = useMemo(() => {
    const categories = getSortedStandardizedCategories();
    return categories.map(([name, count]) => ({ name, count }));
  }, []);
  
  // Always allow more tools to load - true infinite scroll
  const hasMoreTools = displayedCount < filteredTools.length || selectedCategory !== null;

  return {
    selectedCategory,
    searchTerm,
    displayedCount,
    isLoading,
    showFreeOnly,
    setDisplayedCount,
    setIsLoading,
    handleCategoryChange,
    handleSearchChange,
    handleFreeOnlyChange,
    filteredTools,
    totalToolsCount,
    categoriesWithCounts,
    hasMoreTools
  };
};
