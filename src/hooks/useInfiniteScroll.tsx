
import { useEffect, useCallback } from "react";

interface UseInfiniteScrollProps {
  isLoading: boolean;
  showLoadMoreButton: boolean;
  displayedCount: number;
  totalTools: number;
  onLoadMore: () => void;
  searchTerm?: string;
}

export const useInfiniteScroll = ({ 
  isLoading, 
  showLoadMoreButton, 
  displayedCount, 
  totalTools, 
  onLoadMore,
  searchTerm = ""
}: UseInfiniteScrollProps) => {
  const handleLoadMore = useCallback(() => {
    if (isLoading) return;
    console.log(`🔄 Infinite scroll triggered - Loading more tools... Search: "${searchTerm}"`);
    onLoadMore();
  }, [isLoading, onLoadMore, searchTerm]);

  // High performance infinite scroll with aggressive throttling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let rafId: number;
    let isThrottled = false;
    
    const handleScroll = () => {
      if (isLoading || showLoadMoreButton || isThrottled) return;
      
      // Heavy throttling for performance
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, 300); // Increased throttle time
      
      // Clear previous timeout and RAF
      clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
      
      // Use RAF for smoother performance
      rafId = requestAnimationFrame(() => {
        timeoutId = setTimeout(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          
          // Very conservative threshold to prevent excessive loading
          const threshold = searchTerm ? 800 : 1200;
          const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
          
          if (nearBottom && displayedCount < totalTools && !isLoading) {
            console.log(`🎯 Triggering load more - Displayed: ${displayedCount}, Total: ${totalTools}, Search: "${searchTerm}"`);
            handleLoadMore();
          }
        }, searchTerm ? 200 : 400); // Longer delays for better performance
      });
    };

    // Only enable scroll when absolutely necessary
    if (!showLoadMoreButton && displayedCount < totalTools) {
      console.log(`🎮 Setting up infinite scroll - Displayed: ${displayedCount}, Total: ${totalTools}, Search: "${searchTerm}"`);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton, totalTools, searchTerm]);

  return { handleLoadMore };
};
