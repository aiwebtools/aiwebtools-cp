
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
  document.body.style.filter = 'hue-rotate(0deg) saturate(1) brightness(1)';
  document.body.style.transition = 'filter 0.2s ease-out';
  
  setTimeout(() => {
    document.body.style.filter = 'hue-rotate(360deg) saturate(1.5) brightness(1.2)';
  }, 50);
};

export const cleanupEffects = (effectsContainer: HTMLElement) => {
  document.body.style.filter = '';
  document.body.style.transition = '';
  effectsContainer.remove();
};

export const openDestinationUrl = (destinationUrl: string) => {
  if (destinationUrl && destinationUrl.trim()) {
    window.open(destinationUrl, '_blank', 'noopener,noreferrer');
  } else {
    console.log('No destination URL provided');
  }
};
