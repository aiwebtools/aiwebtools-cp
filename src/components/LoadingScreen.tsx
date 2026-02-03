import { useState, useEffect, memo, useRef } from "react";
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
  const [cubeRotation, setCubeRotation] = useState({ x: 0, y: 0 });
  const [forceComplete, setForceComplete] = useState(false);
  
  // Use refs to track animation state even if React re-renders slowly
  const progressRef = useRef(0);
  const rotationRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef(Date.now());
  const mountedRef = useRef(true);

  // MOBILE FIX: Force-complete loading after 2.5 seconds max
  // This prevents getting stuck on loading screen if component mount stalls
  useEffect(() => {
    const forceCompleteTimeout = setTimeout(() => {
      if (mountedRef.current) {
        setForceComplete(true);
        setProgress(100);
        progressRef.current = 100;
      }
    }, 2500);
    
    return () => {
      mountedRef.current = false;
      clearTimeout(forceCompleteTimeout);
    };
  }, []);

  // Rotate messages every 1.5s
  useEffect(() => {
    if (forceComplete) return;
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [forceComplete]);

  // Rock-solid animation loop using requestAnimationFrame + setInterval hybrid
  // This ensures animation NEVER freezes even during heavy main-thread work
  useEffect(() => {
    if (forceComplete) return;
    
    let progressIntervalId: ReturnType<typeof setInterval>;
    let cubeIntervalId: ReturnType<typeof setInterval>;
    let rafRunning = true;
    
    // Progress animation via setInterval - FAST 2 second completion
    progressIntervalId = setInterval(() => {
      if (!mountedRef.current) return;
      if (progressRef.current < 70) {
        progressRef.current += 5; // Fast start
      } else if (progressRef.current < 90) {
        progressRef.current += 3; // Medium pace
      } else if (progressRef.current < 100) {
        progressRef.current += 2; // Quick finish
      } else {
        progressRef.current = 100;
      }
      setProgress(Math.min(progressRef.current, 100));
    }, 40);
    
    // Cube rotation via setInterval (fallback for when RAF stalls)
    cubeIntervalId = setInterval(() => {
      if (!mountedRef.current) return;
      rotationRef.current = {
        x: rotationRef.current.x + 2,
        y: rotationRef.current.y + 3,
      };
      setCubeRotation({ ...rotationRef.current });
    }, 32); // ~30fps
    
    // Also use RAF for smoother animation when main thread is free
    const animate = () => {
      if (!rafRunning || !mountedRef.current) return;
      
      const now = Date.now();
      const delta = now - lastTimeRef.current;
      
      // Only update if enough time has passed (prevents double updates)
      if (delta > 30) {
        lastTimeRef.current = now;
        // RAF handles cube rotation smoothly when available
        rotationRef.current = {
          x: rotationRef.current.x + 1,
          y: rotationRef.current.y + 1.5,
        };
        setCubeRotation({ ...rotationRef.current });
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      rafRunning = false;
      clearInterval(progressIntervalId);
      clearInterval(cubeIntervalId);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [forceComplete]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* 3D Rotating Cube */}
      <div 
        className="mb-8"
        style={{
          perspective: '600px',
          perspectiveOrigin: 'center center',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`,
            willChange: 'transform',
          }}
        >
          {/* Front face */}
          <div style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
            border: '2px solid rgba(34, 197, 94, 0.8)',
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.5), inset 0 0 10px rgba(255,255,255,0.1)',
            transform: 'translateZ(30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '24px', filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.8))' }}>🤖</span>
          </div>
          {/* Back face */}
          <div style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
            border: '2px solid rgba(5, 150, 105, 0.8)',
            boxShadow: '0 0 20px rgba(5, 150, 105, 0.5), inset 0 0 10px rgba(255,255,255,0.1)',
            transform: 'rotateY(180deg) translateZ(30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '24px' }}>⚡</span>
          </div>
          {/* Right face */}
          <div style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)',
            border: '2px solid rgba(20, 184, 166, 0.8)',
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.5), inset 0 0 10px rgba(255,255,255,0.1)',
            transform: 'rotateY(90deg) translateZ(30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '24px' }}>🧠</span>
          </div>
          {/* Left face */}
          <div style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
            border: '2px solid rgba(13, 148, 136, 0.8)',
            boxShadow: '0 0 20px rgba(13, 148, 136, 0.5), inset 0 0 10px rgba(255,255,255,0.1)',
            transform: 'rotateY(-90deg) translateZ(30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '24px' }}>🚀</span>
          </div>
          {/* Top face */}
          <div style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #34d399 0%, #6ee7b7 100%)',
            border: '2px solid rgba(52, 211, 153, 0.8)',
            boxShadow: '0 0 20px rgba(52, 211, 153, 0.5), inset 0 0 10px rgba(255,255,255,0.1)',
            transform: 'rotateX(90deg) translateZ(30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '24px' }}>✨</span>
          </div>
          {/* Bottom face */}
          <div style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #047857 0%, #059669 100%)',
            border: '2px solid rgba(4, 120, 87, 0.8)',
            boxShadow: '0 0 20px rgba(4, 120, 87, 0.5), inset 0 0 10px rgba(255,255,255,0.1)',
            transform: 'rotateX(-90deg) translateZ(30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '24px' }}>💡</span>
          </div>
        </div>
      </div>
      
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
      <div className="w-64 md:w-80 h-3 bg-gray-800 rounded-full overflow-hidden border border-green-500/30">
        <div 
          className="h-full rounded-full"
          style={{ 
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #22c55e, #4ade80, #22c55e)',
            boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)',
            transition: 'width 50ms linear',
          }}
        />
      </div>

      {/* Percentage with glow effect */}
      <div 
        className="mt-4 text-green-400 font-mono text-lg tracking-wider font-bold"
        style={{ textShadow: '0 0 10px rgba(34, 197, 94, 0.8)' }}
      >
        {Math.round(progress)}%
      </div>
    </div>
  );
});

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;
