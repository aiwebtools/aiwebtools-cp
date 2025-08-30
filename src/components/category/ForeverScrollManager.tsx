import { useState, useCallback, useMemo } from 'react';
import { Tool } from '@/types/tools';

interface ForeverScrollManagerProps {
  tools: Tool[];
  initialDisplayCount?: number;
  increment?: number;
}

// Fisher-Yates shuffle algorithm for randomizing tools
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const useForeverScroll = ({ 
  tools, 
  initialDisplayCount = 24, 
  increment = 24 
}: ForeverScrollManagerProps) => {
  const [displayedCount, setDisplayedCount] = useState(initialDisplayCount);
  const [shuffledTools, setShuffledTools] = useState<Tool[]>([]);
  const [cycleCount, setCycleCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize shuffled tools
  const initializeShuffledTools = useCallback(() => {
    if (shuffledTools.length === 0 && tools.length > 0) {
      const shuffled = shuffleArray(tools);
      setShuffledTools(shuffled);
      console.log(`🎲 Initialized shuffled tools for forever scroll: ${shuffled.length} tools`);
    }
  }, [shuffledTools.length, tools.length]);

  // Load more tools with forever cycling
  const loadMore = useCallback(() => {
    if (isLoading || tools.length === 0) return;

    setIsLoading(true);
    
    // Initialize shuffled tools if not done yet
    if (shuffledTools.length === 0) {
      const shuffled = shuffleArray(tools);
      setShuffledTools(shuffled);
    }

    setTimeout(() => {
      setDisplayedCount(prev => {
        let newCount = prev + increment;
        
        // When we've shown all tools in the current cycle, start a new cycle
        if (newCount >= tools.length && prev < tools.length) {
          const newCycleCount = cycleCount + 1;
          setCycleCount(newCycleCount);
          
          // Reshuffle tools for the new cycle to show different order
          const newShuffled = shuffleArray(tools);
          setShuffledTools(newShuffled);
          
          console.log(`🔄 Starting forever scroll cycle ${newCycleCount + 1} with ${newShuffled.length} reshuffled tools`);
        }
        
        return newCount;
      });
      setIsLoading(false);
    }, 300);
  }, [isLoading, tools.length, shuffledTools.length, increment, cycleCount]);

  // Get the current tools to display (handles cycling through shuffled tools)
  const getCurrentDisplayedTools = useMemo(() => {
    if (tools.length === 0) return [];
    
    const effectiveTools = shuffledTools.length > 0 ? shuffledTools : tools;
    
    if (displayedCount <= effectiveTools.length) {
      return effectiveTools.slice(0, displayedCount);
    }
    
    // For forever scroll, cycle through tools
    const result = [];
    for (let i = 0; i < displayedCount; i++) {
      const toolIndex = i % effectiveTools.length;
      result.push(effectiveTools[toolIndex]);
    }
    return result;
  }, [tools, shuffledTools, displayedCount]);

  // Calculate cycle information
  const totalCycles = Math.floor(displayedCount / tools.length) + 1;
  const currentCyclePosition = displayedCount % tools.length;
  
  return {
    displayedTools: getCurrentDisplayedTools,
    displayedCount,
    totalCycles,
    currentCyclePosition,
    isLoading,
    loadMore,
    initializeShuffledTools,
    hasMore: true, // Forever scroll never ends
    cycleCount: totalCycles
  };
};

export default useForeverScroll;