import { useState, useEffect } from 'react';
import { Copy, Code } from 'lucide-react';
import { createTimePortalEffect } from '@/utils/timeEffects';

const FloatingCloneButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768; // md breakpoint
      
      if (isMobile && currentScrollY > lastScrollY && currentScrollY > 200) {
        // Only hide on mobile when scrolling down and past 200px
        setIsVisible(false);
      } else if (isMobile && currentScrollY < lastScrollY) {
        // Only show/hide logic on mobile when scrolling up
        setIsVisible(true);
      } else if (!isMobile) {
        // Always visible on desktop
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true }); // Handle resize events
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed left-2 top-56 sm:top-64 md:top-28 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <a
        href="https://lovable.dev/projects/d178ea3e-c9d3-464e-b3a6-6a5878c288be?via=aiwebtools"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('🌀 Clone Website Button clicked - triggering time warp');
          createTimePortalEffect('https://lovable.dev/projects/d178ea3e-c9d3-464e-b3a6-6a5878c288be?via=aiwebtools', 'Clone AI Web Tools');
        }}
        className="group bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white w-14 h-14 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center relative overflow-hidden"
        style={{ 
          boxShadow: '0 8px 32px rgba(6, 182, 212, 0.4), 0 4px 16px rgba(59, 130, 246, 0.3)',
          backdropFilter: 'blur(8px)',
        }}
        title="Clone This AI Tools Website"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 animate-pulse rounded-full" />
        
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center">
          <Copy className="w-3 h-3 group-hover:animate-bounce mb-0.5" />
          <div className="text-[7px] font-bold leading-none">
            <div>CLONE</div>
            <div>SITE</div>
            <div>FREE</div>
          </div>
        </div>
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 rounded-full" />
      </a>
    </div>
  );
};

export default FloatingCloneButton;