
import { useState, useEffect } from "react";
import { useVideoManager } from "@/hooks/useVideoManager";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryPageSelection from "@/components/CategoryPageSelection";
import SpecialServices from "@/components/SpecialServices";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ui/scroll-to-top";
import SEOHead from "@/components/SEOHead";
import ToolsGrid from "@/components/tools/ToolsGrid";
import { Button } from "@/components/ui/button";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { allTools } from "@/data/toolsData";

const Index = () => {
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  const [showAllTools, setShowAllTools] = useState(false);
  const [allToolsDisplayedCount, setAllToolsDisplayedCount] = useState(24);
  const [isLoading, setIsLoading] = useState(false);
  
  // Use video manager for main page video
  const mainVideoRef = useVideoManager('main-page-video');

  useEffect(() => {
    // Simple tool count
    const stats = getCurrentToolCount();
    setToolStats(stats);
  }, []);

  const handleSeeMoreAITools = () => {
    setShowAllTools(true);
    setAllToolsDisplayedCount(24);
    // Simple scroll
    setTimeout(() => {
      const toolsSection = document.getElementById('all-tools-section');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleAllToolsLoadMore = () => {
    if (isLoading || allToolsDisplayedCount >= allTools.length) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setAllToolsDisplayedCount(prev => Math.min(prev + 24, allTools.length));
      setIsLoading(false);
    }, 200);
  };

  const hasMoreTools = allToolsDisplayedCount < allTools.length;

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <SEOHead
        title={`AI Tools Directory - ${toolStats.marketing} Best AI Tools 2025 | Free AI Web Tools`}
        description={`Discover ${toolStats.marketing} cutting-edge AI tools for business, creativity, and productivity.`}
        keywords={[
          "ai tools directory",
          "artificial intelligence tools",
          "ai tools 2025",
          "free ai tools",
          "ai assistants"
        ]}
        includeFAQ={true}
        includeLocalBusiness={true}
      />
      
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <div id="categories-section">
          <CategoryPageSelection />
        </div>
        
        {/* Featured Video Section - Simplified */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-cyan-400">AI TOOLS THAT BEND THE FABRIC OF TIME...LITERALLY</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  ref={mainVideoRef}
                  className="absolute top-0 left-0 w-full h-full rounded-xl border border-cyan-500/30"
                  src="https://www.youtube.com/embed/drUyFiVayaw?autoplay=1&mute=0&controls=1&rel=0&loop=1&playlist=drUyFiVayaw&hd=1&vq=hd1080&enablejsapi=1&origin=${window.location.origin}&playsinline=1&modestbranding=1&autohide=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark"
                  title="AI Web Tools Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="eager"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* SEE MORE AI TOOLS Button */}
        {!showAllTools && (
          <div className="text-center py-12 px-4 bg-gradient-to-br from-slate-900 to-purple-900">
            <Button
              onClick={handleSeeMoreAITools}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg"
            >
              🚀 SEE MORE AI TOOLS
            </Button>
            <div className="mt-4 text-cyan-300 text-sm">
              Explore our collection of {allTools.length}+ AI tools
            </div>
          </div>
        )}

        {/* All Tools Section - Simplified */}
        {showAllTools && (
          <div id="all-tools-section" className="py-16 bg-gradient-to-br from-slate-900 to-purple-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  🚀 <span className="text-cyan-400">ALL AI TOOLS COLLECTION</span>
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
                hasInfiniteScroll={false}
                isLoading={isLoading}
              />

              {/* Load More Button */}
              {hasMoreTools && (
                <div className="text-center mt-8">
                  <Button
                    onClick={handleAllToolsLoadMore}
                    disabled={isLoading}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2"
                  >
                    {isLoading ? "Loading..." : "Load More Tools"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
        
        <SpecialServices />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
