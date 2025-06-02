
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import ToolsGrid from "@/components/tools/ToolsGrid";
import FeaturedToolsSection from "@/components/tools/FeaturedToolsSection";
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
  const [allToolsDisplayedCount, setAllToolsDisplayedCount] = useState(48);
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

  // Get tools for this specific main category - using the corrected cached tools
  const categoryTools = getToolsByMainCategory(allTools, decodedCategoryName);
  
  console.log(`📊 MainCategoryPage "${decodedCategoryName}":`, {
    originalCachedTools: categoryTools.length,
    categoryFilteredTools: filteredToolsByCategory.length,
    searchTerm: searchTerm || 'none'
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
  const finalFilteredTools = searchTerm.trim() 
    ? searchTools(toolsToShow, searchTerm)
    : toolsToShow;

  const handleLoadMore = () => {
    if (allToolsDisplayedCount >= finalFilteredTools.length || isLoading) return;
    
    console.log(`🚀 Loading more tools in ${decodedCategoryName}...`);
    setIsLoading(true);
    
    // Use setTimeout to show loading state briefly, then load more tools
    setTimeout(() => {
      // Load 48 more tools at a time for smooth experience
      setAllToolsDisplayedCount(prev => Math.min(prev + 48, finalFilteredTools.length));
      setIsLoading(false);
    }, 200);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setAllToolsDisplayedCount(48);
  };

  const handleFilteredToolsChange = (filtered: Tool[]) => {
    console.log(`🎯 Category filter changed: ${filtered.length} tools`);
    setFilteredToolsByCategory(filtered);
    setAllToolsDisplayedCount(48); // Reset displayed count when category filter changes
  };

  const hasMoreTools = allToolsDisplayedCount < finalFilteredTools.length;

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

          {/* Search Bar */}
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

          {/* Tools Count - Show EXACT count that matches card display */}
          <div className="text-center mb-8">
            <div className="text-cyan-400 font-semibold">
              {searchTerm 
                ? `${finalFilteredTools.length} tools found` 
                : `${finalFilteredTools.length} tools in ${decodedCategoryName}`
              }
            </div>
            {!searchTerm && hasMoreTools && (
              <div className="text-gray-400 text-sm mt-1">
                Showing {allToolsDisplayedCount} of {finalFilteredTools.length} tools - scroll for more!
              </div>
            )}
          </div>

          {/* Tools Grid - with infinite scroll enabled */}
          <div id="tools-section">
            {finalFilteredTools.length > 0 ? (
              <ToolsGrid
                tools={finalFilteredTools}
                displayedCount={allToolsDisplayedCount}
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

          {/* Backup Show More Button - only visible if infinite scroll fails */}
          {!searchTerm && hasMoreTools && !isLoading && (
            <div className="text-center mt-12 mb-8">
              <Button
                onClick={handleLoadMore}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 transform hover:scale-105"
              >
                🚀 Show More Tools
              </Button>
              <div className="mt-4 text-cyan-300 text-sm">
                Showing {allToolsDisplayedCount} of {finalFilteredTools.length} amazing AI tools
              </div>
            </div>
          )}
        </main>

        {/* Featured Tools Section - only show if not "ALL AI TOOLS" */}
        {decodedCategoryName !== "ALL AI TOOLS" && (
          <div className="mt-16">
            <FeaturedToolsSection />
          </div>
        )}
        
        <Footer />
      </div>
    </div>
  );
};

export default MainCategoryPage;
