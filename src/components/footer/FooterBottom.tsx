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
          className="text-center max-w-3xl text-green-300/90 leading-relaxed"
          style={{
            fontFamily: '"Great Vibes", "Dancing Script", cursive',
            fontSize: 'clamp(1.05rem, 2.4vw, 1.6rem)',
            textShadow: '0 0 12px rgba(0, 255, 0, 0.45)',
          }}
        >
          IF THIS IS THE LAST CHAPTER....THEN MAKE IT A Beautiful One -Imagine - A Perspective You Can Love With. - J/K.B/C. - THE COSMIC LIGHT IS WITHIN EVERYONE SINCE BIRTH
        </p>
      </div>

      {/* Copyright and Links */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <button onClick={e => handleExternalLink("https://aiwebtools.lovable.app/?via=aiwebtools", e)} className="text-green-300 hover:text-green-400 transition-colors text-center" style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.3)' }}>
            <span className="block">© 2026 AI WEB TOOLS</span>
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