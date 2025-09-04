import { allTools } from '@/data/toolsData';

// Verification utility to check tool count and completeness
export const verifyToolCount = () => {
  console.log('\n🔍 COMPREHENSIVE TOOL COUNT VERIFICATION');
  console.log('================================================');
  
  const totalTools = allTools.length;
  console.log(`📊 Total tools in database: ${totalTools}`);
  
  // Check for duplicates
  const titles = allTools.map(tool => tool.title);
  const uniqueTitles = new Set(titles);
  const duplicates = titles.length - uniqueTitles.size;
  
  if (duplicates > 0) {
    console.warn(`⚠️ Found ${duplicates} duplicate tools`);
    
    // Find actual duplicates
    const titleCounts = {};
    titles.forEach(title => {
      titleCounts[title] = (titleCounts[title] || 0) + 1;
    });
    
    const duplicateNames = Object.entries(titleCounts)
      .filter(([title, count]) => (count as number) > 1)
      .map(([title, count]) => `${title} (${count} times)`);
    
    console.log('🔍 Duplicate tools:', duplicateNames);
  } else {
    console.log('✅ No duplicate tools found');
  }
  
  // Check for missing essential fields
  const missingFields = allTools.filter(tool => 
    !tool.title || !tool.directUrl || !tool.category
  );
  
  if (missingFields.length > 0) {
    console.warn(`⚠️ Found ${missingFields.length} tools with missing essential fields`);
    console.log('Missing fields tools:', missingFields.map(t => t.title || 'NO TITLE'));
  } else {
    console.log('✅ All tools have essential fields');
  }
  
  // Category breakdown
  const categories = {};
  allTools.forEach(tool => {
    const cat = tool.category || 'Uncategorized';
    categories[cat] = (categories[cat] || 0) + 1;
  });
  
  const sortedCategories = Object.entries(categories)
    .sort(([,a], [,b]) => (b as number) - (a as number))
    .slice(0, 10);
  
  console.log('\n📋 Top 10 Categories:');
  sortedCategories.forEach(([category, count]) => {
    console.log(`   ${category}: ${count} tools`);
  });
  
  // Check for AI Web Tools GPTs specifically
  const aiWebToolsGPTs = allTools.filter(tool => 
    tool.directUrl?.includes('lovable.app/?via=aiwebtools') ||
    tool.directUrl?.includes('chatgpt.com/g/g-')
  );
  
  console.log(`\n🤖 AI Web Tools GPTs: ${aiWebToolsGPTs.length}`);
  
  // Expected vs actual count
  const expectedCount = 2009;
  const difference = totalTools - expectedCount;
  
  console.log(`\n🎯 TARGET vs ACTUAL:`);
  console.log(`   Expected: ${expectedCount} tools`);
  console.log(`   Actual: ${totalTools} tools`);
  console.log(`   Difference: ${difference > 0 ? '+' : ''}${difference}`);
  
  if (Math.abs(difference) > 50) {
    console.error(`🚨 CRITICAL: Tool count differs by more than 50! Expected ~${expectedCount}, got ${totalTools}`);
  } else if (Math.abs(difference) > 10) {
    console.warn(`⚠️ WARNING: Tool count differs by ${Math.abs(difference)}`);
  } else {
    console.log(`✅ Tool count is within acceptable range`);
  }
  
  return {
    totalTools,
    duplicates,
    missingFields: missingFields.length,
    categories: Object.keys(categories).length,
    aiWebToolsGPTs: aiWebToolsGPTs.length,
    difference,
    status: Math.abs(difference) <= 10 ? 'GOOD' : Math.abs(difference) <= 50 ? 'WARNING' : 'CRITICAL'
  };
};

// Auto-run verification
setTimeout(() => {
  verifyToolCount();
}, 1000);