
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
              AI Web Tools LLC
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-ai-purple transition-colors">Home</a>
            <a href="#tools" className="text-gray-700 hover:text-ai-purple transition-colors">🆓Industry Specific AI</a>
            <a href="#services" className="text-gray-700 hover:text-ai-purple transition-colors">More</a>
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span>475-800-8096</span>
            </div>
          </nav>
          
          <Button variant="outline" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
