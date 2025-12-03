// Matrix-style binary explosion effect with digital sound for special moments
export const createConfettiCelebration = () => {
  console.log('🎉 Creating Matrix binary explosion effect');
  
  try {
    // Create digital matrix sound (shorter)
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const createMatrixSound = () => {
      const duration = 0.8;
      const sampleRate = audioContext.sampleRate;
      const numFrames = sampleRate * duration;
      const buffer = audioContext.createBuffer(2, numFrames, sampleRate);
      
      for (let channel = 0; channel < 2; channel++) {
        const channelData = buffer.getChannelData(channel);
        
        for (let i = 0; i < numFrames; i++) {
          const t = i / sampleRate;
          const fadeOut = Math.max(0, 1 - t / duration);
          
          const sweep = Math.sin(2 * Math.PI * (200 + t * 1200) * t) * Math.exp(-t * 4);
          const bass = Math.sin(2 * Math.PI * 80 * t) * Math.exp(-t * 3) * 0.4;
          
          channelData[i] = (sweep + bass) * fadeOut * 0.12;
        }
      }
      
      return buffer;
    };

    const matrixBuffer = createMatrixSound();
    const matrixSource = audioContext.createBufferSource();
    matrixSource.buffer = matrixBuffer;
    matrixSource.connect(audioContext.destination);
    matrixSource.start();

    // Fewer binary particles for better performance
    const binaryCount = 50;
    const matrixColors = ['#00FF00', '#00DD00', '#33FF33'];

    const generateBinaryString = () => {
      const length = Math.floor(Math.random() * 5) + 2;
      let binary = '';
      for (let i = 0; i < length; i++) {
        binary += Math.random() > 0.5 ? '1' : '0';
      }
      return binary;
    };

    for (let i = 0; i < binaryCount; i++) {
      const binary = document.createElement('div');
      const fontSize = Math.random() * 12 + 10;
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight / 2;
      const angle = Math.random() * 360;
      const velocity = Math.random() * 12 + 8;
      const binaryString = generateBinaryString();
      const color = matrixColors[Math.floor(Math.random() * matrixColors.length)];
      
      binary.textContent = binaryString;
      binary.style.cssText = `
        position: fixed;
        font-family: monospace;
        font-size: ${fontSize}px;
        font-weight: bold;
        color: ${color};
        left: ${startX}px;
        top: ${startY}px;
        z-index: 10000;
        pointer-events: none;
        text-shadow: 0 0 8px ${color};
        white-space: nowrap;
      `;
      
      document.body.appendChild(binary);
      
      const radians = (angle * Math.PI) / 180;
      const vx = Math.cos(radians) * velocity;
      let vy = Math.sin(radians) * velocity - Math.random() * 5;
      let x = startX;
      let y = startY;
      let opacity = 1;
      
      const animate = () => {
        vy += 0.5;
        x += vx * 0.6;
        y += vy;
        opacity -= 0.025; // Faster fade
        
        binary.style.left = `${x}px`;
        binary.style.top = `${y}px`;
        binary.style.opacity = `${opacity}`;
        
        if (opacity > 0 && y < window.innerHeight + 50) {
          requestAnimationFrame(animate);
        } else {
          binary.remove();
        }
      };
      
      requestAnimationFrame(animate);
    }

    // Quick burst effect
    const burst = document.createElement('div');
    burst.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 255, 0, 0.5), transparent 70%);
      transform: translate(-50%, -50%);
      z-index: 9999;
      pointer-events: none;
      animation: matrix-burst 0.4s ease-out forwards;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes matrix-burst {
        0% { width: 0; height: 0; opacity: 1; }
        100% { width: 300px; height: 300px; opacity: 0; }
      }
      @keyframes matrix-text-pop {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        15% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        25% { transform: translate(-50%, -50%) scale(1); }
        70% { opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(burst);
    
    setTimeout(() => { burst.remove(); }, 400);

    // Quick text message
    const messageText = document.createElement('div');
    messageText.textContent = 'CLONING YOUR AI EMPIRE NOW MASTER';
    messageText.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      z-index: 10001;
      pointer-events: none;
      font-family: monospace;
      font-size: clamp(14px, 3.5vw, 28px);
      font-weight: bold;
      color: #00FF00;
      text-align: center;
      text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00;
      letter-spacing: 3px;
      white-space: nowrap;
      animation: matrix-text-pop 1.2s ease-out forwards;
    `;
    
    document.body.appendChild(messageText);
    
    setTimeout(() => {
      messageText.remove();
      style.remove();
    }, 1200);

    console.log('🎊 Matrix binary explosion created successfully');
    
  } catch (error) {
    console.log('Matrix binary explosion creation failed:', error);
  }
};
