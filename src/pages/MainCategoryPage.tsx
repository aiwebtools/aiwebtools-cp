
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import ToolsGrid from "@/components/tools/ToolsGrid";
import FeaturedToolsSection from "@/components/tools/FeaturedToolsSection";
import SearchBar from "@/components/tools/SearchBar";
import { allTools } from "@/data/toolsData";
import { getToolsByMainCategory } from "@/utils/categoryUtils";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { searchTools } from "@/utils/searchUtils";

const MainCategoryPage = () => {
  const { mainCategoryName } = useParams<{ mainCategoryName: string }>();
  const navigate = useNavigate();
  const [displayedCount, setDisplayedCount] = useState(24);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const decodedCategoryName = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  
  // Find the main category
  const mainCategory = mainCategories.find(cat => cat.name === decodedCategoryName);
  
  if (!mainCategory) {
    // If category not found, redirect to home
    useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  // Get all tools for this main category
  const categoryTools = getToolsByMainCategory(allTools, decodedCategoryName);
  
  // Apply search filter if search term exists
  const filteredTools = searchTerm.trim() 
    ? searchTools(categoryTools, searchTerm)
    : categoryTools;
  
  const handleLoadMore = () => {
    if (isLoading || displayedCount >= filteredTools.length) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + 12, filteredTools.length));
      setIsLoading(false);
    }, 500);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setDisplayedCount(24); // Reset displayed count when searching
  };

  // Setup infinite scroll
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false,
    displayedCount,
    totalTools: filteredTools.length,
    onLoadMore: handleLoadMore,
  });

  const hasMoreTools = displayedCount < filteredTools.length;
  const showCompletionMessage = !hasMoreTools && !isLoading && filteredTools.length > 20;

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
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{mainCategory.emoji}</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
              {decodedCategoryName}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              {mainCategory.description}
            </p>
            <div className="text-cyan-400 font-semibold">
              {searchTerm ? `${filteredTools.length} tools found` : `${categoryTools.length} tools available`}
            </div>
          </div>

          {/* Tools Grid */}
          {filteredTools.length > 0 ? (
            <ToolsGrid
              tools={filteredTools}
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
              <h3 className="text-2xl font-bold text-cyan-100 mb-4">
                {searchTerm ? 'No search results' : 'No tools found'}
              </h3>
              <p className="text-gray-300 mb-8">
                {searchTerm 
                  ? `No tools found for "${searchTerm}" in this category.`
                  : 'We couldn\'t find any tools in this category at the moment.'
                }
              </p>
            </div>
          )}

          {/* Enhanced completion message with search bar */}
          {showCompletionMessage && (
            <div className="text-center mt-12 mb-16 px-4 text-cyan-300">
              <div className="text-2xl mb-4">🎉</div>
              <div className="text-lg font-semibold mb-4">
                You've explored all {filteredTools.length} tools in {decodedCategoryName}!
              </div>
              <div className="text-sm opacity-80 mb-8">
                Try exploring other categories to discover more tools.
              </div>
              
              {/* Search Bar for better navigation */}
              <div className="max-w-2xl mx-auto mb-12">
                <h3 className="text-xl font-bold text-white mb-4">
                  🔍 Search All AI Tools
                </h3>
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={handleSearchChange}
                />
              </div>
            </div>
          )}
        </main>

        {/* Featured Tools Section - Our AIWebTools.ai Professional Solutions */}
        {showCompletionMessage && (
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
