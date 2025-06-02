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
import { getToolsByMainCategoryEnhanced } from "./enhancedToolFiltering";

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
  
  // CONSOLIDATED: Writing & Content Creation category (handles both old categories)
  if (categoryName === "WRITING & CONTENT CREATION" || 
      categoryName === "Writing & Content Creation" ||
      categoryName === "Content Creation & Writing Tools" ||
      categoryName === "Writing & Content Enhancement" ||
      categoryName === "Content Creation Tools") {
    const writingTools = tools.filter(tool => {
      if (!tool.category) return false;
      
      // Match all writing and content related categories
      const writingCategories = [
        "Content Creation & Writing Tools",
        "Writing & Content Creation", 
        "Writing & Content Enhancement",
        "Content Creation Tools",
        "Writing & Content",
        "Creative Writing Tools",
        "Grammar And Writing Assistants",
        "AI Writing Tools",
        "Content Creation And Writing Tools"
      ];
      
      return writingCategories.some(cat => isSimilarCategory(tool.category!, cat));
    });
    console.log(`✍️ CONSOLIDATED WRITING FILTER: Found ${writingTools.length} writing & content tools`);
    return writingTools;
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
  console.log(`🔢 ENHANCED COUNTING: Starting count calculation for ${tools.length} total tools`);
  
  const mainCategoryCounts: MainCategoryCounts = {};
  
  // Calculate counts for each main category using ENHANCED detection
  mainCategories.forEach(mainCat => {
    const categoryTools = getToolsByMainCategoryEnhanced(tools, mainCat.name);
    const toolCount = categoryTools.length;
    
    mainCategoryCounts[mainCat.name] = toolCount;
    console.log(`📊 ${mainCat.name}: ${toolCount} tools (enhanced detection)`);
  });
  
  // Enhanced verification
  const totalCounted = Object.values(mainCategoryCounts).reduce((sum, count) => sum + count, 0);
  console.log(`🎯 ENHANCED ACCURACY CHECK: ${totalCounted} tools counted across main categories vs ${tools.length} total tools`);
  
  return mainCategoryCounts;
};

export const getToolsByMainCategory = (tools: Tool[], mainCategoryName: string): Tool[] => {
  console.log(`🔍 ENHANCED RETRIEVAL: Getting tools for "${mainCategoryName}" from ${tools.length} total tools`);
  
  // Use enhanced filtering for all main categories
  const enhancedTools = getToolsByMainCategoryEnhanced(tools, mainCategoryName);
  
  console.log(`⚡ ENHANCED RESULT: ${enhancedTools.length} tools for "${mainCategoryName}"`);
  
  // Enhanced debug logging
  const sampleTitles = enhancedTools.slice(0, 15).map(t => `${t.title} (${t.category})`);
  console.log(`📝 Enhanced Sample Tools:`, sampleTitles);
  
  return enhancedTools;
};
