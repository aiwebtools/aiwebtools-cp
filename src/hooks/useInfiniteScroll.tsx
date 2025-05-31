
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

  // Enhanced infinite scroll with better performance and search optimization
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
        
        // More aggressive threshold for search results to ensure infinite scroll works
        const threshold = searchTerm ? 400 : 800; // Much lower threshold for search results
        const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
        
        console.log(`📏 Scroll check - ScrollTop: ${scrollTop}, WindowHeight: ${windowHeight}, DocumentHeight: ${documentHeight}, NearBottom: ${nearBottom}, Search: "${searchTerm}"`);
        
        if (nearBottom && displayedCount < totalTools && !isLoading) {
          console.log(`🎯 Triggering load more - Displayed: ${displayedCount}, Total: ${totalTools}, Search: "${searchTerm}"`);
          handleLoadMore();
        }
      }, searchTerm ? 50 : 100); // Faster response for search results
    };

    // Always enable scroll listening, especially for search results
    console.log(`🎮 Setting up infinite scroll - ShowButton: ${showLoadMoreButton}, Displayed: ${displayedCount}, Total: ${totalTools}, Search: "${searchTerm}"`);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton, totalTools, searchTerm]);

  return { handleLoadMore };
};
