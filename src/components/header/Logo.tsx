
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";

const Logo = () => {
  const navigate = useNavigate();

  const scrollToHome = () => {
    // If we're already on the home page, just scroll to top instantly
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page quickly
      navigate('/');
    }
  };

  // Enhanced external link handler with time portal effect
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in header:', url);
    createTimePortalEffect(url);
  };

  return (
    <div className="flex items-center gap-4 flex-shrink-0">
      <div className="text-left flex-1">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent glow-text-effect hover:scale-105 transition-transform duration-300">
            AiTools.Studio
          </div>
          <span className="text-xs text-cyan-200/70 font-medium hidden sm:block">
            An AI Tools Directory
          </span>
        </div>
        <div className="text-xs text-gray-400 mt-0.5">
          by{" "}
          <button 
            onClick={(e) => handleExternalLink("https://www.aiwebtools.ai", e)}
            className="text-cyan-400 hover:text-cyan-300 transition-all duration-200 hover:glow-text-effect"
          >
            Aiwebtools.ai
          </button>
          <span className="ml-1 text-cyan-200/50 font-light">An AI Tools Company</span>
        </div>
      </div>
      <button
        onClick={scrollToHome}
        className="p-3 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-110 flex-shrink-0 interactive-button"
        title="Go to Home"
      >
        <Home className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default Logo;
