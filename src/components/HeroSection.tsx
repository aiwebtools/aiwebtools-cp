
import { useState, useEffect, useMemo, useCallback } from "react";
import { Search, Sparkles, Zap, Brain, Rocket, Stars } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GlobalSearchBar from "./GlobalSearchBar";
import { getCurrentToolCount } from "@/utils/toolCounter";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(0);
  
  // Memoize static data to prevent unnecessary recalculations
  const words = useMemo(() => [
    "Transform",
    "Empower", 
    "Revolutionize",
    "Accelerate",
    "Enhance",
    "Elevate"
  ], []);

  // Memoize tool stats to prevent frequent API calls
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [words.length]);

  // Memoize scroll function to prevent recreation on every render
  const scrollToTools = useCallback(() => {
    // Optimized scroll function with requestAnimationFrame for smooth scrolling
    const performScroll = () => {
      const toolsGrid = document.querySelector('[class*="grid"][class*="grid-cols-1"][class*="md:grid-cols-2"][class*="lg:grid-cols-4"]');
      
      if (toolsGrid) {
        const yOffset = -100;
        const y = toolsGrid.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else {
        const toolsSection = document.getElementById('tools-section');
        if (toolsSection) {
          toolsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }
      }
    };

    requestAnimationFrame(performScroll);
  }, []);

  // Memoize feature cards to prevent unnecessary re-renders
  const featureCards = useMemo(() => [
    {
      icon: Brain,
      title: "Smart Tools. Real Results.",
      description: "From idea to execution — unlock AI that helps you create faster, think bigger, and work smarter. Built for builders, dreamers, and doers."
    },
    {
      icon: Zap,
      title: "Instant Access. No Gatekeeping.",
      description: "Dive right in. Most tools are totally free and ready to use — no signups, no strings. Some premium tools are here too (not ours), if you want to explore even further."
    },
    {
      icon: Rocket,
      title: "Reimagine What You Can Do.",
      description: "Whether you're designing, writing, learning, or launching something big — AIWebTools.ai gives you the edge. The future's already here. Plug in."
    }
  ], []);

  // Memoize stats to prevent unnecessary re-renders
  const statsData = useMemo(() => [
    { value: toolStats.marketing, label: "AI Tools" },
    { value: `${toolStats.categories}+`, label: "Categories" },
    { value: "100%", label: "Free Access" },
    { value: "24/7", label: "Available" }
  ], [toolStats]);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden pt-48 sm:pt-40 md:pt-36">
      {/* Optimized background elements with reduced complexity */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl animate-pulse will-change-[opacity]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl animate-pulse delay-1000 will-change-[opacity]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/4 to-blue-500/4 rounded-full blur-3xl animate-spin-slow will-change-[transform]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Optimized main heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight will-change-auto">
            <span className="text-white block mb-4">
              WELCOME TO THE WORLD OF
            </span>
            
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow block mb-6">
              AI WEB TOOLS
            </span>
            
            <span className="text-3xl md:text-4xl lg:text-5xl text-white block">
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow will-change-auto">
                {words[currentWord]}
              </span>
              <span className="ml-4">Work & Life</span>
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse will-change-[opacity]" />
            <p className="text-lg md:text-xl text-cyan-100 max-w-4xl leading-relaxed">
              Discover vast AI tools that empower everyone to transform their work and life with cutting-edge artificial intelligence
            </p>
            <Stars className="w-8 h-8 text-cyan-400 animate-pulse will-change-[opacity]" />
          </div>
        </div>

        {/* Optimized search section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <GlobalSearchBar />
        </div>

        {/* Optimized feature highlights with memoized cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {featureCards.map(({ icon: Icon, title, description }, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 cyber-glow will-change-[border-color]"
            >
              <Icon className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-cyan-200">{description}</p>
            </div>
          ))}
        </div>

        {/* Optimized CTA Button */}
        <button
          onClick={scrollToTools}
          className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transform hover:scale-105 transition-all duration-300 border-2 border-cyan-400 hover:border-cyan-300 cyber-glow will-change-[transform,box-shadow]"
        >
          <span className="flex items-center space-x-3">
            <Search className="w-6 h-6" />
            <span>Explore AI Tools</span>
            <Sparkles className="w-6 h-6 group-hover:animate-spin will-change-[transform]" />
          </span>
        </button>

        {/* Optimized stats with memoized data */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {statsData.map(({ value, label }, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">{value}</div>
              <div className="text-cyan-200 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
