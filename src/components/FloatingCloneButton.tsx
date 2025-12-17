import { Copy } from 'lucide-react';
import { createTimePortalEffect } from '@/utils/timeEffects';

const FloatingCloneButton = () => {
  return (
    <div
      className="fixed left-2 z-50"
      style={{
        // Mobile: top-28 (much higher, above content)
        // Desktop: top-48 (unchanged)
        top: 'var(--clone-btn-top, 192px)'
      }}
    >
      {/* CSS custom property for responsive positioning */}
      <style>{`
        @media (max-width: 767px) {
          .clone-button-container {
            --clone-btn-top: 100px !important;
          }
        }
        @media (min-width: 768px) {
          .clone-button-container {
            --clone-btn-top: 192px !important;
          }
        }
      `}</style>
      
      <a
        href="https://lovable.dev/projects/e2ddf9b0-bb19-44f8-ae1a-05e469735dad?via=aiwebtools"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('🌀 Clone Website Button clicked - triggering time warp');
          createTimePortalEffect('https://lovable.dev/projects/e2ddf9b0-bb19-44f8-ae1a-05e469735dad?via=aiwebtools', 'Clone AI Web Tools');
        }}
        className="clone-button-container group bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white 
          w-14 h-14 md:w-20 md:h-20 
          rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center relative overflow-hidden"
        style={{ 
          boxShadow: '0 8px 30px rgba(6, 182, 212, 0.4), 0 4px 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)',
          backdropFilter: 'blur(8px)',
        }}
        title="Clone This AI Tools Website"
      >
        {/* Animated pulsing ring - smaller on mobile */}
        <div className="absolute inset-0 rounded-full border-2 md:border-4 border-cyan-400/50 animate-ping" />
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 animate-pulse rounded-full" />
        
        {/* Content - smaller on mobile */}
        <div className="relative flex flex-col items-center justify-center text-center">
          <Copy className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce mb-0.5" />
          <div className="text-[7px] md:text-[9px] font-bold leading-tight tracking-wide">
            <div>CLONE</div>
            <div>SITE</div>
            <div className="text-yellow-300">FREE</div>
          </div>
        </div>
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 rounded-full" />
      </a>
    </div>
  );
};

export default FloatingCloneButton;
