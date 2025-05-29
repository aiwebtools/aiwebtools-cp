
export const createParticles = (effectsContainer: HTMLElement) => {
  console.log('✨ Creating enhanced particles');
  const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#ff4000', '#40ff00'];
  const particleCount = 40;
  
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
      animation: particle-explosion 1.2s ease-out forwards;
      transform-origin: center;
    `;
    
    const angle = (i / particleCount) * 360;
    const velocity = 200 + Math.random() * 300;
    particle.style.setProperty('--angle', `${angle}deg`);
    particle.style.setProperty('--velocity', `${velocity}px`);
    
    effectsContainer.appendChild(particle);
  }
};

export const createVortexRings = (effectsContainer: HTMLElement) => {
  console.log('🌀 Creating enhanced vortex rings');
  const colors = ['rgba(0, 255, 255, 0.9)', 'rgba(255, 0, 255, 0.9)', 'rgba(255, 255, 0, 0.9)', 'rgba(0, 255, 0, 0.9)'];
  
  for (let i = 0; i < 5; i++) {
    const ring = document.createElement('div');
    ring.className = 'vortex-ring';
    ring.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 5px solid ${colors[i % colors.length]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: vortex-spin 1.5s ease-out forwards;
      animation-delay: ${i * 0.08}s;
      box-shadow: 0 0 20px currentColor, inset 0 0 20px currentColor;
    `;
    effectsContainer.appendChild(ring);
  }
};

export const createSpiralTunnel = (effectsContainer: HTMLElement) => {
  console.log('🌪️ Creating spiral tunnel');
  const colors = ['rgba(255, 0, 255, 0.7)', 'rgba(0, 255, 255, 0.7)', 'rgba(255, 255, 0, 0.7)'];
  
  for (let i = 0; i < 3; i++) {
    const tunnel = document.createElement('div');
    tunnel.className = 'spiral-tunnel';
    tunnel.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 0px solid ${colors[i]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: spiral-tunnel 2s ease-out forwards;
      animation-delay: ${i * 0.15}s;
      box-shadow: 0 0 30px ${colors[i]}, inset 0 0 30px ${colors[i]};
    `;
    effectsContainer.appendChild(tunnel);
  }
};

export const createEnergyWaves = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating enhanced energy waves');
  const colors = ['rgba(255, 0, 255, 0.8)', 'rgba(0, 255, 255, 0.8)', 'rgba(255, 255, 0, 0.8)'];
  
  for (let i = 0; i < 3; i++) {
    const wave = document.createElement('div');
    wave.className = 'energy-wave';
    wave.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 4px solid ${colors[i]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: energy-pulse 1.3s ease-out forwards;
      animation-delay: ${i * 0.1}s;
      box-shadow: 0 0 25px currentColor, inset 0 0 25px currentColor;
    `;
    effectsContainer.appendChild(wave);
  }
};

export const createLightning = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating enhanced lightning bolts');
  const colors = ['#ffff00', '#ff00ff', '#00ffff', '#ff0080', '#80ff00'];
  
  for (let i = 0; i < 8; i++) {
    const bolt = document.createElement('div');
    bolt.className = 'lightning-bolt';
    bolt.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 3px;
      height: 120px;
      background: linear-gradient(0deg, transparent, ${colors[i % colors.length]}, transparent);
      transform-origin: bottom center;
      transform: translate(-50%, -100%) rotate(${i * 45}deg);
      animation: lightning-flash 0.8s ease-out forwards;
      animation-delay: ${i * 0.03}s;
      box-shadow: 0 0 20px ${colors[i % colors.length]}, 0 0 40px ${colors[i % colors.length]};
    `;
    effectsContainer.appendChild(bolt);
  }
};

export const createFlash = (effectsContainer: HTMLElement) => {
  console.log('💥 Creating enhanced portal flash');
  const flash = document.createElement('div');
  flash.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: portal-flash 1s ease-out forwards;
  `;
  effectsContainer.appendChild(flash);
};
