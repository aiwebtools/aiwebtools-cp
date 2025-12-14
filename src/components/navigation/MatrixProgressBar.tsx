import { useEffect, useState, useMemo, useRef } from 'react';

interface MatrixProgressBarProps {
  isLoading: boolean;
  duration?: number;
  isToolPage?: boolean;
}

const MatrixProgressBar = ({ isLoading, duration = 50, isToolPage = false }: MatrixProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const animationRef = useRef<number | null>(null);

  // More characters for tool pages
  const charCount = isToolPage ? 20 : 10;
  
  // Matrix characters for the rain effect
  const matrixChars = useMemo(() => 
    Array.from({ length: charCount }, (_, i) => ({
      id: i,
      char: Math.random() > 0.5 ? '1' : '0',
      left: `${(i / charCount) * 100}%`,
      delay: Math.random() * 100,
      size: isToolPage ? Math.floor(Math.random() * 6 + 10) : 8,
    })), [charCount, isToolPage]
  );

  // Explosion particles for tool pages
  const explosionParticles = useMemo(() => 
    isToolPage ? Array.from({ length: 50 }, (_, i) => ({
      id: i,
      char: ['0', '1', '⟨', '⟩', '█', '▓', '▒', '░'][Math.floor(Math.random() * 8)],
      angle: (i / 50) * 360,
      distance: 50 + Math.random() * 150,
      delay: Math.random() * 100,
      size: Math.floor(Math.random() * 8 + 8),
    })) : [], [isToolPage]
  );

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
      setIsFadingOut(false);
      setProgress(0);
      
      // Animate progress to 100%
      const startTime = performance.now();
      const effectiveDuration = isToolPage ? duration * 1.5 : duration;
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const newProgress = Math.min((elapsed / effectiveDuration) * 100, 100);
        setProgress(newProgress);
        
        if (newProgress < 100) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
    } else if (isVisible) {
      // Complete the progress and fade out
      setProgress(100);
      setIsFadingOut(true);
      const timeout = setTimeout(() => {
        setIsVisible(false);
        setIsFadingOut(false);
      }, isToolPage ? 150 : 100);
      return () => {
        clearTimeout(timeout);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isLoading, duration, isVisible, isToolPage]);

  if (!isVisible) return null;

  const barHeight = isToolPage ? 'h-2' : 'h-1';

  return (
    <>
      {/* Main progress bar */}
      <div 
        className={`fixed top-0 left-0 right-0 z-[9999] ${barHeight} overflow-hidden transition-opacity duration-200 ${
          isFadingOut ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ background: 'rgba(0, 0, 0, 0.9)' }}
      >
        {/* Main progress bar fill */}
        <div 
          className="h-full relative"
          style={{ 
            width: `${progress}%`,
            background: isToolPage 
              ? 'linear-gradient(90deg, #00ff41, #00ffff, #00ff41)'
              : 'linear-gradient(90deg, #00ff41, #39ff14, #00ff41)',
            boxShadow: isToolPage
              ? '0 0 15px #00ff41, 0 0 30px #00ffff, 0 0 45px #00ff41'
              : '0 0 10px #00ff41, 0 0 20px #00ff41',
            transition: 'width 16ms linear'
          }}
        >
          {/* Glow edge */}
          <div 
            className="absolute right-0 top-0 h-full bg-gradient-to-l from-white via-white/80 to-transparent"
            style={{ 
              width: isToolPage ? '40px' : '20px',
              filter: 'blur(2px)',
              animation: 'matrixProgressPulse 0.2s ease-in-out infinite'
            }}
          />
          
          {/* Matrix characters rain */}
          <div className="absolute inset-0 overflow-hidden">
            {matrixChars.map(({ id, char, left, delay, size }) => (
              <span
                key={id}
                className="absolute font-mono opacity-90"
                style={{
                  left,
                  fontSize: `${size}px`,
                  color: isToolPage ? '#00ffff' : '#00ff41',
                  animation: `matrixCharFall ${isToolPage ? '0.4s' : '0.3s'} linear infinite`,
                  animationDelay: `${delay}ms`,
                  textShadow: `0 0 ${isToolPage ? '10px' : '5px'} currentColor`
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        
        {/* Scan line effect */}
        <div 
          className="absolute top-0 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
          style={{
            left: `${progress - 15}%`,
            width: isToolPage ? '60px' : '30px',
            filter: 'blur(1px)'
          }}
        />
      </div>
      
      {/* Matrix explosion overlay for tool pages */}
      {isToolPage && (
        <div 
          className={`fixed inset-0 z-[9998] pointer-events-none transition-opacity duration-300 ${
            isFadingOut ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: `radial-gradient(circle at 50% 0%, rgba(0, 255, 65, 0.15) 0%, transparent 50%)`
          }}
        >
          {/* Central burst */}
          <div 
            className="absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(0, 255, 65, 0.4) 0%, rgba(0, 255, 255, 0.2) 30%, transparent 70%)',
              filter: 'blur(20px)',
              animation: 'matrixBurst 0.3s ease-out forwards',
              transform: `translate(-50%, 0) scale(${progress / 50})`
            }}
          />
          
          {/* Explosion particles */}
          <div className="absolute left-1/2 top-4 -translate-x-1/2">
            {explosionParticles.map(({ id, char, angle, distance, delay, size }) => (
              <span
                key={id}
                className="absolute font-mono"
                style={{
                  fontSize: `${size}px`,
                  color: id % 2 === 0 ? '#00ff41' : '#00ffff',
                  textShadow: '0 0 10px currentColor',
                  transform: `rotate(${angle}deg) translateY(-${(progress / 100) * distance}px)`,
                  opacity: Math.max(0, 1 - (progress / 100) * 0.8),
                  transition: 'transform 50ms linear, opacity 50ms linear',
                  animationDelay: `${delay}ms`
                }}
              >
                {char}
              </span>
            ))}
          </div>
          
          {/* Side streams */}
          <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={`stream-${i}`}
                className="absolute font-mono text-xs"
                style={{
                  left: `${(i / 30) * 100}%`,
                  top: '-20px',
                  color: '#00ff41',
                  opacity: 0.6,
                  textShadow: '0 0 5px #00ff41',
                  animation: 'matrixStreamDown 0.5s linear forwards',
                  animationDelay: `${i * 10}ms`
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MatrixProgressBar;
