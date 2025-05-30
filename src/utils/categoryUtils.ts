
import { Tool } from "@/types/tools";
import { 
  mainCategories, 
  getMainCategoryForSubcategory, 
  getSubcategoriesForMainCategory 
} from "./mainCategoryMapping";

// Helper function to get categories with counts (existing subcategories)
export const getCategoriesWithCounts = (allTools: Tool[]): Record<string, number> => {
  const categoryCounts: Record<string, number> = {};
  
  allTools.forEach(tool => {
    if (tool.category) {
      categoryCounts[tool.category] = (categoryCounts[tool.category] || 0) + 1;
    }
  });
  
  return categoryCounts;
};

// Helper function to get main categories with counts
export const getMainCategoriesWithCounts = (allTools: Tool[]): Record<string, number> => {
  const mainCategoryCounts: Record<string, number> = {};
  
  // Initialize all main categories with 0
  mainCategories.forEach(mainCat => {
    mainCategoryCounts[mainCat.name] = 0;
  });
  
  allTools.forEach(tool => {
    if (tool.category) {
      const mainCategory = getMainCategoryForSubcategory(tool.category);
      mainCategoryCounts[mainCategory] = (mainCategoryCounts[mainCategory] || 0) + 1;
    }
  });
  
  return mainCategoryCounts;
};

// Helper function to get tools by subcategory (existing functionality)
export const getToolsByCategory = (allTools: Tool[], category: string): Tool[] => {
  const filteredTools = allTools.filter(tool => tool.category === category);
  
  // Debug logging to help identify issues
  console.log(`Filtering for category: "${category}"`);
  console.log(`Found ${filteredTools.length} tools in this category`);
  console.log('Tools found:', filteredTools.map(tool => tool.title));
  
  return filteredTools;
};

// Helper function to get tools by main category
export const getToolsByMainCategory = (allTools: Tool[], mainCategory: string): Tool[] => {
  const subcategories = getSubcategoriesForMainCategory(mainCategory);
  
  if (subcategories.length === 0) {
    // For UNCATEGORIZED, return tools that don't have a main category mapping
    return allTools.filter(tool => {
      if (!tool.category) return true;
      return !getMainCategoryForSubcategory(tool.category) || getMainCategoryForSubcategory(tool.category) === "UNCATEGORIZED";
    });
  }
  
  const filteredTools = allTools.filter(tool => 
    tool.category && subcategories.includes(tool.category)
  );
  
  console.log(`Filtering for main category: "${mainCategory}"`);
  console.log(`Subcategories included: ${subcategories.join(', ')}`);
  console.log(`Found ${filteredTools.length} tools in this main category`);
  
  return filteredTools;
};

// Get subcategories with counts for a specific main category
export const getSubcategoriesWithCountsForMainCategory = (
  allTools: Tool[], 
  mainCategory: string
): Record<string, number> => {
  const subcategories = getSubcategoriesForMainCategory(mainCategory);
  const subcategoryCounts: Record<string, number> = {};
  
  subcategories.forEach(subcat => {
    const toolsInSubcategory = allTools.filter(tool => tool.category === subcat);
    if (toolsInSubcategory.length > 0) {
      subcategoryCounts[subcat] = toolsInSubcategory.length;
    }
  });
  
  return subcategoryCounts;
};
