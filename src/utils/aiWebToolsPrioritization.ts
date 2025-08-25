import { Tool } from "@/types/tools";

/**
 * Utility functions to prioritize AI Web Tools GPTs with videos/images
 * These tools should appear first in all categories and sections
 */

// Check if tool is an AI Web Tools GPT
export const isAIWebToolsGPT = (tool: Tool): boolean => {
  return tool.directUrl?.includes('lovable.app') || 
         tool.directUrl?.includes('aiwebtools') ||
         tool.description?.toLowerCase().includes('aiwebtools') ||
         tool.tags?.some(tag => tag.toLowerCase().includes('aiwebtools'));
};

// Check if tool has video or image media
export const hasVideoOrImageMedia = (tool: Tool): boolean => {
  const hasVideo = tool.videoUrl && tool.videoUrl.trim() !== '';
  const hasImage = tool.imageUrl && tool.imageUrl.trim() !== '';
  return hasVideo || hasImage;
};

// Check if tool is a priority AI Web Tools GPT (has media)
export const isPriorityAIWebToolsGPT = (tool: Tool): boolean => {
  return isAIWebToolsGPT(tool) && hasVideoOrImageMedia(tool);
};

// Sort tools to prioritize AI Web Tools GPTs with media first
export const sortWithAIWebToolsPriority = (tools: Tool[]): Tool[] => {
  return tools.sort((a, b) => {
    const aIsPriority = isPriorityAIWebToolsGPT(a);
    const bIsPriority = isPriorityAIWebToolsGPT(b);
    const aIsAIWebTools = isAIWebToolsGPT(a);
    const bIsAIWebTools = isAIWebToolsGPT(b);
    
    // Priority 1: AI Web Tools GPTs with media
    if (aIsPriority && !bIsPriority) return -1;
    if (!aIsPriority && bIsPriority) return 1;
    
    // Priority 2: All AI Web Tools GPTs (even without media)
    if (aIsAIWebTools && !bIsAIWebTools) return -1;
    if (!aIsAIWebTools && bIsAIWebTools) return 1;
    
    // Priority 3: Tools with media (for non-AI Web Tools)
    if (!aIsAIWebTools && !bIsAIWebTools) {
      const aHasMedia = hasVideoOrImageMedia(a);
      const bHasMedia = hasVideoOrImageMedia(b);
      if (aHasMedia && !bHasMedia) return -1;
      if (!aHasMedia && bHasMedia) return 1;
    }
    
    // Priority 4: Sort by rating (descending)
    const ratingDiff = (b.rating || 0) - (a.rating || 0);
    if (ratingDiff !== 0) return ratingDiff;
    
    // Priority 5: Sort alphabetically by title
    return a.title.localeCompare(b.title);
  });
};

// Get priority score for search results
export const getAIWebToolsPriorityScore = (tool: Tool): number => {
  let score = 0;
  
  if (isPriorityAIWebToolsGPT(tool)) {
    score += 10000; // Highest priority for AI Web Tools GPTs with media
  } else if (isAIWebToolsGPT(tool)) {
    score += 5000; // High priority for all AI Web Tools GPTs
  } else if (hasVideoOrImageMedia(tool)) {
    score += 1000; // Medium priority for tools with media
  }
  
  return score;
};

// Apply prioritization to any tool array
export const applyAIWebToolsPrioritization = (tools: Tool[]): Tool[] => {
  if (!tools || tools.length === 0) return tools;
  
  const priorityGPTs = tools.filter(isPriorityAIWebToolsGPT);
  const otherAIWebToolsGPTs = tools.filter(tool => isAIWebToolsGPT(tool) && !isPriorityAIWebToolsGPT(tool));
  const toolsWithMedia = tools.filter(tool => !isAIWebToolsGPT(tool) && hasVideoOrImageMedia(tool));
  const otherTools = tools.filter(tool => !isAIWebToolsGPT(tool) && !hasVideoOrImageMedia(tool));
  
  // Sort each group internally by rating and title
  const sortByRatingAndTitle = (toolsArray: Tool[]) => 
    toolsArray.sort((a, b) => {
      const ratingDiff = (b.rating || 0) - (a.rating || 0);
      if (ratingDiff !== 0) return ratingDiff;
      return a.title.localeCompare(b.title);
    });
  
  return [
    ...sortByRatingAndTitle([...priorityGPTs]),
    ...sortByRatingAndTitle([...otherAIWebToolsGPTs]),
    ...sortByRatingAndTitle([...toolsWithMedia]),
    ...sortByRatingAndTitle([...otherTools])
  ];
};

console.log('🚀 AI Web Tools Prioritization system loaded - GPTs with videos/images will appear first!');