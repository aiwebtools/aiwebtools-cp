import { useState, useEffect } from "react";
import { AlertTriangle, Check, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createTimePortalEffect } from "@/utils/timeEffects";

const ConsentPopup = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already seen the consent popup
    const hasSeenConsent = localStorage.getItem('aitools-consent-seen');
    if (!hasSeenConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    console.log('🌀 User accepting consent - initiating time warp entry...');
    // Create time portal effect for dramatic consent acceptance
    createTimePortalEffect('', 'AI Tools Consent Portal');
    
    localStorage.setItem('aitools-consent-seen', 'true');
    
    // Delay hiding the popup to let the effect play
    setTimeout(() => {
      setShowConsent(false);
    }, 800);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 bg-black/90 md:backdrop-blur-md z-[9999] flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border-2 border-cyan-500/60 rounded-xl p-8 max-w-lg w-full shadow-2xl shadow-cyan-500/30 animate-scale-in relative overflow-hidden">
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="p-2 bg-cyan-500/20 rounded-full">
                <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white">Welcome to AI Web Tools</h3>
            </div>
            <p className="text-cyan-200/80 text-sm">Please review our important guidelines before continuing</p>
          </div>
          
          {/* Guidelines Grid */}
          <div className="grid gap-4 mb-6">
            {/* Age Requirement */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-cyan-500/20">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔞</div>
                <div>
                  <h4 className="text-cyan-400 font-semibold text-sm mb-1">Age Requirement</h4>
                  <p className="text-gray-300 text-xs">You must be 21+ to access our platform</p>
                </div>
              </div>
            </div>
            
            {/* Educational Purpose */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-cyan-500/20">
              <div className="flex items-start gap-3">
                <div className="text-2xl">📚</div>
                <div>
                  <h4 className="text-cyan-400 font-semibold text-sm mb-1">Educational Purpose</h4>
                  <p className="text-gray-300 text-xs">All content is for educational and informational purposes only</p>
                </div>
              </div>
            </div>
            
            {/* Ethical AI Use */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-green-500/20">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-400 mt-0.5" />
                <div>
                  <h4 className="text-green-400 font-semibold text-sm mb-1">Use AI Ethically</h4>
                  <p className="text-gray-300 text-xs">Always use AI tools responsibly, respect privacy, and verify information independently</p>
                </div>
              </div>
            </div>
            
            {/* Verification */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-yellow-500/20">
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚠️</div>
                <div>
                  <h4 className="text-yellow-400 font-semibold text-sm mb-1">Always Verify</h4>
                  <p className="text-gray-300 text-xs">Cross-check AI-generated content with reliable sources before making decisions</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Button */}
          <Button
            onClick={handleAccept}
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Check className="w-5 h-5 mr-2" />
            <span className="text-lg">I Understand & Enter the Portal</span>
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;