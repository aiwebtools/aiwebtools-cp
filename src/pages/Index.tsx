
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedTools from "@/components/FeaturedTools";
import SpecialServices from "@/components/SpecialServices";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedTools />
      <SpecialServices />
      <Footer />
    </div>
  );
};

export default Index;
