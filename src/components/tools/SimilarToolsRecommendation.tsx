
import { Tool } from "@/types/tools";
import ToolCard from "./ToolCard";

interface SimilarToolsRecommendationProps {
  similarTools: Tool[];
  originalCount: number;
  searchTerm?: string;
  selectedCategory?: string | null;
}

const SimilarToolsRecommendation = ({ 
  similarTools, 
  originalCount, 
  searchTerm, 
  selectedCategory 
}: SimilarToolsRecommendationProps) => {
  if (similarTools.length === 0) return null;

  const getRecommendationTitle = () => {
    if (searchTerm) {
      return `Tools related to "${searchTerm}"`;
    }
    if (selectedCategory) {
      return `More tools like ${selectedCategory}`;
    }
    return "You might also like";
  };

  const getRecommendationSubtitle = () => {
    if (searchTerm) {
      return `Found ${originalCount} direct matches for your search`;
    }
    if (selectedCategory) {
      return `Found ${originalCount} tools in ${selectedCategory}`;
    }
    return `Found ${originalCount} direct matches`;
  };

  return (
    <div className="mt-12 px-4 sm:px-0">
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 mb-4">
          <span className="text-2xl mr-3">💡</span>
          <div>
            <h3 className="text-lg font-semibold text-white">
              {getRecommendationTitle()}
            </h3>
            <p className="text-sm text-gray-300">
              {getRecommendationSubtitle()} • Here are {similarTools.length} similar tools
            </p>
          </div>
        </div>
      </div>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        style={{ 
          touchAction: 'pan-y',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {similarTools.map((tool, index) => {
          // Highlight your AI Web Tools creations with a special badge
          const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app');
          
          return (
            <div key={`similar-${tool.title}-${index}`} className="relative">
              <div className="absolute -top-2 -right-2 z-10">
                <div className={`text-white text-xs px-2 py-1 rounded-full shadow-lg ${
                  isAIWebToolsOriginal 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}>
                  {isAIWebToolsOriginal ? 'Featured' : 'Similar'}
                </div>
              </div>
              <ToolCard tool={tool} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarToolsRecommendation;
