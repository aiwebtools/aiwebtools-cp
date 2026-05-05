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
                  opacity: 0.72;
                  color: hsl(130 100% 74%);
                  text-shadow: 0 0 6px hsl(130 100% 55% / 0.75), 0 0 18px hsl(130 100% 50% / 0.5);
                  filter: brightness(0.88) saturate(1);
                }
                35%, 55% {
                  transform: scale(1.23);
                  opacity: 1;
                  color: hsl(135 100% 88%);
                  text-shadow: 0 0 20px hsl(135 100% 90% / 1), 0 0 54px hsl(135 100% 56% / 1), 0 0 104px hsl(135 100% 50% / 0.9), 0 0 170px hsl(135 100% 45% / 0.7);
                  filter: brightness(2.65) saturate(1.8) drop-shadow(0 0 22px hsl(135 100% 55% / 0.95));
                }
              }
              @keyframes awtInfinitySpinPulse {
                0%, 100% {
                  transform: scale(1) rotate(-4deg);
                  opacity: 0.7;
                  color: hsl(140 100% 74%);
                  text-shadow: 0 0 8px hsl(140 100% 60% / 0.9), 0 0 26px hsl(140 100% 50% / 0.6);
                  filter: brightness(0.9);
                }
                35%, 55% {
                  transform: scale(1.44) rotate(9deg);
                  opacity: 1;
                  color: hsl(145 100% 90%);
                  text-shadow: 0 0 28px hsl(145 100% 90% / 1), 0 0 66px hsl(145 100% 58% / 1), 0 0 126px hsl(145 100% 48% / 0.95), 0 0 190px hsl(145 100% 42% / 0.75);
                  filter: brightness(2.9) saturate(1.9) drop-shadow(0 0 28px hsl(145 100% 55% / 1));
                }
              }
              @keyframes awtFooterHaloPulse {
                0%, 100% { opacity: 0.18; transform: translate(-50%, -50%) scale(0.82); }
                35%, 55% { opacity: 0.82; transform: translate(-50%, -50%) scale(1.18); }
              }
              .awt-footer-brand-wrap {
                position: relative;
                isolation: isolate;
              }
              .awt-footer-brand-wrap::before {
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                width: min(96vw, 620px);
                height: 112px;
                border-radius: 999px;
                background: radial-gradient(circle, hsl(135 100% 55% / 0.5) 0%, hsl(135 100% 45% / 0.22) 42%, transparent 72%);
                filter: blur(18px);
                z-index: -1;
                animation: awtFooterHaloPulse 0.95s ease-in-out infinite !important;
              }
              .awt-footer-neon-pulse {
                animation: awtFooterPulse 0.95s ease-in-out infinite !important;
                will-change: transform, opacity, filter, text-shadow;
              }
              .awt-footer-infinity-pulse {
                animation: awtInfinitySpinPulse 0.95s ease-in-out infinite !important;
                will-change: transform, opacity, filter, text-shadow;
              }
            `}</style>
            <span className="awt-footer-brand-wrap flex items-center justify-center gap-4 flex-wrap py-2">
              <span
                aria-label="infinity"
                className="awt-footer-infinity-pulse inline-block text-green-300"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 4.75rem)',
                  lineHeight: 1,
                  display: 'inline-block',
                  transformOrigin: 'center',
                }}
              >
                ∞
              </span>
              <span
                className="awt-footer-neon-pulse font-black tracking-wide text-green-300"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.35rem)',
                  display: 'inline-block',
                  transformOrigin: 'center',
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