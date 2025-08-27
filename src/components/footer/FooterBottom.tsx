
import { Globe } from "lucide-react";

interface FooterBottomProps {
  handleExternalLink: (url: string, e: React.MouseEvent) => void;
}

const FooterBottom = ({ handleExternalLink }: FooterBottomProps) => {
  return (
    <div className="space-y-6">
      {/* Founder Quote - Cyberpunk Neon Style */}
      <div className="text-center border-t border-cyan-500/20 pt-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl"></div>
          <p className="relative text-sm md:text-base text-cyan-300 font-light italic tracking-wide max-w-5xl mx-auto leading-relaxed border border-cyan-500/30 bg-black/60 backdrop-blur-sm rounded-lg p-6 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <span className="text-cyan-400 text-lg">"</span>This page and the tools here were put together with care and persistence over the past two years, and they're offered freely. Love others as yourself. Imagine what you can create. Unlock your dreams. These tools were made to help lift us all—mentally, spiritually, and physically. Let's shape the future together.<span className="text-cyan-400 text-lg">"</span>
          </p>
        </div>
        <p className="text-cyan-400/60 text-sm mt-3">— <span 
            className="font-cursive text-lg cursor-pointer text-yellow-400 hover:text-yellow-300 animate-[pulse_3s_ease-in-out_infinite] hover:animate-none transition-all duration-300 hover:scale-105 drop-shadow-[0_0_8px_rgba(255,255,0,0.6)]"
            onClick={(e) => handleExternalLink('https://www.aitools.company', e)}
          >Kenneth Bastian</span>, AIWebTools.ai</p>
        <p className="text-white text-2xl font-black mt-3 tracking-[0.3em] animate-pulse cursor-pointer hover:scale-105 transition-transform duration-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">BUILD YOUR WORLD.</p>
      </div>
      
      {/* Copyright and Links */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <button 
            onClick={(e) => handleExternalLink("https://www.aitools.company", e)}
            className="text-cyan-300 hover:text-cyan-400 transition-colors"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </button>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <button 
              onClick={(e) => handleExternalLink("https://openai.com/policies/privacy-policy/", e)}
              className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm"
            >
              Privacy Policy
            </button>
            <button 
              onClick={(e) => handleExternalLink("https://aitools.company/terms-of-services", e)}
              className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm"
            >
              Terms of Service
            </button>
            <a 
              href="/disclaimers"
              className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
            >
              📜 Full Disclaimers & User Agreement
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-cyan-300">
          <button 
            onClick={(e) => handleExternalLink("https://freename.io?ref=olive-ears-obey&utm_source=clipboard", e)}
            className="flex items-center space-x-2 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            <span>Launch your next idea with .aiwebtools or .ai-tools</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
