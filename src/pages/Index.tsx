
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedToolsSection from "@/components/tools/FeaturedToolsSection";
import SpecialServices from "@/components/SpecialServices";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { runFullToolVerification } from "@/utils/toolIndexing";
import { searchTools } from "@/utils/searchUtils";
import { getCurrentToolCount } from "@/utils/toolCounter";

const Index = () => {
  const navigate = useNavigate();
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  const [toolsLoadedCount, setToolsLoadedCount] = useState(0);

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

  // Handle search from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
      const element = document.getElementById('tools-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleToolsLoaded = (count: number) => {
    setToolsLoadedCount(count);
  };

  const scrollToLoadMoreTools = () => {
    // Scroll to the tools section and trigger load more
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Trigger load more after a brief delay
      setTimeout(() => {
        const loadMoreButton = document.querySelector('[data-load-more-trigger]') as HTMLButtonElement;
        if (loadMoreButton) {
          loadMoreButton.click();
        }
      }, 500);
    }
  };

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
        <div id="tools-section">
          <FeaturedToolsSection onToolsLoaded={handleToolsLoaded} />
        </div>
        
        {/* Show More AI Tools Button - positioned above Premium AI Suites */}
        <div className="text-center py-16 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <Button
              onClick={scrollToLoadMoreTools}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-12 py-6 rounded-xl text-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              data-load-more-trigger
            >
              🚀 SHOW MORE AI TOOLS
            </Button>
            <div className="mt-4 text-cyan-300 text-lg">
              Discover more from our collection of {toolStats.marketing} AI tools
            </div>
          </div>
        </div>
        
        <SpecialServices />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
