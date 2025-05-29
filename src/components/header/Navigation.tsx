
import { Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { getCategoriesWithCounts } from "@/data/toolsData";

const Navigation = () => {
  const categoriesWithCounts = getCategoriesWithCounts();

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
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        const event = new CustomEvent('selectCategory', { detail: 'All Categories' });
        window.dispatchEvent(event);
      }, 800);
    }
  };

  return (
    <nav className="hidden lg:flex items-center space-x-6 flex-shrink-0">
      <a href="#home" className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap">Home</a>
      
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
            {Object.entries(categoriesWithCounts).map(([category, count]) => (
              <DropdownMenuItem
                key={category}
                onClick={() => scrollToCategory(category)}
                className="flex justify-between items-center cursor-pointer hover:bg-cyan-500/20 rounded-md p-2 text-cyan-100"
              >
                <span className="text-sm">{category}</span>
                <span className="text-xs bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-2 py-1 rounded-full font-bold">
                  {count}
                </span>
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
