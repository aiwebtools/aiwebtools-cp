import { Tool } from "@/types/tools";

/**
 * Enhanced deduplication that preserves order and handles category-specific logic
 */
export const createDeduplicatedToolsList = (tools: Tool[], maxDistance: number = 8): Tool[] => {
  if (!tools || tools.length === 0) return [];
  
  const deduplicatedTools: Tool[] = [];
  const seenTitles = new Set<string>();
  const titlePositions = new Map<string, number>();
  
  console.log(`🔄 Starting deduplication for ${tools.length} tools with max distance ${maxDistance}`);
  
  for (let i = 0; i < tools.length; i++) {
    const tool = tools[i];
    const normalizedTitle = tool.title.toLowerCase().trim();
    
    // Check if we've seen this tool before
    if (seenTitles.has(normalizedTitle)) {
      const lastPosition = titlePositions.get(normalizedTitle) || 0;
      const distance = deduplicatedTools.length - lastPosition;
      
      // Only skip if it's too close (within maxDistance) and maxDistance > 0
      if (maxDistance > 0 && distance < maxDistance) {
        console.log(`⏭️ Skipping duplicate "${tool.title}" (distance: ${distance})`);
        continue;
      }
      
      console.log(`✅ Adding duplicate "${tool.title}" (distance: ${distance} >= ${maxDistance})`);
    }
    
    // Add the tool
    deduplicatedTools.push(tool);
    seenTitles.add(normalizedTitle);
    titlePositions.set(normalizedTitle, deduplicatedTools.length - 1);
  }
  
  console.log(`✨ Deduplication complete: ${tools.length} → ${deduplicatedTools.length} tools`);
  return deduplicatedTools;
};

/**
 * MUCH MORE CONSERVATIVE deduplication - only remove EXACT duplicates with same URL
 */
export const deduplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  const deduplicated: Tool[] = [];
  
  console.log(`🔍 CONSERVATIVE deduplication starting with ${tools.length} tools`);
  
  for (const tool of tools) {
    // Create a more specific key that includes URL to avoid removing different tools with same name
    const titleKey = tool.title.toLowerCase().trim();
    const urlKey = tool.directUrl?.toLowerCase().trim() || 'no-url';
    const categoryKey = tool.category?.toLowerCase().trim() || 'uncategorized';
    
    // Only consider it a duplicate if BOTH title AND URL are the same
    const duplicateKey = `${titleKey}|${urlKey}`;
    
    // NEVER remove AI Web Tools GPTs - they are unique even if titles are similar
    const isAIWebToolsGPT = tool.directUrl?.includes('lovable.app') || 
                           tool.directUrl?.includes('chatgpt.com/g/') ||
                           tool.description?.toLowerCase().includes('aiwebtools') ||
                           tool.title.toLowerCase().includes('gpt');
    
    if (isAIWebToolsGPT) {
      // Always keep AI Web Tools GPTs
      deduplicated.push(tool);
      console.log(`✅ PRESERVED AI Web Tools GPT: "${tool.title}"`);
    } else if (!seen.has(duplicateKey)) {
      seen.add(duplicateKey);
      deduplicated.push(tool);
    } else {
      console.log(`🗑️ REMOVED exact duplicate: "${tool.title}" (${tool.directUrl})`);
    }
  }
  
  console.log(`🔍 Conservative deduplication removed ${tools.length - deduplicated.length} exact duplicates`);
  console.log(`✅ Preserved ${deduplicated.length} unique tools`);
  
  return deduplicated;
};

/**
 * Shuffle array while maintaining some structure
 */
export const shuffleWithStructure = (tools: Tool[], preserveFirst: number = 0): Tool[] => {
  if (tools.length <= preserveFirst) return [...tools];
  
  const preserved = tools.slice(0, preserveFirst);
  const toShuffle = tools.slice(preserveFirst);
  
  // Fisher-Yates shuffle
  for (let i = toShuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [toShuffle[i], toShuffle[j]] = [toShuffle[j], toShuffle[i]];
  }
  
  return [...preserved, ...toShuffle];
};
