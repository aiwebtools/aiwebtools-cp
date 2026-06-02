import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import DeferredMount from "@/components/DeferredMount";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { ToolGridSkeleton } from "@/components/ui/loading-skeleton";
import ToolsGrid from "@/components/tools/ToolsGrid";
import GlobalSearchBar from "@/components/GlobalSearchBar";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";
import { getContextAwareAdditionalTools } from "@/utils/contextAwareSimilarTools";
import { isGamingEntertainmentTool, detectGamingEntertainmentSubtype, GAMING_ENTERTAINMENT_SUBTYPES } from "@/utils/categoryUtils/gamingEntertainmentDetection";
import { 
  applySmartInterleavedSorting, 
  applyAlphabeticalWithDeprioritization,
  SortMode 
} from "@/utils/toolSorting/smartToolSorting";
import { ArrowDownAZ, ArrowUpZA, Shuffle } from "lucide-react";

// Gaming subtype filter definitions
const GAMING_SUBTYPES = [
  { id: 'all', label: 'All Gaming', emoji: '🎮', keywords: [] },
  { id: 'game-engine', label: 'Game Engines', emoji: '⚙️', keywords: ['game engine', 'unity', 'unreal', 'godot'] },
  { id: 'game-ai', label: 'Game AI', emoji: '🤖', keywords: ['game ai', 'npc ai', 'enemy ai', 'ai opponent'] },
  { id: 'npc-character', label: 'NPC & Character AI', emoji: '👥', keywords: ['npc', 'character ai', 'inworld', 'convai', 'dialogue ai'] },
  { id: 'game-assets', label: 'Game Assets', emoji: '🎨', keywords: ['game asset', 'sprite', 'texture', '3d model', 'game art'] },
  { id: 'streaming', label: 'Streaming Tools', emoji: '📺', keywords: ['stream', 'twitch', 'obs', 'broadcast', 'streamlabs'] },
  { id: 'virtual-worlds', label: 'Virtual Worlds', emoji: '🌐', keywords: ['virtual world', 'metaverse', 'vr world', 'sandbox'] },
  { id: 'game-design', label: 'Game Design', emoji: '📋', keywords: ['game design', 'gdd', 'game concept', 'level design'] },
  { id: 'game-dev', label: 'Game Development', emoji: '💻', keywords: ['game development', 'game dev', 'game builder', 'rosebud'] },
  { id: 'vr-ar', label: 'VR/AR Gaming', emoji: '🥽', keywords: ['vr gaming', 'ar gaming', 'virtual reality', 'oculus'] },
  { id: 'trivia-quiz', label: 'Trivia & Quiz', emoji: '❓', keywords: ['trivia', 'quiz', 'game show', 'knowledge game'] },
  { id: 'esports', label: 'Esports', emoji: '🏆', keywords: ['esports', 'competitive', 'tournament', 'pro gaming'] },
];

