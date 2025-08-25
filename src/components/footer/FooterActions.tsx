import { Button } from "@/components/ui/button";
import { ExternalLink, Plus, Search, Download } from "lucide-react";

interface FooterActionsProps {
  handleExternalLink: (url: string, e: React.MouseEvent) => void;
  handleSubmitTool: () => void;
  handleRequestTool: () => void;
}

const FooterActions = ({ handleExternalLink, handleSubmitTool, handleRequestTool }: FooterActionsProps) => {
  const handleViewAllTools = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/main-category/ALL%20AI%20TOOLS';
  };

  const handleViewPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    handleExternalLink('https://www.aitools.company', e);
  };

  const handleDownloadAIList = (e: React.MouseEvent) => {
    e.preventDefault();
    handleExternalLink('https://docs.google.com/document/d/e/2PACX-1vQW1HCKPrEDguchQct7UnoxPg-DW84Q6fKWFbF7IIygEPaNJnQn-N0h8yVD_FzxZg/pub', e);
  };

  return (
    <div className="text-center mb-16">
      <h3 className="text-2xl font-bold text-cyan-300 mb-6 cyber-glow">
        🚀 Discover More AI Tools
      </h3>
      <div className="flex flex-wrap gap-4 justify-center items-center max-w-6xl mx-auto">
        <Button
          onClick={handleDownloadAIList}
          variant="gold"
          size="default"
          className="flex-1 min-w-[200px] max-w-[280px]"
        >
          <Download className="mr-2 h-4 w-4" />
          Download 1000+ AI Tools
        </Button>
        
        <Button
          onClick={handleViewAllTools}
          variant="outline"
          size="default"
          className="flex-1 min-w-[180px] max-w-[240px] border-cyan-500 text-cyan-300 hover:bg-cyan-500/20"
        >
          <Search className="mr-2 h-4 w-4" />
          View All Tools
        </Button>
        
        <Button
          onClick={handleViewPortfolio}
          variant="outline"
          size="default"
          className="flex-1 min-w-[200px] max-w-[280px] border-yellow-500 text-yellow-300 hover:bg-yellow-500/20"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View Portfolio
        </Button>
        
        <Button
          onClick={handleSubmitTool}
          variant="outline" 
          size="default"
          className="flex-1 min-w-[180px] max-w-[240px] border-green-500 text-green-300 hover:bg-green-500/20"
        >
          <Plus className="mr-2 h-4 w-4" />
          Submit Tool
        </Button>
        
        <Button
          onClick={handleRequestTool}
          variant="outline"
          size="default" 
          className="flex-1 min-w-[180px] max-w-[240px] border-purple-500 text-purple-300 hover:bg-purple-500/20"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Request Tool
        </Button>
      </div>
    </div>
  );
};

export default FooterActions;