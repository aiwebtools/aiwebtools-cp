import { Menu, Phone, Search, X, FileText, Globe, ChevronDown, Download, Trees, Clapperboard, Heart, Copy, Gift, Clock } from "lucide-react";
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
import { createConfettiCelebration } from "@/utils/effects/audioEffects";
import { openDestinationUrl } from "@/utils/effects/domEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { web3DomainsTools } from "@/data/tools/web3DomainsTools";
import { downloadToolsCSV } from "@/utils/csvExport";
import Logo from "./Logo";
import GlobalSearchBar from "@/components/GlobalSearchBar";
import DeferredMount from "@/components/DeferredMount";
import { useRecentlyVisitedTools } from "@/hooks/useRecentlyVisitedTools";

const DesktopMenu = () => {
  const navigate = useNavigate();
  
  // Safe hook usage with error handling
  let getFavoritesCount;
  try {
    const favoritesContext = useFavorites();
    getFavoritesCount = favoritesContext.getFavoritesCount;
  } catch (error) {
    console.warn('useFavorites hook not available in DesktopMenu, using fallback');
    getFavoritesCount = () => 0;
  }
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWeb3Open, setIsWeb3Open] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  const [renderSearch, setRenderSearch] = useState(false);
  const { recentTools } = useRecentlyVisitedTools();

  const handleMenuToggle = useCallback((open: boolean) => {
    setIsMenuOpen(open);
  }, []);

  useEffect(() => {
    const stats = getCurrentToolCount();
    setToolStats(stats);
  }, []);

  // Defer mounting the global search (heavy index on first mount) until AFTER the menu is visible.
  useEffect(() => {
    if (!isMenuOpen) {
      setRenderSearch(false);
      return;
    }

    const id = window.setTimeout(() => setRenderSearch(true), 0);
    return () => window.clearTimeout(id);
  }, [isMenuOpen]);

  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in desktop menu:', url);
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

  // Enhanced CSV download - uses centralized export with all tool data
  const handleDownloadAllToolsCSV = () => {
    try {
      // Trigger confetti celebration first
      createConfettiCelebration();
      
      console.log(`📊 Generating comprehensive CSV with ${allTools.length} tools...`);
      
      // Use centralized CSV export with all data (video URLs, image URLs, etc.)
      downloadToolsCSV(allTools);
      
      console.log(`✅ CSV download complete! ${allTools.length} tools exported with video/image URLs`);
      
      // Also download the GPT Instructions ZIP file
      setTimeout(() => {
        const zipLink = document.createElement('a');
        zipLink.href = '/downloads/gpt-instructions.zip';
        zipLink.download = 'AIWebTools-150-GPT-Instructions.zip';
        document.body.appendChild(zipLink);
        zipLink.click();
        document.body.removeChild(zipLink);
        console.log('🎁 Also downloaded 150+ GPT Instructions ZIP!');
      }, 500);
      
      setIsMenuOpen(false);
    } catch (err) {
      console.error("Failed to generate CSV:", err);
    }
  };

  // Download 150+ GPT Operational Instructions
  const handleDownloadGPTInstructions = () => {
    createConfettiCelebration();
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/downloads/gpt-instructions.zip';
      link.download = 'AIWebTools-150-GPT-Instructions.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('🎁 Downloaded 150+ GPT Instructions!');
    }, 500);
    setIsMenuOpen(false);
  };

  return (
    <TooltipProvider>
      <div className="hidden lg:block">
        <DropdownMenu open={isMenuOpen} onOpenChange={handleMenuToggle}>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="default" 
              className="border-cyan-500/30 bg-black/80 text-cyan-100 hover:bg-cyan-500/20 px-4 py-2"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-[480px] bg-black shadow-2xl border border-cyan-500/40 max-h-[85vh] overflow-y-scroll z-[110]"
            align="end"
            alignOffset={0}
            sideOffset={8}
            avoidCollisions={true}
            sticky="always"
            style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y', overscrollBehavior: 'contain' }}
          >
            <div className="p-4">
              {/* Compact Header with Close Button */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/20">
                <div className="flex items-center gap-3">
                  <Logo compact={true} />
                  <div>
                    <div className="text-sm font-semibold text-cyan-400">Navigation</div>
                    <p className="text-xs text-cyan-200/60">Desktop Menu</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-red-500/30 rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Search Bar */}
              <div className="mb-4">
                {renderSearch ? (
                  <GlobalSearchBar />
                ) : (
                  <div className="h-10 rounded-lg border border-white/20 bg-black/40" />
                )}
              </div>

              <DeferredMount delay={80}>
              {/* Quick Navigation Row */}
              <div className="flex gap-2 mb-4">
                <DropdownMenuItem onClick={() => { navigate('/'); setIsMenuOpen(false); }} className="flex-1 text-cyan-100 hover:bg-cyan-500/20 rounded-lg h-10 text-sm font-medium px-3 justify-center">
                  <span className="mr-2">🏠</span> Home
                </DropdownMenuItem>
                
                <DropdownMenuItem
                  onClick={handleBrowseAITools}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 font-semibold rounded-lg h-10 text-sm justify-center border border-cyan-400/50"
                >
                  <span className="mr-2">🎯</span> Browse All
                </DropdownMenuItem>
              </div>
              
              {/* Compact Download Button */}
              <button
                onClick={handleDownloadGPTInstructions}
                className="w-full relative group overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-200 border border-yellow-300 mb-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                  <Gift className="w-4 h-4" />
                  FREE: 150+ GPT Instructions
                  <Download className="w-4 h-4" />
                </span>
              </button>
              
              <DropdownMenuSeparator className="border-gray-700 mb-4" />
                
              {/* WEB3 Domains Section - Compact */}
              <div className="mb-4">
                <div className="px-2 py-1 text-xs text-cyan-400/70 font-semibold uppercase tracking-wider mb-2">
                  💰 WEB3 Domains
                </div>
                <div className="mb-3 p-3 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/20 text-xs">
                  <span className="font-semibold text-cyan-400">Own forever • Resell • NFT</span>
                  <span className="ml-2 font-bold text-green-400">NO BIO CHIP WEB3</span>
                </div>
                
                <div className="space-y-1">
                  {/* Financial Domains */}
                  <Collapsible>
                    <CollapsibleTrigger className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-3 py-2 text-sm border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors">
                      <span className="flex items-center">💰 Financial Domains</span>
                      <ChevronDown className="w-3 h-3" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1">
                      <div className="bg-gray-900/50 rounded-lg border border-white/5 p-3 space-y-2">
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/transfermoney", e)} className="flex items-center flex-1 text-left text-sm">
                            💸 .transfermoney
                          </button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/transfercoin", e)} className="flex items-center flex-1 text-left text-sm">
                            🪙 .transfercoin
                          </button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/cointransfer", e)} className="flex items-center flex-1 text-left text-sm">
                            💰 .cointransfer
                          </button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/transfercash", e)} className="flex items-center flex-1 text-left text-sm">
                            💵 .transfercash
                          </button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/cashtransfer", e)} className="flex items-center flex-1 text-left text-sm">
                            💴 .cashtransfer
                          </button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* AI & Technology Domains */}
                  <Collapsible>
                    <CollapsibleTrigger className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-3 py-2 text-sm border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors">
                      <span className="flex items-center">🤖 AI & Tech Domains</span>
                      <ChevronDown className="w-3 h-3" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1">
                      <div className="bg-gray-900/50 rounded border border-white/5 p-2 space-y-1">
                        <div className="flex items-center justify-between w-full px-2 py-1.5 rounded hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/ai-tools?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-xs">🧠 .ai-tools</button>
                          <span className="text-xs bg-green-600/20 text-green-300 px-1.5 py-0.5 rounded border border-green-500/30">Solana</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-2 py-1.5 rounded hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/.aiwebtools?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-xs">🤖 .aiwebtools</button>
                          <span className="text-xs bg-green-600/20 text-green-300 px-1.5 py-0.5 rounded border border-green-500/30">Solana</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-2 py-1.5 rounded hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/aimainframe?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-xs">🗄️ .aimainframe</button>
                          <span className="text-xs bg-green-600/20 text-green-300 px-1.5 py-0.5 rounded border border-green-500/30">Solana</span>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Robotics Domains */}
                  <Collapsible>
                    <CollapsibleTrigger className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-3 py-2 text-sm border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors">
                      <span className="flex items-center">🦾 Robotics Domains</span>
                      <ChevronDown className="w-3 h-3" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1">
                      <div className="bg-gray-900/50 rounded border border-white/5 p-2 space-y-1">
                        <div className="flex items-center justify-between w-full px-2 py-1.5 rounded hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/robotsales?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-xs">🦾 .robotsales</button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30">Polygon</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-2 py-1.5 rounded hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/robotshop?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-xs">🛍️ .robotshop</button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30">Polygon</span>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Global Domains */}
                  <Collapsible>
                    <CollapsibleTrigger className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-3 py-2 text-sm border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors">
                      <span className="flex items-center">🌍 Global Domains</span>
                      <ChevronDown className="w-3 h-3" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1">
                      <div className="bg-gray-900/50 rounded border border-white/5 p-2 space-y-1">
                        <div className="flex items-center justify-between w-full px-2 py-1.5 rounded hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/worldpeace?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-xs">🕊️ .worldpeace</button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30">Polygon</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-2 py-1.5 rounded hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrade?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-xs">🌐 .worldtrade</button>
                          <span className="text-xs bg-green-600/20 text-green-300 px-1.5 py-0.5 rounded border border-green-500/30">Solana</span>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>

              <DropdownMenuSeparator className="border-gray-700 mb-4" />

              {/* About & Company */}
              <Collapsible open={isAboutOpen} onOpenChange={setIsAboutOpen}>
                <CollapsibleTrigger 
                  className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-3 py-2 text-sm border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors mb-1"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsAboutOpen(!isAboutOpen); }}
                >
                  <span className="flex items-center font-medium">🏢 About & Company</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 mb-3">
                  <div className="bg-gray-900/50 rounded border border-white/5 p-2 space-y-1">
                    <DropdownMenuItem onClick={() => { navigate('/our-story'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 rounded text-sm px-2 py-1.5">
                      📖 About AI Web Tools
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => handleExternalLink('https://linktr.ee/aiwebtools', e)} className="text-cyan-100 hover:bg-cyan-500/20 rounded text-sm px-2 py-1.5">
                      <Trees className="w-3 h-3 mr-2" /> Connect with us
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => handleExternalLink('https://www.tiktok.com/@aiwebtools', e)} className="text-cyan-100 hover:bg-cyan-500/20 rounded text-sm px-2 py-1.5">
                      <Clapperboard className="w-3 h-3 mr-2" /> TikTok
                    </DropdownMenuItem>
                    <div className="flex items-center space-x-2 text-cyan-100 px-2 py-1.5 rounded hover:bg-cyan-500/20 text-sm">
                      <Phone className="w-3 h-3" />
                      <a href="tel:+14758008096" className="hover:text-cyan-400 transition-colors text-xs">475-800-8096</a>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Tools & Downloads */}
              <Collapsible open={isToolsOpen} onOpenChange={setIsToolsOpen}>
                <CollapsibleTrigger 
                  className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-3 py-2 text-sm border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors mb-1"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsToolsOpen(!isToolsOpen); }}
                >
                  <span className="flex items-center font-medium">🔧 Tools & Downloads</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 mb-3">
                  <div className="bg-gray-900/50 rounded border border-white/5 p-2 space-y-1">
                    <DropdownMenuItem onClick={handleDownloadAllToolsCSV} className="text-cyan-100 hover:bg-cyan-500/20 rounded text-sm px-2 py-1.5">
                      <Download className="w-3 h-3 mr-2" />
                      📊 Download {toolStats.marketing} Tools (CSV)
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={(e) => {
                        e.preventDefault();
                        createConfettiCelebration();
                        const codeInfo = `# AI Web Tools - Source Code Download Info\n\nVisit: https://lovable.dev/projects/16f4843b-3d0d-4fac-8365-1ccb03890154?utm_source=lovable-badge&via=aiwebtools`;
                        const blob = new Blob([codeInfo], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'AIWebTools-Source-Code-Instructions.txt';
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                        setTimeout(() => openDestinationUrl("https://lovable.dev/projects/16f4843b-3d0d-4fac-8365-1ccb03890154?utm_source=lovable-badge&via=aiwebtools"), 300);
                        setIsMenuOpen(false);
                      }}
                      className="text-green-100 hover:bg-green-500/20 rounded text-sm px-2 py-1.5 bg-green-600/10 border border-green-500/30"
                    >
                      <FileText className="w-3 h-3 mr-2" />
                      💾 Source Code
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={(e) => { e.preventDefault(); handleExternalLink("https://lovable.dev/projects/16f4843b-3d0d-4fac-8365-1ccb03890154?utm_source=lovable-badge&via=aiwebtools", e); }}
                      className="text-yellow-100 hover:bg-yellow-500/20 rounded text-sm px-2 py-1.5 bg-yellow-600/10 border border-yellow-500/30"
                    >
                      <Copy className="w-3 h-3 mr-2" />
                      Clone Site
                    </DropdownMenuItem>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Recently Visited Tools */}
              {recentTools.length > 0 && (
                <div className="mb-4">
                  <div className="px-2 py-1 text-xs text-cyan-400/70 font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    Recently Visited
                  </div>
                  <div className="bg-gray-900/50 rounded-lg border border-white/5 p-2 space-y-1">
                    {recentTools.map((tool, index) => (
                      <button
                        key={`${tool.url}-${index}`}
                        onClick={(e) => handleExternalLink(tool.url, e)}
                        className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm text-cyan-100 hover:bg-cyan-500/20 transition-colors text-left"
                      >
                        <span>{tool.emoji}</span>
                        <span className="truncate flex-1">{tool.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Favorites */}
              <DropdownMenuItem onClick={() => { navigate('/favorites'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center space-x-2 text-sm font-medium px-3 py-2 border border-white/10 mb-2">
                <Heart className="w-4 h-4 fill-current text-red-500" />
                <span>Favorites ({getFavoritesCount()})</span>
              </DropdownMenuItem>
              </DeferredMount>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  );
};

export default DesktopMenu;