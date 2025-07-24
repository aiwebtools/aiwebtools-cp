import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Home, Star, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface QuickActionsProps {
  onSearch?: () => void;
  className?: string;
}

const QuickActions = ({ onSearch, className = "" }: QuickActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const actions = [
    {
      icon: Home,
      label: "Home",
      action: () => navigate('/'),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Search,
      label: "Search",
      action: () => {
        onSearch?.();
        setIsOpen(false);
      },
      color: "bg-cyan-500 hover:bg-cyan-600"
    },
    {
      icon: Star,
      label: "Featured",
      action: () => navigate('/main-category/ALL%20AI%20TOOLS'),
      color: "bg-yellow-500 hover:bg-yellow-600"
    },
    {
      icon: Zap,
      label: "Popular",
      action: () => navigate('/main-category/PRODUCTIVITY'),
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  // Only show on mobile/tablet
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  if (!isMobile) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-40 md:hidden ${className}`}>
      {isOpen && (
        <div className="flex flex-col-reverse gap-2 mb-2">
          {actions.map((action, index) => (
            <Button
              key={action.label}
              onClick={action.action}
              className={`w-12 h-12 rounded-full ${action.color} text-white shadow-lg transition-all duration-300 animate-fade-in`}
              size="sm"
              aria-label={action.label}
            >
              <action.icon className="w-5 h-5" />
            </Button>
          ))}
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'} text-white shadow-lg transition-all duration-300`}
        size="sm"
        aria-label={isOpen ? "Close quick actions" : "Open quick actions"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>
    </div>
  );
};

export default QuickActions;