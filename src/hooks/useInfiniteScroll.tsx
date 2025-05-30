
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
    console.log(`🔄 Infinite scroll triggered - Loading more tools...`);
    onLoadMore();
  }, [isLoading, onLoadMore]);

  // Enhanced infinite scroll with better performance and glitch prevention
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
        
        // More aggressive threshold for better user experience
        const threshold = 800;
        const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
        
        console.log(`📏 Scroll check - ScrollTop: ${scrollTop}, WindowHeight: ${windowHeight}, DocumentHeight: ${documentHeight}, NearBottom: ${nearBottom}`);
        
        if (nearBottom && displayedCount < totalTools && !isLoading) {
          console.log(`🎯 Triggering load more - Displayed: ${displayedCount}, Total: ${totalTools}`);
          handleLoadMore();
        }
      }, 50); // Reduced debounce for more responsive loading
    };

    // Always enable scroll listening for homepage
    console.log(`🎮 Setting up infinite scroll - ShowButton: ${showLoadMoreButton}, Displayed: ${displayedCount}, Total: ${totalTools}`);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton, totalTools]);

  return { handleLoadMore };
};
