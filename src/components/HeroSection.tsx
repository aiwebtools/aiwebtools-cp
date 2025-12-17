
import { useState, useEffect } from "react";
import { Search, Sparkles, Zap, Brain, Rocket, Stars } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GlobalSearchBar from "./GlobalSearchBar";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { useDeferredAnimation } from "@/hooks/useReducedMotion";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(0);
  const [showBrandName, setShowBrandName] = useState(false);
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  
  // Show animations immediately
  const animationsReady = useDeferredAnimation();
  
  const words = [
    "Find",
    "Discover", 
    "Access",
    "Explore",
    "Browse",
    "Search"
  ];

  useEffect(() => {
    // Get accurate tool count immediately
    const stats = getCurrentToolCount();
    setToolStats(stats);
  }, []);

  useEffect(() => {
    // Only start text animations after page has loaded
    if (!animationsReady) return;
    
    const brandInterval = setInterval(() => {
      setShowBrandName(prev => !prev);
    }, 4000);
    
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    
    return () => {
      clearInterval(brandInterval);
      clearInterval(wordInterval);
    };
  }, [animationsReady]);

  const handleExploreAITools = () => {
    navigate('/main-category/ALL%20AI%20TOOLS');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden pt-32 md:pt-36 lg:pt-40">
      {/* Animated background elements - deferred for faster initial load */}
      {animationsReady && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* SEO-optimized hidden H1 for search engines */}
        <h1 className="sr-only">AI Web Tools - The #1 AI Tools Directory with 2,195+ Best AI Web Tools for 2025</h1>
        
        {/* Main heading with stabilized layout */}
        <div className="mb-6">
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" role="heading" aria-level={2}>
            {/* First line - Animated between tool count and brand name */}
            <div className="relative h-20 md:h-24 lg:h-28 mb-3 flex items-center justify-center">
              <span 
                className={`absolute text-white hero-3d-text hero-stroke-text transition-all duration-1000 ease-in-out ${
                  showBrandName ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
                data-text={`${toolStats.marketing} TOOLS`}
              >
                {toolStats.marketing} TOOLS
              </span>
              <span 
                className={`absolute text-white hero-3d-glow hero-stroke-text transition-all duration-1000 ease-in-out ${
                  showBrandName ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
                data-text="AI WEB TOOLS"
              >
                AI WEB TOOLS
              </span>
            </div>
            
            {/* Second line with animated word - FIXED width container to prevent jumping */}
            <span className="text-3xl md:text-4xl lg:text-5xl text-white block">
              <span 
                className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent hero-animated-word hero-stroke-text inline-block transitioning-word"
                style={{ 
                  width: '220px', // Adjusted width for shorter words
                  textAlign: 'center',
                  display: 'inline-block'
                }}
                data-text={words[currentWord]}
              >
                {words[currentWord]}
              </span>
              <span className="ml-4 hero-3d-glow hero-stroke-text" data-text="& Compare">& Compare</span>
            </span>
          </div>
          
          {/* Clear value proposition subtitle */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-cyan-100 font-medium max-w-4xl mx-auto leading-relaxed hero-white-stroke">
              The largest directory of AI tools for productivity, creativity, and business. 
              <span className="text-cyan-400 font-semibold hero-white-stroke"> Find the perfect AI tool for any task.</span>
            </p>
          </div>
        </div>

        {/* Search section with stable positioning */}
        <div className="mb-8 max-w-4xl mx-auto" style={{ minHeight: '80px' }}>
          <GlobalSearchBar />
        </div>

        {/* Primary CTA Button */}
        <div className="mb-6">
          <button
            onClick={handleExploreAITools}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xl rounded-full shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transform hover:scale-105 transition-all duration-300 border-2 border-cyan-400 hover:border-cyan-300 cyber-glow"
          >
            <span className="flex items-center space-x-3">
              <Search className="w-7 h-7" />
              <span>Browse All {toolStats.marketing} AI Tools</span>
              <Sparkles className="w-7 h-7 group-hover:animate-spin" />
            </span>
          </button>
        </div>

        {/* Secondary CTA - Search hint */}
        <div className="mb-8">
          <p className="text-cyan-200/80 text-base">
            💡 Try searching: "ChatGPT", "image generator", "video editor", or any task
          </p>
        </div>

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
