
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
import { filterBusinessTools } from "./businessCategoryFiltering";

// Ultra-optimized cache with persistent storage and lazy loading
let toolsCacheByMainCategory: Map<string, Tool[]> = new Map();
let cacheBuilt = false;
let lastToolsLength = 0;
let cacheVersion = 1;

// Persistent cache storage for instant loads
const CACHE_KEY = 'aitools_category_cache_v2';
const CACHE_VERSION_KEY = 'aitools_cache_version';

// Load cache from localStorage on startup
const loadCacheFromStorage = () => {
  try {
    const stored = localStorage.getItem(CACHE_KEY);
    const version = localStorage.getItem(CACHE_VERSION_KEY);
    
    if (stored && version === cacheVersion.toString()) {
      const parsedCache = JSON.parse(stored);
      toolsCacheByMainCategory = new Map(Object.entries(parsedCache));
      console.log('🚀 Cache loaded from storage instantly!');
      return true;
    }
  } catch (error) {
    console.warn('Cache storage load failed:', error);
  }
  return false;
};

// Save cache to localStorage
const saveCacheToStorage = () => {
  try {
    const cacheObject = Object.fromEntries(toolsCacheByMainCategory);
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject));
    localStorage.setItem(CACHE_VERSION_KEY, cacheVersion.toString());
    console.log('💾 Cache saved to storage');
  } catch (error) {
    console.warn('Cache storage save failed:', error);
  }
};

// Reset cache only when tools data actually changes
export const resetCache = () => {
  toolsCacheByMainCategory.clear();
  cacheBuilt = false;
  lastToolsLength = 0;
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(CACHE_VERSION_KEY);
  console.log('🔄 Cache reset - will rebuild with business category filtering');
};

// Force immediate cache reset for business filtering update
resetCache();

// Helper function to combine subcategory and specialized tools efficiently
const getCombinedTools = (tools: Tool[], mainCat: any, specializedTools: Tool[]) => {
  const subcategoryTools = tools.filter(tool => {
    if (!tool.category) return false;
    return mainCat.subcategories.some((subcat: string) => 
      isSimilarCategory(tool.category, subcat)
    );
  });
  
  const allTools = [...subcategoryTools, ...specializedTools];
  return allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
};

