
import { Badge } from "@/components/ui/badge";
import { Tool } from "@/types/tools";

interface ToolTagsProps {
  tool: Tool;
}

const ToolTags = ({ tool }: ToolTagsProps) => {
  if (!tool.tags || tool.tags.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 cyber-glow">Features & Keywords</h3>
      <div className="flex flex-wrap gap-2">
        {tool.tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="text-sm px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 glow-effect">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ToolTags;
