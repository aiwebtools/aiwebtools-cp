
import { useState, useMemo, useCallback, useRef } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getCategoriesWithCounts, getToolsByCategory } from "@/utils/categoryUtils";
import { getSortedStandardizedCategories } from "@/utils/categoryTitles";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";
import { createFeaturedTools } from "@/utils/featuredTools";
import { aiWebToolsGPTs } from "@/data/tools/aiWebTools/aiWebToolsGPTs";
import { useDebounce } from "./useDebounce";

export const useFeaturedToolsState = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedCount, setDisplayedCount] = useState<number>(60);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Cache refs for performance
  const filteredToolsCache = useRef<Map<string, any>>(new Map());
  const lastToolsLength = useRef(allTools.length);

  // Use minimal debounce for better responsiveness - homepage speed
  const debouncedSearchTerm = useDebounce(searchTerm, 100);

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setDisplayedCount(60);
    setIsLoading(false);
    // Clear cache when category changes
    filteredToolsCache.current.clear();
    sessionStorage.removeItem('aitools-scroll-position');
    sessionStorage.removeItem('aitools-displayed-count');
  }, []);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setDisplayedCount(60);
    setIsLoading(false);
    // Clear cache when search changes
    filteredToolsCache.current.clear();
    sessionStorage.removeItem('aitools-scroll-position');
    sessionStorage.removeItem('aitools-displayed-count');
  }, []);

  const filteredTools = useMemo(() => {
    // Create cache key
    const cacheKey = `${selectedCategory || 'none'}-${debouncedSearchTerm}-${allTools.length}`;
    
    // Check cache first
    if (filteredToolsCache.current.has(cacheKey)) {
      console.log('🚀 Cache hit for filtered tools');
      return filteredToolsCache.current.get(cacheKey);
    }
    
    console.log(`🔧 Filtering tools - Category: ${selectedCategory}, Search: ${debouncedSearchTerm}, Total tools: ${allTools.length}`);
    
    let tools = allTools;
    const startTime = performance.now();

    if (selectedCategory) {
      const categoryTools = getToolsByCategory(allTools, selectedCategory);
      console.log(`📂 Found ${categoryTools.length} tools in category "${selectedCategory}"`);
      
      tools = createDeduplicatedToolsList(categoryTools, 0);
      
      if (tools.length < 50) {
        console.log(`🔄 Category has only ${tools.length} tools, adding related tools...`);
        
        const relatedCategories = getRelatedCategories(selectedCategory);
        const relatedTools = allTools.filter(tool => 
          relatedCategories.includes(tool.category || '') && 
          !tools.some(existing => existing.title === tool.title)
        );
        
        console.log(`🎯 Found ${relatedTools.length} related tools from categories: ${relatedCategories.join(', ')}`);
        
        const additionalTools = createDeduplicatedToolsList(relatedTools, 0).slice(0, 30);
        tools = [...tools, ...additionalTools];
      }
      
      console.log(`📊 Final category result: ${tools.length} tools`);
    } else if (debouncedSearchTerm) {
      // Use debounced search term to prevent excessive filtering
      const searchResults = searchTools(allTools, debouncedSearchTerm);
      console.log(`🔍 Search "${debouncedSearchTerm}" found ${searchResults.length} tools`);
      
      tools = searchResults;
    } else {
      tools = createFeaturedTools(allTools);
      console.log(`🏠 Homepage - showing ${tools.length} featured tools`);
    }

    const endTime = performance.now();
    console.log(`⚡ Filtering completed in ${(endTime - startTime).toFixed(2)}ms`);
    
    // Cache the result
    filteredToolsCache.current.set(cacheKey, tools);
    
    // Limit cache size to prevent memory issues
    if (filteredToolsCache.current.size > 10) {
      const firstKey = filteredToolsCache.current.keys().next().value;
      filteredToolsCache.current.delete(firstKey);
    }

    return tools;
  }, [selectedCategory, debouncedSearchTerm]); // Use debouncedSearchTerm instead of searchTerm

  const totalToolsCount = filteredTools.length;
  
  // Memoize categories with counts
  const categoriesWithCounts = useMemo(() => {
    const sortedCategories = getSortedStandardizedCategories();
    return sortedCategories.map(([name, count]) => ({ name, count }));
  }, []); // Static data, no dependencies needed
  
  const hasMoreTools = displayedCount < filteredTools.length;

  console.log(`📊 Hook state - Category: ${selectedCategory}, Search: ${searchTerm}, Debounced: ${debouncedSearchTerm}, Total: ${totalToolsCount}, Displayed: ${displayedCount}, Has more: ${hasMoreTools}`);

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

// Helper function to get related categories - memoized
const getRelatedCategories = (() => {
  const cache = new Map<string, string[]>();
  
  return (category: string): string[] => {
    if (cache.has(category)) {
      return cache.get(category)!;
    }
    
    const categoryRelations: Record<string, string[]> = {
      "AI Development & Platforms": ["Data Science & Analytics", "Automation Platforms", "Industry-Specific Solutions"],
      "Writing & Text Generation": ["AI Assistants & Search", "Business Operations & Productivity", "Education & Research Tools"],
      "Image & Design Generation": ["Video & Animation Tools", "Creative & Entertainment (General & Gaming)", "Marketing & Sales Solutions"],
      "Video & Animation Tools": ["Image & Design Generation", "Audio & Music Tools", "Creative & Entertainment (General & Gaming)"],
      "Audio & Music Tools": ["Video & Animation Tools", "Creative & Entertainment (General & Gaming)", "Communication & Collaboration Tools"],
      "Business Operations & Productivity": ["Marketing & Sales Solutions", "Data Science & Analytics", "Automation Platforms"],
      "Marketing & Sales Solutions": ["Business Operations & Productivity", "Communication & Collaboration Tools", "Image & Design Generation"],
      "Communication & Collaboration Tools": ["Business Operations & Productivity", "AI Assistants & Search", "Marketing & Sales Solutions"],
      "AI Assistants & Search": ["Writing & Text Generation", "Communication & Collaboration Tools", "Business Operations & Productivity"],
      "Data Science & Analytics": ["AI Development & Platforms", "Business Operations & Productivity", "Education & Research Tools"],
      "Automation Platforms": ["AI Development & Platforms", "Business Operations & Productivity", "Data Science & Analytics"],
      "Education & Research Tools": ["AI Assistants & Search", "Data Science & Analytics", "Writing & Text Generation"],
      "Industry-Specific Solutions": ["AI Development & Platforms", "Business Operations & Productivity", "Data Science & Analytics"],
      "Creative & Entertainment (General & Gaming)": ["Image & Design Generation", "Video & Animation Tools", "Audio & Music Tools"],
      "Health, Wellness & Personal Lifestyle": ["AI Assistants & Search", "Education & Research Tools", "Industry-Specific Solutions"],
      "Historical & Time-Based AI Tools": ["Education & Research Tools", "Industry-Specific Solutions", "Creative & Entertainment (General & Gaming)"]
    };

    const result = categoryRelations[category] || ["Business Operations & Productivity", "AI Development & Platforms", "Creative & Entertainment (General & Gaming)"];
    cache.set(category, result);
    return result;
  };
})();
