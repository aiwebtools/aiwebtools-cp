
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
    <div className="flex items-center space-x-4 flex-shrink-0">
      <div className="text-center">
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent glow-text-effect animate-pulse">
          AITOOLS.STUDIO
        </div>
        <div className="text-xs text-gray-300 -mt-1">
          AI TOOL DIRECTORY
        </div>
        <div className="text-xs md:text-sm text-gray-400">
          Presented by{" "}
          <button 
            onClick={(e) => handleExternalLink("https://www.aitools.company", e)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
          >
            AIWEBTOOLS.AI
          </button>
        </div>
        <div className="text-xs text-gray-500">
          <button 
            onClick={(e) => handleExternalLink("https://www.aitools.company", e)}
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            An AiTools.Company
          </button>
        </div>
      </div>
      <button
        onClick={scrollToHome}
        className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 glow-effect"
        title="Go to Home"
      >
        <Home className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default Logo;
