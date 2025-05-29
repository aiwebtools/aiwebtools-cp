
export const createParticles = (effectsContainer: HTMLElement) => {
  console.log('✨ Creating particles');
  const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'];
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'explosion-particle';
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      top: 50%;
      left: 50%;
      box-shadow: 0 0 10px currentColor;
      animation: particle-explosion 1s ease-out forwards;
      transform-origin: center;
    `;
    
    const angle = (i / particleCount) * 360;
    const velocity = 150 + Math.random() * 200;
    particle.style.setProperty('--angle', `${angle}deg`);
    particle.style.setProperty('--velocity', `${velocity}px`);
    
    effectsContainer.appendChild(particle);
  }
};

export const createVortexRings = (effectsContainer: HTMLElement) => {
  console.log('🌀 Creating vortex rings');
  for (let i = 0; i < 3; i++) {
    const ring = document.createElement('div');
    ring.className = 'vortex-ring';
    ring.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 3px solid rgba(0, 255, 255, 0.8);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: vortex-spin 1.2s ease-out forwards;
      animation-delay: ${i * 0.1}s;
    `;
    effectsContainer.appendChild(ring);
  }
};

export const createEnergyWaves = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating energy waves');
  for (let i = 0; i < 2; i++) {
    const wave = document.createElement('div');
    wave.className = 'energy-wave';
    wave.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 2px solid rgba(255, 0, 255, 0.6);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: energy-pulse 1s ease-out forwards;
      animation-delay: ${i * 0.2}s;
    `;
    effectsContainer.appendChild(wave);
  }
};

export const createLightning = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating lightning bolts');
  for (let i = 0; i < 6; i++) {
    const bolt = document.createElement('div');
    bolt.className = 'lightning-bolt';
    bolt.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: 80px;
      background: linear-gradient(0deg, transparent, #ffff00, transparent);
      transform-origin: bottom center;
      transform: translate(-50%, -100%) rotate(${i * 60}deg);
      animation: lightning-flash 0.6s ease-out forwards;
      animation-delay: ${i * 0.05}s;
      box-shadow: 0 0 15px #ffff00;
    `;
    effectsContainer.appendChild(bolt);
  }
};

export const createFlash = (effectsContainer: HTMLElement) => {
  console.log('💥 Creating flash effect');
  const flash = document.createElement('div');
  flash.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(0,255,255,0.4) 50%, transparent 100%);
    animation: flash-fade 0.8s ease-out forwards;
  `;
  effectsContainer.appendChild(flash);
};
