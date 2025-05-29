
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface UseScrollMemoryProps {
  displayedCount: number;
  selectedCategory: string | null;
  searchTerm: string;
}

export const useScrollMemory = ({ displayedCount, selectedCategory, searchTerm }: UseScrollMemoryProps) => {
  const location = useLocation();

  // Save scroll position when navigating away
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem('aitools-scroll-position', window.pageYOffset.toString());
      sessionStorage.setItem('aitools-displayed-count', displayedCount.toString());
      sessionStorage.setItem('aitools-selected-category', selectedCategory || '');
      sessionStorage.setItem('aitools-search-term', searchTerm);
    };

    // Save position before page unload or navigation
    window.addEventListener('beforeunload', saveScrollPosition);
    
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
      saveScrollPosition(); // Save when component unmounts
    };
  }, [displayedCount, selectedCategory, searchTerm]);

  // Restore scroll position and state when coming back
  useEffect(() => {
    const restoreState = () => {
      const savedScrollPosition = sessionStorage.getItem('aitools-scroll-position');
      const savedDisplayedCount = sessionStorage.getItem('aitools-displayed-count');
      const savedCategory = sessionStorage.getItem('aitools-selected-category');
      const savedSearchTerm = sessionStorage.getItem('aitools-search-term');

      // Restore scroll position after a short delay to ensure content is rendered
      if (savedScrollPosition) {
        const scrollPosition = parseInt(savedScrollPosition, 10);
        setTimeout(() => {
          window.scrollTo(0, scrollPosition);
        }, 100);
      }
    };

    // Only restore state when navigating back (not on initial load)
    if (location.key !== 'default') {
      restoreState();
    }
  }, [location.key]);
};
