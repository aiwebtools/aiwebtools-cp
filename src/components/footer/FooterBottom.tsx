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
          <button onClick={e => handleExternalLink("https://aiwebtools.lovable.app/?via=aiwebtools", e)} className="text-green-300 hover:text-green-400 transition-colors text-center" style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.3)' }}>
            <span className="block">
              <span
                aria-label="infinity"
                className="inline-block align-middle mr-2 text-green-300"
                style={{
                  fontSize: '1.5em',
                  lineHeight: 1,
                  textShadow: '0 0 10px rgba(0,255,120,0.85), 0 0 22px rgba(0,255,120,0.55), 0 0 38px rgba(0,255,120,0.35)',
                  animation: 'pulse 2.4s ease-in-out infinite',
                }}
              >
                ∞
              </span>
              AI WEB TOOLS
            </span>
            <span className="block text-sm md:inline md:ml-1">All Rights Reserved</span>
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