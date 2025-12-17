import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";

const DisclaimerGate: React.FC = () => {
  const navigate = useNavigate();

  // If already accepted, skip this page
  useEffect(() => {
    const hasAccepted = localStorage.getItem("aitools-consent-v3");
    if (hasAccepted) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleAccept = () => {
    // Store acceptance first
    localStorage.setItem("aitools-consent-v3", "true");

    // Play welcome audio - keep reference so it doesn't get garbage collected
    const audio = new Audio("/welcome-disclaimer.mp3");
    audio.volume = 1.0;
    (window as any).__disclaimerAudio = audio; // Prevent GC
    
    audio.play().then(() => {
      console.log('🎵 Playing disclaimer welcome audio...');
    }).catch((err) => {
      console.log('Audio play failed:', err);
    });

    // Navigate after short delay to let audio start
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <ImprovedSEOHead pageType="homepage" />
      <div className="max-w-md w-full bg-gray-900 border-2 border-cyan-500 rounded-2xl p-6 shadow-2xl shadow-cyan-500/30 animate-fade-in">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <h1 className="text-xl font-bold text-white">Welcome to AI Web Tools</h1>
          </div>
          <p className="text-cyan-200 text-sm">Please review our guidelines before entering</p>
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
