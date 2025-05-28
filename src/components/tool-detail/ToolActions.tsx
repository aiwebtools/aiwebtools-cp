
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Tool } from "@/types/tools";

interface ToolActionsProps {
  tool: Tool;
}

const ToolActions = ({ tool }: ToolActionsProps) => {
  const handleUseItNow = () => {
    if (tool.directUrl) {
      window.open(tool.directUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="text-center pt-6 border-t border-cyan-500/30">
      <Button 
        size="lg"
        onClick={handleUseItNow}
        disabled={!tool.directUrl}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 interactive-button glow-effect"
      >
        <ExternalLink className="w-5 h-5 mr-2" />
        {tool.directUrl ? "USE IT NOW" : "COMING SOON"}
      </Button>
      <p className="text-sm text-gray-400 mt-3">
        {tool.directUrl ? "Click to access this AI tool and start using it immediately" : "Direct access coming soon - check back later"}
      </p>
    </div>
  );
};

export default ToolActions;
