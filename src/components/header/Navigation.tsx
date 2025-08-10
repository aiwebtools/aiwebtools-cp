
import { Phone, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { web3DomainsTools } from "@/data/tools/web3DomainsTools";

const Navigation = () => {
  const navigate = useNavigate();
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
  const scrollToHome = () => {
    // If we're already on the home page, just scroll to top instantly
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page quickly
      navigate('/');
    }
  };

  const handleBrowseAITools = () => {
    // Navigate to ALL AI TOOLS main category page
    navigate('/main-category/ALL%20AI%20TOOLS');
  };

  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in navigation:', url);
    createTimePortalEffect(url);
  };

  const scrollDomainsDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const el = domainsScrollRef.current;
    if (!el) return;
    const step = Math.max(el.clientHeight * 0.5, 100);
    const remaining = el.scrollHeight - el.scrollTop - el.clientHeight;
    el.scrollBy({ top: Math.min(remaining, step), behavior: "smooth" });
  };

  const scrollDomainsUp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const el = domainsScrollRef.current;
    if (!el) return;
    const step = Math.max(el.clientHeight * 0.5, 100);
    const current = el.scrollTop;
    el.scrollBy({ top: -Math.min(current, step), behavior: "smooth" });
  };

  useEffect(() => {
    const el = domainsScrollRef.current;
    if (!el) return;
    const handler = () => updateScrollState();
    updateScrollState();
    el.addEventListener("scroll", handler);
    return () => el.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="hidden lg:flex items-center space-x-6 min-w-0">
      <button 
        onClick={scrollToHome}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        Home
      </button>
      
      <button 
        onClick={handleBrowseAITools}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        🎯 Browse AI Tools
      </button>

      <button 
        onClick={(e) => handleExternalLink("https://www.aitools.company", e)}
        className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        ABOUT AI WEB TOOLS LLC
      </button>

      <Popover>
        <PopoverTrigger asChild>
          <button 
            className="text-cyan-100 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer flex items-center space-x-1"
          >
            <Globe className="w-4 h-4" />
            <span>Register WEB3 Domains</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80 max-h-[70vh] overflow-y-auto" align="end" side="bottom" collisionPadding={16}>
          <Accordion type="single" collapsible defaultValue="domains">
            <AccordionItem value="domains">
              <AccordionTrigger className="text-sm">Register your WEB3 Domain</AccordionTrigger>
              <AccordionContent>
                <div
                  ref={domainsScrollRef}
                  onScroll={updateScrollState}
                  className="relative flex flex-col space-y-2 max-h-64 overflow-y-auto pr-1 scroll-smooth"
                >
                  {/* Sticky top control for quick up navigation */}
                  <div className="sticky top-0 z-10 -mt-1 pb-1 flex justify-end pointer-events-none bg-gradient-to-b from-black/40 to-transparent">
                    {canScrollUp && (
                      <button
                        onClick={scrollDomainsUp}
                        className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-cyan-200 p-2 shadow-md"
                        aria-label="Scroll up"
                        title="Scroll up"
                      >
                        <ChevronUp className="h-4 w-4" />
                      </button>
                    )}
                  </div>

{[...web3DomainsTools]
  .slice()
  .sort((a, b) => {
    const an = a.title.replace(" Domain", "");
    const bn = b.title.replace(" Domain", "");
    if (an === ".aiwebtools") return -1;
    if (bn === ".aiwebtools") return 1;
    return an.localeCompare(bn, undefined, { sensitivity: "base" });
  })
  .map((t, idx) => {
    const name = t.title.replace(" Domain", "");
    return (
      <button
        key={`${t.title}-${idx}`}
        onClick={(e) => handleExternalLink(t.directUrl, e)}
        className="group relative w-full flex items-center px-3 py-2 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors hover-scale"
      >
        <span aria-hidden className="pointer-events-none absolute -inset-x-6 top-1/2 -translate-y-1/2 h-10 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-lg opacity-60 group-hover:opacity-90 transition-opacity"></span>
        <span className="relative z-10 text-lg mr-6">{t.emoji}</span>
        <span className="relative z-10 font-medium tracking-wide">{name}</span>
      </button>
    );
  })}


                  {/* Sticky scroll controls for easier navigation */}
                  <div className="sticky bottom-0 mt-2 flex justify-end gap-2 pointer-events-none">
                    {canScrollUp && (
                      <button
                        onClick={scrollDomainsUp}
                        className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-cyan-200 p-2 shadow-md"
                        aria-label="Scroll up"
                        title="Scroll up"
                      >
                        <ChevronUp className="h-4 w-4" />
                      </button>
                    )}
                    {canScrollDown && (
                      <button
                        onClick={scrollDomainsDown}
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
        </PopoverContent>
      </Popover>
      
      <div className="flex items-center space-x-2 text-cyan-100 whitespace-nowrap">
        <Phone className="w-4 h-4" />
        <a 
          href="tel:+14758008096" 
          className="hover:text-cyan-400 transition-colors cursor-pointer"
        >
          475-800-8096
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
