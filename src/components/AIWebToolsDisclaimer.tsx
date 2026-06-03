
import { Shield, AlertTriangle, ExternalLink } from "lucide-react";
import { Tool } from "@/types/tools";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { useNavigate } from "react-router-dom";

interface AIWebToolsDisclaimerProps {
  tool: Tool;
}

const AIWebToolsDisclaimer = ({ tool }: AIWebToolsDisclaimerProps) => {
  const navigate = useNavigate();

  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in AI Web Tools disclaimer:', url);
    createTimePortalEffect(url);
  };

  const handleDisclaimersPage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/disclaimers');
  };

  // Check if this is a Fungus GPT tool for special disclaimer
  const isFungusGPT = tool.title.toLowerCase().includes('fungus') || tool.title.toLowerCase().includes('mushroom');

  return (
    <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Shield className="w-6 h-6 text-cyan-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            AI Web Tools Legal Disclaimer
          </h3>
          
          <div className="space-y-3 text-sm text-gray-300">
            <div>
              <p className="text-cyan-400 font-semibold">Educational & Informational Use Only</p>
              <p>
                {tool.title} is provided for educational, informational, and research purposes only. 
                The information should not be considered professional advice. Always verify outputs 
                with qualified professionals before making important decisions.
              </p>
            </div>

            {isFungusGPT && (
              <div className="bg-red-900/40 border border-red-500/60 rounded-lg p-3">
                <p className="text-red-300 font-semibold mb-1 flex items-center">
                  ⚠️ CRITICAL SAFETY WARNING
                </p>
                <p className="text-red-200 text-xs">
                  <strong>DO NOT EAT mushrooms identified by AI.</strong> This is a simulation only. 
                  Misidentification can result in severe illness or death. Always consult multiple expert 
                  sources and professional mycologists before consuming any wild fungi.
                </p>
              </div>
            )}

            <div>
              <p className="text-cyan-400 font-semibold">No Warranty & Limitation of Liability</p>
              <p>
                AI Web Tools provides this tool "as is" without warranties. We assume no responsibility 
                for consequences resulting from use. Users agree to use at their own risk and accept full 
                responsibility for verifying any information provided.
              </p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold">Connecticut AI Disclosure</p>
              <p>
                You are interacting with an AI-powered system. Outputs are AI-generated and may contain
                errors, omissions, or biases. AI Web Tools LLC (Connecticut) makes no guarantee as to
                accuracy, completeness, or suitability and disclaims all liability arising from use. See
                the full {" "}
                <button
                  onClick={handleDisclaimersPage}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  Connecticut AI Disclosure
                </button>.
              </p>
            </div>

            <div className="border-t border-cyan-500/30 pt-3 mt-4">
              <p className="text-xs text-gray-400">
                By using {tool.title}, you acknowledge this disclaimer and agree to our{" "}
                <button 
                  onClick={handleDisclaimersPage}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  Full Terms & Disclaimers
                </button>
                . Questions? Contact{" "}
                <button 
                  onClick={(e) => handleExternalLink("mailto:contact@ai-webtools.com", e)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  contact@ai-webtools.com
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

export default AIWebToolsDisclaimer;
