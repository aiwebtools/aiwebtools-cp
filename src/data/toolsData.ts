
import { Tool } from "@/types/tools";
import { getAllToolCategories } from './toolsCollection';
import { extractPriorityTools } from './priorityTools';
import { searchTools } from '@/utils/searchUtils';
import { createFeaturedTools } from '@/utils/featuredTools';
import { getCategoriesWithCounts, getToolsByCategory } from '@/utils/categoryUtils';
import { consolidateTools } from '@/utils/categoryConsolidation';
import { deduplicateTools } from '@/utils/toolDeduplication';

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

// Create featured tools using the utility function - prioritizes your GPTs
export const featuredTools: Tool[] = createFeaturedTools(allTools);

// Export utility functions for use in components
export { searchTools, getCategoriesWithCounts, getToolsByCategory };

// Debug information
console.log(`Total tools loaded: ${allTools.length}`);
console.log(`Categories found: ${Object.keys(getCategoriesWithCounts(allTools)).length}`);
const categoryBreakdown = getCategoriesWithCounts(allTools);
console.log('Category breakdown:', categoryBreakdown);

// Verify all tools have categories
const uncategorizedTools = allTools.filter(tool => !tool.category || tool.category.trim() === '');
if (uncategorizedTools.length > 0) {
  console.warn(`Found ${uncategorizedTools.length} uncategorized tools:`, uncategorizedTools.map(t => t.title));
}
