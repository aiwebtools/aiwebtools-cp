import { useState, useEffect } from "react";
import { AlertTriangle, Check, Sparkles, Shield, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createTimePortalEffect } from "@/utils/timeEffects";

const ConsentPopup = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);

  useEffect(() => {
    // Check if user has already seen the consent popup
    const hasSeenConsent = localStorage.getItem('aitools-consent-seen');
    if (!hasSeenConsent) {
      setShowConsent(true);
      // Enable voice for mobile devices
      if ('speechSynthesis' in window) {
        setIsVoiceEnabled(true);
        // Speak welcome message after a short delay
        setTimeout(() => {
          speakWelcomeMessage();
        }, 1000);
      }
    }
  }, []);

  const speakWelcomeMessage = () => {
    if ('speechSynthesis' in window && isVoiceEnabled) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(
        "Welcome to AI Web Tools! Please review our important guidelines before continuing. You must be 21 or older to access our platform."
      );
      
      // Configure voice settings for robot-like sound
      utterance.rate = 0.8; // Slightly slower
      utterance.pitch = 0.7; // Lower pitch for robot effect
      utterance.volume = 0.8;
      
      // Try to use a more robotic voice if available
      const voices = window.speechSynthesis.getVoices();
      const robotVoice = voices.find(voice => 
        voice.name.toLowerCase().includes('male') || 
        voice.name.toLowerCase().includes('alex') ||
        voice.name.toLowerCase().includes('daniel')
      );
      
      if (robotVoice) {
        utterance.voice = robotVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleVoice = () => {
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      } else {
        speakWelcomeMessage();
      }
    }
  };

  const handleAccept = () => {
    console.log('🌀 User accepting consent - initiating time warp entry...');
    
    // Stop any ongoing speech
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    
    // Speak acceptance message
    if (isVoiceEnabled) {
      const utterance = new SpeechSynthesisUtterance("Welcome to the AI Web Tools portal! Initializing...");
      utterance.rate = 0.8;
      utterance.pitch = 0.7;
      utterance.volume = 0.8;
      window.speechSynthesis.speak(utterance);
    }
    
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
    <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 md:p-6">
      <div className="bg-gradient-to-br from-slate-800 via-gray-800 to-black border-2 border-cyan-400/80 rounded-xl p-6 md:p-8 max-w-lg w-full shadow-2xl shadow-cyan-400/50 animate-scale-in relative overflow-hidden backdrop-blur-sm">
        
        {/* Voice Toggle Button */}
        {isVoiceEnabled && (
          <button
            onClick={toggleVoice}
            className="absolute top-4 right-4 p-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full transition-colors"
            aria-label="Toggle voice"
          >
            <Volume2 className="w-5 h-5 text-cyan-400" />
          </button>
        )}
        
        {/* Enhanced animated background pattern for mobile visibility */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="p-3 bg-cyan-400/30 rounded-full">
                <Sparkles className="w-6 h-6 text-cyan-300 animate-pulse" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Welcome to AI Web Tools</h3>
            </div>
            <p className="text-cyan-100/90 text-sm md:text-base">Please review our important guidelines before continuing</p>
          </div>
          
          {/* Guidelines Grid */}
          <div className="grid gap-3 md:gap-4 mb-6">
            {/* Age Requirement */}
            <div className="bg-gray-700/70 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔞</div>
                <div>
                  <h4 className="text-cyan-300 font-semibold text-sm mb-1">Age Requirement</h4>
                  <p className="text-gray-100 text-xs">You must be 21+ to access our platform</p>
                </div>
              </div>
            </div>
            
            {/* Educational Purpose */}
            <div className="bg-gray-700/70 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="text-2xl">📚</div>
                <div>
                  <h4 className="text-cyan-300 font-semibold text-sm mb-1">Educational Purpose</h4>
                  <p className="text-gray-100 text-xs">All content is for educational and informational purposes only</p>
                </div>
              </div>
            </div>
            
            {/* Ethical AI Use */}
            <div className="bg-gray-700/70 backdrop-blur-sm rounded-lg p-4 border border-green-400/40 shadow-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-300 mt-0.5" />
                <div>
                  <h4 className="text-green-300 font-semibold text-sm mb-1">Use AI Ethically</h4>
                  <p className="text-gray-100 text-xs">Always use AI tools responsibly, respect privacy, and verify information independently</p>
                </div>
              </div>
            </div>
            
            {/* Verification */}
            <div className="bg-gray-700/70 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/40 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚠️</div>
                <div>
                  <h4 className="text-yellow-300 font-semibold text-sm mb-1">Always Verify</h4>
                  <p className="text-gray-100 text-xs">Cross-check AI-generated content with reliable sources before making decisions</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Button */}
          <Button
            onClick={handleAccept}
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-[1.02] active:scale-[0.98] text-base md:text-lg touch-manipulation"
          >
            <Check className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>I Understand & Enter the Portal</span>
            <Sparkles className="w-4 h-4 ml-2 animate-pulse flex-shrink-0" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;