
import { useEffect, useCallback } from "react";

interface UseInfiniteScrollProps {
  isLoading: boolean;
  showLoadMoreButton: boolean;
  displayedCount: number;
  totalTools: number;
  onLoadMore: () => void;
}

export const useInfiniteScroll = ({ 
  isLoading, 
  showLoadMoreButton, 
  displayedCount, 
  totalTools, 
  onLoadMore 
}: UseInfiniteScrollProps) => {
  const handleLoadMore = useCallback(() => {
    if (isLoading) return;
    onLoadMore();
  }, [isLoading, onLoadMore]);

  // Improved infinite scroll with better performance and glitch prevention
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (isLoading || showLoadMoreButton) return; // Don't auto-scroll if button mode is enabled
      
      // Clear previous timeout to prevent multiple triggers
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // More conservative threshold to prevent glitches
        const threshold = 600;
        const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
        
        if (nearBottom && displayedCount < totalTools && !isLoading) {
          handleLoadMore();
        }
      }, 100); // Debounce scroll events
    };

    if (!showLoadMoreButton) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton, totalTools]);

  return { handleLoadMore };
};
