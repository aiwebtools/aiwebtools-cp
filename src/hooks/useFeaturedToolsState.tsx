
import { useState, useMemo } from "react";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { getCategoriesWithCounts, getToolsByCategory } from "@/utils/categoryUtils";
import { getStandardizedCategoriesWithCounts } from "@/utils/categoryTitles";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";

export const useFeaturedToolsState = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedCount, setDisplayedCount] = useState<number>(20);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setDisplayedCount(20);
    setIsLoading(false);
    // Clear saved state when actively changing filters
    sessionStorage.removeItem('aitools-scroll-position');
    sessionStorage.removeItem('aitools-displayed-count');
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setSelectedCategory(null);
    setDisplayedCount(20);
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
      const searchResults = searchTools(allTools, searchTerm);
      tools = createDeduplicatedToolsList(searchResults, 0);
      console.log(`🔍 Search "${searchTerm}" found ${tools.length} tools`);
    } else {
      // For homepage, apply smart deduplication
      tools = createDeduplicatedToolsList(allTools, 8);
      console.log(`🏠 Homepage - showing ${tools.length} deduplicated tools`);
    }

    return tools;
  }, [selectedCategory, searchTerm]);

  const totalToolsCount = filteredTools.length;
  const categoriesWithCounts = getStandardizedCategoriesWithCounts();
  const hasMoreTools = displayedCount < filteredTools.length;

  console.log(`📊 Hook state - Category: ${selectedCategory}, Total: ${totalToolsCount}, Displayed: ${displayedCount}, Has more: ${hasMoreTools}`);

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
    "Data & Analytics": ["Business & Productivity", "AI Research Tools", "Developer Tools"],
    "Business & Productivity": ["Data & Analytics", "Automation & Workflows", "Communication"],
    "AI Image Generation": ["Creative Design", "Art & Collectibles", "Video Tools"],
    "Creative Design": ["AI Image Generation", "Art & Collectibles", "Content Creation"],
    "AI Assistants": ["Communication", "Productivity Tools", "AI Chat Platforms"],
    "Video Tools": ["Audio & Voice", "Creative Design", "Content Creation"],
    "Developer Tools": ["AI Development", "Data & Analytics", "Automation & Workflows"],
    "AI Research Tools": ["Data & Analytics", "Education & Learning", "Academic Tools"],
    "Health & Wellness": ["Healthcare Professionals", "Personal Services", "Education & Learning"],
    "Finance Tools": ["Business & Productivity", "Data & Analytics", "Professional Services"],
    "Education & Learning": ["AI Research Tools", "Academic Tools", "Personal Services"],
    "Communication": ["AI Assistants", "Social Media", "Collaboration Tools"],
    "Content Creation": ["AI Writing Tools", "Creative Design", "Social Media"],
    "Social Media": ["Content Creation", "Marketing Tools", "Communication"],
    "Marketing Tools": ["Social Media", "Business & Productivity", "Content Creation"],
    "Legal Tools": ["Professional Services", "Business & Productivity", "Document Tools"],
    "AI Writing Tools": ["Content Creation", "AI Assistants", "Productivity Tools"],
    "Audio & Voice": ["Video Tools", "Creative Design", "AI Assistants"],
    "Automation & Workflows": ["Business & Productivity", "Developer Tools", "AI Tools"],
    "Security Tools": ["Developer Tools", "Business & Productivity", "Privacy Tools"]
  };

  return categoryRelations[category] || ["Business & Productivity", "AI Assistants", "Creative Design"];
};
