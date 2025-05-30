
import { Menu, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { getSortedStandardizedCategories } from "@/utils/categoryTitles";
import { getCategoryStyle } from "@/utils/categoryStyles";

const MobileMenu = () => {
  const navigate = useNavigate();
  // Use standardized category titles and consistent ordering
  const sortedCategories = getSortedStandardizedCategories();

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
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="border-cyan-500/30 bg-black/80 text-cyan-100 hover:bg-cyan-500/20 flex-shrink-0">
            <Menu className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[350px] max-h-[500px] overflow-y-auto bg-black/95 shadow-xl border border-cyan-500/30 backdrop-blur-md">
          <div className="p-3">
            {/* Header */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-cyan-400 mb-1">🎯 AI Tools</h3>
              <p className="text-xs text-cyan-200">Choose your category</p>
            </div>

            <DropdownMenuItem onClick={() => window.location.href = '#home'} className="text-cyan-100 hover:bg-cyan-500/20 mb-2 rounded">
              Home
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-gray-700 mb-2" />
            
            {/* View All Tools */}
            <DropdownMenuItem
              onClick={viewAllTools}
              className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 font-medium mb-3 rounded-lg p-3"
            >
              🔍 View All {sortedCategories.reduce((total, [, count]) => total + count, 0)} Tools
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="border-gray-700 mb-3" />

            {/* Categories Grid */}
            <div className="space-y-2">
              <div className="font-semibold text-cyan-400 mb-2 text-sm">Browse Categories</div>
              {sortedCategories.map(([category, count]) => {
                const categoryStyle = getCategoryStyle(category);
                return (
                  <DropdownMenuItem key={category} asChild>
                    <Link
                      to={`/category/${encodeURIComponent(category)}`}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 bg-gray-800/30 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-600/10 text-cyan-100 hover:text-white w-full transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{categoryStyle.emoji}</span>
                        <span className="text-sm font-medium">{category}</span>
                      </div>
                      <span className="text-xs bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-2 py-1 rounded-full font-bold">
                        {count}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </div>

            <DropdownMenuSeparator className="border-gray-700 mt-4 mb-2" />
            
            {/* Footer */}
            <div className="space-y-1">
              <DropdownMenuItem onClick={() => window.location.href = '#services'} className="text-cyan-100 hover:bg-cyan-500/20 rounded">
                More Services
              </DropdownMenuItem>
              <DropdownMenuItem className="text-cyan-100 hover:bg-cyan-500/20 rounded">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+14758008096">475-800-8096</a>
              </DropdownMenuItem>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
