import { Tool } from "@/types/tools";
import { consolidateTools } from "./categoryConsolidation";
import { getMainCategoryCounts, getSubcategoriesForMainCategory, mainCategories } from "./mainCategoryMapping";

// Helper function to get categories with counts
export const getCategoriesWithCounts = (allTools: Tool[]): Record<string, number> => {
  // Apply consolidation to ensure consistent categorization
  const consolidatedTools = consolidateTools(allTools);
  const categoryCounts: Record<string, number> = {};
  
  consolidatedTools.forEach(tool => {
    if (tool.category && tool.category.trim() !== '') {
      const category = tool.category.trim();
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
  });
  
  console.log('Category counts calculated:', categoryCounts);
  console.log('Total tools processed:', consolidatedTools.length);
  
  return categoryCounts;
};

// NEW: Helper function to get main categories with counts
export const getMainCategoriesWithCounts = (allTools: Tool[]): Record<string, number> => {
  const subcategoryCounts = getCategoriesWithCounts(allTools);
  return getMainCategoryCounts(subcategoryCounts);
};

// Helper function to get tools by category
export const getToolsByCategory = (allTools: Tool[], category: string): Tool[] => {
  // Apply consolidation to ensure consistent categorization
  const consolidatedTools = consolidateTools(allTools);
  const filteredTools = consolidatedTools.filter(tool => 
    tool.category && tool.category.trim() === category.trim()
  );
  
  // Debug logging to help identify issues
  console.log(`Filtering for category: "${category}"`);
  console.log(`Found ${filteredTools.length} tools in this category`);
  console.log('Tools found:', filteredTools.map(tool => tool.title));
  
  return filteredTools;
};

// NEW: Helper function to get tools by main category
export const getToolsByMainCategory = (allTools: Tool[], mainCategoryName: string): Tool[] => {
  const subcategories = getSubcategoriesForMainCategory(mainCategoryName);
  const consolidatedTools = consolidateTools(allTools);
  
  const filteredTools = consolidatedTools.filter(tool => 
    tool.category && subcategories.some(sub => 
      sub.toLowerCase() === tool.category!.toLowerCase()
    )
  );
  
  console.log(`Filtering for main category: "${mainCategoryName}"`);
  console.log(`Subcategories included: ${subcategories.join(', ')}`);
  console.log(`Found ${filteredTools.length} tools in this main category`);
  
  return filteredTools;
};

// Helper function to validate all tools have categories
export const validateToolCategories = (allTools: Tool[]): {
  totalTools: number;
  categorizedTools: number;
  uncategorizedTools: Tool[];
  categoryBreakdown: Record<string, number>;
} => {
  // Apply consolidation to ensure consistent categorization
  const consolidatedTools = consolidateTools(allTools);
  const uncategorizedTools = consolidatedTools.filter(tool => !tool.category || tool.category.trim() === '');
  const categorizedTools = consolidatedTools.filter(tool => tool.category && tool.category.trim() !== '');
  const categoryBreakdown = getCategoriesWithCounts(allTools);
  
  console.log('Tool validation results:', {
    totalTools: consolidatedTools.length,
    categorizedTools: categorizedTools.length,
    uncategorizedCount: uncategorizedTools.length
  });
  
  return {
    totalTools: consolidatedTools.length,
    categorizedTools: categorizedTools.length,
    uncategorizedTools,
    categoryBreakdown
  };
};
