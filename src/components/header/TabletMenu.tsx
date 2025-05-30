
import { Menu, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const TabletMenu = () => {
  const navigate = useNavigate();

  const scrollToCategories = () => {
    // Navigate to home page and scroll to categories section
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const categoriesSection = document.getElementById('categories-section');
        if (categoriesSection) {
          categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const categoriesSection = document.getElementById('categories-section');
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="hidden md:flex lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="border-cyan-500/30 bg-black/80 text-cyan-100 hover:bg-cyan-500/20">
            <Menu className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[400px] bg-black/95 shadow-xl border border-cyan-500/30 backdrop-blur-md">
          <div className="p-4">
            {/* Header */}
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                🎯 AI Web Tools Directory
              </h3>
              <p className="text-cyan-200 text-sm">Navigate our AI tools platform</p>
            </div>

            <DropdownMenuItem onClick={() => window.location.href = '#home'} className="text-cyan-100 hover:bg-cyan-500/20 mb-2 rounded">
              Home
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-gray-700 mb-3" />
            
            {/* Browse Categories */}
            <div className="flex justify-center mb-4">
              <DropdownMenuItem
                onClick={scrollToCategories}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300"
              >
                🎯 Browse AI Tool Categories
              </DropdownMenuItem>
            </div>
            
            <DropdownMenuSeparator className="border-gray-700 mb-4" />
            
            {/* Footer */}
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
    </div>
  );
};

export default TabletMenu;
