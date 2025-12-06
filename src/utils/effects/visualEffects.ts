
// EPIC TIME WARP VISUAL EFFECTS - Maximum coolness edition

export const createParticles = (effectsContainer: HTMLElement) => {
  console.log('✨ Creating MEGA particle explosion');
  const colors = ['#00FFFF', '#FF00FF', '#FFFF00', '#00FF00', '#FF4444', '#4444FF', '#FF8800', '#FFFFFF', '#FF69B4', '#00FF7F'];
  const particleCount = 150; // WAY more particles for MEGA effect
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'mega-particle';
    const size = 4 + Math.random() * 12;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      top: 50%;
      left: 50%;
      box-shadow: 
        0 0 ${size * 4}px ${color}, 
        0 0 ${size * 8}px ${color},
        0 0 ${size * 12}px ${color};
      animation: mega-particle-burst 1.8s ease-out forwards;
      transform-origin: center;
      z-index: 10001;
    `;
    
    const angle = (i / particleCount) * 360 + Math.random() * 30;
    const velocity = 200 + Math.random() * 400;
    particle.style.setProperty('--angle', `${angle}deg`);
    particle.style.setProperty('--velocity', `${velocity}px`);
    particle.style.setProperty('--delay', `${Math.random() * 0.15}s`);
    
    effectsContainer.appendChild(particle);
  }
  
  const style = document.createElement('style');
  style.id = 'mega-particle-style';
  style.textContent = `
    @keyframes mega-particle-burst {
      0% {
        transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(1);
        opacity: 1;
        filter: brightness(5) saturate(3);
      }
      15% {
        opacity: 1;
        filter: brightness(8) saturate(5);
        transform: translate(-50%, -50%) rotate(calc(var(--angle) + 90deg)) translateX(calc(var(--velocity) * 0.3)) scale(2);
      }
      40% {
        opacity: 1;
        filter: brightness(6) saturate(4);
        transform: translate(-50%, -50%) rotate(calc(var(--angle) + 270deg)) translateX(calc(var(--velocity) * 0.6)) scale(1.5);
      }
      70% {
        opacity: 0.7;
        filter: brightness(4) saturate(3);
      }
      100% {
        transform: translate(-50%, -50%) rotate(calc(var(--angle) + 720deg)) translateX(var(--velocity)) scale(0);
        opacity: 0;
        filter: brightness(2) saturate(2);
      }
    }
  `;
  if (!document.getElementById('mega-particle-style')) {
    document.head.appendChild(style);
  }
};

export const createVortexRings = (effectsContainer: HTMLElement) => {
  console.log('🌀 Creating EPIC vortex portal');
  const colors = [
    'rgba(0, 255, 255, 0.9)', 
    'rgba(255, 0, 255, 0.8)', 
    'rgba(255, 255, 0, 0.7)',
    'rgba(0, 255, 128, 0.8)',
    'rgba(255, 64, 128, 0.7)'
  ];
  
  // Create multiple concentric rings
  for (let i = 0; i < 8; i++) {
    const ring = document.createElement('div');
    ring.className = 'epic-vortex-ring';
    ring.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: ${4 + i}px solid ${colors[i % colors.length]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: epic-vortex-spin ${2 + i * 0.3}s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: ${i * 0.08}s;
      box-shadow: 
        0 0 30px ${colors[i % colors.length]},
        inset 0 0 30px ${colors[i % colors.length]};
      z-index: 10000;
    `;
    effectsContainer.appendChild(ring);
  }
  
  const style = document.createElement('style');
  style.id = 'epic-vortex-style';
  style.textContent = `
    @keyframes epic-vortex-spin {
      0% {
        width: 20px;
        height: 20px;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(0deg) scale(0.5);
        filter: brightness(2) hue-rotate(0deg);
      }
      20% {
        opacity: 1;
        filter: brightness(3) hue-rotate(72deg);
      }
      50% {
        width: 350px;
        height: 350px;
        opacity: 1;
        transform: translate(-50%, -50%) rotate(720deg) scale(1.2);
        filter: brightness(4) hue-rotate(180deg);
      }
      75% {
        opacity: 0.8;
        filter: brightness(3) hue-rotate(270deg);
      }
      100% {
        width: 600px;
        height: 600px;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(1440deg) scale(0.8);
        filter: brightness(2) hue-rotate(360deg);
      }
    }
  `;
  if (!document.getElementById('epic-vortex-style')) {
    document.head.appendChild(style);
  }
};

