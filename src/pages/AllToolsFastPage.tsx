import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ToolsGrid from "@/components/tools/ToolsGrid";
import ToolsGridSkeleton from "@/components/tools/ToolsGridSkeleton";
import GlobalSearchBar from "@/components/LazyGlobalSearchBar";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { Tool } from "@/types/tools";

const PAGE_TITLE = "ALL AI TOOLS";

const AllToolsFastPage = () => {
  const navigate = useNavigate();
  const [tools, setTools] = useState<Tool[]>([]);
  const [displayedCount, setDisplayedCount] = useState(48);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    let cancelled = false;
    window.scrollTo({ top: 0, behavior: "auto" });

    requestAnimationFrame(() => {
      import("@/data/toolsData")
        .then(({ allTools }) => {
          if (cancelled) return;
          setTools(allTools);
        })
        .catch((error) => {
          if (!cancelled) console.error("Failed to load all tools", error);
        });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const displayedTools = useMemo(() => tools.slice(0, displayedCount), [tools, displayedCount]);

  const handleLoadMore = useCallback(() => {
    if (isLoadingMore || displayedCount >= tools.length) return;
    setIsLoadingMore(true);
    requestAnimationFrame(() => {
      setDisplayedCount((count) => Math.min(count + 48, tools.length));
      setIsLoadingMore(false);
    });
  }, [displayedCount, isLoadingMore, tools.length]);

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <SEOHead
        title="ALL AI TOOLS - Complete AI Tools Directory"
        description="Browse the complete AIWebTools.ai directory of 4,000+ AI Tools, searchable and categorized for fast discovery."
        keywords={["all ai tools", "4,000+ AI Tools", "ai tools directory", "AIWebTools.ai"]}
      />

      <div className="relative z-10 cyber-grid">
        <Header />

        <main className="container mx-auto px-4 py-8 pt-32 md:pt-36 lg:pt-40">
          <BreadcrumbNav items={[{ label: PAGE_TITLE, emoji: "🌟" }]} className="mb-4" />

          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
            >
              ← Back
            </button>
          </div>

          <div className="text-center mb-6">
            <div className="text-5xl mb-3">🌟</div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
              {PAGE_TITLE}
            </h1>
            <p className="text-base text-gray-300 mb-4 max-w-xl mx-auto">
              Complete collection of all AI tools and platforms available in our directory.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-6">
            <GlobalSearchBar />
          </div>

          {tools.length === 0 ? (
            <ToolsGridSkeleton count={12} />
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="text-cyan-400 font-semibold">
                  Showing {displayedTools.length} of {tools.length} tools — scroll for more
                </div>
              </div>

              <div id="tools-section">
                <ToolsGrid
                  tools={tools}
                  displayedCount={displayedCount}
                  selectedCategory={PAGE_TITLE}
                  searchTerm=""
                  onLoadMore={handleLoadMore}
                  hasInfiniteScroll={true}
                  isLoading={isLoadingMore}
                  filteredToolsCount={tools.length}
                />
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

export default AllToolsFastPage;