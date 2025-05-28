
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Tool } from "@/types/tools";
import StarRating from "@/components/tools/StarRating";

interface ToolHeaderProps {
  tool: Tool;
  defaultRating: number;
  defaultVotes: number;
}

const ToolHeader = ({ tool, defaultRating, defaultVotes }: ToolHeaderProps) => {
  const handleUseItNow = () => {
    if (tool.directUrl) {
      window.open(tool.directUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="text-center pb-6 bg-gradient-to-r from-gray-900/50 to-gray-800/30">
      <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-4xl shadow-lg shadow-cyan-500/30 glow-effect`}>
        {tool.emoji}
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cyber-glow">
          {tool.title}
        </h1>
        {tool.category && (
          <Badge variant="outline" className="text-sm border-cyan-400 text-cyan-400 bg-cyan-400/10 px-4 py-2 glow-effect">
            {tool.category}
          </Badge>
        )}
        <div className="flex justify-center">
          <StarRating rating={defaultRating} totalVotes={defaultVotes} />
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
