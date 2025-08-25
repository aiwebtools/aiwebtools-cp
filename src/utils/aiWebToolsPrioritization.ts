import { Tool } from "@/types/tools";
import { sortGPTsByPowerRanking } from "./gptPowerRanking";

/**
 * Utility functions to prioritize AI Web Tools GPTs with videos/images
 * These tools should appear first in all categories and sections
 * Now enhanced with power ranking system
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

// Sort tools to prioritize AI Web Tools GPTs with media first, using power rankings
export const sortWithAIWebToolsPriority = (tools: Tool[]): Tool[] => {
  return tools.sort((a, b) => {
    const aIsPriority = isPriorityAIWebToolsGPT(a);
    const bIsPriority = isPriorityAIWebToolsGPT(b);
    const aIsAIWebTools = isAIWebToolsGPT(a);
    const bIsAIWebTools = isAIWebToolsGPT(b);
    
    // Priority 1: AI Web Tools GPTs with media (sorted by power ranking)
    if (aIsPriority && !bIsPriority) return -1;
    if (!aIsPriority && bIsPriority) return 1;
    if (aIsPriority && bIsPriority) {
      // Both have media, sort by power ranking
      return sortGPTsByPowerRanking([a, b]).indexOf(a) - sortGPTsByPowerRanking([a, b]).indexOf(b);
    }
    
    // Priority 2: All AI Web Tools GPTs (sorted by power ranking)
    if (aIsAIWebTools && !bIsAIWebTools) return -1;
    if (!aIsAIWebTools && bIsAIWebTools) return 1;
    if (aIsAIWebTools && bIsAIWebTools) {
      // Both are AI Web Tools, sort by power ranking
      return sortGPTsByPowerRanking([a, b]).indexOf(a) - sortGPTsByPowerRanking([a, b]).indexOf(b);
    }
    
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

// Get priority score for search results (enhanced with power ranking)
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

// Apply prioritization to any tool array (enhanced with power ranking)
export const applyAIWebToolsPrioritization = (tools: Tool[]): Tool[] => {
  if (!tools || tools.length === 0) return tools;
  
  const priorityGPTs = tools.filter(isPriorityAIWebToolsGPT);
  const otherAIWebToolsGPTs = tools.filter(tool => isAIWebToolsGPT(tool) && !isPriorityAIWebToolsGPT(tool));
  const toolsWithMedia = tools.filter(tool => !isAIWebToolsGPT(tool) && hasVideoOrImageMedia(tool));
  const otherTools = tools.filter(tool => !isAIWebToolsGPT(tool) && !hasVideoOrImageMedia(tool));
  
  // Sort each AI Web Tools group by power ranking
  const sortAIWebToolsByPowerAndRating = (toolsArray: Tool[]) => {
    return sortGPTsByPowerRanking([...toolsArray]);
  };
  
  // Sort non-AI Web Tools by rating and title only
  const sortByRatingAndTitle = (toolsArray: Tool[]) => 
    toolsArray.sort((a, b) => {
      const ratingDiff = (b.rating || 0) - (a.rating || 0);
      if (ratingDiff !== 0) return ratingDiff;
      return a.title.localeCompare(b.title);
    });
  
  return [
    ...sortAIWebToolsByPowerAndRating(priorityGPTs),      // Legendary GPTs with media first
    ...sortAIWebToolsByPowerAndRating(otherAIWebToolsGPTs), // All other GPTs by power ranking
    ...sortByRatingAndTitle([...toolsWithMedia]),         // Third-party tools with media
    ...sortByRatingAndTitle([...otherTools])              // Everything else
  ];
};

console.log('🚀 AI Web Tools Prioritization system loaded - Legendary GPTs will dominate the featured section!');