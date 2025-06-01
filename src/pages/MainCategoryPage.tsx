
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
  const [displayedCount, setDisplayedCount] = useState(24);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllTools, setShowAllTools] = useState(true);
  const [allToolsDisplayedCount, setAllToolsDisplayedCount] = useState(24);
  const [showCategoryTools, setShowCategoryTools] = useState(false);
  const [categoryDisplayedCount, setCategoryDisplayedCount] = useState(24);

  const decodedCategoryName = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  
  const mainCategory = mainCategories.find(cat => cat.name === decodedCategoryName);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [decodedCategoryName]);
  
  if (!mainCategory) {
    useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  const categoryTools = getToolsByMainCategory(allTools, decodedCategoryName);
  
  let finalCategoryTools = categoryTools;
  if (decodedCategoryName === "AI CHAT & ASSISTANTS") {
    const aiWebToolsGPTs = categoryTools.filter(tool => 
      tool.directUrl?.includes('lovable.app') || 
      tool.title.includes('GPT') && tool.directUrl?.includes('aiwebtools')
    );
    const otherTools = categoryTools.filter(tool => 
      !tool.directUrl?.includes('lovable.app') && 
      !(tool.title.includes('GPT') && tool.directUrl?.includes('aiwebtools'))
    );
    
    finalCategoryTools = [...aiWebToolsGPTs, ...otherTools];
    
    console.log(`🎯 AI CHAT & ASSISTANTS Debug:`, {
      totalCategoryTools: categoryTools.length,
      aiWebToolsGPTs: aiWebToolsGPTs.length,
      otherTools: otherTools.length,
      finalCount: finalCategoryTools.length,
      firstFewTitles: finalCategoryTools.slice(0, 5).map(t => t.title)
    });
  }
  
  const allFilteredTools = searchTerm.trim() 
    ? searchTools(allTools, searchTerm)
    : [...allTools];
    
  const categoryFilteredTools = searchTerm.trim() 
    ? searchTools(finalCategoryTools, searchTerm)
    : finalCategoryTools;
  
  console.log(`📊 Current display state:`, {
    categoryToolsCount: finalCategoryTools.length,
    categoryFilteredToolsCount: categoryFilteredTools.length,
    allFilteredToolsCount: allFilteredTools.length,
    totalAllToolsCount: allTools.length,
    showAllTools,
    showCategoryTools,
    searchTerm: searchTerm || 'none'
  });

  const handleAllToolsLoadMore = () => {
    if (isLoading || allToolsDisplayedCount >= allFilteredTools.length) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setAllToolsDisplayedCount(prev => Math.min(prev + 24, allFilteredTools.length));
      setIsLoading(false);
    }, 300);
  };

  const handleCategoryToolsLoadMore = () => {
    if (isLoading || categoryDisplayedCount >= categoryFilteredTools.length) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setCategoryDisplayedCount(prev => Math.min(prev + 12, categoryFilteredTools.length));
      setIsLoading(false);
    }, 300);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setAllToolsDisplayedCount(24);
    setCategoryDisplayedCount(24);
  };

  const handleShowCategoryTools = () => {
    setShowCategoryTools(true);
    setTimeout(() => {
      const categorySection = document.getElementById('category-tools-section');
      if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false,
    displayedCount: allToolsDisplayedCount,
    totalTools: allFilteredTools.length,
    onLoadMore: handleAllToolsLoadMore,
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

          {/* MOVED: Category-Specific Tools Button - NOW AT THE TOP */}
          {finalCategoryTools.length > 0 && (
            <div className="text-center mb-8 px-4">
              <Button
                onClick={handleShowCategoryTools}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-4 py-4 rounded-xl text-sm sm:text-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 max-w-full"
              >
                <span className="sm:hidden">📋 SHOW {decodedCategoryName}</span>
                <span className="hidden sm:inline">📋 SHOW {decodedCategoryName} SPECIFIC TOOLS</span>
              </Button>
              <div className="mt-4 text-green-300 text-sm">
                View {finalCategoryTools.length} tools specifically in the {decodedCategoryName} category
              </div>
            </div>
          )}

          {/* Main AI Tools Collection Section */}
          <div className="mb-16">
            {/* Search Bar for All Tools */}
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                🔍 Search All AI Tools
              </h3>
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                preventAutoNavigation={true}
              />
            </div>

            {/* All Tools Count */}
            <div className="text-center mb-8">
              <div className="text-cyan-400 font-semibold">
                {searchTerm ? `${allFilteredTools.length} tools found` : `${allTools.length} total tools available`}
              </div>
            </div>

            {/* Main AI Tools Grid */}
            <div id="all-tools-section">
              {allFilteredTools.length > 0 ? (
                <ToolsGrid
                  tools={allFilteredTools}
                  displayedCount={allToolsDisplayedCount}
                  selectedCategory={null}
                  searchTerm={searchTerm}
                  onLoadMore={handleAllToolsLoadMore}
                  hasInfiniteScroll={true}
                  isLoading={isLoading}
                />
              ) : (
                <div className="text-center py-16">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-cyan-100 mb-4">No search results</h3>
                  <p className="text-gray-300 mb-8">No tools found for "{searchTerm}".</p>
                </div>
              )}
            </div>
          </div>

          {/* Category Tools Section */}
          {showCategoryTools && (
            <div id="category-tools-section" className="mt-16 border-t border-cyan-500/30 pt-16">
              <div className="text-center mb-8">
                <p className="text-gray-300 mb-6">
                  Specialized tools in the {decodedCategoryName} category
                </p>
                <div className="text-cyan-400 font-semibold">
                  {searchTerm ? `${categoryFilteredTools.length} tools found` : `${finalCategoryTools.length} tools available`}
                </div>
              </div>

              {categoryFilteredTools.length > 0 ? (
                <ToolsGrid
                  tools={categoryFilteredTools}
                  displayedCount={categoryDisplayedCount}
                  selectedCategory={decodedCategoryName}
                  searchTerm={searchTerm}
                  onLoadMore={handleCategoryToolsLoadMore}
                  hasInfiniteScroll={false}
                  isLoading={false}
                />
              ) : (
                <div className="text-center py-16">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-cyan-100 mb-4">No category results</h3>
                  <p className="text-gray-300 mb-8">No tools found in {decodedCategoryName} for "{searchTerm}".</p>
                </div>
              )}
            </div>
          )}
        </main>

        {/* Featured Tools Section */}
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
