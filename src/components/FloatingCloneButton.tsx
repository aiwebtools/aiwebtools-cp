import { useState, useEffect } from 'react';

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
      href="https://clone-me-and-make-your-own-aiwebtools.lovable.app/?via=aiwebtools"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        console.log('FloatingCloneButton clicked, URL:', 'https://clone-me-and-make-your-own-aiwebtools.lovable.app/?via=aiwebtools');
        // Force the correct URL in case of any caching issues
        window.open('https://clone-me-and-make-your-own-aiwebtools.lovable.app/?via=aiwebtools', '_blank');
        e.preventDefault();
      }}
      className={`fixed bottom-4 left-4 z-50 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
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