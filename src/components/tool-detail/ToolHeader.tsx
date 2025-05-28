
import { Badge } from "@/components/ui/badge";
import { Tool } from "@/types/tools";
import StarRating from "@/components/tools/StarRating";

interface ToolHeaderProps {
  tool: Tool;
  defaultRating: number;
  defaultVotes: number;
}

const ToolHeader = ({ tool, defaultRating, defaultVotes }: ToolHeaderProps) => {
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
      </div>
    </div>
  );
};

export default ToolHeader;
