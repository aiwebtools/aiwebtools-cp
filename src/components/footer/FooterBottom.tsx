import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterBottomProps {
  handleExternalLink: (url: string, e: React.MouseEvent) => void;
}
const FooterBottom = ({
  handleExternalLink
}: FooterBottomProps) => {
  return <div className="space-y-6">
      
      {/* Cosmic Light Cursive Quote */}
      <div className="flex justify-center px-4">
        <p
          className="text-center max-w-2xl text-green-300/90 leading-snug"
          style={{
            fontFamily: '"Dancing Script", "Great Vibes", cursive',
            fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)',
            letterSpacing: '0.01em',
            textShadow: '0 0 8px rgba(0, 255, 0, 0.35)',
          }}
        >
          IF THIS IS THE LAST CHAPTER…… THEN MAKE IT A BEAUTIFUL ONE — IMAGINE — A PERSPECTIVE OF LOVE AND BALANCE. 𐤀𐤅𐤓 𐤔𐤌𐤉𐤌 — THE COSMIC LIGHT IS WITHIN ALL PEOPLE, NO DOGMA REQUIRED. #JUSTTHEFACTS
        </p>
      </div>

      {/* Copyright and Links */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <button
            onClick={e => handleExternalLink("https://aiwebtools.lovable.app/?via=aiwebtools", e)}
            className="text-green-300 hover:text-green-400 transition-colors text-center group"
          >
            <style>{`
              @keyframes awtFooterPulse {
                0%, 100% {
                  transform: scale(1);
                  text-shadow: 0 0 12px rgba(0,255,120,0.55), 0 0 28px rgba(0,255,120,0.30);
                  filter: brightness(1);
                }
                50% {
                  transform: scale(1.06);
                  text-shadow: 0 0 22px rgba(0,255,120,1), 0 0 50px rgba(0,255,120,0.75), 0 0 90px rgba(0,255,120,0.45);
                  filter: brightness(1.25);
                }
              }
              @keyframes awtInfinitySpinPulse {
                0%, 100% {
                  transform: scale(1) rotate(0deg);
                  text-shadow: 0 0 14px rgba(0,255,140,0.9), 0 0 32px rgba(0,255,140,0.55), 0 0 60px rgba(0,255,140,0.35);
                }
                50% {
                  transform: scale(1.18) rotate(8deg);
                  text-shadow: 0 0 26px rgba(0,255,140,1), 0 0 60px rgba(0,255,140,0.85), 0 0 110px rgba(0,255,140,0.55);
                }
              }
            `}</style>
            <span className="flex items-center justify-center gap-3 flex-wrap">
              <span
                aria-label="infinity"
                className="inline-block text-green-300"
                style={{
                  fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
                  lineHeight: 1,
                  display: 'inline-block',
                  transformOrigin: 'center',
                  animation: 'awtInfinitySpinPulse 2.4s ease-in-out infinite',
                }}
              >
                ∞
              </span>
              <span
                className="font-bold tracking-wide text-green-300"
                style={{
                  fontSize: 'clamp(1.5rem, 3.6vw, 2.25rem)',
                  display: 'inline-block',
                  transformOrigin: 'center',
                  animation: 'awtFooterPulse 2.4s ease-in-out infinite',
                }}
              >
                AI WEB TOOLS
              </span>
            </span>
            <span className="block text-sm mt-1 text-green-300/80">All Rights Reserved</span>
          </button>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={e => handleExternalLink("https://openai.com/policies/privacy-policy/", e)} className="text-green-300 hover:text-green-400 transition-colors text-sm">
              Privacy Policy
            </button>
            <button onClick={e => handleExternalLink("https://aiwebtools.lovable.app/terms-of-services?via=aiwebtools", e)} className="text-green-300 hover:text-green-400 transition-colors text-sm">
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
            className="text-green-300 hover:text-green-400 transition-colors text-sm font-medium"
          >
            ⬆️ TOP OF PAGE
          </button>
        </div>
        <div className="flex items-center text-green-300">
          <button onClick={e => handleExternalLink("https://freename.io?ref=olive-ears-obey&utm_source=clipboard", e)} className="flex items-center space-x-2 hover:text-green-400 transition-colors cursor-pointer text-sm md:text-base">
            <Globe className="w-4 h-4 flex-shrink-0" />
            <span className="text-center">Launch your next idea with .aiwebtools or .ai-tools</span>
          </button>
        </div>
      </div>
    </div>;
};
export default FooterBottom;