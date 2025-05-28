
import { useState, useEffect } from "react";
import { Search, X, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchTools, allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";
import { Link } from "react-router-dom";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Tool[]>([]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      const results = searchTools(allTools, value).slice(0, 8); // Limit to 8 results for better UX
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = () => {
    onClose();
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleBackClick = () => {
    onClose();
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && target.closest('.search-overlay-content') === null) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 backdrop-blur-sm">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-purple-500/30">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackClick}
              className="text-cyan-100 hover:text-cyan-400 hover:bg-cyan-500/20 p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-2xl font-bold text-cyan-100 cyber-glow">Search AI Web Tools</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-cyan-100 hover:text-cyan-400 hover:bg-cyan-500/20 p-2"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Search Content */}
        <div className="flex-1 container mx-auto px-6 py-8 max-w-4xl">
          <div className="search-overlay-content">
            {/* Search Input */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-6 h-6" />
              <Input
                type="text"
                placeholder="Search 600+ AI tools... Try: 'Learn Any Skill', 'Einstein', 'Cannabis', 'Fishing', 'Dream Interpreter'"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                onKeyDown={handleKeyDown}
                className="pl-14 pr-6 py-6 w-full bg-gray-900/90 border-2 border-purple-500/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 text-cyan-100 placeholder-gray-400 rounded-xl backdrop-blur-sm neon-border glow-effect text-lg"
                autoFocus
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
                {searchTerm ? `${searchResults.length} results` : '600+ Tools'}
              </div>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="bg-gray-900/95 border border-purple-500/30 rounded-xl shadow-2xl backdrop-blur-md neon-border">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-cyan-100 mb-4 cyber-glow">Search Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {searchResults.map((tool, index) => {
                      const toolIndex = allTools.findIndex(t => t.title === tool.title);
                      return (
                        <Link
                          key={index}
                          to={`/tool/${toolIndex}`}
                          onClick={handleResultClick}
                          className="flex items-center space-x-4 p-4 hover:bg-purple-500/20 transition-all duration-300 rounded-lg border border-gray-800 hover:border-cyan-500/30 interactive-button group"
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xl flex-shrink-0 glow-effect group-hover:scale-105 transition-transform">
                            {tool.emoji}
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="text-cyan-100 font-medium text-base cyber-glow truncate">{tool.title}</div>
                            <div className="text-gray-400 text-sm truncate">{tool.category}</div>
                            <div className="text-gray-500 text-xs truncate mt-1">{tool.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* No Results */}
            {searchTerm && searchResults.length === 0 && (
              <div className="text-center py-12 bg-gray-900/50 rounded-xl border border-gray-700">
                <div className="text-gray-400 text-lg mb-4">No AI tools found for "{searchTerm}"</div>
                <Button 
                  onClick={() => setSearchTerm("")}
                  variant="outline" 
                  className="border-cyan-500/30 text-cyan-100 hover:bg-cyan-500/20"
                >
                  Clear Search
                </Button>
              </div>
            )}

            {/* Popular Categories */}
            {!searchTerm && (
              <div className="bg-gray-900/50 rounded-xl border border-purple-500/30 p-6">
                <h3 className="text-lg font-semibold text-cyan-100 mb-4 cyber-glow">Popular Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["AI Art", "Productivity", "Writing", "Chat", "Image Generation", "Business", "Learning", "Development"].map((category) => (
                    <button
                      key={category}
                      onClick={() => handleSearchChange(category)}
                      className="p-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 hover:border-cyan-500/40 rounded-lg text-cyan-100 text-sm transition-all duration-300 interactive-button"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
