
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
    <div className="flex items-center space-x-2 flex-shrink-0">
      <div className="text-left">
        <div className="text-sm md:text-base font-bold bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent glow-text-effect">
          AiTools.Studio
        </div>
        <div className="text-xs text-gray-400 leading-tight -mt-0.5">
          presented by{" "}
          <button 
            onClick={(e) => handleExternalLink("https://www.aiwebtools.ai", e)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Aiwebtools.ai
          </button>
        </div>
      </div>
      <button
        onClick={scrollToHome}
        className="p-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 glow-effect"
        title="Go to Home"
      >
        <Home className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};

export default Logo;
