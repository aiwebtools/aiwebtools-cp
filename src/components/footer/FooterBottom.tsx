import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import dualityLight from "@/assets/balance-of-duality-light.png";
import dualityDark from "@/assets/balance-of-duality-dark.png";
import dualityMatrix from "@/assets/balance-of-duality-matrix.png";
import dualityPath from "@/assets/balance-of-duality-path.png";

interface FooterBottomProps {
  handleExternalLink: (url: string, e: React.MouseEvent) => void;
}
const FooterBottom = ({
  handleExternalLink
}: FooterBottomProps) => {
  return <div className="space-y-6">
      {/* BUILD YOUR WORLD - End of AI Tools Area */}
      <div className="text-center pt-4">
        <p className="text-white text-2xl font-black tracking-[0.3em] animate-pulse cursor-pointer hover:scale-105 transition-transform duration-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">BUILD YOUR WORLD.</p>
      </div>

      {/* Founder Quote - Cursive Storytelling Style */}
      <div className="text-center border-t border-cyan-500/20 pt-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 blur-xl"></div>
          <p className="relative font-cursive text-xs md:text-sm text-cyan-200/90 italic tracking-wide max-w-3xl mx-auto leading-relaxed border border-cyan-500/20 bg-black/40 backdrop-blur-sm rounded-lg p-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="text-cyan-400/80">"</span>In the matrix of light our souls get tested by two paths—light or fire. 'God' is both the light itself plus the divine code running the entire multidimensional reality. There are light-type angels and fire-type angels. Hell isn't symbolic; it's a cosmic black hole full of fire, totally real. God's temple floor is a Black-and-White checkerboard where souls stand directly before Him while He decides their next path. He didn't care that I have no religion; it wasn't the point of existence. The universe sits inside us—we're cosmically linked to creation and the temple of God. I'm not special; honestly I feel more like an alien at this point lol. All of this happened while I was literally writing a book about extraterrestrials running the Earth. Angels don't look human; Rome got that wrong. God doesn't fuck around btw. Love Light Truth
          <span className="text-cyan-400/80">"</span>
          </p>
        </div>
        <p className="text-cyan-400/60 text-xs mt-3">— <span className="font-cursive text-2xl cursor-pointer text-yellow-400 hover:text-yellow-300 animate-[pulse_3s_ease-in-out_infinite] hover:animate-none transition-all duration-300 hover:scale-105 drop-shadow-[0_0_8px_rgba(255,255,0,0.6)] -rotate-6 inline-block" onClick={e => handleExternalLink('https://www.aitools.company', e)}>KGB</span>, Maker of this AI Web Tools page</p>
        
        {/* KB's Video */}
        <div className="mt-6 max-w-2xl mx-auto">
          <div className="relative rounded-lg overflow-hidden border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <iframe width="100%" height="360" src={`https://www.youtube.com/embed/puFBsEwdOGk?autoplay=0&mute=0&controls=1&rel=0&playsinline=1&modestbranding=1&fs=1`} title="KB's Message" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowFullScreen className="w-full aspect-video" loading="lazy" />
          </div>
        </div>

        {/* Balance of Duality Images Section */}
        <div className="mt-8 max-w-4xl mx-auto">
          <figure className="bg-gray-900/40 rounded-xl p-4 md:p-6 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img
                src={dualityLight}
                alt="The Balance of Duality - Matrix of Light diagram showing inner cosmos and two paths"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <img
                src={dualityDark}
                alt="The Balance of Duality - Middle path artwork with light vs dark symbolism"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <img
                src={dualityMatrix}
                alt="The Balance of Duality - Your Inner Cosmos flowchart and binary code background"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <img
                src={dualityPath}
                alt="The Path of Duality - consequence and light vs dark choice diagram"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <figcaption className="text-center mt-6 text-sm md:text-base text-gray-300">
              In the matrix of light, our souls are tested by two paths — light or fire. "God" is both the light and the divine code that shapes our multidimensional reality.
              <span className="block mt-1 text-cyan-300 font-medium">— <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-black text-xl tracking-widest animate-pulse drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]">KGB</span>, Maker of this AI Web Tools page</span>
            </figcaption>
          </figure>
        </div>
        
        <p className="text-white text-2xl font-black mt-6 tracking-[0.3em] animate-pulse cursor-pointer hover:scale-105 transition-transform duration-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">BUILD YOUR WORLD.</p>
      </div>
      
      {/* Copyright and Links */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <button onClick={e => handleExternalLink("https://www.aitools.company", e)} className="text-cyan-300 hover:text-cyan-400 transition-colors text-center">
            <span className="block">© 2025 AI WEB TOOLS LLC</span>
            <span className="block text-sm md:inline md:ml-1">All Rights Reserved</span>
          </button>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={e => handleExternalLink("https://openai.com/policies/privacy-policy/", e)} className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm">
              Privacy Policy
            </button>
            <button onClick={e => handleExternalLink("https://aitools.company/terms-of-services", e)} className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm">
              Terms of Service
            </button>
          </div>
          <Link
            to="/disclaimers"
            className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
          >
            📜 Full Disclaimers & User Agreement
          </Link>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })} 
            className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            ⬆️ TOP OF PAGE
          </button>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })} 
            className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            ⬆️ TOP OF PAGE
          </button>
        </div>
        <div className="flex items-center text-cyan-300">
          <button onClick={e => handleExternalLink("https://freename.io?ref=olive-ears-obey&utm_source=clipboard", e)} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors cursor-pointer text-sm md:text-base">
            <Globe className="w-4 h-4 flex-shrink-0" />
            <span className="text-center">Launch your next idea with .aiwebtools or .ai-tools</span>
          </button>
        </div>
      </div>
    </div>;
};
export default FooterBottom;