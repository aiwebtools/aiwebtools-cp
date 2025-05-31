
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { allTools } from "@/data/toolsData";
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
import SEOHead from "@/components/SEOHead";
import AdvancedSEOHead from "@/components/AdvancedSEOHead";
import BreadcrumbSEO from "@/components/BreadcrumbSEO";
import { generateStructuredData } from "@/utils/seo";
import { useToolDetail } from "@/hooks/useToolDetail";
import ToolNotFound from "@/components/tool-detail/ToolNotFound";
import ToolPageHeader from "@/components/tool-detail/ToolPageHeader";
import ToolSearch from "@/components/tool-detail/ToolSearch";
import MoreToolsSection from "@/components/tool-detail/MoreToolsSection";

const ToolDetail = () => {
  const { toolId } = useParams();
  const toolIndex = parseInt(toolId || "0");
  
  const {
    tool,
    searchTerm,
    showMoreTools,
    handleSearchChange,
    handleSeeMoreTools,
    handleToolsLoaded
  } = useToolDetail(toolIndex);

  if (!tool) {
    return <ToolNotFound toolIndex={toolIndex} totalTools={allTools.length} />;
  }

  const defaultRatings = [4.1, 4.2, 4.3, 4.4];
  const defaultRating = tool.rating || defaultRatings[toolIndex % defaultRatings.length];
  const defaultVotes = tool.totalVotes || Math.floor(Math.random() * 3000) + 2000;

  const toolStructuredData = generateStructuredData('tool', {
    title: tool.title,
    description: tool.description,
    rating: defaultRating,
    totalVotes: defaultVotes
  });

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
      <SEOHead
        title={`${tool.title} - AI Tool Review & Access | Free AI Tools 2025`}
        description={`${tool.description} Access ${tool.title}, a powerful AI tool in the ${tool.category} category. Read comprehensive reviews, features, pricing, and get direct access to this ${tool.category} AI tool.`}
        keywords={[
          tool.title.toLowerCase(),
          `${tool.category?.toLowerCase()} ai tool`,
          "ai tool review",
          "artificial intelligence",
          "free ai tools",
          "ai tools 2025",
          `best ${tool.category?.toLowerCase()} tools`,
          "ai tool comparison",
          "ai software review",
          ...(tool.tags || [])
        ]}
        url={`/tool/${toolIndex}`}
        type="article"
        structuredData={toolStructuredData}
      />
      
      <AdvancedSEOHead tool={tool} toolIndex={toolIndex} pageType="tool" />
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
