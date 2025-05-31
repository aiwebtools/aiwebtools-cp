
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
  getHealthWellnessTools
} from "./categoryMatching";
import { getSpecializedNicheTools } from "./matching/specializedNicheMatching";
import { CategoryCounts, MainCategoryCounts } from "./types";

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
  // Special handling for AI Development & Platforms category
  if (categoryName === "AI DEVELOPMENT & PLATFORMS" || categoryName === "AI Development & Platforms") {
    return getAIDevelopmentPlatformsTools(tools, categoryName);
  }
  
  // Special handling for Data & Analytics category
  if (categoryName === "DATA & ANALYTICS AI TOOLS" || categoryName === "Data & Analytics Tools") {
    return getDataAnalyticsTools(tools, categoryName);
  }
  
  // Enhanced handling for Marketing & Sales category
  if (categoryName === "MARKETING & SALES SOLUTIONS" || 
      categoryName === "MARKETING & SALES AI TOOLS" || 
      categoryName === "Marketing & Analytics" || 
      categoryName === "E-commerce & Marketing Tools" || 
      categoryName === "Business & Sales Tools" ||
      categoryName === "Marketing & Social Media" ||
      categoryName === "Marketing Tools" ||
      categoryName === "Social Media Tools" ||
      categoryName === "Sales & Marketing" ||
      categoryName === "Ecommerce & Marketing Tools" ||
      categoryName === "E-commerce & Marketing" ||
      categoryName === "Social Media & Marketing") {
    return getMarketingSalesTools(tools, categoryName);
  }
  
  // Enhanced handling for Communication & Collaboration category
  if (categoryName === "COMMUNICATION & COLLABORATION AI TOOLS" || 
      categoryName === "COMMUNICATION & COLLABORATION TOOLS" ||
      categoryName === "Communication & Collaboration" || 
      categoryName === "Communication & Entertainment" || 
      categoryName === "Communication Tools" ||
      categoryName === "Collaboration Tools" ||
      categoryName === "Team Communication" ||
      categoryName === "Team Collaboration") {
    return getCommunicationCollaborationTools(tools, categoryName);
  }
  
  // Special handling for Automation Platforms category
  if (categoryName === "AUTOMATION PLATFORMS" || categoryName === "Automation Platforms" || categoryName === "Automation & Workflows") {
    return getAutomationPlatformsTools(tools, categoryName);
  }
  
  // Special handling for AI Chat & Assistants category
  if (categoryName === "AI CHAT & ASSISTANTS" || categoryName === "AI Chat & Assistants") {
    return getAIChatAssistantsTools(tools, categoryName);
  }
  
  // Special handling for Content Creation & Writing category
  if (categoryName === "CONTENT CREATION & WRITING" || categoryName === "Content Creation & Writing") {
    return getContentCreationWritingTools(tools, categoryName);
  }
  
  // Special handling for Image & Design Tools category
  if (categoryName === "IMAGE & DESIGN TOOLS" || categoryName === "Image & Design") {
    return getImageDesignTools(tools, categoryName);
  }
  
  // Special handling for Video & Multimedia category
  if (categoryName === "VIDEO & MULTIMEDIA" || categoryName === "Video & Multimedia") {
    return getVideoMultimediaTools(tools, categoryName);
  }
  
  // Special handling for Audio & Voice Tools category
  if (categoryName === "AUDIO & VOICE TOOLS" || categoryName === "Audio & Voice Tools") {
    return getAudioVoiceTools(tools, categoryName);
  }
  
  // Special handling for 3D & Visualization category
  if (categoryName === "3D & VISUALIZATION" || categoryName === "3D & Visualization Tools") {
    return get3DVisualizationTools(tools, categoryName);
  }
  
  // Enhanced handling for Business Operations & Productivity category
  if (categoryName === "BUSINESS OPERATIONS & PRODUCTIVITY" || 
      categoryName === "Business & Productivity" ||
      categoryName === "Business Tools" ||
      categoryName === "Business & Team Tools" ||
      categoryName === "Productivity & Utilities" ||
      categoryName === "Meeting & Transcription Tools" ||
      categoryName === "Email Management Tools") {
    return getBusinessOperationsProductivityTools(tools, categoryName);
  }
  
  // Regular category filtering with enhanced similarity matching
  return tools.filter(tool => tool.category && isSimilarCategory(tool.category, categoryName));
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
  
  // Special case for "ALL AI TOOLS" - return ALL tools with AI Web Tools GPTs prioritized
  if (mainCategoryName === "ALL AI TOOLS") {
    const aiWebToolsGPTs = tools.filter(tool => 
      tool.directUrl?.includes('lovable.app') || 
      tool.directUrl?.includes('aiwebtools')
    );
    
    const otherTools = tools.filter(tool => 
      !tool.directUrl?.includes('lovable.app') && 
      !tool.directUrl?.includes('aiwebtools')
    );
    
    return [...aiWebToolsGPTs, ...otherTools];
  }
  
  // Use optimized category-specific functions for better performance
  switch (mainCategoryName) {
    case "AI DEVELOPMENT & PLATFORMS":
      return getAIDevelopmentPlatformsTools(tools, mainCategoryName);
    case "EDUCATION & LEARNING":
      return getEducationLearningTools(tools, mainCategoryName);
    case "HEALTH & WELLNESS":
      return getHealthWellnessTools(tools, mainCategoryName);
    case "SPECIALIZED & NICHE TOOLS":
      return getSpecializedNicheTools(tools, mainCategoryName);
    case "DATA & ANALYTICS AI TOOLS":
      return getDataAnalyticsTools(tools, mainCategoryName);
    case "MARKETING & SALES SOLUTIONS":
      return getMarketingSalesTools(tools, mainCategoryName);
    case "COMMUNICATION & COLLABORATION AI TOOLS":
      return getCommunicationCollaborationTools(tools, mainCategoryName);
    case "AUTOMATION PLATFORMS":
      return getAutomationPlatformsTools(tools, mainCategoryName);
    case "AI CHAT & ASSISTANTS":
      return getAIChatAssistantsTools(tools, mainCategoryName);
    case "CONTENT CREATION & WRITING":
      return getContentCreationWritingTools(tools, mainCategoryName);
    case "IMAGE & DESIGN TOOLS":
      return getImageDesignTools(tools, mainCategoryName);
    case "VIDEO & MULTIMEDIA":
      return getVideoMultimediaTools(tools, mainCategoryName);
    case "AUDIO & VOICE TOOLS":
      return getAudioVoiceTools(tools, mainCategoryName);
    case "3D & VISUALIZATION":
      return get3DVisualizationTools(tools, mainCategoryName);
    case "BUSINESS OPERATIONS & PRODUCTIVITY":
      return getBusinessOperationsProductivityTools(tools, mainCategoryName);
    default:
      // Fallback to original logic for unmapped categories
      const mainCategory = mainCategories.find(cat => cat.name === mainCategoryName);
      if (!mainCategory) return [];
      
      return tools.filter(tool => {
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
};
