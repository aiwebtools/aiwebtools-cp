
import { Tool } from "@/types/tools";
import { allTools } from "@/data/toolsData";
import ToolCard from "./tools/ToolCard";
import { getSimilarTools } from "@/utils/similarTools";

interface SimilarToolsProps {
  currentTool: Tool;
  currentToolIndex: number;
}

const SimilarTools = ({ currentTool, currentToolIndex }: SimilarToolsProps) => {
  // Use the new utility function to get similar tools
  const similarTools = getSimilarTools([currentTool], allTools, 6);

  if (similarTools.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          Similar Tools You Might Like
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarTools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default SimilarTools;
