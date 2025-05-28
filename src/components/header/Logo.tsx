
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="flex items-center space-x-4 flex-shrink-0">
      <div className="text-center">
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
          AITOOLS.STUDIO
        </div>
        <div className="text-xs md:text-sm text-gray-400">
          Presented by{" "}
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
          >
            AiWebTools.AI
          </a>
        </div>
      </div>
      <button
        onClick={scrollToHome}
        className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
        title="Go to Home"
      >
        <Home className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default Logo;
