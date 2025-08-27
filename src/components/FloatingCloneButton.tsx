import { useState, useEffect } from 'react';

const FloatingCloneButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // On mobile, always keep visible - no scroll hiding
    if (isMobile) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px (desktop only)
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobile]);

  return (
    <a
      href="https://cloneaiwebtools.lovable.app/?via=aiwebtools"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        console.log('FloatingCloneButton clicked, URL:', 'https://cloneaiwebtools.lovable.app/?via=aiwebtools');
        // Force the correct URL in case of any caching issues
        window.open('https://cloneaiwebtools.lovable.app/?via=aiwebtools', '_blank');
        e.preventDefault();
      }}
      className={`fixed z-50 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
        isMobile ? 'bottom-20 right-4' : 'bottom-4 left-4'
      } ${isVisible || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ 
        fontSize: '6px', 
        lineHeight: '1',
        boxShadow: '0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(147, 51, 234, 0.4), 0 0 60px rgba(147, 51, 234, 0.2)',
        animation: 'glow 2s ease-in-out infinite alternate'
      }}
      title="Clone this website"
    >
      <span className="text-center px-1">
        CLONE
        <br />
        THIS
        <br />
        SITE
      </span>
    </a>
  );
};

export default FloatingCloneButton;