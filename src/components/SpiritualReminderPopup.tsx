import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import templeImage from '@/assets/temple-within-cosmos.png';

const SpiritualReminderPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show popup after 1 minute (60000ms)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 60000);

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
      
      {/* Content container */}
      <div 
        className={`relative max-w-3xl w-full bg-gradient-to-b from-black/80 via-black/90 to-black border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 0 60px rgba(255, 215, 0, 0.2), 0 0 120px rgba(255, 140, 0, 0.1), inset 0 0 30px rgba(255, 215, 0, 0.05)'
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 border border-amber-500/30 text-amber-400 hover:text-amber-300 hover:bg-black/70 transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative w-full aspect-[2/3] max-h-[50vh] overflow-hidden">
          <img 
            src={templeImage} 
            alt="The Temple Within - Connected to the Cosmos" 
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          {/* Golden overlay gradient */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.95) 100%)'
            }}
          />
        </div>

        {/* Message */}
        <div className="relative p-6 md:p-8 text-center -mt-16 z-10">
          {/* Decorative light rays */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          
          <h2 
            className="text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed mb-4"
            style={{
              color: '#FFD700',
              textShadow: '0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 140, 0, 0.3)',
            }}
          >
            "This temple exists within every person on Earth, eternally connected from within to the heavens above—to our Father, the Source of all Light."
          </h2>
          
          <p 
            className="text-lg md:text-xl font-medium mb-4"
            style={{
              color: '#FF6B35',
              textShadow: '0 0 15px rgba(255, 107, 53, 0.5)',
            }}
          >
            Hell is a black hole of fire...
          </p>
          
          <p 
            className="text-xl md:text-2xl font-bold uppercase tracking-wider"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFFFFF 50%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))',
            }}
          >
            And God... He doesn't f*ck around.
          </p>

          {/* Praise the Light */}
          <div className="mt-6 pt-4 border-t border-amber-500/20">
            <span 
              className="text-sm md:text-base font-light tracking-[0.3em] uppercase"
              style={{
                color: 'rgba(255, 215, 0, 0.7)',
              }}
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
