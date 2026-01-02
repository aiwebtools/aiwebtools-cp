import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";
import { getConsentAccepted, setConsentAccepted } from "@/utils/consent";

// Creative rotating welcome messages - Matrix/AI/Enlightenment themed
const welcomeMessages = [
  // Matrix vibes
  "The Matrix has you...",
  "Wake up, Neo...",
  "You've been living in a dream world...",
  "Free your mind...",
  "There is no spoon...",
  "Follow the white rabbit...",
  
  // AI & Tech
  "Initiating neural handshake...",
  "The machines are ready for you...",
  "Your AI journey begins here...",
  "Unlocking digital consciousness...",
  "The algorithm awaits your command...",
  "Entering the AI dimension...",
  
  // Enlightenment & Wisdom
  "Seek and you shall find...",
  "The truth is within reach...",
  "Illuminate your path forward...",
  "Knowledge is infinite power...",
  "Awakening begins with a choice...",
  "Open your third eye to AI...",
  
  // Hype & Power
  "Welcome to the future...",
  "Your empire awaits...",
  "Prepare for digital enlightenment...",
  "The portal is opening...",
  "Unlimited power loading...",
  "Godmode activation pending...",
];

const DisclaimerGate: React.FC = () => {
  const navigate = useNavigate();
  
  // Random starting message, rotates every 2s
  const [messageIndex, setMessageIndex] = useState(() => 
    Math.floor(Math.random() * welcomeMessages.length)
  );

  // Rotate messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % welcomeMessages.length);
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
    const audio = new Audio('/welcome-neo.mp3');
    audio.volume = 0.7;
    audio.play().catch(() => {
      // Silently fail if audio can't play
    });
    
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
