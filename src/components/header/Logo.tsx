
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";

const Logo = ({ compact = false }: { compact?: boolean }) => {
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
    <div className={`flex items-center gap-1 md:gap-2 flex-shrink min-w-0 relative z-[110] ${compact ? 'scale-75' : ''}`}>
      <div className="text-left flex-1 min-w-0 overflow-hidden">
        <div className={`flex items-center gap-1 md:gap-2 ${compact ? 'mb-0' : 'mb-0.5 md:mb-1'}`}>
          <div className={`font-bold ${compact ? 'text-base' : 'text-sm sm:text-lg md:text-xl'} tracking-wider letter-spacing-wide relative truncate`}>
            <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent logo-text-crisp">AI WEB TOOLS</span>
            <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent logo-text-crisp hidden sm:inline"> - AITOOLS.STUDIO</span>
          </div>
          {!compact && (
            <span className="text-xs text-cyan-200/80 font-medium hidden lg:block tracking-wide">
              AN AI TOOLS DIRECTORY
            </span>
          )}
        </div>
        {!compact && (
          <>
            <div className="text-[10px] md:text-xs text-gray-300 -mt-0.5 md:-mt-1 hidden sm:block">
              <span className="text-cyan-200/60 font-light tracking-wider">AN AI TOOLS COMPANY</span>
            </div>
            <div className="text-[10px] md:text-xs text-gray-400 mt-0 md:mt-0.5 hidden sm:block">
              BY{" "}
              <button 
                onClick={(e) => handleExternalLink("https://www.aiwebtools.ai", e)}
                className="text-cyan-400 hover:text-cyan-300 transition-all duration-200 hover:text-shadow-glow font-medium tracking-wide"
              >
                AIWEBTOOLS.AI
              </button>
            </div>
          </>
        )}
      </div>
      <button
        onClick={scrollToHome}
        className={`${compact ? 'p-1.5' : 'p-2 md:p-3'} rounded-lg md:rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 hover:scale-110 flex-shrink-0 interactive-button glow-effect relative z-10`}
        title="Go to Home"
        aria-label="Home"
      >
        <Home className={`${compact ? 'w-3 h-3' : 'w-4 h-4 md:w-5 md:h-5'} text-white drop-shadow-lg`} />
      </button>
    </div>
  );
};

export default Logo;
