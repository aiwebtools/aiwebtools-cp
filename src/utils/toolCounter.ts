
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
  console.log(`🔍 RAW TOOLS FROM COLLECTION: ${allToolsFromCollection.length}`);
  
  // Use ultra conservative deduplication
  const deduplicatedTools = deduplicateTools(allToolsFromCollection);
  
  console.log(`🎯 TOOL COUNT PRESERVATION ANALYSIS:`);
  console.log(`📊 Raw tools from collection: ${allToolsFromCollection.length}`);
  console.log(`📊 After ultra conservative deduplication: ${deduplicatedTools.length}`);
  console.log(`📊 Tools removed by deduplication: ${allToolsFromCollection.length - deduplicatedTools.length}`);
  
  // Verify our newly added tools are preserved
  const teamAITool = deduplicatedTools.find(tool => tool.title.includes('TeamAI'));
  const orchardTool = deduplicatedTools.find(tool => tool.title.includes('Orchard'));
  const bitAITool = deduplicatedTools.find(tool => tool.title.includes('Bit.ai'));
  
  console.log(`✅ NEWLY ADDED TOOLS PRESERVATION CHECK:`);
  console.log(`TeamAI found: ${!!teamAITool} ${teamAITool ? `(${teamAITool.category})` : ''}`);
  console.log(`Orchard.ink found: ${!!orchardTool} ${orchardTool ? `(${orchardTool.category})` : ''}`);
  console.log(`Bit.ai found: ${!!bitAITool} ${bitAITool ? `(${bitAITool.category})` : ''}`);
  
  // Check category distribution
  const categoryBreakdown: Record<string, number> = {};
  deduplicatedTools.forEach(tool => {
    const category = tool.category || 'Uncategorized';
    categoryBreakdown[category] = (categoryBreakdown[category] || 0) + 1;
  });
  
  // Get main category counts using the EXACT same logic as the website
  const mainCategoryCounts = getMainCategoriesWithCounts(allTools);
  
  console.log(`🎉 TOOL COUNT STATUS REPORT 🎉`);
  console.log(`📊 EXACT Tool Count: ${deduplicatedTools.length}`);
  console.log(`📊 Should be 1100+: ${deduplicatedTools.length >= 1100 ? '✅ YES' : '❌ NO'}`);
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
    console.warn(`This explains the tool count discrepancy!`);
  }
  
  // If we're under 1100, something is wrong
  if (deduplicatedTools.length < 1100) {
    console.error(`🚨 CRITICAL: Tool count is ${deduplicatedTools.length} but should be 1100+!`);
    console.error(`🚨 Tools may have been lost during processing!`);
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
