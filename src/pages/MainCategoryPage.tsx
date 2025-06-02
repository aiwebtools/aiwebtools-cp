
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import ToolsGrid from "@/components/tools/ToolsGrid";
import FeaturedToolsSection from "@/components/tools/FeaturedToolsSection";
import SearchBar from "@/components/tools/SearchBar";
import { Button } from "@/components/ui/button";
import { allTools } from "@/data/toolsData";
import { getToolsByMainCategory } from "@/utils/categoryUtils";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { searchTools } from "@/utils/searchUtils";

const MainCategoryPage = () => {
  const { mainCategoryName } = useParams<{ mainCategoryName: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [allToolsDisplayedCount, setAllToolsDisplayedCount] = useState(24);
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
  
  // Handle "ALL AI TOOLS" category specially - show all tools
  const toolsToShow = decodedCategoryName === "ALL AI TOOLS" ? allTools : categoryTools;
  
  // Apply search filter if there's a search term
  const filteredTools = searchTerm.trim() 
    ? searchTools(toolsToShow, searchTerm)
    : toolsToShow;
  
  console.log(`📊 MainCategoryPage Debug:`, {
    mainCategoryName: decodedCategoryName,
    categoryToolsCount: categoryTools.length,
    toolsToShowCount: toolsToShow.length,
    filteredToolsCount: filteredTools.length,
    displayedCount: allToolsDisplayedCount,
    searchTerm: searchTerm || 'none',
    firstFewTitles: filteredTools.slice(0, 5).map(t => t.title)
  });

  const handleLoadMore = () => {
    if (isLoading || allToolsDisplayedCount >= filteredTools.length) return;
    
    setIsLoading(true);
    // Reduced timeout for faster loading
    setTimeout(() => {
      setAllToolsDisplayedCount(prev => Math.min(prev + 24, filteredTools.length));
      setIsLoading(false);
    }, 100);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setAllToolsDisplayedCount(24);
  };

  const hasMoreTools = allToolsDisplayedCount < filteredTools.length;

  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false,
    displayedCount: allToolsDisplayedCount,
    totalTools: filteredTools.length,
    onLoadMore: handleLoadMore,
    searchTerm: searchTerm
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

          {/* Tools Count - Show accurate count */}
          <div className="text-center mb-8">
            <div className="text-cyan-400 font-semibold">
              {searchTerm 
                ? `${filteredTools.length} tools found` 
                : `${filteredTools.length} tools in ${decodedCategoryName}`
              }
            </div>
            {!searchTerm && hasMoreTools && (
              <div className="text-gray-400 text-sm mt-1">
                Showing {allToolsDisplayedCount} of {filteredTools.length} tools
              </div>
            )}
          </div>

          {/* Tools Grid */}
          <div id="tools-section">
            {filteredTools.length > 0 ? (
              <ToolsGrid
                tools={filteredTools}
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
                    : `No tools available in ${decodedCategoryName}.`
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

          {/* Show More Button for non-search scenarios */}
          {!searchTerm && hasMoreTools && (
            <div className="text-center mt-12 mb-8">
              <Button
                onClick={handleLoadMore}
                size="lg"
                disabled={isLoading}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Loading More Tools...</span>
                  </div>
                ) : (
                  <>🚀 Show More {decodedCategoryName} Tools</>
                )}
              </Button>
              <div className="mt-4 text-cyan-300 text-sm">
                Showing {allToolsDisplayedCount} of {filteredTools.length} amazing AI tools
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
