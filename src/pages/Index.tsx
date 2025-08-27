
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
import GoogleRankingBooster from "@/components/seo/GoogleRankingBooster";
import LazyFeaturedTools from "@/components/LazyFeaturedTools";
import LazySearchPortal from "@/components/LazySearchPortal";
import { Button } from "@/components/ui/button";
import { getFastToolCount, updateCachedStats } from "@/utils/fastToolCounter";
import { getCurrentToolCount } from "@/utils/toolCounter";
import BookPromotionCard from "@/components/BookPromotionCard";

const Index = () => {
  // Use fast cached stats initially for better performance
  const [toolStats, setToolStats] = useState(getFastToolCount());
  
  // Use video manager for main page video
  const mainVideoRef = useVideoManager('main-page-video');

  useEffect(() => {
    // Load actual stats in background after page renders
    const timer = setTimeout(() => {
      const stats = getCurrentToolCount();
      setToolStats(stats);
      updateCachedStats(stats);
    }, 2000); // Delay to let page render first

    return () => clearTimeout(timer);
  }, []);

  const handleSeeMoreAITools = () => {
    // This function can be removed since FeaturedToolsSection handles it
  };

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <SEOHead
        title={`AI WEB TOOLS - #1 AI Tools Directory | ${toolStats.marketing} Best AI Tools 2025 | Better Than Toolify & Futurepedia`}
        description={`Discover ${toolStats.marketing}+ AI tools better than Toolify & Futurepedia. The world's #1 most comprehensive AI tools directory with expert reviews, ratings, and detailed analysis. Trusted by 100K+ professionals worldwide.`}
        keywords={[
          "aiwebtools", "aiwebtools.ai", "AI WEB TOOLS", "AI WEB TOOLS LLC", "aitools.studio",
          "best ai tools directory 2025", "ai tools better than toolify", "ai tools better than futurepedia",
          "comprehensive ai directory", "verified ai tools platform", "1000+ ai tools", "trusted ai collection",
          "free ai tools", "ai assistants", "chatgpt alternatives", "ai image generators", "ai writing tools"
        ]}
        includeFAQ={true}
        includeLocalBusiness={true}
      />
      <GoogleRankingBooster pageType="homepage" />
      
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <div id="categories-section">
          <CategoryPageSelection />
        </div>
        
        {/* Featured Video Section - Lazy loaded */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-cyan-400">AI TOOLS THAT BEND THE FABRIC OF TIME...LITERALLY</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="relative w-full aspect-video">
                <iframe
                  ref={mainVideoRef}
                  className="absolute inset-0 w-full h-full rounded-xl border border-cyan-500/30 bg-slate-800"
                  src="https://www.youtube.com/embed/4zflGSSuBcA?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&hd=1&vq=hd1080&loop=0"
                  title="AI Web Tools Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; autoplay"
                  allowFullScreen
                  loading="eager"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools Section - Lazy loaded for better performance */}
        <LazyFeaturedTools onToolsLoaded={(count) => console.log(`Featured tools loaded: ${count}`)} />
        
        <BookPromotionCard />
        <SpecialServices />
        
        {/* Bottom Search Portal - positioned below all featured tools */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-cyan-400">🔍 SEARCH ALL AI TOOLS</span>
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto mb-4">
                Explore our complete database of AI tools with advanced search and filtering
              </p>
            </div>
            
            {/* Search Portal Component - Lazy loaded */}
            <LazySearchPortal />
          </div>
        </section>
        
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
