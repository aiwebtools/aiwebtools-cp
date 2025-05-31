
import { Shield, AlertTriangle, ExternalLink } from "lucide-react";
import { Tool } from "@/types/tools";
import { createTimePortalEffect } from "@/utils/timeEffects";

interface AIWebToolsDisclaimerProps {
  tool: Tool;
}

const AIWebToolsDisclaimer = ({ tool }: AIWebToolsDisclaimerProps) => {
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in AI Web Tools disclaimer:', url);
    createTimePortalEffect(url);
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
            AI Web Tools LLC - Legal Disclaimer
          </h3>
          
          <div className="space-y-3 text-sm text-gray-300">
            <p>
              <strong className="text-cyan-400">Educational & Informational Use:</strong> {tool.title} is provided 
              for educational, informational, and research purposes only. The information provided should not be 
              considered as professional or expert advice. Users must exercise caution and their own judgment when 
              applying any information or suggestions provided by this AI tool.
            </p>

            {isFungusGPT && (
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 my-4">
                <p className="text-red-300 font-semibold mb-2">
                  ⚠️ CRITICAL SAFETY WARNING: DO NOT EAT mushrooms identified by AI as it may be wrong - this is a simulation only.
                </p>
                <p className="text-red-200 text-sm">
                  Never rely solely on AI-based identification for determining whether a mushroom is safe to consume. 
                  Misidentification of mushrooms can result in severe illness or death. Always verify outputs with 
                  professional mycologists and use multiple expert sources before consuming any wild fungi.
                </p>
              </div>
            )}
            
            <p>
              <strong className="text-cyan-400">Professional Verification Required:</strong> Always verify outputs 
              with qualified professionals in the relevant field before making important decisions or taking actions 
              based on AI-generated content.
            </p>
            
            <p>
              <strong className="text-cyan-400">Simulation & Limitations:</strong> This is an AI simulation with 
              inherent limitations. Results may not be accurate, complete, or suitable for all situations. Users 
              should not rely solely on AI outputs for critical decisions.
            </p>

            <p>
              <strong className="text-cyan-400">No Warranty:</strong> AI Web Tools LLC provides this tool "as is" 
              without any warranties, express or implied. We do not guarantee the accuracy, reliability, completeness, 
              or performance of any AI-generated content.
            </p>
            
            <p>
              <strong className="text-cyan-400">Limitation of Liability:</strong> AI Web Tools LLC, its affiliates, 
              and partners assume no responsibility or liability for any consequences resulting from the use of {tool.title}. 
              Users agree to use this tool at their own risk and accept full responsibility for verifying any information provided.
            </p>

            <div className="border-t border-cyan-500/30 pt-3 mt-4">
              <p className="text-xs text-gray-400">
                By using {tool.title}, you acknowledge that you have read and understood this disclaimer and agree to be bound by its terms. 
                For complete terms and conditions, please refer to our{" "}
                <button 
                  onClick={(e) => handleExternalLink("https://aitools.company/terms-of-services", e)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline inline-flex items-center"
                >
                  Terms of Service
                  <ExternalLink className="w-3 h-3 ml-1" />
                </button>
                {" "}and contact us at{" "}
                <button 
                  onClick={(e) => handleExternalLink("mailto:contact@ai-webtools.com", e)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  contact@ai-webtools.com
                </button>
                {" "}for questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWebToolsDisclaimer;
