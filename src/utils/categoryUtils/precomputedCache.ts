import { Tool } from "@/types/tools";
import { allTools } from "@/data/toolsData";
import { mainCategories } from "@/utils/mainCategoryMapping";

// Pre-computed cache for instant category access
let categoryToolsCache: Map<string, Tool[]> | null = null;
let categoryCounts: Record<string, number> | null = null;
let cacheInitialized = false;
let initializationPromise: Promise<void> | null = null;

// Import detection functions lazily to avoid circular dependencies
const getDetectors = async () => {
  const [
    { isHealthAndWellnessTool },
    { isCreativeAndEntertainmentTool },
    { isGamingEntertainmentTool },
    { isSecurityPrivacyTool },
    { isEducationRelatedTool, isAIWebToolsGPT },
    { isIndustrySpecificTool },
    { isSpiritualityTool },
    { isWritingContentTool },
    { getThreeDVisualizationTools },
    { getAudioMusicTools },
    { getVideoMultimediaTools },
    { getEnhancedImageDesignTools },
    { getCodingDevelopmentTools },
    { getMarketingSalesTools },
    { buildToolsCache, getToolsCacheByMainCategory }
  ] = await Promise.all([
    import('./healthDetection'),
    import('./healthDetection'),
    import('./gamingEntertainmentDetection'),
    import('./securityPrivacyDetection'),
    import('./specializedDetection'),
    import('./industryDetection'),
    import('./spiritualityDetection'),
    import('./writingContentDetection'),
    import('./threeDVisualizationDetection'),
    import('./audioMusicDetection'),
    import('./videoMultimediaDetection'),
    import('./imageDesignDetection'),
    import('./codingDevelopmentDetection'),
    import('./marketingSalesDetection'),
    import('./cacheManager')
  ]);
  
  return {
    isHealthAndWellnessTool,
    isCreativeAndEntertainmentTool,
    isGamingEntertainmentTool,
    isSecurityPrivacyTool,
    isEducationRelatedTool,
    isAIWebToolsGPT,
    isIndustrySpecificTool,
    isSpiritualityTool,
    isWritingContentTool,
    getThreeDVisualizationTools,
    getAudioMusicTools,
    getVideoMultimediaTools,
    getEnhancedImageDesignTools,
    getCodingDevelopmentTools,
    getMarketingSalesTools,
    buildToolsCache,
    getToolsCacheByMainCategory
  };
};

/**
 * Initialize the pre-computed cache for all categories
 * This runs once at app startup and caches all category results
 */
export async function initializeCategoryCache(): Promise<void> {
  if (cacheInitialized) return;
  if (initializationPromise) return initializationPromise;
  
  initializationPromise = (async () => {
    const detectors = await getDetectors();
    categoryToolsCache = new Map();
    categoryCounts = {};
    
    const tools = allTools;
    
    // Pre-compute each category
    for (const mainCat of mainCategories) {
      let categoryTools: Tool[] = [];
      
      switch (mainCat.name) {
        case "ALL AI TOOLS":
          categoryTools = [...tools];
          break;
        case "HEALTH, WELLNESS & PERSONAL LIFESTYLE":
        case "HEALTH & WELLNESS":
          categoryTools = tools.filter(detectors.isHealthAndWellnessTool);
          break;
        case "CREATIVE & ENTERTAINMENT":
          categoryTools = tools.filter(detectors.isCreativeAndEntertainmentTool);
          break;
        case "GAMING & ENTERTAINMENT":
          categoryTools = tools.filter(detectors.isGamingEntertainmentTool);
          break;
        case "SECURITY & PRIVACY":
          categoryTools = tools.filter(detectors.isSecurityPrivacyTool);
          break;
        case "EDUCATION & LEARNING":
          categoryTools = tools.filter(detectors.isEducationRelatedTool);
          break;
        case "INDUSTRY SPECIFIC AI TOOLS":
          categoryTools = tools.filter(detectors.isIndustrySpecificTool);
          break;
        case "SPIRITUALITY & PHILOSOPHY":
          categoryTools = tools.filter(detectors.isSpiritualityTool);
          break;
        case "3D & VISUALIZATION":
          categoryTools = detectors.getThreeDVisualizationTools(tools);
          break;
        case "AUDIO & VOICE TOOLS":
          categoryTools = detectors.getAudioMusicTools(tools);
          break;
        case "VIDEO & MULTIMEDIA":
          categoryTools = detectors.getVideoMultimediaTools(tools);
          break;
        case "IMAGE & DESIGN AI TOOLS":
          categoryTools = detectors.getEnhancedImageDesignTools(tools);
          break;
        case "CONTENT CREATION & WRITING":
          categoryTools = tools.filter(detectors.isWritingContentTool);
          break;
        case "CODING & DEVELOPMENT":
        case "AI DEVELOPMENT & CODING":
          categoryTools = detectors.getCodingDevelopmentTools(tools);
          break;
        case "MARKETING & SALES SOLUTIONS":
          categoryTools = detectors.getMarketingSalesTools(tools);
          break;
        default:
          // Use the legacy cache for other categories
          detectors.buildToolsCache(tools);
          const legacyCache = detectors.getToolsCacheByMainCategory();
          categoryTools = legacyCache.get(mainCat.name) || [];
          break;
      }
      
      categoryToolsCache.set(mainCat.name, categoryTools);
      categoryCounts[mainCat.name] = categoryTools.length;
    }
    
    cacheInitialized = true;
  })();
  
  return initializationPromise;
}

/**
 * Get tools for a category from the pre-computed cache
 * Falls back to synchronous computation if cache not ready
 */
export function getCachedToolsByMainCategory(categoryName: string): Tool[] | null {
  if (!cacheInitialized || !categoryToolsCache) {
    return null; // Cache not ready
  }
  return categoryToolsCache.get(categoryName) || null;
}

/**
 * Get category counts from the pre-computed cache
 */
export function getCachedCategoryCounts(): Record<string, number> | null {
  if (!cacheInitialized || !categoryCounts) {
    return null;
  }
  return categoryCounts;
}

/**
 * Check if the cache is initialized
 */
export function isCategoryCacheReady(): boolean {
  return cacheInitialized;
}

/**
 * Explicitly prefetch a specific main category into the cache.
 * Useful for hover-based preloading before navigation.
 */
export async function prefetchCategory(categoryName: string): Promise<void> {
  if (typeof window === 'undefined') return;
  await initializeCategoryCache();
  // Touch the cache entry so its ready when navigating
  if (categoryToolsCache && !categoryToolsCache.has(categoryName)) {
    // For ALL AI TOOLS we can cheaply seed from allTools without extra detection
    if (categoryName === "ALL AI TOOLS") {
      categoryToolsCache.set(categoryName, [...allTools]);
      categoryCounts && (categoryCounts[categoryName] = allTools.length);
    }
  }
}

// IMPORTANT: do not auto-run this on module load. The cache imports the full
// tools DB plus every category detector; doing that during boot was freezing
// the Matrix handoff before the real page could paint. Callers can explicitly
// initialize/prefetch after the site is already interactive.
