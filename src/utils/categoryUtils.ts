
import { Tool } from "@/types/tools";

// Helper function to get categories with counts
export const getCategoriesWithCounts = (allTools: Tool[]): Record<string, number> => {
  const categoryCounts: Record<string, number> = {};
  
  allTools.forEach(tool => {
    if (tool.category) {
      categoryCounts[tool.category] = (categoryCounts[tool.category] || 0) + 1;
    }
  });
  
  return categoryCounts;
};

// Helper function to get tools by category
export const getToolsByCategory = (allTools: Tool[], category: string): Tool[] => {
  return allTools.filter(tool => tool.category === category);
};
