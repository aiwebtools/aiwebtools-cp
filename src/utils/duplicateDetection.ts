import { Tool } from "@/types/tools";
import { getAllToolCategories } from '@/data/toolsCollection';

interface DuplicateAnalysis {
  duplicateGroups: DuplicateGroup[];
  totalDuplicates: number;
  toolsToKeep: Tool[];
  toolsToRemove: Tool[];
  lostTools: Tool[];
  preservedTools: Tool[];
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
  const lostTools: Tool[] = [];
  const preservedTools: Tool[] = [];

  console.log(`🔍 COMPREHENSIVE DUPLICATE ANALYSIS STARTING...`);
  console.log(`Total tools to analyze: ${allTools.length}`);

  // Enhanced tracking for new tools
  const newToolTitles = ['CHATRON', 'SocialMedia Sonic', 'SEO CHECKER', 'CHATIQ', 'ChainDesk'];
  const foundNewTools: Tool[] = [];

  for (let i = 0; i < allTools.length; i++) {
    const currentTool = allTools[i];
    const currentKey = `${currentTool.title.toLowerCase().trim()}|${currentTool.directUrl?.toLowerCase() || ''}`;
    
    // Track new tools
    if (newToolTitles.some(title => currentTool.title.toLowerCase().includes(title.toLowerCase()))) {
      foundNewTools.push(currentTool);
      console.log(`✅ Found new tool: ${currentTool.title} in category: ${currentTool.category}`);
    }
    
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
      // NEVER remove any AIWebTools GPTs or new tools
      const isProtectedTool = bestTool.directUrl?.includes('lovable.app') || 
                             bestTool.directUrl?.includes('chatgpt.com/g/') ||
                             bestTool.description.toLowerCase().includes('aiwebtools') ||
                             bestTool.title.toLowerCase().includes('gpt') ||
                             newToolTitles.some(title => bestTool.title.toLowerCase().includes(title.toLowerCase()));

      if (!isProtectedTool) {
        // Filter out any protected tools from duplicates as well
        const nonProtectedDuplicates = duplicates.filter(dup => 
          !dup.directUrl?.includes('lovable.app') && 
          !dup.directUrl?.includes('chatgpt.com/g/') &&
          !dup.description.toLowerCase().includes('aiwebtools') &&
          !dup.title.toLowerCase().includes('gpt') &&
          !newToolTitles.some(title => dup.title.toLowerCase().includes(title.toLowerCase()))
        );

        if (nonProtectedDuplicates.length > 0) {
          duplicateGroups.push({
            originalTool: bestTool,
            duplicates: nonProtectedDuplicates,
            reason: nonProtectedDuplicates.length > 0 ? 
              (nonProtectedDuplicates[0].title.toLowerCase() === bestTool.title.toLowerCase() ? 'Identical title' : 'Same domain/service') : ''
          });

          toolsToKeep.push(bestTool);
          preservedTools.push(bestTool);
          toolsToRemove.push(...nonProtectedDuplicates);
          lostTools.push(...nonProtectedDuplicates);
        } else {
          toolsToKeep.push(bestTool);
          preservedTools.push(bestTool);
        }
      } else {
        // Keep all protected tools
        toolsToKeep.push(bestTool);
        preservedTools.push(bestTool);
        // Only add non-protected duplicates to removal list
        const nonProtectedDuplicates = duplicates.filter(dup => 
          !dup.directUrl?.includes('lovable.app') && 
          !dup.directUrl?.includes('chatgpt.com/g/') &&
          !dup.description.toLowerCase().includes('aiwebtools') &&
          !dup.title.toLowerCase().includes('gpt') &&
          !newToolTitles.some(title => dup.title.toLowerCase().includes(title.toLowerCase()))
        );
        if (nonProtectedDuplicates.length > 0) {
          toolsToRemove.push(...nonProtectedDuplicates);
          lostTools.push(...nonProtectedDuplicates);
        }
        // Keep any protected duplicates too
        const protectedDuplicates = duplicates.filter(dup => 
          dup.directUrl?.includes('lovable.app') || 
          dup.directUrl?.includes('chatgpt.com/g/') ||
          dup.description.toLowerCase().includes('aiwebtools') ||
          dup.title.toLowerCase().includes('gpt') ||
          newToolTitles.some(title => dup.title.toLowerCase().includes(title.toLowerCase()))
        );
        toolsToKeep.push(...protectedDuplicates);
        preservedTools.push(...protectedDuplicates);
      }
    } else {
      toolsToKeep.push(bestTool);
      preservedTools.push(bestTool);
    }
  }

  const totalDuplicates = toolsToRemove.length;

  console.log(`🔍 COMPREHENSIVE DUPLICATE ANALYSIS COMPLETE:`);
  console.log(`Original tool count: ${allTools.length}`);
  console.log(`Duplicate groups found: ${duplicateGroups.length}`);
  console.log(`Total duplicates to remove: ${totalDuplicates}`);
  console.log(`Tools to keep: ${toolsToKeep.length}`);
  console.log(`Tools lost in deduplication: ${lostTools.length}`);
  console.log(`New tools found: ${foundNewTools.length}`);

  // Verify new tools are preserved
  console.log(`🔍 NEW TOOLS VERIFICATION:`);
  foundNewTools.forEach(tool => {
    const isKept = toolsToKeep.some(kept => kept.title === tool.title);
    console.log(`${isKept ? '✅' : '❌'} ${tool.title} - ${isKept ? 'PRESERVED' : 'LOST'}`);
  });

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
    toolsToRemove,
    lostTools,
    preservedTools
  };
};

export const logDuplicateReport = (analysis: DuplicateAnalysis): void => {
  console.log(`\n🔍 COMPREHENSIVE DUPLICATE DETECTION REPORT:`);
  console.log(`===============================================`);
  
  if (analysis.duplicateGroups.length === 0) {
    console.log(`✅ No duplicates found! Database is clean.`);
    return;
  }

  console.log(`📊 SUMMARY:`);
  console.log(`Total duplicate groups: ${analysis.duplicateGroups.length}`);
  console.log(`Total tools to remove: ${analysis.totalDuplicates}`);
  console.log(`Remaining unique tools: ${analysis.toolsToKeep.length}`);
  console.log(`Tools lost: ${analysis.lostTools.length}`);
  console.log(`Tools preserved: ${analysis.preservedTools.length}`);

  // Show what was lost
  if (analysis.lostTools.length > 0) {
    console.log(`\n❌ TOOLS LOST IN DEDUPLICATION:`);
    analysis.lostTools.forEach((tool, index) => {
      console.log(`${index + 1}. "${tool.title}" (${tool.category}) - ${tool.directUrl}`);
    });
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
};

// Execute the analysis and log results
const duplicateAnalysis = analyzeDuplicates();
logDuplicateReport(duplicateAnalysis);
