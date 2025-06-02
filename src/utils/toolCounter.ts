
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
  
  const categoryBreakdown: Record<string, number> = {};
  deduplicatedTools.forEach(tool => {
    const category = tool.category || 'Uncategorized';
    categoryBreakdown[category] = (categoryBreakdown[category] || 0) + 1;
  });
  
  // Get main category counts using the EXACT same logic as the website
  const mainCategoryCounts = getMainCategoriesWithCounts(allTools);
  
  console.log('🎉 ENHANCED TOOL COUNT VERIFICATION 🎉');
  console.log(`📊 EXACT Tool Count: ${deduplicatedTools.length}`);
  console.log('📋 Complete Category Breakdown:', categoryBreakdown);
  console.log('🎯 Main Category Counts (matching website display):', mainCategoryCounts);
  
  // Enhanced analysis for the categories user mentioned
  const creativeCount = mainCategoryCounts['CREATIVE & ENTERTAINMENT'] || 0;
  const healthCount = mainCategoryCounts['HEALTH, WELLNESS & PERSONAL LIFESTYLE'] || 0;
  const marketingCount = mainCategoryCounts['MARKETING & SALES SOLUTIONS'] || 0;
  
  console.log('🎭 CREATIVE & ENTERTAINMENT ANALYSIS:');
  console.log(`   Main Category Count: ${creativeCount} tools`);
  
  console.log('🏥 HEALTH & WELLNESS ANALYSIS:');
  console.log(`   Main Category Count: ${healthCount} tools`);
  
  console.log('📈 MARKETING & SALES ANALYSIS:');
  console.log(`   Main Category Count: ${marketingCount} tools`);
  
  console.log(`🔍 COMBINED USER CATEGORIES: ${creativeCount + healthCount + marketingCount} tools`);
  
  // Check consistency between collection count and allTools count
  const allToolsCount = allTools.length;
  console.log(`🔍 CONSISTENCY CHECK:`);
  console.log(`   Collection tools (deduplicated): ${deduplicatedTools.length}`);
  console.log(`   allTools count: ${allToolsCount}`);
  console.log(`   Match: ${deduplicatedTools.length === allToolsCount ? '✅' : '❌'}`);
  
  // Enhanced pricing analysis
  const freeTools = deduplicatedTools.filter(tool => 
    tool.tags?.includes('free') || 
    tool.description.toLowerCase().includes('completely free') ||
    tool.description.toLowerCase().includes('free to use')
  ).length;
  
  const freemiumTools = deduplicatedTools.filter(tool => 
    tool.tags?.includes('freemium') || 
    tool.description.toLowerCase().includes('free plan') ||
    tool.description.toLowerCase().includes('free tier')
  ).length;
  
  const paidTools = deduplicatedTools.filter(tool => 
    tool.tags?.includes('paid') || 
    tool.description.toLowerCase().includes('subscription') ||
    tool.description.toLowerCase().includes('/month')
  ).length;
  
  console.log('💰 Pricing Breakdown:');
  console.log(`Free Tools: ${freeTools}`);
  console.log(`Freemium Tools: ${freemiumTools}`);
  console.log(`Paid Tools: ${paidTools}`);
  console.log(`🆓 Free/Freemium Ratio: ${Math.round(((freeTools + freemiumTools) / deduplicatedTools.length) * 100)}%`);
  
  // Search functionality verification
  const toolsWithTags = deduplicatedTools.filter(tool => tool.tags && tool.tags.length > 0).length;
  const toolsWithCategories = deduplicatedTools.filter(tool => tool.category).length;
  
  console.log('🔍 Search Readiness:');
  console.log(`Tools with Tags: ${toolsWithTags} (${Math.round((toolsWithTags / deduplicatedTools.length) * 100)}%)`);
  console.log(`Tools with Categories: ${toolsWithCategories} (${Math.round((toolsWithCategories / deduplicatedTools.length) * 100)}%)`);
  
  console.log('✅ FINAL ACCURATE COUNT FOR WEBSITE UPDATES:');
  console.log(`🎯 EXACT TOTAL: ${deduplicatedTools.length} AI TOOLS`);
  console.log(`📈 Rounded Marketing Number: ${Math.round(deduplicatedTools.length / 100) * 100}+`);
  console.log(`🚀 Categories Available: ${Object.keys(categoryBreakdown).length}`);
  console.log('🎯 Main Category Tool Distribution:');
  Object.entries(mainCategoryCounts).forEach(([category, count]) => {
    console.log(`   ${category}: ${count} tools`);
  });
  
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
    freeTools,
    freemiumTools,
    paidTools,
    creativeToolsCount: creativeCount,
    healthToolsCount: healthCount,
    marketingToolsCount: marketingCount,
    searchReadiness: {
      withTags: toolsWithTags,
      withCategories: toolsWithCategories
    }
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
