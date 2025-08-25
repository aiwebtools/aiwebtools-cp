
import FooterWeb3Domains from "./FooterWeb3Domains";
import { createTimePortalEffect } from "@/utils/timeEffects";

const FooterLinks = () => {
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in footer links:', url);
    createTimePortalEffect(url);
  };

  return (
    <div className="md:col-span-2">
      <h3 className="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-3">
          <a
            href="/our-story"
            className="block text-cyan-200 hover:text-cyan-400 transition-colors text-left"
          >
            📖 Our Story
          </a>
          <button
            onClick={(e) => handleExternalLink("https://aitools.company/hire-us-to-build-your-ai-1", e)}
            className="block text-cyan-200 hover:text-cyan-400 transition-colors text-left"
          >
            🚀 More Services
          </button>
          <button
            onClick={(e) => handleExternalLink("https://docs.google.com/forms/d/e/1FAIpQLSchtKquEqaaKSZM9AWygcY3Uf3uQOpVHZUMayVZMCbDTxfyfQ/viewform?usp=sf_link", e)}
            className="block text-cyan-200 hover:text-cyan-400 transition-colors text-left"
          >
            🤖 Custom AI Development Request Form
          </button>
          <button
            onClick={(e) => handleExternalLink("https://aitools.company/about", e)}
            className="block text-cyan-200 hover:text-cyan-400 transition-colors text-left"
          >
            📋 About Us
          </button>
        </div>
        <div className="space-y-3">
          <button
            onClick={(e) => handleExternalLink("https://aitools.company/privacy-policy", e)}
            className="block text-cyan-200 hover:text-cyan-400 transition-colors text-left"
          >
            🔒 Privacy Policy
          </button>
          <button
            onClick={(e) => handleExternalLink("https://aitools.company/terms-of-services", e)}
            className="block text-cyan-200 hover:text-cyan-400 transition-colors text-left"
          >
            📜 Terms of Service
          </button>
          <button
            onClick={(e) => handleExternalLink("https://aitools.company/contact", e)}
            className="block text-cyan-200 hover:text-cyan-400 transition-colors text-left"
          >
            📞 Contact
          </button>
        </div>
      </div>
      <FooterWeb3Domains />
    </div>
  );
};

export default FooterLinks;
