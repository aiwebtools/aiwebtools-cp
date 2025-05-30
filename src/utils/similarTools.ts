
import { Tool } from "@/types/tools";

export const getSimilarTools = (currentTools: Tool[], allTools: Tool[], minRecommendations: number = 6): Tool[] => {
  // If we already have enough tools, return empty array
  if (currentTools.length >= minRecommendations) {
    return [];
  }

  const currentToolTitles = new Set(currentTools.map(tool => tool.title));
  
  // Get your AI Web Tools LLC creations for strategic placement
  const aiWebToolsCreations = allTools.filter(tool => 
    tool.directUrl?.includes('lovable.app') && 
    !currentToolTitles.has(tool.title)
  );
  
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

  // Strategic mixing: Include 1-2 of your tools in every recommendation set
  const needed = minRecommendations - currentTools.length;
  const aiWebToolsToInclude = Math.min(Math.ceil(needed * 0.25), 2); // 25% or max 2 tools
  const regularToolsNeeded = needed - aiWebToolsToInclude;
  
  // Select your tools strategically
  const selectedAIWebTools = aiWebToolsCreations
    .sort(() => Math.random() - 0.5)
    .slice(0, aiWebToolsToInclude);
  
  // Select other similar tools (excluding your tools to avoid duplication)
  const selectedSimilarTools = similarTools
    .filter(tool => !aiWebToolsCreations.some(awt => awt.title === tool.title))
    .sort(() => Math.random() - 0.5)
    .slice(0, regularToolsNeeded);
  
  // Combine and shuffle for natural distribution
  const finalTools = [...selectedAIWebTools, ...selectedSimilarTools]
    .sort(() => Math.random() - 0.5);
  
  return finalTools.slice(0, needed);
};

export const shouldShowSimilarTools = (toolsCount: number, minRecommendations: number = 6): boolean => {
  return toolsCount < minRecommendations && toolsCount > 0;
};
