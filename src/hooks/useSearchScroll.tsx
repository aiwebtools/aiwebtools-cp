
import { useCallback } from 'react';
import { searchTools } from '@/utils/searchUtils';
import { allTools } from '@/data/toolsData';

export const useSearchScroll = () => {
  const scrollToSearchResults = useCallback((searchTerm: string) => {
    if (!searchTerm.trim()) return;

    console.log('🔍 Searching and scrolling to results for:', searchTerm);
    
    // Find matching tools
    const matchingTools = searchTools(allTools, searchTerm);
    
    if (matchingTools.length === 0) {
      console.log('❌ No matching tools found');
      return;
    }

    // First, scroll to the tools section
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Add a slight delay to allow the scroll to complete
      setTimeout(() => {
        // Try to find the first matching tool card and highlight it
        const firstMatchingTool = matchingTools[0];
        const toolCards = document.querySelectorAll('[data-tool-title]');
        
        // Remove any existing highlights
        toolCards.forEach(card => {
          card.classList.remove('search-highlight');
        });
        
        // Find and highlight matching tool cards
        let highlightedCount = 0;
        toolCards.forEach(card => {
          const toolTitle = card.getAttribute('data-tool-title');
          if (toolTitle && matchingTools.some(tool => tool.title === toolTitle)) {
            card.classList.add('search-highlight');
            highlightedCount++;
          }
        });
        
        console.log(`✅ Highlighted ${highlightedCount} matching tools`);
        
        // Remove highlights after 3 seconds
        setTimeout(() => {
          toolCards.forEach(card => {
            card.classList.remove('search-highlight');
          });
        }, 3000);
      }, 500);
    }
  }, []);

  return { scrollToSearchResults };
};
