
import { Globe } from "lucide-react";

interface FooterBottomProps {
  handleExternalLink: (url: string, e: React.MouseEvent) => void;
}

const FooterBottom = ({ handleExternalLink }: FooterBottomProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <button 
          onClick={(e) => handleExternalLink("https://www.AiWebTools.AI", e)}
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
  );
};

export default FooterBottom;
