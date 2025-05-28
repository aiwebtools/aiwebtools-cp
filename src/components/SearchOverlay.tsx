
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
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
      const results = searchTools(allTools, value).slice(0, 12); // Show more results
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
    <div className="fixed inset-0 bg-black/95 z-50 flex items-start justify-center pt-20 px-4">
      <div className="search-overlay-content w-full max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-cyan-100 cyber-glow">Search AI Tools</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-cyan-100 hover:text-cyan-400 hover:bg-cyan-500/20"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-6 h-6" />
          <Input
            type="text"
            placeholder="Search 600+ AI tools... Try: 'Learn Any Skill', 'Einstein', 'Cannabis', 'Fishing', 'Dream Interpreter', 'Celebrity Chat', 'Binary Converter', 'Peace', 'Automotive', 'Food Quality'"
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

        {searchResults.length > 0 && (
          <div className="bg-gray-900/95 border border-purple-500/30 rounded-xl shadow-2xl backdrop-blur-md max-h-96 overflow-y-auto neon-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
              {searchResults.map((tool, index) => {
                const toolIndex = allTools.findIndex(t => t.title === tool.title);
                return (
                  <Link
                    key={index}
                    to={`/tool/${toolIndex}`}
                    onClick={handleResultClick}
                    className="flex items-center space-x-4 p-4 hover:bg-purple-500/20 transition-all duration-300 rounded-lg border border-gray-800 hover:border-cyan-500/30 interactive-button"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xl flex-shrink-0 glow-effect">
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
        )}

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
      </div>
    </div>
  );
};

export default SearchOverlay;
