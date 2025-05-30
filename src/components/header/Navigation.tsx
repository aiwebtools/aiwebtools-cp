
import { Phone, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { getSortedStandardizedCategories } from "@/utils/categoryTitles";
import { getCategoryStyle } from "@/utils/categoryStyles";

const Navigation = () => {
  const navigate = useNavigate();
  // Use standardized category titles and consistent ordering
  const sortedCategories = getSortedStandardizedCategories();

  const scrollToHome = () => {
    // If we're already on the home page, just scroll to top
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
      navigate('/');
    }
  };

  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCategory = (category: string) => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        const event = new CustomEvent('selectCategory', { detail: category });
        window.dispatchEvent(event);
      }, 800);
    }
  };

  const viewAllTools = () => {
    // Navigate to home page and scroll to tools section to show all tools
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const toolsSection = document.getElementById('tools-section');
        if (toolsSection) {
          toolsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll to tools section
      const toolsSection = document.getElementById('tools-section');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="hidden lg:flex items-center space-x-6 flex-shrink-0">
      <button 
        onClick={scrollToHome}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        Home
      </button>
      
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap">
          <span>🆓Industry Specific AI</span>
          <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[900px] max-h-[600px] overflow-y-auto bg-black/95 shadow-xl border border-cyan-500/30 backdrop-blur-md">
          <div className="p-4">
            {/* Header Section */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                🎯 Explore AI Tools by Category
              </h3>
              <p className="text-cyan-200 text-sm">Choose from our organized collection of specialized AI tools</p>
            </div>

            {/* View All Tools Button */}
            <div className="flex justify-center mb-6">
              <DropdownMenuItem
                onClick={viewAllTools}
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                🔍 View All {sortedCategories.reduce((total, [, count]) => total + count, 0)} AI Tools
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator className="border-gray-700 mb-4" />

            {/* Categories Grid */}
            <div className="grid grid-cols-3 gap-4">
              {sortedCategories.map(([category, count]) => {
                const categoryStyle = getCategoryStyle(category);
                return (
                  <DropdownMenuItem key={category} asChild>
                    <Link
                      to={`/category/${encodeURIComponent(category)}`}
                      className="group flex flex-col items-center p-4 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 bg-gray-800/30 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-blue-600/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {categoryStyle.emoji}
                      </div>
                      <div className="text-center">
                        <div className="text-cyan-100 font-medium text-sm leading-tight mb-1 group-hover:text-white transition-colors">
                          {category}
                        </div>
                        <div className="text-xs bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-3 py-1 rounded-full font-bold">
                          {count} tools
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </div>

            <DropdownMenuSeparator className="border-gray-700 mt-6 mb-4" />

            {/* Footer Links */}
            <div className="flex justify-between items-center">
              <DropdownMenuItem onClick={() => window.location.href = '#services'} className="text-cyan-100 hover:bg-cyan-500/20 px-4 py-2 rounded">
                More Services
              </DropdownMenuItem>
              <DropdownMenuItem className="text-cyan-100 hover:bg-cyan-500/20 px-4 py-2 rounded">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+14758008096">475-800-8096</a>
              </DropdownMenuItem>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <a href="#services" className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap">More</a>
      <div className="flex items-center space-x-2 text-cyan-100 whitespace-nowrap">
        <Phone className="w-4 h-4" />
        <a 
          href="tel:+14758008096" 
          className="hover:text-cyan-400 transition-colors cursor-pointer"
        >
          475-800-8096
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
