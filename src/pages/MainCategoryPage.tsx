
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import ToolsGrid from "@/components/tools/ToolsGrid";
import MainCategoryFilter from "@/components/category/MainCategoryFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowDown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { allTools } from "@/data/toolsData";
import { getToolsByMainCategory } from "@/utils/categoryUtils";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { searchTools } from "@/utils/searchUtils";
import { Tool } from "@/types/tools";
import { getContextAwareSimilarTools } from "@/utils/contextAwareSimilarTools";
import { getCurrentToolCount } from "@/utils/toolCounter";

const MainCategoryPage = () => {
  const { mainCategoryName } = useParams<{ mainCategoryName: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedCount, setDisplayedCount] = useState(48);
  const [filteredToolsByCategory, setFilteredToolsByCategory] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const decodedCategoryName = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  
  const mainCategory = mainCategories.find(cat => cat.name === decodedCategoryName);
  const toolStats = getCurrentToolCount();
  
  // Immediate scroll to top without delays
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [decodedCategoryName]);
  
  if (!mainCategory) {
    useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  // Get tools for this specific main category
  const categoryTools = getToolsByMainCategory(allTools, decodedCategoryName);
  
  console.log(`📊 MainCategoryPage "${decodedCategoryName}":`, {
    originalCachedTools: categoryTools.length,
    categoryFilteredTools: filteredToolsByCategory.length,
    searchTerm: searchTerm || 'none',
    displayedCount,
    totalToolsInDatabase: allTools.length
  });
  
  // Initialize filtered tools by category on first load
  useEffect(() => {
    if (filteredToolsByCategory.length === 0 && categoryTools.length > 0) {
      setFilteredToolsByCategory(categoryTools);
    }
  }, [categoryTools, filteredToolsByCategory.length]);

  // Use filtered tools from category filter, fallback to original category tools
  const toolsToShow = filteredToolsByCategory.length > 0 ? filteredToolsByCategory : categoryTools;
  
  // Apply search filter if there's a search term
  const baseFilteredTools = searchTerm.trim() 
    ? searchTools(toolsToShow, searchTerm)
    : toolsToShow;

  // ENHANCED ENDLESS FLOW: Create infinite list with smart similar tools and category progression
  const createEndlessToolsList = () => {
    if (searchTerm.trim()) {
      // For search, return search results only
      return baseFilteredTools;
    }
    
    // Start with category-specific tools
    let endlessTools = [...baseFilteredTools];
    const remainingCount = displayedCount - baseFilteredTools.length;
    
    if (remainingCount > 0) {
      // Get similar tools first using context-aware matching
      const similarTools = getContextAwareSimilarTools(
        baseFilteredTools, 
        "", 
        decodedCategoryName, 
        Math.min(remainingCount, 100)
      );
      
      // Add similar tools
      const availableSimilar = similarTools.filter(tool => 
        !endlessTools.some(existing => existing.title === tool.title)
      );
      endlessTools = [...endlessTools, ...availableSimilar];
      
      // If we still need more tools, get from other categories
      const stillNeeded = displayedCount - endlessTools.length;
      if (stillNeeded > 0) {
        const otherTools = allTools.filter(tool => 
          !endlessTools.some(existing => existing.title === tool.title)
        );
        
        // Cycle through all remaining tools to ensure endless flow
        const cycles = Math.ceil(stillNeeded / otherTools.length) || 1;
        for (let i = 0; i < cycles && endlessTools.length < displayedCount; i++) {
          const toolsToAdd = otherTools.slice(0, stillNeeded - (endlessTools.length - baseFilteredTools.length - availableSimilar.length));
          endlessTools = [...endlessTools, ...toolsToAdd];
        }
      }
    }
    
    return endlessTools;
  };

  const finalFilteredTools = createEndlessToolsList();
  const displayedTools = finalFilteredTools.slice(0, displayedCount);

  // Reset displayed count when the base filtered tools change
  const [lastFilteredToolsLength, setLastFilteredToolsLength] = useState(0);
  useEffect(() => {
    if (baseFilteredTools.length !== lastFilteredToolsLength) {
      setDisplayedCount(48);
      setLastFilteredToolsLength(baseFilteredTools.length);
    }
  }, [baseFilteredTools.length, lastFilteredToolsLength]);

  const handleLoadMore = () => {
    if (isLoading) return;
    
    console.log(`🚀 Auto-loading more tools in ${decodedCategoryName}... Current: ${displayedCount}`);
    setIsLoading(true);
    
    setTimeout(() => {
      setDisplayedCount(prev => {
        const newCount = prev + 48;
        console.log(`✅ Updated displayedCount from ${prev} to ${newCount}`);
        return newCount;
      });
      setIsLoading(false);
    }, 200);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const scrollToResults = () => {
    // Scroll down to show results below the search bar
    const searchElement = document.querySelector('[data-search-results]');
    if (searchElement) {
      searchElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      // Fallback: scroll down by a reasonable amount
      window.scrollBy({ 
        top: 400, 
        behavior: 'smooth' 
      });
    }
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      setTimeout(scrollToResults, 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSearchTerm("");
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      handleSearchSubmit();
    }
  };

  const handleFilteredToolsChange = (filtered: Tool[]) => {
    console.log(`🎯 Category filter changed: ${filtered.length} tools (priority ordered)`);
    setFilteredToolsByCategory(filtered);
  };

  console.log(`🔍 Final tool display logic:`, {
    baseFilteredToolsLength: baseFilteredTools.length,
    finalFilteredToolsLength: finalFilteredTools.length,
    displayedToolsLength: displayedTools.length,
    displayedCount,
    isLoading,
    searchActive: !!searchTerm.trim()
  });

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <SEOHead
        title={`${decodedCategoryName} - AI Tools Directory`}
        description={`Discover the best ${decodedCategoryName.toLowerCase()} for your needs. ${mainCategory.description}`}
        keywords={[decodedCategoryName.toLowerCase(), "ai tools", "artificial intelligence"]}
      />
      
      <AnimatedBackground />
      
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Category Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{mainCategory.emoji}</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
              {decodedCategoryName}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              {mainCategory.description}
            </p>
          </div>

          {/* Main Search Bar with Enter and Arrow functionality */}
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              🔍 Search {decodedCategoryName}
            </h3>
            <TooltipProvider>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder={`Search ${toolStats.marketing} AI tools... Try: 'canva', 'notion', 'social media', 'video editing', 'whatsapp', 'spotify', 'github', 'figma'`}
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pl-10 pr-12 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-ai-purple focus:ring-2 focus:ring-ai-purple/20 transition-all duration-300 shadow-lg"
                />
                
                {searchTerm.trim() && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={handleSearchSubmit}
                        size="sm"
                        variant="ghost"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-gray-500 hover:text-ai-purple hover:bg-ai-purple/10 transition-all duration-200"
                      >
                        <ArrowDown className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Search and scroll to results</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </TooltipProvider>
          </div>

          {/* Category Filter Component */}
          <MainCategoryFilter
            tools={categoryTools}
            onFilteredToolsChange={handleFilteredToolsChange}
            currentMainCategory={decodedCategoryName}
          />

          {/* Tools Count Display */}
          <div className="text-center mb-8">
            <div className="text-cyan-400 font-semibold">
              {searchTerm 
                ? `${baseFilteredTools.length} tools found for "${searchTerm}"` 
                : `Showing ${displayedTools.length}+ tools in ${decodedCategoryName}`
              }
              {!searchTerm && displayedTools.length > baseFilteredTools.length && (
                <span className="text-cyan-300"> + similar and related tools</span>
              )}
            </div>
            {!searchTerm && (
              <div className="text-gray-400 text-sm mt-1">
                {categoryTools.length} category tools → similar tools → related categories - endless discovery!
              </div>
            )}
          </div>

          {/* Tools Grid with Infinite Scroll - NO MANUAL BUTTONS */}
          <div id="tools-section">
            {displayedTools.length > 0 ? (
              <ToolsGrid
                tools={finalFilteredTools}
                displayedCount={displayedCount}
                selectedCategory={decodedCategoryName}
                searchTerm={searchTerm}
                onLoadMore={handleLoadMore}
                hasInfiniteScroll={true}
                isLoading={isLoading}
              />
            ) : (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-cyan-100 mb-4">No tools found</h3>
                <p className="text-gray-300 mb-8">
                  {searchTerm 
                    ? `No tools found for "${searchTerm}" in ${decodedCategoryName}.`
                    : `No tools available with the selected filters in ${decodedCategoryName}.`
                  }
                </p>
                <Button
                  onClick={() => navigate('/')}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Explore Other Categories
                </Button>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default MainCategoryPage;
