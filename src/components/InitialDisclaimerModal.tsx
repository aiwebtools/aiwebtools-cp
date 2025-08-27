import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const InitialDisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if user has already agreed to the initial disclaimer
    const timer = setTimeout(() => {
      const hasAcceptedInitialDisclaimer = localStorage.getItem("initialDisclaimerAccepted");
      if (!hasAcceptedInitialDisclaimer) {
        setIsOpen(true);
      }
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const createRobotVoices = () => {
    if (!('speechSynthesis' in window)) {
      console.log('Speech synthesis not supported');
      return;
    }

    try {
      console.log('🤖 Starting robot voice sequence...');

      const playVoices = () => {
        const voices = speechSynthesis.getVoices();
        console.log('🗣️ Available voices:', voices.length);

        // First voice: "ACCESS GRANTED, welcome master"
        const firstUtterance = new SpeechSynthesisUtterance("ACCESS GRANTED, welcome master");
        firstUtterance.rate = 0.5;
        firstUtterance.pitch = 0.4;
        firstUtterance.volume = 0.8;
        
        // Try to find a robotic/male voice
        const roboticVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('male') ||
          voice.name.toLowerCase().includes('david') ||
          voice.name.toLowerCase().includes('alex') ||
          voice.name.toLowerCase().includes('daniel')
        ) || voices.find(voice => voice.lang.startsWith('en'));
        
        if (roboticVoice) {
          console.log('🤖 Using robotic voice:', roboticVoice.name);
          firstUtterance.voice = roboticVoice;
        }

        // Second voice: AOL-style "YOU'VE GOT TOOLS"
        const secondUtterance = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS");
        secondUtterance.rate = 0.7;
        secondUtterance.pitch = 0.8;
        secondUtterance.volume = 0.9;
        
        // Try to find a different voice for variety
        const aolVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('female') ||
          voice.name.toLowerCase().includes('samantha') ||
          voice.name.toLowerCase().includes('karen')
        ) || voices.find(voice => voice.lang.startsWith('en'));
        
        if (aolVoice) {
          console.log('📬 Using AOL voice:', aolVoice.name);
          secondUtterance.voice = aolVoice;
        }

        // Add event listeners for debugging
        firstUtterance.onstart = () => console.log('🤖 First voice started');
        firstUtterance.onend = () => {
          console.log('🤖 First voice ended, starting second...');
          setTimeout(() => {
            speechSynthesis.speak(secondUtterance);
          }, 500);
        };
        firstUtterance.onerror = (error) => console.log('🤖 First voice error:', error);

        secondUtterance.onstart = () => console.log('📬 Second voice started');
        secondUtterance.onend = () => console.log('📬 Voice sequence complete!');
        secondUtterance.onerror = (error) => console.log('📬 Second voice error:', error);

        // Start the sequence
        setTimeout(() => {
          console.log('🎵 Playing first voice...');
          speechSynthesis.speak(firstUtterance);
        }, 300);
      };

      // Wait for voices to load if they haven't already
      if (speechSynthesis.getVoices().length === 0) {
        console.log('⏳ Waiting for voices to load...');
        speechSynthesis.onvoiceschanged = () => {
          console.log('✅ Voices loaded, starting playback');
          playVoices();
        };
      } else {
        console.log('✅ Voices already available');
        playVoices();
      }

    } catch (error) {
      console.log('Robot voice error:', error);
    }
  };

  const handleAccept = () => {
    console.log('🤖 User accepting initial disclaimer - activating robot voices...');
    
    // Play the robot voices
    createRobotVoices();
    
    // Store acceptance and close modal
    localStorage.setItem("initialDisclaimerAccepted", "true");
    setIsOpen(false);
  };

  // Don't render anything until ready to prevent flickering
  if (!isReady || !isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-cyan-500/30 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl shadow-cyan-500/20">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
          <h2 className="text-xl font-bold text-cyan-400">Welcome to AI Web Tools</h2>
        </div>
        
        {/* Content */}
        <div className="space-y-4 text-gray-300">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-400 mb-2">Important Notice</h3>
            <p className="text-sm leading-relaxed">
              These AI tools are for <span className="text-cyan-400 font-semibold">educational and informational purposes only</span>. 
              Some tools are experimental in nature and do not constitute real human or professional advice.
            </p>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>
              By continuing, you acknowledge that you understand these tools are AI-powered services 
              and should not replace professional consultation when needed.
            </p>
          </div>
        </div>
        
        {/* Button */}
        <div className="mt-6">
          <button 
            onClick={handleAccept}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
          >
            I AGREE - Enter AI Web Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitialDisclaimerModal;