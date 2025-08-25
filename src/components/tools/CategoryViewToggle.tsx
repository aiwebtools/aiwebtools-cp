
import { Button } from "@/components/ui/button";

interface CategoryViewToggleProps {
  viewMode: 'main' | 'sub';
  onViewModeChange: (mode: 'main' | 'sub') => void;
}

const CategoryViewToggle = ({ viewMode, onViewModeChange }: CategoryViewToggleProps) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex bg-gray-800/50 rounded-lg p-1">
        <Button
          onClick={() => onViewModeChange('main')}
          variant={viewMode === 'main' ? "default" : "ghost"}
          size="sm"
          className={`text-sm ${
            viewMode === 'main'
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
              : "text-gray-300 hover:text-white"
          }`}
        >
          📁 Main Categories
        </Button>
        <Button
          onClick={() => onViewModeChange('sub')}
          variant={viewMode === 'sub' ? "default" : "ghost"}
          size="sm"
          className={`text-sm ${
            viewMode === 'sub'
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
              : "text-gray-300 hover:text-white"
          }`}
        >
          🗂️ All SubCategories
        </Button>
      </div>
    </div>
  );
};

export default CategoryViewToggle;
