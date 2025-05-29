
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedTools from "@/components/FeaturedTools";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

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
        </div>
      </div>
    </div>
  );
};

export default Index;
