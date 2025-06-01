
import { Button } from "@/components/ui/button";
import { ExternalLink, Plus, Search } from "lucide-react";

interface FooterActionsProps {
  handleExternalLink: (url: string, e: React.MouseEvent) => void;
  handleSubmitTool: () => void;
  handleRequestTool: () => void;
}

const FooterActions = ({ handleExternalLink, handleSubmitTool, handleRequestTool }: FooterActionsProps) => {
  const handleViewAllTools = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'https://aiwebtools.ai/main-category/ALL%20AI%20TOOLS';
  };

  return (
    <div className="text-center mb-16">
      <h3 className="text-2xl font-bold text-cyan-300 mb-6 cyber-glow">
        🚀 Discover More AI Tools
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
        <Button
          onClick={handleViewAllTools}
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-cyan-500 text-cyan-300 hover:bg-cyan-500/20 hover:text-white transition-all duration-300"
        >
          <Search className="mr-2 h-5 w-5" />
          VIEW ALL AI TOOLS
        </Button>
        
        <Button
          onClick={handleSubmitTool}
          variant="outline" 
          size="lg"
          className="w-full sm:w-auto border-green-500 text-green-300 hover:bg-green-500/20 hover:text-white transition-all duration-300"
        >
          <Plus className="mr-2 h-5 w-5" />
          SUBMIT YOUR TOOL
        </Button>
        
        <Button
          onClick={handleRequestTool}
          variant="outline"
          size="lg" 
          className="w-full sm:w-auto border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all duration-300"
        >
          <ExternalLink className="mr-2 h-5 w-5" />
          REQUEST CUSTOM TOOL
        </Button>
      </div>
    </div>
  );
};

export default FooterActions;
