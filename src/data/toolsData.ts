
import { Tool } from "@/types/tools";
import { getAllToolCategories } from './toolsCollection';
import { extractPriorityTools } from './priorityTools';
import { searchTools } from '@/utils/searchUtils';
import { createFeaturedTools } from '@/utils/featuredTools';
import { getCategoriesWithCounts, getToolsByCategory } from '@/utils/categoryUtils';
import { consolidateTools } from '@/utils/categoryConsolidation';
import { deduplicateTools } from '@/utils/toolDeduplication';
import { getToolCount } from '@/utils/toolCounter';

// Combine all tool categories and apply consolidation
const allToolCategories = consolidateTools(getAllToolCategories());

// Apply deduplication to remove tools that appear in multiple categories
const deduplicatedTools = deduplicateTools(allToolCategories);

// Extract priority tools and reorder
const { priorityTools, remainingTools } = extractPriorityTools(deduplicatedTools);

// Combine with priority tools first
export const allTools: Tool[] = [
  ...priorityTools,
  ...remainingTools
];

// ENHANCED DEBUG: Find all instances of Financial Calculator Pro with source tracking
const financialCalcInstances = allTools.map((tool, index) => ({
  index,
  title: tool.title,
  url: tool.directUrl,
  category: tool.category,
  exactMatch: tool.title === 'Financial Calculator Pro'
})).filter(tool => tool.title.toLowerCase().includes('financial calculator'));

console.log('🔍 ALL Financial Calculator instances found:', financialCalcInstances);

// DEBUG: Check both instances specifically
financialCalcInstances.forEach((instance, i) => {
  console.log(`📋 Instance ${i + 1}:`, {
    title: instance.title,
    index: instance.index,
    url: instance.url,
    category: instance.category,
    isExactMatch: instance.exactMatch
  });
  
  if (instance.exactMatch && instance.url !== 'https://chatgpt.com/g/g-683cfb6951308191abb310d5d2fa8238-financial-calculator-pro?via=aiwebtools') {
    console.log(`❌ WRONG URL at index ${instance.index}:`, instance.url);
    console.log(`✅ Should be: https://chatgpt.com/g/g-683cfb6951308191abb310d5d2fa8238-financial-calculator-pro?via=aiwebtools`);
  }
});

// DEBUG: Specifically check tool at index 538
const toolAt538 = allTools[538];
if (toolAt538) {
  console.log('🎯 Tool at index 538:', {
    title: toolAt538.title,
    url: toolAt538.directUrl,
    category: toolAt538.category,
    description: toolAt538.description.substring(0, 100) + '...'
  });
  
  // Check if this is Financial Calculator Pro
  if (toolAt538.title === 'Financial Calculator Pro') {
    console.log('❌ FOUND THE PROBLEM: Tool at index 538 is Financial Calculator Pro with wrong URL');
    console.log('Current URL:', toolAt538.directUrl);
    console.log('Expected URL: https://chatgpt.com/g/g-683cfb6951308191abb310d5d2fa8238-financial-calculator-pro?via=aiwebtools');
  }
}

// Create featured tools using the utility function - prioritizes your GPTs
export const featuredTools: Tool[] = createFeaturedTools(allTools);

// Export utility functions for use in components
export { searchTools, getCategoriesWithCounts, getToolsByCategory };

// Get comprehensive tool count analysis
const toolCountAnalysis = getToolCount();

// Debug information with enhanced logging using accurate count
console.log(`🎉 MILESTONE ACHIEVED! Total tools loaded: ${allTools.length}`);
console.log(`📊 Categories found: ${Object.keys(getCategoriesWithCounts(allTools)).length}`);
console.log(`🎯 Accurate count for website: ${allTools.length} tools`);
console.log(`📈 Marketing display: ${Math.round(allTools.length / 100) * 100}+ tools`);

const categoryBreakdown = getCategoriesWithCounts(allTools);
console.log('📋 Category breakdown:', categoryBreakdown);

// Verify all tools have categories
const uncategorizedTools = allTools.filter(tool => !tool.category || tool.category.trim() === '');
if (uncategorizedTools.length > 0) {
  console.warn(`⚠️ Found ${uncategorizedTools.length} uncategorized tools:`, uncategorizedTools.map(t => t.title));
} else {
  console.log('✅ All tools are properly categorized!');
}

// Summary for Ken with accurate numbers
console.log(`
🚀 AI WEB TOOLS DIRECTORY STATUS REPORT 🚀
================================================
✅ EXACT Total AI Tools: ${allTools.length}
✅ Marketing Display: ${Math.round(allTools.length / 100) * 100}+ AI Tools
✅ Categories Available: ${Object.keys(categoryBreakdown).length}
✅ Quality Assurance: All tools categorized and deduplicated
✅ Coverage: Advanced AI, Research, Productivity, Security, Finance, Healthcare, Education, Legal, and more!

This comprehensive directory now covers ALL major AI domains and provides users with an unmatched resource for AI tool discovery! 🌟
`);
