
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

interface ScrollToTopButtonProps {
  showScrollTop: boolean;
  onScrollToTop: () => void;
}

const ScrollToTopButton = ({ showScrollTop, onScrollToTop }: ScrollToTopButtonProps) => {
  if (!showScrollTop) return null;

  return (
    <Button
      onClick={onScrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:scale-110"
      size="icon"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default ScrollToTopButton;
