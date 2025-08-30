
import { useEffect, useCallback, useRef } from "react";
import { Tool } from "@/types/tools";

interface UseInfiniteScrollProps {
  isLoading: boolean;
  showLoadMoreButton: boolean;
  displayedCount: number;
  totalTools: number;
  onLoadMore: () => void;
  searchTerm?: string;
  selectedCategory?: string | null;
  enableInfiniteScroll?: boolean;
  tools?: Tool[]; // Add tools for forever scroll cycling
}

export const useInfiniteScroll = ({ 
  isLoading, 
  showLoadMoreButton, 
  displayedCount, 
  totalTools, 
  onLoadMore,
  searchTerm = "",
  selectedCategory = null,
  enableInfiniteScroll = true,
  tools = []
}: UseInfiniteScrollProps) => {
  // Use refs to prevent unnecessary re-renders and maintain performance
  const isLoadingRef = useRef(isLoading);
  const displayedCountRef = useRef(displayedCount);
  const totalToolsRef = useRef(totalTools);
  const lastScrollY = useRef(0);
  
  // Update refs for current values
  isLoadingRef.current = isLoading;
  displayedCountRef.current = displayedCount;
  totalToolsRef.current = totalTools;

  const handleLoadMore = useCallback(() => {
    if (isLoadingRef.current) return;
    
    // For search results with limited tools, check if we've reached the end
    if (searchTerm && displayedCountRef.current >= totalToolsRef.current) return;
    
    // For categories or main page, enable forever scroll by never stopping
    const isForeverScroll = !searchTerm && tools.length > 0;
    
    if (!isForeverScroll && displayedCountRef.current >= totalToolsRef.current) return;
    
    console.log(`🔄 ${isForeverScroll ? 'Forever' : 'Regular'} scroll triggered - Loading more tools... Search: "${searchTerm}", Category: "${selectedCategory}"`);
    onLoadMore();
  }, [onLoadMore, searchTerm, selectedCategory, totalTools, tools.length]);

  // Enhanced infinite scroll with forever scroll support
  useEffect(() => {
    // Don't enable infinite scroll if explicitly disabled or if load more button is preferred
    if (!enableInfiniteScroll || showLoadMoreButton) return;
    
    // For search results, only enable if there are more tools to load
    if (searchTerm && displayedCount >= totalTools) return;
    
    let ticking = false;
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Throttle scroll events using requestAnimationFrame for smooth performance
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          
          // Only trigger if scrolling down (prevent accidental triggers when scrolling up)
          const isScrollingDown = scrollTop > lastScrollY.current;
          lastScrollY.current = scrollTop;
          
          if (!isScrollingDown) {
            ticking = false;
            return;
          }
          
          // Dynamic threshold based on context - more aggressive for categories and search
          let threshold = 800; // Default for main page
          if (searchTerm) {
            threshold = 400; // More aggressive for search results
          } else if (selectedCategory || !searchTerm) {
            threshold = 600; // Medium aggressive for categories with forever scroll
          }
          
          const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
          
          if (nearBottom && !isLoadingRef.current) {
            // For search results, respect the total count
            if (searchTerm && displayedCountRef.current >= totalToolsRef.current) {
              ticking = false;
              return;
            }
            
            // For categories or main page with no search, enable forever scroll
            const shouldLoad = !searchTerm || displayedCountRef.current < totalToolsRef.current;
            
            if (shouldLoad) {
              const scrollType = searchTerm ? 'Search' : selectedCategory ? 'Category (Forever)' : 'Main (Forever)';
              console.log(`🎯 Auto-loading more tools - Context: ${scrollType}, Displayed: ${displayedCountRef.current}/${totalToolsRef.current}`);
              
              // Small delay to prevent rapid fire requests
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => {
                handleLoadMore();
              }, 100);
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton, totalTools, searchTerm, selectedCategory, enableInfiniteScroll]);

  // Auto-top-up for short pages (ensure viewport is filled)
  useEffect(() => {
    if (!enableInfiniteScroll || showLoadMoreButton) return;

    // If content height is not enough to enable scrolling, load more automatically
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (!isLoadingRef.current && documentHeight <= windowHeight + 80) {
      const t = setTimeout(() => {
        handleLoadMore();
      }, 60);
      return () => clearTimeout(t);
    }
  }, [displayedCount, enableInfiniteScroll, showLoadMoreButton, handleLoadMore]);

  return { handleLoadMore };
};
