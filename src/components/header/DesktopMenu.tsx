import { Menu, Phone, Search, X, FileText, Globe, ChevronDown, Download, Trees, Clapperboard, Heart } from "lucide-react";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { web3DomainsTools } from "@/data/tools/web3DomainsTools";
import Logo from "./Logo";
import { useDebounce } from "@/hooks/useDebounce";

const DesktopMenu = () => {
  const navigate = useNavigate();
  const { getFavoritesCount } = useFavorites();
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedCount, setDisplayedCount] = useState(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWeb3Open, setIsWeb3Open] = useState(false);
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  const searchRef = useRef(null);
  
  // Optimized debounce for instant responsiveness
  const debouncedSearchTerm = useDebounce(searchTerm, 100);

  const handleMenuToggle = useCallback((open: boolean) => {
    setIsMenuOpen(open);
    if (!open) {
      setSearchTerm("");
      setDisplayedCount(50);
    }
  }, []);

  // ULTRA-FAST search results using same logic as mobile version
  const searchResults = useMemo(() => {
    const trimmedTerm = debouncedSearchTerm.trim();
    
    if (!trimmedTerm || trimmedTerm.length < 2) return [];

    const lowerTerm = trimmedTerm.toLowerCase();
    
    // EXACT MATCHING PRIORITY
    const exactMatches = allTools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      return lowerTitle === lowerTerm || lowerTitle.includes(lowerTerm);
    });

    const partialMatches = allTools.filter(tool => {
      if (exactMatches.some(exact => exact.title === tool.title)) return false;
      
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description?.toLowerCase() || "";
      const lowerCategory = tool.category?.toLowerCase() || "";
      const lowerTags = tool.tags?.join(" ").toLowerCase() || "";
      
      return lowerTitle.includes(lowerTerm) ||
             lowerDescription.includes(lowerTerm) ||
             lowerCategory.includes(lowerTerm) ||
             lowerTags.includes(lowerTerm) ||
             lowerTitle.match(new RegExp(`\\b${lowerTerm}`, 'i')) ||
             lowerDescription.match(new RegExp(`\\b${lowerTerm}`, 'i'));
    });

    // For 4+ characters, add intelligent search
    let intelligentResults = [];
    if (trimmedTerm.length >= 4) {
      intelligentResults = searchTools(allTools, trimmedTerm).filter(tool => 
        !exactMatches.some(exact => exact.title === tool.title) &&
        !partialMatches.some(partial => partial.title === tool.title)
      );
    }

    // Sort exact matches by relevance
    const sortedExact = exactMatches.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      
      if (aTitle === lowerTerm && bTitle !== lowerTerm) return -1;
      if (bTitle === lowerTerm && aTitle !== lowerTerm) return 1;
      
      const aStarts = aTitle.startsWith(lowerTerm);
      const bStarts = bTitle.startsWith(lowerTerm);
      if (aStarts && !bStarts) return -1;
      if (bStarts && !aStarts) return 1;
      
      return aTitle.localeCompare(bTitle);
    });

    // Combine results with exact matches first
    return [
      ...sortedExact,
      ...partialMatches.sort((a, b) => a.title.localeCompare(b.title)),
      ...intelligentResults
    ];
  }, [debouncedSearchTerm]);

  const isSearchOpen = searchResults.length > 0 && debouncedSearchTerm.trim().length > 0;

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

  const handleToolClick = useCallback((toolIndex: number) => {
    navigate(`/tool/${toolIndex}`);
    handleMenuToggle(false);
  }, [navigate, handleMenuToggle]);

  const handleDirectAccess = useCallback((tool: any, e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      createTimePortalEffect(tool.directUrl);
      handleMenuToggle(false);
    }
  }, [handleMenuToggle]);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
    setDisplayedCount(50);
  }, []);

  const closeMenu = useCallback(() => {
    handleMenuToggle(false);
  }, [handleMenuToggle]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    if (scrollHeight - scrollTop <= clientHeight + 100 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 50, searchResults.length));
    }
  }, [displayedCount, searchResults.length]);

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

              {/* Ultra-Fast Search Bar */}
              <div ref={searchRef} className="relative mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-6 h-6" />
                  <Input
                    type="text"
                    placeholder={`Search ${toolStats.marketing} AI tools...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-14 pr-14 bg-gray-900/80 border-cyan-500/40 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50 text-lg h-14 rounded-xl backdrop-blur-sm"
                    autoComplete="off"
                    spellCheck={false}
                  />
                  {searchTerm && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg"
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  )}
                </div>

                {/* Search Results */}
                {isSearchOpen && (
                  <Card className="absolute top-full left-0 right-0 mt-3 bg-gray-900/95 border border-cyan-500/50 shadow-2xl z-60 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/60 scrollbar-track-gray-800 rounded-xl backdrop-blur-xl" onScroll={handleScroll}>
                    <CardContent className="p-3">
                      <div className="text-base text-cyan-400 px-4 py-3 border-b border-gray-700 sticky top-0 bg-gray-900/95 backdrop-blur-sm font-medium">
                        ⚡ {searchResults.length} results {displayedCount < searchResults.length && `(showing ${displayedCount})`}
                      </div>
                      <div className="grid grid-cols-1 gap-2 mt-3">
                        {searchResults.slice(0, displayedCount).map((tool, index) => {
                          const toolIndex = allTools.findIndex(t => t.title === tool.title);
                          return (
                            <Tooltip key={`desktop-search-${tool.title}-${index}`} delayDuration={300}>
                              <TooltipTrigger asChild>
                                <div 
                                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800/80 cursor-pointer group transition-all duration-200 border border-transparent hover:border-cyan-500/30"
                                  onClick={() => handleToolClick(toolIndex)}
                                >
                                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-lg flex-shrink-0 shadow-md`}>
                                    {tool.emoji}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-white text-lg leading-tight mb-1 group-hover:text-cyan-400 transition-colors">
                                      {tool.title}
                                    </h3>
                                    {tool.category && (
                                      <p className="text-sm text-gray-400">{tool.category}</p>
                                    )}
                                  </div>
                                  
                                  {tool.directUrl && (
                                    <Button 
                                      size="sm"
                                      variant="outline"
                                      className="border-green-500/60 bg-green-500/20 text-green-300 hover:bg-green-500/30 text-base px-4 py-2 h-10 flex-shrink-0 rounded-lg shadow-sm"
                                      onClick={(e) => handleDirectAccess(tool, e)}
                                    >
                                      🚀 Launch
                                    </Button>
                                  )}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent 
                                side="right" 
                                className="max-w-sm p-3 bg-gray-800 text-white border-gray-600 shadow-xl z-[70]"
                                sideOffset={10}
                              >
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-base">{tool.emoji}</span>
                                    <span className="font-semibold text-cyan-400 text-sm">{tool.title}</span>
                                  </div>
                                  <p className="text-sm text-gray-300 leading-relaxed">
                                    {tool.description}
                                  </p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          );
                        })}
                      </div>
                      {displayedCount < searchResults.length && (
                        <div className="text-center py-3 text-gray-400 text-sm">
                          <div className="animate-pulse">Scroll for more results...</div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
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

              {/* Bottom Actions Grid */}
              <div className="grid grid-cols-2 gap-4">
                <DropdownMenuItem 
                  onClick={handleDownloadAllToolsCSV}
                  className="text-green-100 hover:bg-green-500/20 rounded-lg h-14 text-lg font-medium px-4"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download CSV
                </DropdownMenuItem>

                <DropdownMenuItem className="text-red-100 hover:bg-red-500/20 rounded-lg h-14 text-lg font-medium px-4">
                  <Heart className="w-5 h-5 mr-3 fill-current" />
                  Favorites ({getFavoritesCount()})
                </DropdownMenuItem>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  );
};

export default DesktopMenu;