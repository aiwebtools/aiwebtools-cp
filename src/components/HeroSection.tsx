
import { useState, useEffect } from "react";
import { Search, Sparkles, Zap, Brain, Rocket, Stars } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GlobalSearchBar from "./GlobalSearchBar";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = [
    "Transform",
    "Empower", 
    "Revolutionize",
    "Accelerate",
    "Enhance",
    "Elevate"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToTools = () => {
    // Scroll to the actual tools grid, not the inspiration message
    const toolsSection = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback to tools-section if the grid is not found
      const fallbackSection = document.getElementById('tools-section');
      if (fallbackSection) {
        fallbackSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden pt-32 md:pt-36">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main heading with improved layout */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            {/* First line */}
            <span className="text-white block mb-4">
              WELCOME TO THE WORLD OF
            </span>
            
            {/* Second line - AI WEB TOOLS on its own line */}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow block mb-6">
              AI WEB TOOLS
            </span>
            
            {/* Third line with animated word */}
            <span className="text-3xl md:text-4xl lg:text-5xl text-white block">
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
                {words[currentWord]}
              </span>
              <span className="ml-4">Work & Life</span>
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
            <p className="text-lg md:text-xl text-cyan-100 max-w-4xl leading-relaxed">
              Discover vast AI tools that empower everyone to transform their work and life with cutting-edge artificial intelligence
            </p>
            <Stars className="w-8 h-8 text-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Search section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <GlobalSearchBar />
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 cyber-glow">
            <Brain className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Solutions</h3>
            <p className="text-cyan-200">Discover intelligent tools that automate, optimize, and enhance every aspect of your workflow</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 cyber-glow">
            <Zap className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Instant Access</h3>
            <p className="text-cyan-200">Access groundbreaking AI tools instantly - no barriers, completely free for everyone</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 cyber-glow">
            <Rocket className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Transform Everything</h3>
            <p className="text-cyan-200">From creativity to productivity, revolutionize how you work, learn, and create with AI</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToTools}
          className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transform hover:scale-105 transition-all duration-300 border-2 border-cyan-400 hover:border-cyan-300 cyber-glow"
        >
          <span className="flex items-center space-x-3">
            <Search className="w-6 h-6" />
            <span>Explore AI Tools</span>
            <Sparkles className="w-6 h-6 group-hover:animate-spin" />
          </span>
        </button>

        {/* Stats - updated to reflect new tool count */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">1100+</div>
            <div className="text-cyan-200 text-sm">AI Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">60+</div>
            <div className="text-cyan-200 text-sm">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">100%</div>
            <div className="text-cyan-200 text-sm">Free Access</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">24/7</div>
            <div className="text-cyan-200 text-sm">Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
