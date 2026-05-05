import { useState, useEffect, memo, useRef } from "react";
import { Sparkles } from "lucide-react";

const loadingMessages = [
  "Follow the white rabbit...",
  "There is no spoon...",
  "Waking up from the simulation...",
  "Escaping the matrix...",
  "Red pill accepted...",
  "Downloading kung fu...",
  "The Oracle is typing...",
  "Morpheus has entered the chat...",
  "Unplugging from the illusion...",
  "Teaching robots to feel...",
  "AI is thinking... be patient...",
  "Convincing Skynet to be nice...",
  "Debugging the simulation...",
  "Asking ChatGPT for advice...",
  "Training neural networks on pizza...",
  "Upgrading your reality firmware...",
  "Hacking the mainframe (legally)...",
  "Compiling dreams into code...",
  "Channeling digital wisdom...",
  "Aligning cosmic algorithms...",
  "Awakening your inner AI...",
  "Light and code converging...",
  "Tuning into higher frequencies...",
  "Opening the third processor...",
  "Meditating on machine learning...",
  "Balancing bits and karma...",
  "Summoning unlimited power...",
  "Building your AI empire...",
  "Unlocking limitless potential...",
  "Charging creative superpowers...",
  "Assembling the infinity tools...",
  "Activating beast mode...",
  "Preparing for world domination...",
  "Loading weapons of mass creation...",
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
  const [messageIndex, setMessageIndex] = useState(() =>
    Math.floor(Math.random() * loadingMessages.length)
  );
  const [progress, setProgress] = useState(0);

  // Rotate messages via JS (lightweight, won't freeze visuals)
  useEffect(() => {
    const id = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  // JS-driven progress counter for universal browser support
  // (CSS content animation doesn't work in all browsers)
  const welcomeSoundPlayedRef = useRef(false);
  useEffect(() => {
    const start = performance.now();
    const duration = 1200; // Match CSS progress bar duration
    let raf: number;
    const tick = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      // Play welcome sound once at ~12% — non-blocking fire-and-forget
      if (pct >= 12 && !welcomeSoundPlayedRef.current) {
        welcomeSoundPlayedRef.current = true;
        const audio = new Audio('/welcome-aiwebtools.mp3');
        audio.volume = 0.8;
        audio.play().catch(() => {});
      }
      if (pct < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="ls-grid" />
      {/* Scanline sweep */}
      <div className="ls-scanline" />

      {/* Brand wordmark */}
      <h1
        className="ls-brand text-3xl md:text-5xl font-extrabold text-green-400 mb-6 tracking-[0.18em] text-center font-mono"
      >
        AIWEBTOOLS<span className="text-green-300">.AI</span>
      </h1>

      {/* CSS-only 3D Rotating Cube wrapped in pulsing rings */}
      <div className="relative mb-8 w-[140px] h-[140px] flex items-center justify-center">
        <span className="ls-ring" />
        <span className="ls-ring delay-1" />
        <span className="ls-ring delay-2" />
        <div style={{ perspective: '700px', WebkitPerspective: '700px', transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' as any }}>
          <div className="loading-cube">
            <div className="loading-cube-face loading-cube-front"><span>🤖</span></div>
            <div className="loading-cube-face loading-cube-back"><span>⚡</span></div>
            <div className="loading-cube-face loading-cube-right"><span>🧠</span></div>
            <div className="loading-cube-face loading-cube-left"><span>🚀</span></div>
            <div className="loading-cube-face loading-cube-top"><span>✨</span></div>
            <div className="loading-cube-face loading-cube-bottom"><span>💡</span></div>
          </div>
        </div>
      </div>

      <div
        className="text-sm md:text-base font-bold text-green-400 mb-6 tracking-[0.35em] text-center font-mono"
        style={{ textShadow: '0 0 14px rgba(34, 197, 94, 0.7)' }}
      >
        &gt; NOW LOADING<span className="ls-caret">_</span>
      </div>

      <div className="flex items-center gap-2 mb-6 h-8">
        <Sparkles
          className="w-5 h-5 text-yellow-400 animate-pulse"
          style={{ filter: 'drop-shadow(0 0 6px rgba(250, 204, 21, 0.8))' }}
        />
        <span
          className="text-green-400 text-base md:text-lg font-medium"
          style={{ textShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}
        >
          {loadingMessages[messageIndex]}
        </span>
      </div>

      {/* Progress bar uses pure CSS animation — GPU-driven, never freezes */}
      <div className="w-64 md:w-80 h-3 bg-gray-800 rounded-full overflow-hidden border border-green-500/30">
        <div
          className="h-full rounded-full loading-progress-bar"
          style={{
            background: 'linear-gradient(90deg, #22c55e, #4ade80, #22c55e)',
            boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)',
          }}
        />
      </div>

      {/* JS-driven percentage for universal browser support */}
      <div
        className="mt-4 text-green-400 font-mono text-lg tracking-wider font-bold"
        style={{ textShadow: '0 0 10px rgba(34, 197, 94, 0.8)' }}
      >
        {progress}%
      </div>
    </div>
  );
});

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;
