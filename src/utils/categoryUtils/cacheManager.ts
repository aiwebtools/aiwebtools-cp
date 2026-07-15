
import { Tool } from "@/types/tools";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { isSimilarCategory } from "./normalization";
import { isVideoRelatedTool } from "./videoDetection";
import { isVideoMultimediaTool, getVideoMultimediaTools } from "./videoMultimediaDetection";
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
import { getEnhancedAgentTools } from "./agentDetection";
import { isGamingEntertainmentTool } from "./gamingEntertainmentDetection";
import { isSecurityPrivacyTool } from "./securityPrivacyDetection";
import { isSpiritualityTool } from "./spiritualityDetection";
import { getThreeDVisualizationTools, isThreeDVisualizationTool } from "./threeDVisualizationDetection";
import { isAudioMusicTool, getAudioMusicTools } from "./audioMusicDetection";
import { isImageDesignTool, getEnhancedImageDesignTools } from "./imageDesignDetection";
import { isWritingContentTool } from "./writingContentDetection";
import { isCodingDevelopmentTool, getCodingDevelopmentTools } from "./codingDevelopmentDetection";
import { isMarketingSalesTool } from "./marketingSalesDetection";

// Ultra-optimized cache with persistent storage and lazy loading
let toolsCacheByMainCategory: Map<string, Tool[]> = new Map();
let cacheBuilt = false;
let lastToolsLength = 0;
let cacheVersion = 47; // Phase 27: Expanded historical detection with 89+ verified AIWebTools GPTs (philosophers, saints, scientists, ancient civilization tools)

// Persistent cache storage for instant loads
const CACHE_KEY = 'aitools_category_cache_v2';
const CACHE_VERSION_KEY = 'aitools_cache_version';

// Guard: worker contexts and SSR have no localStorage — access must be safe.
const hasLocalStorage = (): boolean => {
  try { return typeof window !== "undefined" && typeof window.localStorage !== "undefined"; }
  catch { return false; }
};

// Load cache from localStorage on startup
const loadCacheFromStorage = () => {
  if (!hasLocalStorage()) return false;
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
  if (!hasLocalStorage()) return;
  try {
    const cacheObject = Object.fromEntries(toolsCacheByMainCategory);
    const serialized = JSON.stringify(cacheObject);
    // The full category cache can exceed mobile/private-mode storage quotas.
    // Keep the fast in-memory cache and skip persistent storage instead of
    // throwing quota warnings that slow startup.
    if (serialized.length > 1_500_000) {
      localStorage.removeItem(CACHE_KEY);
      localStorage.removeItem(CACHE_VERSION_KEY);
      return;
    }
    localStorage.setItem(CACHE_KEY, serialized);
    localStorage.setItem(CACHE_VERSION_KEY, cacheVersion.toString());
    console.log('💾 Cache saved to storage');
  } catch (error) {
    try { localStorage.removeItem(CACHE_KEY); localStorage.removeItem(CACHE_VERSION_KEY); } catch { /* noop */ }
  }
};

// Reset cache only when tools data actually changes
export const resetCache = () => {
  toolsCacheByMainCategory.clear();
  cacheBuilt = false;
  lastToolsLength = 0;
  if (hasLocalStorage()) {
    try { localStorage.removeItem(CACHE_KEY); localStorage.removeItem(CACHE_VERSION_KEY); } catch { /* noop */ }
  }
  console.log('🔄 Cache reset - will rebuild with 50+ new tools included v36');
};

