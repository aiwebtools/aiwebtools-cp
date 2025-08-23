// Temporary file to force cache reset for Phenomenon Investigator Suite URL updates
import { resetCache } from './categoryUtils/cacheManager';

// Force reset cache to rebuild with updated Phenomenon Investigator URLs
console.log('🛸 Forcing Phenomenon Investigator cache reset...');
resetCache();

export const forceWEB3Reset = () => {
  resetCache();
  console.log('🛸 Phenomenon Investigator cache forcefully reset');
};

// Cache buster timestamp for Phenomenon Investigator URL fix
export const CACHE_BUSTER_PHENOMENON = "phenomenon-investigator-url-fix-2025-01-25-16-45-32";