
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedTools from "@/components/FeaturedTools";
import SpecialServices from "@/components/SpecialServices";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10 cyber-grid">
        <Header />
        <HeroSection />
        <FeaturedTools />
        <SpecialServices />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
