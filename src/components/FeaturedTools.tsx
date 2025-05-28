
import { Button } from "@/components/ui/button";
import { useState } from "react";
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

  // Enhanced search with more keywords
  const enhancedSearchTools = (tools: any[], searchTerm: string) => {
    if (!searchTerm.trim()) return tools;
    
    const term = searchTerm.toLowerCase();
    return tools.filter((tool: any) => 
      tool.title.toLowerCase().includes(term) ||
      tool.description.toLowerCase().includes(term) ||
      tool.category?.toLowerCase().includes(term) ||
      tool.tags?.some((tag: string) => tag.toLowerCase().includes(term)) ||
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

  // Use enhanced search functionality
  const filteredTools = enhancedSearchTools(allTools, searchTerm);
  const filteredFeaturedTools = enhancedSearchTools(featuredTools, searchTerm);
  
  // Apply category filter if selected
  const displayTools = selectedCategory 
    ? getToolsByCategory(selectedCategory).filter(tool => 
        searchTerm ? enhancedSearchTools([tool], searchTerm).length > 0 : true
      )
    : filteredTools;

  const categoriesWithCounts = getCategoriesWithCounts();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSearchTerm("");
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchTerm("");
  };

  return (
    <section id="tools-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">AI Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of 600+ AI-powered tools designed to enhance your creative process, productivity, and innovation
          </p>
          
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          
          {/* Download Button */}
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/80 hover:to-ai-blue/80 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              DOWNLOAD YOUR FREE MASTER AI TOOLS LIST OF 1000+ AI TOOLS
            </Button>
          </div>
        </div>

        {/* Category Filter Accordion */}
        <div className="mb-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-lg">
            <AccordionItem value="categories" className="border-none">
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-900 hover:text-ai-purple">
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
                          ? "bg-ai-purple text-white" 
                          : "border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white"
                      }`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      <span className="text-sm font-medium">{category}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category 
                          ? "bg-white text-ai-purple" 
                          : "bg-ai-purple text-white"
                      }`}>
                        {count}
                      </span>
                    </Button>
                  ))}
                </div>
                {(selectedCategory || searchTerm) && (
                  <div className="mt-4 text-center">
                    <Button onClick={clearFilters} variant="outline" size="sm">
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
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md">
              <span className="text-gray-600">Showing:</span>
              {selectedCategory && (
                <span className="bg-ai-purple text-white px-3 py-1 rounded-full text-sm">
                  {selectedCategory}
                </span>
              )}
              {searchTerm && (
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  "{searchTerm}"
                </span>
              )}
              <span className="text-gray-600">({displayTools.length} tools)</span>
            </div>
          </div>
        )}
        
        {/* Featured Tools Grid - Only show if no filters applied */}
        {!selectedCategory && !searchTerm && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                🌟 <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">Most Popular Tools</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredTools.map((tool, index) => (
                <ToolCard key={index} tool={tool} isFeatured={true} />
              ))}
            </div>
          </>
        )}

        {/* All Tools Section */}
        {displayTools.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                {selectedCategory ? (
                  <>🎯 <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">{selectedCategory}</span></>
                ) : searchTerm ? (
                  <>🔍 <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">Search Results</span></>
                ) : (
                  <>🚀 <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">Complete AI Tools Collection</span></>
                )}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(selectedCategory || searchTerm ? displayTools : displayTools.slice(6)).map((tool, index) => (
                <ToolCard key={index} tool={tool} />
              ))}
            </div>
          </>
        )}

        {/* No Results Message */}
        {searchTerm && displayTools.length === 0 && (
          <NoResults searchTerm={searchTerm} onClearSearch={() => setSearchTerm("")} />
        )}
        
        {!searchTerm && !selectedCategory && (
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white px-8 py-4 rounded-xl transition-all duration-300"
            >
              View All {allTools.length}+ AI Tools
            </Button>
          </div>
        )}

        {/* Inspirational Message */}
        <div className="text-center mt-20 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Best of luck on your inspiring AI journey!
          </h3>
          <p className="text-gray-600 mb-4">We Thank You for Visiting AiTools.Studio</p>
          
          <div className="max-w-4xl mx-auto text-sm text-gray-500 leading-relaxed space-y-2">
            <p>The future is unwritten — it can be shaped by human choice and collective action.</p>
            <p>Knowledge and technology are not ends in themselves; they are tools meant to serve people, helping each of us fulfill our potential.</p>
            <p>Power should be decentralized, fairness upheld, and human dignity honored through creativity, uniqueness, and compassion.</p>
            <p>Let justice, integrity, and imagination guide us toward building a better world — not through control, but through cooperation.</p>
            <p>We offer these tools and ideas freely, without seeking profit, because access to opportunity should not depend on status or wealth.</p>
            <p>Together, we can create a world where knowledge is a right, not a privilege, and where progress benefits everyone.</p>
            <p>The accompanying art reflects this vision — a mirror of our shared humanity, a map guiding us forward through thoughtful choices.</p>
            <p>Let us move with courage and open minds — for the path ahead is ours to shape, together. 🕊️</p>
          </div>
          
          <p className="text-lg font-semibold text-ai-purple mt-6">
            "Choose your path. The future is yours to create." - KB
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
