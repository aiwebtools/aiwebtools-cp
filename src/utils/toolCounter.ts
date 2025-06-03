
import { getAllToolCategories } from '@/data/toolsCollection';
import { deduplicateTools } from '@/utils/toolDeduplication';
import { trackToolChanges } from '@/utils/toolChangeTracker';
import { runIntegrityCheck } from '@/utils/toolIntegrityChecker';
import { getMainCategoriesWithCounts } from '@/utils/categoryUtils/toolFiltering';
import { allTools } from '@/data/toolsData';

export const getToolCount = () => {
  // Track changes before counting
  trackToolChanges('tool_count_check');
  
  const allToolsFromCollection = getAllToolCategories();
  const deduplicatedTools = deduplicateTools(allToolsFromCollection);
  
  console.log(`🔍 DETAILED TOOL COUNT ANALYSIS:`);
  console.log(`📊 Raw tools from collection: ${allToolsFromCollection.length}`);
  console.log(`📊 After deduplication: ${deduplicatedTools.length}`);
  console.log(`📊 Tools removed by deduplication: ${allToolsFromCollection.length - deduplicatedTools.length}`);
  
  // Check specifically for the tools we just added
  const teamAITool = deduplicatedTools.find(tool => tool.title.includes('TeamAI'));
  const orchardTool = deduplicatedTools.find(tool => tool.title.includes('Orchard'));
  const bitAITool = deduplicatedTools.find(tool => tool.title.includes('Bit.ai'));
  
  console.log(`🔍 NEWLY ADDED TOOLS VERIFICATION:`);
  console.log(`TeamAI found: ${!!teamAITool}`);
  console.log(`Orchard.ink found: ${!!orchardTool}`);
  console.log(`Bit.ai found: ${!!bitAITool}`);
  
  if (teamAITool) console.log(`TeamAI details:`, teamAITool.title, teamAITool.category);
  if (orchardTool) console.log(`Orchard details:`, orchardTool.title, orchardTool.category);
  if (bitAITool) console.log(`Bit.ai details:`, bitAITool.title, bitAITool.category);
  
  // Check for potential duplicates that might have been removed
  const chatPlatformTools = deduplicatedTools.filter(tool => tool.category === 'AI Chat Platforms');
  const contentCreationTools = deduplicatedTools.filter(tool => tool.category === 'Content Creation');
  const collaborationTools = deduplicatedTools.filter(tool => tool.category === 'Collaboration Tools');
  
  console.log(`📋 Category tool counts:`);
  console.log(`AI Chat Platforms: ${chatPlatformTools.length}`);
  console.log(`Content Creation: ${contentCreationTools.length}`);
  console.log(`Collaboration Tools: ${collaborationTools.length}`);
  
  const categoryBreakdown: Record<string, number> = {};
  deduplicatedTools.forEach(tool => {
    const category = tool.category || 'Uncategorized';
    categoryBreakdown[category] = (categoryBreakdown[category] || 0) + 1;
  });
  
  // Get main category counts using the EXACT same logic as the website
  const mainCategoryCounts = getMainCategoriesWithCounts(allTools);
  
  console.log(`🎉 ENHANCED TOOL COUNT VERIFICATION 🎉`);
  console.log(`📊 EXACT Tool Count: ${deduplicatedTools.length}`);
  console.log('📋 Complete Category Breakdown:', categoryBreakdown);
  console.log('🎯 Main Category Counts (matching website display):', mainCategoryCounts);
  
  // Check consistency between collection count and allTools count
  const allToolsCount = allTools.length;
  console.log(`🔍 CONSISTENCY CHECK:`);
  console.log(`   Collection tools (deduplicated): ${deduplicatedTools.length}`);
  console.log(`   allTools count: ${allToolsCount}`);
  console.log(`   Match: ${deduplicatedTools.length === allToolsCount ? '✅' : '❌'}`);
  
  if (deduplicatedTools.length !== allToolsCount) {
    console.warn(`⚠️ MISMATCH DETECTED! Collection has ${deduplicatedTools.length} but allTools has ${allToolsCount}`);
    console.warn(`This could explain the tool count discrepancy!`);
  }
  
  // Run integrity check after counting
  console.log('\n🔍 RUNNING ENHANCED INTEGRITY CHECK...');
  runIntegrityCheck();
  
  return {
    exactTotal: deduplicatedTools.length,
    marketingNumber: `${Math.round(deduplicatedTools.length / 100) * 100}+`,
    totalTools: deduplicatedTools.length,
    categoryBreakdown,
    mainCategoryCounts,
    categoriesCount: Object.keys(categoryBreakdown).length,
    rawToolsCount: allToolsFromCollection.length,
    removedByDeduplication: allToolsFromCollection.length - deduplicatedTools.length
  };
};

// Export a function to get the current accurate count for use in components
export const getCurrentToolCount = (): { total: number; marketing: string; categories: number; mainCategoryCounts: Record<string, number> } => {
  const result = getToolCount();
  return {
    total: result.exactTotal,
    marketing: result.marketingNumber,
    categories: result.categoriesCount,
    mainCategoryCounts: result.mainCategoryCounts
  };
};

// Export helper to track changes during tool additions
export const trackToolAddition = (operation: string, additionFn: () => void) => {
  console.log(`🔄 TRACKING TOOL ADDITION: ${operation}`);
  trackToolChanges(`before_${operation}`);
  
  additionFn();
  
  trackToolChanges(`after_${operation}`);
  console.log(`✅ TOOL ADDITION TRACKING COMPLETE: ${operation}`);
};
