
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

  const triggerLoadMoreTools = () => {
    // Find the load more button in the FeaturedTools component and click it
    const loadMoreButton = document.querySelector('[data-load-more-trigger]') as HTMLButtonElement;
    if (loadMoreButton && !loadMoreButton.disabled) {
      console.log('🎯 Triggering load more from Show More AI Tools button');
      loadMoreButton.click();
    } else {
      console.log('⚠️ Load more button not found or disabled - triggering scroll event');
      // Fallback: dispatch a custom event to trigger load more
      window.dispatchEvent(new CustomEvent('loadMoreTools'));
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
        
        <SpecialServices />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
