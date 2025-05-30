
import { ChevronDown, Star, History, Filter } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSub,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { getSortedStandardizedCategories } from "@/utils/categoryTitles";

const EnhancedNavigation = () => {
  const navigate = useNavigate();
  const sortedCategories = getSortedStandardizedCategories();
  
  // Group categories for better organization
  const categoryGroups = {
    "Popular": sortedCategories.slice(0, 6),
    "Business & Productivity": sortedCategories.filter(([cat]) => 
      cat.includes("Business") || cat.includes("Productivity") || cat.includes("Marketing")
    ),
    "Creative & Design": sortedCategories.filter(([cat]) => 
      cat.includes("Creative") || cat.includes("Design") || cat.includes("Art") || cat.includes("Image")
    ),
    "Development & Technical": sortedCategories.filter(([cat]) => 
      cat.includes("Development") || cat.includes("Code") || cat.includes("Technical")
    ),
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

  return (
    <nav className="hidden lg:flex items-center space-x-6 flex-shrink-0">
      <button 
        onClick={() => navigate('/')}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        Home
      </button>
      
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap">
          <span>🚀 AI Tools</span>
          <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-96 max-h-96 overflow-y-auto bg-black/95 shadow-xl border border-cyan-500/30 backdrop-blur-md">
          <div className="p-2">
            {Object.entries(categoryGroups).map(([groupName, categories]) => (
              <DropdownMenuSub key={groupName}>
                <DropdownMenuSubTrigger className="cursor-pointer hover:bg-cyan-500/20 rounded-md p-2 font-medium text-cyan-400">
                  {groupName}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="bg-black/95 border-cyan-500/30">
                    {categories.map(([category, count]) => (
                      <DropdownMenuItem key={category} asChild>
                        <Link
                          to={`/category/${encodeURIComponent(category)}`}
                          className="flex justify-between items-center cursor-pointer hover:bg-cyan-500/20 rounded-md p-2 text-cyan-100 w-full"
                        >
                          <span className="text-sm">{category}</span>
                          <Badge variant="secondary" className="text-xs">
                            {count}
                          </Badge>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap">
          <Star className="w-4 h-4" />
          <span>Features</span>
          <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 bg-black/95 shadow-xl border border-cyan-500/30 backdrop-blur-md">
          <DropdownMenuItem className="cursor-pointer hover:bg-cyan-500/20 rounded-md p-3">
            <Star className="w-4 h-4 mr-2" />
            <div>
              <div className="font-medium text-cyan-400">Favorites</div>
              <div className="text-xs text-gray-400">Save your favorite tools</div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-cyan-500/20 rounded-md p-3">
            <History className="w-4 h-4 mr-2" />
            <div>
              <div className="font-medium text-cyan-400">History</div>
              <div className="text-xs text-gray-400">Recently viewed tools</div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-cyan-500/20 rounded-md p-3">
            <Filter className="w-4 h-4 mr-2" />
            <div>
              <div className="font-medium text-cyan-400">Advanced Filters</div>
              <div className="text-xs text-gray-400">Filter by price, rating, features</div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link to="/about" className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap">
        About
      </Link>
      
      <Link to="/blog" className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap">
        Blog
      </Link>
    </nav>
  );
};

export default EnhancedNavigation;
