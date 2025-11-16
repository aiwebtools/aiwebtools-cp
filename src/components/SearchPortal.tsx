import React from "react";
import { useFeaturedToolsState } from "@/hooks/useFeaturedToolsState";
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";
import { useMobile } from "@/hooks/useMobile";
import CategoryFilters from "@/components/tools/CategoryFilters";
import ToolsGrid from "@/components/tools/ToolsGrid";
import { useMemo } from "react";
import dualityLight from "@/assets/balance-of-duality-light.png";
import dualityDark from "@/assets/balance-of-duality-dark.png";
import dualityMatrix from "@/assets/balance-of-duality-matrix.png";
import dualityPath from "@/assets/balance-of-duality-path.png";
import { LovableAIFeature } from "./LovableAIFeature";

const SearchPortal = () => {
  const {
    selectedCategory,
    searchTerm,
    displayedCount,
    isLoading,
    setDisplayedCount,
    setIsLoading,
    handleCategoryChange,
    handleSearchChange,
    filteredTools,
    totalToolsCount,
    categoriesWithCounts,
    hasMoreTools
  } = useFeaturedToolsState();

  const { isMobile } = useMobile();
  const { createThrottledScrollHandler } = usePerformanceOptimization();

  // Optimized load more with performance considerations
  const handleLoadMore = useMemo(() => 
    createThrottledScrollHandler(() => {
      if (isLoading || !hasMoreTools) return;
      
      setIsLoading(true);
      
      // Reduce batch size on mobile for smoother performance
      const batchSize = isMobile ? 30 : 60;
      
      // Use shorter delay on mobile to feel more responsive
      const delay = isMobile ? 50 : 100;
      
      setTimeout(() => {
        setDisplayedCount(prev => prev + batchSize);
        setIsLoading(false);
      }, delay);
    }), 
    [createThrottledScrollHandler, isLoading, hasMoreTools, isMobile, setIsLoading, setDisplayedCount]
  );

  const displayedTools = useMemo(() => 
    filteredTools.slice(0, displayedCount),
    [filteredTools, displayedCount]
  );

  // Convert categoriesWithCounts to the format expected by CategoryFilters
  const categoriesRecord = categoriesWithCounts.reduce((acc, cat) => {
    acc[cat.name] = cat.count;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-transparent relative">
      {/* Category Filters with Search */}
      <CategoryFilters
        categoriesWithCounts={categoriesRecord}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        searchTerm={searchTerm}
      />

      {/* Tools Count Display */}
      <div className="text-center mb-8">
        <div className="text-cyan-400 font-semibold text-lg">
          {searchTerm ? (
            `${totalToolsCount} AI tools found for "${searchTerm}"`
          ) : selectedCategory ? (
            `${totalToolsCount} tools in ${selectedCategory}`
          ) : (
            `Discover ${totalToolsCount}+ curated AI tools`
          )}
        </div>
        {!searchTerm && !selectedCategory && (
          <div className="text-gray-400 text-sm mt-1">
            Featuring the best AI tools, ChatGPT alternatives, and cutting-edge artificial intelligence solutions
          </div>
        )}
      </div>

      {/* Tools Grid */}
      <div id="tools-section">
        {displayedTools.length > 0 ? (
          <ToolsGrid
            tools={filteredTools}
            displayedCount={displayedCount}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            onLoadMore={handleLoadMore}
            hasInfiniteScroll={true}
            isLoading={isLoading}
          />
        ) : (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-cyan-100 mb-4">No AI tools found</h3>
            <p className="text-gray-300 mb-8">
              {searchTerm 
                ? `No AI tools found for "${searchTerm}". Try a different search term.`
                : selectedCategory
                ? `No tools found in the ${selectedCategory} category.`
                : "No tools available at the moment."
              }
            </p>
          </div>
        )}
      </div>

      {/* SEO Content Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Why AI WEB TOOLS is the #1 AI Directory
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">🏆 Better Than Competitors</h3>
              <p>More comprehensive than Toolify, Futurepedia, or any other AI directory. We provide verified tools with detailed expert analysis.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">✅ Expert Curation</h3>
              <p>Every AI tool is manually reviewed, tested, and rated by our expert team. No automated listings or spam.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">🔄 Always Updated</h3>
              <p>Daily updates with the latest AI innovations. Be first to discover breakthrough artificial intelligence tools.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">👥 Trusted Community</h3>
              <p>Used by 100K+ professionals, developers, creators, and businesses worldwide for AI tool discovery.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Duality Images Section - directly under "Why AI WEB TOOLS..." */}
      <div className="mt-8 max-w-4xl mx-auto">
        <LovableAIFeature />
      </div>

      <section aria-labelledby="duality-title" className="mt-8 max-w-6xl mx-auto">
        <h3 id="duality-title" className="sr-only">The Balance of Duality</h3>
        <figure className="bg-gray-900/40 rounded-xl p-4 md:p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <img
              src={dualityLight}
              alt="The Balance of Duality - Matrix of Light diagram showing inner cosmos and two paths"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src={dualityDark}
              alt="The Balance of Duality - Middle path artwork with light vs dark symbolism"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src={dualityMatrix}
              alt="The Balance of Duality - Your Inner Cosmos flowchart and binary code background"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src={dualityPath}
              alt="The Path of Duality - consequence and light vs dark choice diagram"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <figcaption className="text-center mt-6 text-sm md:text-base text-gray-300">
            In the matrix of light, our souls are tested by two paths — light or fire. "God" is both the light and the divine code that shapes our multidimensional reality.
            <span className="block mt-1 text-cyan-300 font-medium">— <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-black text-xl tracking-widest animate-pulse drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]">KGB</span>, Maker of this AI Web Tools page</span>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default SearchPortal;