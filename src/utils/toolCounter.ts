
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
  
  console.log('📊 Current Tool Count Analysis:');
  console.log(`Total Tools: ${deduplicatedTools.length}`);
  console.log('Category Breakdown:', categoryBreakdown);
  console.log(`Tools needed to reach 1000: ${Math.max(0, 1000 - deduplicatedTools.length)}`);
  
  return {
    totalTools: deduplicatedTools.length,
    categoryBreakdown,
    toolsNeededFor1000: Math.max(0, 1000 - deduplicatedTools.length)
  };
};
