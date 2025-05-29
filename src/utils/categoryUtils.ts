
import { Tool } from "@/types/tools";

// Helper function to get categories with counts
export const getCategoriesWithCounts = (allTools: Tool[]): Record<string, number> => {
  const categoryCounts: Record<string, number> = {};
  
  allTools.forEach(tool => {
    if (tool.category && tool.category.trim() !== '') {
      const category = tool.category.trim();
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
  });
  
  return categoryCounts;
};

// Helper function to get tools by category
export const getToolsByCategory = (allTools: Tool[], category: string): Tool[] => {
  const filteredTools = allTools.filter(tool => 
    tool.category && tool.category.trim() === category.trim()
  );
  
  // Debug logging to help identify issues
  console.log(`Filtering for category: "${category}"`);
  console.log(`Found ${filteredTools.length} tools in this category`);
  console.log('Tools found:', filteredTools.map(tool => tool.title));
  
  return filteredTools;
};

// Helper function to validate all tools have categories
export const validateToolCategories = (allTools: Tool[]): {
  totalTools: number;
  categorizedTools: number;
  uncategorizedTools: Tool[];
  categoryBreakdown: Record<string, number>;
} => {
  const uncategorizedTools = allTools.filter(tool => !tool.category || tool.category.trim() === '');
  const categorizedTools = allTools.filter(tool => tool.category && tool.category.trim() !== '');
  const categoryBreakdown = getCategoriesWithCounts(allTools);
  
  return {
    totalTools: allTools.length,
    categorizedTools: categorizedTools.length,
    uncategorizedTools,
    categoryBreakdown
  };
};
