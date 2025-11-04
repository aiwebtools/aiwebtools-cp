
import { Menu, Phone, Search, X, Globe, ChevronDown, Download, Copy } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { generateToolSlug } from "@/utils/urlGenerator";
import Logo from "./Logo";

const TabletMenu = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(50); // Start with 50 results
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWeb3Open, setIsWeb3Open] = useState(false);
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  const searchRef = useRef(null);

  useEffect(() => {
    const stats = getCurrentToolCount();
    setToolStats(stats);
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = searchTools(allTools, searchTerm); // Get ALL results
      setSearchResults(results);
      setDisplayedCount(50); // Reset display count
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
      setDisplayedCount(50);
    }
  }, [searchTerm]);

  const handleBrowseAITools = () => {
    // Navigate to ALL AI TOOLS main category page
    navigate('/main-category/ALL%20AI%20TOOLS');
  };

  const handleToolClick = (tool: any) => {
    setSearchTerm("");
    setIsSearchOpen(false);
    navigate(`/${generateToolSlug(tool.title)}`);
  };

  const handleDirectAccess = (tool: any, e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      console.log('🌀 Direct access clicked in tablet menu for:', tool.title);
      createTimePortalEffect(tool.directUrl);
      setSearchTerm("");
      setIsSearchOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setIsSearchOpen(false);
    setDisplayedCount(50);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    if (scrollHeight - scrollTop <= clientHeight + 50 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 30, searchResults.length));
    }
  };

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
    } catch (err) {
      console.error("Failed to generate comprehensive CSV:", err);
    }
  };

  const displayedResults = searchResults.slice(0, displayedCount);

  return (
    <TooltipProvider>
      <div className="hidden md:block lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="border-cyan-500/30 bg-black/80 text-cyan-100 hover:bg-cyan-500/20 flex-shrink-0">
              <Menu className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[400px] bg-black/95 shadow-xl border border-cyan-500/30 backdrop-blur-md max-h-[80vh] overflow-hidden">
            <div className="p-4">
              {/* Header with Logo */}
              <div className="text-center mb-4 border-b border-cyan-500/30 pb-4">
                <div className="flex justify-center mb-1">
                  <Logo compact={true} />
                </div>
                <p className="text-sm text-cyan-200">Navigate our platform</p>
              </div>

              {/* Search Bar */}
              <div ref={searchRef} className="relative mb-4">
                <div className="relative divine-glow-border rounded-lg">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
                  <Input
                    type="text"
                    placeholder="Search 1100+ AI tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-10 bg-black/50 border-0 text-white placeholder-gray-300 focus:ring-0 focus:outline-none backdrop-blur-sm"
                  />
                  {searchTerm && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearSearch}
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-gray-400 hover:text-white z-10"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  )}
                </div>

                {/* Search Results */}
                {isSearchOpen && searchResults.length > 0 && (
                  <Card className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 border border-cyan-500/30 shadow-2xl z-50 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-gray-800" onScroll={handleScroll}>
                    <CardContent className="p-2">
                      <div className="text-xs text-cyan-400 px-3 py-2 border-b border-gray-700 sticky top-0 bg-gray-900/95">
                        ⚡ Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
                        {displayedCount < searchResults.length && ` • Showing first ${displayedCount}`}
                      </div>
                      {displayedResults.map((tool, index) => {
                        const toolIndex = allTools.findIndex(t => t.title === tool.title);
                        return (
                          <Tooltip key={`tablet-search-${tool.title}-${index}`} delayDuration={300}>
                            <TooltipTrigger asChild>
                              <div 
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer group transition-all duration-200"
                                onClick={() => handleToolClick(tool)}
                              >
                                <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-xs flex-shrink-0`}>
                                  {tool.emoji}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-medium text-white text-xs truncate group-hover:text-cyan-400 transition-colors">
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
                                    className="border-green-500/50 bg-green-500/10 text-green-300 hover:bg-green-500/20 text-xs px-1 py-0 h-auto flex-shrink-0"
                                    onClick={(e) => handleDirectAccess(tool, e)}
                                  >
                                    🚀
                                  </Button>
                                )}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent 
                              side="right" 
                              className="max-w-sm p-3 bg-gray-800 text-white border-gray-600 shadow-xl z-[60]"
                              sideOffset={10}
                            >
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm">{tool.emoji}</span>
                                  <span className="font-semibold text-cyan-400 text-sm">{tool.title}</span>
                                </div>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                  {tool.description}
                                </p>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                      {displayedCount < searchResults.length && (
                        <div className="text-center py-3 text-gray-400 text-xs">
                          <div className="animate-pulse">Loading more...</div>
                          <div className="mt-1">{searchResults.length - displayedCount} more tools available</div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>

              <DropdownMenuItem onClick={() => navigate('/')} className="text-cyan-100 hover:bg-cyan-500/20 mb-2 rounded">
                Home
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/our-story')} className="text-cyan-100 hover:bg-cyan-500/20 mb-2 rounded">
                📖 Our Story
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border-gray-700 mb-2" />
              
              {/* Browse Categories */}
              <DropdownMenuItem
                onClick={handleBrowseAITools}
                className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 font-medium mb-3 rounded-lg p-3"
              >
                🎯 Browse AI Tool Categories
              </DropdownMenuItem>
              
              <DropdownMenuSeparator className="border-gray-700 mb-3" />
              
              {/* Footer */}
              <div className="space-y-1">
                <DropdownMenuItem onClick={(e) => { e.preventDefault(); createTimePortalEffect('https://www.aitools.company'); }} className="text-cyan-100 hover:bg-cyan-500/20 rounded">
                  ABOUT AI WEB TOOLS LLC
                </DropdownMenuItem>
                
                {/* Register WEB3 Domains Accordion */}
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
                      <Globe className="w-4 h-4 mr-2" /> Register your WEB3 Domain
                    </span>
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isWeb3Open ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2 pl-6 max-h-64 overflow-y-auto pr-1">
                    <div className="text-xs text-cyan-400 mb-2 font-semibold">💰 Financial & Cash Transfer</div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/transfermoney'); }} className="flex-1 text-left">💸 .transfermoney</button>
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/transfercoin'); }} className="flex-1 text-left">🪙 .transfercoin</button>
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/cointransfer'); }} className="flex-1 text-left">💰 .cointransfer</button>
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/transfercash'); }} className="flex-1 text-left">💵 .transfercash</button>
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/cashtransfer'); }} className="flex-1 text-left">💴 .cashtransfer</button>
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                    </div>
                    
                    <div className="text-xs text-cyan-400 mt-3 mb-2 font-semibold">🤖 AI & Technology</div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/ai-tools?ref=olive-ears-obey'); }} className="flex-1 text-left">🧠 .ai-tools</button>
                      <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/.aiwebtools?ref=olive-ears-obey'); }} className="flex-1 text-left">🤖 .aiwebtools</button>
                      <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/aimainframe?ref=olive-ears-obey'); }} className="flex-1 text-left">🗄️ .aimainframe</button>
                      <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/aitoolscompany?ref=olive-ears-obey'); }} className="flex-1 text-left">🏢 .aitoolscompany</button>
                      <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                    </div>
                    
                    <div className="text-xs text-cyan-400 mt-3 mb-2 font-semibold">🤖 Robotics & Automation</div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/robotsales?ref=olive-ears-obey'); }} className="flex-1 text-left">🦾 .robotsales</button>
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/robotshop?ref=olive-ears-obey'); }} className="flex-1 text-left">🛍️ .robotshop</button>
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/robotstore?ref=olive-ears-obey'); }} className="flex-1 text-left">🛒 .robotstore</button>
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                    </div>
                    
                    <div className="text-xs text-cyan-400 mt-3 mb-2 font-semibold">🌍 Global & World</div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/worldpeace?ref=olive-ears-obey'); }} className="flex-1 text-left">🕊️ .worldpeace</button>
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/worldtrade?ref=olive-ears-obey'); }} className="flex-1 text-left">🌐 .worldtrade</button>
                      <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); createTimePortalEffect('https://freename.io/discover/worldtrader?ref=olive-ears-obey'); }} className="flex-1 text-left">💹 .worldtrader</button>
                      <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                <DropdownMenuItem className="text-cyan-100 hover:bg-cyan-500/20 rounded">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+14758008096">475-800-8096</a>
                </DropdownMenuItem>

                {/* Download ALL AI tools CSV - tablet only */}
                <DropdownMenuItem onClick={handleDownloadAllToolsCSV} className="text-cyan-100 hover:bg-cyan-500/20 rounded">
                  <Download className="w-4 h-4 mr-2" />
                  📊 Download ALL {toolStats.marketing} AI Tools (CSV)
                </DropdownMenuItem>
                
                {/* Clone This Site Button with Gold Styling */}
                <DropdownMenuItem 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    createTimePortalEffect('https://lovable.dev/projects/bdde8922-3051-4bbc-b084-326f95a6d771?via=aiwebtools'); 
                  }}
                  className="text-yellow-100 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-amber-500/20 rounded flex items-center space-x-2 bg-gradient-to-r from-yellow-600/10 to-amber-600/10 border border-yellow-500/30 p-2 font-semibold"
                >
                  <Copy className="w-4 h-4" />
                  <span>Clone This Site</span>
                </DropdownMenuItem>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  );
};

export default TabletMenu;
