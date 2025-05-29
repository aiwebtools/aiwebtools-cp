
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedToolsSection from "@/components/tools/FeaturedToolsSection";
import SpecialServices from "@/components/SpecialServices";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import { runFullToolVerification } from "@/utils/toolIndexing";
import { searchTools } from "@/utils/searchUtils";
import { allTools } from "@/data/toolsData";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Run tool verification on app load to ensure everything is properly indexed
    console.log('🔍 Verifying all 700+ tools are properly indexed and searchable...');
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

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <SEOHead
        title="AI Tools Directory - 700+ Best AI Tools 2025 | Free AI Web Tools"
        description={`Discover 700+ cutting-edge AI tools for business, creativity, and productivity. Complete directory of AI assistants, image generators, writing tools, and more. Find the perfect AI solution for your needs.`}
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
          "ai software directory"
        ]}
        includeFAQ={true}
        includeLocalBusiness={true}
      />
      
      <AnimatedBackground />
      
      <div className="relative z-10 cyber-grid">
        <Header />
        <HeroSection />
        <div id="tools-section">
          <FeaturedToolsSection />
        </div>
        <SpecialServices />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