// NOTE: Do NOT force-reset the cache on every module load — the `cacheVersion`
// bump (see CACHE_VERSION_KEY check in loadCacheFromStorage) already invalidates
// stale caches. A blanket reset here forced a ~9 second synchronous rebuild on
// every visit, blocking the main thread and making the first click after page
// load feel frozen. Bump `cacheVersion` above when detection logic changes.

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
  const spiritualitySet = new Set(tools.filter(tool => isSpiritualityTool(tool)).map(t => t.title));
  const threeDSet = new Set(tools.filter(tool => isThreeDVisualizationTool(tool)).map(t => t.title));
  const audioMusicSet = new Set(tools.filter(tool => isAudioMusicTool(tool)).map(t => t.title));
  const imageDesignSet = new Set(tools.filter(tool => isImageDesignTool(tool)).map(t => t.title));
  const writingContentSet = new Set(tools.filter(tool => isWritingContentTool(tool)).map(t => t.title));
  const codingDevSet = new Set(tools.filter(tool => isCodingDevelopmentTool(tool)).map(t => t.title));
  const videoMultimediaSet = new Set(tools.filter(tool => isVideoMultimediaTool(tool)).map(t => t.title));
  const marketingSalesSet = new Set(tools.filter(tool => isMarketingSalesTool(tool)).map(t => t.title));
  
  const toolCollections = {
    aiWebToolsGPTs: tools.filter(tool => aiWebToolsSet.has(tool.title)),
    chatRelatedTools: tools.filter(tool => chatRelatedSet.has(tool.title)),
    healthAndWellnessTools: tools.filter(tool => healthSet.has(tool.title)),
    industrySpecificTools: tools.filter(tool => industrySet.has(tool.title)),
    spiritualityTools: tools.filter(tool => spiritualitySet.has(tool.title)),
    threeDVisualizationTools: tools.filter(tool => threeDSet.has(tool.title)),
    audioMusicTools: tools.filter(tool => audioMusicSet.has(tool.title)),
    imageDesignTools: tools.filter(tool => imageDesignSet.has(tool.title)),
    writingContentTools: tools.filter(tool => writingContentSet.has(tool.title)),
    codingDevTools: tools.filter(tool => codingDevSet.has(tool.title)),
    videoMultimediaTools: tools.filter(tool => videoMultimediaSet.has(tool.title)),
    marketingSalesTools: tools.filter(tool => marketingSalesSet.has(tool.title)),
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
        
      case "AI AGENTS": {
        // Use enhanced agent detection for comprehensive coverage
        categoryTools = getEnhancedAgentTools(tools);
        console.log(`🤖 AI AGENTS: Found ${categoryTools.length} tools with enhanced detection`);
        break;
      }
        
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
        
      case "CONTENT CREATION & WRITING": {
        // Use enhanced writing/content detection for comprehensive coverage
        const writingTools = [...toolCollections.writingContentTools, ...toolCollections.contentCreationTools];
        categoryTools = getCombinedTools(tools, mainCat, writingTools);
        console.log(`✍️ CONTENT CREATION & WRITING: Found ${categoryTools.length} tools with enhanced detection`);
        break;
      }
        
      case "DATA & ANALYTICS AI TOOLS":
        const enhancedDataTools = getDataAnalyticsTools(tools, mainCat.name);
        categoryTools = getCombinedTools(tools, mainCat, [
          ...enhancedDataTools, 
          ...toolCollections.dataAnalyticsTools
        ]);
        break;
        
      case "EDUCATION & LEARNING": {
        // Use comprehensive education detection
        categoryTools = [...toolCollections.educationRelatedTools];
        // Add subcategory-matched tools
        const subcatTools = tools.filter(tool => {
          if (!tool.category) return false;
          return mainCat.subcategories.some((subcat: string) => 
            isSimilarCategory(tool.category, subcat)
          );
        });
        categoryTools = [...new Set([...categoryTools, ...subcatTools])].filter((tool, index, self) => 
          index === self.findIndex(t => t.title === tool.title)
        );
        console.log(`🎓 EDUCATION & LEARNING: Found ${categoryTools.length} tools with enhanced detection`);
        break;
      }
        
      case "HEALTH & WELLNESS":
      case "HEALTH, WELLNESS & PERSONAL LIFESTYLE":
        categoryTools = getCombinedTools(tools, mainCat, toolCollections.healthAndWellnessTools);
        console.log(`🏥 HEALTH & WELLNESS: Found ${categoryTools.length} tools`);
        break;
        
      case "INDUSTRY SPECIFIC AI TOOLS":
        categoryTools = getCombinedTools(tools, mainCat, toolCollections.industrySpecificTools);
        break;
        
      case "HISTORICAL & TIME-BASED AI TOOLS":
        // STRICT: Use ONLY specialized detection - no subcategory matching
        // This prevents non-history tools from being included via loose category matching
        categoryTools = [...toolCollections.strictHistoricalTools];
        console.log(`⏰ HISTORICAL & TIME-BASED: Found ${categoryTools.length} tools with STRICT detection only`);
        break;
        
      case "VIDEO & MULTIMEDIA": {
        // Use comprehensive video/multimedia detection
        const allVideoTools = [...toolCollections.videoMultimediaTools, ...toolCollections.videoRelatedTools];
        categoryTools = getCombinedTools(tools, mainCat, allVideoTools);
        console.log(`🎬 VIDEO & MULTIMEDIA: Found ${categoryTools.length} tools with enhanced detection`);
        break;
      }
      
      case "AUDIO & VOICE TOOLS": {
        // Use comprehensive audio/music detection
        categoryTools = [...toolCollections.audioMusicTools];
        // Add subcategory-matched tools
        const audioSubcatTools = tools.filter(tool => {
          if (!tool.category) return false;
          return mainCat.subcategories.some((subcat: string) => 
            isSimilarCategory(tool.category, subcat)
          );
        });
        categoryTools = [...new Set([...categoryTools, ...audioSubcatTools])].filter((tool, index, self) => 
          index === self.findIndex(t => t.title === tool.title)
        );
        console.log(`🎵 AUDIO & VOICE TOOLS: Found ${categoryTools.length} tools with enhanced detection`);
        break;
      }
      
      case "IMAGE & DESIGN AI TOOLS": {
        // Use comprehensive image/design detection
        const enhancedImageTools = getEnhancedImageDesignTools(tools);
        categoryTools = getCombinedTools(tools, mainCat, [...toolCollections.imageDesignTools, ...enhancedImageTools]);
        console.log(`🎨 IMAGE & DESIGN AI TOOLS: Found ${categoryTools.length} tools with enhanced detection`);
        break;
      }
      
      case "MARKETING & SALES SOLUTIONS": {
        // Use comprehensive marketing/sales detection
        const enhancedMarketingTools = getMarketingSalesTools(tools, mainCat.name);
        categoryTools = getCombinedTools(tools, mainCat, [...toolCollections.marketingSalesTools, ...enhancedMarketingTools]);
        console.log(`📈 MARKETING & SALES SOLUTIONS: Found ${categoryTools.length} tools with enhanced detection`);
        break;
      }
      
      case "CODING & DEVELOPMENT":
      case "AI DEVELOPMENT & CODING": {
        // Use comprehensive coding/development detection
        categoryTools = getCodingDevelopmentTools(tools);
        console.log(`💻 CODING & DEVELOPMENT: Found ${categoryTools.length} tools with enhanced detection`);
        break;
      }
      
      case "CREATIVE & ENTERTAINMENT": {
        // Use combined creative + gaming + entertainment detection
        const creativeTools = tools.filter(tool => {
          const category = (tool.category || '').toLowerCase();
          const tags = (tool.tags || []).map(t => t.toLowerCase());
          const description = (tool.description || '').toLowerCase();
          const title = tool.title.toLowerCase();
          
          const creativeKeywords = ['creative', 'entertainment', 'fun', 'game', 'play', 'trivia', 'quiz', 'story', 'interactive'];
          return creativeKeywords.some(kw => 
            category.includes(kw) || title.includes(kw) || description.includes(kw) || tags.some(t => t.includes(kw))
          );
        });
        categoryTools = getCombinedTools(tools, mainCat, creativeTools);
        console.log(`🎭 CREATIVE & ENTERTAINMENT: Found ${categoryTools.length} tools with enhanced detection`);
        break;
      }
      
      case "SPIRITUALITY & PHILOSOPHY":
        categoryTools = getCombinedTools(tools, mainCat, toolCollections.spiritualityTools);
        break;
        
      case "3D & VISUALIZATION": {
        // Use comprehensive 3D detection for maximum tool coverage
        categoryTools = getThreeDVisualizationTools(tools);
        console.log(`🧊 3D & VISUALIZATION: Found ${categoryTools.length} tools with enhanced detection`);
        break;
      }
        
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
        
      case "GAMING & ENTERTAINMENT":
        // Use enhanced gaming detection for comprehensive coverage
        categoryTools = tools.filter(tool => isGamingEntertainmentTool(tool));
        console.log(`🎮 GAMING & ENTERTAINMENT: Found ${categoryTools.length} tools with enhanced detection`);
        break;
        
      case "SECURITY & PRIVACY":
        // Use security/privacy detection for comprehensive coverage
        categoryTools = tools.filter(tool => isSecurityPrivacyTool(tool));
        console.log(`🔒 SECURITY & PRIVACY: Found ${categoryTools.length} tools with enhanced detection`);
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
