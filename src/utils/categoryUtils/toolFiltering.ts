
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
  console.log(`🔍 REFINED FILTERING: Getting tools for category "${categoryName}" from ${tools.length} total tools`);
  
  // Special handling for AI Web Tools Originals category
  if (categoryName === "AI WEB TOOLS ORIGINALS" || categoryName === "AI Web Tools Originals") {
    return tools.filter(tool => isAIWebToolsGPT(tool));
  }
  
  // REFINED: Video & Multimedia category with ultra-strict filtering
  if (categoryName === "VIDEO & MULTIMEDIA" || 
      categoryName === "Video Tools" || 
      categoryName === "Video & Content Tools" ||
      categoryName === "Advanced Video Tools" ||
      categoryName === "Video Generation Tools" ||
      categoryName === "Video Editing Tools" ||
      categoryName === "Video Marketing Tools" ||
      categoryName === "Video Business Tools") {
    const videoTools = tools.filter(tool => isVideoRelatedTool(tool));
    console.log(`🎬 REFINED VIDEO FILTER: Found ${videoTools.length} actual video tools`);
    console.log(`🎬 Sample video tools:`, videoTools.slice(0, 10).map(t => `${t.title} (${t.category})`));
    return videoTools;
  }
  
  // REFINED: Image & Design category with strict filtering
  if (categoryName === "IMAGE & DESIGN AI TOOLS" || 
      categoryName === "Image & Design" || 
      categoryName === "Image & Design Tools" ||
      categoryName === "Image & Design AI Tools") {
    const imageDesignTools = getImageAndDesignTools(tools, categoryName);
    console.log(`🎨 REFINED: Found ${imageDesignTools.length} actual Image & Design tools`);
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
  
  // REFINED handling for Health, Wellness & Personal Lifestyle category
  if (categoryName === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
    const healthTools = tools.filter(tool => isHealthAndWellnessTool(tool));
    console.log(`🏥 REFINED HEALTH FILTER: Found ${healthTools.length} health & wellness tools`);
    return healthTools;
  }
  
  // REFINED handling for Creative & Entertainment category
  if (categoryName === "CREATIVE & ENTERTAINMENT") {
    const creativeTools = tools.filter(tool => isCreativeAndEntertainmentTool(tool));
    console.log(`🎭 REFINED CREATIVE FILTER: Found ${creativeTools.length} tools for Creative & Entertainment`);
    console.log(`🎭 Sample creative tools:`, creativeTools.slice(0, 10).map(t => `${t.title} (${t.category})`));
    return creativeTools;
  }
  
  // Regular category filtering with enhanced similarity matching
  return tools.filter(tool => tool.category && isSimilarCategory(tool.category, categoryName));
};

export const getMainCategoriesWithCounts = (tools: Tool[]): MainCategoryCounts => {
  console.log(`🔢 REFINED COUNTING: Starting count calculation for ${tools.length} total tools`);
  
  const mainCategoryCounts: MainCategoryCounts = {};
  
  // Calculate counts for each main category using REFINED detection
  mainCategories.forEach(mainCat => {
    let toolCount = 0;
    
    if (mainCat.name === "VIDEO & MULTIMEDIA") {
      const videoTools = tools.filter(tool => isVideoRelatedTool(tool));
      toolCount = videoTools.length;
      console.log(`🎬 ${mainCat.name}: ${toolCount} tools (refined video detection)`);
    } else if (mainCat.name === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
      const healthTools = tools.filter(tool => isHealthAndWellnessTool(tool));
      toolCount = healthTools.length;
      console.log(`🏥 ${mainCat.name}: ${toolCount} tools (refined health detection)`);
    } else if (mainCat.name === "CREATIVE & ENTERTAINMENT") {
      const creativeTools = tools.filter(tool => isCreativeAndEntertainmentTool(tool));
      toolCount = creativeTools.length;
      console.log(`🎭 REFINED ${mainCat.name}: ${toolCount} tools (refined creative detection)`);
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
  
  // Refined verification
  const totalCounted = Object.values(mainCategoryCounts).reduce((sum, count) => sum + count, 0);
  console.log(`🎯 REFINED ACCURACY CHECK: ${totalCounted} tools counted across main categories vs ${tools.length} total tools`);
  
  return mainCategoryCounts;
};

export const getToolsByMainCategory = (tools: Tool[], mainCategoryName: string): Tool[] => {
  console.log(`🔍 REFINED RETRIEVAL: Getting tools for "${mainCategoryName}" from ${tools.length} total tools`);
  
  // REFINED handling for Video & Multimedia
  if (mainCategoryName === "VIDEO & MULTIMEDIA") {
    const videoTools = tools.filter(tool => isVideoRelatedTool(tool));
    console.log(`🎬 REFINED VIDEO COUNT: Found ${videoTools.length} video & multimedia tools`);
    
    // Enhanced debug logging for Video & Multimedia
    const videoTitles = videoTools.slice(0, 15).map(t => `${t.title} (${t.category})`);
    console.log(`🎬 REFINED Sample Video Tools:`, videoTitles);
    
    return videoTools;
  }
  
  // REFINED handling for Health, Wellness & Personal Lifestyle
  if (mainCategoryName === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
    const healthTools = tools.filter(tool => isHealthAndWellnessTool(tool));
    console.log(`🏥 REFINED COUNT: Found ${healthTools.length} health & wellness tools`);
    return healthTools;
  }
  
  // REFINED handling for Creative & Entertainment
  if (mainCategoryName === "CREATIVE & ENTERTAINMENT") {
    const creativeTools = tools.filter(tool => isCreativeAndEntertainmentTool(tool));
    console.log(`🎭 REFINED COUNT: Found ${creativeTools.length} creative & entertainment tools`);
    
    // Enhanced debug logging for Creative & Entertainment
    const creativeTitles = creativeTools.slice(0, 15).map(t => `${t.title} (${t.category})`);
    console.log(`🎭 REFINED Sample Creative Tools:`, creativeTitles);
    
    return creativeTools;
  }
  
  // Build cache efficiently if not built yet for other categories
  buildToolsCache(tools);
  
  const toolsCacheByMainCategory = getToolsCacheByMainCategory();
  
  // Return cached results instantly for other categories
  const cachedTools = toolsCacheByMainCategory.get(mainCategoryName);
  
  if (cachedTools) {
    console.log(`⚡ REFINED CACHE: ${cachedTools.length} tools for "${mainCategoryName}"`);
    return cachedTools;
  }
  
  console.log(`⚠️ No cached tools found for main category: "${mainCategoryName}"`);
  return [];
};
