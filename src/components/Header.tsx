
import { Button } from "@/components/ui/button";
import { Menu, Phone, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { getCategoriesWithCounts } from "@/data/toolsData";

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
    // Small delay to ensure scroll completes before filtering
    setTimeout(() => {
      const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.value = category;
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }, 500);
  };

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                AITOOLS.STUDIO
              </div>
              <div className="text-sm text-gray-600">
                Presented by{" "}
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ai-purple hover:text-ai-blue transition-colors underline"
                >
                  AiWebTools.AI
                </a>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-ai-purple transition-colors">Home</a>
            
            {/* AI Tools Dropdown with Categories */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-ai-purple transition-colors">
                <span>🆓Industry Specific AI</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto bg-white shadow-lg border border-gray-200">
                <div className="p-2">
                  <div className="font-semibold text-ai-purple mb-2">Browse by Category</div>
                  {Object.entries(categoriesWithCounts).map(([category, count]) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => scrollToCategory(category)}
                      className="flex justify-between items-center cursor-pointer hover:bg-gray-100 rounded-md p-2"
                    >
                      <span className="text-sm">{category}</span>
                      <span className="text-xs bg-ai-purple text-white px-2 py-1 rounded-full">
                        {count}
                      </span>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={scrollToTools}
                    className="cursor-pointer hover:bg-gray-100 rounded-md p-2 font-medium text-ai-purple"
                  >
                    View All Tools
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#services" className="text-gray-700 hover:text-ai-purple transition-colors">More</a>
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <a 
                href="tel:+14758008096" 
                className="hover:text-ai-purple transition-colors cursor-pointer"
              >
                475-800-8096
              </a>
            </div>
          </nav>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto bg-white shadow-lg">
                <div className="p-2">
                  <DropdownMenuItem onClick={() => window.location.href = '#home'}>
                    Home
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <div className="font-semibold text-ai-purple mb-2 px-2">AI Tool Categories</div>
                  {Object.entries(categoriesWithCounts).map(([category, count]) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => scrollToCategory(category)}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm">{category}</span>
                      <span className="text-xs bg-ai-purple text-white px-2 py-1 rounded-full">
                        {count}
                      </span>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => window.location.href = '#services'}>
                    More Services
                  </DropdownMenuItem>
                  <DropdownMenuItem>
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
