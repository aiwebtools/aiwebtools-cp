
import { useState, useMemo, useRef, useCallback } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getCategoriesWithCounts, getToolsByCategory } from "@/utils/categoryUtils";
import { getStandardizedCategoriesWithCounts } from "@/utils/categoryTitles";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";
import { createFeaturedTools } from "@/utils/featuredTools";
import { aiWebToolsGPTs } from "@/data/tools/aiWebTools/aiWebToolsGPTs";

export const useFeaturedToolsState = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedCount, setDisplayedCount] = useState<number>(20); // Reduced initial count
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Cache computations to prevent recalculation
  const cachedFeaturedTools = useRef<any>(null);
  const cachedCategories = useRef<any>(null);

  // Initialize featured tools cache once
  if (!cachedFeaturedTools.current) {
    cachedFeaturedTools.current = createFeaturedTools(allTools).slice(0, 50); // Limit initial featured tools
  }

  // Initialize categories cache once
  if (!cachedCategories.current) {
    cachedCategories.current = getStandardizedCategoriesWithCounts();
  }

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setDisplayedCount(20); // Reduced count
    setIsLoading(false);
    // Clear saved state when actively changing filters
    sessionStorage.removeItem('aitools-scroll-position');
    sessionStorage.removeItem('aitools-displayed-count');
  }, []);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setDisplayedCount(20); // Reduced count
    setIsLoading(false);
    // Clear saved state when actively searching
    sessionStorage.removeItem('aitools-scroll-position');
    sessionStorage.removeItem('aitools-displayed-count');
  }, []);

  // Optimized filtering with aggressive caching and limits
  const filteredTools = useMemo(() => {
    console.log(`🔧 Filtering tools - Category: ${selectedCategory}, Search: ${searchTerm}`);
    
    let tools = [];

    if (selectedCategory) {
      // Get tools from the selected category with strict limits
      const categoryTools = getToolsByCategory(allTools, selectedCategory);
      console.log(`📂 Found ${categoryTools.length} tools in category "${selectedCategory}"`);
      
      // Apply lightweight deduplication with smaller batches
      tools = createDeduplicatedToolsList(categoryTools, 4); // Smaller dedup window
      
      // Limit category tools to prevent slowdown
      if (tools.length > 200) {
        tools = tools.slice(0, 200);
        console.log(`⚡ Limited category tools to 200 for performance`);
      }
      
      console.log(`📊 Final category result: ${tools.length} tools`);
    } else if (searchTerm) {
      // For search, limit results aggressively
      const searchResults = searchTools(allTools, searchTerm);
      console.log(`🔍 Search "${searchTerm}" found ${searchResults.length} tools`);
      
      // Limit search results to prevent slowdown
      tools = searchResults.slice(0, 100);
      if (searchResults.length > 100) {
        console.log(`⚡ Limited search results to 100 for performance`);
      }
    } else {
      // For homepage, use cached featured tools
      tools = cachedFeaturedTools.current;
      console.log(`🏠 Homepage - showing ${tools.length} cached featured tools`);
    }

    return tools;
  }, [selectedCategory, searchTerm]);

  const totalToolsCount = allTools.length; // Use total count for display
  const categoriesWithCounts = cachedCategories.current;
  const hasMoreTools = displayedCount < filteredTools.length;

  console.log(`📊 Hook state - Category: ${selectedCategory}, Search: ${searchTerm}, Total: ${totalToolsCount}, Filtered: ${filteredTools.length}, Displayed: ${displayedCount}`);

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
