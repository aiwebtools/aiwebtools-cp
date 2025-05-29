
import { Shield, AlertTriangle, ExternalLink } from "lucide-react";
import { Tool } from "@/types/tools";
import { createTimePortalEffect } from "@/utils/timeEffects";

interface ToolDisclaimerProps {
  tool: Tool;
}

const ToolDisclaimer = ({ tool }: ToolDisclaimerProps) => {
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in tool disclaimer:', url);
    createTimePortalEffect(url);
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
            Important Legal Disclaimer
          </h3>
          
          <div className="space-y-3 text-sm text-gray-300">
            <p>
              <strong className="text-yellow-400">Third-Party Tool Notice:</strong> {tool.title} is an independent AI tool. 
              AI Web Tools LLC does not own, operate, or control this external service. We are not responsible for its 
              content, functionality, availability, or any issues that may arise from its use.
            </p>
            
            <p>
              <strong className="text-yellow-400">Use at Your Own Risk:</strong> When you click "USE IT NOW," you will 
              be redirected to an external website. Please review their terms of service, privacy policy, and any 
              applicable fees before using their service.
            </p>
            
            <p>
              <strong className="text-yellow-400">No Warranty:</strong> We provide this directory service "as is" 
              without any warranties. We do not guarantee the accuracy, reliability, or performance of any listed tools.
            </p>
            
            <p>
              <strong className="text-yellow-400">Data Protection:</strong> Each tool has its own data handling practices. 
              We recommend reviewing their privacy policies before sharing personal or sensitive information.
            </p>

            <div className="border-t border-yellow-500/30 pt-3 mt-4">
              <p className="text-xs text-gray-400">
                For questions about this disclaimer or our service, contact us at{" "}
                <button 
                  onClick={(e) => handleExternalLink("mailto:contact@ai-webtools.com", e)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  contact@ai-webtools.com
                </button>
                . By using our directory, you agree to our{" "}
                <button 
                  onClick={(e) => handleExternalLink("https://aitools.company/terms-of-services", e)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline inline-flex items-center"
                >
                  Terms of Service
                  <ExternalLink className="w-3 h-3 ml-1" />
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDisclaimer;
