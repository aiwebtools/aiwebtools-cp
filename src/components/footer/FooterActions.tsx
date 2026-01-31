import { Button } from "@/components/ui/button";
import { ExternalLink, Plus, Search, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { downloadToolsCSV } from "@/utils/csvExport";
import { createConfettiCelebration } from "@/utils/effects/audioEffects";

interface FooterActionsProps {
  handleExternalLink: (url: string, e: React.MouseEvent) => void;
  handleSubmitTool: () => void;
  handleRequestTool: () => void;
}

const FooterActions = ({ handleExternalLink, handleSubmitTool, handleRequestTool }: FooterActionsProps) => {
  const navigate = useNavigate();
  
  const handleViewAllTools = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/main-category/ALL%20AI%20TOOLS');
  };

  const handleViewPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    handleExternalLink('https://www.aitools.company', e);
  };

  const handleDownloadAIList = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`📥 Downloading CSV with ${allTools.length} AI tools...`);
    
    // Trigger confetti celebration
    createConfettiCelebration();
    
    // Download CSV with all tools
    setTimeout(() => {
      downloadToolsCSV(
        allTools, 
        `AIWebTools-Complete-Directory-${allTools.length}-Tools.csv`
      );
    }, 300);
  };

  return (
    <div className="text-center mb-16">
      <h3 className="text-2xl font-bold text-green-300 mb-6" style={{ textShadow: '0 0 15px rgba(0, 255, 0, 0.5)' }}>
        🚀 Discover More AI Tools
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-5xl mx-auto">
        <Button
          onClick={handleDownloadAIList}
          variant="gold"
          size="lg"
          className="w-full sm:w-auto sm:min-w-[240px] px-8 sm:px-10 leading-snug"
        >
          <Download className="mr-2 h-5 w-5 animate-bounce" />
          DOWNLOAD {allTools.length}+ AI TOOLS CSV (FREE)
        </Button>
        
        <Button
          onClick={handleViewAllTools}
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-green-500 text-green-300 hover:bg-green-500/20 hover:text-white transition-all duration-300 sm:min-w-[240px] px-8 sm:px-10 leading-snug sm:whitespace-nowrap"
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
          className="w-full sm:w-auto border-emerald-500 text-emerald-300 hover:bg-emerald-500/20 hover:text-white transition-all duration-300 sm:min-w-[240px] px-8 sm:px-10 leading-snug sm:whitespace-nowrap"
        >
          <Plus className="mr-2 h-5 w-5" />
          SUBMIT YOUR TOOL
        </Button>
        
        <Button
          onClick={handleRequestTool}
          variant="outline"
          size="lg" 
          className="w-full sm:w-auto border-green-400 text-green-400 hover:bg-green-400/20 hover:text-white transition-all duration-300 sm:min-w-[240px] px-8 sm:px-10 leading-snug sm:whitespace-nowrap"
        >
          <ExternalLink className="mr-2 h-5 w-5" />
          REQUEST CUSTOM TOOL
        </Button>
      </div>
    </div>
  );
};

export default FooterActions;