
import { Phone, Globe, Trees, Clapperboard, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { useFavorites } from "@/hooks/useFavorites";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Navigation = () => {
  const navigate = useNavigate();
  const { getFavoritesCount } = useFavorites();

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
    <nav className="hidden lg:flex items-center space-x-3 min-w-0">
      <button 
        onClick={handleBrowseAITools}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer px-2 py-1 rounded text-sm"
      >
        🎯 Browse Tools
      </button>

      <Popover>
        <PopoverTrigger asChild>
          <button 
            className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer flex items-center space-x-1 px-2 py-1 rounded text-sm"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden xl:inline">Domains</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-96 max-h-[80vh] overflow-y-auto bg-black/95 border border-cyan-500/30 backdrop-blur-md z-[70]" align="end" side="bottom" collisionPadding={16}>
          <div className="mb-4 p-3 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-500/30">
            <h3 className="text-sm font-bold text-cyan-400 mb-2">🔗 Connect to Your Crypto Wallet</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Own forever • Resell for profit • Minted as NFT • Connect to wallet • Trade anytime
            </p>
          </div>
          <Accordion type="multiple" className="space-y-2">
            {/* AI & Technology Domains */}
            <AccordionItem value="ai" className="border border-white/10 rounded-lg">
              <AccordionTrigger className="text-sm px-3 hover:no-underline">
                🤖 AI & Technology
              </AccordionTrigger>
              <AccordionContent className="px-3">
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/ai-tools?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">🧠</span>
                      <span className="relative z-10 font-medium tracking-wide">.ai-tools</span>
                    </div>
                    <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/.aiwebtools?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">🤖</span>
                      <span className="relative z-10 font-medium tracking-wide">.aiwebtools</span>
                    </div>
                    <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PopoverContent>
      </Popover>
      
      <button 
        onClick={(e) => handleExternalLink('https://linktr.ee/aiwebtools', e)}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center px-2 py-1 rounded text-sm"
        aria-label="AI Web Tools Linktree"
        title="Linktree"
      >
        <Trees className="w-4 h-4" />
      </button>
      
      <button 
        onClick={() => navigate('/favorites')}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1 px-2 py-1 rounded text-sm"
      >
        <Heart className="h-4 w-4 fill-current text-red-500" />
        <span className="hidden xl:inline">({getFavoritesCount()})</span>
      </button>
    </nav>
  );
};

export default Navigation;
