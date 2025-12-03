// Matrix-style binary explosion effect with digital sound for special moments
export const createConfettiCelebration = () => {
  console.log('🎉 Creating Matrix binary explosion effect');
  
  try {
    // Create digital matrix sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const createMatrixSound = () => {
      const duration = 1.5;
      const sampleRate = audioContext.sampleRate;
      const numFrames = sampleRate * duration;
      const buffer = audioContext.createBuffer(2, numFrames, sampleRate);
      
      for (let channel = 0; channel < 2; channel++) {
        const channelData = buffer.getChannelData(channel);
        
        for (let i = 0; i < numFrames; i++) {
          const t = i / sampleRate;
          const fadeOut = Math.max(0, 1 - t / duration);
          
          // Digital/Matrix-style sound - electronic beeps and sweeps
          const sweep = Math.sin(2 * Math.PI * (200 + t * 800) * t) * Math.exp(-t * 3);
          const digital1 = Math.sin(2 * Math.PI * 440 * t) * (Math.random() > 0.95 ? 1 : 0) * 0.3;
          const digital2 = Math.sin(2 * Math.PI * 880 * t) * (Math.random() > 0.97 ? 1 : 0) * 0.2;
          const bass = Math.sin(2 * Math.PI * 80 * t) * Math.exp(-t * 2) * 0.4;
          
          channelData[i] = (sweep + digital1 + digital2 + bass) * fadeOut * 0.15;
        }
      }
      
      return buffer;
    };

    // Play matrix sound
    const matrixBuffer = createMatrixSound();
    const matrixSource = audioContext.createBufferSource();
    matrixSource.buffer = matrixBuffer;
    matrixSource.connect(audioContext.destination);
    matrixSource.start();

    // Create binary string particles
    const binaryCount = 100;
    const matrixColors = [
      '#00FF00', // Bright Matrix green
      '#00DD00', // Medium green
      '#00BB00', // Darker green
      '#33FF33', // Light green
      '#00FF88', // Cyan-green
      '#88FF00', // Yellow-green
    ];

    // Generate random binary strings
    const generateBinaryString = () => {
      const length = Math.floor(Math.random() * 8) + 3;
      let binary = '';
      for (let i = 0; i < length; i++) {
        binary += Math.random() > 0.5 ? '1' : '0';
      }
      return binary;
    };

    for (let i = 0; i < binaryCount; i++) {
      const binary = document.createElement('div');
      const fontSize = Math.random() * 14 + 10;
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight / 2;
      const angle = Math.random() * 360;
      const velocity = Math.random() * 15 + 8;
      const binaryString = generateBinaryString();
      const color = matrixColors[Math.floor(Math.random() * matrixColors.length)];
      
      binary.textContent = binaryString;
      binary.style.cssText = `
        position: fixed;
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        font-weight: bold;
        color: ${color};
        left: ${startX}px;
        top: ${startY}px;
        z-index: 10000;
        pointer-events: none;
        text-shadow: 0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px rgba(0, 255, 0, 0.5);
        white-space: nowrap;
        letter-spacing: 2px;
      `;
      
      document.body.appendChild(binary);
      
      const radians = (angle * Math.PI) / 180;
      const vx = Math.cos(radians) * velocity;
      const vy = Math.sin(radians) * velocity - Math.random() * 5;
      
      let x = startX;
      let y = startY;
      let velocityY = vy;
      let opacity = 1;
      let scale = 1;
      
      const animate = () => {
        velocityY += 0.3; // Lighter gravity for floatier feel
        x += vx * 0.5;
        y += velocityY;
        opacity -= 0.012;
        scale += 0.005; // Slight growth as they fall
        
        binary.style.left = `${x}px`;
        binary.style.top = `${y}px`;
        binary.style.opacity = `${opacity}`;
        binary.style.transform = `scale(${scale})`;
        
        if (opacity > 0 && y < window.innerHeight + 100) {
          requestAnimationFrame(animate);
        } else {
          binary.remove();
        }
      };
      
      // Stagger the start of animations
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, Math.random() * 200);
    }

    // Create Matrix-style burst effect (green)
    const burst = document.createElement('div');
    burst.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 255, 0, 0.6), rgba(0, 255, 0, 0) 70%);
      transform: translate(-50%, -50%);
      z-index: 9999;
      pointer-events: none;
      animation: matrix-burst-expand 0.8s ease-out forwards;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes matrix-burst-expand {
        0% {
          width: 0;
          height: 0;
          opacity: 1;
          box-shadow: 0 0 0 rgba(0, 255, 0, 0.8);
        }
        50% {
          box-shadow: 0 0 100px rgba(0, 255, 0, 0.6);
        }
        100% {
          width: 500px;
          height: 500px;
          opacity: 0;
          box-shadow: 0 0 0 rgba(0, 255, 0, 0);
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(burst);
    
    setTimeout(() => {
      burst.remove();
      style.remove();
    }, 800);

    // Create the "CLONING YOUR AI EMPIRE NOW MASTER" text
    const messageText = document.createElement('div');
    messageText.textContent = 'CLONING YOUR AI EMPIRE NOW MASTER';
    messageText.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      z-index: 10001;
      pointer-events: none;
      font-family: 'Courier New', monospace;
      font-size: clamp(16px, 4vw, 32px);
      font-weight: bold;
      color: #00FF00;
      text-align: center;
      text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 40px #00FF00, 0 0 80px rgba(0, 255, 0, 0.5);
      letter-spacing: 4px;
      white-space: nowrap;
      animation: matrix-text-appear 2.5s ease-out forwards;
    `;
    
    const textStyle = document.createElement('style');
    textStyle.textContent = `
      @keyframes matrix-text-appear {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
        }
        20% {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 1;
        }
        30% {
          transform: translate(-50%, -50%) scale(1);
        }
        80% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(1.5);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(textStyle);
    document.body.appendChild(messageText);
    
    setTimeout(() => {
      messageText.remove();
      textStyle.remove();
    }, 2500);

    console.log('🎊 Matrix binary explosion created successfully');
    
  } catch (error) {
    console.log('Matrix binary explosion creation failed:', error);
  }
};
