
import { useState, useEffect, useMemo, useCallback, useTransition } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import DeferredMount from "@/components/DeferredMount";
import ScrollToTop from "@/components/ui/scroll-to-top";
import SEOHead from "@/components/SEOHead";
import ToolsGrid from "@/components/tools/ToolsGrid";
import ToolsGridSkeleton from "@/components/tools/ToolsGridSkeleton";
import GlobalSearchBar from "@/components/LazyGlobalSearchBar";
import MainCategoryFilter from "@/components/category/MainCategoryFilter";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { allTools } from "@/data/toolsData";
import { getToolsByMainCategory } from "@/utils/categoryUtils";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { Tool } from "@/types/tools";
import { getContextAwareAdditionalTools } from "@/utils/contextAwareSimilarTools";
import { getCachedToolsByMainCategory } from "@/utils/categoryUtils/precomputedCache";

const MainCategoryPage = () => {
  const { mainCategoryName } = useParams<{ mainCategoryName: string }>();
  const navigate = useNavigate();
  
  // ALL HOOKS MUST BE DECLARED AT THE TOP - NO CONDITIONAL HOOKS
  const [displayedCount, setDisplayedCount] = useState(48);
  const [filteredToolsByCategory, setFilteredToolsByCategory] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isToolsReady, setIsToolsReady] = useState(false);
  const [categoryTools, setCategoryTools] = useState<Tool[]>([]);
  const [isPending, startTransition] = useTransition();

  const decodedCategoryName = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  
  const mainCategory = useMemo(() => 
    mainCategories.find(cat => cat.name === decodedCategoryName), 
    [decodedCategoryName]
  );

  // Load category tools using precomputed cache first for INSTANT data
  useEffect(() => {
    if (!decodedCategoryName) return;

    // Reset state immediately - page renders instantly
    setIsToolsReady(false);
    setCategoryTools([]);
    setFilteredToolsByCategory([]);
    setDisplayedCount(48);

    // Try to use precomputed cached tools (non-blocking, already computed at startup)
    const cachedTools = getCachedToolsByMainCategory(decodedCategoryName);
    if (cachedTools && cachedTools.length > 0) {
      setCategoryTools(cachedTools);
      setFilteredToolsByCategory(cachedTools);
      setIsToolsReady(true);
      return; // Skip heavier fallback path
    }

    // Special fast path for "ALL AI TOOLS" - just use allTools directly (no filtering needed)
    if (decodedCategoryName === "ALL AI TOOLS") {
      // Use setTimeout(0) to truly defer and avoid blocking navigation
      setTimeout(() => {
        startTransition(() => {
          setCategoryTools(allTools);
          setFilteredToolsByCategory(allTools);
          setIsToolsReady(true);
          console.log(`📂 Loaded ${allTools.length} tools for ALL AI TOOLS`);
        });
      }, 0);
      return;
    }

    // Fallback for other categories: use setTimeout(0) for true async deferral
    setTimeout(() => {
      startTransition(() => {
        const tools = getToolsByMainCategory(allTools, decodedCategoryName);
        console.log(`📂 Loaded ${tools.length} tools for category: ${decodedCategoryName}`);
        setCategoryTools(tools);
        setFilteredToolsByCategory(tools);
        setIsToolsReady(true);
      });
    }, 0);
  }, [decodedCategoryName]);

  // Use filtered tools from category filter - this is the SOURCE OF TRUTH when filter is active
  const toolsToShow = filteredToolsByCategory;
  
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

  // ALL EVENT HANDLERS - optimized for mobile
  const handleLoadMore = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // INSTANT loading - no artificial delay needed
    requestAnimationFrame(() => {
      setDisplayedCount(prev => prev + 48);
      setIsLoading(false);
    });
  }, [isLoading]);

  // INSTANT filter updates - no debouncing for snappy feel
  const handleFilteredToolsChange = useCallback((filtered: Tool[]) => {
    console.log(`📊 MainCategoryPage received ${filtered.length} filtered tools`);
    // Use requestAnimationFrame for smoother state updates
    requestAnimationFrame(() => {
      setFilteredToolsByCategory(filtered);
    });
  }, []);

  // Scroll to top immediately
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [decodedCategoryName]);
  
  // Handle invalid category - redirect to homepage
  useEffect(() => {
    if (!mainCategory && decodedCategoryName) {
      console.log('❌ Invalid category detected:', decodedCategoryName);
      navigate('/', { replace: true });
    }
  }, [mainCategory, decodedCategoryName, navigate]);

  // Reset displayed count when filtered tools change
  useEffect(() => {
    setDisplayedCount(48);
  }, [toolsToShow.length]);

  // If invalid category, show nothing (will redirect)
  if (!mainCategory) {
    return null;
  }

  // Loading state shown inline in the filter area
  const showToolsLoading = !isToolsReady || isPending;

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <SEOHead
        title={`${decodedCategoryName} - AI Tools Directory`}
        description={`Discover the best ${decodedCategoryName.toLowerCase()} for your needs. ${mainCategory.description}`}
        keywords={[decodedCategoryName.toLowerCase(), "ai tools", "artificial intelligence"]}
      />
      
      <DeferredMount delay={50}><AnimatedBackground /></DeferredMount>
      
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <main className="container mx-auto px-4 py-8 pt-32 md:pt-36 lg:pt-40">
          {/* Breadcrumb Navigation Trail */}
          <BreadcrumbNav
            items={[
              { 
                label: decodedCategoryName, 
                emoji: mainCategory.emoji 
              }
            ]}
            className="mb-4"
          />

          {/* Quick Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
            >
              ← Back
            </button>
            <button
              onClick={() => navigate('/main-category/ALL%20AI%20TOOLS')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-purple-900/40 text-purple-300 border border-purple-500/30 hover:border-purple-400/60 hover:text-purple-200 transition-all duration-200"
            >
              🌐 All Tools
            </button>
          </div>

          {/* Category Header */}
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">{mainCategory.emoji}</div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
              {decodedCategoryName}
            </h1>
            <p className="text-base text-gray-300 mb-4 max-w-xl mx-auto">
              {mainCategory.description}
            </p>
          </div>

          {/* Main Search Bar */}
          <div className="max-w-xl mx-auto mb-6">
            <GlobalSearchBar />
          </div>

          {/* Skeleton Grid - appears instantly while tools load */}
          {showToolsLoading ? (
            <ToolsGridSkeleton count={12} />
          ) : (
            <>
              {/* Category Filter Component */}
              <MainCategoryFilter
                tools={categoryTools}
                onFilteredToolsChange={handleFilteredToolsChange}
                currentMainCategory={decodedCategoryName}
              />

              {/* Tools Count Display - Shows actual filtered count */}
              <div className="text-center mb-8">
                <div className="text-cyan-400 font-semibold">
                  {toolsToShow.length > 0 ? (
                    displayedCount >= toolsToShow.length 
                      ? `Showing all ${toolsToShow.length} filtered tools + recommendations`
                      : `Showing ${Math.min(displayedCount, toolsToShow.length)} of ${toolsToShow.length} filtered tools — scroll for more`
                  ) : (
                    "No tools found"
                  )}
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
                    filteredToolsCount={toolsToShow.length}
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
            </>
          )}
        </main>
        
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default MainCategoryPage;
