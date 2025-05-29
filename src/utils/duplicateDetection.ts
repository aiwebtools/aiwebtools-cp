import { Tool } from "@/types/tools";
import { getAllToolCategories } from '@/data/toolsCollection';

interface DuplicateAnalysis {
  duplicateGroups: DuplicateGroup[];
  totalDuplicates: number;
  toolsToKeep: Tool[];
  toolsToRemove: Tool[];
}

interface DuplicateGroup {
  originalTool: Tool;
  duplicates: Tool[];
  reason: string;
}

export const analyzeDuplicates = (): DuplicateAnalysis => {
  const allTools = getAllToolCategories();
  const duplicateGroups: DuplicateGroup[] = [];
  const processedTools = new Set<string>();
  const toolsToKeep: Tool[] = [];
  const toolsToRemove: Tool[] = [];

  console.log(`🔍 DUPLICATE ANALYSIS STARTING...`);
  console.log(`Total tools to analyze: ${allTools.length}`);

  for (let i = 0; i < allTools.length; i++) {
    const currentTool = allTools[i];
    const currentKey = `${currentTool.title.toLowerCase().trim()}|${currentTool.directUrl?.toLowerCase() || ''}`;
    
    // Skip if already processed
    if (processedTools.has(currentKey)) {
      continue;
    }

    // Find duplicates for current tool
    const duplicates: Tool[] = [];
    let bestTool = currentTool;

    for (let j = i + 1; j < allTools.length; j++) {
      const compareTool = allTools[j];
      const compareKey = `${compareTool.title.toLowerCase().trim()}|${compareTool.directUrl?.toLowerCase() || ''}`;
      
      // Skip if already processed
      if (processedTools.has(compareKey)) {
        continue;
      }

      // Check for exact title match
      if (currentTool.title.toLowerCase().trim() === compareTool.title.toLowerCase().trim()) {
        // Check if URLs are similar or one is more complete
        const currentUrl = currentTool.directUrl?.toLowerCase() || '';
        const compareUrl = compareTool.directUrl?.toLowerCase() || '';
        
        if (currentUrl === compareUrl || 
            currentUrl.includes(compareUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')) ||
            compareUrl.includes(currentUrl.replace(/^https?:\/\//, '').replace(/\/$/, ''))) {
          
          duplicates.push(compareTool);
          processedTools.add(compareKey);
          
          // Choose the best version (more complete description, rating, etc.)
          if (compareTool.description.length > bestTool.description.length ||
              (compareTool.rating && !bestTool.rating) ||
              (compareTool.tags && compareTool.tags.length > (bestTool.tags?.length || 0))) {
            // Keep the compare tool instead
            if (bestTool !== currentTool) {
              duplicates.push(bestTool);
            }
            bestTool = compareTool;
          }
        }
      }
      
      // Check for URL duplicates with different titles (same service)
      else if (currentTool.directUrl && compareTool.directUrl) {
        const currentDomain = currentTool.directUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, '').toLowerCase();
        const compareDomain = compareTool.directUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, '').toLowerCase();
        
        if (currentDomain === compareDomain && currentDomain !== '') {
          // Same domain, likely same service with different descriptions
          duplicates.push(compareTool);
          processedTools.add(compareKey);
          
          // Keep the one with more complete information
          if (compareTool.description.length > bestTool.description.length) {
            if (bestTool !== currentTool) {
              duplicates.push(bestTool);
            }
            bestTool = compareTool;
          }
        }
      }
    }

    // Mark current tool as processed
    processedTools.add(currentKey);

    if (duplicates.length > 0) {
      // Don't touch any GPTs or custom tools
      const isCustomGPT = bestTool.directUrl?.includes('lovable.app') || 
                         bestTool.directUrl?.includes('chatgpt.com/g/') ||
                         bestTool.description.includes('aiwebtools') ||
                         bestTool.title.includes('GPT');

      if (!isCustomGPT) {
        duplicateGroups.push({
          originalTool: bestTool,
          duplicates: duplicates,
          reason: duplicates.length > 0 ? 
            (duplicates[0].title === bestTool.title ? 'Identical title and URL/domain' : 'Same domain/service') : ''
        });

        toolsToKeep.push(bestTool);
        toolsToRemove.push(...duplicates);
      } else {
        // Keep all custom GPTs
        toolsToKeep.push(bestTool);
        toolsToKeep.push(...duplicates);
      }
    } else {
      toolsToKeep.push(bestTool);
    }
  }

  const totalDuplicates = toolsToRemove.length;

  console.log(`🔍 DUPLICATE ANALYSIS COMPLETE:`);
  console.log(`Duplicate groups found: ${duplicateGroups.length}`);
  console.log(`Total duplicates to remove: ${totalDuplicates}`);
  console.log(`Tools to keep: ${toolsToKeep.length}`);

  return {
    duplicateGroups,
    totalDuplicates,
    toolsToKeep,
    toolsToRemove
  };
};

export const logDuplicateReport = (analysis: DuplicateAnalysis): void => {
  console.log(`\n🔍 DUPLICATE DETECTION REPORT:`);
  console.log(`===============================`);
  
  if (analysis.duplicateGroups.length === 0) {
    console.log(`✅ No duplicates found!`);
    return;
  }

  analysis.duplicateGroups.forEach((group, index) => {
    console.log(`\n📋 Duplicate Group ${index + 1}:`);
    console.log(`KEEP: "${group.originalTool.title}" (${group.originalTool.category})`);
    console.log(`URL: ${group.originalTool.directUrl}`);
    console.log(`Reason to keep: Most complete description/information`);
    
    group.duplicates.forEach((duplicate, dupIndex) => {
      console.log(`  ❌ REMOVE ${dupIndex + 1}: "${duplicate.title}" (${duplicate.category})`);
      console.log(`     URL: ${duplicate.directUrl}`);
    });
    console.log(`Reason: ${group.reason}`);
  });

  console.log(`\n📊 SUMMARY:`);
  console.log(`Total duplicate groups: ${analysis.duplicateGroups.length}`);
  console.log(`Total tools to remove: ${analysis.totalDuplicates}`);
  console.log(`Remaining unique tools: ${analysis.toolsToKeep.length}`);
};