export const createSpiralTunnel = (effectsContainer: HTMLElement) => {
  console.log('🌪️ Creating EPIC spiral tunnel');
  const colors = [
    'rgba(0, 255, 255, 0.6)', 
    'rgba(255, 0, 255, 0.5)', 
    'rgba(255, 255, 0, 0.4)',
    'rgba(0, 255, 128, 0.5)',
    'rgba(255, 128, 0, 0.4)'
  ];
  
  // Create spiral arms
  for (let arm = 0; arm < 6; arm++) {
    for (let i = 0; i < 12; i++) {
      const segment = document.createElement('div');
      segment.className = 'epic-spiral-segment';
      const baseAngle = arm * 60;
      segment.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: ${10 + i * 8}px;
        height: ${10 + i * 8}px;
        border: 2px solid ${colors[i % colors.length]};
        border-radius: 50%;
        transform: translate(-50%, -50%) rotate(${baseAngle + i * 30}deg);
        animation: epic-spiral-expand 2.5s ease-out forwards;
        animation-delay: ${i * 0.04 + arm * 0.02}s;
        box-shadow: 0 0 15px ${colors[i % colors.length]};
        z-index: 9999;
      `;
      effectsContainer.appendChild(segment);
    }
  }
  
  const style = document.createElement('style');
  style.id = 'epic-spiral-style';
  style.textContent = `
    @keyframes epic-spiral-expand {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(0deg) scale(0.1);
        filter: brightness(2);
      }
      30% {
        opacity: 1;
        filter: brightness(4);
      }
      60% {
        opacity: 0.8;
        transform: translate(-50%, -50%) rotate(720deg) scale(3);
        filter: brightness(3);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(1080deg) scale(5);
        filter: brightness(1);
      }
    }
  `;
  if (!document.getElementById('epic-spiral-style')) {
    document.head.appendChild(style);
  }
};

export const createEnergyWaves = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating EPIC energy shockwaves');
  const colors = [
    'rgba(0, 255, 255, 0.8)', 
    'rgba(255, 0, 255, 0.7)', 
    'rgba(255, 255, 0, 0.6)',
    'rgba(0, 255, 0, 0.7)',
    'rgba(255, 64, 0, 0.6)'
  ];
  
  for (let i = 0; i < 6; i++) {
    const wave = document.createElement('div');
    wave.className = 'epic-energy-wave';
    wave.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: ${3 + i}px solid ${colors[i % colors.length]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: epic-shockwave ${1.8 + i * 0.2}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      animation-delay: ${i * 0.15}s;
      box-shadow: 
        0 0 40px ${colors[i % colors.length]},
        0 0 80px ${colors[i % colors.length]},
        inset 0 0 40px ${colors[i % colors.length]};
      z-index: 10002;
    `;
    effectsContainer.appendChild(wave);
  }
  
  const style = document.createElement('style');
  style.id = 'epic-wave-style';
  style.textContent = `
    @keyframes epic-shockwave {
      0% {
        width: 10px;
        height: 10px;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
        filter: brightness(3) blur(0px);
      }
      20% {
        opacity: 1;
        filter: brightness(5) blur(1px);
      }
      50% {
        width: 400px;
        height: 400px;
        opacity: 0.9;
        transform: translate(-50%, -50%) scale(1.1);
        filter: brightness(4) blur(2px);
      }
      100% {
        width: 800px;
        height: 800px;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.9);
        filter: brightness(2) blur(4px);
      }
    }
  `;
  if (!document.getElementById('epic-wave-style')) {
    document.head.appendChild(style);
  }
};

