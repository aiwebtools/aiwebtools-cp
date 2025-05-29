
import { Phone, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { allTools } from "@/data/toolsData";
import { getCategoriesWithCounts } from "@/utils/categoryUtils";

const Navigation = () => {
  const navigate = useNavigate();
  // Use the same consolidated category calculation as everywhere else
  const categoriesWithCounts = getCategoriesWithCounts(allTools);

  // Psychologically Strategic Order
  const categoryOrder = [
    "Creative Suites",
    "Advanced AI Tools", 
    "Learning & Education",
    "Time & History",
    "Spirituality & Wellness",
    "Emergency Services",
    "Game Design & Development"
  ];

  // Sort categories according to strategic order, then alphabetically for others
  const sortedCategories = Object.entries(categoriesWithCounts).sort(([a], [b]) => {
    const aIndex = categoryOrder.indexOf(a);
    const bIndex = categoryOrder.indexOf(b);
    
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    } else if (aIndex !== -1) {
      return -1;
    } else if (bIndex !== -1) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  });

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
    navigate('/category/All%20Categories');
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
        <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto bg-black/95 shadow-lg border border-cyan-500/30 backdrop-blur-md">
          <div className="p-2">
            <DropdownMenuItem
              onClick={viewAllTools}
              className="cursor-pointer hover:bg-cyan-500/20 rounded-md p-2 font-medium text-cyan-400 mb-2"
            >
              🔍 View All Tools
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-gray-700" />
            <div className="font-semibold text-cyan-400 mb-2">Browse by Category</div>
            {sortedCategories.map(([category, count]) => (
              <DropdownMenuItem key={category} asChild>
                <Link
                  to={`/category/${encodeURIComponent(category)}`}
                  className="flex justify-between items-center cursor-pointer hover:bg-cyan-500/20 rounded-md p-2 text-cyan-100 w-full"
                >
                  <span className="text-sm">{category}</span>
                  <span className="text-xs bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-2 py-1 rounded-full font-bold">
                    {count}
                  </span>
                </Link>
              </DropdownMenuItem>
            ))}
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
