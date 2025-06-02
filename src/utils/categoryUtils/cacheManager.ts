
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

// Force cache rebuild by resetting the cache
export const resetCache = () => {
  toolsCacheByMainCategory.clear();
  cacheBuilt = false;
  console.log('🔄 Cache reset - will rebuild on next access');
};

// Force cache rebuild by resetting the cache - IMMEDIATE RESET
resetCache();

// Build cache once for instant category filtering
export const buildToolsCache = (tools: Tool[]) => {
  // Force rebuild if cache exists but we need to refresh
  if (cacheBuilt) {
    console.log('🔄 Forcing cache rebuild for health & wellness category consolidation...');
    toolsCacheByMainCategory.clear();
    cacheBuilt = false;
  }
  
  if (cacheBuilt) return;
  
  console.log('🚀 Building tools cache for instant category filtering...');
  const startTime = performance.now();
  
  toolsCacheByMainCategory.clear();
  
  // Pre-process AI Web Tools GPTs once
  const aiWebToolsGPTs = tools.filter(tool => isAIWebToolsGPT(tool));
  
  // Pre-process chat/assistant tools once
  const chatRelatedTools = tools.filter(tool => isAIChatAssistantTool(tool));
  
  // Pre-process ALL health and wellness tools once - COMPREHENSIVE DETECTION
  const healthAndWellnessTools = tools.filter(tool => {
    const isHealthTool = isHealthAndWellnessTool(tool);
    return isHealthTool;
  });
  
  // Pre-process ALL industry-specific tools once - COMPREHENSIVE DETECTION
  const industrySpecificTools = tools.filter(tool => {
    const isIndustryTool = isIndustrySpecificTool(tool);
    return isIndustryTool;
  });
  
  // Pre-process STRICTLY historical tools (excluding education tools and major LLMs)
  const strictHistoricalTools = tools.filter(tool => isStrictlyHistoricalTimeRelatedTool(tool));
  
  // Pre-process education tools once (including historical education but excluding major LLMs)
  const educationRelatedTools = tools.filter(tool => isEducationRelatedTool(tool));
  
  // Pre-process video tools once
  const videoRelatedTools = tools.filter(tool => isVideoRelatedTool(tool));
  
  // Pre-process content creation tools (including major LLMs)
  const contentCreationTools = tools.filter(tool => isContentCreationTool(tool));
  
  // Pre-process data analytics tools (including major LLMs)
  const dataAnalyticsTools = tools.filter(tool => isDataAnalyticsTool(tool));
  
  console.log(`🎓 Education tools found: ${educationRelatedTools.length}`);
  console.log(`🕰️ Strict historical tools found: ${strictHistoricalTools.length}`);
  console.log(`✍️ Content creation tools found: ${contentCreationTools.length}`);
  console.log(`📊 Data analytics tools found: ${dataAnalyticsTools.length}`);
  console.log(`🏥 HEALTH & WELLNESS tools found: ${healthAndWellnessTools.length}`);
  console.log(`🏭 INDUSTRY SPECIFIC tools found: ${industrySpecificTools.length}`);
  
  // Detailed breakdown of health tools
  console.log(`🏥 Sample health tools: ${healthAndWellnessTools.slice(0, 15).map(t => t.title).join(', ')}`);
  
  mainCategories.forEach(mainCat => {
    let categoryTools: Tool[] = [];
    
    // Handle special categories with pre-processed data
    if (mainCat.name === "AI WEB TOOLS ORIGINALS") {
      categoryTools = [...aiWebToolsGPTs];
    } 
    else if (mainCat.name === "ALL AI TOOLS") {
      categoryTools = [...tools]; // Show ALL tools without any filtering
    }
    else if (mainCat.name === "AI CHAT & ASSISTANTS") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const majorLLMs = tools.filter(tool => isMajorLLM(tool));
      
      const allChatTools = [...subcategoryTools, ...chatRelatedTools, ...majorLLMs];
      categoryTools = allChatTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "CONTENT CREATION & WRITING") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const allContentTools = [...subcategoryTools, ...contentCreationTools];
      categoryTools = allContentTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "DATA & ANALYTICS AI TOOLS") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const enhancedDataTools = getDataAnalyticsTools(tools, mainCat.name);
      const allDataTools = [...subcategoryTools, ...enhancedDataTools, ...dataAnalyticsTools];
      categoryTools = allDataTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "EDUCATION & LEARNING") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const educationalHistoricalTools = tools.filter(tool => 
        isEducationRelatedTool(tool) && 
        (tool.description.toLowerCase().includes('historical') || 
         tool.description.toLowerCase().includes('history'))
      );
      
      const allEducationTools = [...subcategoryTools, ...educationRelatedTools, ...educationalHistoricalTools];
      categoryTools = allEducationTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "HEALTH & WELLNESS") {
      // COMPREHENSIVE HEALTH & WELLNESS CATEGORY - INCLUDE ALL HEALTH-RELATED TOOLS
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      // Combine subcategory tools with comprehensive health detection
      const allHealthTools = [...subcategoryTools, ...healthAndWellnessTools];
      categoryTools = allHealthTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
      
      console.log(`🏥 FINAL Health & Wellness category tools: ${categoryTools.length}`);
      console.log(`📝 Sample health tools: ${categoryTools.slice(0, 15).map(t => t.title).join(', ')}`);
    }
    else if (mainCat.name === "INDUSTRY SPECIFIC AI TOOLS") {
      // COMPREHENSIVE INDUSTRY TOOLS CATEGORY - INCLUDE ALL INDUSTRY-SPECIFIC TOOLS
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      // Combine subcategory tools with comprehensive industry detection
      const allIndustryTools = [...subcategoryTools, ...industrySpecificTools];
      categoryTools = allIndustryTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
      
      console.log(`🏭 FINAL Industry Specific category tools: ${categoryTools.length}`);
      console.log(`📝 Sample industry tools: ${categoryTools.slice(0, 10).map(t => t.title).join(', ')}`);
    }
    else if (mainCat.name === "HISTORICAL & TIME-BASED AI TOOLS") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const allHistoricalTools = [...subcategoryTools, ...strictHistoricalTools];
      categoryTools = allHistoricalTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "VIDEO & MULTIMEDIA") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const allVideoTools = [...subcategoryTools, ...videoRelatedTools];
      categoryTools = allVideoTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "AUTOMATION PLATFORMS") {
      categoryTools = getAutomationPlatformsTools(tools, mainCat.name);
    }
    else if (mainCat.name === "COMMUNICATION & COLLABORATION AI TOOLS") {
      categoryTools = getCommunicationCollaborationTools(tools, mainCat.name);
    }
    else {
      // Standard subcategory matching for other categories
      categoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
    }
    
    // Store the exact tools count for this category
    toolsCacheByMainCategory.set(mainCat.name, categoryTools);
    console.log(`📊 Category "${mainCat.name}": ${categoryTools.length} tools cached`);
  });
  
  cacheBuilt = true;
  const endTime = performance.now();
  console.log(`✅ Tools cache built in ${(endTime - startTime).toFixed(2)}ms for instant category access`);
  
  // Debug log to verify cache integrity
  console.log('🔍 Cache verification:');
  mainCategories.forEach(mainCat => {
    const count = toolsCacheByMainCategory.get(mainCat.name)?.length || 0;
    console.log(`  ${mainCat.name}: ${count} tools`);
  });
};

export const getToolsCacheByMainCategory = () => toolsCacheByMainCategory;
export const isCacheBuilt = () => cacheBuilt;
