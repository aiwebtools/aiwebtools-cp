
import { getAllToolCategories } from '@/data/toolsCollection';
import { deduplicateTools } from '@/utils/toolDeduplication';

export const getToolCount = () => {
  const allTools = getAllToolCategories();
  
  console.log(`🔍 DETAILED TOOL COUNT ANALYSIS STARTING...`);
  console.log(`📊 Raw Tools Before Deduplication: ${allTools.length}`);
  
  // Track tools by category before deduplication
  const categoryCountsBefore: Record<string, number> = {};
  allTools.forEach(tool => {
    const category = tool.category || 'Uncategorized';
    categoryCountsBefore[category] = (categoryCountsBefore[category] || 0) + 1;
  });
  
  console.log('📋 Category counts BEFORE deduplication:', categoryCountsBefore);
  
  const deduplicatedTools = deduplicateTools(allTools);
  
  console.log(`📊 Tools After Deduplication: ${deduplicatedTools.length}`);
  console.log(`🗑️ Tools removed during deduplication: ${allTools.length - deduplicatedTools.length}`);
  
  const categoryBreakdown: Record<string, number> = {};
  deduplicatedTools.forEach(tool => {
    const category = tool.category || 'Uncategorized';
    categoryBreakdown[category] = (categoryBreakdown[category] || 0) + 1;
  });
  
  console.log('📋 Category counts AFTER deduplication:', categoryBreakdown);
  
  // Compare before and after to see which categories lost tools
  console.log('\n🔍 CATEGORY COMPARISON (BEFORE → AFTER):');
  Object.keys(categoryCountsBefore).forEach(category => {
    const before = categoryCountsBefore[category];
    const after = categoryBreakdown[category] || 0;
    if (before !== after) {
      console.log(`❗ ${category}: ${before} → ${after} (${after - before})`);
    }
  });
  
  // Look for specific tool titles that might have been lost
  const toolTitles = allTools.map(tool => tool.title);
  const deduplicatedTitles = deduplicatedTools.map(tool => tool.title);
  
  const lostTools = toolTitles.filter(title => !deduplicatedTitles.includes(title));
  if (lostTools.length > 0) {
    console.log('\n🚨 TOOLS THAT WERE REMOVED:');
    lostTools.forEach(title => {
      console.log(`❌ Lost: "${title}"`);
    });
  }
  
  // Check for duplicate tools that were kept vs removed
  const titleCounts: Record<string, number> = {};
  allTools.forEach(tool => {
    titleCounts[tool.title] = (titleCounts[tool.title] || 0) + 1;
  });
  
  const duplicateTitles = Object.keys(titleCounts).filter(title => titleCounts[title] > 1);
  if (duplicateTitles.length > 0) {
    console.log('\n🔄 DUPLICATE TOOLS FOUND:');
    duplicateTitles.forEach(title => {
      console.log(`🔄 "${title}": ${titleCounts[title]} instances`);
      const instances = allTools.filter(tool => tool.title === title);
      instances.forEach((instance, index) => {
        console.log(`   ${index + 1}. Category: ${instance.category}, URL: ${instance.directUrl}`);
      });
    });
  }
  
  console.log('🎉 ACCURATE TOOL COUNT VERIFICATION 🎉');
  console.log(`📊 Raw Tools Before Deduplication: ${allTools.length}`);
  console.log(`📊 EXACT Tool Count After Deduplication: ${deduplicatedTools.length}`);
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
  
  // Check for potential data loss during collection
  const expectedMinimumTools = 1000; // Based on your comprehensive collection
  if (deduplicatedTools.length < expectedMinimumTools) {
    console.warn(`⚠️ POTENTIAL DATA LOSS DETECTED!`);
    console.warn(`Expected minimum: ${expectedMinimumTools} tools`);
    console.warn(`Current count: ${deduplicatedTools.length} tools`);
    console.warn(`Difference: ${expectedMinimumTools - deduplicatedTools.length} tools missing`);
  } else {
    console.log(`✅ Tool count looks healthy: ${deduplicatedTools.length} tools loaded`);
  }
  
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
    rawToolCount: allTools.length,
    deduplicatedCount: deduplicatedTools.length,
    potentialDataLoss: deduplicatedTools.length < expectedMinimumTools,
    lostTools: lostTools,
    duplicateTitles: duplicateTitles
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
