
import { Shield, AlertTriangle, ExternalLink } from "lucide-react";
import { Tool } from "@/types/tools";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { useNavigate } from "react-router-dom";

interface ToolDisclaimerProps {
  tool: Tool;
}

const ToolDisclaimer = ({ tool }: ToolDisclaimerProps) => {
  const navigate = useNavigate();

  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in tool disclaimer:', url);
    createTimePortalEffect(url);
  };

  const handleDisclaimersPage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/disclaimers');
  };

  return (
    <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Shield className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Third-Party Tool Notice
          </h3>
          
          <div className="space-y-3 text-sm text-gray-300">
            <p>
              <strong className="text-yellow-400">For Informational, Educational & Self-Empowerment Purposes Only:</strong> This tool 
              is provided to support your learning, research, and personal growth journey. It is not intended to replace 
              professional advice, services, or judgment in any field.
            </p>

            <p>
              <strong className="text-yellow-400">Independent Service:</strong> {tool.title} is an independent AI tool. 
              AI Web Tools does not own, operate, or control this external service.
            </p>
            
            <p>
              <strong className="text-yellow-400">Use at Your Own Risk:</strong> When you access this tool, 
              you'll be redirected to an external website. Please review their terms and privacy policies 
              before use. Consult qualified professionals for specific needs.
            </p>

            <p>
              <strong className="text-yellow-400">No Warranty:</strong> We provide this directory service 
              "as is" without warranties regarding the accuracy, reliability, or performance of listed tools.
            </p>

            <p>
              <strong className="text-yellow-400">Connecticut AI Disclosure:</strong> You may be interacting
              with AI-generated systems, content, or media. Outputs may contain errors, biases, or
              inaccuracies and must be independently verified. AI Web Tools LLC (Connecticut) disclaims
              all liability arising from AI-generated content.
            </p>

            <div className="border-t border-yellow-500/30 pt-3 mt-4">
              <p className="text-xs text-gray-400">
                Questions about this disclaimer? Contact{" "}
                <button 
                  onClick={(e) => handleExternalLink("mailto:contact@ai-webtools.com", e)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  contact@ai-webtools.com
                </button>
                . Full{" "}
                <button 
                  onClick={handleDisclaimersPage}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  Terms & Disclaimers
                </button>
              </p>
              <div className="mt-2">
                <button 
                  onClick={handleDisclaimersPage}
                  className="text-yellow-400 hover:text-yellow-300 transition-colors underline text-sm font-medium"
                >
                  📜 Read Full Disclaimer & User Agreement/Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDisclaimer;
