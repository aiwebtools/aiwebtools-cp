
import { createPortalSounds, createRobotVoice } from './effects/audioEffects';
import { 
  createParticles, 
  createVortexRings, 
  createSpiralTunnel,
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

// Extract tool name from current page context or button text
const extractToolName = (destinationUrl: string): string => {
  // Try to get tool name from button context or page title
  const activeElement = document.activeElement as HTMLElement;
  
  // Check if we can get tool name from button text or nearby elements
  if (activeElement) {
    const buttonText = activeElement.textContent || '';
    const parentText = activeElement.parentElement?.textContent || '';
    const cardElement = activeElement.closest('[class*="card"]');
    const titleElement = cardElement?.querySelector('h1, h2, h3, .title, [class*="title"]');
    
    if (titleElement?.textContent) {
      return titleElement.textContent.trim();
    }
    
    if (buttonText.includes('USE IT NOW') && parentText) {
      // Extract tool name from parent context
      const lines = parentText.split('\n').map(line => line.trim()).filter(line => line);
      const toolNameLine = lines.find(line => 
        line.length > 3 && 
        line.length < 100 && 
        !line.includes('USE IT NOW') &&
        !line.includes('View Details') &&
        !line.includes('★')
      );
      if (toolNameLine) return toolNameLine;
    }
  }
  
  // Fallback: extract from URL or use generic name
  if (destinationUrl) {
    const url = new URL(destinationUrl);
    const pathParts = url.pathname.split('/').filter(part => part);
    if (pathParts.length > 0) {
      return pathParts[pathParts.length - 1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  }
  
  return 'Advanced AI Tool';
};

export const createTimePortalEffect = (destinationUrl: string) => {
  console.log('🌀 Creating enhanced time portal effect for URL:', destinationUrl);
  
  // Extract tool name for personalized robot voice
  const toolName = extractToolName(destinationUrl);
  console.log('🎯 Detected tool name:', toolName);
  
  // Create container for all effects
  const effectsContainer = createEffectsContainer();

  // Apply time warp filter to body
  applyTimeWarpFilter();

  // Execute all visual effects with enhanced spiral tunnel
  createParticles(effectsContainer);
  createVortexRings(effectsContainer);
  createSpiralTunnel(effectsContainer);
  createEnergyWaves(effectsContainer);
  createLightning(effectsContainer);
  createFlash(effectsContainer);
  
  // Create portal sounds
  createPortalSounds();
  
  // Create robot voice with contextual message
  createRobotVoice(toolName, destinationUrl);

  // Cleanup and open in new tab after 2.3 seconds (as requested)
  setTimeout(() => {
    console.log('🧹 Cleaning up effects and opening in new tab:', destinationUrl);
    cleanupEffects(effectsContainer);
    openDestinationUrl(destinationUrl);
  }, 2300); // Changed to exactly 2.3 seconds as requested
};
