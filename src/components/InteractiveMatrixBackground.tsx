import React, { useEffect, useRef, useCallback, memo } from 'react';
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

const InteractiveMatrixBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const dropsRef = useRef<MatrixDrop[]>([]);
  const interactionPointsRef = useRef<InteractionPoint[]>([]);
  const lastTimeRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const searchFocusedRef = useRef(false);
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
    // Drastically reduce drops for smooth performance
    const maxDrops = isMobile 
      ? Math.min(columns * 0.25, 20) // Much fewer on mobile
      : performanceTier === 'high' ? Math.min(columns * 0.6, 50) : 
        performanceTier === 'medium' ? Math.min(columns * 0.4, 35) : 
        Math.min(columns * 0.3, 25);

    dropsRef.current = [];

    for (let i = 0; i < maxDrops; i++) {
      const drop: MatrixDrop = {
        x: (i * fontSize * 1.2) + (Math.random() * fontSize * 0.5),
        y: Math.random() * -canvas.height,
        speed: (Math.random() * 3 + 2), // Slower, smoother
        chars: [],
        opacity: Math.random() * 0.4 + 0.4,
        length: Math.floor(Math.random() * 8) + 4 // Shorter trails
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
    // Skip if tab not visible
    if (!isVisibleRef.current) {
      animationFrameRef.current = requestAnimationFrame(animate);
      return;
    }
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Search typing gets priority: slow background frames while input is focused.
    const deltaTime = currentTime - lastTimeRef.current;
    const targetInterval = searchFocusedRef.current ? 140 : (isMobile ? 80 : 50);

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

    // Clean up excess drops aggressively for smooth performance
    const maxActiveDrops = searchFocusedRef.current ? 12 : (isMobile ? 20 : performanceTier === 'high' ? 38 : 24);
    if (dropsRef.current.length > maxActiveDrops) {
      dropsRef.current = dropsRef.current.slice(0, maxActiveDrops);
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isMobile, performanceTier]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Pause animation when tab not visible
    const handleVisibility = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

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

    // Touch interaction - don't prevent default to allow scrolling
    const handleTouchMove = (e: TouchEvent) => {
      // Don't prevent default - allow normal scrolling
      if (e.touches.length > 0 && Math.random() < 0.1) { // Same throttle as desktop
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      // Don't prevent default - allow normal scrolling
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
      }
    };

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      searchFocusedRef.current = !!target?.closest('[data-testid="global-search-input"]');
    };

    const handleFocusOut = () => {
      searchFocusedRef.current = false;
    };

    // Add event listeners with optimization - use passive for touch events to allow scrolling
    const removeMouseMove = addOptimizedEventListener(canvas, 'mousemove', handleMouseMove);
    const removeClick = addOptimizedEventListener(canvas, 'click', handleClick);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibility);
      removeMouseMove?.();
      removeClick?.();
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [initializeCanvas, initializeDrops, animate, handleInteraction, addOptimizedEventListener]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        background: '#000000',
        touchAction: 'auto', // Allow normal touch scrolling
        contain: 'strict'
      }}
    />
  );
});

InteractiveMatrixBackground.displayName = 'InteractiveMatrixBackground';

export default InteractiveMatrixBackground;