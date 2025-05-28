
import { Button } from "@/components/ui/button";
import { Menu, Phone, ChevronDown, Home } from "lucide-react";
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

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCategory = (category: string) => {
    // First scroll to tools section
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
      
      // Wait for scroll to complete, then trigger category filter
      setTimeout(() => {
        // Dispatch custom event to trigger category selection
        const event = new CustomEvent('selectCategory', { detail: category });
        window.dispatchEvent(event);
      }, 800);
    }
  };

  return (
    <header className="bg-black/95 backdrop-blur-md border-b border-cyan-500/30 fixed top-0 w-full z-50 shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-4 flex-shrink-0">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
                AITOOLS.STUDIO
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                Presented by{" "}
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  AiWebTools.AI
                </a>
              </div>
            </div>
            <button
              onClick={scrollToHome}
              className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              title="Go to Home"
            >
              <Home className="w-5 h-5 text-white" />
            </button>
          </div>
          
          {/* Global Search Bar - Enhanced for better visibility */}
          <div className="hidden md:flex flex-1 justify-center max-w-2xl mx-4">
            <GlobalSearchBar />
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            <a href="#home" className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap">Home</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap">
                <span>🆓Industry Specific AI</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto bg-black/95 shadow-lg border border-cyan-500/30 backdrop-blur-md">
                <div className="p-2">
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
                  <DropdownMenuSeparator className="border-gray-700" />
                  <DropdownMenuItem
                    onClick={scrollToTools}
                    className="cursor-pointer hover:bg-cyan-500/20 rounded-md p-2 font-medium text-cyan-400"
                  >
                    View All Tools
                  </DropdownMenuItem>
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
          
          {/* Mobile Menu */}
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
                  <div className="font-semibold text-cyan-400 mb-2 px-2">AI Tool Categories</div>
                  {Object.entries(categoriesWithCounts).map(([category, count]) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => scrollToCategory(category)}
                      className="flex justify-between items-center text-cyan-100 hover:bg-cyan-500/20"
                    >
                      <span className="text-sm">{category}</span>
                      <span className="text-xs bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-2 py-1 rounded-full font-bold">
                        {count}
                      </span>
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

          {/* Tablet Menu */}
          <div className="hidden md:flex lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-cyan-500/30 bg-black/80 text-cyan-100 hover:bg-cyan-500/20">
                  <Menu className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto bg-black/95 shadow-lg border border-cyan-500/30 backdrop-blur-md">
                <div className="p-2">
                  <DropdownMenuItem onClick={() => window.location.href = '#home'} className="text-cyan-100 hover:bg-cyan-500/20">
                    Home
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="border-gray-700" />
                  <div className="font-semibold text-cyan-400 mb-2 px-2">AI Tool Categories</div>
                  {Object.entries(categoriesWithCounts).map(([category, count]) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => scrollToCategory(category)}
                      className="flex justify-between items-center text-cyan-100 hover:bg-cyan-500/20"
                    >
                      <span className="text-sm">{category}</span>
                      <span className="text-xs bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-2 py-1 rounded-full font-bold">
                        {count}
                      </span>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
