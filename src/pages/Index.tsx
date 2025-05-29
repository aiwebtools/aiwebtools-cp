
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
        title="1000+ AI Tools Directory - Free AI Web Tools Collection 2025"
        description="Discover the world's largest collection of 1000+ AI-powered tools. Find AI tools for business, creativity, productivity, design, video, audio, and more. Free access to the best AI tools of 2025 including ChatGPT alternatives, AI assistants, and automation tools."
        keywords={[
          ...seoConfig.keywords,
          "AI tools directory 2025",
          "free AI tools collection",
          "best AI tools list",
          "artificial intelligence software",
          "AI productivity suite",
          "enterprise AI tools",
          "AI automation platform",
          "machine learning tools",
          "AI development tools",
          "business intelligence AI",
          "creative AI tools",
          "AI content creation",
          "video AI tools",
          "audio AI generators",
          "image AI tools",
          "writing AI assistants"
        ]}
        structuredData={structuredData}
        includeFAQ={true}
      />
      
      <AnimatedBackground />
      <div className="relative z-10 cyber-grid">
        <Header />
        <div className="pt-20">
          <HeroSection />
          <div className="featured-tools-transparent" id="tools-section">
            <FeaturedTools />
          </div>
          <div className="container mx-auto px-4 pb-8">
            <InspirationMessage />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
