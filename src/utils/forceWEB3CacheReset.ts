// Temporary file to force WEB3 cache reset
import { resetCache } from './categoryUtils/cacheManager';

// Force reset cache to rebuild with WEB3 support
console.log('🌐 Forcing WEB3 cache reset...');
resetCache();

export const forceWEB3Reset = () => {
  resetCache();
  console.log('🌐 WEB3 cache forcefully reset');
};