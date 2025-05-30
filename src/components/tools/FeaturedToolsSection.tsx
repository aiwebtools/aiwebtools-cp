
import FeaturedTools from "@/components/FeaturedTools";

interface FeaturedToolsSectionProps {
  onToolsLoaded?: (count: number) => void;
}

const FeaturedToolsSection = ({ onToolsLoaded }: FeaturedToolsSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 cyber-glow">
            🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">EXPLORE AI TOOLS</span>
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
            Discover cutting-edge AI tools that transform how you work, create, and innovate
          </p>
        </div>
        
        <FeaturedTools onToolsLoaded={onToolsLoaded} />
      </div>
    </section>
  );
};

export default FeaturedToolsSection;
