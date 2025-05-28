
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { featuredTools, allTools, searchTools, getCategoriesWithCounts, getToolsByCategory } from "@/data/toolsData";
import SearchBar from "@/components/tools/SearchBar";
import ToolCard from "@/components/tools/ToolCard";
import NoResults from "@/components/tools/NoResults";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FeaturedTools = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayedToolsCount, setDisplayedToolsCount] = useState(20); // Start with 20 tools
  const TOOLS_PER_LOAD = 20;

  // Listen for category selection events from header
  useEffect(() => {
    const handleCategorySelect = (event: CustomEvent) => {
      setSelectedCategory(event.detail);
      setSearchTerm("");
      setDisplayedToolsCount(20); // Reset count when category changes
    };

    window.addEventListener('selectCategory', handleCategorySelect as EventListener);
    
    return () => {
      window.removeEventListener('selectCategory', handleCategorySelect as EventListener);
    };
  }, []);

  // Enhanced search with more keywords including "suite"
  const enhancedSearchTools = (tools: any[], searchTerm: string) => {
    if (!searchTerm.trim()) return tools;
    
    const term = searchTerm.toLowerCase();
    return tools.filter((tool: any) => 
      tool.title.toLowerCase().includes(term) ||
      tool.description.toLowerCase().includes(term) ||
      tool.category?.toLowerCase().includes(term) ||
      tool.tags?.some((tag: string) => tag.toLowerCase().includes(term)) ||
      // Suite search functionality - enhanced
      (term.includes('suite') && (
        tool.title.toLowerCase().includes('suite') || 
        tool.description.toLowerCase().includes('suite') ||
        tool.title.toLowerCase().includes('studio') ||
        tool.title.toLowerCase().includes('master') ||
        tool.title.toLowerCase().includes('pro')
      )) ||
      // Additional search keywords
      (term.includes('video') && (tool.title.toLowerCase().includes('video') || tool.description.toLowerCase().includes('video') || tool.category === 'Video Tools')) ||
      (term.includes('music') && (tool.title.toLowerCase().includes('music') || tool.description.toLowerCase().includes('music') || tool.category === 'Audio & Music')) ||
      (term.includes('ai') && tool.title.toLowerCase().includes('ai')) ||
      (term.includes('gpt') && tool.title.toLowerCase().includes('gpt')) ||
      (term.includes('image') && (tool.title.toLowerCase().includes('image') || tool.description.toLowerCase().includes('image'))) ||
      (term.includes('business') && (tool.title.toLowerCase().includes('business') || tool.category === 'Business Tools')) ||
      (term.includes('art') && (tool.title.toLowerCase().includes('art') || tool.category === 'AI Art')) ||
      (term.includes('chat') && tool.title.toLowerCase().includes('chat')) ||
      (term.includes('legal') && (tool.title.toLowerCase().includes('legal') || tool.category === 'Legal'))
    );
  };

  // Get filtered tools based on search and category
  const getFilteredTools = () => {
    let tools = allTools;
    
    if (selectedCategory) {
      tools = getToolsByCategory(selectedCategory);
    }
    
    if (searchTerm) {
      tools = enhancedSearchTools(tools, searchTerm);
    }
    
    return tools;
  };

  const filteredTools = getFilteredTools();
  const displayTools = filteredTools.slice(0, displayedToolsCount);

  const categoriesWithCounts = getCategoriesWithCounts();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSearchTerm("");
    setDisplayedToolsCount(20); // Reset count when category changes
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchTerm("");
    setDisplayedToolsCount(20); // Reset count when clearing filters
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
        >= document.documentElement.offsetHeight - 1000 // Load more when 1000px from bottom
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
          
          {/* Download Button */}
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 text-black px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 interactive-button font-bold"
            >
              DOWNLOAD YOUR FREE MASTER AI TOOLS LIST OF 1000+ AI TOOLS
            </Button>
          </div>
        </div>

        {/* Category Filter Accordion */}
        <div className="mb-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full bg-black/80 rounded-xl shadow-lg border border-cyan-500/30 neon-border">
            <AccordionItem value="categories" className="border-none">
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-cyan-100 hover:text-cyan-400">
                Browse Tools by Category ({Object.keys(categoriesWithCounts).length} Categories)
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Object.entries(categoriesWithCounts).map(([category, count]) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={`justify-between h-auto p-3 text-left ${
                        selectedCategory === category 
                          ? "bg-cyan-600 text-black border-cyan-400" 
                          : "border-cyan-500 text-cyan-100 hover:bg-cyan-600 hover:text-black bg-black/50"
                      }`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      <span className="text-sm font-medium">{category}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category 
                          ? "bg-black text-cyan-400" 
                          : "bg-cyan-600 text-black"
                      }`}>
                        {count}
                      </span>
                    </Button>
                  ))}
                </div>
                {(selectedCategory || searchTerm) && (
                  <div className="mt-4 text-center">
                    <Button onClick={clearFilters} variant="outline" size="sm" className="border-cyan-500 text-cyan-100 hover:bg-cyan-600 hover:text-black">
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Active Filters Display */}
        {(selectedCategory || searchTerm) && (
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-black/80 border border-cyan-500/30 px-4 py-2 rounded-lg shadow-md">
              <span className="text-cyan-200">Showing:</span>
              {selectedCategory && (
                <span className="bg-cyan-600 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {selectedCategory}
                </span>
              )}
              {searchTerm && (
                <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  "{searchTerm}"
                </span>
              )}
              <span className="text-cyan-200">({filteredTools.length} tools)</span>
            </div>
          </div>
        )}
        
        {/* Featured Tools Section - Only show if no filters applied */}
        {!selectedCategory && !searchTerm && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-cyan-100 mb-8 cyber-glow">
                🌟 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Most Popular Tools</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredTools.map((tool, index) => (
                <ToolCard key={index} tool={tool} isFeatured={true} />
              ))}
            </div>
          </>
        )}

        {/* All Tools Section with Infinite Scroll */}
        {displayTools.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-cyan-100 mb-8 cyber-glow">
                {selectedCategory ? (
                  <>🎯 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">{selectedCategory}</span></>
                ) : searchTerm ? (
                  <>🔍 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Search Results</span></>
                ) : (
                  <>🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Complete AI Tools Collection</span></>
                )}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayTools.map((tool, index) => (
                <ToolCard key={`${tool.title}-${index}`} tool={tool} />
              ))}
            </div>

            {/* Loading indicator and load more button */}
            {displayedToolsCount < filteredTools.length && (
              <div className="text-center mt-12">
                <div className="mb-4 text-cyan-200">
                  Showing {displayedToolsCount} of {filteredTools.length} tools
                </div>
                <Button 
                  onClick={loadMoreTools}
                  size="lg" 
                  variant="outline" 
                  className="border-cyan-500 text-cyan-100 hover:bg-cyan-600 hover:text-black px-8 py-4 rounded-xl transition-all duration-300 bg-black/50"
                >
                  Load More Tools
                </Button>
              </div>
            )}

            {/* End of results indicator */}
            {displayedToolsCount >= filteredTools.length && filteredTools.length > 20 && (
              <div className="text-center mt-12 text-cyan-300">
                🎉 You've seen all {filteredTools.length} tools! 
                {!selectedCategory && !searchTerm && (
                  <span className="block mt-2">Try searching or filtering by category to discover specific tools.</span>
                )}
              </div>
            )}
          </>
        )}

        {/* No Results Message */}
        {searchTerm && filteredTools.length === 0 && (
          <NoResults searchTerm={searchTerm} onClearSearch={() => setSearchTerm("")} />
        )}

        {/* Inspirational Message */}
        <div className="text-center mt-20 p-8 bg-black/80 border border-cyan-500/30 rounded-2xl shadow-lg neon-border">
          <h3 className="text-2xl font-bold text-cyan-100 mb-4 cyber-glow">
            Best of luck on your inspiring AI journey!
          </h3>
          <p className="text-cyan-200 mb-4">We Thank You for Visiting AiTools.Studio</p>
          
          <div className="max-w-4xl mx-auto text-sm text-cyan-300 leading-relaxed space-y-2">
            <p>The future is unwritten — it can be shaped by human choice and collective action.</p>
            <p>Knowledge and technology are not ends in themselves; they are tools meant to serve people, helping each of us fulfill our potential.</p>
            <p>Power should be decentralized, fairness upheld, and human dignity honored through creativity, uniqueness, and compassion.</p>
            <p>Let justice, integrity, and imagination guide us toward building a better world — not through control, but through cooperation.</p>
            <p>We offer these tools and ideas freely, without seeking profit, because access to opportunity should not depend on status or wealth.</p>
            <p>Together, we can create a world where knowledge is a right, not a privilege, and where progress benefits everyone.</p>
            <p>The accompanying art reflects this vision — a mirror of our shared humanity, a map guiding us forward through thoughtful choices.</p>
            <p>Let us move with courage and open minds — for the path ahead is ours to shape, together. 🕊️</p>
          </div>
          
          <p className="text-lg font-semibold text-cyan-400 mt-6">
            "Choose your path. The future is yours to create." - KB
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
