import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Sparkles, Shield, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";
import MatrixRain from "@/components/effects/MatrixRain";

const DisclaimerGate: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Preload the homepage in background while user reads disclaimer
  useEffect(() => {
    const hasAccepted = localStorage.getItem("aitools-consent-v3");
    if (hasAccepted) {
      navigate("/", { replace: true });
      return;
    }

    // Preload critical homepage resources in background
    const preloadHomepage = async () => {
      // Prefetch the main page module
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = '/';
      document.head.appendChild(link);
      
      // Mark as ready after brief preload time
      setTimeout(() => setIsReady(true), 500);
    };
    
    preloadHomepage();
  }, [navigate]);

  const handleAccept = () => {
    setIsLoading(true);
    
    // Store acceptance immediately
    localStorage.setItem("aitools-consent-v3", "true");

    // Play welcome audio in background
    const audio = new Audio("/welcome-disclaimer.mp3");
    audio.volume = 1.0;
    audio.play().catch(() => {});

    // Navigate instantly (no delay)
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
      <ImprovedSEOHead pageType="homepage" />
      
      {/* Matrix rain background - visible behind glass modal */}
      <div className="absolute inset-0 z-0">
        <MatrixRain />
      </div>
      
      {/* Subtle dark overlay for readability */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      
      {/* Glass morphism disclaimer card */}
      <div className="relative z-20 max-w-md w-full backdrop-blur-xl bg-black/70 border-2 border-cyan-500/80 rounded-2xl p-6 shadow-2xl shadow-cyan-500/40 animate-fade-in">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            <h1 className="text-xl font-bold text-white">Welcome to AI Web Tools</h1>
          </div>
          <p className="text-cyan-200 text-sm">Please review our guidelines before entering</p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="backdrop-blur-sm bg-gray-900/60 rounded-lg p-3 border border-cyan-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔞</span>
              <div>
                <h2 className="text-cyan-300 font-semibold text-sm">Age Requirement</h2>
                <p className="text-gray-300 text-xs">You must be 21+ to access our platform</p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-gray-900/60 rounded-lg p-3 border border-cyan-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <h2 className="text-cyan-300 font-semibold text-sm">Educational Purpose</h2>
                <p className="text-gray-300 text-xs">All content is for educational purposes only</p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-gray-900/60 rounded-lg p-3 border border-green-500/30">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-400" />
              <div>
                <h2 className="text-green-300 font-semibold text-sm">Use AI Ethically</h2>
                <p className="text-gray-300 text-xs">Always use AI tools responsibly</p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-gray-900/60 rounded-lg p-3 border border-yellow-500/30">
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
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-80"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Entering Portal...
            </>
          ) : (
            <>
              <Check className="w-5 h-5 mr-2" />
              I Understand & Enter Portal
              <Sparkles className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
        
        {/* Ready indicator - subtle glow when preloaded */}
        {isReady && !isLoading && (
          <div className="mt-3 text-center">
            <span className="text-xs text-green-400/70 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Portal ready
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisclaimerGate;
