
import { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { ToolGridSkeleton } from "@/components/ui/loading-skeleton";
import SEOHead from "@/components/SEOHead";
import ToolsGrid from "@/components/tools/ToolsGrid";
import GlobalSearchBar from "@/components/GlobalSearchBar";
import MainCategoryFilter from "@/components/category/MainCategoryFilter";
import { Button } from "@/components/ui/button";
import { allTools } from "@/data/toolsData";
import { getToolsByMainCategory } from "@/utils/categoryUtils";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { Tool } from "@/types/tools";
import { getContextAwareAdditionalTools } from "@/utils/contextAwareSimilarTools";

const MainCategoryPage = () => {
  const { mainCategoryName } = useParams<{ mainCategoryName: string }>();
  const navigate = useNavigate();
  
  // ALL HOOKS MUST BE DECLARED AT THE TOP - NO CONDITIONAL HOOKS
  const [displayedCount, setDisplayedCount] = useState(48);
  const [filteredToolsByCategory, setFilteredToolsByCategory] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const decodedCategoryName = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  
  const mainCategory = useMemo(() => 
    mainCategories.find(cat => cat.name === decodedCategoryName), 
    [decodedCategoryName]
  );

  // Cache category tools with better memoization
  const categoryTools = useMemo(() => {
    if (!decodedCategoryName) return [];
    const tools = getToolsByMainCategory(allTools, decodedCategoryName);
    console.log(`📂 Loaded ${tools.length} tools for category: ${decodedCategoryName}`);
    return tools;
  }, [decodedCategoryName]);

  // Use filtered tools from category filter, fallback to original category tools
  const toolsToShow = filteredToolsByCategory.length > 0 ? filteredToolsByCategory : categoryTools;
  
  // Create endless tools list with better performance
  const finalFilteredTools = useMemo(() => {
    let endlessTools = [...toolsToShow];
    const remainingCount = displayedCount - toolsToShow.length;
    
    if (remainingCount > 0) {
      const similarTools = getContextAwareAdditionalTools(
        toolsToShow, 
        "", 
        decodedCategoryName, 
        Math.min(remainingCount, 100)
      );
      
      const availableSimilar = similarTools.filter(tool => 
        !endlessTools.some(existing => existing.title === tool.title)
      );
      endlessTools = [...endlessTools, ...availableSimilar];
      
      const stillNeeded = displayedCount - endlessTools.length;
      if (stillNeeded > 0) {
        const otherTools = allTools.filter(tool => 
          !endlessTools.some(existing => existing.title === tool.title)
        );
        
        const toolsToAdd = otherTools.slice(0, stillNeeded);
        endlessTools = [...endlessTools, ...toolsToAdd];
      }
    }
    
    return endlessTools;
  }, [toolsToShow, displayedCount, decodedCategoryName]);

  const displayedTools = useMemo(() => 
    finalFilteredTools.slice(0, displayedCount), 
    [finalFilteredTools, displayedCount]
  );

  // ALL EVENT HANDLERS
  const handleLoadMore = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Faster loading with better user feedback
    setTimeout(() => {
      setDisplayedCount(prev => prev + 48);
      setIsLoading(false);
    }, 100);
  }, [isLoading]);

  const handleFilteredToolsChange = useCallback((filtered: Tool[]) => {
    setFilteredToolsByCategory(filtered);
  }, []);

  // ALL EFFECTS AT THE END
  // Scroll to top immediately and initialize
  useEffect(() => {
    console.log('🏠 MainCategoryPage mounted for:', decodedCategoryName);
    window.scrollTo(0, 0);
    setIsInitialized(true);
  }, [decodedCategoryName]);
  
  // Handle invalid category - prevent request form opening
  useEffect(() => {
    if (isInitialized && !mainCategory && decodedCategoryName) {
      console.log('❌ Invalid category detected:', decodedCategoryName);
      console.log('🔄 Redirecting to homepage to prevent errors');
      navigate('/', { replace: true });
    }
  }, [mainCategory, decodedCategoryName, navigate, isInitialized]);

  // Initialize filtered tools by category once
  useEffect(() => {
    if (categoryTools.length > 0 && filteredToolsByCategory.length === 0) {
      setFilteredToolsByCategory(categoryTools);
    }
  }, [categoryTools, filteredToolsByCategory.length]);

  // Reset displayed count when filtered tools change
  useEffect(() => {
    setDisplayedCount(48);
  }, [toolsToShow.length]);

  // CONDITIONAL RENDERING ONLY AFTER ALL HOOKS
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-black relative overflow-x-hidden">
        <AnimatedBackground />
        <div className="relative z-10 cyber-grid">
          <Header />
          <main className="container mx-auto px-4 py-8 pt-32 md:pt-36 lg:pt-40">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-pulse">⏳</div>
              <h1 className="text-2xl font-bold text-cyan-100 mb-4">Loading AI Tools...</h1>
              <p className="text-gray-400">Preparing your ultimate AI experience</p>
            </div>
            <ToolGridSkeleton count={8} />
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  if (!mainCategory) {
    return null; // Will redirect in useEffect
  }

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
        
        <main className="container mx-auto px-4 py-8 pt-32 md:pt-36 lg:pt-40">
          {/* Category Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{mainCategory.emoji}</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
              {decodedCategoryName}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              {mainCategory.description}
            </p>
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <li>
                  <button 
                    onClick={() => navigate('/')}
                    className="hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:text-cyan-400"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <span className="mx-2">›</span>
                  <span className="text-cyan-400">{decodedCategoryName}</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Main Search Bar - Same as homepage */}
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              🔍 Search All AI Tools
            </h3>
            <GlobalSearchBar />
          </div>

          {/* Category Filter Component */}
          <MainCategoryFilter
            tools={categoryTools}
            onFilteredToolsChange={handleFilteredToolsChange}
            currentMainCategory={decodedCategoryName}
          />

          {/* Tools Count Display - Real counter format */}
          <div className="text-center mb-8">
            <div className="text-cyan-400 font-semibold">
              {Math.min(displayedCount, finalFilteredTools.length)} tools shown — endless recommendations continue as you scroll
            </div>
          </div>

          {/* Tools Grid with Infinite Scroll */}
          <div id="tools-section">
            {displayedTools.length > 0 ? (
              <ToolsGrid
                tools={finalFilteredTools}
                displayedCount={displayedCount}
                selectedCategory={decodedCategoryName}
                searchTerm=""
                onLoadMore={handleLoadMore}
                hasInfiniteScroll={true}
                isLoading={isLoading}
              />
            ) : (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-cyan-100 mb-4">No tools found</h3>
                <p className="text-gray-300 mb-8">
                  No tools available with the selected filters in {decodedCategoryName}.
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
        
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default MainCategoryPage;
