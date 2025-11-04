import { Menu, Phone, Search, X, FileText, Globe, ChevronDown, Download, Trees, Clapperboard, Heart, Copy } from "lucide-react";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useFavorites } from "@/hooks/useFavorites";
import { allTools } from "@/data/toolsData";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { web3DomainsTools } from "@/data/tools/web3DomainsTools";
import Logo from "./Logo";
import GlobalSearchBar from "@/components/GlobalSearchBar";

const MobileMenu = () => {
  const navigate = useNavigate();
  
  // Safe hook usage with error handling
  let getFavoritesCount;
  try {
    const favoritesContext = useFavorites();
    getFavoritesCount = favoritesContext.getFavoritesCount;
  } catch (error) {
    console.warn('useFavorites hook not available in MobileMenu, using fallback');
    getFavoritesCount = () => 0;
  }
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWeb3Open, setIsWeb3Open] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Keep dropdown stable when search results appear
  useEffect(() => {
    if (dropdownRef.current && isMenuOpen) {
      // Lock scroll position when menu opens
      dropdownRef.current.scrollTop = 0;
    }
  }, [isMenuOpen]);

  const handleMenuToggle = useCallback((open: boolean) => {
    setIsMenuOpen(open);
  }, []);

  useEffect(() => {
    const stats = getCurrentToolCount();
    setToolStats(stats);
  }, []);

  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in mobile menu:', url);
    createTimePortalEffect(url);
    setIsMenuOpen(false);
  };

  const handleBrowseAITools = useCallback(() => {
    navigate('/main-category/ALL%20AI%20TOOLS');
    handleMenuToggle(false);
  }, [navigate, handleMenuToggle]);

  const closeMenu = useCallback(() => {
    handleMenuToggle(false);
  }, [handleMenuToggle]);

  // Enhanced CSV download with all comprehensive data fields
  const handleDownloadAllToolsCSV = () => {
    try {
      console.log(`📊 Generating comprehensive CSV with ${allTools.length} tools...`);
      
      const headers = [
        "Title", 
        "Category", 
        "URL", 
        "Description", 
        "Emoji", 
        "Tags", 
        "Rating", 
        "Total Votes",
        "Color Scheme",
        "Pricing"
      ];
      
      const rows = allTools.map((tool, index) => [
        tool.title || "",
        tool.category || "",
        tool.directUrl || "",
        tool.description || "",
        tool.emoji || "",
        (tool.tags || []).join("; "),
        tool.rating?.toString() || "",
        tool.totalVotes?.toString() || "",
        tool.color || "",
        (tool.tags || []).find(tag => 
          tag.toLowerCase().includes('free') || 
          tag.toLowerCase().includes('premium') || 
          tag.toLowerCase().includes('freemium')
        ) || "Not specified"
      ]);
      
      const escapeCSV = (val: string) => `"${(val || "").replace(/"/g, '""')}"`;
      const csv = [headers, ...rows]
        .map((r) => r.map((c) => escapeCSV(String(c))).join(","))
        .join("\n");

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ai-tools-complete-${allTools.length}-tools-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      console.log(`✅ CSV download complete! ${allTools.length} tools exported with enhanced data`);
      setIsMenuOpen(false);
    } catch (err) {
      console.error("Failed to generate comprehensive CSV:", err);
    }
  };

  return (
    <TooltipProvider>
      <div className="md:hidden">  {/* Show on mobile only */}
        <DropdownMenu open={isMenuOpen} onOpenChange={handleMenuToggle}>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="default" 
              className="border-cyan-500/30 bg-black/80 text-cyan-100 hover:bg-cyan-500/20 px-3 py-2"
              onClick={() => {
                console.log('Menu button clicked - current state:', isMenuOpen);
                handleMenuToggle(!isMenuOpen);
              }}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            ref={dropdownRef}
            className="w-[85vw] md:w-[380px] max-w-[380px] bg-black/98 shadow-2xl border-2 border-cyan-500/50 backdrop-blur-xl max-h-[75vh] overflow-hidden z-[110] mr-2"
            align="end"
            alignOffset={0}
            sideOffset={6}
            avoidCollisions={true}
            sticky="always"
            style={{
              scrollBehavior: 'auto',
              overscrollBehavior: 'contain'
            }}
          >
            <div className="p-3 md:p-4 overflow-y-auto max-h-[75vh]">
              {/* Header with Close Button */}
              <div className="text-center mb-4 border-b border-cyan-500/30 pb-3 relative">
                {/* Close Button - Top Right - Optimized for touch */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="absolute -top-1 -right-1 h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-red-500/40 border border-red-500/60 rounded-full transition-all duration-200 shadow-lg backdrop-blur-sm z-[120]"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </Button>
                
                <div className="flex flex-col items-center mb-2">
                  <Logo compact={true} />
                </div>
                <div className="text-base md:text-lg font-bold text-cyan-400 mb-1">
                  Navigate our platform
                </div>
                <p className="text-xs text-cyan-200/80">Quick Navigation & Search</p>
              </div>

              {/* Search moved to bottom after user feedback */}

              {/* Navigation Section */}
              <DropdownMenuItem onClick={() => { navigate('/'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 mb-3 rounded-lg h-12 text-sm font-medium px-3">
                <span className="mr-3 text-lg">🏠</span> Home
              </DropdownMenuItem>
              
              {/* Browse Categories - Featured */}
              <DropdownMenuItem
                onClick={handleBrowseAITools}
                className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 font-bold mb-4 rounded-xl p-4 text-base shadow-xl shadow-cyan-500/30 border border-cyan-400/50 transition-all duration-200"
              >
                <span className="mr-2 text-lg">🎯</span> Browse AI Tool Categories
              </DropdownMenuItem>
              
              <DropdownMenuSeparator className="border-gray-700 mb-2" />
                
              {/* WEB3 Domains Section - MOVED UP FOR PRIORITY */}
              <div className="px-1 py-1 text-xs text-cyan-400/70 font-semibold uppercase tracking-wider">
                💰 Register WEB3 Domains
              </div>
              <div className="mb-2 p-2 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-500/30">
                <p className="text-xs text-gray-300 leading-relaxed">
                  🔗 <span className="font-semibold text-cyan-400">Connect to Your Crypto Wallet</span><br/>
                  Own forever • Resell for profit • Minted as NFT
                </p>
              </div>
              <Collapsible open={isWeb3Open} onOpenChange={setIsWeb3Open}>
                <CollapsibleTrigger 
                  className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-2 py-1 text-sm outline-none focus:bg-cyan-500/20 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsWeb3Open(!isWeb3Open);
                  }}
                >
                  <span className="flex items-center">
                    <Globe className="w-3 h-3 mr-2" /> Browse WEB3 Domains
                  </span>
                  <ChevronDown className={`w-3 h-3 ml-2 transition-transform ${isWeb3Open ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 space-y-1 pl-4 max-h-60 overflow-y-auto pr-1">
                  <div className="text-xs text-cyan-400 mb-1 font-semibold">💰 Financial & Cash Transfer</div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/transfermoney", e); }} className="flex-1 text-left">💸 .transfermoney</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/transfercoin", e); }} className="flex-1 text-left">🪙 .transfercoin</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/cointransfer", e); }} className="flex-1 text-left">💰 .cointransfer</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/transfercash", e); }} className="flex-1 text-left">💵 .transfercash</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/cashtransfer", e); }} className="flex-1 text-left">💴 .cashtransfer</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  
                  <div className="text-xs text-cyan-400 mt-3 mb-2 font-semibold">🤖 AI & Technology</div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/ai-tools?ref=olive-ears-obey", e); }} className="flex-1 text-left">🧠 .ai-tools</button>
                    <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/.aiwebtools?ref=olive-ears-obey", e); }} className="flex-1 text-left">🤖 .aiwebtools</button>
                    <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/aimainframe?ref=olive-ears-obey", e); }} className="flex-1 text-left">🗄️ .aimainframe</button>
                    <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/aitoolscompany?ref=olive-ears-obey", e); }} className="flex-1 text-left">🏢 .aitoolscompany</button>
                    <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                  </div>
                  
                  <div className="text-xs text-cyan-400 mt-3 mb-2 font-semibold">🤖 Robotics & Automation</div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/robotsales?ref=olive-ears-obey", e); }} className="flex-1 text-left">🦾 .robotsales</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/robotshop?ref=olive-ears-obey", e); }} className="flex-1 text-left">🛍️ .robotshop</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/robotstore?ref=olive-ears-obey", e); }} className="flex-1 text-left">🛒 .robotstore</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  
                  <div className="text-xs text-cyan-400 mt-3 mb-2 font-semibold">🌍 Global & World</div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/worldpeace?ref=olive-ears-obey", e); }} className="flex-1 text-left">🕊️ .worldpeace</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/worldtrade?ref=olive-ears-obey", e); }} className="flex-1 text-left">🌐 .worldtrade</button>
                    <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/worldtrader?ref=olive-ears-obey", e); }} className="flex-1 text-left">💹 .worldtrader</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              
              <DropdownMenuSeparator className="border-gray-700 mb-2" />
              
              {/* About & Company Accordion */}
              <Collapsible open={isAboutOpen} onOpenChange={setIsAboutOpen}>
                <CollapsibleTrigger 
                  className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-2 py-1 text-sm outline-none focus:bg-cyan-500/20 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsAboutOpen(!isAboutOpen);
                  }}
                >
                  <span className="flex items-center">
                    🏢 About & Company
                  </span>
                  <ChevronDown className={`w-3 h-3 ml-2 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 space-y-1 pl-2">
                  <DropdownMenuItem onClick={() => { navigate('/our-story'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 mb-1 rounded text-sm">
                    📖 About AI Web Tools LLC
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={(e) => handleExternalLink('https://linktr.ee/aiwebtools', e)} className="text-cyan-100 hover:bg-cyan-500/20 mb-1 rounded text-sm">
                    <Trees className="w-3 h-3 mr-2" /> Linktree
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={(e) => handleExternalLink('https://www.tiktok.com/@aiwebtools', e)} className="text-cyan-100 hover:bg-cyan-500/20 mb-1 rounded text-sm">
                    <Clapperboard className="w-3 h-3 mr-2" /> TikTok
                  </DropdownMenuItem>
                  <div className="flex items-center space-x-2 text-cyan-100 px-3 py-1 rounded hover:bg-cyan-500/20 mb-2 text-sm">
                    <Phone className="w-3 h-3" />
                    <a href="tel:+14758008096" className="hover:text-cyan-400 transition-colors">
                      📞 Contact: 475-800-8096
                    </a>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Tools & Downloads Accordion */}
              <Collapsible open={isToolsOpen} onOpenChange={setIsToolsOpen}>
                <CollapsibleTrigger 
                  className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-2 py-1 text-sm outline-none focus:bg-cyan-500/20 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsToolsOpen(!isToolsOpen);
                  }}
                >
                  <span className="flex items-center">
                    🔧 Tools & Downloads
                  </span>
                  <ChevronDown className={`w-3 h-3 ml-2 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 space-y-1 pl-2">
                  <DropdownMenuItem onClick={handleDownloadAllToolsCSV} className="text-cyan-100 hover:bg-cyan-500/20 mb-1 rounded text-sm">
                    <Download className="w-3 h-3 mr-2" />
                    📊 Download ALL {toolStats.marketing} AI Tools (CSV)
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={(e) => { 
                      e.preventDefault();
                      handleExternalLink("https://lovable.dev/projects/bdde8922-3051-4bbc-b084-326f95a6d771?via=aiwebtools", e);
                    }}
                    className="text-yellow-100 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-amber-500/20 mb-2 rounded flex items-center space-x-2 bg-gradient-to-r from-yellow-600/10 to-amber-600/10 border border-yellow-500/30 p-2"
                  >
                    <Copy className="w-3 h-3" />
                    <span className="font-semibold text-sm">Clone This Site</span>
                  </DropdownMenuItem>
                </CollapsibleContent>
              </Collapsible>

              {/* Favorites - Standalone */}
              <DropdownMenuItem onClick={() => { navigate('/favorites'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 mb-2 rounded flex items-center space-x-2 text-sm">
                <Heart className="w-3 h-3 fill-current text-red-500" />
                <span>Favorites ({getFavoritesCount()})</span>
              </DropdownMenuItem>
              
              {/* Search Bar - Moved to bottom to prevent auto-scroll */}
              <div className="mb-4 mt-4 border-t border-cyan-500/30 pt-4">
                <div className="text-xs text-cyan-400 mb-2">🔍 Search AI Tools</div>
                <GlobalSearchBar />
              </div>
              
              {/* Close Button */}
              <div className="flex justify-center pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  );
};

export default MobileMenu;