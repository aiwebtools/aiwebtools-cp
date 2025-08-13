
import { createTimePortalEffect } from "@/utils/timeEffects";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe } from "lucide-react";

const FooterWeb3Domains = () => {
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("🌀 External link clicked in footer WEB3 domains:", url);
    createTimePortalEffect(url);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-2 text-cyan-400">
        <Globe className="w-4 h-4" />
        <h4 className="font-semibold">Register WEB3 Domains</h4>
      </div>
      
      <Accordion type="multiple" className="space-y-2">
        {/* Financial & Cash Transfer Domains */}
        <AccordionItem value="financial" className="border border-white/10 rounded-lg">
          <AccordionTrigger className="text-sm px-3 hover:no-underline">
            💰 Financial & Cash Transfer Domains
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <div className="flex flex-col space-y-2">
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/transfermoney", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                💸 .transfermoney
              </button>
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/transfercoin", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                🪙 .transfercoin
              </button>
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/cointransfer", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                💰 .cointransfer
              </button>
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/transfercash", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                💵 .transfercash
              </button>
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/cashtransfer", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                💴 .cashtransfer
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* AI & Technology Domains */}
        <AccordionItem value="ai" className="border border-white/10 rounded-lg">
          <AccordionTrigger className="text-sm px-3 hover:no-underline">
            🤖 AI & Technology Domains
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <div className="flex flex-col space-y-2">
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/ai-tools?ref=olive-ears-obey", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                🧠 .ai-tools
              </button>
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/.aiwebtools?ref=olive-ears-obey", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                🤖 .aiwebtools
              </button>
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/aimainframe?ref=olive-ears-obey", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                🗄️ .aimainframe
              </button>
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/aitoolscompany?ref=olive-ears-obey", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                🏢 .aitoolscompany
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Robotics Domains */}
        <AccordionItem value="robotics" className="border border-white/10 rounded-lg">
          <AccordionTrigger className="text-sm px-3 hover:no-underline">
            🤖 Robotics & Automation Domains
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <div className="flex flex-col space-y-2">
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/robotsales?ref=olive-ears-obey", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                🦾 .robotsales
              </button>
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/robotshop?ref=olive-ears-obey", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                🛍️ .robotshop
              </button>
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/robotstore?ref=olive-ears-obey", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                🛒 .robotstore
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Global & World Domains */}
        <AccordionItem value="global" className="border border-white/10 rounded-lg">
          <AccordionTrigger className="text-sm px-3 hover:no-underline">
            🌍 Global & World Domains
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <div className="flex flex-col space-y-2">
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/worldpeace?ref=olive-ears-obey", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                🕊️ .worldpeace
              </button>
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrade?ref=olive-ears-obey", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                🌐 .worldtrade
              </button>
              <button
                onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrader?ref=olive-ears-obey", e)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors"
              >
                💹 .worldtrader
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FooterWeb3Domains;
