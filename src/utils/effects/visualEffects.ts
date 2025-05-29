
export const createParticles = (effectsContainer: HTMLElement) => {
  console.log('✨ Creating centered portal particles');
  const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#ff4000', '#40ff00', '#ff8000', '#0080ff', '#80ff00', '#ff0040'];
  const particleCount = 40; // Reduced for more focused effect
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'explosion-particle';
    particle.style.cssText = `
      position: absolute;
      width: 6px;
      height: 6px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      top: 50%;
      left: 50%;
      box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
      animation: portal-particle-explosion 2s ease-out forwards;
      transform-origin: center;
    `;
    
    const angle = (i / particleCount) * 360;
    const velocity = 150 + Math.random() * 200; // Reduced velocity for centered effect
    particle.style.setProperty('--angle', `${angle}deg`);
    particle.style.setProperty('--velocity', `${velocity}px`);
    
    effectsContainer.appendChild(particle);
  }
  
  // Add portal-specific particle animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes portal-particle-explosion {
      0% {
        transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(1);
        opacity: 1;
      }
      50% {
        opacity: 0.8;
        transform: translate(-50%, -50%) rotate(var(--angle)) translateX(calc(var(--velocity) * 0.7)) scale(1.2);
      }
      100% {
        transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--velocity)) scale(0);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
};

