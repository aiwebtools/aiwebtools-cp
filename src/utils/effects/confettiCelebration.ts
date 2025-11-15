// Confetti celebration effect with victory sound for special moments
export const createConfettiCelebration = () => {
  console.log('🎉 Creating confetti celebration effect');
  
  try {
    // Create victory sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const createVictorySound = () => {
      const duration = 1.5;
      const sampleRate = audioContext.sampleRate;
      const numFrames = sampleRate * duration;
      const buffer = audioContext.createBuffer(2, numFrames, sampleRate);
      
      for (let channel = 0; channel < 2; channel++) {
        const channelData = buffer.getChannelData(channel);
        
        for (let i = 0; i < numFrames; i++) {
          const t = i / sampleRate;
          const fadeOut = Math.max(0, 1 - t / duration);
          
          // Victory melody with rising notes
          const note1 = Math.sin(2 * Math.PI * 523.25 * t) * Math.exp(-t * 2); // C5
          const note2 = Math.sin(2 * Math.PI * 659.25 * (t - 0.15)) * Math.exp(-(t - 0.15) * 2); // E5
          const note3 = Math.sin(2 * Math.PI * 783.99 * (t - 0.3)) * Math.exp(-(t - 0.3) * 2); // G5
          const sparkle = Math.sin(2 * Math.PI * 1046.5 * t) * Math.exp(-t * 5) * 0.3; // C6
          
          channelData[i] = (note1 + note2 + note3 + sparkle) * fadeOut * 0.2;
        }
      }
      
      return buffer;
    };

    // Play victory sound
    const victoryBuffer = createVictorySound();
    const victorySource = audioContext.createBufferSource();
    victorySource.buffer = victoryBuffer;
    victorySource.connect(audioContext.destination);
    victorySource.start();

    // Create confetti particles
    const confettiCount = 150;
    const colors = [
      '#FFD700', // Gold
      '#00FFFF', // Cyan
      '#FF69B4', // Pink
      '#FF4500', // Orange Red
      '#9370DB', // Purple
      '#00FF00', // Lime
      '#FF1493', // Deep Pink
      '#1E90FF', // Dodger Blue
    ];

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      const size = Math.random() * 10 + 5;
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight / 2;
      const angle = Math.random() * 360;
      const velocity = Math.random() * 15 + 10;
      const rotation = Math.random() * 360;
      const rotationSpeed = Math.random() * 720 - 360;
      
      confetti.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${startX}px;
        top: ${startY}px;
        z-index: 10000;
        pointer-events: none;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        transform: rotate(${rotation}deg);
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
      `;
      
      document.body.appendChild(confetti);
      
      const radians = (angle * Math.PI) / 180;
      const vx = Math.cos(radians) * velocity;
      const vy = Math.sin(radians) * velocity - Math.random() * 5;
      
      let x = startX;
      let y = startY;
      let velocityY = vy;
      let currentRotation = rotation;
      let opacity = 1;
      
      const animate = () => {
        velocityY += 0.5; // Gravity
        x += vx * 0.5;
        y += velocityY;
        currentRotation += rotationSpeed * 0.016;
        opacity -= 0.008;
        
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        confetti.style.transform = `rotate(${currentRotation}deg)`;
        confetti.style.opacity = `${opacity}`;
        
        if (opacity > 0 && y < window.innerHeight + 100) {
          requestAnimationFrame(animate);
        } else {
          confetti.remove();
        }
      };
      
      requestAnimationFrame(animate);
    }

    // Create golden burst effect
    const burst = document.createElement('div');
    burst.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 215, 0, 0.8), rgba(255, 215, 0, 0) 70%);
      transform: translate(-50%, -50%);
      z-index: 9999;
      pointer-events: none;
      animation: burst-expand 0.8s ease-out forwards;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes burst-expand {
        0% {
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          width: 400px;
          height: 400px;
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(burst);
    
    setTimeout(() => {
      burst.remove();
      style.remove();
    }, 800);

    console.log('🎊 Confetti celebration created successfully');
    
  } catch (error) {
    console.log('Confetti celebration creation failed:', error);
  }
};
