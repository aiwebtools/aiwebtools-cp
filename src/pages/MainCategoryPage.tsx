
import { useState, useEffect, useMemo, useCallback } from "react";
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
import { getContextAwareSimilarTools } from "@/utils/contextAwareSimilarTools";
import { useDebounce } from "@/hooks/useDebounce";

const MainCategoryPage = () => {
  const { mainCategoryName } = useParams<{ mainCategoryName: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedCount, setDisplayedCount] = useState(48);
  const [filteredToolsByCategory, setFilteredToolsByCategory] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Ultra-fast debounce for category page (10ms instead of 25ms)
  const debouncedSearchTerm = useDebounce(searchTerm, 10);

  const decodedCategoryName = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  
  const mainCategory = useMemo(() => 
    mainCategories.find(cat => cat.name === decodedCategoryName), 
    [decodedCategoryName]
  );
  
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

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-black relative overflow-x-hidden">
        <AnimatedBackground />
        <div className="relative z-10 cyber-grid">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <div className="text-center">
              <div className="text-6xl mb-4">⏳</div>
              <h1 className="text-2xl font-bold text-cyan-100">Loading...</h1>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  if (!mainCategory) {
    return null; // Will redirect in useEffect
  }

  // Cache category tools with better memoization
  const categoryTools = useMemo(() => {
    const tools = getToolsByMainCategory(allTools, decodedCategoryName);
    console.log(`📂 Loaded ${tools.length} tools for category: ${decodedCategoryName}`);
    return tools;
  }, [decodedCategoryName]);
  
  // Initialize filtered tools by category once
  useEffect(() => {
    if (categoryTools.length > 0 && filteredToolsByCategory.length === 0) {
      setFilteredToolsByCategory(categoryTools);
    }
  }, [categoryTools, filteredToolsByCategory.length]);

  // Use filtered tools from category filter, fallback to original category tools
  const toolsToShow = filteredToolsByCategory.length > 0 ? filteredToolsByCategory : categoryTools;
  
  // Apply search filter with ultra-fast debounced term
  const baseFilteredTools = useMemo(() => {
    const trimmedTerm = debouncedSearchTerm.trim();
    if (!trimmedTerm) return toolsToShow;
    
    // For single character, use instant simple matching
    if (trimmedTerm.length === 1) {
      return toolsToShow.filter(tool => 
        tool.title.toLowerCase().startsWith(trimmedTerm.toLowerCase())
      );
    }
    
    // For two characters, use fast matching
    if (trimmedTerm.length === 2) {
      return toolsToShow.filter(tool => 
        tool.title.toLowerCase().includes(trimmedTerm.toLowerCase()) ||
        tool.category?.toLowerCase().includes(trimmedTerm.toLowerCase())
      );
    }
    
    // For longer terms, use full search with limit
    const results = searchTools(toolsToShow, trimmedTerm);
    return results.slice(0, 200); // Performance limit
  }, [toolsToShow, debouncedSearchTerm]);

  // Create endless tools list with better performance
  const finalFilteredTools = useMemo(() => {
    if (debouncedSearchTerm.trim()) {
      return baseFilteredTools;
    }
    
    let endlessTools = [...baseFilteredTools];
    const remainingCount = displayedCount - baseFilteredTools.length;
    
    if (remainingCount > 0) {
      const similarTools = getContextAwareSimilarTools(
        baseFilteredTools, 
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
  }, [baseFilteredTools, displayedCount, debouncedSearchTerm, decodedCategoryName]);

  const displayedTools = useMemo(() => 
    finalFilteredTools.slice(0, displayedCount), 
    [finalFilteredTools, displayedCount]
  );

  // Reset displayed count when base filtered tools change
  useEffect(() => {
    setDisplayedCount(48);
  }, [baseFilteredTools.length]);

  const handleLoadMore = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Reduced timeout for faster loading
    setTimeout(() => {
      setDisplayedCount(prev => prev + 48);
      setIsLoading(false);
    }, 50);
  }, [isLoading]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleFilteredToolsChange = useCallback((filtered: Tool[]) => {
    setFilteredToolsByCategory(filtered);
  }, []);

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

          {/* Main Search Bar - Optimized */}
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
              {debouncedSearchTerm 
                ? `${baseFilteredTools.length} tools found for "${debouncedSearchTerm}"` 
                : `Showing ${displayedTools.length}+ tools in ${decodedCategoryName}`
              }
              {!debouncedSearchTerm && displayedTools.length > baseFilteredTools.length && (
                <span className="text-cyan-300"> + similar and related tools</span>
              )}
            </div>
            {!debouncedSearchTerm && (
              <div className="text-gray-400 text-sm mt-1">
                {categoryTools.length} category tools → similar tools → related categories - endless discovery!
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
                searchTerm={debouncedSearchTerm}
                onLoadMore={handleLoadMore}
                hasInfiniteScroll={true}
                isLoading={isLoading}
              />
            ) : (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-cyan-100 mb-4">No tools found</h3>
                <p className="text-gray-300 mb-8">
                  {debouncedSearchTerm 
                    ? `No tools found for "${debouncedSearchTerm}" in ${decodedCategoryName}.`
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
