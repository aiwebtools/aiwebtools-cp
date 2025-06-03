
import { useState, useEffect } from "react";
import { Search, Sparkles, Zap, Brain, Rocket, Stars } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GlobalSearchBar from "./GlobalSearchBar";
import { getCurrentToolCount } from "@/utils/toolCounter";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(0);
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  
  const words = [
    "Transform",
    "Empower", 
    "Revolutionize",
    "Accelerate",
    "Enhance",
    "Elevate"
  ];

  useEffect(() => {
    // Get accurate tool count
    const stats = getCurrentToolCount();
    setToolStats(stats);
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const handleExploreAITools = () => {
    // Navigate to ALL AI TOOLS main category page
    navigate('/main-category/ALL%20AI%20TOOLS');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden pt-20 md:pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main heading with stabilized layout */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {/* First line */}
            <span className="text-white block mb-3">
              AI WEB TOOLS
            </span>
            
            {/* Second line with animated word - fixed width container to prevent jumping */}
            <span className="text-3xl md:text-4xl lg:text-5xl text-white block">
              <span 
                className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow inline-block"
                style={{ 
                  minWidth: '280px', // Fixed width to contain longest word
                  textAlign: 'center'
                }}
              >
                {words[currentWord]}
              </span>
              <span className="ml-4">Work & Life</span>
            </span>
          </h1>
          
          {/* Updated tagline */}
          <div className="mb-6">
            <p className="text-sm md:text-base text-cyan-300/80 font-light italic tracking-wide">
              "Life is but a prompt" <span className="text-cyan-400/60">-Kenneth Bastian</span>
            </p>
          </div>
          
          {/* New tagline - made slightly smaller */}
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 rounded-full text-green-300 font-bold text-base md:text-lg animate-pulse cyber-glow">
              ✨ NEW AI TOOLS ADDED DAILY ✨
            </span>
          </div>
        </div>

        {/* Search section with stable positioning */}
        <div className="mb-8 max-w-4xl mx-auto" style={{ minHeight: '80px' }}>
          <GlobalSearchBar />
        </div>

        {/* CTA Button */}
        <button
          onClick={handleExploreAITools}
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transform hover:scale-105 transition-all duration-300 border-2 border-cyan-400 hover:border-cyan-300 cyber-glow mb-8"
        >
          <span className="flex items-center space-x-3">
            <Search className="w-6 h-6" />
            <span>Explore AI Tools</span>
            <Sparkles className="w-6 h-6 group-hover:animate-spin" />
          </span>
        </button>

        {/* Stats - updated with new verbiage */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">{toolStats.marketing}</div>
            <div className="text-cyan-200 text-sm">AI TOOLS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">100%</div>
            <div className="text-cyan-200 text-sm">Free AI Resource</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">24/7</div>
            <div className="text-cyan-200 text-sm">Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
