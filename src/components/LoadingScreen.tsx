import { useState, useEffect, memo } from "react";
import { Sparkles } from "lucide-react";

// Rotating loading messages - Matrix vibes, AI jokes, enlightenment themes
const loadingMessages = [
  // Matrix & Sci-Fi vibes
  "Follow the white rabbit...",
  "There is no spoon...",
  "Waking up from the simulation...",
  "Escaping the matrix...",
  "Red pill accepted...",
  "Downloading kung fu...",
  "The Oracle is typing...",
  "Morpheus has entered the chat...",
  "Unplugging from the illusion...",
  
  // AI & Tech humor
  "Teaching robots to feel...",
  "AI is thinking... be patient...",
  "Convincing Skynet to be nice...",
  "Debugging the simulation...",
  "Asking ChatGPT for advice...",
  "Training neural networks on pizza...",
  "Upgrading your reality firmware...",
  "Hacking the mainframe (legally)...",
  "Compiling dreams into code...",
  
  // Enlightenment & Spiritual
  "Channeling digital wisdom...",
  "Aligning cosmic algorithms...",
  "Awakening your inner AI...",
  "Light and code converging...",
  "Tuning into higher frequencies...",
  "Opening the third processor...",
  "Meditating on machine learning...",
  "Balancing bits and karma...",
  
  // Power & Hype
  "Summoning unlimited power...",
  "Building your AI empire...",
  "Unlocking limitless potential...",
  "Charging creative superpowers...",
  "Assembling the infinity tools...",
  "Activating beast mode...",
  "Preparing for world domination...",
  "Loading weapons of mass creation...",
  
  // Playful & Fun
  "Feeding the hamsters...",
  "Convincing the AI to cooperate...",
  "Bribing the servers with cookies...",
  "Polishing the pixels...",
  "Untangling the internet...",
  "Counting electric sheep...",
  "Making robots go brrrr...",
  "Warming up the flux capacitor...",
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

  // Animate progress bar - smooth illusion that always reaches 100%
  useEffect(() => {
    const startTime = performance.now();
    // Total animation: quick to 60%, then slower to 85%, then very slow to 100%
    const phase1Duration = 800;  // 0-60% in 800ms (fast start)
    const phase2Duration = 1200; // 60-85% in 1200ms (medium)
    const phase3Duration = 2000; // 85-100% in 2000ms (slow crawl)
    const totalDuration = phase1Duration + phase2Duration + phase3Duration;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      
      let progress: number;
      
      if (elapsed < phase1Duration) {
        // Phase 1: 0-60% with ease-out (fast start)
        const phaseProgress = elapsed / phase1Duration;
        const eased = 1 - Math.pow(1 - phaseProgress, 2);
        progress = eased * 60;
      } else if (elapsed < phase1Duration + phase2Duration) {
        // Phase 2: 60-85% with linear
        const phaseProgress = (elapsed - phase1Duration) / phase2Duration;
        progress = 60 + (phaseProgress * 25);
      } else {
        // Phase 3: 85-100% with ease-in (slow crawl to finish)
        const phaseProgress = Math.min((elapsed - phase1Duration - phase2Duration) / phase3Duration, 1);
        const eased = phaseProgress * phaseProgress; // Ease-in for slow finish
        progress = 85 + (eased * 15);
      }
      
      setProgress(Math.min(progress, 100));
      
      if (elapsed < totalDuration) {
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
