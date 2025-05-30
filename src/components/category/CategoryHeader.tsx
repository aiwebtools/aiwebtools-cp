
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Grid3X3 } from "lucide-react";

interface CategoryHeaderProps {
  selectedCategory: string;
  toolsCount: number;
  onScrollToCategories: () => void;
}

const CategoryHeader = ({ selectedCategory, toolsCount, onScrollToCategories }: CategoryHeaderProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="text-center mb-12">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <Button 
          onClick={goBack} 
          variant="outline" 
          className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <Button 
          onClick={onScrollToCategories} 
          variant="outline" 
          className="border-pink-500/30 text-pink-300 hover:bg-pink-500/20 hover:border-pink-400/50 transition-all duration-300"
        >
          Browse Categories
        </Button>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
        <Grid3X3 className="inline-block w-8 h-8 md:w-10 md:h-10 mr-3 text-purple-400" />
        {selectedCategory}
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 mb-6">
        Discover {toolsCount} AI tools in this category
      </p>
      
      <Badge variant="outline" className="text-lg px-6 py-3 border-purple-400 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300">
        {toolsCount} Tools Available
      </Badge>
    </div>
  );
};

export default CategoryHeader;
