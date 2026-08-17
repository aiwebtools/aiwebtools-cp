
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
// Precompute the shared tool collections used by every category branch.
const buildToolCollections = (tools: Tool[]) => {
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

  return {
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
    majorLLMs: tools.filter(tool => isMajorLLM(tool)),
  };
};

type ToolCollections = ReturnType<typeof buildToolCollections>;

// Compute the tools for a single main category. Extracted so both the sync
// and async cache builders can share behaviour.
const computeCategoryTools = (
  mainCat: any,
  tools: Tool[],
  toolCollections: ToolCollections,
): Tool[] => {
  let categoryTools: Tool[] = [];
  switch (mainCat.name) {
    case "AI WEB TOOLS ORIGINALS":
      categoryTools = [...toolCollections.aiWebToolsGPTs]; break;
    case "ALL AI TOOLS":
      categoryTools = [...tools]; break;
    case "AI AGENTS": {
      categoryTools = getEnhancedAgentTools(tools); break;
    }
    case "AI CHAT & ASSISTANTS": {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some((subcat: string) => isSimilarCategory(tool.category, subcat));
      });
      const allChatTools = [...subcategoryTools, ...toolCollections.chatRelatedTools, ...toolCollections.majorLLMs];
      categoryTools = allChatTools.filter((tool, index, self) => index === self.findIndex(t => t.title === tool.title));
      break;
    }
    case "CONTENT CREATION & WRITING": {
      const writingTools = [...toolCollections.writingContentTools, ...toolCollections.contentCreationTools];
      categoryTools = getCombinedTools(tools, mainCat, writingTools); break;
    }
    case "DATA & ANALYTICS AI TOOLS": {
      const enhancedDataTools = getDataAnalyticsTools(tools, mainCat.name);
      categoryTools = getCombinedTools(tools, mainCat, [...enhancedDataTools, ...toolCollections.dataAnalyticsTools]);
      break;
    }
    case "EDUCATION & LEARNING": {
      categoryTools = [...toolCollections.educationRelatedTools];
      const subcatTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some((subcat: string) => isSimilarCategory(tool.category, subcat));
      });
      categoryTools = [...new Set([...categoryTools, ...subcatTools])].filter((tool, index, self) => index === self.findIndex(t => t.title === tool.title));
      break;
    }
    case "HEALTH & WELLNESS":
    case "HEALTH, WELLNESS & PERSONAL LIFESTYLE":
      categoryTools = getCombinedTools(tools, mainCat, toolCollections.healthAndWellnessTools); break;
    case "INDUSTRY SPECIFIC AI TOOLS":
      categoryTools = getCombinedTools(tools, mainCat, toolCollections.industrySpecificTools); break;
    case "HISTORICAL & TIME-BASED AI TOOLS":
      categoryTools = [...toolCollections.strictHistoricalTools]; break;
    case "VIDEO & MULTIMEDIA": {
      const allVideoTools = [...toolCollections.videoMultimediaTools, ...toolCollections.videoRelatedTools];
      categoryTools = getCombinedTools(tools, mainCat, allVideoTools); break;
    }
    case "AUDIO & VOICE TOOLS": {
      categoryTools = [...toolCollections.audioMusicTools];
      const audioSubcatTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some((subcat: string) => isSimilarCategory(tool.category, subcat));
      });
      categoryTools = [...new Set([...categoryTools, ...audioSubcatTools])].filter((tool, index, self) => index === self.findIndex(t => t.title === tool.title));
      break;
    }
    case "IMAGE & DESIGN AI TOOLS": {
      const enhancedImageTools = getEnhancedImageDesignTools(tools);
      categoryTools = getCombinedTools(tools, mainCat, [...toolCollections.imageDesignTools, ...enhancedImageTools]);
      break;
    }
    case "MARKETING & SALES SOLUTIONS": {
      const enhancedMarketingTools = getMarketingSalesTools(tools, mainCat.name);
      categoryTools = getCombinedTools(tools, mainCat, [...toolCollections.marketingSalesTools, ...enhancedMarketingTools]);
      break;
    }
    case "CODING & DEVELOPMENT":
    case "AI DEVELOPMENT & CODING": {
      categoryTools = getCodingDevelopmentTools(tools); break;
    }
    case "CREATIVE & ENTERTAINMENT": {
      const creativeTools = tools.filter(tool => {
        const category = (tool.category || '').toLowerCase();
        const tags = (tool.tags || []).map(t => t.toLowerCase());
        const description = (tool.description || '').toLowerCase();
        const title = tool.title.toLowerCase();
        const creativeKeywords = ['creative', 'entertainment', 'fun', 'game', 'play', 'trivia', 'quiz', 'story', 'interactive'];
        return creativeKeywords.some(kw => category.includes(kw) || title.includes(kw) || description.includes(kw) || tags.some(t => t.includes(kw)));
      });
      categoryTools = getCombinedTools(tools, mainCat, creativeTools); break;
    }
    case "SPIRITUALITY & PHILOSOPHY":
      categoryTools = getCombinedTools(tools, mainCat, toolCollections.spiritualityTools); break;
    case "3D & VISUALIZATION": {
      categoryTools = getThreeDVisualizationTools(tools); break;
    }
    case "AUTOMATION PLATFORMS":
      categoryTools = getAutomationPlatformsTools(tools, mainCat.name); break;
    case "COMMUNICATION & COLLABORATION AI TOOLS":
      categoryTools = getCommunicationCollaborationTools(tools, mainCat.name); break;
    case "BUSINESS OPERATIONS & PRODUCTIVITY": {
      const businessCandidates = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some((subcat: string) => isSimilarCategory(tool.category, subcat));
      });
      categoryTools = filterBusinessTools(businessCandidates); break;
    }
    case "WEB3 & BLOCKCHAIN":
      categoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some((subcat: string) => isSimilarCategory(tool.category, subcat)) || tool.tags?.includes("WEB3") || tool.tags?.includes("Blockchain");
      });
      break;
    case "GAMING & ENTERTAINMENT":
      categoryTools = tools.filter(tool => isGamingEntertainmentTool(tool)); break;
    case "SECURITY & PRIVACY":
      categoryTools = tools.filter(tool => isSecurityPrivacyTool(tool)); break;
    default:
      categoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some((subcat: string) => isSimilarCategory(tool.category, subcat));
      });
  }
  return categoryTools;
};

