
import FeaturedTools from "@/components/FeaturedTools";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import ToolsGrid from "@/components/tools/ToolsGrid";
import { allTools } from "@/data/toolsData";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

interface FeaturedToolsSectionProps {
  onToolsLoaded?: (count: number) => void;
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

const FeaturedToolsSection = ({ onToolsLoaded }: FeaturedToolsSectionProps) => {
  const [showAllTools, setShowAllTools] = useState(false);
  const [allToolsDisplayedCount, setAllToolsDisplayedCount] = useState(24);
  const [isLoading, setIsLoading] = useState(false);
  const [shuffledTools, setShuffledTools] = useState<typeof allTools>([]);
  const [cycleCount, setCycleCount] = useState(0);

  // Initialize shuffled tools when component mounts
  const initializeShuffledTools = useCallback(() => {
    if (shuffledTools.length === 0) {
      const shuffled = shuffleArray(allTools);
      setShuffledTools(shuffled);
      console.log(`🎲 Initialized shuffled tools: ${shuffled.length} total tools available for forever scroll`);
    }
  }, [shuffledTools.length]);

  // Auto-show all tools after featured tools are expanded
  const handleAutoExpansion = () => {
    setShowAllTools(true);
    setAllToolsDisplayedCount(24);
    initializeShuffledTools();
  };

  const handleAllToolsLoadMore = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setAllToolsDisplayedCount(prev => {
        const increment = 24;
        let newCount = prev + increment;
        
        // When we've shown all tools in the current cycle, start a new cycle
        if (newCount >= allTools.length) {
          const newCycleCount = cycleCount + 1;
          setCycleCount(newCycleCount);
          
          // Reshuffle tools for the new cycle to show different order
          const newShuffled = shuffleArray(allTools);
          setShuffledTools(newShuffled);
          
          // Continue from where we left off in the new cycle
          newCount = (newCount - allTools.length) + increment;
          
          console.log(`🔄 Starting cycle ${newCycleCount + 1} with ${newShuffled.length} reshuffled tools, showing ${newCount} tools`);
        }
        
        console.log(`🚀 Forever scroll: Cycle ${cycleCount + 1}, showing ${Math.min(newCount, allTools.length)} of ${allTools.length} tools (total displayed: ${newCount})`);
        return newCount;
      });
      setIsLoading(false);
    }, 300);
  };

  // Setup infinite scroll for all tools with forever scroll support
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false,
    displayedCount: allToolsDisplayedCount,
    totalTools: Number.MAX_SAFE_INTEGER, // Enable forever scroll
    onLoadMore: handleAllToolsLoadMore,
    searchTerm: "",
    tools: allTools
  });

  // Get the current tools to display (handles cycling through shuffled tools)
  const getCurrentDisplayedTools = () => {
    if (shuffledTools.length === 0) return allTools.slice(0, allToolsDisplayedCount);
    
    const result = [];
    for (let i = 0; i < allToolsDisplayedCount; i++) {
      const toolIndex = i % shuffledTools.length;
      result.push(shuffledTools[toolIndex]);
    }
    return result;
  };

  const currentDisplayedTools = getCurrentDisplayedTools();
  const currentCyclePosition = allToolsDisplayedCount % allTools.length;
  const totalCycles = Math.floor(allToolsDisplayedCount / allTools.length) + 1;

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 cyber-glow">
            🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">OUR FEATURED AI WEB TOOLS GPTs</span>
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto mb-4">
            Professional-grade & reality bending AI solutions created by AIWebTools.ai for outside the box capabilites.
          </p>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 rounded-full text-green-300 font-bold">
            ✨ Complete AI Web Tools GPT Collection - 100% Free Access ✨
          </div>
          <div className="mt-4 text-cyan-300 text-lg font-semibold">
            🎯 Featured Priority Tools + Complete GPT Suite Available Now!
          </div>
        </div>
        
        <FeaturedTools 
          onToolsLoaded={(count) => {
            onToolsLoaded?.(count);
            // Auto-expand to all tools when featured tools are fully expanded
            if (count > 50) { // Arbitrary threshold when featured tools are fully shown
              setTimeout(() => handleAutoExpansion(), 1000);
            }
          }} 
        />

        {/* All Tools Section with Forever Scroll */}
        {showAllTools && (
          <div id="all-tools-section" className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 cyber-glow">
                🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">ALL AI TOOLS COLLECTION - FOREVER SCROLL</span>
              </h3>
              <div className="text-cyan-400 font-semibold space-y-2">
                <div>{allTools.length} unique tools • Cycle {totalCycles} • Never-ending discovery</div>
                <div className="text-sm text-cyan-300 opacity-80">
                  🔄 Tools reshuffle each cycle • Position: {currentCyclePosition}/{allTools.length} • Total viewed: {allToolsDisplayedCount}
                </div>
              </div>
            </div>

            <ToolsGrid
              tools={currentDisplayedTools}
              displayedCount={currentDisplayedTools.length}
              selectedCategory={null}
              searchTerm=""
              onLoadMore={handleAllToolsLoadMore}
              hasInfiniteScroll={true}
              isLoading={isLoading}
            />

            {/* Forever scroll status */}
            <div className="text-center mt-8 px-4 text-cyan-300">
              <div className="text-sm opacity-80 mb-4">
                🌟 Forever Scroll Active - Keep scrolling to discover more AI tools!
              </div>
              <div className="text-xs opacity-60">
                Each cycle reshuffles tools for new discoveries • Total unique tools: {allTools.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedToolsSection;
