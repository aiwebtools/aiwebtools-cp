
// Dynamic mobile detection - check at runtime, not module load
const checkIsMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

export const createEffectsContainer = (): HTMLElement => {
  const effectsContainer = document.createElement('div');
  effectsContainer.id = 'time-warp-effects-container';
  effectsContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 99999;
    overflow: visible;
  `;
  document.body.appendChild(effectsContainer);
  return effectsContainer;
};

export const applyTimeWarpFilter = () => {
  // FULL EPIC EFFECT ON ALL DEVICES - no more simplified mobile version
  
  // Create INTENSE screen-wide color explosion
  const colorExplosion = document.createElement('div');
  colorExplosion.id = 'color-explosion';
  colorExplosion.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99990;
    pointer-events: none;
    animation: intense-color-explosion 1s ease-out forwards;
    background: radial-gradient(circle at center, 
      rgba(0,255,255,0.9) 0%, 
      rgba(255,0,255,0.8) 15%, 
      rgba(255,255,0,0.7) 30%, 
      rgba(0,255,128,0.6) 45%, 
      rgba(255,64,128,0.5) 60%, 
      transparent 80%);
  `;
  document.body.appendChild(colorExplosion);

  // Create a more controlled centered portal overlay
  const portalOverlay = document.createElement('div');
  portalOverlay.id = 'portal-overlay';
  portalOverlay.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,255,255,0.9) 20%, rgba(255,0,255,0.8) 40%, rgba(255,255,0,0.6) 60%, transparent 80%);
    z-index: 99995;
    pointer-events: none;
    animation: mega-portal-spin 1s ease-out forwards;
    box-shadow: 
      0 0 60px rgba(0,255,255,0.9), 
      0 0 120px rgba(255,0,255,0.8),
      0 0 180px rgba(255,255,0,0.6),
      0 0 240px rgba(0,255,128,0.4);
  `;
  
  document.body.appendChild(portalOverlay);
  
  // Add rainbow scan lines for extra intensity
  const scanLines = document.createElement('div');
  scanLines.id = 'scan-lines';
  scanLines.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99985;
    pointer-events: none;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,255,0,0.15) 2px,
      rgba(0,255,0,0.15) 4px
    );
    animation: scan-lines-move 0.2s linear infinite;
    mix-blend-mode: screen;
  `;
  document.body.appendChild(scanLines);
  
  // Add the mega portal spin animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes mega-portal-spin {
      0% {
        width: 80px;
        height: 80px;
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) scale(1);
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,255,255,0.9) 20%, rgba(255,0,255,0.8) 40%, rgba(255,255,0,0.6) 60%, transparent 80%);
        box-shadow: 
          0 0 100px rgba(0,255,255,1), 
          0 0 200px rgba(255,0,255,0.9),
          0 0 300px rgba(255,255,0,0.7);
        filter: brightness(3) saturate(2);
      }
      15% {
        width: 200px;
        height: 200px;
        opacity: 1;
        transform: translate(-50%, -50%) rotate(180deg) scale(1.3);
        background: radial-gradient(circle, rgba(255,0,255,1) 0%, rgba(0,255,255,0.9) 25%, rgba(255,255,0,0.8) 50%, rgba(0,255,128,0.6) 75%, transparent 90%);
        box-shadow: 
          0 0 150px rgba(255,0,255,1), 
          0 0 250px rgba(0,255,255,0.9);
        filter: brightness(4) saturate(3);
      }
      35% {
        width: 400px;
        height: 400px;
        opacity: 1;
        transform: translate(-50%, -50%) rotate(450deg) scale(1.5);
        background: radial-gradient(circle, rgba(255,255,0,1) 0%, rgba(255,0,255,0.9) 20%, rgba(0,255,255,0.8) 40%, rgba(255,128,0,0.6) 65%, transparent 85%);
        box-shadow: 
          0 0 200px rgba(255,255,0,1), 
          0 0 350px rgba(255,0,255,0.8);
        filter: brightness(5) saturate(4);
      }
      60% {
        width: 600px;
        height: 600px;
        opacity: 0.9;
        transform: translate(-50%, -50%) rotate(720deg) scale(1.8);
        background: radial-gradient(circle, rgba(0,255,128,1) 0%, rgba(255,255,0,0.9) 20%, rgba(255,0,255,0.7) 45%, rgba(0,255,255,0.5) 70%, transparent 90%);
        box-shadow: 
          0 0 250px rgba(0,255,128,1), 
          0 0 400px rgba(255,255,255,0.8);
        filter: brightness(6) saturate(5);
      }
      85% {
        width: 800px;
        height: 800px;
        opacity: 0.5;
        transform: translate(-50%, -50%) rotate(1080deg) scale(2);
        filter: brightness(7) saturate(6);
      }
      100% {
        width: 1000px;
        height: 1000px;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(1440deg) scale(2.5);
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 40%);
        box-shadow: 0 0 300px rgba(255,255,255,1);
        filter: brightness(10) saturate(8);
      }
    }
    
    @keyframes intense-color-explosion {
      0% {
        opacity: 0;
        filter: brightness(1) saturate(1);
      }
      10% {
        opacity: 1;
        background: radial-gradient(circle at center, 
          rgba(255,255,255,0.95) 0%, 
          rgba(0,255,255,0.9) 10%, 
          rgba(255,0,255,0.85) 25%, 
          rgba(255,255,0,0.7) 40%, 
          rgba(0,255,128,0.5) 60%, 
          transparent 85%);
        filter: brightness(3) saturate(4);
      }
      25% {
        opacity: 0.9;
        background: radial-gradient(circle at center, 
          rgba(255,0,255,0.9) 0%, 
          rgba(255,255,0,0.85) 15%, 
          rgba(0,255,255,0.8) 35%, 
          rgba(255,64,128,0.6) 55%, 
          transparent 80%);
        filter: brightness(4) saturate(5);
      }
      50% {
        opacity: 0.7;
        background: radial-gradient(circle at center, 
          rgba(255,255,0,0.8) 0%, 
          rgba(0,255,128,0.75) 20%, 
          rgba(255,0,255,0.6) 45%, 
          transparent 75%);
        filter: brightness(3) saturate(4);
      }
      100% {
        opacity: 0;
        filter: brightness(1) saturate(1);
      }
    }
    
    @keyframes scan-lines-move {
      0% { transform: translateY(0); }
      100% { transform: translateY(4px); }
    }
  `;
  document.head.appendChild(style);
};

export const cleanupEffects = (effectsContainer: HTMLElement) => {
  // AGGRESSIVE cleanup - remove ALL portal and matrix effects immediately
  
  // Remove all known portal/matrix element IDs
  const elementIds = [
    'portal-overlay',
    'color-explosion', 
    'scan-lines',
    'crt-scanlines',
    'matrix-backdrop',
    'time-warp-effects-container'
  ];
  
  elementIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });
  
  // Remove ALL Matrix explosion elements by class - comprehensive list
  const classSelectors = [
    '.matrix-code-stream',
    '.matrix-explosion-char', 
    '.matrix-waterfall',
    '.matrix-waterfall-wave2',
    '.matrix-binary-ring',
    '.matrix-orb',
    '.code-tunnel-layer',
    '.matrix-confetti-streamer',
    '.time-warp-ephemeral'
  ];
  
  document.querySelectorAll(classSelectors.join(', ')).forEach(el => el.remove());
  
  // Remove ALL portal/matrix animation styles from head
  document.querySelectorAll('style').forEach(style => {
    if (style.textContent?.includes('@keyframes mega-portal-spin') || 
        style.textContent?.includes('@keyframes intense-color-explosion') ||
        style.textContent?.includes('@keyframes scan-lines-move') ||
        style.textContent?.includes('@keyframes code-stream-explode') ||
        style.textContent?.includes('@keyframes char-mega-explode') ||
        style.textContent?.includes('@keyframes backdrop-pulse') ||
        style.id === 'matrix-explosion-style' ||
        style.id === 'matrix-code-style') {
      style.remove();
    }
  });
  
  // Remove container if still exists
  try {
    effectsContainer.remove();
  } catch (e) {}
};

export const openDestinationUrl = (destinationUrl: string) => {
  if (!destinationUrl || !destinationUrl.trim()) {
    console.log('No destination URL provided');
    return;
  }

  // Use a real anchor click instead of window.open.
  // window.open(...,'noopener,noreferrer') from sandboxed/iframed contexts
  // (and even some COOP-strict production setups) triggers
  // ERR_BLOCKED_BY_RESPONSE on destinations like chatgpt.com.
  // A synthetic <a target="_blank"> click is the most reliable way to
  // open external links across browsers, sandboxes, and CSP setups.
  try {
    const a = document.createElement('a');
    a.href = destinationUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    // Defer cleanup so the click event fully propagates first
    setTimeout(() => {
      try { a.remove(); } catch {}
    }, 0);
  } catch (err) {
    // Last-resort fallback
    try {
      window.open(destinationUrl, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = destinationUrl;
    }
  }
};
