// Fast tool counter - optimized for performance
let cachedStats: { total: number; marketing: string; categories: number } | null = null;

export const getFastToolCount = () => {
  // Return cached result if available
  if (cachedStats) {
    return cachedStats;
  }

  // Simple estimate for fast initial loading
  // These numbers will be updated when the actual tools load
  const estimatedStats = {
    total: 1300,
    marketing: "1300+",
    categories: 16
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