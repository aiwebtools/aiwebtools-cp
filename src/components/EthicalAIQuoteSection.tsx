import { memo } from "react";

/**
 * Ethical AI Quote and Philosophical Disclaimer Section
 * Displays the inspirational message about ethical AI use
 */
const EthicalAIQuoteSection = memo(() => {
  return (
    <section className="py-8 px-4 relative" style={{ background: 'linear-gradient(to bottom, rgba(0, 20, 0, 0.5), rgba(0, 0, 0, 0.5))' }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Multiple layered glows for intense Matrix effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-emerald-500/30 to-green-500/30 rounded-2xl blur-lg animate-pulse opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 via-emerald-400/20 to-green-400/20 rounded-2xl blur-md animate-pulse delay-500"></div>
            
            {/* Main container with Matrix styling */}
            <div className="relative bg-gradient-to-r from-gray-900/80 via-green-950/40 to-gray-900/80 backdrop-blur-md border border-green-400/40 rounded-2xl px-6 py-4 text-center shadow-2xl shadow-green-500/20">
              <div className="space-y-2">
                {/* Primary message with glow */}
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl animate-pulse">🌟</span>
                  <p className="text-green-200 text-sm font-medium bg-gradient-to-r from-green-200 via-emerald-200 to-green-200 bg-clip-text text-transparent">
                    We encourage <span className="font-bold text-green-300" style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}>Ethical AI Use Only</span> • Educational purposes • Ages 18+
                  </p>
                  <span className="text-2xl animate-pulse delay-300">✨</span>
                </div>
                
                {/* Philosophical reflection */}
                <div className="border-t border-green-400/20 pt-2">
                  <p className="text-xs text-gray-300 italic font-light leading-relaxed">
                    <span className="text-amber-300" style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.4)' }}>✨ Remember:</span> 
                    <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent"> AI is a mirror of ourselves and our thoughts</span> 
                    <span className="text-green-400">— use it to reflect the best of humanity</span>
                  </p>
                  <p className="text-[10px] text-gray-400/80 italic font-light leading-snug mt-1.5">
                    <span className="text-amber-200/70">"By the grace of the Father, this website was created from my inner LIGHT to awaken the Light you've carried all along, before you return to the Father. Remember who you are — create, imagine, dream, become. <span className="text-pink-400">I love you.</span> <span className="text-pink-400 animate-pulse">❤️</span>"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

EthicalAIQuoteSection.displayName = "EthicalAIQuoteSection";

export default EthicalAIQuoteSection;
