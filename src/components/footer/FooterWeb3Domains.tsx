
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
      <div className="flex items-center gap-2 mb-2 text-green-400" style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.4)' }}>
        <Globe className="w-4 h-4" />
        <h4 className="font-semibold">Register WEB3 Domains</h4>
      </div>
      <div className="mb-4 p-3 bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-lg border border-green-500/30">
        <p className="text-xs text-gray-300 leading-relaxed">
          🔗 <span className="font-semibold text-green-400" style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.4)' }}>Connect to Your Crypto Wallet</span><br/>
          Own forever • Resell for profit • Minted as NFT • Trade anytime
        </p>
      </div>
      
      <Accordion type="multiple" className="space-y-2">
        {/* Financial & Cash Transfer Domains */}
        <AccordionItem value="financial" className="border border-green-500/20 rounded-lg">
          <AccordionTrigger className="text-sm px-3 hover:no-underline text-green-200 hover:text-green-400">
            💰 Financial & Cash Transfer Domains
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/transfermoney", e)} className="flex items-center flex-1 text-left">
                  💸 .transfermoney
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/transfercoin", e)} className="flex items-center flex-1 text-left">
                  🪙 .transfercoin
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/cointransfer", e)} className="flex items-center flex-1 text-left">
                  💰 .cointransfer
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/transfercash", e)} className="flex items-center flex-1 text-left">
                  💵 .transfercash
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/cashtransfer", e)} className="flex items-center flex-1 text-left">
                  💴 .cashtransfer
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Polygon</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* AI & Technology Domains */}
        <AccordionItem value="ai" className="border border-green-500/20 rounded-lg">
          <AccordionTrigger className="text-sm px-3 hover:no-underline text-green-200 hover:text-green-400">
            🤖 AI & Technology Domains
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/ai-tools?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🧠 .ai-tools
                </button>
                <span className="text-xs bg-emerald-600/20 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30">Solana</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/.aiwebtools?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🤖 .aiwebtools
                </button>
                <span className="text-xs bg-emerald-600/20 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30">Solana</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/aimainframe?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🗄️ .aimainframe
                </button>
                <span className="text-xs bg-emerald-600/20 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30">Solana</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/aitoolscompany?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🏢 .aitoolscompany
                </button>
                <span className="text-xs bg-emerald-600/20 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30">Solana</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Robotics Domains */}
        <AccordionItem value="robotics" className="border border-green-500/20 rounded-lg">
          <AccordionTrigger className="text-sm px-3 hover:no-underline text-green-200 hover:text-green-400">
            🤖 Robotics & Automation Domains
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/robotsales?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🦾 .robotsales
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/robotshop?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🛍️ .robotshop
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/robotstore?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🛒 .robotstore
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Polygon</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Global & World Domains */}
        <AccordionItem value="global" className="border border-green-500/20 rounded-lg">
          <AccordionTrigger className="text-sm px-3 hover:no-underline text-green-200 hover:text-green-400">
            🌍 Global & World Domains
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/worldpeace?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🕊️ .worldpeace
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrade?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🌐 .worldtrade
                </button>
                <span className="text-xs bg-emerald-600/20 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30">Solana</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrader?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  💹 .worldtrader
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Polygon</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FooterWeb3Domains;