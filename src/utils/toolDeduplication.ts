
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
 * CONSERVATIVE deduplication - only remove EXACT duplicates
 */
export const deduplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  const deduplicated: Tool[] = [];
  const removedTools: Tool[] = [];
  
  console.log(`🔍 CONSERVATIVE DEDUPLICATION STARTING: ${tools.length} tools`);
  
  for (const tool of tools) {
    // Create a unique key based on title AND URL to be more conservative
    const titleKey = tool.title.toLowerCase().trim();
    const urlKey = tool.directUrl?.toLowerCase().trim() || 'no-url';
    const key = `${titleKey}|||${urlKey}`;
    
    if (!seen.has(key)) {
      seen.add(key);
      deduplicated.push(tool);
    } else {
      removedTools.push(tool);
      console.log(`🗑️ Removing exact duplicate: "${tool.title}" (${tool.category})`);
    }
  }
  
  console.log(`🗑️ DEDUPLICATION RESULTS:`);
  console.log(`   Input tools: ${tools.length}`);
  console.log(`   Output tools: ${deduplicated.length}`);
  console.log(`   Removed duplicates: ${removedTools.length}`);
  
  if (removedTools.length > 0) {
    console.log(`🔍 REMOVED TOOLS DETAILS:`);
    removedTools.forEach((tool, index) => {
      console.log(`   ${index + 1}. "${tool.title}" (${tool.category}) - ${tool.directUrl}`);
    });
  }
  
  // Check specifically for our newly added tools
  const teamAI = deduplicated.find(t => t.title.includes('TeamAI'));
  const orchard = deduplicated.find(t => t.title.includes('Orchard'));
  const bitAI = deduplicated.find(t => t.title.includes('Bit.ai'));
  
  console.log(`✅ NEWLY ADDED TOOLS VERIFICATION AFTER DEDUPLICATION:`);
  console.log(`   TeamAI preserved: ${!!teamAI}`);
  console.log(`   Orchard.ink preserved: ${!!orchard}`);
  console.log(`   Bit.ai preserved: ${!!bitAI}`);
  
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
