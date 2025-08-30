
import { Tool } from "@/types/tools";

/**
 * Normalize a tool title for comparison by removing common variations
 */
const normalizeTitle = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    // Remove common suffixes and prefixes
    .replace(/\s*(ai|gpt|pro|premium|plus|studio|suite|platform|app|tool|generator|maker|creator|assistant|helper|bot|agent)s?\s*$/gi, '')
    // Remove version numbers and common indicators
    .replace(/\s*(v?\d+\.?\d*|gen-?\d+|version\s*\d+)\s*/gi, '')
    // Remove punctuation and normalize spacing
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Normalize a URL for comparison by extracting the core domain
 */
const normalizeUrl = (url: string): string => {
  if (!url) return '';
  try {
    const urlObj = new URL(url);
    // Extract just the domain and main path, ignore query parameters
    return `${urlObj.hostname}${urlObj.pathname}`.toLowerCase().replace(/\/+$/, '');
  } catch {
    return url.toLowerCase();
  }
};

/**
 * Check if two tools are similar enough to be considered duplicates
 */
const areSimilarTools = (tool1: Tool, tool2: Tool): boolean => {
  // Exact title and URL match
  const exactMatch = tool1.title.toLowerCase().trim() === tool2.title.toLowerCase().trim() &&
                    (tool1.directUrl?.toLowerCase().trim() || '') === (tool2.directUrl?.toLowerCase().trim() || '');
  
  if (exactMatch) return true;
  
  // Special case: Preserve Perplexity Comet as separate from Perplexity AI
  const isPerplexityComet1 = tool1.title.toLowerCase().includes('comet');
  const isPerplexityComet2 = tool2.title.toLowerCase().includes('comet');
  const isPerplexityAI1 = tool1.title.toLowerCase().includes('perplexity') && !isPerplexityComet1;
  const isPerplexityAI2 = tool2.title.toLowerCase().includes('perplexity') && !isPerplexityComet2;
  
  // Keep Perplexity AI and Perplexity Comet separate
  if ((isPerplexityComet1 && isPerplexityAI2) || (isPerplexityAI1 && isPerplexityComet2)) {
    return false;
  }
  
  // Normalize titles and URLs for comparison
  const normalizedTitle1 = normalizeTitle(tool1.title);
  const normalizedTitle2 = normalizeTitle(tool2.title);
  const normalizedUrl1 = normalizeUrl(tool1.directUrl || '');
  const normalizedUrl2 = normalizeUrl(tool2.directUrl || '');
  
  // Consider similar if normalized titles match and URLs are similar
  const titleMatch = normalizedTitle1 === normalizedTitle2;
  const urlMatch = normalizedUrl1 === normalizedUrl2;
  
  return titleMatch && urlMatch;
};

/**
 * ENHANCED INTELLIGENT deduplication - removes exact duplicates and obvious variations
 */
export const deduplicateTools = (tools: Tool[]): Tool[] => {
  const uniqueTools: Tool[] = [];
  const removedTools: Tool[] = [];
  
  console.log(`🔍 ENHANCED INTELLIGENT DEDUPLICATION STARTING: ${tools.length} tools`);
  
  for (const tool of tools) {
    // Check if this tool is similar to any existing tool
    const existingTool = uniqueTools.find(existing => areSimilarTools(tool, existing));
    
    if (!existingTool) {
      // New unique tool
      uniqueTools.push(tool);
    } else {
      // Similar tool found - choose the better version
      removedTools.push(tool);
      console.log(`🗑️ Removing duplicate: "${tool.title}" (${tool.category}) - similar to "${existingTool.title}"`);
      
      // If the new tool has a better URL (with affiliate), replace the existing one
      if (tool.directUrl?.includes('via=aiwebtools') && !existingTool.directUrl?.includes('via=aiwebtools')) {
        console.log(`🔄 Upgrading to affiliate URL: "${tool.title}"`);
        const existingIndex = uniqueTools.findIndex(t => t === existingTool);
        uniqueTools[existingIndex] = tool;
        // Remove the new tool from removedTools and add the existing one
        removedTools.pop();
        removedTools.push(existingTool);
      }
    }
  }
  
  console.log(`🎯 ENHANCED INTELLIGENT DEDUPLICATION RESULTS:`);
  console.log(`   Input tools: ${tools.length}`);
  console.log(`   Output tools: ${uniqueTools.length}`);
  console.log(`   Removed duplicates: ${removedTools.length}`);
  
  if (removedTools.length > 0) {
    console.log(`🔍 REMOVED DUPLICATE TOOLS:`);
    removedTools.slice(0, 20).forEach((tool, index) => {
      console.log(`   ${index + 1}. "${tool.title}" (${tool.category})`);
    });
    if (removedTools.length > 20) {
      console.log(`   ... and ${removedTools.length - 20} more duplicates`);
    }
  }
  
  // Verify both Perplexity tools are preserved
  const perplexityAI = uniqueTools.find(t => t.title.toLowerCase().includes('perplexity') && !t.title.toLowerCase().includes('comet'));
  const perplexityComet = uniqueTools.find(t => t.title.toLowerCase().includes('perplexity') && t.title.toLowerCase().includes('comet'));
  
  console.log(`✅ PERPLEXITY TOOLS VERIFICATION:`);
  console.log(`   Perplexity AI preserved: ${!!perplexityAI} ${perplexityAI ? `"${perplexityAI.title}"` : ''}`);
  console.log(`   Perplexity Comet preserved: ${!!perplexityComet} ${perplexityComet ? `"${perplexityComet.title}"` : ''}`);
  
  return uniqueTools;
};

/**
 * DISABLED - No distance-based deduplication to preserve all tools
 */
export const createDeduplicatedToolsList = (tools: Tool[], maxDistance: number = 0): Tool[] => {
  console.log(`🚫 DISTANCE-BASED DEDUPLICATION DISABLED to preserve all tools`);
  return deduplicateTools(tools); // Just use the conservative deduplication
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
