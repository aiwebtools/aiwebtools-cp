import { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  char: string;
  opacity: number;
  scale: number;
  createdAt: number;
}

const MatrixCursorEffect = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  
  const matrixChars = ['0', '1', '⟨', '⟩', '░', '▒'];
  
  const spawnParticle = useCallback((x: number, y: number) => {
    const now = Date.now();
    // Throttle particle spawning to every 50ms
    if (now - lastSpawnRef.current < 50) return;
    lastSpawnRef.current = now;
    
    const newParticle: Particle = {
      id: particleIdRef.current++,
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
      opacity: 0.8,
      scale: 0.5 + Math.random() * 0.5,
      createdAt: now,
    };
    
    setParticles(prev => [...prev.slice(-15), newParticle]); // Keep max 15 particles
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      spawnParticle(e.clientX, e.clientY);
    };

    // Update particles (fade out and fall)
    const updateParticles = () => {
      const now = Date.now();
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            y: p.y + 0.5, // Slow fall
            opacity: Math.max(0, 0.8 - (now - p.createdAt) / 800),
          }))
          .filter(p => p.opacity > 0)
      );
      rafRef.current = requestAnimationFrame(updateParticles);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(updateParticles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [spawnParticle]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden">
      {particles.map(particle => (
        <span
          key={particle.id}
          className="absolute font-mono text-matrix-green select-none"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transform: `translate(-50%, -50%) scale(${particle.scale})`,
            fontSize: '14px',
            textShadow: '0 0 8px #00ff41, 0 0 12px #00ff41',
            transition: 'opacity 100ms linear',
          }}
        >
          {particle.char}
        </span>
      ))}
    </div>
  );
};

export default MatrixCursorEffect;
