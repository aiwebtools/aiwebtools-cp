
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { featuredTools, allTools } from "@/data/toolsData";
import { getCategoriesWithCounts, getToolsByCategory, searchTools } from "@/utils/categoryUtils";
import SearchBar from "@/components/tools/SearchBar";
import NoResults from "@/components/tools/NoResults";
import CategoryFilters from "@/components/tools/CategoryFilters";
import ActiveFilters from "@/components/tools/ActiveFilters";
import ToolsGrid from "@/components/tools/ToolsGrid";
import FeaturedToolsSection from "@/components/tools/FeaturedToolsSection";
import InspirationMessage from "@/components/tools/InspirationMessage";

const FeaturedTools = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayedToolsCount, setDisplayedToolsCount] = useState(20);
  const TOOLS_PER_LOAD = 20;

  // Listen for category selection events from header
  useEffect(() => {
    const handleCategorySelect = (event: CustomEvent) => {
      setSelectedCategory(event.detail);
      setSearchTerm("");
      setDisplayedToolsCount(20);
      
      setTimeout(() => {
        const toolsDisplayArea = document.getElementById('tools-display-area');
        if (toolsDisplayArea) {
          toolsDisplayArea.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    };

    window.addEventListener('selectCategory', handleCategorySelect as EventListener);
    
    return () => {
      window.removeEventListener('selectCategory', handleCategorySelect as EventListener);
    };
  }, []);

  // Get filtered tools based on search and category
  const getFilteredTools = () => {
    let tools = allTools;
    
    if (selectedCategory) {
      tools = getToolsByCategory(allTools, selectedCategory);
    }
    
    if (searchTerm) {
      tools = searchTools(tools, searchTerm);
    }
    
    return tools;
  };

  const filteredTools = getFilteredTools();
  const categoriesWithCounts = getCategoriesWithCounts(allTools);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSearchTerm("");
    setDisplayedToolsCount(20);
    
    setTimeout(() => {
      const toolsDisplayArea = document.getElementById('tools-display-area');
      if (toolsDisplayArea) {
        toolsDisplayArea.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchTerm("");
    setDisplayedToolsCount(20);
  };

  // Infinite scroll handler
  const loadMoreTools = useCallback(() => {
    if (displayedToolsCount < filteredTools.length) {
      setDisplayedToolsCount(prev => Math.min(prev + TOOLS_PER_LOAD, filteredTools.length));
    }
  }, [displayedToolsCount, filteredTools.length]);

  // Scroll event listener for infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000
      ) {
        loadMoreTools();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreTools]);

  // Reset displayed count when search or category changes
  useEffect(() => {
    setDisplayedToolsCount(20);
  }, [searchTerm, selectedCategory]);

  const handleDownloadClick = () => {
    window.open('https://docs.google.com/document/d/1qtDKo3XN_EsspgrQD72Cpq2qh83H5xSd/edit?usp=drivesdk&ouid=116187507271950139405&rtpof=true&sd=true', '_blank');
  };

  return (
    <section id="tools-section" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 pt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4 cyber-glow">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">AI Tools</span>
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of 600+ AI-powered tools designed to enhance your creative process, productivity, and innovation
          </p>
          
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          
          <div className="mt-8">
            <Button 
              onClick={handleDownloadClick}
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 text-black px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 interactive-button font-bold"
            >
              DOWNLOAD YOUR FREE MASTER AI TOOLS LIST OF 1000+ AI TOOLS
            </Button>
          </div>
        </div>

        <CategoryFilters
          categoriesWithCounts={categoriesWithCounts}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          onClearFilters={clearFilters}
          searchTerm={searchTerm}
        />

        <ActiveFilters
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          totalTools={filteredTools.length}
        />
        
        {/* Featured Tools Section - Only show if no filters applied */}
        {!selectedCategory && !searchTerm && (
          <FeaturedToolsSection featuredTools={featuredTools} />
        )}

        {/* Tools Display Area */}
        <div id="tools-display-area">
          <ToolsGrid
            tools={filteredTools}
            displayedCount={displayedToolsCount}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            onLoadMore={loadMoreTools}
          />

          {/* No Results Message */}
          {searchTerm && filteredTools.length === 0 && (
            <NoResults searchTerm={searchTerm} onClearSearch={() => setSearchTerm("")} />
          )}
        </div>

        <InspirationMessage />
      </div>
    </section>
  );
};

export default FeaturedTools;
