
import { Tool } from "@/types/tools";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { isSimilarCategory } from "./normalization";
import { isVideoRelatedTool } from "./videoDetection";
import { 
  getDataAnalyticsTools, 
  getMarketingSalesTools, 
  getCommunicationCollaborationTools,
  getAutomationPlatformsTools
} from "./categoryMatching";
import { CategoryCounts, MainCategoryCounts } from "./types";
import { buildToolsCache, resetCache, getToolsCacheByMainCategory, isCacheBuilt } from "./cacheManager";
import { isAIWebToolsGPT } from "./specializedDetection";

export const getCategoriesWithCounts = (tools: Tool[]): CategoryCounts => {
  const categoryCounts: CategoryCounts = {};
  
  tools.forEach(tool => {
    const category = tool.category;
    if (category) {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
  });
  
  return categoryCounts;
};

export const getToolsByCategory = (tools: Tool[], categoryName: string): Tool[] => {
  // Special handling for AI Web Tools Originals category
  if (categoryName === "AI WEB TOOLS ORIGINALS" || categoryName === "AI Web Tools Originals") {
    return tools.filter(tool => isAIWebToolsGPT(tool));
  }
  
  // Special handling for Data & Analytics category
  if (categoryName === "DATA & ANALYTICS AI TOOLS" || categoryName === "Data & Analytics Tools") {
    return getDataAnalyticsTools(tools, categoryName);
  }
  
  // Special handling for Marketing & Sales category
  if (categoryName === "MARKETING & SALES AI TOOLS" || categoryName === "Marketing & Analytics" || categoryName === "E-commerce & Marketing Tools" || categoryName === "Business & Sales Tools") {
    return getMarketingSalesTools(tools, categoryName);
  }
  
  // Enhanced handling for Communication & Collaboration category
  if (categoryName === "COMMUNICATION & COLLABORATION AI TOOLS" || categoryName === "Communication & Entertainment" || categoryName === "Communication Tools") {
    return getCommunicationCollaborationTools(tools, categoryName);
  }
  
  // Special handling for Automation Platforms category
  if (categoryName === "AUTOMATION PLATFORMS" || categoryName === "Automation Platforms" || categoryName === "Automation & Workflows") {
    return getAutomationPlatformsTools(tools, categoryName);
  }
  
  // Regular category filtering with enhanced similarity matching
  return tools.filter(tool => tool.category && isSimilarCategory(tool.category, categoryName));
};

export const getMainCategoriesWithCounts = (tools: Tool[]): MainCategoryCounts => {
  // Build cache if not built yet
  buildToolsCache(tools);
  
  const mainCategoryCounts: MainCategoryCounts = {};
  const toolsCacheByMainCategory = getToolsCacheByMainCategory();
  
  // Use cached results for instant counts
  mainCategories.forEach(mainCat => {
    const cachedTools = toolsCacheByMainCategory.get(mainCat.name) || [];
    mainCategoryCounts[mainCat.name] = cachedTools.length;
  });
  
  console.log('📊 Main category counts:', mainCategoryCounts);
  return mainCategoryCounts;
};

export const getToolsByMainCategory = (tools: Tool[], mainCategoryName: string): Tool[] => {
  console.log(`🚀 Fast lookup for main category: "${mainCategoryName}"`);
  
  // Build cache if not built yet
  buildToolsCache(tools);
  
  const toolsCacheByMainCategory = getToolsCacheByMainCategory();
  
  // Return cached results instantly - these are the EXACT same tools used for counting
  const cachedTools = toolsCacheByMainCategory.get(mainCategoryName);
  
  if (cachedTools) {
    console.log(`✅ Instant cache hit! Returning ${cachedTools.length} tools for "${mainCategoryName}"`);
    console.log(`🔍 First 5 tools: ${cachedTools.slice(0, 5).map(t => t.title).join(', ')}`);
    return cachedTools;
  }
  
  console.warn(`❌ No cache found for main category "${mainCategoryName}"`);
  return [];
};

// Re-export cache management functions
export { resetCache };
