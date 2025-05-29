
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

  // Enhanced infinite scroll with better performance and reliability
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
        
        // More conservative threshold to prevent glitches but ensure consistent loading
        const threshold = 800; // Increased threshold for better UX
        const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
        
        // Additional check to ensure we haven't reached the maximum
        if (nearBottom && displayedCount < totalTools && !isLoading) {
          console.log('🔄 Auto-loading more tools via infinite scroll');
          handleLoadMore();
        }
      }, 150); // Slightly longer debounce for better performance
    };

    // Only add scroll listener if infinite scroll is enabled
    if (!showLoadMoreButton && totalTools > displayedCount) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      console.log('✅ Infinite scroll enabled for seamless tool loading');
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton, totalTools]);

  return { handleLoadMore };
};
