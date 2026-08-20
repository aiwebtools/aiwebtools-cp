
import { useEffect, useCallback, useRef } from "react";

interface UseInfiniteScrollProps {
  isLoading: boolean;
  showLoadMoreButton: boolean;
  displayedCount: number;
  totalTools: number;
  onLoadMore: () => void;
  searchTerm?: string;
  selectedCategory?: string | null;
  enableInfiniteScroll?: boolean;
}

export const useInfiniteScroll = ({ 
  isLoading, 
  showLoadMoreButton, 
  displayedCount, 
  totalTools, 
  onLoadMore,
  searchTerm = "",
  selectedCategory = null,
  enableInfiniteScroll = true
}: UseInfiniteScrollProps) => {
  // Use refs to prevent unnecessary re-renders and maintain performance
  const isLoadingRef = useRef(isLoading);
  const displayedCountRef = useRef(displayedCount);
  const totalToolsRef = useRef(totalTools);
  const lastScrollY = useRef(0);
  const lastLoadAt = useRef(0);
  
  // Update refs for current values
  isLoadingRef.current = isLoading;
  displayedCountRef.current = displayedCount;
  totalToolsRef.current = totalTools;

  const handleLoadMore = useCallback(() => {
    // For endless scroll (categories), don't check against totalTools since it can be infinite
    const isEndlessScroll = selectedCategory && !searchTerm && totalTools === Number.MAX_SAFE_INTEGER;
    
    if (isLoadingRef.current) return;
    if (!isEndlessScroll && displayedCountRef.current >= totalToolsRef.current) return;

    // Shared cooldown so the scroll listener and the IntersectionObserver
    // sentinel can never double-fire for the same batch.
    const now = Date.now();
    if (now - lastLoadAt.current < 300) return;
    lastLoadAt.current = now;

    if (import.meta.env.DEV) {
      console.log(`🔄 Infinite scroll triggered (search: "${searchTerm}", category: "${selectedCategory}")`);
    }
    onLoadMore();
  }, [onLoadMore, searchTerm, selectedCategory, totalTools]);

  // IntersectionObserver in ToolsGrid is the primary trigger. This passive
  // scroll fallback covers browsers/webviews with unreliable observers.
  useEffect(() => {
    // Don't enable infinite scroll if explicitly disabled or if load more button is preferred
    if (!enableInfiniteScroll || showLoadMoreButton) return;
    
    const hasMoreToLoad = displayedCount < totalTools;
    
    // For search results, only enable if there are more tools to load
    if (!hasMoreToLoad) return;
    
    let ticking = false;
    
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
          
          // INCREASED thresholds - trigger loading MUCH earlier before user reaches bottom
          let threshold = 1500; // Default for main page - start loading 1500px before bottom
          if (searchTerm) {
            threshold = 1200; // Aggressive for search results
          } else if (selectedCategory) {
            threshold = 1800; // Very aggressive for categories - load well ahead
          }
          
          const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
          
          if (nearBottom && !isLoadingRef.current) {
            const hasMoreToShow = displayedCountRef.current < totalToolsRef.current;
            const shouldLoad = hasMoreToShow;
            
            if (shouldLoad) {
              // NO DELAY - load immediately for instant feel
              handleLoadMore();
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also trigger on initial mount in case we need more content
    const initialCheckId = window.setTimeout(() => handleScroll(), 50);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(initialCheckId);
    };
  }, [displayedCount, handleLoadMore, isLoading, showLoadMoreButton, totalTools, searchTerm, selectedCategory, enableInfiniteScroll]);

  // Auto-top-up for short pages (ensure viewport is filled on category pages)
  useEffect(() => {
    if (!enableInfiniteScroll || showLoadMoreButton) return;

    if (displayedCount >= totalTools) return;

    // If content height is not enough to enable scrolling, load more automatically
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (!isLoadingRef.current && documentHeight <= windowHeight + 80) {
      const t = setTimeout(() => {
        handleLoadMore();
      }, 60);
      return () => clearTimeout(t);
    }
  }, [displayedCount, enableInfiniteScroll, showLoadMoreButton, selectedCategory, searchTerm, handleLoadMore]);

  return { handleLoadMore };
};
