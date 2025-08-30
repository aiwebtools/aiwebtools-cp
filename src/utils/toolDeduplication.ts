
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
 * ENHANCED INTELLIGENT deduplication - removes exact duplicates and obvious variations
 */
export const deduplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Map<string, Tool>();
  const removedTools: Tool[] = [];
  
  console.log(`🔍 ENHANCED INTELLIGENT DEDUPLICATION STARTING: ${tools.length} tools`);
  
  for (const tool of tools) {
    // First check for exact duplicates (title + URL)
    const exactKey = `${tool.title.toLowerCase().trim()}|||${tool.directUrl?.toLowerCase().trim() || 'no-url'}`;
    
    // Then check for normalized duplicates (similar titles or same domain)
    const normalizedTitle = normalizeTitle(tool.title);
    const normalizedUrl = normalizeUrl(tool.directUrl || '');
    const normalizedKey = `${normalizedTitle}|||${normalizedUrl}`;
    
    // Check if we've seen either the exact or normalized version
    const existingTool = seen.get(exactKey) || seen.get(normalizedKey);
    
    if (!existingTool) {
      // New tool - add both keys to prevent future duplicates
      seen.set(exactKey, tool);
      seen.set(normalizedKey, tool);
    } else {
      // Duplicate found - keep the better version
      removedTools.push(tool);
      console.log(`🗑️ Removing duplicate: "${tool.title}" (${tool.category}) - similar to "${existingTool.title}"`);
      
      // If the new tool has a better URL (with affiliate), replace the existing one
      if (tool.directUrl?.includes('via=aiwebtools') && !existingTool.directUrl?.includes('via=aiwebtools')) {
        console.log(`🔄 Upgrading to affiliate URL: "${tool.title}"`);
        seen.set(exactKey, tool);
        seen.set(normalizedKey, tool);
        // Remove the old tool from removedTools and add the existing one
        removedTools.pop();
        removedTools.push(existingTool);
      }
    }
  }
  
  // Get all unique tools
  const uniqueTools = Array.from(new Set(seen.values()));
  
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
  
  // Verify our newly added tools are still there
  const teamAI = uniqueTools.find(t => t.title.includes('TeamAI'));
  const orchard = uniqueTools.find(t => t.title.includes('Orchard'));
  const bitAI = uniqueTools.find(t => t.title.includes('Bit.ai'));
  
  console.log(`✅ NEWLY ADDED TOOLS VERIFICATION AFTER DEDUPLICATION:`);
  console.log(`   TeamAI preserved: ${!!teamAI} ${teamAI ? `(${teamAI.category})` : ''}`);
  console.log(`   Orchard.ink preserved: ${!!orchard} ${orchard ? `(${orchard.category})` : ''}`);
  console.log(`   Bit.ai preserved: ${!!bitAI} ${bitAI ? `(${bitAI.category})` : ''}`);
  
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
