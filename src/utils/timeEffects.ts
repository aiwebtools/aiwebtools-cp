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
    const parentElement = activeElement.parentElement;
    const cardElement = activeElement.closest('[class*="card"]');
    
    // Look for title elements in the card
    const titleElement = cardElement?.querySelector('h1, h2, h3, .title, [class*="title"], [class*="CardTitle"]');
    
    if (titleElement?.textContent) {
      const title = titleElement.textContent.trim();
      // Clean up the title - remove extra whitespace and newlines
      const cleanTitle = title.replace(/\s+/g, ' ').trim();
      if (cleanTitle && cleanTitle.length > 2) {
        console.log('🎯 Found tool title from card:', cleanTitle);
        return cleanTitle;
      }
    }
    
    // Look for any text content in the card that might be the tool name
    if (cardElement) {
      const cardText = cardElement.textContent || '';
      const lines = cardText.split('\n').map(line => line.trim()).filter(line => line);
      
      // Find the first substantial line that's not a button or common UI text
      const toolNameLine = lines.find(line => 
        line.length > 3 && 
        line.length < 100 && 
        !line.includes('USE IT NOW') &&
        !line.includes('View Details') &&
        !line.includes('★') &&
        !line.includes('rating') &&
        !line.includes('votes') &&
        !line.toLowerCase().includes('category') &&
        !line.toLowerCase().includes('tag')
      );
      
      if (toolNameLine) {
        console.log('🎯 Found tool name from card content:', toolNameLine);
        return toolNameLine;
      }
    }
    
    // Try to get from parent context if it's a "USE IT NOW" button
    if (buttonText.includes('USE IT NOW') && parentElement) {
      const parentText = parentElement.textContent || '';
      const lines = parentText.split('\n').map(line => line.trim()).filter(line => line);
      const toolNameLine = lines.find(line => 
        line.length > 3 && 
        line.length < 100 && 
        !line.includes('USE IT NOW') &&
        !line.includes('View Details') &&
        !line.includes('★')
      );
      if (toolNameLine) {
        console.log('🎯 Found tool name from parent context:', toolNameLine);
        return toolNameLine;
      }
    }
  }
  
  // Fallback: extract from URL or use generic name
  if (destinationUrl) {
    try {
      const url = new URL(destinationUrl);
      const pathParts = url.pathname.split('/').filter(part => part);
      if (pathParts.length > 0) {
        const urlBasedName = pathParts[pathParts.length - 1]
          .replace(/-/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase());
        console.log('🎯 Using URL-based tool name:', urlBasedName);
        return urlBasedName;
      }
    } catch (error) {
      console.log('Error parsing URL:', error);
    }
  }
  
  console.log('🎯 Using fallback tool name');
  return 'AI Tool';
};

export const createTimePortalEffect = (destinationUrl: string) => {
  console.log('🌀 Creating enhanced dimensional portal effect for URL:', destinationUrl);
  
  // Extract tool name for personalized robot voice
  const toolName = extractToolName(destinationUrl);
  console.log('🎯 Detected tool name:', toolName);
  
  // Create container for all effects
  const effectsContainer = createEffectsContainer();

  // Apply enhanced time warp filter to body
  applyTimeWarpFilter();

  // Execute all enhanced visual effects
  createParticles(effectsContainer);
  createVortexRings(effectsContainer);
  createSpiralTunnel(effectsContainer);
  createEnergyWaves(effectsContainer);
  createLightning(effectsContainer);
  createFlash(effectsContainer);
  
  // Create extended portal sounds
  createPortalSounds();
  
  // Create robot voice with contextual message
  createRobotVoice(toolName, destinationUrl);

  // Cleanup and open in new tab after 3.5 seconds (extended to match audio)
  setTimeout(() => {
    console.log('🧹 Cleaning up effects and opening in new tab:', destinationUrl);
    cleanupEffects(effectsContainer);
    openDestinationUrl(destinationUrl);
  }, 3500); // Extended to match the longer audio duration
};
