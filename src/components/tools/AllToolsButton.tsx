
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AllToolsButtonProps {
  selectedCategory: string | null;
  totalTools: number;
  onCategoryChange: (category: string | null) => void;
}

const AllToolsButton = ({ selectedCategory, totalTools, onCategoryChange }: AllToolsButtonProps) => {
  return (
    <div className="flex justify-center mb-6">
      <Button
        onClick={() => onCategoryChange(null)}
        variant={selectedCategory === null ? "default" : "outline"}
        size="lg"
        className={`text-sm transition-all duration-300 ${
          selectedCategory === null
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105"
            : "bg-gray-800/70 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
      >
        🎯 All SubCategories
        <Badge variant="secondary" className="ml-2 text-xs bg-black/30 text-gray-300">
          {totalTools}
        </Badge>
      </Button>
    </div>
  );
};

export default AllToolsButton;
