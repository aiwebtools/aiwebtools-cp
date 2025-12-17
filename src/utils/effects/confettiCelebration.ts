// Matrix-style binary explosion effect with optional digital sound
export const createConfettiCelebration = (visualOnly: boolean = false) => {
  console.log('🎉 Creating Matrix binary explosion effect', visualOnly ? '(visual only)' : '(with sound)');

  // For time-warp usage we need fast cleanup so it never blocks UI
  const maxLifetimeMs = visualOnly ? 300 : 1800;
  const binaryCount = visualOnly ? 20 : 75;

  try {
    // Only play sound if not visual-only mode
    if (!visualOnly) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

      const createMatrixSound = () => {
        const duration = 1.0;
        const sampleRate = audioContext.sampleRate;
        const numFrames = sampleRate * duration;
        const buffer = audioContext.createBuffer(2, numFrames, sampleRate);

        for (let channel = 0; channel < 2; channel++) {
          const channelData = buffer.getChannelData(channel);

          for (let i = 0; i < numFrames; i++) {
            const t = i / sampleRate;
            const fadeOut = Math.max(0, 1 - t / duration);

            const sweep = Math.sin(2 * Math.PI * (200 + t * 1000) * t) * Math.exp(-t * 3);
            const digital1 = Math.sin(2 * Math.PI * 440 * t) * (Math.random() > 0.96 ? 1 : 0) * 0.2;
            const bass = Math.sin(2 * Math.PI * 80 * t) * Math.exp(-t * 2.5) * 0.4;

            channelData[i] = (sweep + digital1 + bass) * fadeOut * 0.15;
          }
        }

        return buffer;
      };

      const matrixBuffer = createMatrixSound();
      const matrixSource = audioContext.createBufferSource();
      matrixSource.buffer = matrixBuffer;
      matrixSource.connect(audioContext.destination);
      matrixSource.start();
    }

    // Binary particles
    const matrixColors = ['#00FF00', '#00DD00', '#00BB00', '#33FF33', '#00FF88'];

    const generateBinaryString = () => {
      const length = Math.floor(Math.random() * 6) + 3;
      let binary = '';
      for (let i = 0; i < length; i++) {
        binary += Math.random() > 0.5 ? '1' : '0';
      }
      return binary;
    };

    for (let i = 0; i < binaryCount; i++) {
      const binary = document.createElement('div');
      binary.className = 'time-warp-ephemeral';

      const fontSize = Math.random() * 12 + 10;
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight / 2;
      const angle = Math.random() * 360;
      const velocity = Math.random() * 14 + 8;
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
        text-shadow: 0 0 8px ${color}, 0 0 16px ${color};
        white-space: nowrap;
        letter-spacing: 1px;
      `;

      document.body.appendChild(binary);

      const radians = (angle * Math.PI) / 180;
      const vx = Math.cos(radians) * velocity;
      let vy = Math.sin(radians) * velocity - Math.random() * 5;
      let x = startX;
      let y = startY;
      let opacity = 1;

      const fadeStep = visualOnly ? 0.08 : 0.018;
      const gravity = visualOnly ? 0.8 : 0.4;

      const animate = () => {
        vy += gravity;
        x += vx * 0.5;
        y += vy;
        opacity -= fadeStep;

        binary.style.left = `${x}px`;
        binary.style.top = `${y}px`;
        binary.style.opacity = `${opacity}`;

        if (opacity > 0 && y < window.innerHeight + 80) {
          requestAnimationFrame(animate);
        } else {
          binary.remove();
        }
      };

      setTimeout(() => requestAnimationFrame(animate), Math.random() * 80);

      // Hard-stop cleanup for time-warp usage
      if (visualOnly) {
        setTimeout(() => binary.remove(), maxLifetimeMs);
      }
    }

    // Burst effect
    const burst = document.createElement('div');
    burst.className = 'time-warp-ephemeral';
    burst.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 255, 0, 0.6), transparent 70%);
      transform: translate(-50%, -50%);
      z-index: 9999;
      pointer-events: none;
      animation: matrix-burst 0.6s ease-out forwards;
    `;

    const style = document.createElement('style');
    style.className = 'time-warp-ephemeral';
    style.textContent = `
      @keyframes matrix-burst {
        0% { width: 0; height: 0; opacity: 1; box-shadow: 0 0 0 rgba(0, 255, 0, 0.8); }
        50% { box-shadow: 0 0 60px rgba(0, 255, 0, 0.5); }
        100% { width: 400px; height: 400px; opacity: 0; }
      }
      @keyframes matrix-text-pop {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        20% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
        30% { transform: translate(-50%, -50%) scale(1); }
        75% { opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(burst);

    setTimeout(() => {
      burst.remove();
    }, visualOnly ? 250 : 600);

    // Text message
    const messageText = document.createElement('div');
    messageText.className = 'time-warp-ephemeral';
    messageText.textContent = 'CLONING YOUR AI EMPIRE NOW MASTER';

    messageText.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      z-index: 10001;
      pointer-events: none;
      font-family: 'Courier New', monospace;
      font-size: clamp(14px, 3.5vw, 28px);
      font-weight: bold;
      color: #00FF00;
      text-align: center;
      text-shadow: 0 0 10px #00FF00, 0 0 25px #00FF00, 0 0 40px rgba(0, 255, 0, 0.4);
      letter-spacing: 3px;
      white-space: nowrap;
      animation: matrix-text-pop ${visualOnly ? '0.25s' : '1.8s'} ease-out forwards;
    `;

    document.body.appendChild(messageText);

    setTimeout(() => {
      messageText.remove();
      style.remove();
    }, maxLifetimeMs);

    console.log('🎊 Matrix binary explosion created successfully');
  } catch (error) {
    console.log('Matrix binary explosion creation failed:', error);
  }
};
