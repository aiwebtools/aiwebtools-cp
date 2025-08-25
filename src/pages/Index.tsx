
import { useState, useEffect, lazy, Suspense } from "react";
import { useVideoManager } from "@/hooks/useVideoManager";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ui/scroll-to-top";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Zap, Rocket } from "lucide-react";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { allTools } from "@/data/toolsData";
import { preloadCriticalResources, usePerformanceMonitoring, optimizeCSS } from "@/utils/performanceOptimizations";

// Lazy load heavy components for better initial load performance
const CategoryPageSelection = lazy(() => import("@/components/CategoryPageSelection"));
const FeaturedToolsSection = lazy(() => import("@/components/tools/FeaturedToolsSection"));
const SpecialServices = lazy(() => import("@/components/SpecialServices"));
const BookPromotionCard = lazy(() => import("@/components/BookPromotionCard"));

const Index = () => {
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  const [showComponents, setShowComponents] = useState(false);
  
  // Use video manager for main page video
  const mainVideoRef = useVideoManager('main-page-video');
  
  // Performance monitoring and optimizations
  usePerformanceMonitoring();

  useEffect(() => {
    // Preload critical resources immediately
    preloadCriticalResources();
    
    // Optimize CSS
    optimizeCSS();
    
    // Simple tool count
    const stats = getCurrentToolCount();
    setToolStats(stats);
    
    // Use requestIdleCallback for non-critical components
    const loadComponents = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          setShowComponents(true);
        }, { timeout: 200 });
      } else {
        setTimeout(() => {
          setShowComponents(true);
        }, 100);
      }
    };
    
    loadComponents();
  }, []);

  const handleSeeMoreAITools = () => {
    // This function can be removed since FeaturedToolsSection handles it
  };

  // Optimized loading fallback component
  const LoadingFallback = () => (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
    </div>
  );

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
          {showComponents ? (
            <Suspense fallback={<LoadingFallback />}>
              <CategoryPageSelection />
            </Suspense>
          ) : (
            <LoadingFallback />
          )}
        </div>
        
        {/* Featured Video Section - Optimized for loading */}
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
                  src="https://www.youtube.com/embed/4zflGSSuBcA?autoplay=0&mute=0&loop=1&playlist=4zflGSSuBcA&controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark&quality=hd720"
                  title="AI Web Tools Featured Video"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Clone Website Button */}
            <div className="text-center mt-12">
              <button
                onClick={() => window.open('https://lovable.dev', '_blank')}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-400/50 transform hover:scale-105 transition-all duration-300 border border-purple-400/50 hover:border-purple-300"
              >
                <span className="flex items-center space-x-3">
                  <Zap className="w-6 h-6" />
                  <span>Clone This Website</span>
                  <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Featured Tools Section - Lazy loaded */}
        {showComponents && (
          <Suspense fallback={<LoadingFallback />}>
            <FeaturedToolsSection onToolsLoaded={(count) => console.log(`Featured tools loaded: ${count}`)} />
          </Suspense>
        )}
        
        {/* Additional sections - Lazy loaded */}
        {showComponents && (
          <Suspense fallback={<LoadingFallback />}>
            <BookPromotionCard />
            <SpecialServices />
          </Suspense>
        )}
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
