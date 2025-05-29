import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlobalSearchBar from "@/components/GlobalSearchBar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      // Calculate the position to scroll to the first tool card
      const headerHeight = 80; // Account for fixed header
      const targetPosition = toolsSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'AI Tools', href: '/' },
    { label: 'Categories', href: '/categories' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Submit AI Tool', href: '/submit-tool' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="container flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
          AI Web Tools
        </Link>

        <GlobalSearchBar />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          
          <Button
            variant="ghost"
            onClick={scrollToTools}
            className="text-cyan-100 hover:text-cyan-400 transition-colors"
          >
            View All Tools
          </Button>
          
          <Link to="/submit-tool">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
              Submit AI Tool
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <Button variant="ghost" className="md:hidden text-gray-400" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-cyan-500/20">
          <div className="flex flex-col space-y-4 p-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-cyan-100 hover:text-cyan-400 transition-colors justify-start"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <Button
              variant="ghost"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToTools();
              }}
              className="text-cyan-100 hover:text-cyan-400 transition-colors justify-start"
            >
              View All Tools
            </Button>
            
            <Link to="/submit-tool" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white justify-start">
                Submit AI Tool
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
