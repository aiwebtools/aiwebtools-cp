
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import ToolsGrid from "@/components/tools/ToolsGrid";
import SearchBar from "@/components/tools/SearchBar";
import MainCategoryFilter from "@/components/category/MainCategoryFilter";
import { Button } from "@/components/ui/button";
import { allTools } from "@/data/toolsData";
import { getToolsByMainCategory } from "@/utils/categoryUtils";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { searchTools } from "@/utils/searchUtils";
import { Tool } from "@/types/tools";

const MainCategoryPage = () => {
  const { mainCategoryName } = useParams<{ mainCategoryName: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedCount, setDisplayedCount] = useState(48);
  const [filteredToolsByCategory, setFilteredToolsByCategory] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const decodedCategoryName = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  
  const mainCategory = mainCategories.find(cat => cat.name === decodedCategoryName);
  
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

  // ENDLESS FLOW: Create infinite list by cycling through all tools when category tools are exhausted
  const createEndlessToolsList = () => {
    if (searchTerm.trim()) {
      // For search, just return search results
      return baseFilteredTools;
    }
    
    // Start with category-specific tools
    let endlessTools = [...baseFilteredTools];
    
    // Calculate how many additional tools we need to fill the displayed count
    const remainingCount = displayedCount - baseFilteredTools.length;
    
    if (remainingCount > 0) {
      // Get tools from entire database that aren't already in the category
      const additionalTools = allTools.filter(tool => 
        !baseFilteredTools.some(filteredTool => filteredTool.title === tool.title)
      );
      
      // If we need more tools than available additional tools, cycle through them
      if (remainingCount > additionalTools.length) {
        const cycles = Math.ceil(remainingCount / additionalTools.length);
        for (let i = 0; i < cycles; i++) {
          endlessTools = [...endlessTools, ...additionalTools];
        }
      } else {
        endlessTools = [...endlessTools, ...additionalTools.slice(0, remainingCount)];
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
    
    console.log(`🚀 Loading more tools in ${decodedCategoryName}... Current: ${displayedCount}`);
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

  const handleFilteredToolsChange = (filtered: Tool[]) => {
    console.log(`🎯 Category filter changed: ${filtered.length} tools (priority ordered)`);
    setFilteredToolsByCategory(filtered);
  };

  // Always show as having more tools for endless scroll (except for search)
  const hasMoreTools = searchTerm.trim() ? displayedCount < baseFilteredTools.length : true;

  console.log(`🔍 Final tool display logic:`, {
    baseFilteredToolsLength: baseFilteredTools.length,
    finalFilteredToolsLength: finalFilteredTools.length,
    displayedToolsLength: displayedTools.length,
    displayedCount,
    hasMoreTools,
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

          {/* Main Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              🔍 Search {decodedCategoryName}
            </h3>
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              preventAutoNavigation={true}
            />
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
                : filteredToolsByCategory.length > categoryTools.length
                  ? `${baseFilteredTools.length} tools available - filtered categories shown first`
                  : `Showing ${displayedTools.length}+ tools in ${decodedCategoryName}`
              }
              {!searchTerm && displayedTools.length > baseFilteredTools.length && (
                <span className="text-cyan-300"> + recommendations from our entire database</span>
              )}
            </div>
            {!searchTerm && (
              <div className="text-gray-400 text-sm mt-1">
                {categoryTools.length} category-specific tools + endless recommendations - keep scrolling!
              </div>
            )}
          </div>

          {/* Tools Grid with Infinite Scroll */}
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

          {/* Backup Show More Button - only for search results when they have an end */}
          {searchTerm && hasMoreTools && !isLoading && (
            <div className="text-center mt-12 mb-8">
              <Button
                onClick={handleLoadMore}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 transform hover:scale-105"
              >
                🚀 Show More Search Results
              </Button>
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default MainCategoryPage;
