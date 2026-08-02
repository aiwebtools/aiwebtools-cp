
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
      {/* Logo section matching header */}
      <div className="text-center">
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent animate-pulse" style={{ textShadow: '0 0 20px rgba(0, 255, 0, 0.3)' }}>
          AITOOLS.STUDIO
        </div>
        <div className="text-xs text-gray-300 -mt-1">
          AI TOOL DIRECTORY
        </div>
        <div className="text-xs md:text-sm text-gray-400">
          Presented by{" "}
          <button 
            onClick={(e) => handleExternalLink("https://aiwebtools.lovable.app/?via=aiwebtools", e)}
            className="text-green-400 hover:text-green-300 transition-colors underline"
            style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.4)' }}
          >
            AIWEBTOOLS.AI
          </button>
        </div>
        <div className="text-xs text-gray-500">
          <button 
            onClick={(e) => handleExternalLink("https://aiwebtools.app/?via=aiwebtools", e)}
            className="text-gray-500 hover:text-green-400 transition-colors"
          >
            An AIWEBTOOLS.APP Property
          </button>
        </div>
      </div>

      {/* Company information */}
      <div>
        <h3 className="text-lg font-semibold text-green-300 mb-4" style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.4)' }}>
          AI WEB TOOLS
        </h3>
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <span>📧</span>
            <button 
              onClick={(e) => handleExternalLink("mailto:contact@ai-webtools.com", e)}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              contact@ai-webtools.com
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span>📱</span>
            <button 
              onClick={(e) => handleExternalLink("tel:+14758008096", e)}
              className="text-green-400 hover:text-green-300 transition-colors"
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
              onClick={(e) => handleExternalLink("https://aiwebtools.app/?via=aiwebtools", e)}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              www.aiwebtools.app
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