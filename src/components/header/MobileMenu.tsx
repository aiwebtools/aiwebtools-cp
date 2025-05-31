import { Menu, Phone, Search, X } from "lucide-react";
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
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";

const MobileMenu = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(50);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toolStats, setToolStats] = useState({ total: 0, marketing: "0+", categories: 0 });
  const searchRef = useRef(null);

  useEffect(() => {
    // Get accurate tool count
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

  const scrollToCategories = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const categoriesSection = document.getElementById('categories-section');
        if (categoriesSection) {
          categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const categoriesSection = document.getElementById('categories-section');
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleToolClick = (toolIndex: number) => {
    setSearchTerm("");
    setIsSearchOpen(false);
    setIsMenuOpen(false);
    navigate(`/tool/${toolIndex}`);
  };

  const handleDirectAccess = (tool: any, e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      console.log('🌀 Direct access clicked in mobile menu for:', tool.title);
      createTimePortalEffect(tool.directUrl);
      setSearchTerm("");
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setIsSearchOpen(false);
    setDisplayedCount(30);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setSearchTerm("");
    setIsSearchOpen(false);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    if (scrollHeight - scrollTop <= clientHeight + 50 && displayedCount < searchResults.length) {
      setDisplayedCount(prev => Math.min(prev + 30, searchResults.length));
    }
  };

  const displayedResults = searchResults.slice(0, displayedCount);

  return (
    <TooltipProvider>
      <div className="md:hidden">
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="border-cyan-500/30 bg-black/80 text-cyan-100 hover:bg-cyan-500/20 flex-shrink-0">
              <Menu className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[350px] bg-black/95 shadow-xl border border-cyan-500/30 backdrop-blur-md max-h-[80vh] overflow-hidden">
            <div className="p-3">
              {/* Header with Close Button */}
              <div className="text-center mb-4 relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="absolute -top-1 -right-1 h-6 w-6 p-0 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
                >
                  <X className="w-4 h-4" />
                </Button>
                <h3 className="text-lg font-bold text-cyan-400 mb-1">🎯 AI Web Tools</h3>
                <p className="text-xs text-cyan-200">Navigate our platform</p>
              </div>

              {/* Search Bar */}
              <div ref={searchRef} className="relative mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder={`Search ${toolStats.marketing} AI tools...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  {searchTerm && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearSearch}
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-gray-400 hover:text-white"
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
                        {searchResults.length} Results - Showing {displayedCount}
                        {displayedCount < searchResults.length && " - Scroll for more"}
                      </div>
                      {displayedResults.map((tool, index) => {
                        const toolIndex = allTools.findIndex(t => t.title === tool.title);
                        return (
                          <Tooltip key={`mobile-search-${tool.title}-${index}`} delayDuration={300}>
                            <TooltipTrigger asChild>
                              <div 
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer group transition-all duration-200"
                                onClick={() => handleToolClick(toolIndex)}
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

              <DropdownMenuItem onClick={() => { window.location.href = '#home'; setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 mb-2 rounded">
                Home
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border-gray-700 mb-2" />
              
              {/* Browse Categories */}
              <DropdownMenuItem
                onClick={scrollToCategories}
                className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 font-medium mb-3 rounded-lg p-3"
              >
                🎯 Browse AI Tool Categories
              </DropdownMenuItem>
              
              <DropdownMenuSeparator className="border-gray-700 mb-3" />
              
              {/* Footer */}
              <div className="space-y-1">
                <DropdownMenuItem onClick={() => { window.location.href = '#services'; setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 rounded">
                  More Services
                </DropdownMenuItem>
                <DropdownMenuItem className="text-cyan-100 hover:bg-cyan-500/20 rounded" onClick={() => setIsMenuOpen(false)}>
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+14758008096">475-800-8096</a>
                </DropdownMenuItem>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  );
};

export default MobileMenu;
