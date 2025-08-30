import { useState, useEffect } from 'react';
import { Copy, Code } from 'lucide-react';
import { createTimePortalEffect } from '@/utils/timeEffects';

const FloatingCloneButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down and past 200px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed left-2 top-20 z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <a
        href="https://cloneaiwebtools.lovable.app/?via=aiwebtools"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('🌀 Clone Website Button clicked - triggering time warp');
          createTimePortalEffect('https://cloneaiwebtools.lovable.app/?via=aiwebtools', 'Clone AI Web Tools');
        }}
        className="group bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400 text-white w-12 h-12 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative overflow-hidden"
        style={{ 
          boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3), 0 4px 16px rgba(59, 130, 246, 0.2)',
          backdropFilter: 'blur(8px)',
        }}
        title="Clone This AI Tools Website - FREE"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 animate-pulse rounded-full" />
        
        {/* Content - Just the copy icon for circular button */}
        <div className="relative">
          <Copy className="w-5 h-5 group-hover:animate-bounce" />
        </div>
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
      </a>
    </div>
  );
};

export default FloatingCloneButton;