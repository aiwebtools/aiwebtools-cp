
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryPageSelection from "@/components/CategoryPageSelection";
import SpecialServices from "@/components/SpecialServices";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import { runFullToolVerification } from "@/utils/toolIndexing";
import { searchTools } from "@/utils/searchUtils";
import { getCurrentToolCount } from "@/utils/toolCounter";

const Index = () => {
  const navigate = useNavigate();
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });

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
                🎬 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">FEATURED VIDEO</span>
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Discover the future of AI innovation and transformation
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl border border-cyan-500/30 shadow-2xl"
                  src="https://www.youtube.com/embed/drUyFiVayaw?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1&color=red&theme=dark&playsinline=1&origin=https://aiwebtools.ai"
                  title="AI Web Tools Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        
        <SpecialServices />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
