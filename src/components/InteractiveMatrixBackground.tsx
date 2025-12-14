import React, { useEffect, useRef, useCallback } from 'react';
import { useMobile } from '@/hooks/useMobile';
import { useCrossBrowserOptimization } from '@/hooks/useCrossBrowserOptimization';

interface MatrixDrop {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number;
  length: number;
}

interface InteractionPoint {
  x: number;
  y: number;
  radius: number;
  decay: number;
  intensity: number;
}

const InteractiveMatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const dropsRef = useRef<MatrixDrop[]>([]);
  const interactionPointsRef = useRef<InteractionPoint[]>([]);
  const lastTimeRef = useRef<number>(0);
  const { isMobile } = useMobile();
  const { performanceTier, addOptimizedEventListener } = useCrossBrowserOptimization();

  // Matrix characters - identical for desktop and mobile
  const matrixChars = '01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ012345ABCDEFGHIJKLMNOPQRSTUVWXYZｧｨｩｪｫｯｬｭｮ';

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true, // Better for animations
      powerPreference: 'high-performance'
    });
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;

      // Reinitialize drops when canvas size changes
      initializeDrops();
    };

    updateSize();
    window.addEventListener('resize', updateSize, { passive: true });

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const initializeDrops = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const maxDrops = performanceTier === 'high' ? columns * 2 : 
                     performanceTier === 'medium' ? columns * 1.5 : 
                     Math.min(columns, 80);

    dropsRef.current = [];

    for (let i = 0; i < maxDrops; i++) {
      const drop: MatrixDrop = {
        x: (i * fontSize * 0.7) + (Math.random() * fontSize * 0.5),
        y: Math.random() * -canvas.height,
        speed: (Math.random() * 5 + 3),
        chars: [],
        opacity: Math.random() * 0.5 + 0.5,
        length: Math.floor(Math.random() * 14) + 6
      };

      // Generate random characters for this drop
      for (let j = 0; j < drop.length; j++) {
        drop.chars.push(matrixChars[Math.floor(Math.random() * matrixChars.length)]);
      }

      dropsRef.current.push(drop);
    }
  }, [isMobile, performanceTier, matrixChars]);

  const handleInteraction = useCallback((x: number, y: number) => {
    // Add interaction point that affects nearby matrix drops
    const interactionPoint: InteractionPoint = {
      x,
      y,
      radius: 120,
      decay: 0.95,
      intensity: 1.5
    };

    interactionPointsRef.current.push(interactionPoint);

    // Limit number of interaction points for performance
    if (interactionPointsRef.current.length > 5) {
      interactionPointsRef.current.shift();
    }

      // Create ripple effect by affecting nearby drops
      dropsRef.current.forEach(drop => {
        const distance = Math.sqrt(
          Math.pow(drop.x - x, 2) + Math.pow(drop.y - y, 2)
        );

        if (distance < interactionPoint.radius) {
          // Speed up drops near interaction - more dramatic
          drop.speed *= 2.2;
          drop.opacity = Math.min(1, drop.opacity + 0.4);
          
          // Randomize characters for ripple effect
          if (Math.random() < 0.3) {
            drop.chars = drop.chars.map(() => 
              matrixChars[Math.floor(Math.random() * matrixChars.length)]
            );
          }
        }
      });

      // Add multiple new drops at interaction point for more streaks
      const newDropCount = 5;
      for (let i = 0; i < newDropCount; i++) {
        if (Math.random() < 0.9) {
          const newDrop: MatrixDrop = {
            x: x + (Math.random() - 0.5) * 60,
            y: y - Math.random() * 80,
            speed: Math.random() * 6 + 4,
            chars: [],
            opacity: 1,
            length: Math.floor(Math.random() * 12) + 8
          };

          for (let j = 0; j < newDrop.length; j++) {
            newDrop.chars.push(matrixChars[Math.floor(Math.random() * matrixChars.length)]);
          }

          dropsRef.current.push(newDrop);
        }
      }
  }, [isMobile, matrixChars]);

  const animate = useCallback((currentTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simplified timing for better browser compatibility (especially Brave)
    const deltaTime = currentTime - lastTimeRef.current;
    const targetInterval = performanceTier === 'high' ? 16.67 : performanceTier === 'medium' ? 22.22 : 33.33; // 60fps, 45fps, 30fps

    // Use more consistent frame limiting that works better with Brave's optimizations
    if (deltaTime < targetInterval && lastTimeRef.current > 0) {
      animationFrameRef.current = requestAnimationFrame(animate);
      return;
    }

    lastTimeRef.current = currentTime;

    // Solid black background clear
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const fontSize = 16;

    // Update and render drops
    dropsRef.current = dropsRef.current.filter(drop => {
      // Update position
      drop.y += drop.speed;

      // Reset drop when it goes off screen with proper spacing
      if (drop.y > canvas.height + drop.length * (fontSize * 1.4)) {
        drop.y = -drop.length * (fontSize * 1.4);
        drop.x = Math.random() * canvas.width;
        drop.speed = (Math.random() * 4 + 2);
        drop.opacity = Math.random() * 0.8 + 0.2;
      }

      // Gradually return speed and opacity to normal
      drop.speed = Math.max(drop.speed * 0.99, 1);
      drop.opacity = Math.max(drop.opacity * 0.998, 0.3);

      // Render drop with defined Matrix characters
      ctx.font = `bold ${fontSize}px 'Courier New', 'Lucida Console', monospace`;
      ctx.textBaseline = 'top';
      ctx.textAlign = 'center';
      
      // Set rendering options for better Brave browser compatibility
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
      
      for (let i = 0; i < drop.chars.length; i++) {
        const charY = drop.y + i * (fontSize * 1.4); // More spacing for definition
        if (charY > 0 && charY < canvas.height + fontSize) {
          // Stronger fade effect for more definition
          const fadeMultiplier = Math.max(0, 1 - (i / drop.length) * 1.5);
          const alpha = drop.opacity * fadeMultiplier;
          
          // Skip very faint characters
          if (alpha < 0.2) continue;
          
          // Head character is bright white
          if (i === 0) {
            ctx.globalAlpha = Math.min(alpha, 1);
            ctx.fillStyle = '#ffffff';
          } else if (i <= 3) {
            // First few characters are bright green
            ctx.globalAlpha = Math.min(alpha * 0.95, 0.9);
            ctx.fillStyle = '#00ff41';
          } else {
            // Body characters with defined green
            ctx.globalAlpha = alpha * 0.8;
            ctx.fillStyle = '#00cc33';
          }
          
          // Render defined characters with pixel-perfect positioning
          ctx.fillText(drop.chars[i], Math.round(drop.x), Math.round(charY));
        }
      }

      // Reset global alpha for consistency
      ctx.globalAlpha = 1;
      return true;
    });

    // Update interaction points
    interactionPointsRef.current = interactionPointsRef.current.filter(point => {
      point.intensity *= point.decay;
      point.radius *= 1.02; // Expand ripple
      return point.intensity > 0.1;
    });

    // Render interaction ripples - clean circles with consistent alpha
    ctx.globalAlpha = 1;
    interactionPointsRef.current.forEach(point => {
      ctx.globalAlpha = point.intensity * 0.6;
      ctx.strokeStyle = '#00ff41';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
      ctx.beginPath();
      ctx.arc(Math.round(point.x), Math.round(point.y), Math.round(point.radius), 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.globalAlpha = 1; // Reset alpha

    // Clean up excess drops for performance but allow more streaks
    const maxActiveDrops = performanceTier === 'high' ? 200 : performanceTier === 'medium' ? 140 : 100;
    if (dropsRef.current.length > maxActiveDrops) {
      dropsRef.current = dropsRef.current.slice(0, maxActiveDrops);
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isMobile, performanceTier]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    initializeCanvas();
    initializeDrops();

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.1) { // Throttle for performance
        handleInteraction(e.clientX, e.clientY);
      }
    };

    const handleClick = (e: MouseEvent) => {
      handleInteraction(e.clientX, e.clientY);
    };

    // Touch interaction
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length > 0 && Math.random() < 0.1) { // Same throttle as desktop
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
      }
    };

    // Add event listeners with optimization
    const removeMouseMove = addOptimizedEventListener(canvas, 'mousemove', handleMouseMove);
    const removeClick = addOptimizedEventListener(canvas, 'click', handleClick);
    const removeTouchMove = addOptimizedEventListener(canvas, 'touchmove', handleTouchMove);
    const removeTouchStart = addOptimizedEventListener(canvas, 'touchstart', handleTouchStart);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      removeMouseMove?.();
      removeClick?.();
      removeTouchMove?.();
      removeTouchStart?.();
    };
  }, [initializeCanvas, initializeDrops, animate, handleInteraction, addOptimizedEventListener]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        background: '#000000',
        touchAction: 'none'
      }}
    />
  );
};

export default InteractiveMatrixBackground;