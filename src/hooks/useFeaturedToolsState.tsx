
import { useState, useMemo } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getCategoriesWithCounts, getToolsByCategory } from "@/utils/categoryUtils";
import { getStandardizedCategoriesWithCounts } from "@/utils/categoryTitles";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";
import { createFeaturedTools } from "@/utils/featuredTools";

export const useFeaturedToolsState = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedCount, setDisplayedCount] = useState<number>(30); // Increased to show more tools initially
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setDisplayedCount(30);
    setIsLoading(false);
    // Clear saved state when actively changing filters
    sessionStorage.removeItem('aitools-scroll-position');
    sessionStorage.removeItem('aitools-displayed-count');
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setDisplayedCount(30);
    setIsLoading(false);
    // Clear saved state when actively searching
    sessionStorage.removeItem('aitools-scroll-position');
    sessionStorage.removeItem('aitools-displayed-count');
  };

  const filteredTools = useMemo(() => {
    console.log(`🔧 Filtering tools - Category: ${selectedCategory}, Search: ${searchTerm}, Total tools: ${allTools.length}`);
    
    let tools = allTools;

    if (selectedCategory) {
      // Get tools from the selected category first
      const categoryTools = getToolsByCategory(allTools, selectedCategory);
      console.log(`📂 Found ${categoryTools.length} tools in category "${selectedCategory}"`);
      
      // Apply smart deduplication that preserves category order
      tools = createDeduplicatedToolsList(categoryTools, 0);
      
      // If we have fewer than 50 tools in this category, add related tools
      if (tools.length < 50) {
        console.log(`🔄 Category has only ${tools.length} tools, adding related tools...`);
        
        // Get tools from related categories
        const relatedCategories = getRelatedCategories(selectedCategory);
        const relatedTools = allTools.filter(tool => 
          relatedCategories.includes(tool.category || '') && 
          !tools.some(existing => existing.title === tool.title)
        );
        
        console.log(`🎯 Found ${relatedTools.length} related tools from categories: ${relatedCategories.join(', ')}`);
        
        // Add related tools up to a reasonable limit
        const additionalTools = createDeduplicatedToolsList(relatedTools, 0).slice(0, 30);
        tools = [...tools, ...additionalTools];
      }
      
      console.log(`📊 Final category result: ${tools.length} tools`);
    } else if (searchTerm) {
      // For search, return ALL matching tools without limiting
      const searchResults = searchTools(allTools, searchTerm);
      console.log(`🔍 Search "${searchTerm}" found ${searchResults.length} tools (unlimited)`);
      
      // Don't apply deduplication for search - show all matching results
      tools = searchResults;
    } else {
      // For homepage, use the featured tools with all AI Web Tools GPTs
      tools = createFeaturedTools(allTools);
      console.log(`🏠 Homepage - showing ${tools.length} featured tools (including all AI Web Tools GPTs)`);
    }

    return tools;
  }, [selectedCategory, searchTerm]);

  const totalToolsCount = filteredTools.length;
  const categoriesWithCounts = getStandardizedCategoriesWithCounts();
  const hasMoreTools = displayedCount < filteredTools.length;

  console.log(`📊 Hook state - Category: ${selectedCategory}, Search: ${searchTerm}, Total: ${totalToolsCount}, Displayed: ${displayedCount}, Has more: ${hasMoreTools}`);

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
