import { useNavigate } from 'react-router-dom';
import { History, ChevronDown } from 'lucide-react';
import { useNavigationHistory } from '@/hooks/useNavigationHistory';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface NavigationHistoryDropdownProps {
  className?: string;
}

const NavigationHistoryDropdown = ({ className = '' }: NavigationHistoryDropdownProps) => {
  const navigate = useNavigate();
  const { previousPages } = useNavigationHistory();

  if (previousPages.length === 0) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-gray-800/60 text-gray-400 border border-gray-700/30 hover:border-purple-500/50 hover:text-purple-300 hover:bg-gray-700/60 transition-all duration-200 ${className}`}
        >
          <History className="w-3 h-3" />
          <span className="hidden sm:inline">Recent</span>
          <ChevronDown className="w-3 h-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-56 bg-gray-900 border border-gray-700/50 shadow-xl z-50"
      >
        <DropdownMenuLabel className="text-xs text-gray-400 flex items-center gap-2">
          <History className="w-3 h-3" />
          Recent Pages
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-700/50" />
        {previousPages.map((entry, index) => (
          <DropdownMenuItem
            key={`${entry.path}-${index}`}
            onClick={() => navigate(entry.path)}
            className="cursor-pointer text-gray-300 hover:text-white hover:bg-gray-800/80 focus:bg-gray-800/80 focus:text-white"
          >
            <span className="mr-2">{entry.emoji}</span>
            <span className="truncate">{entry.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigationHistoryDropdown;
