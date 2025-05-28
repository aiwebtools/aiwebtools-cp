
import { Tool } from "@/types/tools";
import { allTools } from "@/data/toolsData";
import ToolCard from "./tools/ToolCard";

interface SimilarToolsProps {
  currentTool: Tool;
  currentToolIndex: number;
}

const SimilarTools = ({ currentTool, currentToolIndex }: SimilarToolsProps) => {
  // Find similar tools based on category and tags
  const getSimilarTools = (): Tool[] => {
    const similar = allTools.filter((tool, index) => {
      if (index === currentToolIndex) return false; // Exclude current tool
      
      // Check if same category
      if (tool.category === currentTool.category) return true;
      
      // Check if shared tags
      if (currentTool.tags && tool.tags) {
        const sharedTags = currentTool.tags.some(tag => 
          tool.tags?.some(toolTag => 
            toolTag.toLowerCase().includes(tag.toLowerCase()) ||
            tag.toLowerCase().includes(toolTag.toLowerCase())
          )
        );
        if (sharedTags) return true;
      }
      
      // Check if similar keywords in description
      const currentKeywords = currentTool.description.toLowerCase().split(' ');
      const toolKeywords = tool.description.toLowerCase().split(' ');
      const commonWords = currentKeywords.filter(word => 
        word.length > 4 && toolKeywords.includes(word)
      );
      
      return commonWords.length >= 2;
    });
    
    // Shuffle and return first 6
    return similar.sort(() => Math.random() - 0.5).slice(0, 6);
  };

  const similarTools = getSimilarTools();

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
