import { useNavigate } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import NavigationHistoryDropdown from './NavigationHistoryDropdown';

export interface BreadcrumbItem {
  label: string;
  path?: string;
  emoji?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbNav = ({ items, className = '' }: BreadcrumbNavProps) => {
  const navigate = useNavigate();

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center justify-center flex-wrap gap-1 ${className}`}
    >
      {/* Home always first */}
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-800/60 text-gray-400 border border-gray-700/30 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-gray-700/60 transition-all duration-200"
      >
        <Home className="w-3 h-3" />
        <span className="hidden sm:inline">Home</span>
      </button>

      {/* History dropdown */}
      <NavigationHistoryDropdown />

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          <ChevronRight className="w-3 h-3 text-gray-600" />
          
          {item.path ? (
            <button
              onClick={() => navigate(item.path!)}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-800/60 text-gray-400 border border-gray-700/30 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-gray-700/60 transition-all duration-200"
            >
              {item.emoji && <span>{item.emoji}</span>}
              <span className="max-w-[120px] sm:max-w-[200px] truncate">{item.label}</span>
            </button>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              {item.emoji && <span>{item.emoji}</span>}
              <span className="max-w-[120px] sm:max-w-[200px] truncate font-medium">{item.label}</span>
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default BreadcrumbNav;
