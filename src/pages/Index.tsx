
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedTools from "@/components/FeaturedTools";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import InspirationMessage from "@/components/tools/InspirationMessage";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10 cyber-grid">
        <Header />
        <div className="pt-20">
          <HeroSection />
          <div className="featured-tools-transparent">
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
