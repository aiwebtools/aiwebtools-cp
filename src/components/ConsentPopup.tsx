import { useState, useEffect } from "react";
import { Check, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createTimePortalEffect } from "@/utils/timeEffects";

const ConsentPopup = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    
    // Check consent for all devices - show popup on all devices
    const hasSeenConsent = localStorage.getItem('aitools-consent-seen');
    if (!hasSeenConsent) {
      setShowConsent(true);
    }

    const handleResize = () => checkMobile();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAccept = () => {
    console.log('🌀 User accepting consent - initiating time warp entry...');
    
    // Start fade-out animation
    setIsClosing(true);
    localStorage.setItem('aitools-consent-seen', 'true');
    
    // Play welcome audio (continues in background)
    const welcomeAudio = new Audio('/welcome-disclaimer.mp3');
    welcomeAudio.volume = 1.0;
    welcomeAudio.play().catch(err => console.log('Welcome audio play failed:', err));
    
    // Create time portal effect for desktop only (plays in background)
    if (!isMobile) {
      createTimePortalEffect('', 'AI Tools Consent Portal');
    }
    
    // Remove popup after animation completes
    setTimeout(() => {
      setShowConsent(false);
    }, 400);
  };

  if (!showConsent) return null;

  // Works on all devices
  return (
    <div 
      className={`fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 md:p-6 transition-opacity duration-400 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ pointerEvents: isClosing ? 'none' : 'auto' }}
    >
      <div 
        className={`bg-gradient-to-br from-slate-800 via-gray-800 to-black border-2 border-cyan-400/80 rounded-xl p-4 md:p-6 w-full max-w-sm md:max-w-lg shadow-2xl shadow-cyan-400/50 relative overflow-hidden backdrop-blur-sm max-h-[90vh] overflow-y-auto transition-all duration-400 ${
          isClosing 
            ? 'opacity-0 scale-95 translate-y-4' 
            : 'opacity-100 scale-100 translate-y-0 animate-scale-in'
        }`}
      >
        
        {/* Enhanced animated background pattern for mobile visibility */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-blue-400/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-4 md:mb-6">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
              <div className="p-2 md:p-3 bg-cyan-400/30 rounded-full">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-cyan-300 animate-pulse" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">Welcome to AI Web Tools</h3>
            </div>
            <p className="text-cyan-100/90 text-xs md:text-sm">Please review our important guidelines</p>
          </div>
          
          {/* Guidelines Grid */}
          <div className="grid gap-2 md:gap-3 mb-4 md:mb-6">
            {/* Age Requirement */}
            <div className="bg-gray-700/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-cyan-400/30 shadow-lg">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="text-lg md:text-2xl">🔞</div>
                <div>
                  <h4 className="text-cyan-300 font-semibold text-xs md:text-sm mb-1">Age Requirement</h4>
                  <p className="text-gray-100 text-xs">You must be 21+ to access our platform</p>
                </div>
              </div>
            </div>
            
            {/* Educational Purpose */}
            <div className="bg-gray-700/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-cyan-400/30 shadow-lg">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="text-lg md:text-2xl">📚</div>
                <div>
                  <h4 className="text-cyan-300 font-semibold text-xs md:text-sm mb-1">Educational Purpose</h4>
                  <p className="text-gray-100 text-xs">All content is for educational purposes only</p>
                </div>
              </div>
            </div>
            
            {/* Ethical AI Use */}
            <div className="bg-gray-700/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-green-400/40 shadow-lg">
              <div className="flex items-start gap-2 md:gap-3">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-300 mt-0.5" />
                <div>
                  <h4 className="text-green-300 font-semibold text-xs md:text-sm mb-1">Use AI Ethically</h4>
                  <p className="text-gray-100 text-xs">Always use AI tools responsibly and verify information</p>
                </div>
              </div>
            </div>
            
            {/* Verification */}
            <div className="bg-gray-700/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-yellow-400/40 shadow-lg">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="text-lg md:text-2xl">⚠️</div>
                <div>
                  <h4 className="text-yellow-300 font-semibold text-xs md:text-sm mb-1">Always Verify</h4>
                  <p className="text-gray-100 text-xs">Cross-check AI content with reliable sources</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Button */}
          <Button
            onClick={handleAccept}
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base lg:text-lg touch-manipulation min-h-[44px]"
          >
            <Check className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
            <span>I Understand & Enter Portal</span>
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 ml-2 animate-pulse flex-shrink-0" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
