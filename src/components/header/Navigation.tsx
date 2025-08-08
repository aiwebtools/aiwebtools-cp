
import { Phone, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Navigation = () => {
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

  const handleBrowseAITools = () => {
    // Navigate to ALL AI TOOLS main category page
    navigate('/main-category/ALL%20AI%20TOOLS');
  };

  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in navigation:', url);
    createTimePortalEffect(url);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-6 min-w-0">
      <button 
        onClick={scrollToHome}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        Home
      </button>
      
      <button 
        onClick={handleBrowseAITools}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        🎯 Browse AI Tools
      </button>

      <button 
        onClick={(e) => handleExternalLink("https://www.aitools.company", e)}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        ABOUT AI WEB TOOLS LLC
      </button>

      <Popover>
        <PopoverTrigger asChild>
          <button 
            className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer flex items-center space-x-1"
          >
            <Globe className="w-4 h-4" />
            <span>Register WEB3 Domains</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80 max-h-[70vh] overflow-y-auto" align="end" side="bottom" collisionPadding={16}>
          <Accordion type="single" collapsible defaultValue="domains">
            <AccordionItem value="domains">
              <AccordionTrigger className="text-sm">Register your WEB3 Domain</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 max-h-64 overflow-y-auto pr-1">
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/.aiwebtools?ref=olive-ears-obey", e)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
                  >
                    🤖 .aiwebtools
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/worldpeace?ref=olive-ears-obey", e)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
                  >
                    🕊️ .worldpeace
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/aimainframe?ref=olive-ears-obey", e)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
                  >
                    🗄️ .aimainframe
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/.worldtrader?ref=olive-ears-obey", e)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
                  >
                    💹 .worldtrader
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/robotstore?ref=olive-ears-obey", e)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
                  >
                    🛒 .robotstore
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/robotsales?ref=olive-ears-obey", e)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
                  >
                    🦾 .robotsales
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/aitoolscompany?ref=olive-ears-obey", e)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
                  >
                    🏢 .aitoolscompany
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PopoverContent>
      </Popover>
      
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
