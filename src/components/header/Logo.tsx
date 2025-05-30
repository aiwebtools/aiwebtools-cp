
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";

const Logo = () => {
  const navigate = useNavigate();

  const scrollToHome = () => {
    // If we're already on the home page, just scroll to top
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
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
        <h3 className="text-lg font-semibold text-cyan-300 mb-4 glow-text-effect">
          AI WEB TOOLS LLC
        </h3>
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
