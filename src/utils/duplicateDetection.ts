
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
      
      // Enhanced duplicate detection for all categories
      if (currentTitle === compareTitle || 
          isSimilarTool(currentTool, compareTool)) {
        
        const currentUrl = currentTool.directUrl?.toLowerCase() || '';
        const compareUrl = compareTool.directUrl?.toLowerCase() || '';
        
        if (currentUrl === compareUrl || 
            currentUrl.includes(compareUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')) ||
            compareUrl.includes(currentUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')) ||
            currentUrl === '' || compareUrl === '') {
          
          duplicates.push(compareTool);
          processedTools.add(compareKey);
          
          // Choose the best version (prioritize AI Web Tools GPTs, then more complete info)
          if (shouldKeepCompareTool(bestTool, compareTool)) {
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
          duplicates.push(compareTool);
          processedTools.add(compareKey);
          
          if (shouldKeepCompareTool(bestTool, compareTool)) {
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
      const isCustomGPT = isAIWebToolsGPT(bestTool);

      if (!isCustomGPT) {
        const nonGPTDuplicates = duplicates.filter(dup => !isAIWebToolsGPT(dup));

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
        toolsToKeep.push(bestTool);
        const nonGPTDuplicates = duplicates.filter(dup => !isAIWebToolsGPT(dup));
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

// Helper function to detect AI Web Tools GPTs
const isAIWebToolsGPT = (tool: Tool): boolean => {
  return tool.directUrl?.includes('lovable.app') || 
         tool.directUrl?.includes('chatgpt.com/g/') ||
         tool.description.toLowerCase().includes('aiwebtools') ||
         tool.title.toLowerCase().includes('gpt');
};

// Helper function to determine if we should keep the compare tool over the current best
const shouldKeepCompareTool = (bestTool: Tool, compareTool: Tool): boolean => {
  // Prioritize AI Web Tools GPTs
  if (isAIWebToolsGPT(compareTool) && !isAIWebToolsGPT(bestTool)) {
    return true;
  }
  
  // If both or neither are GPTs, choose based on completeness
  if ((compareTool.directUrl && !bestTool.directUrl) ||
      (compareTool.description.length > bestTool.description.length) ||
      (compareTool.rating && !bestTool.rating) ||
      (compareTool.tags && compareTool.tags.length > (bestTool.tags?.length || 0))) {
    return true;
  }
  
  return false;
};

// Enhanced helper function to detect similar tools across all categories
const isSimilarTool = (tool1: Tool, tool2: Tool): boolean => {
  const title1 = tool1.title.toLowerCase().trim();
  const title2 = tool2.title.toLowerCase().trim();
  
  // Check for common tool variations across all categories
  const toolVariations = [
    // Video tools
    ['runwayml gen-2', 'runway ml', 'runway gen-2', 'runwayml'],
    ['luma labs dream machine', 'luma dream machine', 'dream machine', 'luma labs'],
    ['google veo 2', 'google veo', 'video fx by google', 'veo 2'],
    ['music video maker ai studio', 'music video maker studio', 'music video maker'],
    ['movie maker studio ai suite', 'movie maker studio', 'movie studio ai'],
    ['pika labs', 'pika ai', 'pika'],
    ['minimax', 'hailuo ai', 'hailuo ai (minimax)'],
    ['synthesia', 'synthesia ai', 'synthesia.io'],
    ['d-id', 'did', 'd id'],
    
    // Image tools
    ['midjourney', 'mid journey', 'mj'],
    ['dall-e', 'dall e', 'dalle', 'dall·e'],
    ['stable diffusion', 'stability ai', 'stablediffusion'],
    ['leonardo ai', 'leonardo.ai', 'leonardo'],
    
    // Business tools
    ['chatgpt', 'chat gpt', 'gpt-4', 'openai'],
    ['claude', 'claude ai', 'anthropic'],
    ['gemini', 'google gemini', 'bard'],
    
    // Writing tools
    ['grammarly', 'grammarly ai', 'grammarly premium'],
    ['jasper', 'jasper ai', 'jasper.ai'],
    ['copy.ai', 'copyai', 'copy ai'],
    
    // Audio tools
    ['eleven labs', 'elevenlabs', '11labs'],
    ['murf', 'murf ai', 'murf.ai'],
    ['speechify', 'speechify ai'],
    
    // 3D tools
    ['meshy ai', 'meshy', 'meshy.ai'],
    ['luma ai', 'luma', 'luma labs'],
    
    // Design tools
    ['canva', 'canva ai', 'canva pro'],
    ['figma', 'figma ai', 'figma design'],
    ['adobe', 'adobe ai', 'adobe creative']
  ];
  
  for (const variations of toolVariations) {
    if (variations.some(v => title1.includes(v)) && variations.some(v => title2.includes(v))) {
      return true;
    }
  }
  
  // Check for exact matches with common suffixes/prefixes
  const cleanTitle1 = title1.replace(/\s?(ai|gpt|pro|premium|suite|studio|labs|\.ai|\.com|\.io)$/g, '');
  const cleanTitle2 = title2.replace(/\s?(ai|gpt|pro|premium|suite|studio|labs|\.ai|\.com|\.io)$/g, '');
  
  return cleanTitle1 === cleanTitle2 && cleanTitle1.length > 3;
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
