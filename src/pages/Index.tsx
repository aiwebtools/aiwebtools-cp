import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryPageSelection from "@/components/CategoryPageSelection";
import SpecialServices from "@/components/SpecialServices";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import ToolsGrid from "@/components/tools/ToolsGrid";
import { Button } from "@/components/ui/button";
import { runFullToolVerification } from "@/utils/toolIndexing";
import { searchTools } from "@/utils/searchUtils";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { allTools } from "@/data/toolsData";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const Index = () => {
  const navigate = useNavigate();
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  const [showAllTools, setShowAllTools] = useState(false);
  const [allToolsDisplayedCount, setAllToolsDisplayedCount] = useState(24);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Get accurate tool count for SEO
    const stats = getCurrentToolCount();
    setToolStats(stats);
    
    // Run tool verification on app load to ensure everything is properly indexed
    console.log(`🔍 Verifying all ${stats.total} tools are properly indexed and searchable...`);
    const verificationResults = runFullToolVerification(searchTools);
    
    // Log critical information about tool accessibility
    console.log(`✅ Verified ${verificationResults.overallHealth.toolsIndexed} tools across ${verificationResults.overallHealth.categoriesAvailable} categories`);
    console.log(`📄 Generated ${verificationResults.overallHealth.pagesGenerated} individual tool pages`);
    
    if (verificationResults.overallHealth.toolsWithIssues > 0) {
      console.warn(`⚠️ Found ${verificationResults.overallHealth.toolsWithIssues} indexing issues - check console for details`);
    }
  }, []);

  // Handle search and category navigation from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const mainCategoryParam = urlParams.get('mainCategory');
    
    if (searchParam || mainCategoryParam) {
      const element = document.getElementById('categories-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

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

  const handleAllToolsLoadMore = () => {
    if (isLoading || allToolsDisplayedCount >= allTools.length) return;
    
    console.log(`🚀 Loading more tools: ${allToolsDisplayedCount} -> ${Math.min(allToolsDisplayedCount + 24, allTools.length)} of ${allTools.length}`);
    
    setIsLoading(true);
    setTimeout(() => {
      setAllToolsDisplayedCount(prev => Math.min(prev + 24, allTools.length));
      setIsLoading(false);
    }, 300);
  };

  // Setup infinite scroll for all tools
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false,
    displayedCount: allToolsDisplayedCount,
    totalTools: allTools.length,
    onLoadMore: handleAllToolsLoadMore,
    searchTerm: ""
  });

  const hasMoreTools = allToolsDisplayedCount < allTools.length;
  const showCompletionMessage = !hasMoreTools && !isLoading && allTools.length > 20;

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <SEOHead
        title={`AI Tools Directory - ${toolStats.marketing} Best AI Tools 2025 | Free AI Web Tools`}
        description={`Discover ${toolStats.marketing} cutting-edge AI tools for business, creativity, and productivity. Complete directory of AI assistants, image generators, writing tools, social media tools, and more. Find the perfect AI solution for your needs.`}
        keywords={[
          "ai tools directory",
          "artificial intelligence tools",
          "ai tools 2025",
          "free ai tools",
          "ai assistants",
          "ai image generators",
          "ai writing tools",
          "business ai tools",
          "creative ai tools",
          "productivity ai tools",
          "machine learning tools",
          "ai automation tools",
          "best ai tools",
          "ai software directory",
          "social media ai tools",
          "communication tools",
          "collaboration tools",
          "marketing ai tools"
        ]}
        includeFAQ={true}
        includeLocalBusiness={true}
      />
      
      <AnimatedBackground />
      
      <div className="relative z-10 cyber-grid">
        <Header />
        <HeroSection />
        <div id="categories-section">
          <CategoryPageSelection />
        </div>
        
        {/* Featured Video Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 cyber-glow">
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">AI TOOLS THAT BEND THE FABRIC OF TIME...LITERALLY</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl border border-cyan-500/30 shadow-2xl"
                  src="https://www.youtube.com/embed/drUyFiVayaw?mute=0&controls=1&rel=0&modestbranding=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1&color=red&theme=dark&playsinline=1&origin=https://aiwebtools.ai"
                  title="AI Web Tools Featured Video"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* SEE MORE AI TOOLS Button - positioned after Featured Video Section */}
        {!showAllTools && (
          <div className="text-center py-12 px-4 bg-gradient-to-br from-slate-900 to-purple-900">
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
        )}

        {/* All Tools Section with Infinite Scroll */}
        {showAllTools && (
          <div id="all-tools-section" className="py-16 bg-gradient-to-br from-slate-900 to-purple-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 cyber-glow">
                  🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">ALL AI TOOLS COLLECTION</span>
                </h3>
                <div className="text-cyan-400 font-semibold">
                  {allTools.length} total tools available
                </div>
              </div>

              <ToolsGrid
                tools={allTools}
                displayedCount={allToolsDisplayedCount}
                selectedCategory={null}
                searchTerm=""
                onLoadMore={handleAllToolsLoadMore}
                hasInfiniteScroll={true}
                isLoading={isLoading}
              />

              {/* Enhanced completion message */}
              {showCompletionMessage && (
                <div className="text-center mt-12 mb-16 px-4 text-cyan-300">
                  <div className="text-2xl mb-4">🎉</div>
                  <div className="text-lg font-semibold mb-4">
                    You've explored all {allTools.length} tools in our database!
                  </div>
                  <div className="text-sm opacity-80 mb-8">
                    Try searching or filtering by category to discover specific tools.
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        <SpecialServices />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
