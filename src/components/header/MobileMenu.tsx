import { Menu, Phone, X, Globe, ChevronDown, Download, Trees, Clapperboard, Heart, Copy, Clock } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useFavorites } from "@/hooks/useFavorites";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { triggerPublicDownload } from "@/utils/downloads";
import { playMtvFlash } from "@/utils/mtvFlash";
import { createConfettiCelebration } from "@/utils/effects/audioEffects";
import Logo from "./Logo";
import GlobalSearchBar from "@/components/LazyGlobalSearchBar";
import JoinEmailListButton from "@/components/JoinEmailListButton";

import { useRecentlyVisitedTools } from "@/hooks/useRecentlyVisitedTools";

const MobileMenu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWeb3Open, setIsWeb3Open] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Only load heavy data when menu is open
  const { recentTools } = useRecentlyVisitedTools();
  
  // Lazy load favorites count
  let getFavoritesCount = () => 0;
  try {
    const favoritesContext = useFavorites();
    getFavoritesCount = favoritesContext.getFavoritesCount;
  } catch (error) {
    // Fallback silently
  }
  
  const handleMenuToggle = useCallback((open: boolean) => {
    setIsMenuOpen(open);
  }, []);

  const handleExternalLink = useCallback((url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    createTimePortalEffect(url);
    setIsMenuOpen(false);
  }, []);

  const handleBrowseAITools = useCallback(() => {
    navigate('/main-category/ALL%20AI%20TOOLS');
    handleMenuToggle(false);
  }, [navigate, handleMenuToggle]);

  const closeMenu = useCallback(() => {
    handleMenuToggle(false);
  }, [handleMenuToggle]);

  // Enhanced CSV download with all comprehensive data fields
  const handleDownloadAllToolsCSV = async () => {
    try {
      // Trigger confetti celebration first
      createConfettiCelebration();
      const { allTools } = await import("@/data/toolsData");
      
      console.log(`📊 Generating comprehensive CSV with ${allTools.length} tools...`);
      
      const headers = [
        "Title", 
        "Category", 
        "URL", 
        "Description", 
        "Emoji", 
        "Tags", 
        "Rating", 
        "Total Votes",
        "Color Scheme",
        "Pricing"
      ];
      
      const rows = allTools.map((tool, index) => [
        tool.title || "",
        tool.category || "",
        tool.directUrl || "",
        tool.description || "",
        tool.emoji || "",
        (tool.tags || []).join("; "),
        tool.rating?.toString() || "",
        tool.totalVotes?.toString() || "",
        tool.color || "",
        (tool.tags || []).find(tag => 
          tag.toLowerCase().includes('free') || 
          tag.toLowerCase().includes('premium') || 
          tag.toLowerCase().includes('freemium')
        ) || "Not specified"
      ]);
      
      const escapeCSV = (val: string) => `"${(val || "").replace(/"/g, '""')}"`;
      const csv = [headers, ...rows]
        .map((r) => r.map((c) => escapeCSV(String(c))).join(","))
        .join("\n");

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ai-tools-complete-${allTools.length}-tools-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      console.log(`✅ CSV download complete! ${allTools.length} tools exported with enhanced data`);
      
      // Also download the GPT Instructions ZIP file
      setTimeout(() => {
        triggerPublicDownload('/downloads/gpt-instructions.zip', 'AIWebTools-150-GPT-Instructions.zip');
        console.log('🎁 Also downloaded 150+ GPT Instructions ZIP!');
      }, 500);
      
      setIsMenuOpen(false);
    } catch (err) {
      console.error("Failed to generate comprehensive CSV:", err);
    }
  };

  // Touch/swipe handling for closing menu
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  }, []);
  
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    
    const touchEndY = e.changedTouches[0].clientY;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaY = touchEndY - touchStartY.current;
    const deltaX = Math.abs(touchEndX - (touchStartX.current || 0));
    
    // Swipe down to close (at least 80px down, and more vertical than horizontal)
    if (deltaY > 80 && deltaY > deltaX) {
      closeMenu();
    }
    
    touchStartY.current = null;
    touchStartX.current = null;
  }, [closeMenu]);

  return (
    <>
      <div className="md:hidden">  {/* Show on mobile only */}
        {/* Backdrop overlay - click to close */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/30 z-[100]"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
        
        <DropdownMenu open={isMenuOpen} onOpenChange={handleMenuToggle} modal={false}>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-cyan-400 bg-cyan-500/20 text-cyan-100 px-4 py-3 min-w-[56px] min-h-[56px] rounded-xl active:bg-cyan-500/40"
              aria-label="Open menu"
              style={{ touchAction: 'manipulation', transform: 'translateZ(0)' }}
            >
              <Menu className="w-7 h-7" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            ref={dropdownRef}
            className="w-[95vw] max-w-[400px] bg-black border-2 border-cyan-500/50 max-h-[82vh] overflow-hidden z-[110]"
            align="end"
            side="bottom"
            alignOffset={0}
            sideOffset={16}
            avoidCollisions={true}
            collisionPadding={{ top: 80, left: 10, right: 10, bottom: 10 }}
            sticky="always"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              scrollBehavior: 'auto',
              overscrollBehavior: 'contain',
              transform: 'translateZ(0)',
              willChange: 'auto',
              contain: 'layout style paint'
            }}
          >
            {/* Sticky Close Button - Always visible while scrolling */}
            <div className="sticky top-0 z-[130] flex justify-end p-2 pointer-events-none bg-black">
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMenu}
                className="pointer-events-auto h-10 w-10 p-0 text-red-400 bg-black/80 border border-red-500/50 rounded-full active:bg-red-500/70"
                aria-label="Close menu"
                style={{ touchAction: 'manipulation', transform: 'translateZ(0)' }}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-4 pt-0 overflow-y-scroll max-h-[78vh]" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y', overscrollBehavior: 'contain', transform: 'translateZ(0)' }}>
              {/* Redesigned Header Section */}
              <div className="relative mb-5">
                {/* Glowing header background */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent rounded-2xl -z-10" />
                
                {/* Logo and branding */}
                <div className="flex flex-col items-center pt-2 pb-4">
                  <Logo compact={true} />
                  
                  {/* Animated divider line */}
                  <div className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent my-3" />
                  
                  {/* Tagline with glow */}
                  <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                    AI Tools Navigator
                  </h2>
                  <p className="text-xs text-cyan-200/70 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Discover • Create • Innovate
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </p>
                </div>
                
                {/* Bottom border glow */}
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              </div>

              {/* Search Bar - At top for easy access */}
              <div className="mb-4">
                <div className="text-xs text-cyan-400 mb-2">🔍 Search AI Tools</div>
                <GlobalSearchBar />
              </div>

              <>
              {/* Navigation Section */}
              <DropdownMenuItem onClick={() => { navigate('/'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 mb-3 rounded-lg h-12 text-sm font-medium px-3">
                <span className="mr-3 text-lg">🏠</span> Home
              </DropdownMenuItem>
              
              {/* Browse Categories + Clone Empire — side-by-side compact tiles */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <button
                  onClick={handleBrowseAITools}
                  className="rounded-lg p-2.5 bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-[11px] leading-tight shadow-lg shadow-cyan-500/30 border border-cyan-400/50 active:scale-[0.97] transition-transform flex flex-col items-center justify-center gap-1 min-h-[64px]"
                >
                  <span className="text-lg leading-none">🎯</span>
                  <span className="text-center">Browse AI Tool Categories</span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleExternalLink('https://lovable.dev/projects/be05dcba-063b-47c3-b8a5-bf7bdd86a447?via=aiwebtools', e);
                  }}
                  className="relative overflow-hidden rounded-lg p-2.5 text-black font-black text-[11px] leading-tight active:scale-[0.97] transition-transform flex flex-col items-center justify-center gap-0.5 min-h-[64px] border border-yellow-200/60"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'goldShimmer 2s ease-in-out infinite',
                    boxShadow: '0 0 18px rgba(255, 215, 0, 0.5)',
                  }}
                >
                  <span className="text-base leading-none">⚡</span>
                  <span className="text-center tracking-wide">CLONE THIS AI EMPIRE</span>
                  <span className="text-black/70 text-[8px] font-bold tracking-wider">100% FREE</span>
                </button>
                <style>{`
                  @keyframes goldShimmer {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                  }
                `}</style>
              </div>

              <DropdownMenuSeparator className="border-gray-700 mb-2" />
                
              {/* WEB3 Domains Section */}
              <div className="px-1 py-1 text-xs text-cyan-400/70 font-semibold uppercase tracking-wider">
                💰 Register WEB3 Domains
              </div>
              <div className="mb-2 p-2 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-500/30">
                <p className="text-xs text-gray-300 leading-relaxed">
                  🔗 <span className="font-semibold text-cyan-400">Connect to Your Crypto Wallet</span><br/>
                  Own forever • Resell for profit • Minted as NFT
                </p>
                <p className="text-xs mt-1.5 font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  🏦 DECENTRALIZED BANKING • A FAIR WORLD FOR ALL
                </p>
                <p className="text-[10px] mt-1 italic text-cyan-300/80 leading-snug">
                  "Overcoming poverty is not a gesture of charity. It is an act of justice." — Nelson Mandela
                </p>
              </div>
              <Collapsible open={isWeb3Open} onOpenChange={setIsWeb3Open}>
                <CollapsibleTrigger 
                  className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-2 py-1 text-sm outline-none focus:bg-cyan-500/20 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsWeb3Open(!isWeb3Open);
                  }}
                >
                  <span className="flex items-center">
                    <Globe className="w-3 h-3 mr-2" /> Browse WEB3 Domains
                  </span>
                  <ChevronDown className={`w-3 h-3 ml-2 transition-transform ${isWeb3Open ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 space-y-1 pl-4 max-h-60 overflow-y-auto pr-1">
                  <div className="text-xs text-cyan-400 mb-1 font-semibold">💰 Financial & Cash Transfer</div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/transfermoney", e); }} className="flex-1 text-left">💸 .transfermoney</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/transfercoin", e); }} className="flex-1 text-left">🪙 .transfercoin</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/cointransfer", e); }} className="flex-1 text-left">💰 .cointransfer</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/transfercash", e); }} className="flex-1 text-left">💵 .transfercash</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/cashtransfer", e); }} className="flex-1 text-left">💴 .cashtransfer</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  
                  <div className="text-xs text-cyan-400 mt-3 mb-2 font-semibold">🤖 AI & Technology</div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/ai-tools?ref=olive-ears-obey", e); }} className="flex-1 text-left">🧠 .ai-tools</button>
                    <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/.aiwebtools?ref=olive-ears-obey", e); }} className="flex-1 text-left">🤖 .aiwebtools</button>
                    <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/aimainframe?ref=olive-ears-obey", e); }} className="flex-1 text-left">🗄️ .aimainframe</button>
                    <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/aitoolscompany?ref=olive-ears-obey", e); }} className="flex-1 text-left">🏢 .aitoolscompany</button>
                    <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                  </div>
                  
                  <div className="text-xs text-cyan-400 mt-3 mb-2 font-semibold">🤖 Robotics & Automation</div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/robotsales?ref=olive-ears-obey", e); }} className="flex-1 text-left">🦾 .robotsales</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/robotshop?ref=olive-ears-obey", e); }} className="flex-1 text-left">🛍️ .robotshop</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/robotstore?ref=olive-ears-obey", e); }} className="flex-1 text-left">🛒 .robotstore</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  
                  <div className="text-xs text-cyan-400 mt-3 mb-2 font-semibold">🌍 Global & World</div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/worldpeace?ref=olive-ears-obey", e); }} className="flex-1 text-left">🕊️ .worldpeace</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/worldtrade?ref=olive-ears-obey", e); }} className="flex-1 text-left">🌐 .worldtrade</button>
                    <span className="text-xs bg-green-600/20 text-green-300 px-1 py-0.5 rounded border border-green-500/30 ml-2">Solana</span>
                  </div>
                  <div className="flex justify-between items-center w-full px-3 py-1 rounded-md hover:bg-white/5 hover:text-cyan-300 transition-colors text-sm">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleExternalLink("https://freename.io/discover/worldtrader?ref=olive-ears-obey", e); }} className="flex-1 text-left">💹 .worldtrader</button>
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-1 py-0.5 rounded border border-purple-500/30 ml-2">Polygon</span>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              
              <DropdownMenuSeparator className="border-gray-700 mb-2" />
              
              {/* AiWebTools Music Stream — MTVai 24/7 channel */}
              <DropdownMenuItem
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/music-stream');
                  requestAnimationFrame(() => { void playMtvFlash(360); });
                }}
                className="text-fuchsia-100 hover:bg-fuchsia-500/20 mb-2 rounded flex items-center text-sm border border-fuchsia-500/30 px-2 py-2 font-medium"
                style={{ textShadow: '0 0 6px rgba(168,85,247,0.55)' }}
              >
                📺 AiWebTools Music Stream
              </DropdownMenuItem>

              {/* About & Company Accordion */}
              <Collapsible open={isAboutOpen} onOpenChange={setIsAboutOpen}>
                <CollapsibleTrigger 
                  className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-2 py-1 text-sm outline-none focus:bg-cyan-500/20 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsAboutOpen(!isAboutOpen);
                  }}
                >
                  <span className="flex items-center">
                    🏢 About & Company
                  </span>
                  <ChevronDown className={`w-3 h-3 ml-2 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 space-y-1 pl-2">
                  <DropdownMenuItem onClick={(e) => handleExternalLink('https://linktr.ee/aiwebtools', e)} className="text-cyan-100 hover:bg-cyan-500/20 mb-1 rounded text-sm">
                    <Trees className="w-3 h-3 mr-2" /> Linktree
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={(e) => handleExternalLink('https://www.tiktok.com/@aiwebtools', e)} className="text-cyan-100 hover:bg-cyan-500/20 mb-1 rounded text-sm">
                    <Clapperboard className="w-3 h-3 mr-2" /> TikTok
                  </DropdownMenuItem>
                  <div className="flex items-center space-x-2 text-cyan-100 px-3 py-1 rounded hover:bg-cyan-500/20 mb-2 text-sm">
                    <Phone className="w-3 h-3" />
                    <a href="tel:+14758008096" className="hover:text-cyan-400 transition-colors">
                      📞 Contact: 475-800-8096
                    </a>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Tools & Downloads Accordion */}
              <Collapsible open={isToolsOpen} onOpenChange={setIsToolsOpen}>
                <CollapsibleTrigger 
                  className="w-full text-cyan-100 hover:bg-cyan-500/20 rounded flex items-center justify-between px-2 py-1 text-sm outline-none focus:bg-cyan-500/20 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsToolsOpen(!isToolsOpen);
                  }}
                >
                  <span className="flex items-center">
                    🔧 Tools & Downloads
                  </span>
                  <ChevronDown className={`w-3 h-3 ml-2 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 space-y-1 pl-2">
                  <DropdownMenuItem onClick={handleDownloadAllToolsCSV} className="text-cyan-100 hover:bg-cyan-500/20 mb-1 rounded text-sm">
                    <Download className="w-3 h-3 mr-2" />
                    📊 Download ALL 4,000+ AI Tools (CSV)
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                     onClick={(e) => { 
                       e.preventDefault();
                       handleExternalLink("https://lovable.dev/projects/be05dcba-063b-47c3-b8a5-bf7bdd86a447?via=aiwebtools", e);
                     }}
                    className="text-yellow-100 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-amber-500/20 mb-2 rounded flex items-center space-x-2 bg-gradient-to-r from-yellow-600/10 to-amber-600/10 border border-yellow-500/30 p-2"
                  >
                    <Copy className="w-3 h-3" />
                    <span className="font-semibold text-sm">Clone This Site</span>
                  </DropdownMenuItem>
                </CollapsibleContent>
              </Collapsible>

              {/* Recently Visited Tools */}
              {recentTools.length > 0 && (
                <div className="mb-3">
                  <div className="px-2 py-1 text-xs text-cyan-400/70 font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    Recently Visited
                  </div>
                  <div className="bg-gray-900/50 rounded-lg border border-white/5 p-2 space-y-1">
                    {recentTools.map((tool, index) => (
                      <button
                        key={`${tool.url}-${index}`}
                        onClick={(e) => handleExternalLink(tool.url, e)}
                        className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm text-cyan-100 hover:bg-cyan-500/20 transition-colors text-left"
                      >
                        <span>{tool.emoji}</span>
                        <span className="truncate flex-1">{tool.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Favorites - Standalone */}
              <DropdownMenuItem onClick={() => { navigate('/favorites'); setIsMenuOpen(false); }} className="text-cyan-100 hover:bg-cyan-500/20 mb-2 rounded flex items-center space-x-2 text-sm">
                <Heart className="w-3 h-3 fill-current text-red-500" />
                <span>Favorites ({getFavoritesCount()})</span>
              </DropdownMenuItem>

              {/* AI HUMAN BILL OF RIGHTS - bottom featured button */}
              <DropdownMenuItem
                onClick={(e) => handleExternalLink("https://human-ai-guardian.lovable.app", e)}
                className="text-amber-100 hover:bg-gradient-to-r hover:from-amber-500/30 hover:to-cyan-500/30 rounded flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600/20 via-cyan-600/20 to-emerald-600/20 border border-amber-400/50 p-2.5 font-bold tracking-wide mb-2 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
              >
                <span>⚖️</span>
                <span>AI HUMAN BILL OF RIGHTS</span>
              </DropdownMenuItem>

              {/* Join Email List CTA - placed after Bill of Rights */}
              <div className="mb-3">
                <JoinEmailListButton
                  source="mobile-menu"
                  variant="mobile"
                  onBeforeOpen={() => setIsMenuOpen(false)}
                />
              </div>

              {/* Close Button */}
              <div className="flex justify-center pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              </>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default MobileMenu;