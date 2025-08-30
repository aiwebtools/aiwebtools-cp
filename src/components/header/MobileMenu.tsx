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

const MobileMenu = () => {
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

  // ULTRA-FAST search results using same logic as hero section
  const searchResults = useMemo(() => {
    const trimmedTerm = debouncedSearchTerm.trim();
    
    if (!trimmedTerm || trimmedTerm.length < 2) return [];

    const lowerTerm = trimmedTerm.toLowerCase();
    
    // EXACT MATCHING PRIORITY (same as hero section)
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
    console.log('🌀 External link clicked in mobile menu:', url);
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
    
    // Load more results with better performance
    if (scrollHeight - scrollTop <= clientHeight + 100 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 50, searchResults.length));
    }
  }, [displayedCount, searchResults.length]);

  // Enhanced CSV download with all comprehensive data fields
  const handleDownloadAllToolsCSV = () => {
    try {
      console.log(`📊 Generating comprehensive CSV with ${allTools.length} tools...`);
      
      // Enhanced headers with all available data fields
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
      
      // Enhanced data extraction with all fields
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

  const displayedResults = searchResults.slice(0, displayedCount);

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
            className="w-[90vw] md:w-[420px] max-w-[420px] bg-black/98 shadow-2xl border-2 border-cyan-500/50 backdrop-blur-xl max-h-[70vh] md:max-h-[80vh] overflow-y-auto z-[110] mr-4"
            align="end"
            alignOffset={0}
            sideOffset={8}
            avoidCollisions={true}
            sticky="always"
          >
            <div className="p-4 md:p-6">
              {/* Header with Close Button */}
              <div className="text-center mb-6 border-b border-cyan-500/30 pb-4 relative">
                {/* Close Button - Top Right - Optimized for touch */}
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
                  <Logo />
                </div>
                <div className="text-lg md:text-xl font-bold text-cyan-400 mb-2">
                  Navigate our platform
                </div>
                <p className="text-sm md:text-base text-cyan-200/80">Quick Navigation & Search</p>
              </div>

              {/* Ultra-Fast Search Bar */}
              <div ref={searchRef} className="relative mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder={`Lightning search ${toolStats.marketing} tools...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-12 bg-gray-900/80 border-cyan-500/40 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50 text-base h-12 rounded-xl backdrop-blur-sm"
                    autoComplete="off"
                    spellCheck={false}
                  />
                  {searchTerm && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearSearch}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  )}
                </div>

                {/* Lightning Fast Search Results */}
                {isSearchOpen && (
                  <Card className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 border border-cyan-500/50 shadow-2xl z-60 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/60 scrollbar-track-gray-800 rounded-xl backdrop-blur-xl" onScroll={handleScroll}>
                    <CardContent className="p-2">
                      <div className="text-sm text-cyan-400 px-3 py-2 border-b border-gray-700 sticky top-0 bg-gray-900/95 backdrop-blur-sm font-medium">
                        ⚡ {searchResults.length} results {displayedCount < searchResults.length && `(showing ${displayedCount})`}
                      </div>
                      {searchResults.slice(0, displayedCount).map((tool, index) => {
                        const toolIndex = allTools.findIndex(t => t.title === tool.title);
                        return (
                          <Tooltip key={`mobile-search-${tool.title}-${index}`} delayDuration={300}>
                            <TooltipTrigger asChild>
                              <div 
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/80 cursor-pointer group transition-all duration-200 border border-transparent hover:border-cyan-500/30"
                                onClick={() => handleToolClick(toolIndex)}
                              >
                                <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-sm flex-shrink-0 shadow-md`}>
                                  {tool.emoji}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-white text-sm leading-tight mb-1 group-hover:text-cyan-400 transition-colors truncate">
                                    {tool.title}
                                  </h3>
                                  {tool.category && (
                                    <p className="text-xs text-gray-400 truncate">{tool.category}</p>
                                  )}
                                </div>
                                
                                {tool.directUrl && (
                                  <Button 
                                    size="sm"
                                    variant="outline"
                                    className="border-green-500/60 bg-green-500/20 text-green-300 hover:bg-green-500/30 text-sm px-2 py-1 h-8 flex-shrink-0 rounded-lg shadow-sm"
                                    onClick={(e) => handleDirectAccess(tool, e)}
                                  >
                                    🚀
                                  </Button>
                                )}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent 
                              side="right" 
                              className="max-w-xs p-2 bg-gray-800 text-white border-gray-600 shadow-xl z-[70]"
                              sideOffset={10}
                            >
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm">{tool.emoji}</span>
                                  <span className="font-semibold text-cyan-400 text-xs">{tool.title}</span>
                                </div>
                                <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                                  {tool.description}
                                </p>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                      {displayedCount < searchResults.length && (
                        <div className="text-center py-2 text-gray-400 text-xs">
                          <div className="animate-pulse">Scroll for more...</div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Navigation Section */}
              <DropdownMenuItem onClick={() => { navigate('/'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 mb-4 rounded-lg h-14 text-base md:text-lg font-medium px-4">
                <span className="mr-4 text-xl">🏠</span> Home
              </DropdownMenuItem>
              
              {/* Browse Categories - Featured */}
              <DropdownMenuItem
                onClick={handleBrowseAITools}
                className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 font-bold mb-6 rounded-xl p-6 text-lg md:text-xl shadow-xl shadow-cyan-500/30 border border-cyan-400/50 transition-all duration-200"
              >
                <span className="mr-3 text-xl">🎯</span> Browse AI Tool Categories
              </DropdownMenuItem>
              
              <DropdownMenuSeparator className="border-gray-700 mb-3" />
                
              {/* WEB3 Domains Section - MOVED UP FOR PRIORITY */}
              <div className="px-2 py-1 text-xs text-cyan-400/70 font-semibold uppercase tracking-wider">
                💰 Register WEB3 Domains
              </div>
              <div className="mb-2 p-2 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-500/30">
                <p className="text-xs text-gray-300 leading-relaxed">
                  🔗 <span className="font-semibold text-cyan-400">Connect to Your Crypto Wallet</span><br/>
                  Own forever • Resell for profit • Minted as NFT • Trade anytime
                </p>
              </div>
              <Collapsible open={isWeb3Open} onOpenChange={setIsWeb3Open}>
                <CollapsibleTrigger 
                  className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-2 py-1.5 text-sm outline-none focus:bg-cyan-500/20 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsWeb3Open(!isWeb3Open);
                  }}
                >
                  <span className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" /> Browse WEB3 Domains
                  </span>
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isWeb3Open ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-2 pl-6 max-h-80 overflow-y-auto pr-1 pb-1">
                  <div className="text-xs text-cyan-400 mb-2 font-semibold">💰 Financial & Cash Transfer</div>
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
              
              <DropdownMenuSeparator className="border-gray-700 mb-3" />
              
              {/* Company & About Section - MOVED DOWN */}
              <div className="px-2 py-1 text-xs text-cyan-400/70 font-semibold uppercase tracking-wider">
                About & Company
              </div>
              <DropdownMenuItem onClick={(e) => handleExternalLink('https://www.aitools.company', e)} className="text-cyan-100 hover:bg-cyan-500/20 mb-1 rounded">
                🏢 About AI Web Tools LLC
              </DropdownMenuItem>
              
              <DropdownMenuSeparator className="border-gray-700 mb-3" />
              
              {/* Social & External Links */}
              <div className="px-2 py-1 text-xs text-cyan-400/70 font-semibold uppercase tracking-wider">
                Connect With Us
              </div>
              <DropdownMenuItem onClick={(e) => handleExternalLink('https://linktr.ee/aiwebtools', e)} className="text-cyan-100 hover:bg-cyan-500/20 mb-1 rounded">
                <Trees className="w-4 h-4 mr-2" /> Linktree
              </DropdownMenuItem>
              <DropdownMenuItem onClick={(e) => handleExternalLink('https://www.tiktok.com/@aiwebtools', e)} className="text-cyan-100 hover:bg-cyan-500/20 mb-2 rounded">
                <Clapperboard className="w-4 h-4 mr-2" /> TikTok
              </DropdownMenuItem>
              
              <DropdownMenuSeparator className="border-gray-700 mb-3" />
              
              {/* Tools & Downloads */}
              <div className="px-2 py-1 text-xs text-cyan-400/70 font-semibold uppercase tracking-wider">
                Tools & Downloads
              </div>
                <DropdownMenuItem onClick={handleDownloadAllToolsCSV} className="text-cyan-100 hover:bg-cyan-500/20 mb-1 rounded">
                  <Download className="w-4 h-4 mr-2" />
                  📊 Download ALL {toolStats.marketing} AI Tools (CSV)
                </DropdownMenuItem>
              <DropdownMenuItem onClick={(e) => handleExternalLink('https://cloneaiwebtools.lovable.app/?via=aiwebtools', e)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-bold rounded mb-2 gold-glow">
                🚀 Clone This Website
              </DropdownMenuItem>
              
              <DropdownMenuSeparator className="border-gray-700 my-3" />
              
              {/* Contact Section */}
              <div className="px-2 py-1 text-xs text-cyan-400/70 font-semibold uppercase tracking-wider">
                Contact
              </div>
              <div className="flex items-center space-x-2 text-cyan-100 px-2 py-2 rounded hover:bg-cyan-500/20 mb-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+14758008096" className="hover:text-cyan-400 transition-colors">
                  475-800-8096
                </a>
              </div>
              
              <DropdownMenuSeparator className="border-gray-700 my-3" />
              
              {/* Favorites - added before Our Story */}
              <DropdownMenuItem onClick={() => { navigate('/favorites'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 mb-2 rounded flex items-center space-x-2">
                <Heart className="w-4 h-4 fill-current text-red-500" />
                <span>Favorites ({getFavoritesCount()})</span>
              </DropdownMenuItem>
              
              {/* Our Story - moved to bottom of mobile menu */}
              <DropdownMenuItem onClick={() => { navigate('/our-story'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 mb-2 rounded">
                📖 Our Story
              </DropdownMenuItem>
              
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