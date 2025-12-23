
import { Tool } from "@/types/tools";

/**
 * ULTRA CONSERVATIVE deduplication - only remove EXACT duplicates with same title AND URL
 * Optimized for performance - no console logging during processing
 */
export const deduplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  const deduplicated: Tool[] = [];
  
  for (const tool of tools) {
    const titleKey = tool.title.toLowerCase().trim();
    const urlKey = tool.directUrl?.toLowerCase().trim() || `no-url-${Math.random()}`;
    const key = `${titleKey}|||${urlKey}`;
    
    if (!seen.has(key)) {
      seen.add(key);
      deduplicated.push(tool);
    }
  }
  
  return deduplicated;
};

/**
 * DISABLED - No distance-based deduplication to preserve all tools
 */
export const createDeduplicatedToolsList = (tools: Tool[], maxDistance: number = 0): Tool[] => {
  return deduplicateTools(tools);
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
