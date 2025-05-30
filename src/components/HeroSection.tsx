
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Globe, Shield } from "lucide-react";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";

const HeroSection = () => {
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });

  useEffect(() => {
    const stats = getCurrentToolCount();
    setToolStats(stats);
  }, []);

  const scrollToTools = () => {
    const toolsSection = document.getElementById('categories-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in hero:', url);
    createTimePortalEffect(url);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-300 font-medium">World's Largest AI Tools Directory</span>
          <Zap className="w-4 h-4 text-purple-400" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
          Discover the Future<br />
          <span className="text-white">of AI Tools</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Your gateway to {toolStats.marketing} cutting-edge AI tools. Find the perfect AI solution for your business, creativity, and productivity needs.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{toolStats.marketing}</div>
            <div className="text-sm text-gray-300">AI Tools</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">{toolStats.categories}+</div>
            <div className="text-sm text-gray-300">Categories</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-sm text-gray-300">Free Access</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6">
            <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Available</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={scrollToTools}
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
          >
            Explore AI Tools
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            onClick={(e) => handleExternalLink("https://aitools.company/hire-us-to-build-your-ai-1", e)}
            variant="outline" 
            size="lg"
            className="border-2 border-purple-500/50 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Globe className="mr-2 w-5 h-5" />
            Get Custom AI
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span>Curated & Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Updated Daily</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-400" />
            <span>Global Community</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