export const createLightning = (effectsContainer: HTMLElement) => {
  console.log('⚡ Creating EPIC lightning storm');
  const colors = ['#00FFFF', '#FF00FF', '#FFFF00', '#00FF00', '#FF4444', '#FFFFFF'];
  
  // Create multiple lightning bolts radiating outward
  for (let i = 0; i < 12; i++) {
    const bolt = document.createElement('div');
    bolt.className = 'epic-lightning-bolt';
    const rotation = i * 30;
    const color = colors[i % colors.length];
    
    bolt.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 3px;
      height: 120px;
      background: linear-gradient(0deg, transparent 0%, ${color} 20%, white 50%, ${color} 80%, transparent 100%);
      transform-origin: bottom center;
      transform: translate(-50%, -100%) rotate(${rotation}deg);
      animation: epic-lightning-strike 1.5s ease-out forwards;
      animation-delay: ${i * 0.05}s;
      box-shadow: 
        0 0 10px ${color},
        0 0 20px ${color},
        0 0 40px ${color};
      z-index: 10003;
    `;
    bolt.style.setProperty('--rotation', `${rotation}deg`);
    effectsContainer.appendChild(bolt);
  }
  
  const style = document.createElement('style');
  style.id = 'epic-lightning-style';
  style.textContent = `
    @keyframes epic-lightning-strike {
      0% {
        opacity: 0;
        height: 0px;
        filter: brightness(3);
      }
      15% {
        opacity: 1;
        height: 180px;
        filter: brightness(6);
      }
      30% {
        opacity: 1;
        height: 250px;
        filter: brightness(8);
      }
      50% {
        opacity: 0.9;
        height: 200px;
        filter: brightness(5);
      }
      70% {
        opacity: 0.6;
        filter: brightness(4);
      }
      100% {
        opacity: 0;
        height: 300px;
        filter: brightness(2);
      }
    }
  `;
  if (!document.getElementById('epic-lightning-style')) {
    document.head.appendChild(style);
  }
};

export const createFlash = (effectsContainer: HTMLElement) => {
  console.log('💫 Creating MEGA dimensional rift flash');
  
  // Create IMMEDIATE intense central flash for instant WOW
  const instantFlash = document.createElement('div');
  instantFlash.className = 'instant-wow-flash';
  instantFlash.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle at center, 
      rgba(255,255,255,1) 0%, 
      rgba(0,255,255,0.95) 15%, 
      rgba(255,0,255,0.9) 30%, 
      rgba(255,255,0,0.8) 50%, 
      rgba(0,255,128,0.6) 70%, 
      transparent 90%);
    z-index: 10020;
    pointer-events: none;
    animation: instant-wow 0.4s ease-out forwards;
  `;
  effectsContainer.appendChild(instantFlash);
  
  // Create central flash
  const flash = document.createElement('div');
  flash.className = 'mega-flash';
  flash.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: mega-dimensional-rift 2s ease-out forwards;
    z-index: 10005;
    pointer-events: none;
  `;
  effectsContainer.appendChild(flash);
  
  // Create screen flash overlay
  const screenFlash = document.createElement('div');
  screenFlash.className = 'mega-screen-flash';
  screenFlash.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 10010;
    animation: mega-screen-flash 1.8s ease-out forwards;
  `;
  effectsContainer.appendChild(screenFlash);
  
  const style = document.createElement('style');
  style.id = 'mega-flash-style';
  style.textContent = `
    @keyframes instant-wow {
      0% {
        opacity: 1;
        filter: brightness(10) saturate(5);
      }
      30% {
        opacity: 0.8;
        filter: brightness(6) saturate(4);
      }
      100% {
        opacity: 0;
        filter: brightness(1) saturate(1);
      }
    }
    
    @keyframes mega-dimensional-rift {
      0% {
        width: 20px;
        height: 20px;
        opacity: 1;
        background: radial-gradient(circle, white 0%, transparent 100%);
        filter: brightness(10) saturate(5);
        box-shadow: 
          0 0 50px rgba(255,255,255,1),
          0 0 100px rgba(0,255,255,1),
          0 0 150px rgba(255,0,255,1);
      }
      10% {
        width: 150px;
        height: 150px;
        opacity: 1;
        background: radial-gradient(circle, white 0%, cyan 15%, magenta 30%, yellow 50%, lime 70%, transparent 85%);
        filter: brightness(12) saturate(6);
        box-shadow: 
          0 0 80px rgba(255,255,255,1),
          0 0 160px rgba(0,255,255,1),
          0 0 240px rgba(255,0,255,1);
      }
      30% {
        width: 400px;
        height: 400px;
        opacity: 1;
        background: radial-gradient(circle, white 0%, cyan 10%, magenta 25%, yellow 40%, lime 55%, orange 70%, transparent 90%);
        filter: brightness(10) saturate(5);
      }
      55% {
        width: 650px;
        height: 650px;
        opacity: 0.85;
        background: radial-gradient(circle, white 0%, magenta 15%, cyan 35%, orange 55%, transparent 80%);
        filter: brightness(7) saturate(4);
      }
      100% {
        width: 900px;
        height: 900px;
        opacity: 0;
        background: radial-gradient(circle, transparent 0%, transparent 100%);
        filter: brightness(2) saturate(2);
      }
    }
    
    @keyframes mega-screen-flash {
      0% {
        background: transparent;
        opacity: 0;
      }
      5% {
        background: radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(0,255,255,0.9) 20%, rgba(255,0,255,0.8) 40%, rgba(255,255,0,0.6) 60%, transparent 85%);
        opacity: 1;
        filter: brightness(5) saturate(4);
      }
      20% {
        background: radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(0,255,255,0.85) 15%, rgba(255,0,255,0.75) 30%, rgba(255,255,0,0.6) 50%, rgba(0,255,128,0.4) 70%, transparent 95%);
        opacity: 0.95;
        filter: brightness(4) saturate(3);
      }
      45% {
        background: radial-gradient(circle at center, rgba(0,255,255,0.7) 0%, rgba(255,0,255,0.6) 25%, rgba(255,255,0,0.4) 50%, transparent 80%);
        opacity: 0.6;
        filter: brightness(3) saturate(2);
      }
      100% {
        background: transparent;
        opacity: 0;
        filter: brightness(1) saturate(1);
      }
    }
  `;
  if (!document.getElementById('mega-flash-style')) {
    document.head.appendChild(style);
  }
};

// NEW: Create epic black hole effect
export const createBlackHole = (effectsContainer: HTMLElement) => {
  console.log('🕳️ Creating black hole warp effect');
  
  const blackHole = document.createElement('div');
  blackHole.className = 'epic-black-hole';
  blackHole.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, black 0%, transparent 70%);
    box-shadow: 
      0 0 60px 30px rgba(0,0,0,0.8),
      0 0 100px 60px rgba(128,0,255,0.4),
      0 0 140px 90px rgba(0,255,255,0.2);
    animation: epic-black-hole-pulse 2s ease-in-out forwards;
    z-index: 10004;
  `;
  effectsContainer.appendChild(blackHole);
  
  // Create accretion disk
  for (let i = 0; i < 3; i++) {
    const disk = document.createElement('div');
    disk.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: ${80 + i * 40}px;
      height: ${80 + i * 40}px;
      border-radius: 50%;
      border: 2px solid rgba(255,128,0,${0.6 - i * 0.15});
      transform: translate(-50%, -50%) rotateX(70deg);
      animation: epic-accretion-spin ${2 - i * 0.3}s linear infinite;
      box-shadow: 0 0 20px rgba(255,128,0,0.5);
      z-index: 10003;
    `;
    effectsContainer.appendChild(disk);
  }
  
  const style = document.createElement('style');
  style.id = 'epic-blackhole-style';
  style.textContent = `
    @keyframes epic-black-hole-pulse {
      0% {
        width: 10px;
        height: 10px;
        box-shadow: 
          0 0 30px 15px rgba(0,0,0,0.5),
          0 0 60px 30px rgba(128,0,255,0.3),
          0 0 90px 45px rgba(0,255,255,0.1);
      }
      50% {
        width: 80px;
        height: 80px;
        box-shadow: 
          0 0 100px 50px rgba(0,0,0,0.9),
          0 0 160px 80px rgba(128,0,255,0.5),
          0 0 220px 110px rgba(0,255,255,0.3);
      }
      100% {
        width: 40px;
        height: 40px;
        box-shadow: 
          0 0 60px 30px rgba(0,0,0,0.7),
          0 0 100px 50px rgba(128,0,255,0.4),
          0 0 140px 70px rgba(0,255,255,0.2);
      }
    }
    
    @keyframes epic-accretion-spin {
      from { transform: translate(-50%, -50%) rotateX(70deg) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotateX(70deg) rotate(360deg); }
    }
  `;
  if (!document.getElementById('epic-blackhole-style')) {
    document.head.appendChild(style);
  }
};

// NEW: Create warp speed stars effect
export const createWarpStars = (effectsContainer: HTMLElement) => {
  console.log('🌟 Creating warp speed stars');
  
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    const angle = Math.random() * 360;
    const delay = Math.random() * 0.5;
    const size = 1 + Math.random() * 3;
    
    star.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: ${size}px;
      height: ${size * 8}px;
      background: linear-gradient(0deg, transparent, white, white, transparent);
      border-radius: 50%;
      transform: translate(-50%, -50%) rotate(${angle}deg);
      animation: epic-warp-star 1.5s ease-in forwards;
      animation-delay: ${delay}s;
      opacity: 0;
      z-index: 9998;
    `;
    star.style.setProperty('--angle', `${angle}deg`);
    effectsContainer.appendChild(star);
  }
  
  const style = document.createElement('style');
  style.id = 'epic-warpstar-style';
  style.textContent = `
    @keyframes epic-warp-star {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scaleY(1);
      }
      20% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-600px) scaleY(3);
      }
    }
  `;
  if (!document.getElementById('epic-warpstar-style')) {
    document.head.appendChild(style);
  }
};
