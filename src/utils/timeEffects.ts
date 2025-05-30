
import { createPortalSounds } from './effects/audioEffects';
import { 
  createParticles, 
  createVortexRings, 
  createEnergyWaves, 
  createLightning, 
  createFlash 
} from './effects/visualEffects';
import { 
  createEffectsContainer, 
  applyTimeWarpFilter, 
  cleanupEffects, 
  openDestinationUrl 
} from './effects/domEffects';

export const createTimePortalEffect = (destinationUrl: string) => {
  console.log('🌀 Creating time portal effect for URL:', destinationUrl);
  
  // Create container for all effects
  const effectsContainer = createEffectsContainer();

  // Apply time warp filter to body
  applyTimeWarpFilter();

  // Execute all effects
  createParticles(effectsContainer);
  createVortexRings(effectsContainer);
  createEnergyWaves(effectsContainer);
  createLightning(effectsContainer);
  createFlash(effectsContainer);
  createPortalSounds();

  // Cleanup and open in new tab after 2.5 seconds
  setTimeout(() => {
    console.log('🧹 Cleaning up effects and opening in new tab:', destinationUrl);
    cleanupEffects(effectsContainer);
    openDestinationUrl(destinationUrl);
  }, 2500);
};
