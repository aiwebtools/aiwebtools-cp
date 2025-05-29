
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
  document.body.style.transition = 'filter 0.3s ease-out';
  document.body.classList.add('time-warp-active');
  
  setTimeout(() => {
    document.body.style.filter = 'hue-rotate(360deg) saturate(3) brightness(2) contrast(2)';
  }, 100);
};

export const cleanupEffects = (effectsContainer: HTMLElement) => {
  document.body.style.filter = '';
  document.body.style.transition = '';
  document.body.classList.remove('time-warp-active');
  effectsContainer.remove();
};

export const openDestinationUrl = (destinationUrl: string) => {
  if (destinationUrl && destinationUrl.trim()) {
    window.open(destinationUrl, '_blank', 'noopener,noreferrer');
  } else {
    console.log('No destination URL provided');
  }
};
