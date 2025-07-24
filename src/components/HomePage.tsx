
import { useEffect } from "react";
import { useFeaturedToolsState } from "@/hooks/useFeaturedToolsState";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ui/scroll-to-top";
import EnhancedSEOHead from "@/components/seo/EnhancedSEOHead";
import CategoryFilters from "@/components/tools/CategoryFilters";
import ToolsGrid from "@/components/tools/ToolsGrid";
import { runFullToolVerification } from "@/utils/toolIndexing";
import { searchTools } from "@/utils/searchUtils";

const HomePage = () => {
  const {
    selectedCategory,
    searchTerm,
    displayedCount,
    isLoading,
    setDisplayedCount,
    setIsLoading,
    handleCategoryChange,
    handleSearchChange,
    filteredTools,
    totalToolsCount,
    categoriesWithCounts,
    hasMoreTools
  } = useFeaturedToolsState();

  // Run tool verification on homepage load for SEO optimization
  useEffect(() => {
    runFullToolVerification(searchTools);
  }, []);

  const handleLoadMore = () => {
    if (isLoading || !hasMoreTools) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedCount(prev => prev + 60);
      setIsLoading(false);
    }, 100);
  };

  const displayedTools = filteredTools.slice(0, displayedCount);

  // Convert categoriesWithCounts to the format expected by CategoryFilters
  const categoriesRecord = categoriesWithCounts.reduce((acc, cat) => {
    acc[cat.name] = cat.count;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <EnhancedSEOHead 
        pageType="homepage"
        description="🏆 #1 AI Tools Directory with 1000+ verified tools. Better than Toolify, Futurepedia & competitors. Expert reviews, ratings & guides. Trusted by 100K+ professionals. Find ChatGPT alternatives & top AI tools 2025."
        keywords={[
          "AI WEB TOOLS",
          "best AI tools directory 2025",
          "better than toolify",
          "comprehensive AI tools",
          "verified AI directory",
          "top AI tools ranking",
          "ChatGPT alternatives",
          "professional AI tools"
        ]}
      />
      
      <AnimatedBackground />
      
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section - SEO Optimized */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
              AI WEB TOOLS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              🏆 The World's #1 AI Tools Directory - Better Than Toolify
            </p>
            <div className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              <p className="mb-4">
                Discover 1000+ verified AI tools with expert reviews, detailed ratings, and comprehensive guides. 
                Trusted by 100K+ professionals worldwide for finding the best AI solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-cyan-500/20 px-3 py-1 rounded-full">✅ 1000+ Verified Tools</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full">🏆 Expert Reviews</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full">⭐ User Ratings</span>
                <span className="bg-blue-500/20 px-3 py-1 rounded-full">🔄 Daily Updates</span>
              </div>
            </div>
          </div>

          {/* Category Filters with Search */}
          <CategoryFilters
            categoriesWithCounts={categoriesRecord}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            onSearchChange={handleSearchChange}
            searchTerm={searchTerm}
          />

          {/* Tools Count Display */}
          <div className="text-center mb-8">
            <div className="text-cyan-400 font-semibold text-lg">
              {searchTerm ? (
                `${totalToolsCount} AI tools found for "${searchTerm}"`
              ) : selectedCategory ? (
                `${totalToolsCount} tools in ${selectedCategory}`
              ) : (
                `Discover ${totalToolsCount}+ curated AI tools`
              )}
            </div>
            {!searchTerm && !selectedCategory && (
              <div className="text-gray-400 text-sm mt-1">
                Featuring the best AI tools, ChatGPT alternatives, and cutting-edge artificial intelligence solutions
              </div>
            )}
          </div>

          {/* Tools Grid */}
          <div id="tools-section">
            {displayedTools.length > 0 ? (
              <ToolsGrid
                tools={filteredTools}
                displayedCount={displayedCount}
                selectedCategory={selectedCategory}
                searchTerm={searchTerm}
                onLoadMore={handleLoadMore}
                hasInfiniteScroll={true}
                isLoading={isLoading}
              />
            ) : (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-cyan-100 mb-4">No AI tools found</h3>
                <p className="text-gray-300 mb-8">
                  {searchTerm 
                    ? `No AI tools found for "${searchTerm}". Try a different search term.`
                    : selectedCategory
                    ? `No tools found in the ${selectedCategory} category.`
                    : "No tools available at the moment."
                  }
                </p>
              </div>
            )}
          </div>

          {/* SEO Content Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Why AI WEB TOOLS is the #1 AI Directory
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">🏆 Better Than Competitors</h3>
                  <p>More comprehensive than Toolify, Futurepedia, or any other AI directory. We provide verified tools with detailed expert analysis.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">✅ Expert Curation</h3>
                  <p>Every AI tool is manually reviewed, tested, and rated by our expert team. No automated listings or spam.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">🔄 Always Updated</h3>
                  <p>Daily updates with the latest AI innovations. Be first to discover breakthrough artificial intelligence tools.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">👥 Trusted Community</h3>
                  <p>Used by 100K+ professionals, developers, creators, and businesses worldwide for AI tool discovery.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
