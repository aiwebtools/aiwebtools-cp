
import { useEffect, useCallback, useRef } from "react";

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
  // Use refs to prevent unnecessary re-renders
  const isLoadingRef = useRef(isLoading);
  const displayedCountRef = useRef(displayedCount);
  const totalToolsRef = useRef(totalTools);
  
  // Update refs
  isLoadingRef.current = isLoading;
  displayedCountRef.current = displayedCount;
  totalToolsRef.current = totalTools;

  const handleLoadMore = useCallback(() => {
    if (isLoadingRef.current) return;
    console.log(`🔄 Infinite scroll triggered - Loading more tools... Search: "${searchTerm}"`);
    onLoadMore();
  }, [onLoadMore, searchTerm]);

  // Ultra-optimized infinite scroll with RAF throttling
  useEffect(() => {
    if (isLoading || showLoadMoreButton || displayedCount >= totalTools) return;
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          
          // More aggressive threshold for instant loading
          const threshold = searchTerm ? 400 : 600;
          const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
          
          if (nearBottom && displayedCountRef.current < totalToolsRef.current && !isLoadingRef.current) {
            console.log(`🎯 Triggering load more - Displayed: ${displayedCountRef.current}, Total: ${totalToolsRef.current}, Search: "${searchTerm}"`);
            handleLoadMore();
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton, totalTools, searchTerm]);

  return { handleLoadMore };
};
