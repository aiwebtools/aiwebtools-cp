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
  console.log(`🔍 Getting tools for category "${categoryName}" from ${tools.length} total tools`);
  
  // Special handling for specific categories with enhanced filtering
  if (categoryName === "VIDEO & MULTIMEDIA" || 
      categoryName === "Video Tools" || 
      categoryName === "Video & Content Tools") {
    const videoTools = tools.filter(tool => isVideoRelatedTool(tool));
    console.log(`🎬 Found ${videoTools.length} actual video tools`);
    return videoTools;
  }
  
  if (categoryName === "IMAGE & DESIGN AI TOOLS" || 
      categoryName === "Image & Design" || 
      categoryName === "Image & Design Tools") {
    const imageDesignTools = getImageAndDesignTools(tools, categoryName);
    console.log(`🎨 Found ${imageDesignTools.length} actual Image & Design tools`);
    return imageDesignTools;
  }
  
  // Continue with existing logic for other categories...
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
  
  return tools.filter(tool => tool.category && isSimilarCategory(tool.category, categoryName));
};

export const getMainCategoriesWithCounts = (tools: Tool[]): MainCategoryCounts => {
  console.log(`🔢 COUNTING: Starting count calculation for ${tools.length} total tools`);
  
  const mainCategoryCounts: MainCategoryCounts = {};
  
  // Calculate counts for each main category using enhanced detection
  mainCategories.forEach(mainCat => {
    if (mainCat.name === "ALL AI TOOLS") {
      // Special case: ALL AI TOOLS gets the total count
      mainCategoryCounts[mainCat.name] = tools.length;
      console.log(`📊 ${mainCat.name}: ${tools.length} tools (total count)`);
    } else {
      // Use enhanced filtering for other categories
      const categoryTools = getToolsByMainCategoryEnhanced(tools, mainCat.name);
      const toolCount = categoryTools.length;
      mainCategoryCounts[mainCat.name] = toolCount;
      console.log(`📊 ${mainCat.name}: ${toolCount} tools (enhanced detection)`);
    }
  });
  
  const totalCounted = Object.values(mainCategoryCounts).reduce((sum, count) => sum + count, 0);
  console.log(`🎯 ACCURACY CHECK: ${totalCounted} tools counted vs ${tools.length} total tools`);
  
  return mainCategoryCounts;
};

export const getToolsByMainCategory = (tools: Tool[], mainCategoryName: string): Tool[] => {
  console.log(`🔍 RETRIEVAL: Getting tools for "${mainCategoryName}" from ${tools.length} total tools`);
  
  // Use enhanced filtering for all main categories
  const enhancedTools = getToolsByMainCategoryEnhanced(tools, mainCategoryName);
  
  console.log(`⚡ RESULT: ${enhancedTools.length} tools for "${mainCategoryName}"`);
  
  return enhancedTools;
};
