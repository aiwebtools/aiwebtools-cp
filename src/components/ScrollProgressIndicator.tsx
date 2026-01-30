import { useEffect, useState } from 'react';

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 z-[90] bg-black/50"
      style={{ pointerEvents: 'none' }}
    >
      <div 
        className="h-full transition-none"
        style={{ 
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00ff41, #00ffff, #a855f7)',
          boxShadow: '0 0 10px #00ff41, 0 0 20px #00ffff',
        }}
      />
    </div>
  );
};

export default ScrollProgressIndicator;
