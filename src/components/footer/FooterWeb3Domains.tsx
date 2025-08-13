
import { useEffect, useRef, useState } from "react";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";

const FooterWeb3Domains = () => {
  const domainsScrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  const updateScrollState = () => {
    const el = domainsScrollRef.current;
    if (!el) return;
    const atTop = el.scrollTop <= 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
    setCanScrollUp(!atTop);
    setCanScrollDown(!atBottom);
  };

  useEffect(() => {
    const el = domainsScrollRef.current;
    if (!el) return;
    const handler = () => updateScrollState();
    updateScrollState();
    el.addEventListener("scroll", handler);
    return () => el.removeEventListener("scroll", handler);
  }, []);

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
      <Accordion type="single" collapsible defaultValue="domains">
        <AccordionItem value="domains">
          <AccordionTrigger className="text-sm">Register your WEB3 Domain</AccordionTrigger>
          <AccordionContent>
            <div
              ref={domainsScrollRef}
              onScroll={updateScrollState}
              className="relative flex flex-col space-y-2 max-h-64 overflow-y-auto pr-1 scroll-smooth"
            >
              <div className="sticky top-0 z-10 -mt-1 pb-1 flex justify-end pointer-events-none bg-gradient-to-b from-black/40 to-transparent">
                {canScrollUp && (
                  <button
                    onClick={(e) => { e.stopPropagation(); handleExternalLink("#", e); /* noop just to keep pointer-events pattern */ }}
                    className="hidden"
                    aria-hidden
                  />
                )}
                {canScrollUp && (
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); const el = domainsScrollRef.current; if (!el) return; const step = Math.max(el.clientHeight * 0.5, 100); el.scrollBy({ top: -step, behavior: "smooth" }); }}
                    className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-cyan-200 p-2 shadow-md"
                    aria-label="Scroll up"
                    title="Scroll up"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                )}
              </div>

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

              <div className="sticky bottom-0 mt-2 flex justify-end gap-2 pointer-events-none">
                {canScrollUp && (
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); const el = domainsScrollRef.current; if (!el) return; const step = Math.max(el.clientHeight * 0.5, 100); el.scrollBy({ top: -step, behavior: "smooth" }); }}
                    className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-cyan-200 p-2 shadow-md"
                    aria-label="Scroll up"
                    title="Scroll up"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                )}
                {canScrollDown && (
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); const el = domainsScrollRef.current; if (!el) return; const step = Math.max(el.clientHeight * 0.5, 100); const remaining = el.scrollHeight - el.scrollTop - el.clientHeight; el.scrollBy({ top: Math.min(remaining, step), behavior: "smooth" }); }}
                    className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-cyan-200 p-2 shadow-md"
                    aria-label="Scroll down"
                    title="Scroll down"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FooterWeb3Domains;
