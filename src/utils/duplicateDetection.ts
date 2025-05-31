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

  console.log(`🔍 COMPREHENSIVE DUPLICATE ANALYSIS STARTING...`);
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

      // Check for exact title match or very similar titles
      const currentTitle = currentTool.title.toLowerCase().trim();
      const compareTitle = compareTool.title.toLowerCase().trim();
      
      if (currentTitle === compareTitle) {
        // Exact title match - check URLs for confirmation
        const currentUrl = currentTool.directUrl?.toLowerCase() || '';
        const compareUrl = compareTool.directUrl?.toLowerCase() || '';
        
        if (currentUrl === compareUrl || 
            currentUrl.includes(compareUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')) ||
            compareUrl.includes(currentUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')) ||
            currentUrl === '' || compareUrl === '') {
          
          duplicates.push(compareTool);
          processedTools.add(compareKey);
          
          // Choose the best version (more complete description, URL, rating, etc.)
          if ((compareTool.directUrl && !bestTool.directUrl) ||
              (compareTool.description.length > bestTool.description.length) ||
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
        
        if (currentDomain === compareDomain && currentDomain !== '' && 
            !currentDomain.includes('lovable.app') && !currentDomain.includes('chatgpt.com')) {
          // Same domain, likely same service with different descriptions
          duplicates.push(compareTool);
          processedTools.add(compareKey);
          
          // Keep the one with more complete information
          if (compareTool.description.length > bestTool.description.length ||
              (compareTool.rating && !bestTool.rating)) {
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
                         bestTool.title.toLowerCase().includes('gpt');

      if (!isCustomGPT) {
        // Filter out any GPTs from duplicates as well
        const nonGPTDuplicates = duplicates.filter(dup => 
          !dup.directUrl?.includes('lovable.app') && 
          !dup.directUrl?.includes('chatgpt.com/g/') &&
          !dup.description.includes('aiwebtools') &&
          !dup.title.toLowerCase().includes('gpt')
        );

        if (nonGPTDuplicates.length > 0) {
          duplicateGroups.push({
            originalTool: bestTool,
            duplicates: nonGPTDuplicates,
            reason: nonGPTDuplicates.length > 0 ? 
              (nonGPTDuplicates[0].title.toLowerCase() === bestTool.title.toLowerCase() ? 'Identical title' : 'Same domain/service') : ''
          });

          toolsToKeep.push(bestTool);
          toolsToRemove.push(...nonGPTDuplicates);
        } else {
          toolsToKeep.push(bestTool);
        }
      } else {
        // Keep all custom GPTs
        toolsToKeep.push(bestTool);
        // Only add non-GPT duplicates to removal list
        const nonGPTDuplicates = duplicates.filter(dup => 
          !dup.directUrl?.includes('lovable.app') && 
          !dup.directUrl?.includes('chatgpt.com/g/') &&
          !dup.description.includes('aiwebtools') &&
          !dup.title.toLowerCase().includes('gpt')
        );
        toolsToRemove.push(...nonGPTDuplicates);
      }
    } else {
      toolsToKeep.push(bestTool);
    }
  }

  const totalDuplicates = toolsToRemove.length;

  console.log(`🔍 COMPREHENSIVE DUPLICATE ANALYSIS COMPLETE:`);
  console.log(`Duplicate groups found: ${duplicateGroups.length}`);
  console.log(`Total duplicates to remove: ${totalDuplicates}`);
  console.log(`Tools to keep: ${toolsToKeep.length}`);

  // Log specific duplicates found
  duplicateGroups.forEach((group, index) => {
    console.log(`\n📋 Duplicate Group ${index + 1}:`);
    console.log(`KEEP: "${group.originalTool.title}" (${group.originalTool.category})`);
    console.log(`URL: ${group.originalTool.directUrl}`);
    
    group.duplicates.forEach((duplicate, dupIndex) => {
      console.log(`  ❌ REMOVE ${dupIndex + 1}: "${duplicate.title}" (${duplicate.category})`);
      console.log(`     URL: ${duplicate.directUrl}`);
    });
    console.log(`Reason: ${group.reason}`);
  });

  return {
    duplicateGroups,
    totalDuplicates,
    toolsToKeep,
    toolsToRemove
  };
};

export const logDuplicateReport = (analysis: DuplicateAnalysis): void => {
  console.log(`\n🔍 COMPREHENSIVE DUPLICATE DETECTION REPORT:`);
  console.log(`===============================================`);
  
  if (analysis.duplicateGroups.length === 0) {
    console.log(`✅ No duplicates found! Database is clean.`);
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

// Execute the analysis and log results
const duplicateAnalysis = analyzeDuplicates();
logDuplicateReport(duplicateAnalysis);
