
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useScrollOptimization } from "@/hooks/useScrollOptimization";

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const touchStartY = useRef(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { addOptimizedScrollListener, isMobile } = useScrollOptimization();

  useEffect(() => {
    const cleanup = addOptimizedScrollListener(window, () => {
      setShowScrollTop(window.scrollY > 300);
    }, isMobile ? 32 : 16);

    return () => {
      cleanup?.();
    };
  }, [addOptimizedScrollListener, isMobile]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPressed(true);
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPressed) return;
    
    const currentY = e.touches[0].clientY;
    const deltaY = touchStartY.current - currentY;
    
    // If user swipes up significantly (more than 30px), trigger scroll to top
    if (deltaY > 30) {
      scrollToTop();
      setIsPressed(false);
    }
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  if (!showScrollTop) return null;

  return (
    <Button
      ref={buttonRef}
      onClick={scrollToTop}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 active:from-purple-800 active:to-pink-800 shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 active:scale-95 ${
        isPressed ? 'scale-95' : ''
      }`}
      size="icon"
      aria-label="Scroll to top - Click or swipe up"
      style={{ 
        touchAction: 'manipulation',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <ArrowUp className={`w-5 h-5 transition-transform duration-200 ${isPressed ? 'scale-110' : ''}`} />
    </Button>
  );
};

export default ScrollToTopButton;
