
import { useEffect, useCallback, useRef } from "react";

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
  const timeoutRef = useRef<NodeJS.Timeout>();
  const isLoadingRef = useRef(false);

  const handleLoadMore = useCallback(() => {
    if (isLoadingRef.current || isLoading) return;
    console.log(`🔄 Infinite scroll triggered - Loading more tools...`);
    isLoadingRef.current = true;
    onLoadMore();
    
    // Reset loading flag after a delay to prevent rapid firing
    setTimeout(() => {
      isLoadingRef.current = false;
    }, 1000);
  }, [isLoading, onLoadMore]);

  // Heavily optimized infinite scroll with throttling and performance improvements
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || showLoadMoreButton || isLoadingRef.current) return;
      
      // Clear previous timeout to prevent multiple triggers
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        // Use more efficient scroll calculation
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
        // More aggressive threshold for better UX
        const threshold = 600;
        const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
        
        if (nearBottom && displayedCount < totalTools && !isLoading && !isLoadingRef.current) {
          console.log(`🎯 Triggering load more - Displayed: ${displayedCount}, Total: ${totalTools}`);
          handleLoadMore();
        }
      }, 100); // Optimized debounce timing
    };

    // Use passive listeners for better performance
    console.log(`🎮 Setting up optimized infinite scroll - ShowButton: ${showLoadMoreButton}, Displayed: ${displayedCount}, Total: ${totalTools}`);
    window.addEventListener('scroll', handleScroll, { passive: true, capture: false });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton, totalTools]);

  return { handleLoadMore };
};
