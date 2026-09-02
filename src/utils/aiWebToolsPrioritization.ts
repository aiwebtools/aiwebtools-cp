import { Tool } from "@/types/tools";
import { sortGPTsByPowerRanking } from "./gptPowerRanking";

/**
 * Utility functions to prioritize AI Web Tools GPTs with videos/images
 * These tools should appear first in all categories and sections
 * Now enhanced with power ranking system
 */

// Check if tool is an AI Web Tools GPT, Custom GPT, or Custom Gemini Gem
export const isAIWebToolsGPT = (tool: Tool): boolean => {
  // Check for Custom GPT tag (the primary identifier after tagging initiative)
  const hasCustomGPTTag = tool.tags?.some(tag => 
    tag.toLowerCase() === 'custom gpt' || 
    tag.toLowerCase().includes('custom gpt')
  );
  
  // Check for Gemini Gem indicators
  const hasGeminiGemTag = tool.tags?.some(tag => 
    tag.toLowerCase().includes('gemini gem') || 
    tag.toLowerCase().includes('custom gem')
  );
  const isGeminiGemUrl = tool.directUrl?.includes('gemini.google.com/gem/');
  const isGeminiGemCategory = tool.category?.toLowerCase().includes('gemini gem');
  
  // Check for AIWebTools indicators. IMPORTANT: strip the query string first —
  // every third-party link carries our `?via=aiwebtools` affiliate parameter and
  // would otherwise be misread as one of our own properties.
  const baseUrl = (tool.directUrl || '').split('?')[0].toLowerCase();
  const hasAIWebToolsUrl = baseUrl.includes('lovable.app') || baseUrl.includes('aiwebtools');
  const hasAIWebToolsDescription = tool.description?.toLowerCase().includes('aiwebtools');
  const hasAIWebToolsTag = tool.tags?.some(tag => tag.toLowerCase().includes('aiwebtools'));
  
  // Check for ChatGPT.com GPT URLs (custom GPTs hosted on OpenAI)
  const isChatGPTCustomGPT = tool.directUrl?.includes('chatgpt.com/g/g-');
  
  return hasCustomGPTTag || hasGeminiGemTag || isGeminiGemUrl || isGeminiGemCategory || 
         hasAIWebToolsUrl || hasAIWebToolsDescription || hasAIWebToolsTag || isChatGPTCustomGPT;
};

// Check if tool has video or image media
export const hasVideoOrImageMedia = (tool: Tool): boolean => {
  const hasVideo = tool.videoUrl && tool.videoUrl.trim() !== '';
  const hasImage = tool.imageUrl && tool.imageUrl.trim() !== '';
  return hasVideo || hasImage;
};

// Check if tool is Soul Map GPT (ultimate priority)
export const isSoulMapGPT = (tool: Tool): boolean => {
  return tool.title.toLowerCase().includes('soul map') || 
         tool.title.toLowerCase().includes('soul scan');
};

// Check if tool is a priority AI Web Tools GPT (has media)
export const isPriorityAIWebToolsGPT = (tool: Tool): boolean => {
  return isAIWebToolsGPT(tool) && hasVideoOrImageMedia(tool);
};

