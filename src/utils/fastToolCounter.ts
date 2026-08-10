// Fast tool counter - optimized for performance
import { TOTAL_TOOLS, MARKETING_TOOL_COUNT, TOTAL_TOOL_CATEGORIES } from '@/data/generated/toolCount';

let cachedStats: { total: number; marketing: string; categories: number } | null = null;

export const getFastToolCount = () => {
  // Return cached result if available
  if (cachedStats) {
    return cachedStats;
  }

  // Real counts, generated at build time from the tool database
  const estimatedStats = {
    total: TOTAL_TOOLS,
    marketing: MARKETING_TOOL_COUNT,
    categories: TOTAL_TOOL_CATEGORIES
  };

  cachedStats = estimatedStats;
  return estimatedStats;
};

// Function to update cached stats when actual count is available
export const updateCachedStats = (stats: { total: number; marketing: string; categories: number }) => {
  cachedStats = stats;
};

// Clear cache if needed
export const clearStatsCache = () => {
  cachedStats = null;
};