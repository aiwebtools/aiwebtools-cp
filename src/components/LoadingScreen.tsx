import { useState, useEffect, memo } from "react";
import { Sparkles } from "lucide-react";

// Rotating loading messages - different each time
const loadingMessages = [
  "Activating neural networks...",
  "Syncing with the matrix...",
  "Powering up AI engines...",
  "Connecting to the future...",
  "Loading your toolkit...",
  "Initializing quantum processors...",
  "Waking up the robots...",
  "Charging up creativity...",
  "Building your AI arsenal...",
  "Preparing for launch...",
  "Scanning AI horizons...",
  "Booting intelligence systems...",
  "Aligning digital stars...",
  "Unlocking possibilities...",
  "Assembling your tools...",
  "Calibrating AI sensors...",
  "Warming up algorithms...",
  "Engaging turbo mode...",
  "Entering the matrix...",
  "Summoning AI power...",
];

const LoadingScreen = memo(() => {
  // Start with random message
  const [messageIndex, setMessageIndex] = useState(() => 
    Math.floor(Math.random() * loadingMessages.length)
  );
  const [progress, setProgress] = useState(0);

  // Rotate messages every 1.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Animate progress bar
  useEffect(() => {
    const startTime = performance.now();
    const duration = 2000; // 2 seconds to 95%
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      // Ease out - fast at start, slows near end
      const rawProgress = Math.min((elapsed / duration), 1);
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
      setProgress(Math.min(easedProgress * 95, 95)); // Max 95% to show it's still loading
      
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Title */}
      <h1 
        className="text-xl md:text-2xl font-bold text-green-400 mb-8 tracking-[0.2em] text-center"
        style={{
          textShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
        }}
      >
        LOADING YOUR AI TOOL EMPIRE
      </h1>

      {/* Rotating message with sparkle */}
      <div className="flex items-center gap-2 mb-6 h-8">
        <Sparkles 
          className="w-5 h-5 text-yellow-400 animate-pulse" 
          style={{ filter: 'drop-shadow(0 0 6px rgba(250, 204, 21, 0.8))' }}
        />
        <span 
          className="text-green-400 text-base md:text-lg font-medium transition-opacity duration-300"
          style={{ textShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}
        >
          {loadingMessages[messageIndex]}
        </span>
      </div>

      {/* Animated progress bar */}
      <div className="w-64 md:w-80 h-2 bg-gray-800 rounded-full overflow-hidden border border-green-500/30">
        <div 
          className="h-full rounded-full transition-all duration-100 ease-out"
          style={{ 
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #22c55e, #4ade80, #22c55e)',
            boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)'
          }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-4 text-green-400/80 font-mono text-sm tracking-wider">
        {Math.round(progress)}%
      </div>
    </div>
  );
});

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;
