
import FeaturedTools from "@/components/FeaturedTools";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ToolsGrid from "@/components/tools/ToolsGrid";
import { allTools } from "@/data/toolsData";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

interface FeaturedToolsSectionProps {
  onToolsLoaded?: (count: number) => void;
}

const FeaturedToolsSection = ({ onToolsLoaded }: FeaturedToolsSectionProps) => {
  const [showAllTools, setShowAllTools] = useState(false);
  const [allToolsDisplayedCount, setAllToolsDisplayedCount] = useState(24);
  const [isLoading, setIsLoading] = useState(false);

  const handleSeeMoreAITools = () => {
    console.log(`🚀 See More AI Tools clicked! Total tools available: ${allTools.length}`);
    setShowAllTools(true);
    setAllToolsDisplayedCount(24); // Start with 24 tools and let infinite scroll handle the rest
    // Scroll to the tools section
    setTimeout(() => {
      const toolsSection = document.getElementById('all-tools-section');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleAllToolsLoadMore = () => {
    if (isLoading || allToolsDisplayedCount >= allTools.length) return;
    
    console.log(`🚀 Loading more tools: ${allToolsDisplayedCount} -> ${Math.min(allToolsDisplayedCount + 24, allTools.length)} of ${allTools.length}`);
    
    setIsLoading(true);
    setTimeout(() => {
      setAllToolsDisplayedCount(prev => Math.min(prev + 24, allTools.length));
      setIsLoading(false);
    }, 300);
  };

  // Setup infinite scroll for all tools
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false,
    displayedCount: allToolsDisplayedCount,
    totalTools: allTools.length,
    onLoadMore: handleAllToolsLoadMore,
    searchTerm: ""
  });

  const hasMoreTools = allToolsDisplayedCount < allTools.length;
  const showCompletionMessage = !hasMoreTools && !isLoading && allTools.length > 20;

  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
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
        
        <FeaturedTools onToolsLoaded={onToolsLoaded} />

        {/* SEE MORE AI TOOLS Button - positioned above the three existing buttons */}
        {!showAllTools && (
          <div className="text-center mt-12 mb-8 px-4">
            <Button
              onClick={handleSeeMoreAITools}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              🚀 SEE MORE AI TOOLS
            </Button>
            <div className="mt-4 text-cyan-300 text-sm">
              Explore our complete collection of {allTools.length}+ amazing AI tools
            </div>
          </div>
        )}

        {/* All Tools Section with Infinite Scroll */}
        {showAllTools && (
          <div id="all-tools-section" className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 cyber-glow">
                🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">ALL AI TOOLS COLLECTION</span>
              </h3>
              <div className="text-cyan-400 font-semibold">
                {allTools.length} total tools available
              </div>
            </div>

            <ToolsGrid
              tools={allTools}
              displayedCount={allToolsDisplayedCount}
              selectedCategory={null}
              searchTerm=""
              onLoadMore={handleAllToolsLoadMore}
              hasInfiniteScroll={true}
              isLoading={isLoading}
            />

            {/* Enhanced completion message */}
            {showCompletionMessage && (
              <div className="text-center mt-12 mb-16 px-4 text-cyan-300">
                <div className="text-2xl mb-4">🎉</div>
                <div className="text-lg font-semibold mb-4">
                  You've explored all {allTools.length} tools in our database!
                </div>
                <div className="text-sm opacity-80 mb-8">
                  Try searching or filtering by category to discover specific tools.
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedToolsSection;
