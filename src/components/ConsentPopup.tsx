import { useState, useEffect } from "react";
import { AlertTriangle, Check, Sparkles, Shield, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createTimePortalEffect } from "@/utils/timeEffects";

const ConsentPopup = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    
    // Check consent for all devices, but only show popup on desktop
    const hasSeenConsent = localStorage.getItem('aitools-consent-seen');
    if (!hasSeenConsent) {
      if (!isMobile) {
        // Only show popup on desktop
        setShowConsent(true);
        // Enable voice for desktop devices ONLY when popup is actually shown
        if ('speechSynthesis' in window) {
          setIsVoiceEnabled(true);
          // Speak welcome message after a short delay, but ONLY on desktop
          setTimeout(() => {
            speakWelcomeMessage();
          }, 1000);
        }
      } else {
        // For mobile, just mark consent as seen without showing popup or voice
        localStorage.setItem('aitools-consent-seen', 'true');
      }
    }

    const handleResize = () => checkMobile();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const speakWelcomeMessage = () => {
    // Check for speech synthesis support and ensure we're on desktop AND popup is showing
    if (!('speechSynthesis' in window) || isMobile || !showConsent) return;
    
    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Wait for voices to load
      const speak = () => {
        const utterance = new SpeechSynthesisUtterance(
          "Welcome to AI Web Tools! Please review our important guidelines before continuing. You must be 21 or older to access our platform."
        );
        
        // Configure voice settings for robot-like sound
        utterance.rate = 0.8;
        utterance.pitch = 0.7;
        utterance.volume = 0.8;
        utterance.lang = 'en-US';
        
        // Enhanced voice selection for better robot effect
        const voices = window.speechSynthesis.getVoices();
        const robotVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('male') || 
          voice.name.toLowerCase().includes('alex') ||
          voice.name.toLowerCase().includes('daniel') ||
          voice.name.toLowerCase().includes('fred') ||
          voice.name.toLowerCase().includes('google')
        );
        
        if (robotVoice) {
          utterance.voice = robotVoice;
        }
        
        // Add error handling
        utterance.onerror = (e) => {
          console.log('🔇 Speech synthesis error:', e.error);
        };
        
        utterance.onstart = () => {
          console.log('🤖 Robot voice started');
        };
        
        window.speechSynthesis.speak(utterance);
      };
      
      // Handle voices loading
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.addEventListener('voiceschanged', speak, { once: true });
      } else {
        speak();
      }
      
    } catch (error) {
      console.log('🔇 Speech synthesis not available:', error);
    }
  };

  const toggleVoice = () => {
    if (!('speechSynthesis' in window) || isMobile) return;
    
    try {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      } else {
        speakWelcomeMessage();
      }
    } catch (error) {
      console.log('🔇 Voice toggle error:', error);
    }
  };

  const handleAccept = () => {
    console.log('🌀 User accepting consent - initiating time warp entry...');
    // Stop any ongoing speech
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    
    // Simple acceptance without any voice
    localStorage.setItem('aitools-consent-seen', 'true');
    
    // Create time portal effect for desktop only
    if (!isMobile) {
      createTimePortalEffect('', 'AI Tools Consent Portal');
    }
    
    // Adaptive delay based on device
    setTimeout(() => {
      setShowConsent(false);
    }, isMobile ? 200 : 800);
  };

  if (!showConsent || isMobile) return null;

  // Desktop version only
  return (
    <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 md:p-6">
      <div className="bg-gradient-to-br from-slate-800 via-gray-800 to-black border-2 border-cyan-400/80 rounded-xl p-4 md:p-6 w-full max-w-sm md:max-w-lg shadow-2xl shadow-cyan-400/50 animate-scale-in relative overflow-hidden backdrop-blur-sm max-h-[90vh] overflow-y-auto">
        
        {/* Voice Toggle Button */}
        {isVoiceEnabled && (
          <button
            onClick={toggleVoice}
            className="absolute top-3 right-3 p-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full transition-colors z-10"
            aria-label="Toggle voice"
          >
            <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
          </button>
        )}
        
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