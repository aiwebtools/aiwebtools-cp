
import { useState, useMemo, useCallback } from "react";
import { allToolsFiltered as allTools } from "@/data/toolsData";
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

  // Debounce search term to prevent excessive filtering
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setDisplayedCount(60);
    setIsLoading(false);
    sessionStorage.removeItem('aitools-scroll-position');
    sessionStorage.removeItem('aitools-displayed-count');
  }, []);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setDisplayedCount(60);
    setIsLoading(false);
    sessionStorage.removeItem('aitools-scroll-position');
    sessionStorage.removeItem('aitools-displayed-count');
  }, []);

  const filteredTools = useMemo(() => {
    console.log(`🔧 Filtering tools - Category: ${selectedCategory}, Search: ${debouncedSearchTerm}, Total tools: ${allTools.length}`);
    console.log(`🎯 AI Web Tools GPTs source count: ${aiWebToolsGPTs.length}`);
    
    let tools = allTools;

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
      console.log(`🔍 Search "${debouncedSearchTerm}" found ${searchResults.length} tools (unlimited)`);
      
      tools = searchResults;
    } else {
      tools = createFeaturedTools(allTools);
      console.log(`🏠 Homepage - showing ${tools.length} featured tools`);
      
      const aiWebToolsInFiltered = tools.filter(tool => 
        aiWebToolsGPTs.some(gpt => gpt.title === tool.title) ||
        tool.directUrl?.includes('lovable.app')
      );
      console.log(`🚀 AI Web Tools GPTs in filtered homepage tools: ${aiWebToolsInFiltered.length} of ${aiWebToolsGPTs.length}`);
      
      if (aiWebToolsInFiltered.length < aiWebToolsGPTs.length) {
        console.error(`❌ CRITICAL: Missing AI Web Tools GPTs from homepage!`);
        const missing = aiWebToolsGPTs.filter(gpt => 
          !tools.some(tool => tool.title === gpt.title)
        );
        console.error(`Missing:`, missing.slice(0, 10).map(t => t.title));
      }
    }

    return tools;
  }, [selectedCategory, debouncedSearchTerm]); // Use debouncedSearchTerm instead of searchTerm

  const totalToolsCount = filteredTools.length;
  
  // Convert the categories to the correct array format
  const categoriesWithCounts = useMemo(() => {
    const sortedCategories = getSortedStandardizedCategories();
    return sortedCategories.map(([name, count]) => ({ name, count }));
  }, []);
  
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

// Helper function to get related categories
const getRelatedCategories = (category: string): string[] => {
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

  return categoryRelations[category] || ["Business Operations & Productivity", "AI Development & Platforms", "Creative & Entertainment (General & Gaming)"];
};
