import { useState, useEffect } from "react";
import { AlertTriangle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    localStorage.setItem('aitools-consent-seen', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/50 rounded-xl p-6 max-w-md w-full shadow-2xl shadow-cyan-500/20 animate-scale-in">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-yellow-400" />
          <h3 className="text-xl font-bold text-white">Important Notice</h3>
        </div>
        
        <div className="space-y-3 mb-6 text-sm text-gray-300">
          <p className="flex items-center gap-2">
            <span className="text-cyan-400 font-semibold">🔞 Age Requirement:</span>
            You must be 21+ to use this platform
          </p>
          <p className="flex items-center gap-2">
            <span className="text-cyan-400 font-semibold">📚 Educational Purpose:</span>
            All content is for educational and informational purposes only
          </p>
          <p className="flex items-center gap-2">
            <span className="text-cyan-400 font-semibold">⚠️ Verification:</span>
            Always verify AI-generated content independently
          </p>
        </div>
        
        <Button
          onClick={handleAccept}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/30"
        >
          <Check className="w-4 h-4 mr-2" />
          I Understand & Accept
        </Button>
      </div>
    </div>
  );
};

export default ConsentPopup;