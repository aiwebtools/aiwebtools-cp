
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedToolsSection from "@/components/tools/FeaturedToolsSection";
import SpecialServices from "@/components/SpecialServices";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import EnhancedSEOHead from "@/components/EnhancedSEOHead";
import { Button } from "@/components/ui/button";
import { runFullToolVerification } from "@/utils/toolIndexing";
import { searchTools } from "@/utils/searchUtils";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { generateStructuredData } from "@/utils/seo";

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

  const structuredData = generateStructuredData('homepage');

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <EnhancedSEOHead
        title={`AI WEB TOOLS LLC - Premium AI Tools Directory | ${toolStats.marketing} Best AI Tools 2025`}
        description={`🚀 Discover ${toolStats.marketing} cutting-edge AI tools for business automation, creative projects, and productivity enhancement. AI WEB TOOLS LLC provides the world's most comprehensive directory of artificial intelligence solutions. From AI assistants and image generators to business automation tools - find the perfect AI solution for your needs. Transform your work and life with the power of AI. Contact: 475-800-8096 | One World Drive, EARTH`}
        keywords={[
          "AI WEB TOOLS LLC",
          "ai tools directory 2025",
          "artificial intelligence tools",
          "business automation AI",
          "creative AI tools",
          "productivity AI solutions",
          "AI assistants directory",
          "AI image generators",
          "AI writing tools",
          "best AI tools 2025",
          "free AI tools",
          "premium AI software",
          "machine learning tools",
          "AI development platform",
          "enterprise AI solutions",
          "AI for business",
          "AI for creativity",
          "AI for productivity",
          "artificial intelligence directory",
          "AI tool reviews",
          "AI tool comparison",
          "AI software catalog",
          "AI technology solutions",
          "professional AI tools",
          "advanced AI platforms",
          "AI innovation tools",
          "next-generation AI",
          "AI transformation tools",
          "intelligent automation",
          "AI-powered solutions",
          "aitools.studio",
          "aiwebtools.ai",
          "Contact@ai-webtools.com",
          "475-800-8096"
        ]}
        structuredData={structuredData}
        includeFAQ={true}
        includeLocalBusiness={true}
        schemaType="WebPage"
        publishDate="2024-01-01T00:00:00Z"
        author="AI WEB TOOLS LLC"
        canonicalUrl="https://aitools.studio"
        breadcrumbs={[
          { name: "Home", url: "https://aitools.studio" },
          { name: "AI Tools Directory", url: "https://aitools.studio" }
        ]}
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
              onClick={triggerLoadMoreTools}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-12 py-6 rounded-xl text-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
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
