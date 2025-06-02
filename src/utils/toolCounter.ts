
import { getAllToolCategories } from '@/data/toolsCollection';
import { deduplicateTools } from '@/utils/toolDeduplication';

export const getToolCount = () => {
  const allTools = getAllToolCategories();
  const deduplicatedTools = deduplicateTools(allTools);
  
  const categoryBreakdown: Record<string, number> = {};
  deduplicatedTools.forEach(tool => {
    const category = tool.category || 'Uncategorized';
    categoryBreakdown[category] = (categoryBreakdown[category] || 0) + 1;
  });
  
  console.log('🎉 TOOL COUNT VERIFICATION & DIAGNOSTICS 🎉');
  console.log(`📊 Raw tools collected: ${allTools.length}`);
  console.log(`📊 After deduplication: ${deduplicatedTools.length}`);
  console.log(`📊 Tools removed by deduplication: ${allTools.length - deduplicatedTools.length}`);
  console.log('Category Breakdown:', categoryBreakdown);
  
  // Check for CHATRON specifically
  const chatronInstances = allTools.filter(tool => tool.title === 'CHATRON');
  const chatronDeduped = deduplicatedTools.filter(tool => tool.title === 'CHATRON');
  console.log(`🔍 CHATRON instances found: ${chatronInstances.length}`);
  console.log(`🔍 CHATRON after deduplication: ${chatronDeduped.length}`);
  
  // Log AI Chat Platforms specifically
  const aiChatPlatformTools = deduplicatedTools.filter(tool => tool.category === 'AI Chat Platforms');
  console.log(`💬 AI Chat Platforms count: ${aiChatPlatformTools.length}`);
  console.log('AI Chat Platform tools:', aiChatPlatformTools.map(t => t.title));
  
  // Check for any undefined or malformed tools
  const malformedTools = allTools.filter(tool => !tool.title || !tool.description);
  console.log(`⚠️ Malformed tools found: ${malformedTools.length}`);
  if (malformedTools.length > 0) {
    console.log('Malformed tools:', malformedTools);
  }
  
  // Check category distribution
  const categoryCounts = Object.entries(categoryBreakdown).sort((a, b) => b[1] - a[1]);
  console.log('📈 Top 10 categories by tool count:');
  categoryCounts.slice(0, 10).forEach(([category, count]) => {
    console.log(`  ${category}: ${count} tools`);
  });
  
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
  
  console.log('✅ FINAL TOOL COUNT SUMMARY:');
  console.log(`🎯 EXACT TOTAL: ${deduplicatedTools.length} AI TOOLS`);
  console.log(`📈 Rounded Marketing Number: ${Math.round(deduplicatedTools.length / 100) * 100}+`);
  console.log(`🚀 Categories Available: ${Object.keys(categoryBreakdown).length}`);
  
  // Verify no tools were lost - enhanced warning system
  if (deduplicatedTools.length < 900) {
    console.error(`🚨 CRITICAL TOOL COUNT ALERT: Current count ${deduplicatedTools.length} is significantly low!`);
    console.error(`🚨 Expected minimum: 900+ tools. This indicates a major data loss!`);
  } else if (deduplicatedTools.length < 1000) {
    console.warn(`⚠️ TOOL COUNT WARNING: Current count ${deduplicatedTools.length} seems lower than expected.`);
    console.warn(`⚠️ Expected range: 1000+ tools. Please verify no tools were accidentally removed.`);
  } else {
    console.log(`✅ Tool count verification passed: ${deduplicatedTools.length} tools`);
  }
  
  return {
    exactTotal: deduplicatedTools.length,
    marketingNumber: `${Math.round(deduplicatedTools.length / 100) * 100}+`,
    totalTools: deduplicatedTools.length,
    categoryBreakdown,
    categoriesCount: Object.keys(categoryBreakdown).length,
    freeTools,
    freemiumTools,
    paidTools,
    searchReadiness: {
      withTags: toolsWithTags,
      withCategories: toolsWithCategories
    },
    diagnostics: {
      rawToolsCount: allTools.length,
      deduplicatedCount: deduplicatedTools.length,
      removedByDeduplication: allTools.length - deduplicatedTools.length,
      malformedToolsCount: malformedTools.length
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
