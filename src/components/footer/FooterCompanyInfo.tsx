
import { createTimePortalEffect } from "@/utils/timeEffects";

const FooterCompanyInfo = () => {
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in footer company info:', url);
    createTimePortalEffect(url);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-cyan-300 mb-4 glow-text-effect">
          AI WEB TOOLS LLC
        </h3>
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <span>📧</span>
            <button 
              onClick={(e) => handleExternalLink("mailto:contact@ai-webtools.com", e)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              contact@ai-webtools.com
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span>📱</span>
            <button 
              onClick={(e) => handleExternalLink("tel:+14758008096", e)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              475-800-8096
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span>🌍</span>
            <span>One World Drive, EARTH</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🌐</span>
            <button 
              onClick={(e) => handleExternalLink("https://aiwebtools.ai", e)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              www.aiwebtools.ai
            </button>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-400">
        <p>Uplifting humanity with the power of AI for various niche purposes and specific industries & specialty purposes.</p>
      </div>
    </div>
  );
};

export default FooterCompanyInfo;
