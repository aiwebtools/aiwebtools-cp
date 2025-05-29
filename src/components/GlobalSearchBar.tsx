
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchTools, allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";
import { Link } from "react-router-dom";

const GlobalSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Tool[]>([]);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const handleSearchChange = (value: string) => {
    console.log("Header search - handleSearchChange called with:", value);
    setSearchTerm(value);
    if (value.trim()) {
      console.log("Header search - searching tools with term:", value);
      const results = searchTools(allTools, value).slice(0, 8); // Limit to 8 results
      console.log("Header search - search results:", results);
      setSearchResults(results);
      setIsOpen(true);
      console.log("Header search - isOpen set to true");
    } else {
      console.log("Header search - clearing results");
      setSearchResults([]);
      setIsOpen(false);
    }
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setSearchTerm("");
    setSearchResults([]);
    setIsMobileSearchOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm("");
      setSearchResults([]);
      setIsMobileSearchOpen(false);
    }
  };

  const handleInputClick = () => {
    console.log("Header search - input clicked, window width:", window.innerWidth);
    // Only open mobile overlay on small screens
    if (window.innerWidth < 768) {
      setIsMobileSearchOpen(true);
    }
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
    setSearchTerm("");
    setSearchResults([]);
    setIsOpen(false);
  };

  console.log("Header search - rendering, isOpen:", isOpen, "searchResults.length:", searchResults.length, "isMobileSearchOpen:", isMobileSearchOpen);

  return (
    <div className="relative w-full max-w-lg">
      {/* Mobile Search Dropdown */}
      {isMobileSearchOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-50 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-cyan-100 text-lg font-semibold">Search AI Tools</h2>
            <button onClick={closeMobileSearch} className="text-cyan-100 hover:text-cyan-400">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search AI tools..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-12 pr-4 py-4 w-full bg-gray-900/90 border-2 border-purple-500/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 text-cyan-100 placeholder-gray-400 rounded-lg backdrop-blur-sm neon-border glow-effect text-lg"
              autoFocus
            />
          </div>
          
          {searchResults.length > 0 && (
            <div className="mt-4 bg-gray-900/95 border border-purple-500/30 rounded-lg shadow-2xl backdrop-blur-md max-h-96 overflow-y-auto">
              {searchResults.map((tool, index) => {
                const toolIndex = allTools.findIndex(t => t.title === tool.title);
                return (
                  <Link
                    key={index}
                    to={`/tool/${toolIndex}`}
                    onClick={handleResultClick}
                    className="flex items-center space-x-3 p-4 hover:bg-purple-500/20 transition-all duration-300 border-b border-gray-800 last:border-b-0"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xl flex-shrink-0">
                      {tool.emoji}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="text-cyan-100 font-medium text-lg">{tool.title}</div>
                      <div className="text-gray-400 text-sm">{tool.category}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Regular Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5 z-10" />
        <Input
          type="text"
          placeholder="Search AI tools..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onClick={handleInputClick}
          className="pl-12 pr-4 py-3 w-full bg-gray-900/90 border-2 border-purple-500/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 text-cyan-100 placeholder-gray-400 rounded-lg backdrop-blur-sm neon-border glow-effect text-base"
        />
      </div>
      
      {/* Desktop Results */}
      {isOpen && searchResults.length > 0 && !isMobileSearchOpen && (
        <div className="hidden md:block absolute top-full left-0 right-0 mt-2 bg-gray-900/95 border border-purple-500/30 rounded-lg shadow-2xl backdrop-blur-md z-50 max-h-80 overflow-y-auto neon-border">
          {searchResults.map((tool, index) => {
            const toolIndex = allTools.findIndex(t => t.title === tool.title);
            return (
              <Link
                key={index}
                to={`/tool/${toolIndex}`}
                onClick={handleResultClick}
                className="flex items-center space-x-3 p-4 hover:bg-purple-500/20 transition-all duration-300 border-b border-gray-800 last:border-b-0 interactive-button"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-lg flex-shrink-0 glow-effect">
                  {tool.emoji}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="text-cyan-100 font-medium truncate cyber-glow text-base">{tool.title}</div>
                  <div className="text-gray-400 text-sm truncate">{tool.category}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GlobalSearchBar;
