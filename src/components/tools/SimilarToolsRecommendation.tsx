
import { Tool } from "@/types/tools";
import ToolCard from "./ToolCard";

interface SimilarToolsRecommendationProps {
  similarTools: Tool[];
  originalCount: number;
}

const SimilarToolsRecommendation = ({ similarTools, originalCount }: SimilarToolsRecommendationProps) => {
  if (similarTools.length === 0) return null;

  return (
    <div className="mt-12 px-4 sm:px-0">
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 mb-4">
          <span className="text-2xl mr-3">💡</span>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Found {originalCount} direct matches
            </h3>
            <p className="text-sm text-gray-300">
              Here are {similarTools.length} similar tools you might also like
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {similarTools.map((tool, index) => (
          <div key={`similar-${tool.title}-${index}`} className="relative">
            <div className="absolute -top-2 -right-2 z-10">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                Similar
              </div>
            </div>
            <ToolCard tool={tool} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarToolsRecommendation;
