
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
        <PopoverContent className="w-96 max-h-[80vh] overflow-y-auto" align="end" side="bottom" collisionPadding={16}>
          <div className="mb-4 p-3 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-500/30">
            <h3 className="text-sm font-bold text-cyan-400 mb-2">🔗 Connect to Your Crypto Wallet</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Own forever • Resell for profit • Minted as NFT • Connect to wallet • Trade anytime
            </p>
          </div>
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
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">💸</span>
                      <span className="relative z-10 font-medium tracking-wide">.transfermoney</span>
                    </div>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/transfercoin", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">🪙</span>
                      <span className="relative z-10 font-medium tracking-wide">.transfercoin</span>
                    </div>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/cointransfer", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">💰</span>
                      <span className="relative z-10 font-medium tracking-wide">.cointransfer</span>
                    </div>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/transfercash", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">💵</span>
                      <span className="relative z-10 font-medium tracking-wide">.transfercash</span>
                    </div>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/cashtransfer", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">💴</span>
                      <span className="relative z-10 font-medium tracking-wide">.cashtransfer</span>
                    </div>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
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
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/aimainframe?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">🗄️</span>
                      <span className="relative z-10 font-medium tracking-wide">.aimainframe</span>
                    </div>
                    <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/aitoolscompany?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">🏢</span>
                      <span className="relative z-10 font-medium tracking-wide">.aitoolscompany</span>
                    </div>
                    <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
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
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">🦾</span>
                      <span className="relative z-10 font-medium tracking-wide">.robotsales</span>
                    </div>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/robotshop?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">🛍️</span>
                      <span className="relative z-10 font-medium tracking-wide">.robotshop</span>
                    </div>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/robotstore?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">🛒</span>
                      <span className="relative z-10 font-medium tracking-wide">.robotstore</span>
                    </div>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
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
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">🕊️</span>
                      <span className="relative z-10 font-medium tracking-wide">.worldpeace</span>
                    </div>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrade?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">🌐</span>
                      <span className="relative z-10 font-medium tracking-wide">.worldtrade</span>
                    </div>
                    <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrader?ref=olive-ears-obey", e)}
                    className="group relative w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
                  >
                    <div className="flex items-center">
                      <span className="relative z-10 text-lg mr-3">💹</span>
                      <span className="relative z-10 font-medium tracking-wide">.worldtrader</span>
                    </div>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
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

      <button 
        onClick={() => navigate('/favorites')}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
      >
        <Heart className="h-4 w-4 fill-current text-red-500" />
        Favorites ({getFavoritesCount()})
      </button>

      <button 
        onClick={() => navigate('/our-story')}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        📖 Our Story
      </button>
    </nav>
  );
};

export default Navigation;