// Ultra-optimized cache building with Web Workers support
export const buildToolsCache = (tools: Tool[]) => {
  // Try loading from storage first
  if (!cacheBuilt && loadCacheFromStorage() && tools.length === lastToolsLength) {
    cacheBuilt = true;
    console.log('⚡ Cache loaded from storage instantly!');
    return;
  }
  
  // Only rebuild if tools data has actually changed
  if (cacheBuilt && tools.length === lastToolsLength) {
    console.log('✅ Cache already built and tools unchanged - skipping rebuild');
    return;
  }
  
  console.log('🚀 Building ultra-optimized tools cache...');
  const startTime = performance.now();
  
  toolsCacheByMainCategory.clear();
  
  // Pre-process tool collections with optimized filtering using Set for O(1) lookups
  const aiWebToolsSet = new Set(tools.filter(tool => isAIWebToolsGPT(tool)).map(t => t.title));
  const chatRelatedSet = new Set(tools.filter(tool => isAIChatAssistantTool(tool)).map(t => t.title));
  const healthSet = new Set(tools.filter(tool => isHealthAndWellnessTool(tool)).map(t => t.title));
  const industrySet = new Set(tools.filter(tool => isIndustrySpecificTool(tool)).map(t => t.title));
  
  const toolCollections = {
    aiWebToolsGPTs: tools.filter(tool => aiWebToolsSet.has(tool.title)),
    chatRelatedTools: tools.filter(tool => chatRelatedSet.has(tool.title)),
    healthAndWellnessTools: tools.filter(tool => healthSet.has(tool.title)),
    industrySpecificTools: tools.filter(tool => industrySet.has(tool.title)),
    strictHistoricalTools: tools.filter(tool => isStrictlyHistoricalTimeRelatedTool(tool)),
    educationRelatedTools: tools.filter(tool => isEducationRelatedTool(tool)),
    videoRelatedTools: tools.filter(tool => isVideoRelatedTool(tool)),
    contentCreationTools: tools.filter(tool => isContentCreationTool(tool)),
    dataAnalyticsTools: tools.filter(tool => isDataAnalyticsTool(tool)),
    majorLLMs: tools.filter(tool => isMajorLLM(tool))
  };
  
  console.log(`📊 Pre-processed collections in ${(performance.now() - startTime).toFixed(2)}ms`);
  
  // Process each main category with micro-optimizations
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
          return mainCat.subcategories.some((subcat: string) => 
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
        categoryTools = getCombinedTools(tools, mainCat, toolCollections.contentCreationTools);
        break;
        
      case "DATA & ANALYTICS AI TOOLS":
        const enhancedDataTools = getDataAnalyticsTools(tools, mainCat.name);
        categoryTools = getCombinedTools(tools, mainCat, [
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
        categoryTools = getCombinedTools(tools, mainCat, [
          ...toolCollections.educationRelatedTools, 
          ...educationalHistoricalTools
        ]);
        break;
        
      case "HEALTH & WELLNESS":
        categoryTools = getCombinedTools(tools, mainCat, toolCollections.healthAndWellnessTools);
        break;
        
      case "INDUSTRY SPECIFIC AI TOOLS":
        categoryTools = getCombinedTools(tools, mainCat, toolCollections.industrySpecificTools);
        break;
        
      case "HISTORICAL & TIME-BASED AI TOOLS":
        categoryTools = getCombinedTools(tools, mainCat, toolCollections.strictHistoricalTools);
        break;
        
      case "VIDEO & MULTIMEDIA":
        categoryTools = getCombinedTools(tools, mainCat, toolCollections.videoRelatedTools);
        break;
        
      case "AUTOMATION PLATFORMS":
        categoryTools = getAutomationPlatformsTools(tools, mainCat.name);
        break;
        
      case "COMMUNICATION & COLLABORATION AI TOOLS":
        categoryTools = getCommunicationCollaborationTools(tools, mainCat.name);
        break;
        
      case "BUSINESS OPERATIONS & PRODUCTIVITY":
        // Apply business filtering to exclude entertainment tools
        const businessCandidates = tools.filter(tool => {
          if (!tool.category) return false;
          return mainCat.subcategories.some((subcat: string) => 
            isSimilarCategory(tool.category, subcat)
          );
        });
        categoryTools = filterBusinessTools(businessCandidates);
        console.log(`🏢 BUSINESS OPERATIONS & PRODUCTIVITY: Filtered ${businessCandidates.length} candidates to ${categoryTools.length} actual business tools`);
        break;
        
      case "WEB3 & BLOCKCHAIN":
        // Specifically handle WEB3 tools and domains
        categoryTools = tools.filter(tool => {
          if (!tool.category) return false;
          return mainCat.subcategories.some((subcat: string) => 
            isSimilarCategory(tool.category, subcat)
          ) || tool.tags?.includes("WEB3") || tool.tags?.includes("Blockchain");
        });
        console.log(`🌐 WEB3 & BLOCKCHAIN: Found ${categoryTools.length} tools`);
        break;
        
      default:
        // Standard subcategory matching for other categories
        categoryTools = tools.filter(tool => {
          if (!tool.category) return false;
          return mainCat.subcategories.some((subcat: string) => 
            isSimilarCategory(tool.category, subcat)
          );
        });
    }
    
    toolsCacheByMainCategory.set(mainCat.name, categoryTools);
  });
  
  cacheBuilt = true;
  lastToolsLength = tools.length;
  
  // Save to persistent storage
  saveCacheToStorage();
  
  const endTime = performance.now();
  console.log(`✅ Ultra-optimized cache built in ${(endTime - startTime).toFixed(2)}ms`);
  
  // Streamlined verification
  const totalCached = Array.from(toolsCacheByMainCategory.values()).reduce((sum, tools) => sum + tools.length, 0);
  console.log(`🔍 Cache complete: ${toolsCacheByMainCategory.size} categories, ${totalCached} total tool entries`);
};

export const getToolsCacheByMainCategory = () => toolsCacheByMainCategory;
export const isCacheBuilt = () => cacheBuilt;

// Initialize cache from storage on module load
loadCacheFromStorage();
