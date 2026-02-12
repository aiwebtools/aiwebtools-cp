
import { Tool } from "@/types/tools";

export const getSimilarTools = (currentTools: Tool[], allTools: Tool[], minRecommendations: number = 6): Tool[] => {
  // If we already have enough tools, return empty array
  if (currentTools.length >= minRecommendations) {
    return [];
  }

  const currentToolTitles = new Set(currentTools.map(tool => tool.title));
  
  // Get your AI Web Tools creations for strategic placement
  const aiWebToolsCreations = allTools.filter(tool => 
    tool.directUrl?.includes('lovable.app') && 
    !currentToolTitles.has(tool.title)
  );
  
  // Use a Set to track tools we've already processed to prevent duplicates
  const seenToolTitles = new Set<string>();
  const candidateTools: Tool[] = [];
  
  // Find similar tools based on various criteria
  allTools.forEach(tool => {
    // Skip if already in current tools or already processed
    if (currentToolTitles.has(tool.title) || seenToolTitles.has(tool.title)) {
      return;
    }
    
    let shouldInclude = false;
    
    // Check for similar categories
    const currentCategories = new Set(currentTools.map(t => t.category));
    if (currentCategories.has(tool.category)) shouldInclude = true;
    
    // Check for shared tags
    if (!shouldInclude) {
      const currentTags = new Set(
        currentTools.flatMap(t => t.tags || []).map(tag => tag.toLowerCase())
      );
      if (tool.tags?.some(tag => currentTags.has(tag.toLowerCase()))) shouldInclude = true;
    }
    
    // Check for similar keywords in descriptions
    if (!shouldInclude) {
      const currentKeywords = new Set(
        currentTools.flatMap(t => 
          t.description.toLowerCase().split(' ').filter(word => word.length > 4)
        )
      );
      const toolKeywords = tool.description.toLowerCase().split(' ').filter(word => word.length > 4);
      const commonWords = toolKeywords.filter(word => currentKeywords.has(word));
      
      if (commonWords.length >= 2) shouldInclude = true;
    }
    
    if (shouldInclude) {
      candidateTools.push(tool);
      seenToolTitles.add(tool.title);
    }
  });

  // Strategic mixing: Include 1-2 of your tools in every recommendation set
  const needed = minRecommendations - currentTools.length;
  const aiWebToolsToInclude = Math.min(Math.ceil(needed * 0.25), 2); // 25% or max 2 tools
  const regularToolsNeeded = needed - aiWebToolsToInclude;
  
  // Select your tools strategically (avoiding duplicates)
  const selectedAIWebTools = aiWebToolsCreations
    .filter(tool => !seenToolTitles.has(tool.title))
    .sort(() => Math.random() - 0.5)
    .slice(0, aiWebToolsToInclude);
  
  // Select other similar tools (excluding your tools to avoid duplication)
  const selectedSimilarTools = candidateTools
    .filter(tool => !aiWebToolsCreations.some(awt => awt.title === tool.title))
    .sort(() => Math.random() - 0.5)
    .slice(0, regularToolsNeeded);
  
  // Combine and shuffle for natural distribution
  const finalTools = [...selectedAIWebTools, ...selectedSimilarTools]
    .sort(() => Math.random() - 0.5);
  
  // Final deduplication check to ensure no duplicates
  const uniqueFinalTools = finalTools.filter((tool, index, arr) => 
    arr.findIndex(t => t.title === tool.title) === index
  );
  
  return uniqueFinalTools.slice(0, needed);
};

export const shouldShowSimilarTools = (toolsCount: number, minRecommendations: number = 6): boolean => {
  return toolsCount < minRecommendations && toolsCount > 0;
};
