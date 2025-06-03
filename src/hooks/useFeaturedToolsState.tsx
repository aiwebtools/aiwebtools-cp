
import { useState, useMemo, useCallback, useRef } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getCategoriesWithCounts, getToolsByCategory } from "@/utils/categoryUtils";
import { getSortedStandardizedCategories } from "@/utils/categoryTitles";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";
import { createFeaturedTools } from "@/utils/featuredTools";
import { useDebounce } from "./useDebounce";

// Global caches for better performance
const toolsCache = new Map<string, any>();
const categoriesCache = getSortedStandardizedCategories();

export const useFeaturedToolsState = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedCount, setDisplayedCount] = useState<number>(60);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // More aggressive debounce for faster perceived performance
  const debouncedSearchTerm = useDebounce(searchTerm, 150);

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setDisplayedCount(60);
    setIsLoading(false);
    // Clear relevant cache entries only
    for (const [key] of toolsCache) {
      if (key.includes('search-')) {
        toolsCache.delete(key);
      }
    }
  }, []);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setDisplayedCount(60);
    setIsLoading(false);
  }, []);

  const filteredTools = useMemo(() => {
    const cacheKey = `${selectedCategory || 'none'}-${debouncedSearchTerm}-${allTools.length}`;
    
    // Check cache first
    if (toolsCache.has(cacheKey)) {
      return toolsCache.get(cacheKey);
    }
    
    let tools = allTools;

    if (selectedCategory) {
      const categoryTools = getToolsByCategory(allTools, selectedCategory);
      tools = createDeduplicatedToolsList(categoryTools, 0);
      
      if (tools.length < 50) {
        const relatedCategories = getRelatedCategories(selectedCategory);
        const relatedTools = allTools.filter(tool => 
          relatedCategories.includes(tool.category || '') && 
          !tools.some(existing => existing.title === tool.title)
        );
        
        const additionalTools = createDeduplicatedToolsList(relatedTools, 0).slice(0, 30);
        tools = [...tools, ...additionalTools];
      }
    } else if (debouncedSearchTerm) {
      tools = searchTools(allTools, debouncedSearchTerm);
    } else {
      tools = createFeaturedTools(allTools);
    }

    // Cache the result with size limit
    if (toolsCache.size > 15) {
      const firstKey = toolsCache.keys().next().value;
      toolsCache.delete(firstKey);
    }
    toolsCache.set(cacheKey, tools);

    return tools;
  }, [selectedCategory, debouncedSearchTerm]);

  const totalToolsCount = filteredTools.length;
  
  // Use cached categories
  const categoriesWithCounts = useMemo(() => {
    return categoriesCache.map(([name, count]) => ({ name, count }));
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

// Cached related categories function
const getRelatedCategories = (() => {
  const cache = new Map<string, string[]>();
  
  return (category: string): string[] => {
    if (cache.has(category)) {
      return cache.get(category)!;
    }
    
    const categoryRelations: Record<string, string[]> = {
      "AI Development & Platforms": ["Data Science & Analytics", "Automation Platforms"],
      "Writing & Text Generation": ["AI Assistants & Search", "Business Operations & Productivity"],
      "Image & Design Generation": ["Video & Animation Tools", "Creative & Entertainment (General & Gaming)"],
      "Video & Animation Tools": ["Image & Design Generation", "Audio & Music Tools"],
      "Business Operations & Productivity": ["Marketing & Sales Solutions", "Data Science & Analytics"],
      "Marketing & Sales Solutions": ["Business Operations & Productivity", "Communication & Collaboration Tools"]
    };

    const result = categoryRelations[category] || ["Business Operations & Productivity", "AI Development & Platforms"];
    cache.set(category, result);
    return result;
  };
})();
