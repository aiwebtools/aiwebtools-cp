
import { Tool } from "@/types/tools";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { isSimilarCategory } from "./normalization";
import { isVideoRelatedTool } from "./videoDetection";
import { 
  getDataAnalyticsTools, 
  getMarketingSalesTools, 
  getCommunicationCollaborationTools,
  getAutomationPlatformsTools,
  getAIChatAssistantsTools,
  getContentCreationWritingTools,
  getImageDesignTools,
  getVideoMultimediaTools,
  getAudioVoiceTools,
  get3DVisualizationTools,
  getBusinessOperationsProductivityTools,
  getAIDevelopmentPlatformsTools,
  getEducationLearningTools,
  getHealthWellnessTools,
  getSpecializedNicheTools
} from "./categoryMatching";
import { CategoryCounts, MainCategoryCounts } from "./types";

// PERFORMANCE: Cache for category results to avoid recalculation
const categoryCache = new Map<string, Tool[]>();
const CACHE_SIZE_LIMIT = 50; // Prevent memory leaks

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
  // PERFORMANCE: Check cache first
  const cacheKey = `${categoryName}-${tools.length}`;
  if (categoryCache.has(cacheKey)) {
    console.log(`📦 Cache hit for category: ${categoryName}`);
    return categoryCache.get(cacheKey)!;
  }

  console.log(`🔍 Computing tools for category: ${categoryName}`);
  const startTime = performance.now();

  let result: Tool[] = [];

  // Use specialized matching functions for better performance
  switch (categoryName) {
    case "AI DEVELOPMENT & PLATFORMS":
    case "AI Development & Platforms":
      result = getAIDevelopmentPlatformsTools(tools, categoryName);
      break;
    case "DATA & ANALYTICS AI TOOLS":
    case "Data & Analytics Tools":
      result = getDataAnalyticsTools(tools, categoryName);
      break;
    case "MARKETING & SALES SOLUTIONS":
    case "MARKETING & SALES AI TOOLS":
    case "Marketing & Analytics":
    case "E-commerce & Marketing Tools":
    case "Business & Sales Tools":
    case "Marketing & Social Media":
    case "Marketing Tools":
    case "Social Media Tools":
    case "Sales & Marketing":
    case "Ecommerce & Marketing Tools":
    case "E-commerce & Marketing":
    case "Social Media & Marketing":
      result = getMarketingSalesTools(tools, categoryName);
      break;
    case "COMMUNICATION & COLLABORATION AI TOOLS":
    case "COMMUNICATION & COLLABORATION TOOLS":
    case "Communication & Collaboration":
    case "Communication & Entertainment":
    case "Communication Tools":
    case "Collaboration Tools":
    case "Team Communication":
    case "Team Collaboration":
      result = getCommunicationCollaborationTools(tools, categoryName);
      break;
    case "AUTOMATION PLATFORMS":
    case "Automation Platforms":
    case "Automation & Workflows":
      result = getAutomationPlatformsTools(tools, categoryName);
      break;
    case "AI CHAT & ASSISTANTS":
    case "AI Chat & Assistants":
      result = getAIChatAssistantsTools(tools, categoryName);
      break;
    case "CONTENT CREATION & WRITING":
    case "Content Creation & Writing":
      result = getContentCreationWritingTools(tools, categoryName);
      break;
    case "IMAGE & DESIGN TOOLS":
    case "Image & Design":
      result = getImageDesignTools(tools, categoryName);
      break;
    case "VIDEO & MULTIMEDIA":
    case "Video & Multimedia":
      result = getVideoMultimediaTools(tools, categoryName);
      break;
    case "AUDIO & VOICE TOOLS":
    case "Audio & Voice Tools":
      result = getAudioVoiceTools(tools, categoryName);
      break;
    case "3D & VISUALIZATION":
    case "3D & Visualization Tools":
      result = get3DVisualizationTools(tools, categoryName);
      break;
    case "BUSINESS OPERATIONS & PRODUCTIVITY":
    case "Business & Productivity":
    case "Business Tools":
    case "Business & Team Tools":
    case "Productivity & Utilities":
    case "Meeting & Transcription Tools":
    case "Email Management Tools":
      result = getBusinessOperationsProductivityTools(tools, categoryName);
      break;
    default:
      // Regular category filtering with enhanced similarity matching
      result = tools.filter(tool => tool.category && isSimilarCategory(tool.category, categoryName));
      break;
  }

  const endTime = performance.now();
  console.log(`⚡ Category filtering for ${categoryName} took ${endTime - startTime}ms, found ${result.length} tools`);

  // PERFORMANCE: Cache the result (with size limit)
  if (categoryCache.size >= CACHE_SIZE_LIMIT) {
    const firstKey = categoryCache.keys().next().value;
    categoryCache.delete(firstKey);
  }
  categoryCache.set(cacheKey, result);

  return result;
};

