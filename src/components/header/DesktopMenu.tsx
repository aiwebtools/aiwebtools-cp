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

  // Enhanced CSV download
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
      
      console.log(`✅ CSV download complete! ${allTools.length} tools exported`);
      setIsMenuOpen(false);
    } catch (err) {
      console.error("Failed to generate CSV:", err);
    }
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
            className="w-[600px] bg-black/98 shadow-2xl border-2 border-cyan-500/50 backdrop-blur-xl max-h-[85vh] overflow-y-auto z-[110]"
            align="end"
            alignOffset={0}
            sideOffset={8}
            avoidCollisions={true}
            sticky="always"
          >
            <div className="p-8">
              {/* Header with Close Button */}
              <div className="text-center mb-8 border-b border-cyan-500/30 pb-6 relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="absolute -top-2 -right-2 h-12 w-12 p-0 text-gray-400 hover:text-white hover:bg-red-500/40 border border-red-500/60 rounded-full transition-all duration-200 shadow-lg backdrop-blur-sm z-[120]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </Button>
                
                <div className="flex flex-col items-center mb-3">
                  <Logo compact={true} />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-3">
                  Navigate our platform
                </div>
                <p className="text-lg text-cyan-200/80">Full Desktop Navigation & Search</p>
              </div>

              {/* Ultra-Fast Hero Search Bar - EXACT SAME AS HERO */}
              <div className="mb-8">
                <GlobalSearchBar />
              </div>

              {/* Navigation Grid - Desktop Layout */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <DropdownMenuItem onClick={() => { navigate('/'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 rounded-lg h-16 text-lg font-medium px-4 col-span-1">
                  <span className="mr-4 text-2xl">🏠</span> Home
                </DropdownMenuItem>
                
                <DropdownMenuItem
                  onClick={handleBrowseAITools}
                  className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 font-bold rounded-xl p-6 text-xl shadow-xl shadow-cyan-500/30 border border-cyan-400/50 transition-all duration-200 col-span-1"
                >
                  <span className="mr-3 text-2xl">🎯</span> Browse Categories
                </DropdownMenuItem>
              </div>
              
              <DropdownMenuSeparator className="border-gray-700 mb-6" />
                
              {/* WEB3 Domains Section - Full Accordion Structure */}
              <div className="mb-6">
                <div className="px-2 py-2 text-sm text-cyan-400/70 font-semibold uppercase tracking-wider">
                  💰 Register WEB3 Domains
                </div>
                <div className="mb-4 p-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-500/30">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    🔗 <span className="font-semibold text-cyan-400">Connect to Your Crypto Wallet</span><br/>
                    Own forever • Resell for profit • Minted as NFT • Trade anytime
                  </p>
                </div>
                
                <div className="space-y-2">
                  {/* Financial & Cash Transfer Domains */}
                  <Collapsible>
                    <CollapsibleTrigger className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded-lg flex items-center justify-between px-4 py-3 text-base border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors">
                      <span className="flex items-center">
                        💰 Financial & Cash Transfer Domains
                      </span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
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
                    <CollapsibleTrigger className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded-lg flex items-center justify-between px-4 py-3 text-base border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors">
                      <span className="flex items-center">
                        🤖 AI & Technology Domains
                      </span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1">
                      <div className="bg-gray-900/50 rounded-lg border border-white/5 p-3 space-y-2">
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/ai-tools?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-sm">
                            🧠 .ai-tools
                          </button>
                          <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/.aiwebtools?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-sm">
                            🤖 .aiwebtools
                          </button>
                          <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/aimainframe?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-sm">
                            🗄️ .aimainframe
                          </button>
                          <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/aitoolscompany?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-sm">
                            🏢 .aitoolscompany
                          </button>
                          <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Robotics & Automation Domains */}
                  <Collapsible>
                    <CollapsibleTrigger className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded-lg flex items-center justify-between px-4 py-3 text-base border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors">
                      <span className="flex items-center">
                        🤖 Robotics & Automation Domains
                      </span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1">
                      <div className="bg-gray-900/50 rounded-lg border border-white/5 p-3 space-y-2">
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/robotsales?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-sm">
                            🦾 .robotsales
                          </button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/robotshop?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-sm">
                            🛍️ .robotshop
                          </button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/robotstore?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-sm">
                            🛒 .robotstore
                          </button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Global & World Domains */}
                  <Collapsible>
                    <CollapsibleTrigger className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded-lg flex items-center justify-between px-4 py-3 text-base border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors">
                      <span className="flex items-center">
                        🌍 Global & World Domains
                      </span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1">
                      <div className="bg-gray-900/50 rounded-lg border border-white/5 p-3 space-y-2">
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/worldpeace?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-sm">
                            🕊️ .worldpeace
                          </button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrade?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-sm">
                            🌐 .worldtrade
                          </button>
                          <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                          <button onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrader?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left text-sm">
                            💹 .worldtrader
                          </button>
                          <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>

              <DropdownMenuSeparator className="border-gray-700 mb-6" />

              {/* About & Company Accordion */}
              <Collapsible open={isAboutOpen} onOpenChange={setIsAboutOpen}>
                <CollapsibleTrigger 
                  className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded-lg flex items-center justify-between px-4 py-3 text-base border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors mb-2"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsAboutOpen(!isAboutOpen);
                  }}
                >
                  <span className="flex items-center text-lg font-medium">
                    🏢 About & Company
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 mb-4">
                  <div className="bg-gray-900/50 rounded-lg border border-white/5 p-3 space-y-2">
                    <DropdownMenuItem onClick={() => { navigate('/our-story'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 rounded text-base px-3 py-2">
                      📖 About AI Web Tools LLC
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => handleExternalLink('https://linktr.ee/aiwebtools', e)} className="text-cyan-100 hover:bg-cyan-500/20 rounded text-base px-3 py-2">
                      <Trees className="w-4 h-4 mr-2" /> Connect with us
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => handleExternalLink('https://www.tiktok.com/@aiwebtools', e)} className="text-cyan-100 hover:bg-cyan-500/20 rounded text-base px-3 py-2">
                      <Clapperboard className="w-4 h-4 mr-2" /> TikTok
                    </DropdownMenuItem>
                    <div className="flex items-center space-x-2 text-cyan-100 px-3 py-2 rounded hover:bg-cyan-500/20 text-base">
                      <Phone className="w-4 h-4" />
                      <a href="tel:+14758008096" className="hover:text-cyan-400 transition-colors">
                        📞 Contact: 475-800-8096
                      </a>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Tools & Downloads Accordion */}
              <Collapsible open={isToolsOpen} onOpenChange={setIsToolsOpen}>
                <CollapsibleTrigger 
                  className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded-lg flex items-center justify-between px-4 py-3 text-base border border-white/10 outline-none focus:bg-cyan-500/20 transition-colors mb-2"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsToolsOpen(!isToolsOpen);
                  }}
                >
                  <span className="flex items-center text-lg font-medium">
                    🔧 Tools & Downloads
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 mb-4">
                  <div className="bg-gray-900/50 rounded-lg border border-white/5 p-3 space-y-2">
                    <DropdownMenuItem onClick={handleDownloadAllToolsCSV} className="text-cyan-100 hover:bg-cyan-500/20 rounded text-base px-3 py-2">
                      <Download className="w-4 h-4 mr-2" />
                      📊 Download ALL {toolStats.marketing} AI Tools (CSV)
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={(e) => { 
                        e.preventDefault();
                        handleExternalLink("https://lovable.dev/projects/bdde8922-3051-4bbc-b084-326f95a6d771?via=aiwebtools", e);
                      }}
                      className="text-yellow-100 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-amber-500/20 rounded flex items-center space-x-2 bg-gradient-to-r from-yellow-600/10 to-amber-600/10 border border-yellow-500/30 px-3 py-2 text-base"
                    >
                      <Copy className="w-4 h-4" />
                      <span className="font-semibold">Clone This Site</span>
                    </DropdownMenuItem>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Favorites - Standalone */}
              <DropdownMenuItem onClick={() => { navigate('/favorites'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 rounded-lg flex items-center space-x-3 text-lg font-medium px-4 py-3 border border-white/10 mb-4">
                <Heart className="w-5 h-5 fill-current text-red-500" />
                <span>Favorites ({getFavoritesCount()})</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  );
};

export default DesktopMenu;