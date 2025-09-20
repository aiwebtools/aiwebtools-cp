import React from 'react';

const ScrollingBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 border-t border-cyan-500/30 backdrop-blur-sm overflow-hidden h-8">
      <div className="relative w-full h-full flex items-center">
        {/* Scrolling text container */}
        <div className="animate-scroll-text whitespace-nowrap flex items-center h-full">
          <span className="text-cyan-400 text-sm font-medium tracking-wide px-8 cyber-glow-subtle">
            This website was made for those with eyes to see, and ears to hear
          </span>
          <span className="text-cyan-400 text-sm font-medium tracking-wide px-8 cyber-glow-subtle">
            This website was made for those with eyes to see, and ears to hear
          </span>
          <span className="text-cyan-400 text-sm font-medium tracking-wide px-8 cyber-glow-subtle">
            This website was made for those with eyes to see, and ears to hear
          </span>
        </div>
        
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-black/90 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-black/90 to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default ScrollingBanner;