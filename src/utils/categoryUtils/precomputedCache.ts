import { Tool } from "@/types/tools";
import { allTools } from "@/data/toolsData";
import { mainCategories } from "@/utils/mainCategoryMapping";

// Memory-optimized cache - stores tool INDICES instead of full objects
// This reduces memory from ~200MB to ~10MB
let categoryIndexCache: Map<string, number[]> | null = null;
let categoryCounts: Record<string, number> | null = null;
let cacheInitialized = false;
let initializationPromise: Promise<void> | null = null;

// Lazy detector loading - only load when needed
let detectorsCache: any = null;
const getDetectors = async () => {
  if (detectorsCache) return detectorsCache;
  
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
  
  detectorsCache = {
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
  
  return detectorsCache;
};

/**
 * Initialize the pre-computed cache for all categories
 * Memory-optimized: stores indices instead of tool copies
 */
export async function initializeCategoryCache(): Promise<void> {
  if (cacheInitialized) return;
  if (initializationPromise) return initializationPromise;
  
  initializationPromise = (async () => {
    const detectors = await getDetectors();
    categoryIndexCache = new Map();
    categoryCounts = {};
    
    const tools = allTools;
    
    // Pre-compute each category - store INDICES only for memory efficiency
    for (const mainCat of mainCategories) {
      let categoryToolIndices: number[] = [];
      
      switch (mainCat.name) {
        case "ALL AI TOOLS":
          categoryToolIndices = tools.map((_, i) => i);
          break;
        case "HEALTH, WELLNESS & PERSONAL LIFESTYLE":
        case "HEALTH & WELLNESS":
          categoryToolIndices = tools.map((t, i) => detectors.isHealthAndWellnessTool(t) ? i : -1).filter(i => i >= 0);
          break;
        case "CREATIVE & ENTERTAINMENT":
          categoryToolIndices = tools.map((t, i) => detectors.isCreativeAndEntertainmentTool(t) ? i : -1).filter(i => i >= 0);
          break;
        case "GAMING & ENTERTAINMENT":
          categoryToolIndices = tools.map((t, i) => detectors.isGamingEntertainmentTool(t) ? i : -1).filter(i => i >= 0);
          break;
        case "SECURITY & PRIVACY":
          categoryToolIndices = tools.map((t, i) => detectors.isSecurityPrivacyTool(t) ? i : -1).filter(i => i >= 0);
          break;
        case "EDUCATION & LEARNING":
          categoryToolIndices = tools.map((t, i) => detectors.isEducationRelatedTool(t) ? i : -1).filter(i => i >= 0);
          break;
        case "INDUSTRY SPECIFIC AI TOOLS":
          categoryToolIndices = tools.map((t, i) => detectors.isIndustrySpecificTool(t) ? i : -1).filter(i => i >= 0);
          break;
        case "SPIRITUALITY & PHILOSOPHY":
          categoryToolIndices = tools.map((t, i) => detectors.isSpiritualityTool(t) ? i : -1).filter(i => i >= 0);
          break;
        case "3D & VISUALIZATION": {
          const catTools = detectors.getThreeDVisualizationTools(tools);
          const titleSet = new Set(catTools.map((t: Tool) => t.title));
          categoryToolIndices = tools.map((t, i) => titleSet.has(t.title) ? i : -1).filter(i => i >= 0);
          break;
        }
        case "AUDIO & VOICE TOOLS": {
          const catTools = detectors.getAudioMusicTools(tools);
          const titleSet = new Set(catTools.map((t: Tool) => t.title));
          categoryToolIndices = tools.map((t, i) => titleSet.has(t.title) ? i : -1).filter(i => i >= 0);
          break;
        }
        case "VIDEO & MULTIMEDIA": {
          const catTools = detectors.getVideoMultimediaTools(tools);
          const titleSet = new Set(catTools.map((t: Tool) => t.title));
          categoryToolIndices = tools.map((t, i) => titleSet.has(t.title) ? i : -1).filter(i => i >= 0);
          break;
        }
        case "IMAGE & DESIGN AI TOOLS": {
          const catTools = detectors.getEnhancedImageDesignTools(tools);
          const titleSet = new Set(catTools.map((t: Tool) => t.title));
          categoryToolIndices = tools.map((t, i) => titleSet.has(t.title) ? i : -1).filter(i => i >= 0);
          break;
        }
        case "CONTENT CREATION & WRITING":
          categoryToolIndices = tools.map((t, i) => detectors.isWritingContentTool(t) ? i : -1).filter(i => i >= 0);
          break;
        case "CODING & DEVELOPMENT":
        case "AI DEVELOPMENT & CODING": {
          const catTools = detectors.getCodingDevelopmentTools(tools);
          const titleSet = new Set(catTools.map((t: Tool) => t.title));
          categoryToolIndices = tools.map((t, i) => titleSet.has(t.title) ? i : -1).filter(i => i >= 0);
          break;
        }
        case "MARKETING & SALES SOLUTIONS": {
          const catTools = detectors.getMarketingSalesTools(tools);
          const titleSet = new Set(catTools.map((t: Tool) => t.title));
          categoryToolIndices = tools.map((t, i) => titleSet.has(t.title) ? i : -1).filter(i => i >= 0);
          break;
        }
        default:
          // Use the legacy cache for other categories
          detectors.buildToolsCache(tools);
          const legacyCache = detectors.getToolsCacheByMainCategory();
          const legacyTools = legacyCache.get(mainCat.name) || [];
          const titleSet = new Set(legacyTools.map((t: Tool) => t.title));
          categoryToolIndices = tools.map((t, i) => titleSet.has(t.title) ? i : -1).filter(i => i >= 0);
          break;
      }
      
      categoryIndexCache.set(mainCat.name, categoryToolIndices);
      categoryCounts[mainCat.name] = categoryToolIndices.length;
    }
    
    cacheInitialized = true;
  })();
  
  return initializationPromise;
}

/**
 * Get tools for a category from the pre-computed cache
 * Converts indices back to tools on demand
 */
export function getCachedToolsByMainCategory(categoryName: string): Tool[] | null {
  if (!cacheInitialized || !categoryIndexCache) {
    return null; // Cache not ready
  }
  const indices = categoryIndexCache.get(categoryName);
  if (!indices) return null;
  // Convert indices to tools on-demand (avoids storing duplicate tool objects)
  return indices.map(i => allTools[i]);
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
  // Touch the cache entry so its ready when navigating
  if (categoryIndexCache && !categoryIndexCache.has(categoryName)) {
    // For ALL AI TOOLS we can cheaply seed from allTools without extra detection
    if (categoryName === "ALL AI TOOLS") {
      categoryIndexCache.set(categoryName, allTools.map((_, i) => i));
      categoryCounts && (categoryCounts[categoryName] = allTools.length);
    }
  }
}

// Start pre-computation in idle time to avoid blocking initial render
if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      initializeCategoryCache();
    }, { timeout: 500 }); // Longer timeout = lower priority = less memory pressure at startup
  } else {
    setTimeout(() => {
      initializeCategoryCache();
    }, 100);
  }
}
