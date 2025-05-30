
import { Shield, Plus, Upload } from "lucide-react";

interface FooterActionsProps {
  handleExternalLink: (url: string, e: React.MouseEvent) => void;
  handleSubmitTool: () => void;
  handleRequestTool: () => void;
}

const FooterActions = ({ handleExternalLink, handleSubmitTool, handleRequestTool }: FooterActionsProps) => {
  return (
    <div className="text-center mb-12 space-y-4">
      <button
        onClick={(e) => handleExternalLink("https://aitools.company/terms-of-services", e)}
        className="inline-flex items-center justify-center space-x-3 px-12 py-6 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-400 hover:to-cyan-500 text-black font-bold text-lg rounded-full shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transform hover:scale-105 transition-all duration-300 border-2 border-cyan-400 hover:border-cyan-300 cyber-glow"
      >
        <Shield className="w-6 h-6" />
        <span className="text-xl">READ FULL DISCLAIMER AND TERMS OF SERVICE</span>
        <Shield className="w-6 h-6" />
      </button>
      
      <div className="pt-2 space-y-3">
        <button
          onClick={handleSubmitTool}
          className="inline-flex items-center justify-center space-x-3 px-12 py-6 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-purple-500/40 hover:shadow-purple-400/60 transform hover:scale-105 transition-all duration-300 border-2 border-purple-400 hover:border-purple-300 cyber-glow"
        >
          <Upload className="w-6 h-6" />
          <span className="text-xl">SUBMIT YOUR AI TOOL</span>
          <Upload className="w-6 h-6" />
        </button>
        
        <button
          onClick={handleRequestTool}
          className="inline-flex items-center justify-center space-x-3 px-12 py-6 bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-500 hover:via-green-400 hover:to-green-500 text-black font-bold text-lg rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-400/60 transform hover:scale-105 transition-all duration-300 border-2 border-green-400 hover:border-green-300 cyber-glow"
        >
          <Plus className="w-6 h-6" />
          <span className="text-xl">REQUEST A TOOL BUILD</span>
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default FooterActions;
