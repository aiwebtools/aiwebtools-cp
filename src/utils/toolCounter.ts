
import { getAllToolCategories } from '@/data/toolsCollection';
import { deduplicateTools } from '@/utils/toolDeduplication';
import { trackToolChanges } from '@/utils/toolChangeTracker';
import { runIntegrityCheck } from '@/utils/toolIntegrityChecker';

export const getToolCount = () => {
  // Track changes before counting
  trackToolChanges('tool_count_check');
  
  const allTools = getAllToolCategories();
  const deduplicatedTools = deduplicateTools(allTools);
  
  const categoryBreakdown: Record<string, number> = {};
  deduplicatedTools.forEach(tool => {
    const category = tool.category || 'Uncategorized';
    categoryBreakdown[category] = (categoryBreakdown[category] || 0) + 1;
  });
  
  console.log('🎉 ENHANCED TOOL COUNT VERIFICATION 🎉');
  console.log(`📊 EXACT Tool Count: ${deduplicatedTools.length}`);
  console.log('📋 Complete Category Breakdown:', categoryBreakdown);
  
  // Enhanced analysis for the categories user mentioned
  const creativeCategories = Object.keys(categoryBreakdown).filter(cat => 
    cat.toLowerCase().includes('creative') || 
    cat.toLowerCase().includes('entertainment') ||
    cat.toLowerCase().includes('content') ||
    cat.toLowerCase().includes('media') ||
    cat.toLowerCase().includes('design') ||
    cat.toLowerCase().includes('art')
  );
  
  const healthCategories = Object.keys(categoryBreakdown).filter(cat => 
    cat.toLowerCase().includes('health') || 
    cat.toLowerCase().includes('wellness') ||
    cat.toLowerCase().includes('medical') ||
    cat.toLowerCase().includes('healthcare') ||
    cat.toLowerCase().includes('fitness')
  );
  
  const creativeToolsCount = creativeCategories.reduce((sum, cat) => sum + (categoryBreakdown[cat] || 0), 0);
  const healthToolsCount = healthCategories.reduce((sum, cat) => sum + (categoryBreakdown[cat] || 0), 0);
  
  console.log('🎭 CREATIVE & ENTERTAINMENT ANALYSIS:');
  console.log(`   Categories: ${creativeCategories.join(', ')}`);
  console.log(`   Total Tools: ${creativeToolsCount}`);
  creativeCategories.forEach(cat => {
    console.log(`   ${cat}: ${categoryBreakdown[cat]} tools`);
  });
  
  console.log('🏥 HEALTH & WELLNESS ANALYSIS:');
  console.log(`   Categories: ${healthCategories.join(', ')}`);
  console.log(`   Total Tools: ${healthToolsCount}`);
  healthCategories.forEach(cat => {
    console.log(`   ${cat}: ${categoryBreakdown[cat]} tools`);
  });
  
  console.log(`🔍 COMBINED USER CATEGORIES: ${creativeToolsCount + healthToolsCount} tools`);
  console.log(`🎯 User Expected: Over 1000 tools combined`);
  console.log(`📊 Actual Found: ${creativeToolsCount + healthToolsCount} tools`);
  
  // Check for potential misalignment
  if (creativeToolsCount + healthToolsCount < 1000) {
    console.log('⚠️ POTENTIAL ISSUE: Tool count lower than expected');
    console.log('🔍 Investigating potential causes:');
    console.log('   1. Tools might be in different category names');
    console.log('   2. Category mapping might need updates');
    console.log('   3. Tools might be miscategorized');
  } else {
    console.log('✅ TOOL COUNT MATCHES EXPECTATIONS');
  }
  
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
  
  // Run integrity check after counting
  console.log('\n🔍 RUNNING ENHANCED INTEGRITY CHECK...');
  runIntegrityCheck();
  
  return {
    exactTotal: deduplicatedTools.length,
    marketingNumber: `${Math.round(deduplicatedTools.length / 100) * 100}+`,
    totalTools: deduplicatedTools.length,
    categoryBreakdown,
    categoriesCount: Object.keys(categoryBreakdown).length,
    freeTools,
    freemiumTools,
    paidTools,
    creativeToolsCount,
    healthToolsCount,
    searchReadiness: {
      withTags: toolsWithTags,
      withCategories: toolsWithCategories
    }
  };
};

// Export a function to get the current accurate count for use in components
export const getCurrentToolCount = (): { total: number; marketing: string; categories: number } => {
  const result = getToolCount();
  return {
    total: result.exactTotal,
    marketing: result.marketingNumber,
    categories: result.categoriesCount
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
