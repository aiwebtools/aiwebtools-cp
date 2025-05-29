

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Tool } from "@/types/tools";
import StarRating from "@/components/tools/StarRating";
import { useNavigate } from "react-router-dom";

interface ToolHeaderProps {
  tool: Tool;
  defaultRating: number;
  defaultVotes: number;
  toolIndex?: number;
}

const ToolHeader = ({ tool, defaultRating, defaultVotes, toolIndex }: ToolHeaderProps) => {
  const navigate = useNavigate();

  const handleUseItNow = () => {
    if (tool.directUrl) {
      window.open(tool.directUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCategoryClick = () => {
    if (tool.category) {
      navigate(`/category/${encodeURIComponent(tool.category)}`);
    }
  };

  // Check if this is a GPT tool (contains "GPT" in title)
  const isGPTTool = tool.title.toUpperCase().includes('GPT');

  return (
    <div className="text-center pb-6 bg-gradient-to-r from-gray-900/50 to-gray-800/30 relative">
      {/* FREE Badge for GPT tools */}
      {isGPTTool && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 animate-pulse">
            FREE
          </div>
        </div>
      )}
      
      <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-4xl shadow-lg shadow-cyan-500/30 glow-effect`}>
        {tool.emoji}
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cyber-glow">
          {tool.title}
        </h1>
        {tool.category && (
          <Badge 
            variant="outline" 
            className="text-sm border-cyan-400 text-cyan-400 bg-cyan-400/10 px-4 py-2 glow-effect cursor-pointer hover:bg-cyan-400/20 hover:border-cyan-300 transition-all duration-200 transform hover:scale-105"
            onClick={handleCategoryClick}
          >
            {tool.category}
          </Badge>
        )}
        <div className="flex justify-center">
          <StarRating 
            rating={defaultRating} 
            totalVotes={defaultVotes}
            toolId={toolIndex !== undefined ? `tool-${toolIndex}` : undefined}
          />
        </div>
        <div className="pt-4">
          <Button 
            size="lg"
            onClick={handleUseItNow}
            disabled={!tool.directUrl}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 interactive-button glow-effect"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            {tool.directUrl ? "USE IT NOW" : "COMING SOON"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToolHeader;