// Yield to the browser so the ~9s first-visit build never freezes the main
// thread. Uses requestIdleCallback when available, otherwise a macrotask.
const yieldToBrowser = (): Promise<void> =>
  new Promise((resolve) => {
    const ric = (typeof window !== 'undefined' && (window as any).requestIdleCallback) as
      | ((cb: () => void, opts?: { timeout: number }) => number)
      | undefined;
    if (ric) ric(() => resolve(), { timeout: 50 });
    else setTimeout(resolve, 0);
  });

// Async, non-blocking cache builder. Prefer this over `buildToolsCache` when
// the caller can await — every category iteration yields to the browser so
// clicks/scroll stay instant while the ~9s first-visit build is happening.
export const buildToolsCacheAsync = async (tools: Tool[]): Promise<void> => {
  if (!cacheBuilt && loadCacheFromStorage() && tools.length === lastToolsLength) {
    cacheBuilt = true;
    return;
  }
  if (cacheBuilt && tools.length === lastToolsLength) return;

  console.log('🚀 Building tools cache (async, non-blocking)…');
  const startTime = performance.now();
  toolsCacheByMainCategory.clear();

  const toolCollections = buildToolCollections(tools);
  await yieldToBrowser();

  for (const mainCat of mainCategories) {
    const categoryTools = computeCategoryTools(mainCat, tools, toolCollections);
    toolsCacheByMainCategory.set(mainCat.name, categoryTools);
    await yieldToBrowser();
  }

  cacheBuilt = true;
  lastToolsLength = tools.length;
  saveCacheToStorage();
  console.log(`✅ Async cache built in ${(performance.now() - startTime).toFixed(2)}ms`);
};