export const createVortexRings = (effectsContainer: HTMLElement) => {
  console.log('🌀 Creating centered vortex rings');
  const colors = [
    'rgba(0, 255, 255, 0.8)', 
    'rgba(255, 0, 255, 0.8)', 
    'rgba(255, 255, 0, 0.8)', 
    'rgba(0, 255, 0, 0.8)',
    'rgba(255, 0, 0, 0.8)'
  ];
  
  for (let i = 0; i < 5; i++) {
    const ring = document.createElement('div');
    ring.className = 'vortex-ring';
    ring.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 2px solid ${colors[i % colors.length]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: centered-vortex-spin 2.5s ease-out forwards;
      animation-delay: ${i * 0.1}s;
      box-shadow: 0 0 20px currentColor, inset 0 0 20px currentColor;
    `;
    effectsContainer.appendChild(ring);
  }
  
  // Add centered vortex animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes centered-vortex-spin {
      0% {
        width: 50px;
        height: 50px;
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg);
        border-width: 2px;
      }
      50% {
        width: 300px;
        height: 300px;
        opacity: 0.8;
        transform: translate(-50%, -50%) rotate(540deg);
        border-width: 6px;
      }
      100% {
        width: 600px;
        height: 600px;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(1080deg);
        border-width: 1px;
      }
    }
  `;
  document.head.appendChild(style);
};

export const createSpiralTunnel = (effectsContainer: HTMLElement) => {
  console.log('🌪️ Creating centered spiral tunnel');
  const colors = [
    'rgba(255, 0, 255, 0.6)', 
    'rgba(0, 255, 255, 0.6)', 
    'rgba(255, 255, 0, 0.6)',
    'rgba(0, 255, 0, 0.6)'
  ];
  
  for (let i = 0; i < 4; i++) {
    const tunnel = document.createElement('div');
    tunnel.className = 'spiral-tunnel';
    tunnel.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 1px solid ${colors[i]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: centered-spiral-tunnel 3s ease-out forwards;
      animation-delay: ${i * 0.15}s;
      box-shadow: 0 0 25px ${colors[i]}, inset 0 0 25px ${colors[i]};
    `;
    effectsContainer.appendChild(tunnel);
  }
  
  // Add centered spiral animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes centered-spiral-tunnel {
      0% {
        width: 30px;
        height: 30px;
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg);
        border-width: 1px;
      }
      25% {
        width: 150px;
        height: 150px;
        opacity: 0.9;
        transform: translate(-50%, -50%) rotate(270deg);
        border-width: 4px;
      }
      50% {
        width: 400px;
        height: 400px;
        opacity: 0.7;
        transform: translate(-50%, -50%) rotate(720deg);
        border-width: 8px;
      }
      75% {
        width: 700px;
        height: 700px;
        opacity: 0.4;
        transform: translate(-50%, -50%) rotate(1080deg);
        border-width: 12px;
      }
      100% {
        width: 1000px;
        height: 1000px;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(1440deg);
        border-width: 16px;
      }
    }
  `;
  document.head.appendChild(style);
};

export const createEnergyWaves = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating centered energy waves');
  const colors = [
    'rgba(255, 0, 255, 0.7)', 
    'rgba(0, 255, 255, 0.7)', 
    'rgba(255, 255, 0, 0.7)'
  ];
  
  for (let i = 0; i < 3; i++) {
    const wave = document.createElement('div');
    wave.className = 'energy-wave';
    wave.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 3px solid ${colors[i]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: centered-energy-pulse 2s ease-out forwards;
      animation-delay: ${i * 0.2}s;
      box-shadow: 0 0 30px currentColor, inset 0 0 30px currentColor;
    `;
    effectsContainer.appendChild(wave);
  }
  
  // Add centered energy pulse animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes centered-energy-pulse {
      0% {
        width: 20px;
        height: 20px;
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      50% {
        width: 250px;
        height: 250px;
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1.1);
      }
      100% {
        width: 500px;
        height: 500px;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.9);
      }
    }
  `;
  document.head.appendChild(style);
};

export const createLightning = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating centered lightning effect');
  const colors = ['#ffff00', '#ff00ff', '#00ffff', '#ff0080', '#80ff00'];
  
  for (let i = 0; i < 8; i++) {
    const bolt = document.createElement('div');
    bolt.className = 'lightning-bolt';
    bolt.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 3px;
      height: 100px;
      background: linear-gradient(0deg, transparent, ${colors[i % colors.length]}, ${colors[i % colors.length]}, transparent);
      transform-origin: bottom center;
      transform: translate(-50%, -50%) rotate(${i * 45}deg);
      animation: centered-lightning-flash 1.5s ease-out forwards;
      animation-delay: ${i * 0.05}s;
      box-shadow: 0 0 15px ${colors[i % colors.length]};
    `;
    effectsContainer.appendChild(bolt);
  }
  
  // Add centered lightning animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes centered-lightning-flash {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) scaleY(0);
      }
      20% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) scaleY(1.5);
      }
      40% {
        opacity: 0.8;
        transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) scaleY(1.2);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) scaleY(0.5);
      }
    }
  `;
  document.head.appendChild(style);
};

export const createFlash = (effectsContainer: HTMLElement) => {
  console.log('💥 Creating centered portal flash');
  const flash = document.createElement('div');
  flash.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: centered-portal-flash 1.8s ease-out forwards;
    z-index: 9999;
  `;
  effectsContainer.appendChild(flash);
  
  // Add centered flash animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes centered-portal-flash {
      0% {
        width: 200px;
        height: 200px;
        opacity: 0;
        background: radial-gradient(circle, rgba(255,255,255,0) 0%, transparent 100%);
      }
      10% {
        width: 300px;
        height: 300px;
        opacity: 0.3;
        background: radial-gradient(circle, rgba(255,0,255,0.7) 0%, rgba(0,255,255,0.5) 30%, transparent 70%);
      }
      25% {
        width: 500px;
        height: 500px;
        opacity: 0.8;
        background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,0,255,0.7) 20%, rgba(0,255,255,0.5) 50%, transparent 80%);
      }
      50% {
        width: 700px;
        height: 700px;
        opacity: 1;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,0,255,0.8) 15%, rgba(0,255,255,0.6) 35%, rgba(255,255,0,0.4) 60%, transparent 90%);
      }
      100% {
        width: 1000px;
        height: 1000px;
        opacity: 0;
        background: radial-gradient(circle, rgba(0,255,255,0) 0%, transparent 100%);
      }
    }
  `;
  document.head.appendChild(style);
};
