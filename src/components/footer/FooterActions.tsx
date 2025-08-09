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
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-5xl mx-auto">
        <Button
          onClick={handleDownloadAIList}
          variant="gold"
          size="lg"
          className="w-full sm:w-auto sm:min-w-[240px] px-8 sm:px-10 leading-snug"
        >
          <Download className="mr-2 h-5 w-5" />
          DOWNLOAD 1000+ AI TOOLS (FREE)
        </Button>
        
        <Button
          onClick={handleViewAllTools}
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-cyan-500 text-cyan-300 hover:bg-cyan-500/20 hover:text-white transition-all duration-300 sm:min-w-[240px] px-8 sm:px-10 leading-snug sm:whitespace-nowrap"
        >
          <Search className="mr-2 h-5 w-5" />
          VIEW ALL AI TOOLS
        </Button>
        
        <Button
          onClick={handleViewPortfolio}
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-yellow-500 text-yellow-300 hover:bg-yellow-500/20 hover:text-white transition-all duration-300 sm:min-w-[280px] px-8 sm:px-10 leading-snug"
        >
          <ExternalLink className="mr-2 h-5 w-5" />
          VIEW AI WEB TOOLS PERSONAL PORTFOLIO
        </Button>
        
        <Button
          onClick={handleSubmitTool}
          variant="outline" 
          size="lg"
          className="w-full sm:w-auto border-green-500 text-green-300 hover:bg-green-500/20 hover:text-white transition-all duration-300 sm:min-w-[240px] px-8 sm:px-10 leading-snug sm:whitespace-nowrap"
        >
          <Plus className="mr-2 h-5 w-5" />
          SUBMIT YOUR TOOL
        </Button>
        
        <Button
          onClick={handleRequestTool}
          variant="outline"
          size="lg" 
          className="w-full sm:w-auto border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all duration-300 sm:min-w-[240px] px-8 sm:px-10 leading-snug sm:whitespace-nowrap"
        >
          <ExternalLink className="mr-2 h-5 w-5" />
          REQUEST CUSTOM TOOL
        </Button>
      </div>
    </div>
  );
};

export default FooterActions;
