
export const createParticles = (effectsContainer: HTMLElement) => {
  console.log('✨ Creating ultra-bright particles');
  const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#ff4000', '#40ff00', '#ff8000', '#0080ff', '#80ff00', '#ff0040'];
  const particleCount = 60;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'explosion-particle';
    particle.style.cssText = `
      position: absolute;
      width: 8px;
      height: 8px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      top: 50%;
      left: 50%;
      box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
      animation: particle-explosion 1.5s ease-out forwards;
      transform-origin: center;
    `;
    
    const angle = (i / particleCount) * 360;
    const velocity = 250 + Math.random() * 400;
    particle.style.setProperty('--angle', `${angle}deg`);
    particle.style.setProperty('--velocity', `${velocity}px`);
    
    effectsContainer.appendChild(particle);
  }
};

export const createVortexRings = (effectsContainer: HTMLElement) => {
  console.log('🌀 Creating intense vortex spiral');
  const colors = [
    'rgba(0, 255, 255, 1)', 
    'rgba(255, 0, 255, 1)', 
    'rgba(255, 255, 0, 1)', 
    'rgba(0, 255, 0, 1)',
    'rgba(255, 0, 0, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(255, 128, 0, 1)'
  ];
  
  for (let i = 0; i < 8; i++) {
    const ring = document.createElement('div');
    ring.className = 'vortex-ring';
    ring.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 3px solid ${colors[i % colors.length]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: vortex-spin 2s ease-out forwards;
      animation-delay: ${i * 0.06}s;
      box-shadow: 
        0 0 30px currentColor, 
        inset 0 0 30px currentColor,
        0 0 60px currentColor,
        inset 0 0 60px currentColor;
    `;
    effectsContainer.appendChild(ring);
  }
};

export const createSpiralTunnel = (effectsContainer: HTMLElement) => {
  console.log('🌪️ Creating dimensional spiral tunnel');
  const colors = [
    'rgba(255, 0, 255, 1)', 
    'rgba(0, 255, 255, 1)', 
    'rgba(255, 255, 0, 1)',
    'rgba(0, 255, 0, 1)',
    'rgba(255, 0, 0, 1)'
  ];
  
  for (let i = 0; i < 5; i++) {
    const tunnel = document.createElement('div');
    tunnel.className = 'spiral-tunnel';
    tunnel.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 0px solid ${colors[i]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: spiral-tunnel 2.5s ease-out forwards;
      animation-delay: ${i * 0.1}s;
      box-shadow: 
        0 0 40px ${colors[i]}, 
        inset 0 0 40px ${colors[i]},
        0 0 80px ${colors[i]},
        inset 0 0 80px ${colors[i]};
    `;
    effectsContainer.appendChild(tunnel);
  }
};

export const createEnergyWaves = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating intense energy waves');
  const colors = [
    'rgba(255, 0, 255, 1)', 
    'rgba(0, 255, 255, 1)', 
    'rgba(255, 255, 0, 1)',
    'rgba(0, 255, 0, 1)'
  ];
  
  for (let i = 0; i < 4; i++) {
    const wave = document.createElement('div');
    wave.className = 'energy-wave';
    wave.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 6px solid ${colors[i]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: energy-pulse 1.8s ease-out forwards;
      animation-delay: ${i * 0.12}s;
      box-shadow: 
        0 0 35px currentColor, 
        inset 0 0 35px currentColor,
        0 0 70px currentColor;
    `;
    effectsContainer.appendChild(wave);
  }
};

export const createLightning = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating intense lightning storm');
  const colors = ['#ffff00', '#ff00ff', '#00ffff', '#ff0080', '#80ff00', '#ff4000', '#4000ff', '#ff8000'];
  
  for (let i = 0; i < 12; i++) {
    const bolt = document.createElement('div');
    bolt.className = 'lightning-bolt';
    bolt.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4px;
      height: 150px;
      background: linear-gradient(0deg, transparent, ${colors[i % colors.length]}, ${colors[i % colors.length]}, transparent);
      transform-origin: bottom center;
      transform: translate(-50%, -100%) rotate(${i * 30}deg);
      animation: lightning-flash 1s ease-out forwards;
      animation-delay: ${i * 0.02}s;
      box-shadow: 
        0 0 25px ${colors[i % colors.length]}, 
        0 0 50px ${colors[i % colors.length]},
        0 0 75px ${colors[i % colors.length]};
    `;
    effectsContainer.appendChild(bolt);
  }
};

export const createFlash = (effectsContainer: HTMLElement) => {
  console.log('💥 Creating dimensional portal flash');
  const flash = document.createElement('div');
  flash.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: portal-flash 1.5s ease-out forwards;
    z-index: 10000;
  `;
  effectsContainer.appendChild(flash);
};
