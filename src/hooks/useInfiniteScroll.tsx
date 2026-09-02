
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
