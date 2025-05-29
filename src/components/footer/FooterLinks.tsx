
import { createTimePortalEffect } from "@/utils/timeEffects";

const FooterLinks = () => {
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in footer links:', url);
    createTimePortalEffect(url);
  };

  const quickLinks = [
    { name: "AI Tools Directory", url: "https://aitools.studio" },
    { name: "Business Solutions", url: "https://aiwebtools.ai/business" },
    { name: "Custom AI Development", url: "https://aiwebtools.ai/custom" },
    { name: "AI Consulting", url: "https://aiwebtools.ai/consulting" }
  ];

  const legalLinks = [
    { name: "Terms of Service", url: "https://aitools.company/terms-of-services" },
    { name: "Privacy Policy", url: "https://openai.com/policies/privacy-policy/" }
  ];

  return (
    <>
      <div>
        <h4 className="text-lg font-semibold text-cyan-300 mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <button
                onClick={(e) => handleExternalLink(link.url, e)}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block w-full text-left"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-cyan-300 mb-4">Legal</h4>
        <ul className="space-y-2">
          {legalLinks.map((link, index) => (
            <li key={index}>
              <button
                onClick={(e) => handleExternalLink(link.url, e)}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block w-full text-left"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
