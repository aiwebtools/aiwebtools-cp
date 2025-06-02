import { Tool } from "@/types/tools";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { isSimilarCategory } from "./normalization";
import { isVideoRelatedTool } from "./videoDetection";
import { isHealthAndWellnessTool, isCreativeAndEntertainmentTool } from "./healthDetection";
import { 
  getDataAnalyticsTools, 
  getMarketingSalesTools, 
  getCommunicationCollaborationTools,
  getAutomationPlatformsTools,
  getImageAndDesignTools
} from "./categoryMatching";
import { CategoryCounts, MainCategoryCounts } from "./types";
import { buildToolsCache, getToolsCacheByMainCategory, isCacheBuilt } from "./cacheManager";
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
  
  // FIXED: Unified handling for Image & Creative Design category - use ONLY ONE standardized name
  if (categoryName === "IMAGE & Creative DESIGN AI TOOLS" || 
      categoryName === "IMAGE & DESIGN AI TOOLS" ||
      categoryName === "Image & Creative Design" || 
      categoryName === "Image & Design" || 
      categoryName === "Image & Design Tools" ||
      categoryName === "Image & Design AI Tools") {
    const imageDesignTools = getImageAndDesignTools(tools, categoryName);
    console.log(`🎨 FIXED: Found ${imageDesignTools.length} actual Image & Creative Design tools (excluded video/entertainment)`);
    return imageDesignTools;
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
  
  // Enhanced handling for Health, Wellness & Personal Lifestyle category
  if (categoryName === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
    return tools.filter(tool => isHealthAndWellnessTool(tool));
  }
  
  // Enhanced handling for Creative & Entertainment category - FIXED LOGIC
  if (categoryName === "CREATIVE & ENTERTAINMENT") {
    const creativeTools = tools.filter(tool => isCreativeAndEntertainmentTool(tool));
    console.log(`🎭 FIXED CREATIVE FILTER: Found ${creativeTools.length} tools for Creative & Entertainment`);
    console.log(`🎭 Sample tools:`, creativeTools.slice(0, 10).map(t => `${t.title} (${t.category})`));
    return creativeTools;
  }
  
  // Regular category filtering with enhanced similarity matching
  return tools.filter(tool => tool.category && isSimilarCategory(tool.category, categoryName));
};

export const getMainCategoriesWithCounts = (tools: Tool[]): MainCategoryCounts => {
  console.log(`🔢 FIXED COUNTING: Starting count calculation for ${tools.length} total tools`);
  
  const mainCategoryCounts: MainCategoryCounts = {};
  
  // Calculate counts for each main category using CORRECTED detection
  mainCategories.forEach(mainCat => {
    let toolCount = 0;
    
    if (mainCat.name === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
      const healthTools = tools.filter(tool => isHealthAndWellnessTool(tool));
      toolCount = healthTools.length;
      console.log(`🏥 ${mainCat.name}: ${toolCount} tools (enhanced detection)`);
    } else if (mainCat.name === "CREATIVE & ENTERTAINMENT") {
      const creativeTools = tools.filter(tool => isCreativeAndEntertainmentTool(tool));
      toolCount = creativeTools.length;
      console.log(`🎭 FIXED ${mainCat.name}: ${toolCount} tools (corrected detection)`);
      
      // Additional debug for Creative & Entertainment
      const creativeSample = creativeTools.slice(0, 15).map(t => `${t.title} (${t.category})`);
      console.log(`🎭 CREATIVE SAMPLE TOOLS:`, creativeSample);
    } else {
      // Build cache if needed and get cached results
      buildToolsCache(tools);
      const toolsCacheByMainCategory = getToolsCacheByMainCategory();
      const cachedTools = toolsCacheByMainCategory.get(mainCat.name);
      toolCount = cachedTools ? cachedTools.length : 0;
      console.log(`📊 ${mainCat.name}: ${toolCount} tools (cached)`);
    }
    
    mainCategoryCounts[mainCat.name] = toolCount;
  });
  
  // Enhanced verification
  const totalCounted = Object.values(mainCategoryCounts).reduce((sum, count) => sum + count, 0);
  console.log(`🎯 FIXED ACCURACY CHECK: ${totalCounted} tools counted across main categories vs ${tools.length} total tools`);
  
  // Enhanced logging for the problematic categories
  const creativeCount = mainCategoryCounts["CREATIVE & ENTERTAINMENT"] || 0;
  const healthCount = mainCategoryCounts["HEALTH, WELLNESS & PERSONAL LIFESTYLE"] || 0;
  console.log(`🔍 CORRECTED COUNTS:`);
  console.log(`   Creative & Entertainment: ${creativeCount} tools`);
  console.log(`   Health, Wellness & Personal Lifestyle: ${healthCount} tools`);
  console.log(`   Combined: ${creativeCount + healthCount} tools`);
  
  return mainCategoryCounts;
};

export const getToolsByMainCategory = (tools: Tool[], mainCategoryName: string): Tool[] => {
  console.log(`🔍 FIXED RETRIEVAL: Getting tools for "${mainCategoryName}" from ${tools.length} total tools`);
  
  // CORRECTED handling for Health, Wellness & Personal Lifestyle
  if (mainCategoryName === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
    const healthTools = tools.filter(tool => isHealthAndWellnessTool(tool));
    console.log(`🏥 CORRECTED COUNT: Found ${healthTools.length} health & wellness tools`);
    return healthTools;
  }
  
  // CORRECTED handling for Creative & Entertainment
  if (mainCategoryName === "CREATIVE & ENTERTAINMENT") {
    const creativeTools = tools.filter(tool => isCreativeAndEntertainmentTool(tool));
    console.log(`🎭 CORRECTED COUNT: Found ${creativeTools.length} creative & entertainment tools`);
    
    // Enhanced debug logging for Creative & Entertainment
    const creativeTitles = creativeTools.slice(0, 15).map(t => `${t.title} (${t.category})`);
    console.log(`🎭 CORRECTED Sample Creative Tools:`, creativeTitles);
    
    return creativeTools;
  }
  
  // Build cache efficiently if not built yet for other categories
  buildToolsCache(tools);
  
  const toolsCacheByMainCategory = getToolsCacheByMainCategory();
  
  // Return cached results instantly for other categories
  const cachedTools = toolsCacheByMainCategory.get(mainCategoryName);
  
  if (cachedTools) {
    console.log(`⚡ CORRECTED CACHE: ${cachedTools.length} tools for "${mainCategoryName}"`);
    return cachedTools;
  }
  
  console.log(`⚠️ No cached tools found for main category: "${mainCategoryName}"`);
  return [];
};
