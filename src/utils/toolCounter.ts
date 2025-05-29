
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
  
  console.log('🎉 MILESTONE UPDATE - NEW MIND-BLOWING AI TOOLS ADDED! 🎉');
  console.log(`📊 Current Tool Count Analysis:`);
  console.log(`Total Tools: ${deduplicatedTools.length}`);
  console.log('Category Breakdown:', categoryBreakdown);
  console.log(`✅ 1000+ Target Status: ${deduplicatedTools.length >= 1000 ? 'ACHIEVED! 🚀' : `Need ${1000 - deduplicatedTools.length} more tools`}`);
  
  // Highlight new additions
  console.log('🌟 Latest Addition: 50 Mind-Blowing AI Tools for Everyday Users');
  console.log('🎯 These tools focus on impressive, accessible AI that will amaze regular people!');
  
  return {
    totalTools: deduplicatedTools.length,
    categoryBreakdown,
    toolsNeededFor1000: Math.max(0, 1000 - deduplicatedTools.length),
    newlyAdded: 50
  };
};
