
export const createParticles = (effectsContainer: HTMLElement) => {
  console.log('✨ Creating elegant spiral particles');
  const colors = ['#40E0FF', '#8000FF', '#FF4080']; // Reduced to 3 elegant colors
  const particleCount = 24; // Reduced for cleaner effect
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'spiral-particle';
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      top: 50%;
      left: 50%;
      box-shadow: 0 0 10px currentColor;
      animation: elegant-spiral-particle 2.5s ease-out forwards;
      transform-origin: center;
    `;
    
    const angle = (i / particleCount) * 360;
    const velocity = 80 + Math.random() * 60; // More controlled velocity
    particle.style.setProperty('--angle', `${angle}deg`);
    particle.style.setProperty('--velocity', `${velocity}px`);
    
    effectsContainer.appendChild(particle);
  }
  
  // Add elegant spiral particle animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes elegant-spiral-particle {
      0% {
        transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(1);
        opacity: 0.8;
      }
      50% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(calc(var(--angle) + 180deg)) translateX(calc(var(--velocity) * 0.6)) scale(1.1);
      }
      100% {
        transform: translate(-50%, -50%) rotate(calc(var(--angle) + 360deg)) translateX(var(--velocity)) scale(0);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
};

export const createVortexRings = (effectsContainer: HTMLElement) => {
  console.log('🌀 Creating elegant vortex rings');
  const colors = [
    'rgba(64, 224, 255, 0.6)', 
    'rgba(128, 0, 255, 0.6)', 
    'rgba(255, 64, 128, 0.6)'
  ];
  
  for (let i = 0; i < 3; i++) {
    const ring = document.createElement('div');
    ring.className = 'elegant-vortex-ring';
    ring.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 2px solid ${colors[i]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: elegant-vortex-spin 2.8s ease-out forwards;
      animation-delay: ${i * 0.2}s;
      box-shadow: 0 0 20px ${colors[i]};
    `;
    effectsContainer.appendChild(ring);
  }
  
  // Add elegant vortex animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes elegant-vortex-spin {
      0% {
        width: 60px;
        height: 60px;
        opacity: 0.8;
        transform: translate(-50%, -50%) rotate(0deg);
        border-width: 2px;
      }
      50% {
        width: 200px;
        height: 200px;
        opacity: 1;
        transform: translate(-50%, -50%) rotate(360deg);
        border-width: 3px;
      }
      100% {
        width: 350px;
        height: 350px;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(720deg);
        border-width: 1px;
      }
    }
  `;
  document.head.appendChild(style);
};

export const createSpiralTunnel = (effectsContainer: HTMLElement) => {
  console.log('🌪️ Creating elegant spiral tunnel');
  const colors = [
    'rgba(64, 224, 255, 0.4)', 
    'rgba(128, 0, 255, 0.4)', 
    'rgba(255, 64, 128, 0.4)'
  ];
  
  for (let i = 0; i < 6; i++) {
    const tunnel = document.createElement('div');
    tunnel.className = 'elegant-spiral-tunnel';
    tunnel.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 1px solid ${colors[i % colors.length]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: elegant-spiral-tunnel 3.2s ease-out forwards;
      animation-delay: ${i * 0.1}s;
      box-shadow: 0 0 15px ${colors[i % colors.length]};
    `;
    effectsContainer.appendChild(tunnel);
  }
  
  // Add elegant spiral animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes elegant-spiral-tunnel {
      0% {
        width: 40px;
        height: 40px;
        opacity: 0.6;
        transform: translate(-50%, -50%) rotate(0deg);
        border-width: 1px;
      }
      25% {
        width: 120px;
        height: 120px;
        opacity: 0.8;
        transform: translate(-50%, -50%) rotate(180deg);
        border-width: 2px;
      }
      50% {
        width: 240px;
        height: 240px;
        opacity: 0.9;
        transform: translate(-50%, -50%) rotate(450deg);
        border-width: 3px;
      }
      75% {
        width: 320px;
        height: 320px;
        opacity: 0.6;
        transform: translate(-50%, -50%) rotate(630deg);
        border-width: 2px;
      }
      100% {
        width: 400px;
        height: 400px;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(900deg);
        border-width: 1px;
      }
    }
  `;
  document.head.appendChild(style);
};

export const createEnergyWaves = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating elegant energy waves');
  const colors = [
    'rgba(64, 224, 255, 0.5)', 
    'rgba(128, 0, 255, 0.5)', 
    'rgba(255, 64, 128, 0.5)'
  ];
  
  for (let i = 0; i < 3; i++) {
    const wave = document.createElement('div');
    wave.className = 'elegant-energy-wave';
    wave.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 2px solid ${colors[i]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: elegant-energy-pulse 2.4s ease-out forwards;
      animation-delay: ${i * 0.3}s;
      box-shadow: 0 0 25px ${colors[i]};
    `;
    effectsContainer.appendChild(wave);
  }
  
  // Add elegant energy pulse animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes elegant-energy-pulse {
      0% {
        width: 30px;
        height: 30px;
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1);
      }
      50% {
        width: 160px;
        height: 160px;
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.05);
      }
      100% {
        width: 280px;
        height: 280px;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.95);
      }
    }
  `;
  document.head.appendChild(style);
};

export const createLightning = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating elegant lightning effect');
  const colors = ['#40E0FF', '#8000FF', '#FF4080'];
  
  for (let i = 0; i < 6; i++) {
    const bolt = document.createElement('div');
    bolt.className = 'elegant-lightning-bolt';
    bolt.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: 60px;
      background: linear-gradient(0deg, transparent, ${colors[i % colors.length]}, ${colors[i % colors.length]}, transparent);
      transform-origin: bottom center;
      transform: translate(-50%, -50%) rotate(${i * 60}deg);
      animation: elegant-lightning-flash 1.8s ease-out forwards;
      animation-delay: ${i * 0.08}s;
      box-shadow: 0 0 10px ${colors[i % colors.length]};
    `;
    effectsContainer.appendChild(bolt);
  }
  
  // Add elegant lightning animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes elegant-lightning-flash {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) scaleY(0);
      }
      30% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) scaleY(1.2);
      }
      60% {
        opacity: 0.8;
        transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) scaleY(1);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) scaleY(0.3);
      }
    }
  `;
  document.head.appendChild(style);
};

export const createFlash = (effectsContainer: HTMLElement) => {
  console.log('💫 Creating elegant portal flash');
  const flash = document.createElement('div');
  flash.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: elegant-portal-flash 2.2s ease-out forwards;
    z-index: 9999;
  `;
  effectsContainer.appendChild(flash);
  
  // Add elegant flash animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes elegant-portal-flash {
      0% {
        width: 100px;
        height: 100px;
        opacity: 0;
        background: radial-gradient(circle, rgba(255,255,255,0) 0%, transparent 100%);
      }
      15% {
        width: 180px;
        height: 180px;
        opacity: 0.4;
        background: radial-gradient(circle, rgba(64,224,255,0.6) 0%, rgba(128,0,255,0.4) 40%, transparent 80%);
      }
      35% {
        width: 280px;
        height: 280px;
        opacity: 0.8;
        background: radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(64,224,255,0.5) 25%, rgba(128,0,255,0.4) 50%, transparent 85%);
      }
      60% {
        width: 350px;
        height: 350px;
        opacity: 0.9;
        background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,64,128,0.6) 20%, rgba(64,224,255,0.4) 45%, transparent 90%);
      }
      100% {
        width: 450px;
        height: 450px;
        opacity: 0;
        background: radial-gradient(circle, rgba(255,255,255,0) 0%, transparent 100%);
      }
    }
  `;
  document.head.appendChild(style);
};
