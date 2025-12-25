import { useEffect, useRef, useCallback, memo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  char: string;
  opacity: number;
  scale: number;
  createdAt: number;
}

// Use a simple DOM-based approach instead of React state for better perf
const MatrixCursorEffect = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Map<number, HTMLSpanElement>>(new Map());
  const particleIdRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);
  
  const matrixChars = ['0', '1', '⟨', '⟩', '░', '▒'];
  
  const spawnParticle = useCallback((x: number, y: number) => {
    if (!containerRef.current || !isVisibleRef.current) return;
    
    const now = Date.now();
    // Throttle particle spawning to every 120ms for better perf
    if (now - lastSpawnRef.current < 120) return;
    lastSpawnRef.current = now;
    
    const id = particleIdRef.current++;
    const span = document.createElement('span');
    span.className = 'absolute font-mono text-matrix-green select-none';
    span.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    const scale = 0.5 + Math.random() * 0.5;
    span.style.cssText = `
      left: ${x + (Math.random() - 0.5) * 20}px;
      top: ${y + (Math.random() - 0.5) * 20}px;
      opacity: 0.8;
      transform: translate(-50%, -50%) scale(${scale});
      font-size: 14px;
      text-shadow: 0 0 8px #00ff41;
      will-change: transform, opacity;
    `;
    span.dataset.createdAt = String(now);
    span.dataset.baseY = String(y + (Math.random() - 0.5) * 20);
    
    containerRef.current.appendChild(span);
    particlesRef.current.set(id, span);
    
    // Limit max particles to 8 for better perf
    if (particlesRef.current.size > 8) {
      const firstKey = particlesRef.current.keys().next().value;
      const firstEl = particlesRef.current.get(firstKey);
      firstEl?.remove();
      particlesRef.current.delete(firstKey);
    }
  }, []);

  useEffect(() => {
    // Don't render on touch devices
    if ('ontouchstart' in window) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      spawnParticle(e.clientX, e.clientY);
    };

    // Pause when tab not visible
    const handleVisibility = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
      if (!isVisibleRef.current && rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (isVisibleRef.current && !rafRef.current) {
        rafRef.current = requestAnimationFrame(updateParticles);
      }
    };

    // Update particles (fade out and fall) - direct DOM manipulation
    const updateParticles = () => {
      if (!isVisibleRef.current) return;
      
      const now = Date.now();
      particlesRef.current.forEach((span, id) => {
        const createdAt = Number(span.dataset.createdAt);
        const baseY = Number(span.dataset.baseY);
        const age = now - createdAt;
        const opacity = Math.max(0, 0.8 - age / 600);
        
        if (opacity <= 0) {
          span.remove();
          particlesRef.current.delete(id);
        } else {
          span.style.opacity = String(opacity);
          span.style.top = `${baseY + age * 0.05}px`;
        }
      });
      
      rafRef.current = requestAnimationFrame(updateParticles);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    rafRef.current = requestAnimationFrame(updateParticles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      particlesRef.current.forEach(span => span.remove());
      particlesRef.current.clear();
    };
  }, [spawnParticle]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden"
      style={{ contain: 'strict' }}
    />
  );
});

MatrixCursorEffect.displayName = 'MatrixCursorEffect';

export default MatrixCursorEffect;
