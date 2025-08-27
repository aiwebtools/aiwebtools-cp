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
import { applyAIWebToolsPrioritization, getAIWebToolsPriorityScore } from "@/utils/aiWebToolsPrioritization";
import { filterBusinessTools } from "./businessCategoryFiltering";

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
  let categoryRelevantTools: Tool[] = [];
  let otherTools: Tool[] = [];
  
  // First, separate tools into category-relevant and others
  const allFilteredTools = (() => {
    // 🚀 ENHANCED: Apply proper business filtering for Business Operations & Productivity category
    if (categoryName === "BUSINESS OPERATIONS & PRODUCTIVITY") {
      const businessCandidates = tools.filter(tool => tool.category && isSimilarCategory(tool.category, categoryName));
      return filterBusinessTools(businessCandidates);
    }
    
    // Special handling for AI Web Tools Originals category
    else if (categoryName === "AI WEB TOOLS ORIGINALS" || 
             categoryName === "AI Web Tools Originals" || 
             categoryName === "AIWebTools GPTs Collection" ||
             categoryName === "ai-originals") {
      return tools.filter(tool => isAIWebToolsGPT(tool));
    }
    
    // FIXED: Unified handling for Image & Design category - use ONLY ONE standardized name
    else if (categoryName === "IMAGE & DESIGN AI TOOLS" || 
        categoryName === "Image & Design" || 
        categoryName === "Image & Design Tools" ||
        categoryName === "Image & Design AI Tools") {
      return getImageAndDesignTools(tools, categoryName);
    }
    
    // Special handling for Data & Analytics category
    else if (categoryName === "DATA & ANALYTICS AI TOOLS" || categoryName === "Data & Analytics Tools") {
      return getDataAnalyticsTools(tools, categoryName);
    }
    
    // Special handling for Marketing & Sales category
    else if (categoryName === "MARKETING & SALES AI TOOLS" || categoryName === "Marketing & Analytics" || categoryName === "E-commerce & Marketing Tools" || categoryName === "Business & Sales Tools") {
      return getMarketingSalesTools(tools, categoryName);
    }
    
    // Enhanced handling for Communication & Collaboration category
    else if (categoryName === "COMMUNICATION & COLLABORATION AI TOOLS" || categoryName === "Communication & Entertainment" || categoryName === "Communication Tools") {
      return getCommunicationCollaborationTools(tools, categoryName);
    }
    
    // Special handling for Automation Platforms category
    else if (categoryName === "AUTOMATION PLATFORMS" || categoryName === "Automation Platforms" || categoryName === "Automation & Workflows") {
      return getAutomationPlatformsTools(tools, categoryName);
    }
    
    // Enhanced handling for Health, Wellness & Personal Lifestyle category
    else if (categoryName === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
      return tools.filter(tool => isHealthAndWellnessTool(tool));
    }
    
    // Enhanced handling for Creative & Entertainment category - FIXED LOGIC
    else if (categoryName === "CREATIVE & ENTERTAINMENT") {
      return tools.filter(tool => isCreativeAndEntertainmentTool(tool));
    }
    
    // Regular category filtering with enhanced similarity matching
    else {
      return tools.filter(tool => tool.category && isSimilarCategory(tool.category, categoryName));
    }
  })();

  // Separate strictly relevant tools from loosely related ones
  allFilteredTools.forEach(tool => {
    const isStrictlyRelevant = tool.category && isSimilarCategory(tool.category, categoryName);
    if (isStrictlyRelevant) {
      categoryRelevantTools.push(tool);
    } else {
      otherTools.push(tool);
    }
  });

  // Add some randomization to prevent same ordering while preserving priorities
  const addRandomization = (toolsArray: Tool[]) => {
    return toolsArray.sort((a, b) => {
      // First by priority scores (existing logic)
      const aPriority = getAIWebToolsPriorityScore(a);
      const bPriority = getAIWebToolsPriorityScore(b);
      if (aPriority !== bPriority) return bPriority - aPriority;
      
      // Then by rating
      const ratingDiff = (b.rating || 0) - (a.rating || 0);
      if (ratingDiff !== 0) return ratingDiff;
      
      // Add subtle randomization factor (keeps similar tools somewhat randomized)
      const randomFactor = (Math.sin(a.title.length + b.title.length + Date.now()) * 0.1);
      
      // Finally by title with randomization
      return a.title.localeCompare(b.title) + randomFactor;
    });
  };

  // Apply prioritization and randomization to both groups
  const prioritizedCategoryTools = applyAIWebToolsPrioritization(addRandomization([...categoryRelevantTools]));
  const prioritizedOtherTools = applyAIWebToolsPrioritization(addRandomization([...otherTools]));
  
  // Combine: category-relevant tools first, then others
  const finalResult = [...prioritizedCategoryTools, ...prioritizedOtherTools];
  
  console.log(`🎯 Category "${categoryName}": ${finalResult.length} total tools`);
  console.log(`   📂 Category-relevant: ${prioritizedCategoryTools.length} tools`);
  console.log(`   🔗 Related/other: ${prioritizedOtherTools.length} tools`);
  
  return finalResult;
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
  
  let categoryTools: Tool[] = [];
  
  // CORRECTED handling for Health, Wellness & Personal Lifestyle
  if (mainCategoryName === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
    categoryTools = tools.filter(tool => isHealthAndWellnessTool(tool));
    console.log(`🏥 CORRECTED COUNT: Found ${categoryTools.length} health & wellness tools`);
  }
  
  // CORRECTED handling for Creative & Entertainment
  else if (mainCategoryName === "CREATIVE & ENTERTAINMENT") {
    categoryTools = tools.filter(tool => isCreativeAndEntertainmentTool(tool));
    console.log(`🎭 CORRECTED COUNT: Found ${categoryTools.length} creative & entertainment tools`);
    
    // Enhanced debug logging for Creative & Entertainment
    const creativeTitles = categoryTools.slice(0, 15).map(t => `${t.title} (${t.category})`);
    console.log(`🎭 CORRECTED Sample Creative Tools:`, creativeTitles);
  }
  
  else {
    // Build cache efficiently if not built yet for other categories
    buildToolsCache(tools);
    
    const toolsCacheByMainCategory = getToolsCacheByMainCategory();
    
    // Return cached results instantly for other categories
    const cachedTools = toolsCacheByMainCategory.get(mainCategoryName);
    
    if (cachedTools) {
      console.log(`⚡ CORRECTED CACHE: ${cachedTools.length} tools for "${mainCategoryName}"`);
      categoryTools = cachedTools;
    } else {
      console.log(`⚠️ No cached tools found for main category: "${mainCategoryName}"`);
      return [];
    }
  }
  
  // 🚀 PRIORITY: Apply AI Web Tools GPT prioritization to all main category results
  const prioritizedTools = applyAIWebToolsPrioritization(categoryTools);
  
  console.log(`🎯 Main Category "${mainCategoryName}": ${prioritizedTools.length} tools with AI Web Tools GPTs prioritized first`);
  
  return prioritizedTools;
};
