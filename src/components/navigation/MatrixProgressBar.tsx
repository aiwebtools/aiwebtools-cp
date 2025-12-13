import { useEffect, useState, useMemo } from 'react';

interface MatrixProgressBarProps {
  isLoading: boolean;
  duration?: number;
}

const MatrixProgressBar = ({ isLoading, duration = 150 }: MatrixProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Matrix characters for the rain effect
  const matrixChars = useMemo(() => 
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      char: Math.random() > 0.5 ? '1' : '0',
      left: `${i * 10 + Math.random() * 5}%`,
      delay: Math.random() * 100,
    })), []
  );

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
      setIsFadingOut(false);
      setProgress(0);
      
      // Animate progress to 100%
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);
        
        if (newProgress < 100) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    } else if (isVisible) {
      // Complete the progress and fade out
      setProgress(100);
      setIsFadingOut(true);
      const timeout = setTimeout(() => {
        setIsVisible(false);
        setIsFadingOut(false);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, duration, isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-[9999] h-1 overflow-hidden transition-opacity duration-200 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ background: 'rgba(0, 0, 0, 0.8)' }}
    >
      {/* Main progress bar */}
      <div 
        className="h-full bg-gradient-to-r from-matrix-green via-matrix-bright to-matrix-green relative"
        style={{ 
          width: `${progress}%`,
          transition: 'width 16ms linear',
          boxShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41'
        }}
      >
        {/* Glow edge */}
        <div 
          className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 via-matrix-bright to-transparent"
          style={{ 
            filter: 'blur(2px)',
            animation: 'matrixProgressPulse 0.3s ease-in-out infinite'
          }}
        />
        
        {/* Matrix characters rain */}
        <div className="absolute inset-0 overflow-hidden">
          {matrixChars.map(({ id, char, left, delay }) => (
            <span
              key={id}
              className="absolute text-[8px] font-mono text-matrix-bright opacity-80"
              style={{
                left,
                animation: `matrixCharFall 0.3s linear infinite`,
                animationDelay: `${delay}ms`,
                textShadow: '0 0 5px #00ff41'
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      
      {/* Scan line effect */}
      <div 
        className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-matrix-bright/30 to-transparent"
        style={{
          left: `${progress - 10}%`,
          filter: 'blur(1px)'
        }}
      />
    </div>
  );
};

export default MatrixProgressBar;
