
export const createEffectsContainer = (): HTMLElement => {
  const effectsContainer = document.createElement('div');
  effectsContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  `;
  document.body.appendChild(effectsContainer);
  return effectsContainer;
};

export const applyTimeWarpFilter = () => {
  // Create a more controlled centered portal overlay
  const portalOverlay = document.createElement('div');
  portalOverlay.id = 'portal-overlay';
  portalOverlay.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(64,224,255,0.4) 0%, rgba(128,0,255,0.3) 40%, rgba(255,64,128,0.2) 70%, transparent 100%);
    z-index: 9998;
    pointer-events: none;
    animation: elegant-portal-spin 3.5s ease-out forwards;
    box-shadow: 0 0 40px rgba(64,224,255,0.3), 0 0 80px rgba(128,0,255,0.2);
  `;
  
  document.body.appendChild(portalOverlay);
  
  // Add the elegant portal spin animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes elegant-portal-spin {
      0% {
        width: 120px;
        height: 120px;
        opacity: 0.6;
        transform: translate(-50%, -50%) rotate(0deg) scale(1);
        background: radial-gradient(circle, rgba(64,224,255,0.4) 0%, rgba(128,0,255,0.3) 40%, rgba(255,64,128,0.2) 70%, transparent 100%);
        box-shadow: 0 0 40px rgba(64,224,255,0.3);
      }
      25% {
        width: 200px;
        height: 200px;
        opacity: 0.8;
        transform: translate(-50%, -50%) rotate(180deg) scale(1.1);
        background: radial-gradient(circle, rgba(128,0,255,0.5) 0%, rgba(255,64,128,0.4) 40%, rgba(64,224,255,0.3) 70%, transparent 100%);
        box-shadow: 0 0 60px rgba(128,0,255,0.4);
      }
      50% {
        width: 300px;
        height: 300px;
        opacity: 0.9;
        transform: translate(-50%, -50%) rotate(360deg) scale(1.3);
        background: radial-gradient(circle, rgba(255,64,128,0.6) 0%, rgba(64,224,255,0.5) 40%, rgba(128,0,255,0.4) 70%, transparent 100%);
        box-shadow: 0 0 80px rgba(255,64,128,0.5);
      }
      75% {
        width: 400px;
        height: 400px;
        opacity: 0.7;
        transform: translate(-50%, -50%) rotate(540deg) scale(1.5);
        background: radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(64,224,255,0.5) 30%, rgba(128,0,255,0.3) 60%, transparent 90%);
        box-shadow: 0 0 100px rgba(255,255,255,0.6);
      }
      100% {
        width: 500px;
        height: 500px;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(720deg) scale(1.8);
        background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 50%);
        box-shadow: 0 0 120px rgba(255,255,255,0.8);
      }
    }
  `;
  document.head.appendChild(style);
};

export const cleanupEffects = (effectsContainer: HTMLElement) => {
  // Remove the portal overlay
  const portalOverlay = document.getElementById('portal-overlay');
  if (portalOverlay) {
    portalOverlay.remove();
  }
  
  // Remove the portal animation style
  const portalStyles = document.head.querySelectorAll('style');
  portalStyles.forEach(style => {
    if (style.textContent?.includes('@keyframes elegant-portal-spin')) {
      style.remove();
    }
  });
  
  effectsContainer.remove();
};

export const openDestinationUrl = (destinationUrl: string) => {
  if (destinationUrl && destinationUrl.trim()) {
    // Always open in new window to keep users on our website
    window.open(destinationUrl, '_blank', 'noopener,noreferrer');
  } else {
    console.log('No destination URL provided');
  }
};
