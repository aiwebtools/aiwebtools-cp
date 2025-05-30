
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
  const filteredTools = allTools.filter(tool => tool.category === category);
  
  // Debug logging to help identify issues
  console.log(`Filtering for category: "${category}"`);
  console.log(`Found ${filteredTools.length} tools in this category`);
  console.log('Tools found:', filteredTools.map(tool => tool.title));
  
  return filteredTools;
};
