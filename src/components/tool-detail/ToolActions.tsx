
import React, { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import { Tool } from "@/types/tools";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { requiresAgeVerification, isAgeVerified } from "@/utils/ageVerification";
import AgeVerificationModal from "@/components/AgeVerificationModal";

interface ToolActionsProps {
  tool: Tool;
}

const ToolActions = ({ tool }: ToolActionsProps) => {
  const [showAgeModal, setShowAgeModal] = useState(false);
  const pendingUrlRef = useRef<string | null>(null);
  
  // Check if tool requires age verification - with explicit debug
  const needsAgeGate = React.useMemo(() => {
    const result = requiresAgeVerification(tool);
    console.log(`🔞 ToolActions: "${tool?.title}" needsAgeGate=${result}, category="${tool?.category}", tags="${tool?.tags?.join(', ')}"`);
    return result;
  }, [tool]);
  
  // Handle age verification success
  const handleAgeVerified = useCallback(() => {
    setShowAgeModal(false);
    if (pendingUrlRef.current) {
      console.log('✅ Age verified - proceeding to:', pendingUrlRef.current);
      createTimePortalEffect(pendingUrlRef.current, tool.title);
      pendingUrlRef.current = null;
    }
  }, [tool.title]);

  const handleUseItNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('USE IT NOW button clicked for:', tool.title);
    console.log('Tool directUrl:', tool.directUrl);
    
    // Check if age verification is required
    if (needsAgeGate && !isAgeVerified()) {
      console.log('🔞 Age verification required for:', tool.title);
      pendingUrlRef.current = tool.directUrl || '';
      setShowAgeModal(true);
      return;
    }
    
    // Pass the tool title to the time portal effect
    createTimePortalEffect(tool.directUrl || '', tool.title);
  };

  const handleSendFeedback = () => {
    const subject = encodeURIComponent(`Feedback for ${tool.title}`);
    const body = encodeURIComponent(`Hi,

I would like to provide feedback about ${tool.title}:

[Please describe your concerns, bugs, or suggestions here]

Thank you!`);
    
    const mailtoUrl = `mailto:contact@ai-webtools.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  // Check if this is an AI Web Tools LLC original tool (has lovable.app in the URL)
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;

  return (
    <>
      <div className="text-center pb-6 mb-6 border-b border-cyan-500/30">
        {/* 18+ Warning Banner */}
        {needsAgeGate && (
          <div className="mb-4 p-3 rounded-lg bg-amber-500/20 border border-amber-500/50 text-amber-300 text-sm flex items-center justify-center gap-2">
            <span className="text-lg">🔞</span>
            <span className="font-semibold">Age Verification Required (18+)</span>
          </div>
        )}
        
        <div className="space-y-4 px-4">
          <Button 
            size="lg"
            onClick={handleUseItNow}
            className={`w-full sm:w-auto ${
              needsAgeGate 
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
            } text-white px-8 sm:px-12 py-4 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
              needsAgeGate ? 'shadow-amber-500/30' : 'shadow-cyan-500/30'
            } interactive-button glow-effect`}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            {!tool.directUrl ? "COMING SOON" : needsAgeGate ? "🔞 VERIFY AGE & ACCESS" : "USE IT NOW"}
          </Button>
          
          {isAIWebToolsOriginal && (
            <Button 
              size="lg"
              onClick={handleSendFeedback}
              variant="outline"
              className="w-full sm:w-auto border-yellow-500/50 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500/20 hover:border-yellow-400 px-3 sm:px-6 py-4 text-xs sm:text-sm rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-4 h-4 mr-1 sm:mr-2 flex-shrink-0" />
              <span className="text-center leading-tight">
                <span className="block sm:hidden">CREATOR</span>
                <span className="block sm:hidden">FEEDBACK</span>
                <span className="hidden sm:block">SEND CREATOR FEEDBACK</span>
              </span>
            </Button>
          )}
        </div>
        
        <p className="text-sm text-gray-400 mt-3 px-4">
          {tool.directUrl ? (
            needsAgeGate 
              ? "This content is restricted to users 18 years and older" 
              : "Click to access this AI tool and start using it immediately"
          ) : "Direct access coming soon - check back later"}
          {isAIWebToolsOriginal && (
            <>
              <br />
              <span className="text-yellow-400">Have feedback? Send concerns or bug reports directly to the creator!</span>
            </>
          )}
        </p>
      </div>
      
      {/* Age Verification Modal */}
      <AgeVerificationModal
        isOpen={showAgeModal}
        onClose={() => {
          setShowAgeModal(false);
          pendingUrlRef.current = null;
        }}
        onVerified={handleAgeVerified}
        toolTitle={tool.title}
      />
    </>
  );
};

export default ToolActions;