// Sort tools to prioritize Soul Map GPT first, then AI Web Tools GPTs with media, using power rankings
export const sortWithAIWebToolsPriority = (tools: Tool[]): Tool[] => {
  return tools.sort((a, b) => {
    const aIsSoulMap = isSoulMapGPT(a);
    const bIsSoulMap = isSoulMapGPT(b);
    const aIsPriority = isPriorityAIWebToolsGPT(a);
    const bIsPriority = isPriorityAIWebToolsGPT(b);
    const aIsAIWebTools = isAIWebToolsGPT(a);
    const bIsAIWebTools = isAIWebToolsGPT(b);
    
    // Priority 0: Soul Map GPT always first
    if (aIsSoulMap && !bIsSoulMap) return -1;
    if (!aIsSoulMap && bIsSoulMap) return 1;
    
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

// Get priority score for search results (enhanced with relevance checking)
export const getAIWebToolsPriorityScore = (tool: Tool, searchTerm?: string): number => {
  let score = 0;
  
  // If no search term, apply normal prioritization
  if (!searchTerm) {
    if (isSoulMapGPT(tool)) {
      score += 50000; // Ultimate priority for Soul Map GPT
    } else if (isPriorityAIWebToolsGPT(tool)) {
      score += 10000; // Highest priority for AI Web Tools GPTs with media
    } else if (isAIWebToolsGPT(tool)) {
      score += 5000; // High priority for all AI Web Tools GPTs
    } else if (hasVideoOrImageMedia(tool)) {
      score += 1000; // Medium priority for tools with media
    }
    return score;
  }
  
  // Check if the tool is actually relevant to the search term
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  // Check for relevance - tool should contain search term or related keywords
  const isRelevant = 
    lowerTitle.includes(lowerSearchTerm) ||
    lowerDescription.includes(lowerSearchTerm) ||
    lowerCategory.includes(lowerSearchTerm) ||
    lowerTags.some(tag => tag.includes(lowerSearchTerm)) ||
    // Check for related keywords
    (lowerSearchTerm.includes('video') && (
      lowerTitle.includes('video') || lowerTitle.includes('movie') || lowerTitle.includes('film') ||
      lowerDescription.includes('video') || lowerDescription.includes('movie') || lowerDescription.includes('film')
    )) ||
    (lowerSearchTerm.includes('learn') && (
      lowerTitle.includes('learn') || lowerTitle.includes('course') || lowerTitle.includes('education') ||
      lowerDescription.includes('learn') || lowerDescription.includes('course') || lowerDescription.includes('education')
    )) ||
    (lowerSearchTerm.includes('health') && (
      lowerTitle.includes('health') || lowerTitle.includes('medical') || lowerTitle.includes('doctor') ||
      lowerDescription.includes('health') || lowerDescription.includes('medical') || lowerDescription.includes('doctor')
    ));
  
  // Only give priority if the tool is relevant to the search
  if (isRelevant) {
    if (isSoulMapGPT(tool)) {
      score += 50000; // Ultimate priority for Soul Map GPT
    } else if (isPriorityAIWebToolsGPT(tool)) {
      score += 10000; // Highest priority for AI Web Tools GPTs with media
    } else if (isAIWebToolsGPT(tool)) {
      score += 5000; // High priority for all AI Web Tools GPTs
    }
  }
  
  // Always give some boost for media content
  if (hasVideoOrImageMedia(tool)) {
    score += 1000; // Medium priority for tools with media
  }
  
  return score;
};

// Apply prioritization to any tool array (enhanced with power ranking)
export const applyAIWebToolsPrioritization = (tools: Tool[]): Tool[] => {
  if (!tools || tools.length === 0) return tools;
  
  console.log(`🔧 PRIORITIZATION: Processing ${tools.length} tools`);
  
  const soulMapGPTs = tools.filter(isSoulMapGPT);
  const priorityGPTs = tools.filter(tool => isPriorityAIWebToolsGPT(tool) && !isSoulMapGPT(tool));
  const otherAIWebToolsGPTs = tools.filter(tool => isAIWebToolsGPT(tool) && !isPriorityAIWebToolsGPT(tool) && !isSoulMapGPT(tool));
  const toolsWithMedia = tools.filter(tool => !isAIWebToolsGPT(tool) && hasVideoOrImageMedia(tool));
  const otherTools = tools.filter(tool => !isAIWebToolsGPT(tool) && !hasVideoOrImageMedia(tool));
  
  console.log(`🔮 Soul Map GPTs: ${soulMapGPTs.length}`);
  console.log(`🎬 Priority GPTs (with media): ${priorityGPTs.length}`);
  console.log(`🚀 Other AI Web Tools GPTs: ${otherAIWebToolsGPTs.length}`);
  console.log(`📺 Third-party tools with media: ${toolsWithMedia.length}`);
  console.log(`📝 Other tools: ${otherTools.length}`);
  
  // Log some examples of priority GPTs with media
  if (priorityGPTs.length > 0) {
    console.log(`🎥 TOP PRIORITY GPTs with videos/images:`, 
      priorityGPTs.slice(0, 10).map(t => `${t.title} (${t.videoUrl ? 'VIDEO' : ''}${t.imageUrl ? ' IMAGE' : ''})`));
  }
  
  // Sort each AI Web Tools group - videos/images first within power tiers
  const sortAIWebToolsByMediaAndPower = (toolsArray: Tool[]) => {
    return toolsArray.sort((a, b) => {
      // First priority: tools with videos/images
      const aHasMedia = hasVideoOrImageMedia(a);
      const bHasMedia = hasVideoOrImageMedia(b);
      
      if (aHasMedia && !bHasMedia) return -1;
      if (!aHasMedia && bHasMedia) return 1;
      
      // Within same media status, sort by power ranking
      return sortGPTsByPowerRanking([a, b]).indexOf(a) - sortGPTsByPowerRanking([a, b]).indexOf(b);
    });
  };
  
  // Sort non-AI Web Tools by rating and title only
  const sortByRatingAndTitle = (toolsArray: Tool[]) => 
    toolsArray.sort((a, b) => {
      const ratingDiff = (b.rating || 0) - (a.rating || 0);
      if (ratingDiff !== 0) return ratingDiff;
      return a.title.localeCompare(b.title);
    });
  
  const finalResult = [
    ...sortAIWebToolsByMediaAndPower(soulMapGPTs),         // Soul Map GPT always first!
    ...sortAIWebToolsByMediaAndPower(priorityGPTs),        // AI Web Tools with media (videos/images first)
    ...sortAIWebToolsByMediaAndPower(otherAIWebToolsGPTs), // All other AI Web Tools (videos/images first)
    ...sortByRatingAndTitle([...toolsWithMedia]),          // Third-party tools with media
    ...sortByRatingAndTitle([...otherTools])               // Everything else
  ];
  
  console.log(`✅ FINAL ORDER - Top 10:`, finalResult.slice(0, 10).map(t => 
    `${t.title} (${t.videoUrl ? 'VIDEO' : ''}${t.imageUrl ? ' IMAGE' : ''})`));
  
  return finalResult;
};

console.log('🔮 Soul Map GPT will reign supreme! AI Web Tools Prioritization system loaded - Soul Map GPT always first!');