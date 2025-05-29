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
  // Create a centered portal overlay instead of applying filter to body
  const portalOverlay = document.createElement('div');
  portalOverlay.id = 'portal-overlay';
  portalOverlay.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,0,255,0.3) 0%, rgba(0,255,255,0.2) 30%, rgba(255,255,0,0.1) 60%, transparent 100%);
    z-index: 9998;
    pointer-events: none;
    transition: all 0.3s ease-out;
    animation: portal-spin 3.5s ease-out forwards;
  `;
  
  document.body.appendChild(portalOverlay);
  
  // Add the portal spin animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes portal-spin {
      0% {
        width: 200px;
        height: 200px;
        opacity: 0.8;
        transform: translate(-50%, -50%) rotate(0deg) scale(1);
        background: radial-gradient(circle, rgba(255,0,255,0.3) 0%, rgba(0,255,255,0.2) 30%, rgba(255,255,0,0.1) 60%, transparent 100%);
      }
      25% {
        width: 400px;
        height: 400px;
        opacity: 0.9;
        transform: translate(-50%, -50%) rotate(180deg) scale(1.2);
        background: radial-gradient(circle, rgba(0,255,255,0.4) 0%, rgba(255,255,0,0.3) 30%, rgba(255,0,255,0.2) 60%, transparent 100%);
      }
      50% {
        width: 600px;
        height: 600px;
        opacity: 1;
        transform: translate(-50%, -50%) rotate(360deg) scale(1.5);
        background: radial-gradient(circle, rgba(255,255,0,0.5) 0%, rgba(255,0,255,0.4) 30%, rgba(0,255,255,0.3) 60%, transparent 100%);
      }
      75% {
        width: 800px;
        height: 800px;
        opacity: 0.8;
        transform: translate(-50%, -50%) rotate(540deg) scale(1.8);
        background: radial-gradient(circle, rgba(255,0,0,0.4) 0%, rgba(0,255,0,0.3) 30%, rgba(0,0,255,0.2) 60%, transparent 100%);
      }
      100% {
        width: 1200px;
        height: 1200px;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(720deg) scale(2);
        background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,0,255,0.4) 20%, rgba(0,255,255,0.3) 40%, transparent 80%);
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
    if (style.textContent?.includes('@keyframes portal-spin')) {
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
