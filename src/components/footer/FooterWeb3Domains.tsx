
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
      <div className="mb-4 p-3 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-500/30">
        <p className="text-xs text-gray-300 leading-relaxed">
          🔗 <span className="font-semibold text-cyan-400">Connect to Your Crypto Wallet</span><br/>
          Own forever • Resell for profit • Minted as NFT • Trade anytime
        </p>
      </div>
      
      <Accordion type="multiple" className="space-y-2">
        {/* Financial & Cash Transfer Domains */}
        <AccordionItem value="financial" className="border border-white/10 rounded-lg">
          <AccordionTrigger className="text-sm px-3 hover:no-underline">
            💰 Financial & Cash Transfer Domains
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/transfermoney", e)} className="flex items-center flex-1 text-left">
                  💸 .transfermoney
                </button>
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/transfercoin", e)} className="flex items-center flex-1 text-left">
                  🪙 .transfercoin
                </button>
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/cointransfer", e)} className="flex items-center flex-1 text-left">
                  💰 .cointransfer
                </button>
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/transfercash", e)} className="flex items-center flex-1 text-left">
                  💵 .transfercash
                </button>
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/cashtransfer", e)} className="flex items-center flex-1 text-left">
                  💴 .cashtransfer
                </button>
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
              </div>
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
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/ai-tools?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🧠 .ai-tools
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/.aiwebtools?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🤖 .aiwebtools
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/aimainframe?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🗄️ .aimainframe
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/aitoolscompany?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🏢 .aitoolscompany
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
              </div>
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
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/robotsales?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🦾 .robotsales
                </button>
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/robotshop?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🛍️ .robotshop
                </button>
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/robotstore?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🛒 .robotstore
                </button>
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
              </div>
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
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/worldpeace?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🕊️ .worldpeace
                </button>
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrade?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  🌐 .worldtrade
                </button>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Solana</span>
              </div>
              <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors">
                <button onClick={(e) => handleExternalLink("https://freename.io/discover/worldtrader?ref=olive-ears-obey", e)} className="flex items-center flex-1 text-left">
                  💹 .worldtrader
                </button>
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Polygon</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FooterWeb3Domains;
