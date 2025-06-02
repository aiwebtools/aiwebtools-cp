
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

  // Ultra-optimized infinite scroll with zero delays
  useEffect(() => {
    if (isLoading || showLoadMoreButton || displayedCount >= totalTools) return;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Aggressive threshold for instant loading
      const threshold = searchTerm ? 500 : 800;
      const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
      
      if (nearBottom && displayedCount < totalTools) {
        console.log(`🎯 Triggering load more - Displayed: ${displayedCount}, Total: ${totalTools}, Search: "${searchTerm}"`);
        handleLoadMore();
      }
    };

    // Direct scroll listener without any throttling or frame delays
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton, totalTools, searchTerm]);

  return { handleLoadMore };
};
