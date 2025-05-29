
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import ToolCard from "@/components/tools/ToolCard";
import { Button } from "@/components/ui/button";
import { Tool } from "@/types/tools";

interface ToolsDisplayProps {
  selectedCategory: string;
  categoryTools: Tool[];
}

const ToolsDisplay = forwardRef<HTMLDivElement, ToolsDisplayProps>(
  ({ selectedCategory, categoryTools }, ref) => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate('/');
    };

    return (
      <div className="mb-16 px-4 sm:px-0" ref={ref}>
        {categoryTools.length > 0 ? (
          <>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                AI Tools in {selectedCategory}
              </h2>
              <p className="text-sm sm:text-base text-gray-400">
                Showing all {categoryTools.length} tools
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {categoryTools.map((tool, index) => (
                <ToolCard key={`${tool.title}-${index}`} tool={tool} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="text-4xl sm:text-6xl mb-4">🔍</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">No Tools Found</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6">This category doesn't have any tools yet.</p>
            <Button 
              onClick={goBack}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Explore Other Categories
            </Button>
          </div>
        )}
      </div>
    );
  }
);

ToolsDisplay.displayName = "ToolsDisplay";

export default ToolsDisplay;
