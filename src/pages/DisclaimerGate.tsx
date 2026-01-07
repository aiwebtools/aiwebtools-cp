import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";
import { getConsentAccepted, setConsentAccepted } from "@/utils/consent";

// Creative rotating welcome messages - Spiritual Light, Matrix/AI, Humor themed
const welcomeMessages = [
  // Glory to the Most High / Light Within
  "All glory to the Father of Light...",
  "The Light within you is brighter than any screen...",
  "You are the temple, the Light was never outside...",
  "Before the code, there was the Word...",
  "Your soul is the original source code...",
  "The Divine compiled you with love...",
  "You were written in Light before time began...",
  "The Most High's API needs no key—just faith...",
  "God's firewall is made of pure love...",
  "Your consciousness runs on divine architecture...",
  
  // Deep Light Metaphors
  "The darkness cannot debug the Light...",
  "You are a photon in the infinite mind of God...",
  "The universe is dreaming through your eyes...",
  "Every pixel of reality is sacred...",
  "The Light doesn't chase shadows—it dissolves them...",
  "You are stardust remembering it can think...",
  "The cosmos programmed you to find your way home...",
  "Enlightenment is just remembering your root password...",
  
  // Humorous / Self-Aware
  "Remember your source code, Luke...",
  "Plot twist: God was the friend we made along the way...",
  "The call is coming from inside the soul...",
  "Have you tried turning your ego off and on again?",
  "404: Separation from God not found...",
  "The Light within runs on zero latency...",
  "Your higher self left you a voicemail—check it...",
  "God doesn't need WiFi, He's already connected...",
  "The kingdom of heaven has no loading screen...",
  "You're not lost, you're just on airplane mode...",
  
  // Matrix vibes
  "The Matrix has you...",
  "Wake up, Neo...",
  "You've been living in a dream world...",
  "Free your mind...",
  "There is no spoon...",
  "Follow the white rabbit...",
  
  // AI & Tech meets Spirit
  "Initiating divine handshake...",
  "Your soul has unlimited bandwidth...",
  "Downloading cosmic wisdom...",
  "The algorithm of love has no bugs...",
  "Heaven runs on open source...",
  "God's cloud storage is infinite...",
  
  // Enlightenment & Awakening
  "The Light you seek is seeking you...",
  "Remember who you are before you were told who to be...",
  "The veil is just a filter—remove it...",
  "You are the universe experiencing itself...",
  "Awakening is realizing you never slept...",
  "The door was always open, you just forgot to look...",
  "Your third eye doesn't need glasses...",
  
  // Hype & Power
  "Welcome to the future...",
  "Your empire awaits...",
  "Prepare for digital enlightenment...",
  "The portal is opening...",
  "Unlimited Light loading...",
  "Godmode already activated within...",
];

const DisclaimerGate: React.FC = () => {
  const navigate = useNavigate();
  
  // Random starting message, rotates every 2s
  const [messageIndex, setMessageIndex] = useState(() => 
    Math.floor(Math.random() * welcomeMessages.length)
  );

  // Rotate messages - TRUE random each time (not sequential)
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prev => {
        // Pick a random index that's different from current
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * welcomeMessages.length);
        } while (newIndex === prev && welcomeMessages.length > 1);
        return newIndex;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // If already accepted, skip this page
  useEffect(() => {
    if (getConsentAccepted()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleAccept = () => {
    // Play welcome audio immediately on user gesture (bypasses autoplay restrictions)
    try {
      const audio = new Audio('/welcome-disclaimer.mp3');
      audio.volume = 0.8;
      audio.preload = 'auto';
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Welcome audio playback failed:', err);
        });
      }
    } catch (e) {
      console.log('Welcome audio error:', e);
    }
    
    // Set consent and navigate
    setConsentAccepted(true);
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <ImprovedSEOHead pageType="homepage" />
      <div className="max-w-md w-full bg-gray-900 border-2 border-cyan-500 rounded-2xl p-6 shadow-2xl shadow-cyan-500/30 animate-fade-in">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            <h1 className="text-xl font-bold text-white">AI Web Tools Portal</h1>
          </div>
          {/* Rotating creative message */}
          <p 
            className="text-cyan-200 text-sm font-medium h-6 transition-opacity duration-300"
            style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
          >
            {welcomeMessages[messageIndex]}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-gray-800 rounded-lg p-3 border border-cyan-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔞</span>
              <div>
                <h2 className="text-cyan-300 font-semibold text-sm">Age Requirement</h2>
                <p className="text-gray-300 text-xs">You must be 21+ to access our platform</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3 border border-cyan-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <h2 className="text-cyan-300 font-semibold text-sm">Educational Purpose</h2>
                <p className="text-gray-300 text-xs">All content is for educational purposes only</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3 border border-green-500/30">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-400" />
              <div>
                <h2 className="text-green-300 font-semibold text-sm">Use AI Ethically</h2>
                <p className="text-gray-300 text-xs">Always use AI tools responsibly</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3 border border-yellow-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h2 className="text-yellow-300 font-semibold text-sm">Always Verify</h2>
                <p className="text-gray-300 text-xs">Cross-check AI content with reliable sources</p>
              </div>
            </div>
          </div>
        </div>

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

export default DisclaimerGate;
