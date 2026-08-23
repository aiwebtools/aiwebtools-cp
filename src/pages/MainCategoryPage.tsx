
import { useState, useEffect, useMemo, useCallback, useTransition, lazy, Suspense } from "react";
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
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { Tool } from "@/types/tools";

const MainCategoryFilter = lazy(() => import("@/components/category/MainCategoryFilter"));

const MainCategoryPage = () => {
  const { mainCategoryName } = useParams<{ mainCategoryName: string }>();
  const navigate = useNavigate();
  
  // ALL HOOKS MUST BE DECLARED AT THE TOP - NO CONDITIONAL HOOKS
  const [displayedCount, setDisplayedCount] = useState(48);
  const [filteredToolsByCategory, setFilteredToolsByCategory] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isToolsReady, setIsToolsReady] = useState(false);
  const [categoryTools, setCategoryTools] = useState<Tool[]>([]);
  const [allCategoryTools, setAllCategoryTools] = useState<Tool[]>([]);
  const [isPending, startTransition] = useTransition();

  const decodedCategoryName = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  
  const mainCategory = useMemo(() => 
    mainCategories.find(cat => cat.name === decodedCategoryName), 
    [decodedCategoryName]
  );

  // Load category tools using precomputed cache first for INSTANT data
  useEffect(() => {
    if (!decodedCategoryName) return;
    let cancelled = false;

    // Reset state immediately - page renders instantly
    setIsToolsReady(false);
    setCategoryTools([]);
    setFilteredToolsByCategory([]);
    setDisplayedCount(48);

    // Special fast path for "ALL AI TOOLS" - just use allTools directly (no filtering needed)
    if (decodedCategoryName === "ALL AI TOOLS") {
      import("@/data/toolsData").then(({ allTools }) => {
        if (cancelled) return;
        setAllCategoryTools(allTools);
        setCategoryTools(allTools);
        setFilteredToolsByCategory(allTools);
        setIsToolsReady(true);
        console.log(`📂 Loaded ${allTools.length} tools for ALL AI TOOLS`);
      });
      return;
    }

    // This collection is already curated as a complete standalone batch. Load
    // it directly so the category paints immediately instead of waiting for
    // the full 5,000+ tool catalogue and every detector module to initialize.
    if (decodedCategoryName === "PERPLEXITY BOTS") {
      import("@/data/tools/perplexityBotsBatch2026")
        .then(({ perplexityBotsBatch2026 }) => {
          if (cancelled) return;
          setAllCategoryTools(perplexityBotsBatch2026);
          setCategoryTools(perplexityBotsBatch2026);
          setFilteredToolsByCategory(perplexityBotsBatch2026);
          setIsToolsReady(true);
        })
        .catch((error) => {
          if (cancelled) return;
          console.error("Failed to load Perplexity Bots", error);
          setIsToolsReady(true);
        });
      return;
    }

    // Fallback for other categories: lazy-load detector stack only after route paints.
    setTimeout(() => {
      Promise.all([
        import("@/data/toolsData"),
        import("@/utils/categoryUtils/toolFiltering"),
      ])
        .then(([{ allTools }, { getToolsByMainCategory }]) => {
          if (cancelled) return;
          startTransition(() => {
            setAllCategoryTools(allTools);
            const tools = getToolsByMainCategory(allTools, decodedCategoryName);
            console.log(`📂 Loaded ${tools.length} tools for category: ${decodedCategoryName}`);
            setCategoryTools(tools);
            setFilteredToolsByCategory(tools);
            setIsToolsReady(true);
          });
        })
        .catch((error) => {
          if (cancelled) return;
          console.error("Failed to load category tools", error);
          setIsToolsReady(true);
        });
    }, 0);

    return () => {
      cancelled = true;
    };
  }, [decodedCategoryName]);

  // Use filtered tools from category filter - this is the SOURCE OF TRUTH when filter is active
  const toolsToShow = filteredToolsByCategory;
  
  // Keep category pagination finite and stable. Recommendations previously
  // changed the source list as displayedCount grew, which could make a scroll
  // window appear to repeat cards and made the category count misleading.
  const finalFilteredTools = useMemo(() => {
    const seen = new Set<string>();
    return toolsToShow.filter((tool) => {
      const key = `${tool.title.toLowerCase().trim()}|||${tool.directUrl || ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [toolsToShow]);

  const displayedTools = useMemo(() => 
    finalFilteredTools.slice(0, displayedCount), 
    [finalFilteredTools, displayedCount]
  );

  // ALL EVENT HANDLERS - optimized for mobile
  const handleLoadMore = useCallback(() => {
    if (isLoading || displayedCount >= finalFilteredTools.length) return;
    
    setIsLoading(true);
    
    // INSTANT loading - no artificial delay needed
    requestAnimationFrame(() => {
      setDisplayedCount(prev => Math.min(prev + 48, finalFilteredTools.length));
      setIsLoading(false);
    });
  }, [isLoading, displayedCount, finalFilteredTools.length]);

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
  // A background filter transition must never replace an already-visible grid
  // with full-page skeletons. That unmount/remount cycle looked like a black
  // flicker on mobile and reset the virtual window during momentum scrolling.
  const showToolsLoading = !isToolsReady;

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
              {decodedCategoryName !== "ALL AI TOOLS" && (
                <Suspense fallback={null}>
                  <MainCategoryFilter
                    tools={categoryTools}
                    onFilteredToolsChange={handleFilteredToolsChange}
                    currentMainCategory={decodedCategoryName}
                  />
                </Suspense>
              )}

              {/* Tools Count Display - Shows actual filtered count */}
              <div className="text-center mb-8">
                <div className="text-cyan-400 font-semibold">
                  {toolsToShow.length > 0 ? (
                    displayedCount >= toolsToShow.length 
                      ? `Showing all ${toolsToShow.length} tools`
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
                    filteredToolsCount={0}
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
