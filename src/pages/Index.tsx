
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedTools from "@/components/FeaturedTools";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import InspirationMessage from "@/components/tools/InspirationMessage";
import SEOHead from "@/components/SEOHead";
import { generateStructuredData, seoConfig } from "@/utils/seo";

const Index = () => {
  const structuredData = generateStructuredData('homepage');

  return (
    <div className="min-h-screen bg-black relative">
      <SEOHead
        title="1000+ AI Tools Directory - Free AI Web Tools Collection"
        description="Discover the world's largest collection of 1000+ AI-powered tools. Find AI tools for business, creativity, productivity, design, video, audio, and more. Free access to the best AI tools of 2025."
        keywords={[
          ...seoConfig.keywords,
          "AI tools directory",
          "free AI tools",
          "AI tools collection",
          "best AI tools 2025",
          "AI tools list",
          "artificial intelligence tools",
          "AI productivity tools",
          "AI business tools"
        ]}
        structuredData={structuredData}
      />
      
      <AnimatedBackground />
      <div className="relative z-10 cyber-grid">
        <Header />
        <div className="pt-20">
          <HeroSection />
          <div className="featured-tools-transparent" id="tools-section">
            <FeaturedTools />
          </div>
          <Footer />
          <div className="container mx-auto px-4 pb-8">
            <InspirationMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
