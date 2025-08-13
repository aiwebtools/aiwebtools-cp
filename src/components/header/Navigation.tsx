
import { Phone, Globe, Trees, Clapperboard } from "lucide-react";
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
          <Accordion type="multiple" className="space-y-2">
            {/* Financial & Cash Transfer Domains */}
            <AccordionItem value="financial" className="border border-white/10 rounded-lg">
              <AccordionTrigger className="text-sm px-3 hover:no-underline">
                💰 Financial & Cash Transfer
              </AccordionTrigger>
              <AccordionContent className="px-3">
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/transfermoney", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">💸</span>
                    <span className="relative z-10 font-medium tracking-wide">.transfermoney</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/transfercoin", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">🪙</span>
                    <span className="relative z-10 font-medium tracking-wide">.transfercoin</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/cointransfer", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">💰</span>
                    <span className="relative z-10 font-medium tracking-wide">.cointransfer</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/transfercash", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">💵</span>
                    <span className="relative z-10 font-medium tracking-wide">.transfercash</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/cashtransfer", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">💴</span>
                    <span className="relative z-10 font-medium tracking-wide">.cashtransfer</span>
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* AI & Technology Domains */}
            <AccordionItem value="ai" className="border border-white/10 rounded-lg">
              <AccordionTrigger className="text-sm px-3 hover:no-underline">
                🤖 AI & Technology
              </AccordionTrigger>
              <AccordionContent className="px-3">
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/ai-tools?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">🧠</span>
                    <span className="relative z-10 font-medium tracking-wide">.ai-tools</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/.aiwebtools?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">🤖</span>
                    <span className="relative z-10 font-medium tracking-wide">.aiwebtools</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/aimainframe?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">🗄️</span>
                    <span className="relative z-10 font-medium tracking-wide">.aimainframe</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/aitoolscompany?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">🏢</span>
                    <span className="relative z-10 font-medium tracking-wide">.aitoolscompany</span>
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Robotics Domains */}
            <AccordionItem value="robotics" className="border border-white/10 rounded-lg">
              <AccordionTrigger className="text-sm px-3 hover:no-underline">
                🤖 Robotics & Automation
              </AccordionTrigger>
              <AccordionContent className="px-3">
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/robotsales?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">🦾</span>
                    <span className="relative z-10 font-medium tracking-wide">.robotsales</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/robotshop?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">🛍️</span>
                    <span className="relative z-10 font-medium tracking-wide">.robotshop</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/robotstore?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">🛒</span>
                    <span className="relative z-10 font-medium tracking-wide">.robotstore</span>
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Global & World Domains */}
            <AccordionItem value="global" className="border border-white/10 rounded-lg">
              <AccordionTrigger className="text-sm px-3 hover:no-underline">
                🌍 Global & World
              </AccordionTrigger>
              <AccordionContent className="px-3">
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/worldpeace?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">🕊️</span>
                    <span className="relative z-10 font-medium tracking-wide">.worldpeace</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrade?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">🌐</span>
                    <span className="relative z-10 font-medium tracking-wide">.worldtrade</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrader?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <span className="relative z-10 text-lg mr-6">💹</span>
                    <span className="relative z-10 font-medium tracking-wide">.worldtrader</span>
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PopoverContent>
      </Popover>
      
      <button 
        onClick={(e) => handleExternalLink('https://linktr.ee/aiwebtools', e)}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center"
        aria-label="AI Web Tools Linktree"
        title="Linktree"
      >
        <Trees className="w-4 h-4" />
      </button>
      
      <button 
        onClick={(e) => handleExternalLink('https://www.tiktok.com/@aiwebtools', e)}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center"
        aria-label="TikTok"
        title="TikTok"
      >
        <Clapperboard className="w-4 h-4" />
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
