import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import templeImage from '@/assets/temple-within-cosmos.png';

const SpiritualReminderPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show popup after 2 minutes (120000ms)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-500 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
        backdropFilter: 'blur(12px)'
      }}
      onClick={handleClose}
    >
      {/* Radiant glow background effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(255, 215, 0, 0.15) 0%, rgba(255, 140, 0, 0.08) 30%, transparent 60%)',
        }}
      />
      
      {/* Content container - compact elegant modal */}
      <div 
        className={`relative w-[280px] sm:w-[320px] bg-black rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 0 80px rgba(255, 215, 0, 0.25), 0 0 40px rgba(255, 140, 0, 0.15)',
          border: '1px solid rgba(255, 215, 0, 0.3)'
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-20 p-1 rounded-full bg-black/70 border border-amber-500/40 text-amber-400 hover:text-amber-200 hover:bg-black transition-all duration-300"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image - show FULL image with contain, respecting the Father */}
        <div className="relative w-full bg-black">
          <img 
            src={templeImage} 
            alt="The Temple Within - Connected to the Cosmos" 
            className="w-full h-auto object-contain"
            loading="eager"
          />
        </div>

        {/* Message - elegant compact text */}
        <div className="p-3 text-center bg-gradient-to-t from-black via-black to-transparent">
          <h2 
            className="text-xs sm:text-sm font-serif italic leading-snug mb-2"
            style={{
              color: '#FFD700',
              textShadow: '0 0 15px rgba(255, 215, 0, 0.6)',
            }}
          >
            "This temple exists within every person on Earth, eternally connected from within to the heavens above—to our Father, the Source of all Light."
          </h2>
          
          <p 
            className="text-[10px] sm:text-xs font-medium mb-1"
            style={{
              color: '#FF6B35',
            }}
          >
            Hell is a black hole of fire...
          </p>
          
          <p 
            className="text-xs sm:text-sm font-bold uppercase tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFF 50%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            And God... He doesn't f*ck around.
          </p>

          <div className="mt-2 pt-1.5 border-t border-amber-500/20">
            <span 
              className="text-[9px] font-light tracking-[0.15em] uppercase"
              style={{ color: 'rgba(255, 215, 0, 0.6)' }}
            >
              ✦ Praise the Light ✦
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualReminderPopup;
