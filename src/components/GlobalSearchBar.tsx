
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchTools, allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";
import { Link } from "react-router-dom";

const GlobalSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Tool[]>([]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      const results = searchTools(allTools, value).slice(0, 8); // Limit to 8 results
      setSearchResults(results);
      setIsOpen(true);
    } else {
      setSearchResults([]);
      setIsOpen(false);
    }
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div className="relative max-w-md w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search AI tools..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10 pr-4 py-2 bg-gray-900/80 border-2 border-purple-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-cyan-100 placeholder-gray-400 rounded-lg backdrop-blur-sm"
        />
      </div>
      
      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 border border-purple-500/30 rounded-lg shadow-2xl backdrop-blur-md z-50 max-h-80 overflow-y-auto">
          {searchResults.map((tool, index) => {
            const toolIndex = allTools.findIndex(t => t.title === tool.title);
            return (
              <Link
                key={index}
                to={`/tool/${toolIndex}`}
                onClick={handleResultClick}
                className="flex items-center space-x-3 p-3 hover:bg-purple-500/20 transition-colors border-b border-gray-800 last:border-b-0"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-sm flex-shrink-0">
                  {tool.emoji}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="text-cyan-100 font-medium truncate">{tool.title}</div>
                  <div className="text-gray-400 text-xs truncate">{tool.category}</div>
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
