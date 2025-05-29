
import { Menu, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { allTools } from "@/data/toolsData";
import { getCategoriesWithCounts } from "@/utils/categoryUtils";
import GlobalSearchBar from "../GlobalSearchBar";

const MobileMenu = () => {
  const categoriesWithCounts = getCategoriesWithCounts(allTools);

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
    <div className="md:hidden flex items-center space-x-2">
      <div className="flex-1 min-w-0 max-w-xs">
        <GlobalSearchBar />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="border-cyan-500/30 bg-black/80 text-cyan-100 hover:bg-cyan-500/20 flex-shrink-0">
            <Menu className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto bg-black/95 shadow-lg border border-cyan-500/30 backdrop-blur-md">
          <div className="p-2">
            <DropdownMenuItem onClick={() => window.location.href = '#home'} className="text-cyan-100 hover:bg-cyan-500/20">
              Home
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-gray-700" />
            <DropdownMenuItem
              onClick={viewAllTools}
              className="text-cyan-400 hover:bg-cyan-500/20 font-medium"
            >
              🔍 View All Tools
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-gray-700" />
            <div className="font-semibold text-cyan-400 mb-2 px-2">AI Tool Categories</div>
            {Object.entries(categoriesWithCounts).map(([category, count]) => (
              <DropdownMenuItem key={category} asChild>
                <Link
                  to={`/category/${encodeURIComponent(category)}`}
                  className="flex justify-between items-center text-cyan-100 hover:bg-cyan-500/20 w-full p-2 rounded"
                >
                  <span className="text-sm">{category}</span>
                  <span className="text-xs bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-2 py-1 rounded-full font-bold">
                    {count}
                  </span>
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="border-gray-700" />
            <DropdownMenuItem onClick={() => window.location.href = '#services'} className="text-cyan-100 hover:bg-cyan-500/20">
              More Services
            </DropdownMenuItem>
            <DropdownMenuItem className="text-cyan-100 hover:bg-cyan-500/20">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+14758008096">475-800-8096</a>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
