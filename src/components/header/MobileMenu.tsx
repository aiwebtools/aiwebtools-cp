
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

const MobileMenu = () => {
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
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="border-cyan-500/30 bg-black/80 text-cyan-100 hover:bg-cyan-500/20 flex-shrink-0">
            <Menu className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px] bg-black/95 shadow-xl border border-cyan-500/30 backdrop-blur-md">
          <div className="p-3">
            {/* Header */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-cyan-400 mb-1">🎯 AI Web Tools</h3>
              <p className="text-xs text-cyan-200">Navigate our platform</p>
            </div>

            <DropdownMenuItem onClick={() => window.location.href = '#home'} className="text-cyan-100 hover:bg-cyan-500/20 mb-2 rounded">
              Home
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-gray-700 mb-2" />
            
            {/* Browse Categories */}
            <DropdownMenuItem
              onClick={scrollToCategories}
              className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 font-medium mb-3 rounded-lg p-3"
            >
              🎯 Browse AI Tool Categories
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="border-gray-700 mb-3" />
            
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
