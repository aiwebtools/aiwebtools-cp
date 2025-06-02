
import { getAllToolCategories } from '@/data/toolsCollection';
import { deduplicateTools } from '@/utils/toolDeduplication';

export const getToolCount = () => {
  const rawAllTools = getAllToolCategories();
  const deduplicatedTools = deduplicateTools(rawAllTools);
  
  console.log(`🔍 DETAILED TOOL COUNT ANALYSIS:`);
  console.log(`📊 Raw tool count (before deduplication): ${rawAllTools.length}`);
  console.log(`📊 Deduplicated tool count: ${deduplicatedTools.length}`);
  console.log(`📊 Tools removed by deduplication: ${rawAllTools.length - deduplicatedTools.length}`);
  
  // Check for newly added tools
  const newToolTitles = ['CHATRON', 'SocialMedia Sonic', 'SEO CHECKER', 'CHATIQ', 'ChainDesk'];
  const foundNewTools = deduplicatedTools.filter(tool => 
    newToolTitles.some(title => tool.title.toLowerCase().includes(title.toLowerCase()))
  );
  
  console.log(`🆕 NEW TOOLS FOUND: ${foundNewTools.length}`);
  foundNewTools.forEach(tool => {
    console.log(`   ✅ ${tool.title} (${tool.category}) - ${tool.directUrl}`);
  });
  
  // Check if any new tools were lost
  const missingNewTools = newToolTitles.filter(title => 
    !deduplicatedTools.some(tool => tool.title.toLowerCase().includes(title.toLowerCase()))
  );
  
  if (missingNewTools.length > 0) {
    console.log(`❌ MISSING NEW TOOLS: ${missingNewTools.length}`);
    missingNewTools.forEach(title => {
      console.log(`   ❌ ${title} - NOT FOUND IN FINAL COLLECTION`);
    });
  }
  
  const categoryBreakdown: Record<string, number> = {};
  deduplicatedTools.forEach(tool => {
    const category = tool.category || 'Uncategorized';
    categoryBreakdown[category] = (categoryBreakdown[category] || 0) + 1;
  });
  
  console.log('🎉 ACCURATE TOOL COUNT VERIFICATION 🎉');
  console.log(`📊 EXACT Tool Count: ${deduplicatedTools.length}`);
  console.log('Category Breakdown:', categoryBreakdown);
  
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
  
  // Calculate what the count should be with new tools
  const expectedCount = deduplicatedTools.length + (5 - foundNewTools.length); // We should have added 5 new tools
  
  console.log('🎯 EXPECTED VS ACTUAL:');
  console.log(`Expected minimum count: ${expectedCount} (with all 5 new tools)`);
  console.log(`Actual count: ${deduplicatedTools.length}`);
  console.log(`Difference: ${deduplicatedTools.length - expectedCount}`);
  
  console.log('✅ FINAL ACCURATE COUNT FOR WEBSITE UPDATES:');
  console.log(`🎯 EXACT TOTAL: ${deduplicatedTools.length} AI TOOLS`);
  console.log(`📈 Rounded Marketing Number: ${Math.round(deduplicatedTools.length / 100) * 100}+`);
  console.log(`🚀 Categories Available: ${Object.keys(categoryBreakdown).length}`);
  
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
    newToolsFound: foundNewTools.length,
    missingNewTools: missingNewTools.length,
    rawCount: rawAllTools.length,
    deduplicationLoss: rawAllTools.length - deduplicatedTools.length
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