export const getMainCategoriesWithCounts = (tools: Tool[]): MainCategoryCounts => {
  const mainCategoryCounts: MainCategoryCounts = {};
  
  mainCategories.forEach(mainCat => {
    let count = 0;
    mainCat.subcategories.forEach(subcat => {
      const categoryTools = getToolsByCategory(tools, subcat);
      count += categoryTools.length;
    });
    mainCategoryCounts[mainCat.name] = count;
  });
  
  return mainCategoryCounts;
};

export const getToolsByMainCategory = (tools: Tool[], mainCategoryName: string): Tool[] => {
  console.log(`🔍 Getting tools for main category: "${mainCategoryName}"`);
  
  // PERFORMANCE: Check cache first
  const cacheKey = `main-${mainCategoryName}-${tools.length}`;
  if (categoryCache.has(cacheKey)) {
    console.log(`📦 Cache hit for main category: ${mainCategoryName}`);
    return categoryCache.get(cacheKey)!;
  }

  const startTime = performance.now();
  let result: Tool[] = [];

  // Special case for "ALL AI TOOLS" - return ALL tools with AI Web Tools GPTs prioritized
  if (mainCategoryName === "ALL AI TOOLS") {
    console.log(`🌟 ALL AI TOOLS requested - returning all ${tools.length} tools with prioritization`);
    
    const aiWebToolsGPTs = tools.filter(tool => 
      tool.directUrl?.includes('lovable.app') || 
      tool.directUrl?.includes('aiwebtools')
    );
    
    const otherTools = tools.filter(tool => 
      !tool.directUrl?.includes('lovable.app') && 
      !tool.directUrl?.includes('aiwebtools')
    );
    
    result = [...aiWebToolsGPTs, ...otherTools];
  } else {
    // Use specialized functions for better performance
    switch (mainCategoryName) {
      case "AI DEVELOPMENT & PLATFORMS":
        result = getAIDevelopmentPlatformsTools(tools, mainCategoryName);
        break;
      case "EDUCATION & LEARNING":
        result = getEducationLearningTools(tools, mainCategoryName);
        break;
      case "HEALTH & WELLNESS":
        result = getHealthWellnessTools(tools, mainCategoryName);
        break;
      case "SPECIALIZED & NICHE TOOLS":
        result = getSpecializedNicheTools(tools, mainCategoryName);
        break;
      case "DATA & ANALYTICS AI TOOLS":
        result = getDataAnalyticsTools(tools, mainCategoryName);
        break;
      case "MARKETING & SALES SOLUTIONS":
        result = getMarketingSalesTools(tools, mainCategoryName);
        break;
      case "COMMUNICATION & COLLABORATION AI TOOLS":
        result = getCommunicationCollaborationTools(tools, mainCategoryName);
        break;
      case "AUTOMATION PLATFORMS":
        result = getAutomationPlatformsTools(tools, mainCategoryName);
        break;
      case "AI CHAT & ASSISTANTS":
        result = getAIChatAssistantsTools(tools, mainCategoryName);
        break;
      case "CONTENT CREATION & WRITING":
        result = getContentCreationWritingTools(tools, mainCategoryName);
        break;
      case "IMAGE & DESIGN TOOLS":
        result = getImageDesignTools(tools, mainCategoryName);
        break;
      case "VIDEO & MULTIMEDIA":
        result = getVideoMultimediaTools(tools, mainCategoryName);
        break;
      case "AUDIO & VOICE TOOLS":
        result = getAudioVoiceTools(tools, mainCategoryName);
        break;
      case "3D & VISUALIZATION":
        result = get3DVisualizationTools(tools, mainCategoryName);
        break;
      case "BUSINESS OPERATIONS & PRODUCTIVITY":
        result = getBusinessOperationsProductivityTools(tools, mainCategoryName);
        break;
      default:
        // Find the main category configuration
        const mainCategory = mainCategories.find(cat => cat.name === mainCategoryName);
        
        if (!mainCategory) {
          console.warn(`❌ Main category "${mainCategoryName}" not found`);
          result = [];
        } else {
          // Get tools that match any of the subcategories
          result = tools.filter(tool => {
            if (!tool.category) return false;
            
            return mainCategory.subcategories.some(subcat => {
              const normalizedToolCategory = tool.category.toLowerCase().trim();
              const normalizedSubcat = subcat.toLowerCase().trim();
              
              return normalizedToolCategory === normalizedSubcat ||
                     normalizedToolCategory.includes(normalizedSubcat) ||
                     normalizedSubcat.includes(normalizedToolCategory);
            });
          });
        }
        break;
    }
  }

  const endTime = performance.now();
  console.log(`⚡ Main category filtering for ${mainCategoryName} took ${endTime - startTime}ms, found ${result.length} tools`);

  // PERFORMANCE: Cache the result (with size limit)
  if (categoryCache.size >= CACHE_SIZE_LIMIT) {
    const firstKey = categoryCache.keys().next().value;
    categoryCache.delete(firstKey);
  }
  categoryCache.set(cacheKey, result);

  return result;
};
