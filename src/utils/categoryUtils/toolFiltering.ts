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
import { allTools } from "@/data/toolsData";
import { isGamingEntertainmentTool } from "./gamingEntertainmentDetection";
import { isSecurityPrivacyTool } from "./securityPrivacyDetection";

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
    
    // ALL AI TOOLS should return the total count
    if (mainCat.name === "ALL AI TOOLS") {
      toolCount = tools.length;
      console.log(`🌍 ${mainCat.name}: ${toolCount} tools (all tools)`);
    } else if (mainCat.name === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
      const healthTools = tools.filter(tool => isHealthAndWellnessTool(tool));
      toolCount = healthTools.length;
      console.log(`🏥 ${mainCat.name}: ${toolCount} tools (enhanced detection)`);
    } else if (mainCat.name === "CREATIVE & ENTERTAINMENT") {
      const creativeTools = tools.filter(tool => isCreativeAndEntertainmentTool(tool));
      toolCount = creativeTools.length;
      console.log(`🎭 FIXED ${mainCat.name}: ${toolCount} tools (corrected detection)`);
    } else if (mainCat.name === "GAMING & ENTERTAINMENT") {
      const gamingTools = tools.filter(tool => isGamingEntertainmentTool(tool));
      toolCount = gamingTools.length;
      console.log(`🎮 ${mainCat.name}: ${toolCount} tools (enhanced detection)`);
    } else if (mainCat.name === "SECURITY & PRIVACY") {
      const securityTools = tools.filter(tool => isSecurityPrivacyTool(tool));
      toolCount = securityTools.length;
      console.log(`🔒 ${mainCat.name}: ${toolCount} tools (enhanced detection)`);
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
  }
  
  // Enhanced handling for Gaming & Entertainment
  else if (mainCategoryName === "GAMING & ENTERTAINMENT") {
    categoryTools = tools.filter(tool => isGamingEntertainmentTool(tool));
    console.log(`🎮 Found ${categoryTools.length} gaming & entertainment tools`);
  }
  
  // Enhanced handling for Security & Privacy
  else if (mainCategoryName === "SECURITY & PRIVACY") {
    categoryTools = tools.filter(tool => isSecurityPrivacyTool(tool));
    console.log(`🔒 Found ${categoryTools.length} security & privacy tools`);
  }
  
  // ALL AI TOOLS - return everything
  else if (mainCategoryName === "ALL AI TOOLS") {
    categoryTools = [...tools];
    console.log(`🌍 ALL AI TOOLS: Returning all ${categoryTools.length} tools`);
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
  
  // 🎬 PRIORITY SORTING: Prioritize tools whose category DIRECTLY matches the main category name
  const sortedByDirectCategory = sortToolsByDirectCategoryMatch(categoryTools, mainCategoryName);
  
  // 🎯 INTERLEAVE: Apply interleaving pattern - 2 category tools, then 1 AI Web Tools GPT
  const interleavedTools = interleaveAIWebToolsGPTs(sortedByDirectCategory);
  
  console.log(`🎯 Main Category "${mainCategoryName}": ${interleavedTools.length} tools with interleaved GPTs (2 category tools, then 1 GPT)`);
  
  return interleavedTools;
};

// Helper function to interleave AI Web Tools GPTs after every 2 category tools
// ONLY injects GPTs that are already matched to this category - no random GPT injection
const interleaveAIWebToolsGPTs = (categoryTools: Tool[]): Tool[] => {
  // Separate GPTs that are IN THIS CATEGORY from other category tools
  const gptsInCategory: Tool[] = [];
  const nonGPTsInCategory: Tool[] = [];
  
  categoryTools.forEach(tool => {
    if (isAIWebToolsGPT(tool)) {
      gptsInCategory.push(tool);
    } else {
      nonGPTsInCategory.push(tool);
    }
  });
  
  console.log(`🔄 Interleaving: ${nonGPTsInCategory.length} category tools + ${gptsInCategory.length} AI Web Tools GPTs available for injection`);
  
  // If no GPTs in this category, just return category tools as-is
  if (gptsInCategory.length === 0) {
    return categoryTools;
  }
  
  // If no non-GPT tools, return the category tools as-is
  if (nonGPTsInCategory.length === 0) {
    return categoryTools;
  }
  
  // Interleave: 2 category tools, then 1 GPT from THIS category, repeat
  const result: Tool[] = [];
  let categoryIndex = 0;
  let gptIndex = 0;
  
  while (categoryIndex < nonGPTsInCategory.length) {
    // Add 2 category tools
    for (let i = 0; i < 2 && categoryIndex < nonGPTsInCategory.length; i++) {
      result.push(nonGPTsInCategory[categoryIndex]);
      categoryIndex++;
    }
    
    // Add 1 GPT from this category (if available)
    if (gptIndex < gptsInCategory.length) {
      result.push(gptsInCategory[gptIndex]);
      gptIndex++;
    }
  }
  
  // Add any remaining GPTs at the end
  while (gptIndex < gptsInCategory.length) {
    result.push(gptsInCategory[gptIndex]);
    gptIndex++;
  }
  
  console.log(`✅ Interleaved result: ${result.length} tools (${gptIndex} GPTs injected)`);
  
  return result;
};

// Helper function to prioritize tools whose category directly matches the main category name
const sortToolsByDirectCategoryMatch = (tools: Tool[], mainCategoryName: string): Tool[] => {
  // Extract key terms from the main category name for matching
  const categoryKeywords = mainCategoryName.toLowerCase().split(/[\s&]+/).filter(w => w.length > 2);
  
  // Separate tools into direct matches and related tools
  const directMatches: Tool[] = [];
  const relatedTools: Tool[] = [];
  
  tools.forEach(tool => {
    const toolCategory = (tool.category || '').toLowerCase();
    
    // Check if the tool's category directly contains the main category keywords
    const isDirectMatch = categoryKeywords.some(keyword => 
      toolCategory.includes(keyword) || 
      (keyword === 'video' && toolCategory.includes('video')) ||
      (keyword === 'multimedia' && toolCategory.includes('multimedia')) ||
      (keyword === 'image' && toolCategory.includes('image')) ||
      (keyword === 'design' && toolCategory.includes('design')) ||
      (keyword === 'audio' && toolCategory.includes('audio')) ||
      (keyword === 'voice' && toolCategory.includes('voice')) ||
      (keyword === 'education' && toolCategory.includes('education')) ||
      (keyword === 'learning' && toolCategory.includes('learning')) ||
      (keyword === 'business' && toolCategory.includes('business')) ||
      (keyword === 'marketing' && toolCategory.includes('marketing')) ||
      (keyword === 'data' && toolCategory.includes('data')) ||
      (keyword === 'analytics' && toolCategory.includes('analytics'))
    );
    
    if (isDirectMatch) {
      directMatches.push(tool);
    } else {
      relatedTools.push(tool);
    }
  });
  
  console.log(`📂 Direct category matches: ${directMatches.length}, Related: ${relatedTools.length}`);
  
  // Return direct matches first, then related tools
  return [...directMatches, ...relatedTools];
};