const GamingEntertainmentPage = () => {
  const navigate = useNavigate();
  
  const [displayedCount, setDisplayedCount] = useState(48);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [selectedSubtype, setSelectedSubtype] = useState<string>('all');
  const [sortMode, setSortMode] = useState<SortMode>('smart');
  const [shuffleKey, setShuffleKey] = useState(0);

  // Get all gaming tools
  const gamingTools = useMemo(() => {
    return allTools.filter(tool => isGamingEntertainmentTool(tool));
  }, []);

  // Filter by selected subtype
  const filteredTools = useMemo(() => {
    if (selectedSubtype === 'all') {
      return gamingTools;
    }
    
    const subtype = GAMING_SUBTYPES.find(s => s.id === selectedSubtype);
    if (!subtype || subtype.keywords.length === 0) {
      return gamingTools;
    }

    return gamingTools.filter(tool => {
      const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''}`.toLowerCase();
      return subtype.keywords.some(kw => searchText.includes(kw.toLowerCase()));
    });
  }, [gamingTools, selectedSubtype]);

  // Apply sorting
  const sortedTools = useMemo(() => {
    switch (sortMode) {
      case 'az':
        return applyAlphabeticalWithDeprioritization(filteredTools, 'asc');
      case 'za':
        return applyAlphabeticalWithDeprioritization(filteredTools, 'desc');
      case 'shuffle':
        const shuffled = [...filteredTools];
        let seed = Date.now() + shuffleKey * 12345;
        for (let i = shuffled.length - 1; i > 0; i--) {
          seed = (seed * 9301 + 49297) % 233280;
          const j = Math.floor((seed / 233280) * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      case 'smart':
      default:
        return applySmartInterleavedSorting(filteredTools, "Gaming & Entertainment");
    }
  }, [filteredTools, sortMode, shuffleKey]);

  // Create endless tools list
  const finalTools = useMemo(() => {
    let endlessTools = [...sortedTools];
    const remainingCount = displayedCount - sortedTools.length;
    
    if (remainingCount > 0) {
      const similarTools = getContextAwareAdditionalTools(
        sortedTools, 
        "", 
        "Gaming & Entertainment", 
        Math.min(remainingCount, 100)
      );
      
      const availableSimilar = similarTools.filter(tool => 
        !endlessTools.some(existing => existing.title === tool.title)
      );
      endlessTools = [...endlessTools, ...availableSimilar];
    }
    
    return endlessTools;
  }, [sortedTools, displayedCount]);

  const displayedTools = useMemo(() => 
    finalTools.slice(0, displayedCount), 
    [finalTools, displayedCount]
  );

  const handleLoadMore = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedCount(prev => prev + 48);
      setIsLoading(false);
    }, 100);
  }, [isLoading]);

  const handleShuffle = useCallback(() => {
    setSortMode('shuffle');
    setShuffleKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    setDisplayedCount(48);
  }, [selectedSubtype, sortMode]);

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-black relative overflow-x-hidden">
        <DeferredMount delay={50}><AnimatedBackground /></DeferredMount>
        <div className="relative z-10 cyber-grid">
          <Header />
          <main className="container mx-auto px-4 py-8 pt-32 md:pt-36 lg:pt-40">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-pulse">🎮</div>
              <div className="text-2xl font-bold text-cyan-100 mb-4" role="status" aria-live="polite">Loading Gaming Tools...</div>
            </div>
            <ToolGridSkeleton count={8} />
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <Helmet>
        <title>Gaming & Entertainment AI Tools - Game Engines, AI NPCs & More | AIWebTools</title>
        <meta name="description" content="Discover the best AI gaming tools including game engines, NPC character AI, game asset generators, streaming tools, VR/AR gaming, and game development platforms." />
        <meta name="keywords" content="gaming ai, game engines, unity, unreal engine, npc ai, game development, streaming tools, vr gaming, ar gaming, game assets, metaverse" />
        <link rel="canonical" href="https://aitools.studio/gaming-entertainment" />
      </Helmet>
      
      <DeferredMount delay={50}><AnimatedBackground /></DeferredMount>
      
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <main className="container mx-auto px-4 py-8 pt-32 md:pt-36 lg:pt-40">
          <BreadcrumbNav
            items={[{ label: "Gaming & Entertainment", emoji: "🎮" }]}
            className="mb-4"
          />

          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
            >
              ← Back
            </button>
            <button
              onClick={() => navigate('/main-category/ALL%20AI%20TOOLS')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-purple-900/40 text-purple-300 border border-purple-500/30 hover:border-purple-400/60 hover:text-purple-200 transition-all duration-200"
            >
              🌐 All Tools
            </button>
          </div>

          <div className="text-center mb-6">
            <div className="text-5xl mb-3">🎮</div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent cyber-glow">
              Gaming & Entertainment AI Tools
            </h1>
            <p className="text-base text-gray-300 mb-4 max-w-xl mx-auto">
              Discover AI-powered tools for game development, streaming, virtual worlds, and interactive entertainment.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-6">
            <GlobalSearchBar />
          </div>

          {/* Gaming Subtype Filter Pills */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="text-center mb-2">
              <span className="text-xs text-purple-400/70 font-medium">🎮 Filter by Gaming Type</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {GAMING_SUBTYPES.map((subtype) => (
                <button
                  key={subtype.id}
                  onClick={() => setSelectedSubtype(subtype.id)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    selectedSubtype === subtype.id
                      ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 border border-purple-400/60 shadow-lg shadow-purple-500/20'
                      : 'bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-purple-500/40 hover:text-purple-300'
                  }`}
                >
                  <span>{subtype.emoji}</span>
                  <span>{subtype.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sort Controls */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
            <button
              onClick={() => setSortMode('smart')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                sortMode === 'smart'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50'
                  : 'bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-cyan-500/40 hover:text-cyan-300'
              }`}
            >
              ✨ Smart
            </button>
            <button
              onClick={() => setSortMode('az')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                sortMode === 'az'
                  ? 'bg-green-500/20 text-green-300 border border-green-400/50'
                  : 'bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-green-500/40 hover:text-green-300'
              }`}
            >
              <ArrowDownAZ className="w-3 h-3" />
              A-Z
            </button>
            <button
              onClick={() => setSortMode('za')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                sortMode === 'za'
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-400/50'
                  : 'bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-orange-500/40 hover:text-orange-300'
              }`}
            >
              <ArrowUpZA className="w-3 h-3" />
              Z-A
            </button>
            <button
              onClick={handleShuffle}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                sortMode === 'shuffle'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-400/50'
                  : 'bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-purple-500/40 hover:text-purple-300'
              }`}
            >
              <Shuffle className="w-3 h-3" />
              {sortMode === 'shuffle' && shuffleKey > 0 ? `#${shuffleKey}` : '🎲'}
            </button>
          </div>

          {/* Tools Count */}
          <div className="text-center mb-8">
            <div className="text-cyan-400 font-semibold">
              {sortedTools.length > 0 ? (
                `Showing ${Math.min(displayedCount, sortedTools.length)} of ${sortedTools.length} gaming tools`
              ) : (
                "No gaming tools found for this filter"
              )}
            </div>
          </div>

          {/* Tools Grid */}
          <div id="tools-section">
            {displayedTools.length > 0 ? (
              <ToolsGrid
                tools={finalTools}
                displayedCount={displayedCount}
                selectedCategory="Gaming & Entertainment"
                searchTerm=""
                onLoadMore={handleLoadMore}
                hasInfiniteScroll={true}
                isLoading={isLoading}
                filteredToolsCount={sortedTools.length}
              />
            ) : (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold text-cyan-100 mb-4">No tools found</h3>
                <p className="text-gray-300 mb-8">
                  No gaming tools match the selected filter.
                </p>
                <Button
                  onClick={() => setSelectedSubtype('all')}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Show All Gaming Tools
                </Button>
              </div>
            )}
          </div>
        </main>
        
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default GamingEntertainmentPage;
