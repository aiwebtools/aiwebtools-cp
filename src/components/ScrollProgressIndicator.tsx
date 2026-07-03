import { useEffect, useRef } from 'react';

const ScrollProgressIndicator = () => {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress / 100))})`;
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        updateProgress();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 z-[90] bg-black/50"
      style={{ pointerEvents: 'none' }}
    >
      <div 
        ref={barRef}
        className="h-full transition-none"
        style={{ 
          width: '100%',
          transform: 'scaleX(0)',
          transformOrigin: '0 50%',
          background: 'linear-gradient(90deg, #00ff41, #00ffff, #a855f7)',
          boxShadow: '0 0 6px #00ff41',
        }}
      />
    </div>
  );
};

export default ScrollProgressIndicator;