// Lazily-computed tool collections. `computeCategoryTools` only touches 1-3
// collections per category, so building one category no longer pays for all
// 18 full-database detection passes. Each getter memoizes its result.
const createLazyCollections = (tools: Tool[]): ToolCollections => {
  const memo = new Map<string, Tool[]>();
  const lazy = (key: string, compute: () => Tool[]): Tool[] => {
    let value = memo.get(key);
    if (!value) {
      value = compute();
      memo.set(key, value);
    }
    return value;
  };
  const byPredicate = (key: string, predicate: (tool: Tool) => boolean) =>
    lazy(key, () => tools.filter(predicate));

  return {
    get aiWebToolsGPTs() { return byPredicate('aiWebToolsGPTs', isAIWebToolsGPT); },
    get chatRelatedTools() { return byPredicate('chatRelatedTools', isAIChatAssistantTool); },
    get healthAndWellnessTools() { return byPredicate('healthAndWellnessTools', isHealthAndWellnessTool); },
    get industrySpecificTools() { return byPredicate('industrySpecificTools', isIndustrySpecificTool); },
    get spiritualityTools() { return byPredicate('spiritualityTools', isSpiritualityTool); },
    get threeDVisualizationTools() { return byPredicate('threeDVisualizationTools', isThreeDVisualizationTool); },
    get audioMusicTools() { return byPredicate('audioMusicTools', isAudioMusicTool); },
    get imageDesignTools() { return byPredicate('imageDesignTools', isImageDesignTool); },
    get writingContentTools() { return byPredicate('writingContentTools', isWritingContentTool); },
    get codingDevTools() { return byPredicate('codingDevTools', isCodingDevelopmentTool); },
    get videoMultimediaTools() { return byPredicate('videoMultimediaTools', isVideoMultimediaTool); },
    get marketingSalesTools() { return byPredicate('marketingSalesTools', isMarketingSalesTool); },
    get strictHistoricalTools() { return byPredicate('strictHistoricalTools', isStrictlyHistoricalTimeRelatedTool); },
    get educationRelatedTools() { return byPredicate('educationRelatedTools', isEducationRelatedTool); },
    get videoRelatedTools() { return byPredicate('videoRelatedTools', isVideoRelatedTool); },
    get contentCreationTools() { return byPredicate('contentCreationTools', isContentCreationTool); },
    get dataAnalyticsTools() { return byPredicate('dataAnalyticsTools', isDataAnalyticsTool); },
    get majorLLMs() { return byPredicate('majorLLMs', isMajorLLM); },
  } as ToolCollections;
};

// Synchronous full build. Kept for callers that cannot await, but it now shares
// the single `computeCategoryTools` implementation instead of duplicating a
// ~290 line switch (which also logged ~30 times per build inside hot loops).
export const buildToolsCache = (tools: Tool[]) => {
  if (!cacheBuilt && hydrateCacheFromStorage(tools)) {
    cacheBuilt = true;
    lastToolsLength = tools.length;
    return;
  }

  if (cacheBuilt && tools.length === lastToolsLength) return;

  const startTime = performance.now();
  toolsCacheByMainCategory.clear();

  const toolCollections = createLazyCollections(tools);
  for (const mainCat of mainCategories) {
    toolsCacheByMainCategory.set(mainCat.name, computeCategoryTools(mainCat, tools, toolCollections));
  }

  cacheBuilt = true;
  lastToolsLength = tools.length;
  saveCacheToStorage(tools);

  if (import.meta.env.DEV) {
    console.log(`✅ Category cache built in ${(performance.now() - startTime).toFixed(2)}ms`);
  }
};

/**
 * Compute a SINGLE main category without sweeping all ~25 categories.
 * This is what category pages and counts should use: it turns a multi-second
 * full-database sweep into one or two filtered passes.
 */
export const buildSingleCategoryTools = (categoryName: string, tools: Tool[]): Tool[] => {
  if (cacheBuilt || toolsCacheByMainCategory.size > 0) {
    const cached = toolsCacheByMainCategory.get(categoryName);
    if (cached) return cached;
  }

  if (!cacheBuilt && hydrateCacheFromStorage(tools)) {
    cacheBuilt = true;
    lastToolsLength = tools.length;
    const cached = toolsCacheByMainCategory.get(categoryName);
    if (cached) return cached;
  }

  const mainCat = mainCategories.find((cat) => cat.name === categoryName);
  if (!mainCat) return [];

  const categoryTools = computeCategoryTools(mainCat, tools, createLazyCollections(tools));
  toolsCacheByMainCategory.set(categoryName, categoryTools);
  return categoryTools;
};

export const getToolsCacheByMainCategory = () => toolsCacheByMainCategory;
export const isCacheBuilt = () => cacheBuilt;

// Initialize cache from storage on module load
loadCacheFromStorage();
