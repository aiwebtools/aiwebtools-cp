
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
 * Remove exact duplicates from a list of tools
 */
export const deduplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  const deduplicated: Tool[] = [];
  
  for (const tool of tools) {
    const key = `${tool.title.toLowerCase().trim()}-${tool.category?.toLowerCase().trim() || 'uncategorized'}`;
    
    if (!seen.has(key)) {
      seen.add(key);
      deduplicated.push(tool);
    }
  }
  
  console.log(`🗑️ Removed ${tools.length - deduplicated.length} exact duplicates`);
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
