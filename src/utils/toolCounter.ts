
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
  
  console.log('🎉 CURRENT TOOL COUNT VERIFICATION 🎉');
  console.log(`📊 EXACT Tool Count: ${deduplicatedTools.length}`);
  console.log('Category Breakdown:', categoryBreakdown);
  
  // Check for CHATRON specifically
  const chatronExists = deduplicatedTools.find(tool => tool.title === 'CHATRON');
  console.log('🔍 CHATRON verification:', chatronExists ? 'FOUND' : 'NOT FOUND');
  
  // Log AI Chat Platforms specifically
  const aiChatPlatformTools = deduplicatedTools.filter(tool => tool.category === 'AI Chat Platforms');
  console.log(`💬 AI Chat Platforms count: ${aiChatPlatformTools.length}`);
  console.log('AI Chat Platform tools:', aiChatPlatformTools.map(t => t.title));
  
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
  
  // Verify no tools were lost - previous known count was around 1000+
  if (deduplicatedTools.length < 900) {
    console.warn(`⚠️ TOOL COUNT ALERT: Current count ${deduplicatedTools.length} seems low - check for missing tools!`);
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
