
import { useState, useEffect, lazy, Suspense } from "react";
import { useVideoManager } from "@/hooks/useVideoManager";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryPageSelection from "@/components/CategoryPageSelection";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ui/scroll-to-top";
import SEOHead from "@/components/SEOHead";
import { getCurrentToolCount } from "@/utils/toolCounter";

// Lazy load non-critical components for faster initial load
const FeaturedToolsSection = lazy(() => import("@/components/tools/FeaturedToolsSection"));
const SpecialServices = lazy(() => import("@/components/SpecialServices"));
const Footer = lazy(() => import("@/components/Footer"));
const BookPromotionCard = lazy(() => import("@/components/BookPromotionCard"));

const Index = () => {
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  
  // Use video manager for main page video
  const mainVideoRef = useVideoManager('main-page-video');

  useEffect(() => {
    // Simple tool count
    const stats = getCurrentToolCount();
    setToolStats(stats);
  }, []);

  const handleSeeMoreAITools = () => {
    // This function can be removed since FeaturedToolsSection handles it
  };

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
                  src="https://www.youtube.com/embed/4zflGSSuBcA?autoplay=1&mute=0&loop=1&playlist=4zflGSSuBcA&controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark&quality=hd720"
                  title="AI Web Tools Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools Section - This shows Soul Map GPT and all featured tools */}
        <Suspense fallback={
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
          </div>
        }>
          <FeaturedToolsSection onToolsLoaded={(count) => console.log(`Featured tools loaded: ${count}`)} />
        </Suspense>
        
        <Suspense fallback={<div className="h-32"></div>}>
          <BookPromotionCard />
        </Suspense>
        
        <Suspense fallback={<div className="h-64"></div>}>
          <SpecialServices />
        </Suspense>
        
        <ScrollToTop />
        
        <Suspense fallback={<div className="h-96"></div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
