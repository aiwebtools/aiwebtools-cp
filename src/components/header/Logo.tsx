
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
    <div className="flex items-center gap-1 flex-shrink-0">
      <button
        onClick={scrollToHome}
        className="p-1 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 glow-effect flex-shrink-0"
        title="Go to Home"
      >
        <Home className="w-3 h-3 text-white" />
      </button>
      <div className="text-left min-w-0">
        <div className="text-xs md:text-sm font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent leading-tight">
          AiTools.Studio
        </div>
        <div className="text-[9px] md:text-xs text-gray-400 leading-none">
          by{" "}
          <button 
            onClick={(e) => handleExternalLink("https://www.aiwebtools.ai", e)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Aiwebtools.ai
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logo;
