
import { Tool } from "@/types/tools";

export const getSimilarTools = (currentTools: Tool[], allTools: Tool[], minRecommendations: number = 6): Tool[] => {
  // If we already have enough tools, return empty array
  if (currentTools.length >= minRecommendations) {
    return [];
  }

  const currentToolTitles = new Set(currentTools.map(tool => tool.title));
  
  // Find similar tools based on various criteria
  const similarTools = allTools.filter(tool => {
    // Skip if already in current tools
    if (currentToolTitles.has(tool.title)) return false;
    
    // Check for similar categories
    const currentCategories = new Set(currentTools.map(t => t.category));
    if (currentCategories.has(tool.category)) return true;
    
    // Check for shared tags
    const currentTags = new Set(
      currentTools.flatMap(t => t.tags || []).map(tag => tag.toLowerCase())
    );
    if (tool.tags?.some(tag => currentTags.has(tag.toLowerCase()))) return true;
    
    // Check for similar keywords in descriptions
    const currentKeywords = new Set(
      currentTools.flatMap(t => 
        t.description.toLowerCase().split(' ').filter(word => word.length > 4)
      )
    );
    const toolKeywords = tool.description.toLowerCase().split(' ').filter(word => word.length > 4);
    const commonWords = toolKeywords.filter(word => currentKeywords.has(word));
    
    return commonWords.length >= 2;
  });

  // Shuffle and return the needed amount to reach minimum recommendations
  const needed = minRecommendations - currentTools.length;
  return similarTools.sort(() => Math.random() - 0.5).slice(0, needed);
};

export const shouldShowSimilarTools = (toolsCount: number, minRecommendations: number = 6): boolean => {
  return toolsCount < minRecommendations && toolsCount > 0;
};
