
import { useState, useEffect, useMemo, useCallback } from "react";
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
  const [displayedCount, setDisplayedCount] = useState(12); // Start smaller for better performance
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllTools, setShowAllTools] = useState(false);
  const [allToolsDisplayedCount, setAllToolsDisplayedCount] = useState(12);

  const decodedCategoryName = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  
  // Find the main category
  const mainCategory = mainCategories.find(cat => cat.name === decodedCategoryName);
  
  // Scroll to top when category changes - enhanced for immediate effect
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowAllTools(false);
    setDisplayedCount(12);
    setSearchTerm("");
  }, [decodedCategoryName]);
  
  if (!mainCategory) {
    useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  // OPTIMIZED: Memoize category tools to prevent recalculation on every render
  const categoryTools = useMemo(() => {
    if (!decodedCategoryName) return [];
    console.log(`🚀 Computing tools for category: ${decodedCategoryName}`);
    const startTime = performance.now();
    
    const tools = getToolsByMainCategory(allTools, decodedCategoryName);
    
    const endTime = performance.now();
    console.log(`⚡ Category filtering took ${endTime - startTime}ms for ${tools.length} tools`);
    
    return tools;
  }, [decodedCategoryName, allTools]);
  
  // OPTIMIZED: Memoize filtered tools to prevent re-filtering on every render
  const filteredTools = useMemo(() => {
    if (!searchTerm.trim()) return categoryTools;
    
    console.log(`🔍 Filtering ${categoryTools.length} tools with search term: "${searchTerm}"`);
    const startTime = performance.now();
    
    const filtered = searchTools(categoryTools, searchTerm);
    
    const endTime = performance.now();
    console.log(`⚡ Search filtering took ${endTime - startTime}ms, found ${filtered.length} results`);
    
    return filtered;
  }, [categoryTools, searchTerm]);

  // OPTIMIZED: Memoize all filtered tools for "See More" functionality
  const allFilteredTools = useMemo(() => {
    if (!searchTerm.trim()) return [...allTools];
    
    console.log(`🔍 Global search for: "${searchTerm}"`);
    const startTime = performance.now();
    
    const filtered = searchTools(allTools, searchTerm);
    
    const endTime = performance.now();
    console.log(`⚡ Global search took ${endTime - startTime}ms, found ${filtered.length} results`);
    
    return filtered;
  }, [searchTerm, allTools]);

  // Calculate the actual displayed count based on what we're showing
  const currentTools = showAllTools ? allFilteredTools : filteredTools;
  const currentDisplayedCount = showAllTools ? allToolsDisplayedCount : displayedCount;

  // OPTIMIZED: Use callback to prevent function recreation
  const handleLoadMore = useCallback(() => {
    if (isLoading || displayedCount >= filteredTools.length) return;
    
    setIsLoading(true);
    // Use requestAnimationFrame for smoother loading
    requestAnimationFrame(() => {
      setDisplayedCount(prev => Math.min(prev + 8, filteredTools.length)); // Smaller increments
      setIsLoading(false);
    });
  }, [isLoading, displayedCount, filteredTools.length]);

  const handleAllToolsLoadMore = useCallback(() => {
    if (isLoading || allToolsDisplayedCount >= allFilteredTools.length) return;
    
    setIsLoading(true);
    requestAnimationFrame(() => {
      setAllToolsDisplayedCount(prev => Math.min(prev + 12, allFilteredTools.length));
      setIsLoading(false);
    });
  }, [isLoading, allToolsDisplayedCount, allFilteredTools.length]);

  // OPTIMIZED: Debounced search handler
  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
    setDisplayedCount(12);
    setAllToolsDisplayedCount(12);
  }, []);

  const handleSeeMoreAITools = useCallback(() => {
    console.log(`🚀 See More AI Tools clicked! Total tools available: ${allTools.length}`);
    setShowAllTools(true);
    setAllToolsDisplayedCount(12);
    
    setTimeout(() => {
      const toolsSection = document.getElementById('all-tools-section');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  // Setup infinite scroll with optimized parameters
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false,
    displayedCount: currentDisplayedCount,
    totalTools: currentTools.length,
    onLoadMore: showAllTools ? handleAllToolsLoadMore : handleLoadMore,
    searchTerm: searchTerm
  });

  const hasMoreTools = currentDisplayedCount < currentTools.length;
  const showCompletionMessage = !hasMoreTools && !isLoading && currentTools.length > 15;

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
                : (searchTerm ? `${filteredTools.length} tools found` : `${filteredTools.length} tools available`)
              }
            </div>
          </div>

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
        </main>

        {/* Featured Tools Section */}
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
