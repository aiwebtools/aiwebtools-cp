
import { useState, useMemo, useCallback } from "react";
import { allTools, featuredTools } from "@/data/toolsData";
import { searchTools } from "@/utils/search/searchUtils";
import { getToolsByCategory } from "@/utils/categoryUtils";
import { getSortedStandardizedCategories } from "@/utils/categoryTitles";
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

  // FAST filtering logic (must stay instant) + full-database infinite scroll
  const filteredTools = useMemo(() => {
    let tools = allTools;

    if (selectedCategory) {
      console.log("🔍 Filtering by category:", selectedCategory);

      // Category tools first, then the rest of the database as recommendations (no duplicates)
      const categoryTools = getToolsByCategory(allTools, selectedCategory);

      // Cheap O(n) de-dupe by stable key to avoid repeated tools when we merge lists
      const seen = new Set<string>();
      const keyOf = (t: (typeof allTools)[number]) => `${t.title}__${t.directUrl ?? ""}`;

      const uniqueCategoryTools = categoryTools.filter((t) => {
        const k = keyOf(t);
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });

      const recommendationTools = allTools.filter((t) => {
        const k = keyOf(t);
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });

      tools = [...uniqueCategoryTools, ...recommendationTools];
    } else if (searchTerm) {
      const trimmedTerm = searchTerm.trim();
      if (trimmedTerm.length >= 1) {
        // Intelligent ranking + internal dedupe
        tools = searchTools(allTools, trimmedTerm);
      }
    } else {
      // The featured collection is the complete AIWebTools portfolio: custom
      // GPTs, Gemini Gems, and Perplexity Bots, already power-ranked once.
      tools = featuredTools;
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
  
  // Allow loading more only while there are more unique tools to show
  const hasMoreTools = displayedCount < filteredTools.length;

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
