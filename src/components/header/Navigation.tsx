
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";

const Navigation = () => {
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

  const scrollToCategories = () => {
    // Navigate to home page and scroll to categories section
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const categoriesSection = document.getElementById('categories-section');
        if (categoriesSection) {
          categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const categoriesSection = document.getElementById('categories-section');
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in navigation:', url);
    createTimePortalEffect(url);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-6 flex-shrink-0">
      <button 
        onClick={scrollToHome}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        Home
      </button>
      
      <button 
        onClick={scrollToCategories}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        🎯 Browse AI Tools
      </button>

      <button 
        onClick={(e) => handleExternalLink("https://aitools.company/hire-us-to-build-your-ai-1", e)}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        More
      </button>
      
      <div className="flex items-center space-x-2 text-cyan-100 whitespace-nowrap">
        <Phone className="w-4 h-4" />
        <a 
          href="tel:+14758008096" 
          className="hover:text-cyan-400 transition-colors cursor-pointer"
        >
          475-800-8096
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
