
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
import { isHealthAndWellnessTool } from "./healthDetection";
import { isIndustrySpecificTool } from "./industryDetection";
import { 
  isAIWebToolsGPT,
  isAIChatAssistantTool,
  isMajorLLM,
  isStrictlyHistoricalTimeRelatedTool,
  isEducationRelatedTool,
  isContentCreationTool,
  isDataAnalyticsTool
} from "./specializedDetection";

// Create a cached mapping of tools by main category for instant lookup
let toolsCacheByMainCategory: Map<string, Tool[]> = new Map();
let cacheBuilt = false;
let lastToolsLength = 0;

// Reset cache only when tools data actually changes
export const resetCache = () => {
  toolsCacheByMainCategory.clear();
  cacheBuilt = false;
  lastToolsLength = 0;
  console.log('🔄 Cache reset - will rebuild on next access');
};

// Build cache once for instant category filtering with performance optimizations
export const buildToolsCache = (tools: Tool[]) => {
  // Only rebuild if tools data has actually changed
  if (cacheBuilt && tools.length === lastToolsLength) {
    console.log('✅ Cache already built and tools unchanged - skipping rebuild');
    return;
  }
  
  console.log('🚀 Building optimized tools cache...');
  const startTime = performance.now();
  
  toolsCacheByMainCategory.clear();
  
  // Pre-process tool collections once with optimized filtering
  const toolCollections = {
    aiWebToolsGPTs: tools.filter(tool => isAIWebToolsGPT(tool)),
    chatRelatedTools: tools.filter(tool => isAIChatAssistantTool(tool)),
    healthAndWellnessTools: tools.filter(tool => isHealthAndWellnessTool(tool)),
    industrySpecificTools: tools.filter(tool => isIndustrySpecificTool(tool)),
    strictHistoricalTools: tools.filter(tool => isStrictlyHistoricalTimeRelatedTool(tool)),
    educationRelatedTools: tools.filter(tool => isEducationRelatedTool(tool)),
    videoRelatedTools: tools.filter(tool => isVideoRelatedTool(tool)),
    contentCreationTools: tools.filter(tool => isContentCreationTool(tool)),
    dataAnalyticsTools: tools.filter(tool => isDataAnalyticsTool(tool)),
    majorLLMs: tools.filter(tool => isMajorLLM(tool))
  };
  
  console.log(`📊 Pre-processed collections:`, {
    health: toolCollections.healthAndWellnessTools.length,
    industry: toolCollections.industrySpecificTools.length,
    education: toolCollections.educationRelatedTools.length,
    aiWebTools: toolCollections.aiWebToolsGPTs.length
  });
  
  // Process each main category efficiently
  mainCategories.forEach(mainCat => {
    let categoryTools: Tool[] = [];
    
    switch (mainCat.name) {
      case "AI WEB TOOLS ORIGINALS":
        categoryTools = [...toolCollections.aiWebToolsGPTs];
        break;
        
      case "ALL AI TOOLS":
        categoryTools = [...tools];
        break;
        
      case "AI CHAT & ASSISTANTS":
        const subcategoryTools = tools.filter(tool => {
          if (!tool.category) return false;
          return mainCat.subcategories.some(subcat => 
            isSimilarCategory(tool.category, subcat)
          );
        });
        
        const allChatTools = [
          ...subcategoryTools, 
          ...toolCollections.chatRelatedTools, 
          ...toolCollections.majorLLMs
        ];
        categoryTools = allChatTools.filter((tool, index, self) => 
          index === self.findIndex(t => t.title === tool.title)
        );
        break;
        
      case "CONTENT CREATION & WRITING":
        categoryTools = this.getCombinedTools(tools, mainCat, toolCollections.contentCreationTools);
        break;
        
      case "DATA & ANALYTICS AI TOOLS":
        const enhancedDataTools = getDataAnalyticsTools(tools, mainCat.name);
        categoryTools = this.getCombinedTools(tools, mainCat, [
          ...enhancedDataTools, 
          ...toolCollections.dataAnalyticsTools
        ]);
        break;
        
      case "EDUCATION & LEARNING":
        const educationalHistoricalTools = tools.filter(tool => 
          isEducationRelatedTool(tool) && 
          (tool.description.toLowerCase().includes('historical') || 
           tool.description.toLowerCase().includes('history'))
        );
        categoryTools = this.getCombinedTools(tools, mainCat, [
          ...toolCollections.educationRelatedTools, 
          ...educationalHistoricalTools
        ]);
        break;
        
      case "HEALTH & WELLNESS":
        categoryTools = this.getCombinedTools(tools, mainCat, toolCollections.healthAndWellnessTools);
        console.log(`🏥 FINAL Health & Wellness: ${categoryTools.length} tools`);
        break;
        
      case "INDUSTRY SPECIFIC AI TOOLS":
        categoryTools = this.getCombinedTools(tools, mainCat, toolCollections.industrySpecificTools);
        break;
        
      case "HISTORICAL & TIME-BASED AI TOOLS":
        categoryTools = this.getCombinedTools(tools, mainCat, toolCollections.strictHistoricalTools);
        break;
        
      case "VIDEO & MULTIMEDIA":
        categoryTools = this.getCombinedTools(tools, mainCat, toolCollections.videoRelatedTools);
        break;
        
      case "AUTOMATION PLATFORMS":
        categoryTools = getAutomationPlatformsTools(tools, mainCat.name);
        break;
        
      case "COMMUNICATION & COLLABORATION AI TOOLS":
        categoryTools = getCommunicationCollaborationTools(tools, mainCat.name);
        break;
        
      default:
        // Standard subcategory matching for other categories
        categoryTools = tools.filter(tool => {
          if (!tool.category) return false;
          return mainCat.subcategories.some(subcat => 
            isSimilarCategory(tool.category, subcat)
          );
        });
    }
    
    toolsCacheByMainCategory.set(mainCat.name, categoryTools);
  });
  
  cacheBuilt = true;
  lastToolsLength = tools.length;
  const endTime = performance.now();
  console.log(`✅ Optimized cache built in ${(endTime - startTime).toFixed(2)}ms`);
  
  // Streamlined verification
  const totalCached = Array.from(toolsCacheByMainCategory.values()).reduce((sum, tools) => sum + tools.length, 0);
  console.log(`🔍 Cache complete: ${toolsCacheByMainCategory.size} categories, ${totalCached} total tool entries`);
}

// Helper method to combine subcategory and specialized tools efficiently
buildToolsCache.getCombinedTools = function(tools: Tool[], mainCat: any, specializedTools: Tool[]) {
  const subcategoryTools = tools.filter(tool => {
    if (!tool.category) return false;
    return mainCat.subcategories.some(subcat => 
      isSimilarCategory(tool.category, subcat)
    );
  });
  
  const allTools = [...subcategoryTools, ...specializedTools];
  return allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
};

export const getToolsCacheByMainCategory = () => toolsCacheByMainCategory;
export const isCacheBuilt = () => cacheBuilt;
