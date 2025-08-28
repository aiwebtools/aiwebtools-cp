import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { createTimePortalEffect } from '@/utils/timeEffects';

const FloatingCloneButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
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
    <a
      href="https://cloneaiwebtools.lovable.app/?via=aiwebtools"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('🌀 FloatingCloneButton clicked - triggering time warp');
        createTimePortalEffect('https://cloneaiwebtools.lovable.app/?via=aiwebtools', 'Clone AI Web Tools');
      }}
      className={`fixed bottom-4 right-4 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ 
        boxShadow: '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)',
        animation: 'pulse 2s ease-in-out infinite'
      }}
      title="Get Support & Clone This Site"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingCloneButton;