import { useState, useEffect } from "react";
import { Check, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('aitools-consent-seen');
    if (hasAccepted) {
      return; // Don't show popup
    }

    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    // Save acceptance
    localStorage.setItem('aitools-consent-seen', 'true');
    
    // Hide popup
    setIsVisible(false);
    
    // Play welcome audio
    try {
      const audio = new Audio('/welcome-disclaimer.mp3');
      audio.volume = 1.0;
      audio.play().catch(() => {});
    } catch (e) {
      // Audio failed, no big deal
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80">
      <div className="bg-gray-900 border-2 border-cyan-500 rounded-xl p-6 w-full max-w-md shadow-2xl shadow-cyan-500/30">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Welcome to AI Web Tools</h2>
          </div>
          <p className="text-cyan-200 text-sm">Please review our guidelines</p>
        </div>
        
        {/* Guidelines */}
        <div className="space-y-3 mb-6">
          <div className="bg-gray-800 rounded-lg p-3 border border-cyan-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔞</span>
              <div>
                <h4 className="text-cyan-300 font-semibold text-sm">Age Requirement</h4>
                <p className="text-gray-300 text-xs">You must be 21+ to access our platform</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-3 border border-cyan-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <h4 className="text-cyan-300 font-semibold text-sm">Educational Purpose</h4>
                <p className="text-gray-300 text-xs">All content is for educational purposes only</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-3 border border-green-500/30">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-400" />
              <div>
                <h4 className="text-green-300 font-semibold text-sm">Use AI Ethically</h4>
                <p className="text-gray-300 text-xs">Always use AI tools responsibly</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-3 border border-yellow-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h4 className="text-yellow-300 font-semibold text-sm">Always Verify</h4>
                <p className="text-gray-300 text-xs">Cross-check AI content with reliable sources</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Accept Button */}
        <Button
          onClick={handleAccept}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 text-base"
        >
          <Check className="w-5 h-5 mr-2" />
          I Understand & Enter Portal
          <Sparkles className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ConsentPopup;
