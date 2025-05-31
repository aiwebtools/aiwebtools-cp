
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
  const [showAllTools, setShowAllTools] = useState(false);
  const [allToolsDisplayedCount, setAllToolsDisplayedCount] = useState(24);
  const [showAllCategoryTools, setShowAllCategoryTools] = useState(false);

  const decodedCategoryName = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  
  // Find the main category
  const mainCategory = mainCategories.find(cat => cat.name === decodedCategoryName);
  
  // Scroll to top when category changes - enhanced for immediate effect
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Also use requestAnimationFrame to ensure it happens after any layout changes
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    
    // Additional timeout to catch any delayed renders
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [decodedCategoryName]);
  
  if (!mainCategory) {
    // If category not found, redirect to home
    useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  // Get tools for this main category
  const categoryTools = getToolsByMainCategory(allTools, decodedCategoryName);
  
  console.log(`🔍 MainCategoryPage Debug for "${decodedCategoryName}":`, {
    isAllAITools: decodedCategoryName === "ALL AI TOOLS",
    categoryToolsCount: categoryTools.length,
    totalAllToolsCount: allTools.length,
    sampleCategoryTools: categoryTools.slice(0, 3).map(t => ({ title: t.title, category: t.category }))
  });
  
  // Apply search filter if search term exists
  const filteredTools = searchTerm.trim() 
    ? searchTools(categoryTools, searchTerm)
    : categoryTools;

  // Get all tools for "See More" functionality - ensure we get ALL tools
  const allFilteredTools = searchTerm.trim() 
    ? searchTools(allTools, searchTerm)
    : [...allTools]; // Create a copy to avoid mutation
  
  console.log(`📊 Current display state:`, {
    categoryToolsCount: categoryTools.length,
    filteredToolsCount: filteredTools.length,
    allFilteredToolsCount: allFilteredTools.length,
    totalAllToolsCount: allTools.length,
    showAllTools,
    showAllCategoryTools,
    searchTerm: searchTerm || 'none',
    displayedCount,
    allToolsDisplayedCount
  });

  // Calculate the actual displayed count based on what we're showing
  const actualDisplayedCount = showAllCategoryTools ? filteredTools.length : displayedCount;
  const currentTools = showAllTools ? allFilteredTools : filteredTools;
  const currentDisplayedCount = showAllTools ? allToolsDisplayedCount : actualDisplayedCount;

  const handleLoadMore = () => {
    if (isLoading || displayedCount >= filteredTools.length) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + 12, filteredTools.length));
      setIsLoading(false);
    }, 500);
  };

  const handleAllToolsLoadMore = () => {
    if (isLoading || allToolsDisplayedCount >= allFilteredTools.length) return;
    
    console.log(`🚀 Loading more tools: ${allToolsDisplayedCount} -> ${Math.min(allToolsDisplayedCount + 24, allFilteredTools.length)} of ${allFilteredTools.length}`);
    
    setIsLoading(true);
    setTimeout(() => {
      setAllToolsDisplayedCount(prev => Math.min(prev + 24, allFilteredTools.length));
      setIsLoading(false);
    }, 300);
  };

  // Fixed search handler that doesn't cause navigation or scroll issues
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setDisplayedCount(24); // Reset displayed count when searching
    setAllToolsDisplayedCount(24); // Reset all tools count when searching
    setShowAllCategoryTools(false); // Reset show all category tools when searching
    // Don't scroll or navigate - just update the search term
  };

  const handleShowAllCategoryTools = () => {
    console.log(`🚀 Show More From This Category clicked! Total category tools: ${filteredTools.length}`);
    setShowAllCategoryTools(true);
    // Scroll to the tools section
    setTimeout(() => {
      const toolsSection = document.getElementById('category-tools-section');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSeeMoreAITools = () => {
    console.log(`🚀 See More AI Tools clicked! Total tools available: ${allTools.length}`);
    setShowAllTools(true);
    setAllToolsDisplayedCount(24); // Start with 24 tools and let infinite scroll handle the rest
    // Scroll to the tools section
    setTimeout(() => {
      const toolsSection = document.getElementById('all-tools-section');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Setup infinite scroll - enhanced for better performance
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false,
    displayedCount: currentDisplayedCount,
    totalTools: currentTools.length,
    onLoadMore: showAllTools ? handleAllToolsLoadMore : handleLoadMore,
    searchTerm: searchTerm
  });

  const hasMoreTools = currentDisplayedCount < currentTools.length;
  const showCompletionMessage = !hasMoreTools && !isLoading && currentTools.length > 20;

  // Show "Show More From This Category" button when we have more tools in category and not showing all yet
  const shouldShowAllCategoryButton = !showAllCategoryTools && !showAllTools && 
    filteredTools.length > displayedCount && !searchTerm;

  console.log(`📊 Final render state:`, {
    currentToolsLength: currentTools.length,
    currentDisplayedCount,
    hasMoreTools,
    showAllTools,
    showAllCategoryTools,
    shouldShowAllCategoryButton,
    decodedCategoryName
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

          {/* Search Bar - Positioned after category description */}
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

          {/* Tools Count */}
          <div className="text-center mb-8">
            <div className="text-cyan-400 font-semibold">
              {showAllTools 
                ? (searchTerm ? `${allFilteredTools.length} tools found` : `${allTools.length} total tools available`)
                : (searchTerm ? `${filteredTools.length} tools found` : `${categoryTools.length} tools available`)
              }
            </div>
          </div>

          {/* Show More From This Category Button - appears before tools grid (TOP) */}
          {shouldShowAllCategoryButton && (
            <div className="text-center mb-8 px-4">
              <Button
                onClick={handleShowAllCategoryTools}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                📋 SHOW MORE FROM THIS CATEGORY
              </Button>
              <div className="mt-4 text-green-300 text-sm">
                Currently showing {displayedCount} of {filteredTools.length} tools in this category
              </div>
            </div>
          )}

          {/* Main Tools Section */}
          <div id={showAllTools ? "all-tools-section" : "category-tools-section"}>
            {currentTools.length > 0 ? (
              <ToolsGrid
                tools={currentTools}
                displayedCount={currentDisplayedCount}
                selectedCategory={showAllTools ? null : decodedCategoryName}
                searchTerm={searchTerm}
                onLoadMore={showAllTools ? handleAllToolsLoadMore : handleLoadMore}
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
          </div>

          {/* Enhanced completion message */}
          {showCompletionMessage && (
            <div className="text-center mt-12 mb-16 px-4 text-cyan-300">
              <div className="text-2xl mb-4">🎉</div>
              <div className="text-lg font-semibold mb-4">
                You've explored all {currentTools.length} tools{showAllTools ? ' in our database' : ` in ${decodedCategoryName}`}!
              </div>
              <div className="text-sm opacity-80 mb-8">
                {showAllTools 
                  ? "Try searching or filtering by category to discover specific tools."
                  : "Try exploring other categories to discover more tools."
                }
              </div>
            </div>
          )}

          {/* Show More From This Category Button - appears after tools but before featured tools (BOTTOM) */}
          {shouldShowAllCategoryButton && (
            <div className="text-center mt-12 mb-8 px-4">
              <Button
                onClick={handleShowAllCategoryTools}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                📋 SHOW MORE FROM THIS CATEGORY
              </Button>
              <div className="mt-4 text-green-300 text-sm">
                Currently showing {displayedCount} of {filteredTools.length} tools in this category
              </div>
            </div>
          )}
        </main>

        {/* Featured Tools Section - Our AIWebTools.ai Professional Solutions */}
        {!showAllTools && decodedCategoryName !== "ALL AI TOOLS" && (
          <div className="mt-16">
            <FeaturedToolsSection />
            
            {/* SEE MORE AI TOOLS Button */}
            <div className="text-center mt-12 mb-16 px-4">
              <Button
                onClick={handleSeeMoreAITools}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                🚀 SEE MORE AI TOOLS
              </Button>
              <div className="mt-4 text-cyan-300 text-sm">
                Explore our complete collection of {allTools.length}+ amazing AI tools
              </div>
            </div>
          </div>
        )}
        
        <Footer />
      </div>
    </div>
  );
};

export default MainCategoryPage;
