import React, { useEffect, useRef, useCallback, memo } from 'react';
import { useMobile } from '@/hooks/useMobile';

// Lightweight Matrix background - minimal memory footprint
const InteractiveMatrixBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const isVisibleRef = useRef(true);
  const lastTimeRef = useRef<number>(0);
  const { isMobile } = useMobile();

  // Minimal drop data - just numbers, no objects
  const dropsRef = useRef<Float32Array | null>(null); // [x, y, speed] per drop
  const dropCount = useRef(0);

  // Simple character set - reuse single string
  const chars = '01アイウエオ';

  const initializeDrops = useCallback((width: number) => {
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    // Drastically reduce drop count for memory savings
    const count = isMobile ? Math.min(columns * 0.3, 25) : Math.min(columns * 0.5, 50);
    dropCount.current = count;
    
    // Use typed array for memory efficiency (3 floats per drop: x, y, speed)
    dropsRef.current = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      dropsRef.current[idx] = i * fontSize * 1.2 + Math.random() * fontSize; // x
      dropsRef.current[idx + 1] = Math.random() * -500; // y
      dropsRef.current[idx + 2] = Math.random() * 3 + 2; // speed
    }
  }, [isMobile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Set size once
    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap DPR for memory
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initializeDrops(window.innerWidth);
    };
    
    updateSize();

    // Debounced resize
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(updateSize, 200);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Visibility handling
    const handleVisibility = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Minimal animation loop
    const animate = (time: number) => {
      if (!isVisibleRef.current || !dropsRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Limit to ~20 FPS on mobile, ~30 FPS on desktop for memory/CPU savings
      const targetInterval = isMobile ? 50 : 33;
      if (time - lastTimeRef.current < targetInterval) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = time;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const fontSize = 16;
      const drops = dropsRef.current;
      const count = dropCount.current;

      // Clear with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, width, height);

      // Render drops
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        let x = drops[idx];
        let y = drops[idx + 1];
        const speed = drops[idx + 2];

        // Update position
        y += speed;
        
        // Reset if off screen
        if (y > height + 50) {
          y = -50;
          x = Math.random() * width;
          drops[idx] = x;
        }
        drops[idx + 1] = y;

        // Draw single character (minimal)
        if (y > 0 && y < height) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillStyle = '#00ff41';
          ctx.globalAlpha = 0.7;
          ctx.fillText(char, x, y);
        }
      }

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(resizeTimeout);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', handleResize);
      // Clear typed array reference
      dropsRef.current = null;
    };
  }, [isMobile, initializeDrops, chars]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#000000', contain: 'strict' }}
    />
  );
});

InteractiveMatrixBackground.displayName = 'InteractiveMatrixBackground';

export default InteractiveMatrixBackground;