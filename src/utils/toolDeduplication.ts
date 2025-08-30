
import { Tool } from "@/types/tools";

/**
 * ULTRA CONSERVATIVE deduplication - only remove EXACT duplicates with same title AND URL
 */
export const deduplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  const deduplicated: Tool[] = [];
  const removedTools: Tool[] = [];
  
  console.log(`🔍 ULTRA CONSERVATIVE DEDUPLICATION STARTING: ${tools.length} tools`);
  
  for (const tool of tools) {
    // Create a unique key based on BOTH title AND URL to be ultra conservative
    const titleKey = tool.title.toLowerCase().trim();
    const urlKey = tool.directUrl?.toLowerCase().trim() || `no-url-${Math.random()}`;
    const key = `${titleKey}|||${urlKey}`;
    
    if (!seen.has(key)) {
      seen.add(key);
      deduplicated.push(tool);
    } else {
      removedTools.push(tool);
      console.log(`🗑️ Removing EXACT duplicate: "${tool.title}" (${tool.category}) - ${tool.directUrl}`);
    }
  }
  
  console.log(`🎯 ULTRA CONSERVATIVE DEDUPLICATION RESULTS:`);
  console.log(`   Input tools: ${tools.length}`);
  console.log(`   Output tools: ${deduplicated.length}`);
  console.log(`   Removed duplicates: ${removedTools.length}`);
  
  if (removedTools.length > 0) {
    console.log(`🔍 REMOVED TOOLS DETAILS:`);
    removedTools.forEach((tool, index) => {
      console.log(`   ${index + 1}. "${tool.title}" (${tool.category}) - ${tool.directUrl}`);
    });
  }
  
  // Verify our newly added tools are still there
  const teamAI = deduplicated.find(t => t.title.includes('TeamAI'));
  const orchard = deduplicated.find(t => t.title.includes('Orchard'));
  const bitAI = deduplicated.find(t => t.title.includes('Bit.ai'));
  
  console.log(`✅ NEWLY ADDED TOOLS VERIFICATION AFTER ULTRA CONSERVATIVE DEDUPLICATION:`);
  console.log(`   TeamAI preserved: ${!!teamAI} ${teamAI ? `(${teamAI.category})` : ''}`);
  console.log(`   Orchard.ink preserved: ${!!orchard} ${orchard ? `(${orchard.category})` : ''}`);
  console.log(`   Bit.ai preserved: ${!!bitAI} ${bitAI ? `(${bitAI.category})` : ''}`);
  
  return deduplicated;
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
