
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { allTools } from "@/data/toolsData";
import { getToolIndexBySlug, generateToolSlug } from "@/utils/urlGenerator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimilarTools from "@/components/SimilarTools";
import AnimatedBackground from "@/components/AnimatedBackground";
import ToolDisclaimer from "@/components/ToolDisclaimer";
import AIWebToolsDisclaimer from "@/components/AIWebToolsDisclaimer";
import ToolHeader from "@/components/tool-detail/ToolHeader";
import ToolDescription from "@/components/tool-detail/ToolDescription";
import ToolMedia from "@/components/tool-detail/ToolMedia";
import ToolTags from "@/components/tool-detail/ToolTags";
import ToolActions from "@/components/tool-detail/ToolActions";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";
import BreadcrumbSEO from "@/components/BreadcrumbSEO";
import { generateStructuredData } from "@/utils/seo";
import { useToolDetail } from "@/hooks/useToolDetail";
import ToolNotFound from "@/components/tool-detail/ToolNotFound";
import ToolPageHeader from "@/components/tool-detail/ToolPageHeader";
import ToolSearch from "@/components/tool-detail/ToolSearch";
import MoreToolsSection from "@/components/tool-detail/MoreToolsSection";

const ToolDetail = () => {
  const { toolId, toolSlug } = useParams();
  
  // Handle both numeric IDs and SEO-friendly slugs
  let toolIndex: number;
  if (toolSlug) {
    toolIndex = getToolIndexBySlug(allTools, toolSlug);
    if (toolIndex === -1) {
      // Fallback: try to find by title match
      toolIndex = allTools.findIndex(tool => 
        generateToolSlug(tool.title) === toolSlug
      );
    }
  } else {
    toolIndex = parseInt(toolId || "0");
  }
  
  const {
    tool,
    searchTerm,
    showMoreTools,
    handleSearchChange,
    handleSeeMoreTools,
    handleToolsLoaded
  } = useToolDetail(toolIndex);

  // Debug logging to trace the tool issue
  console.log(`🔍 DEBUG: Tool at index ${toolIndex}:`, tool);
  console.log(`🔍 DEBUG: Tool title: "${tool?.title}"`);
  console.log(`🔍 DEBUG: Tool directUrl: "${tool?.directUrl}"`);
  
  // Check if this is the Financial Calculator Pro
  if (tool?.title === "Financial Calculator Pro") {
    console.log(`🚨 FOUND Financial Calculator Pro at index ${toolIndex}`);
    console.log(`🚨 Current URL: ${tool.directUrl}`);
    console.log(`🚨 Expected URL: https://chatgpt.com/g/g-683cfb6951308191abb310d5d2fa8238-financial-calculator-pro?via=aiwebtools`);
  }

  if (!tool) {
    return <ToolNotFound toolIndex={toolIndex} totalTools={allTools.length} />;
  }

  const defaultRatings = [4.1, 4.2, 4.3, 4.4];
  const defaultRating = tool.rating || defaultRatings[toolIndex % defaultRatings.length];
  const defaultVotes = tool.totalVotes || Math.floor(Math.random() * 3000) + 2000;

  const toolStructuredData = generateStructuredData('tool');

  const breadcrumbItems = [
    { name: "Home", url: "https://aitools.studio" },
    { name: "AI Tools", url: "https://aitools.studio/#tools-section" },
    { name: tool.category || "Tools", url: `https://aitools.studio/category/${encodeURIComponent(tool.category || "")}` },
    { name: tool.title, url: `https://aitools.studio/tool/${toolIndex}` }
  ];

  // Check if this is an AI Web Tools LLC GPT (has lovable.app in the URL)
  const isAIWebToolsGPT = tool.directUrl?.includes('lovable.app') || false;

  return (
    <div className="min-h-screen bg-black relative">
      <ImprovedSEOHead pageType="tool" tool={tool} />
      <BreadcrumbSEO items={breadcrumbItems} />
      
      <AnimatedBackground />
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <ToolPageHeader totalTools={allTools.length} />

            <Card className="overflow-hidden bg-gray-900/80 backdrop-blur-md shadow-2xl shadow-cyan-500/20 border border-cyan-500/30 neon-border">
              <CardHeader>
                <ToolHeader 
                  tool={tool} 
                  defaultRating={defaultRating} 
                  defaultVotes={defaultVotes}
                  toolIndex={toolIndex}
                />
              </CardHeader>

              <CardContent className="p-8 bg-gray-900/50">
                <ToolDescription tool={tool} />
                <ToolMedia tool={tool} toolIndex={toolIndex} />
                <ToolTags tool={tool} />
                <ToolActions tool={tool} />
              </CardContent>
            </Card>

            <div className="mt-8 space-y-6">
              {/* Show AI Web Tools disclaimer for GPTs created by AI Web Tools LLC */}
              {isAIWebToolsGPT && (
                <AIWebToolsDisclaimer tool={tool} />
              )}
              
              {/* Show general third-party disclaimer for all tools */}
              <ToolDisclaimer tool={tool} />
            </div>

            <ToolSearch 
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              totalTools={allTools.length}
            />

            <SimilarTools currentTool={tool} currentToolIndex={toolIndex} />

            <MoreToolsSection
              showMoreTools={showMoreTools}
              totalTools={allTools.length}
              onSeeMoreTools={handleSeeMoreTools}
              onToolsLoaded={handleToolsLoaded}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ToolDetail;
