
import { Shield, Plus, Upload } from "lucide-react";

interface FooterActionsProps {
  handleExternalLink: (url: string, e: React.MouseEvent) => void;
  handleSubmitTool: () => void;
  handleRequestTool: () => void;
}

const FooterActions = ({ handleExternalLink, handleSubmitTool, handleRequestTool }: FooterActionsProps) => {
  return (
    <div className="text-center mb-8 space-y-3">
      <button
        onClick={(e) => handleExternalLink("https://aitools.company/terms-of-services", e)}
        className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-400 hover:to-cyan-500 text-black font-bold text-sm rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transform hover:scale-105 transition-all duration-300 border border-cyan-400 hover:border-cyan-300 cyber-glow"
      >
        <Shield className="w-4 h-4" />
        <span>READ FULL DISCLAIMER AND TERMS OF SERVICE</span>
        <Shield className="w-4 h-4" />
      </button>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button
          onClick={handleSubmitTool}
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white font-bold text-sm rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-400/50 transform hover:scale-105 transition-all duration-300 border border-purple-400 hover:border-purple-300 cyber-glow"
        >
          <Upload className="w-4 h-4" />
          <span>SUBMIT YOUR AI TOOL</span>
          <Upload className="w-4 h-4" />
        </button>
        
        <button
          onClick={handleRequestTool}
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-500 hover:via-green-400 hover:to-green-500 text-black font-bold text-sm rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-400/50 transform hover:scale-105 transition-all duration-300 border border-green-400 hover:border-green-300 cyber-glow"
        >
          <Plus className="w-4 h-4" />
          <span>REQUEST A TOOL BUILD</span>
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FooterActions;
