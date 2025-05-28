
import { Button } from "@/components/ui/button";
import { Menu, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { getCategoriesWithCounts } from "@/data/toolsData";
import GlobalSearchBar from "./GlobalSearchBar";

const Header = () => {
  const categoriesWithCounts = getCategoriesWithCounts();

  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCategory = (category: string) => {
    scrollToTools();
    setTimeout(() => {
      const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.value = category;
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }, 500);
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-md border-b border-purple-500/30 sticky top-0 z-50 shadow-lg shadow-purple-500/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AITOOLS.STUDIO
              </div>
              <div className="text-sm text-gray-400">
                Presented by{" "}
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-purple-400 transition-colors underline"
                >
                  AiWebTools.AI
                </a>
              </div>
            </div>
          </div>
          
          {/* Global Search Bar */}
          <div className="hidden md:flex flex-1 justify-center max-w-md mx-8">
            <GlobalSearchBar />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-cyan-100 hover:text-cyan-400 transition-colors">Home</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-cyan-100 hover:text-cyan-400 transition-colors">
                <span>🆓Industry Specific AI</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto bg-gray-900/95 shadow-lg border border-purple-500/30 backdrop-blur-md">
                <div className="p-2">
                  <div className="font-semibold text-cyan-400 mb-2">Browse by Category</div>
                  {Object.entries(categoriesWithCounts).map(([category, count]) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => scrollToCategory(category)}
                      className="flex justify-between items-center cursor-pointer hover:bg-purple-500/20 rounded-md p-2 text-cyan-100"
                    >
                      <span className="text-sm">{category}</span>
                      <span className="text-xs bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-2 py-1 rounded-full font-bold">
                        {count}
                      </span>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="border-gray-700" />
                  <DropdownMenuItem
                    onClick={scrollToTools}
                    className="cursor-pointer hover:bg-purple-500/20 rounded-md p-2 font-medium text-cyan-400"
                  >
                    View All Tools
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#services" className="text-cyan-100 hover:text-cyan-400 transition-colors">More</a>
            <div className="flex items-center space-x-2 text-cyan-100">
              <Phone className="w-4 h-4" />
              <a 
                href="tel:+14758008096" 
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                475-800-8096
              </a>
            </div>
          </nav>
          
          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex-1 max-w-xs">
              <GlobalSearchBar />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-purple-500/30 bg-gray-900/80 text-cyan-100 hover:bg-purple-500/20">
                  <Menu className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto bg-gray-900/95 shadow-lg border border-purple-500/30 backdrop-blur-md">
                <div className="p-2">
                  <DropdownMenuItem onClick={() => window.location.href = '#home'} className="text-cyan-100 hover:bg-purple-500/20">
                    Home
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="border-gray-700" />
                  <div className="font-semibold text-cyan-400 mb-2 px-2">AI Tool Categories</div>
                  {Object.entries(categoriesWithCounts).map(([category, count]) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => scrollToCategory(category)}
                      className="flex justify-between items-center text-cyan-100 hover:bg-purple-500/20"
                    >
                      <span className="text-sm">{category}</span>
                      <span className="text-xs bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-2 py-1 rounded-full font-bold">
                        {count}
                      </span>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="border-gray-700" />
                  <DropdownMenuItem onClick={() => window.location.href = '#services'} className="text-cyan-100 hover:bg-purple-500/20">
                    More Services
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-cyan-100 hover:bg-purple-500/20">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+14758008096">475-800-8096</a>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
