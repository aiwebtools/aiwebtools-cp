
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
  get3DVisualizationTools
} from "./categoryMatching";
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
  console.log(`📊 Total available tools in database: ${tools.length}`);
  
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
    
    console.log(`🎯 AI Web Tools GPTs: ${aiWebToolsGPTs.length}, Other tools: ${otherTools.length}`);
    
    const allToolsWithPriority = [...aiWebToolsGPTs, ...otherTools];
    console.log(`✅ Returning total of ${allToolsWithPriority.length} tools for ALL AI TOOLS`);
    
    return allToolsWithPriority;
  }
  
  // Special case for "DATA & ANALYTICS AI TOOLS" - use enhanced matching
  if (mainCategoryName === "DATA & ANALYTICS AI TOOLS") {
    console.log(`📊 DATA & ANALYTICS AI TOOLS requested - using enhanced matching`);
    const analyticsTools = getDataAnalyticsTools(tools, mainCategoryName);
    console.log(`✅ Found ${analyticsTools.length} analytics tools`);
    return analyticsTools;
  }
  
  // Special case for "AUTOMATION PLATFORMS" - use enhanced matching
  if (mainCategoryName === "AUTOMATION PLATFORMS") {
    console.log(`🤖 AUTOMATION PLATFORMS requested - using enhanced matching`);
    const automationTools = getAutomationPlatformsTools(tools, mainCategoryName);
    console.log(`✅ Found ${automationTools.length} automation tools`);
    return automationTools;
  }
  
  // Special case for "AI CHAT & ASSISTANTS" - use enhanced matching
  if (mainCategoryName === "AI CHAT & ASSISTANTS") {
    console.log(`💬 AI CHAT & ASSISTANTS requested - using enhanced matching`);
    const chatAssistantTools = getAIChatAssistantsTools(tools, mainCategoryName);
    console.log(`✅ Found ${chatAssistantTools.length} chat & assistant tools`);
    return chatAssistantTools;
  }
  
  // Special case for "CONTENT CREATION & WRITING" - use enhanced matching
  if (mainCategoryName === "CONTENT CREATION & WRITING") {
    console.log(`✍️ CONTENT CREATION & WRITING requested - using enhanced matching`);
    const contentWritingTools = getContentCreationWritingTools(tools, mainCategoryName);
    console.log(`✅ Found ${contentWritingTools.length} content creation & writing tools`);
    return contentWritingTools;
  }
  
  // Special case for "IMAGE & DESIGN TOOLS" - use enhanced matching
  if (mainCategoryName === "IMAGE & DESIGN TOOLS") {
    console.log(`🎨 IMAGE & DESIGN TOOLS requested - using enhanced matching`);
    const imageDesignTools = getImageDesignTools(tools, mainCategoryName);
    console.log(`✅ Found ${imageDesignTools.length} image & design tools`);
    return imageDesignTools;
  }
  
  // Special enhanced handling for VIDEO & MULTIMEDIA category
  if (mainCategoryName === "VIDEO & MULTIMEDIA") {
    console.log(`🎬 VIDEO & MULTIMEDIA category requested - using enhanced matching`);
    const videoMultimediaTools = getVideoMultimediaTools(tools, mainCategoryName);
    console.log(`✅ Found ${videoMultimediaTools.length} video & multimedia tools`);
    return videoMultimediaTools;
  }
  
  // Special enhanced handling for AUDIO & VOICE TOOLS category
  if (mainCategoryName === "AUDIO & VOICE TOOLS") {
    console.log(`🎵 AUDIO & VOICE TOOLS category requested - using enhanced matching`);
    const audioVoiceTools = getAudioVoiceTools(tools, mainCategoryName);
    console.log(`✅ Found ${audioVoiceTools.length} audio & voice tools`);
    return audioVoiceTools;
  }
  
  // Special enhanced handling for 3D & VISUALIZATION category
  if (mainCategoryName === "3D & VISUALIZATION") {
    console.log(`🧊 3D & VISUALIZATION category requested - using enhanced matching`);
    const threeDVisualizationTools = get3DVisualizationTools(tools, mainCategoryName);
    console.log(`✅ Found ${threeDVisualizationTools.length} 3D & visualization tools`);
    return threeDVisualizationTools;
  }
  
  // Find the main category configuration
  const mainCategory = mainCategories.find(cat => cat.name === mainCategoryName);
  
  if (!mainCategory) {
    console.warn(`❌ Main category "${mainCategoryName}" not found`);
    return [];
  }
  
  console.log(`📂 Found main category with ${mainCategory.subcategories.length} subcategories`);
  
  // Get tools that match any of the subcategories
  const categoryTools = tools.filter(tool => {
    if (!tool.category) return false;
    
    return mainCategory.subcategories.some(subcat => {
      const normalizedToolCategory = tool.category.toLowerCase().trim();
      const normalizedSubcat = subcat.toLowerCase().trim();
      
      return normalizedToolCategory === normalizedSubcat ||
             normalizedToolCategory.includes(normalizedSubcat) ||
             normalizedSubcat.includes(normalizedToolCategory);
    });
  });
  
  console.log(`✅ Found ${categoryTools.length} tools for main category "${mainCategoryName}"`);
  
  return categoryTools;
};
