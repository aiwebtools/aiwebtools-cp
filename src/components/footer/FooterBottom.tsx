import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterBottomProps {
  handleExternalLink: (url: string, e: React.MouseEvent) => void;
}
const FooterBottom = ({
  handleExternalLink
}: FooterBottomProps) => {
  return <div className="space-y-6">
      
      {/* Copyright and Links */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <button onClick={e => handleExternalLink("https://www.aitools.company", e)} className="text-green-300 hover:text-green-400 transition-colors text-center" style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.3)' }}>
            <span className="block">© 2025 AI WEB TOOLS LLC</span>
            <span className="block text-sm md:inline md:ml-1">All Rights Reserved</span>
          </button>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={e => handleExternalLink("https://openai.com/policies/privacy-policy/", e)} className="text-green-300 hover:text-green-400 transition-colors text-sm">
              Privacy Policy
            </button>
            <button onClick={e => handleExternalLink("https://aitools.company/terms-of-services", e)} className="text-green-300 hover:text-green-400 transition-colors text-sm">
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