
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";
import { allTools } from "@/data/toolsData";
import { getContextAwareSimilarTools } from "@/utils/contextAwareSimilarTools";
import ToolCard from "@/components/tools/ToolCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import DeferredMount from "@/components/DeferredMount";
import ToolThumb from "@/components/tools/ToolThumb";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import SEOHead from "@/components/SEOHead";
import { generateToolSlug } from "@/utils/urlGenerator";

const SimilarTools = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const toolIndex = parseInt(toolId || "0");
  const baseTool = allTools[toolIndex];
  
  const [displayedCount, setDisplayedCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  // Get smart similar tools based on the base tool with strategic AI Web Tools inclusion
  const similarTools = useMemo(() => {
    if (!baseTool) return [];
    
    // Get your AI Web Tools creations for strategic placement
    const aiWebToolsCreations = allTools.filter((tool, index) => 
      index !== toolIndex && tool.directUrl?.includes('lovable.app')
    );
    
    // Find tools with same category
    const categoryMatches = allTools.filter((tool, index) => 
      index !== toolIndex && 
      tool.category === baseTool.category &&
      !tool.directUrl?.includes('lovable.app') // Exclude your tools to add them strategically
    );

    // Find tools with overlapping tags
    const tagMatches = allTools.filter((tool, index) => 
      index !== toolIndex && 
      tool.tags?.some(tag => baseTool.tags?.includes(tag)) &&
      !tool.directUrl?.includes('lovable.app')
    );

    // Find tools with similar descriptions (keyword matching)
    const keywordMatches = allTools.filter((tool, index) => {
      if (index === toolIndex || tool.directUrl?.includes('lovable.app')) return false;
      const baseKeywords = baseTool.description.toLowerCase().split(' ').filter(word => word.length > 4);
      const toolKeywords = tool.description.toLowerCase().split(' ').filter(word => word.length > 4);
      const commonKeywords = baseKeywords.filter(word => toolKeywords.includes(word));
      return commonKeywords.length >= 2;
    });

    // Combine other tools and deduplicate
    const otherSimilarTools = [
      ...categoryMatches,
      ...tagMatches.filter(tool => !categoryMatches.some(ct => ct.title === tool.title)),
      ...keywordMatches.filter(tool => 
        !categoryMatches.some(ct => ct.title === tool.title) &&
        !tagMatches.some(tt => tt.title === tool.title)
      )
    ];

    // Strategic mixing: Every 4-5 tools, include one of your creations
    const totalNeeded = Math.min(otherSimilarTools.length + aiWebToolsCreations.length, 60);
    const aiWebToolsToInclude = Math.min(Math.floor(totalNeeded / 4), aiWebToolsCreations.length);
    
    // Shuffle and select your tools
    const selectedAIWebTools = aiWebToolsCreations
      .sort(() => Math.random() - 0.5)
      .slice(0, aiWebToolsToInclude);
    
    // Combine with strategic placement
    const mixedTools: typeof allTools = [];
    const otherToolsShuffled = otherSimilarTools.sort(() => Math.random() - 0.5);
    let aiWebToolIndex = 0;
    
    for (let i = 0; i < Math.min(totalNeeded, 60); i++) {
      // Every 4th position (starting from 3rd), try to place an AI Web Tool
      if ((i + 1) % 4 === 0 && aiWebToolIndex < selectedAIWebTools.length) {
        mixedTools.push(selectedAIWebTools[aiWebToolIndex]);
        aiWebToolIndex++;
      } else if (otherToolsShuffled.length > 0) {
        mixedTools.push(otherToolsShuffled.shift()!);
      }
    }
    
    // Add any remaining AI Web Tools at the end
    while (aiWebToolIndex < selectedAIWebTools.length && mixedTools.length < 60) {
      mixedTools.push(selectedAIWebTools[aiWebToolIndex]);
      aiWebToolIndex++;
    }
    
    // Fill remaining with other tools if needed
    while (otherToolsShuffled.length > 0 && mixedTools.length < 60) {
      mixedTools.push(otherToolsShuffled.shift()!);
    }

    return mixedTools;
  }, [baseTool, toolIndex]);

  const displayedTools = similarTools.slice(0, displayedCount);
  const hasMoreTools = displayedCount < similarTools.length;

  const handleLoadMore = () => {
    if (isLoading || !hasMoreTools) return;
    setIsLoading(true);
    
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + 12, similarTools.length));
      setIsLoading(false);
    }, 500);
  };

  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false,
    displayedCount,
    totalTools: similarTools.length,
    onLoadMore: handleLoadMore
  });

  if (!baseTool) {
    return (
      <div className="min-h-screen bg-black relative flex items-center justify-center">
        <DeferredMount delay={50}><AnimatedBackground /></DeferredMount>
        <div className="text-center text-white">
          <div className="text-2xl font-bold mb-4" role="status">Tool Not Found</div>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative">
      <SEOHead
        title={`Similar Tools to ${baseTool.title} - AI Tools Directory`}
        description={`Discover AI tools similar to ${baseTool.title}. Find more ${baseTool.category} tools and related AI solutions for your needs.`}
        keywords={[
          `similar to ${baseTool.title.toLowerCase()}`,
          `${baseTool.category?.toLowerCase()} alternatives`,
          "ai tool recommendations",
          "similar ai tools",
          ...(baseTool.tags || [])
        ]}
        url={`/similar/${toolIndex}`}
      />
      
      <DeferredMount delay={50}><AnimatedBackground /></DeferredMount>
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <Button 
                variant="ghost" 
                onClick={() => navigate(`/${generateToolSlug(baseTool.title)}`)}
                className="mb-6 text-cyan-400 hover:text-cyan-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {baseTool.title}
              </Button>
              
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-8 py-4 mb-6">
                <div className={`w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r ${baseTool.color} flex items-center justify-center text-white text-xl mr-4`}>
                  <ToolThumb tool={baseTool} className="w-full h-full" rounded="rounded-full" emojiClassName="text-xl" />
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Tools Similar to {baseTool.title}
                  </h1>
                  <p className="text-gray-300 text-sm">
                    {baseTool.category} • {similarTools.length} similar tools found
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Discover AI tools that share similar features, categories, and use cases with <span className="text-cyan-400 font-semibold">{baseTool.title}</span>
              </p>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {displayedTools.map((tool, index) => (
                <div key={`similar-${tool.title}-${index}`} className="relative">
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                      Similar
                    </div>
                  </div>
                  <ToolCard tool={tool} />
                </div>
              ))}
            </div>

            {/* Loading Indicator */}
            {isLoading && (
              <div className="text-center py-8">
                <div className="inline-flex items-center space-x-2 text-cyan-400">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400"></div>
                  <span>Finding more similar tools...</span>
                </div>
              </div>
            )}

            {/* End Message */}
            {!hasMoreTools && displayedTools.length > 0 && (
              <div className="text-center py-12">
                <Card className="bg-gray-900/80 border-cyan-500/30 max-w-md mx-auto">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">🎉</div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      You've seen all similar tools!
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Found {similarTools.length} tools similar to {baseTool.title}
                    </p>
                    <Button 
                      onClick={() => navigate('/')}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Explore All Tools
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SimilarTools;
