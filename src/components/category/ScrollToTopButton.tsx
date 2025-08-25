
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useScrollOptimization } from "@/hooks/useScrollOptimization";

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showScrollTop) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-20 right-4 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110"
      size="icon"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default ScrollToTopButton;
