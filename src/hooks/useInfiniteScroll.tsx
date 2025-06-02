
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

  // Optimized infinite scroll with better performance
  useEffect(() => {
    if (isLoading || showLoadMoreButton || displayedCount >= totalTools) return;
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          
          // More aggressive threshold for search results
          const threshold = searchTerm ? 600 : 1000;
          const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
          
          if (nearBottom && displayedCount < totalTools) {
            console.log(`🎯 Triggering load more - Displayed: ${displayedCount}, Total: ${totalTools}, Search: "${searchTerm}"`);
            handleLoadMore();
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton, totalTools, searchTerm]);

  return { handleLoadMore };
};
