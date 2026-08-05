import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { allTools } from "@/data/toolsData";
import { generateToolSlug } from "@/utils/urlGenerator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimilarTools from "@/components/SimilarTools";
import AnimatedBackground from "@/components/AnimatedBackground";
import DeferredMount from "@/components/DeferredMount";
import ToolDisclaimer from "@/components/ToolDisclaimer";
import AIWebToolsDisclaimer from "@/components/AIWebToolsDisclaimer";
import ToolHeader from "@/components/tool-detail/ToolHeader";
import ToolDescription from "@/components/tool-detail/ToolDescription";
import ToolMedia from "@/components/tool-detail/ToolMedia";
import ToolTags from "@/components/tool-detail/ToolTags";
import ToolActions from "@/components/tool-detail/ToolActions";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";
import BreadcrumbSEO from "@/components/BreadcrumbSEO";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import { generateStructuredData } from "@/utils/seo";
import { useToolDetail } from "@/hooks/useToolDetail";
import ToolNotFound from "@/components/tool-detail/ToolNotFound";
import ToolPageHeader from "@/components/tool-detail/ToolPageHeader";
import ToolSearch from "@/components/tool-detail/ToolSearch";
import GlobalSearchBar from "@/components/LazyGlobalSearchBar";
import MoreToolsSection from "@/components/tool-detail/MoreToolsSection";
import FullSpiritualDisclaimer from "@/components/disclaimers/FullSpiritualDisclaimer";
import FullMedicalDisclaimer from "@/components/disclaimers/FullMedicalDisclaimer";
import FullCompanionDisclaimer from "@/components/disclaimers/FullCompanionDisclaimer";
import FullDivinationDisclaimer from "@/components/disclaimers/FullDivinationDisclaimer";
import ToolDisclaimerBadges from "@/components/disclaimers/ToolDisclaimerBadges";
import { 
  needsSpiritualDisclaimer, 
  needsMedicalDisclaimer,
  needsCompanionDisclaimer,
  needsDivinationDisclaimer
} from "@/utils/toolDisclaimerDetection";
import { mainCategories } from "@/utils/mainCategoryMapping";

const ToolDetail = () => {
  const { toolId, toolSlug } = useParams();

  // Handle both numeric IDs (legacy) and SEO-friendly slugs
  let toolIndex: number;
  let shouldRedirect = false;
  let redirectSlug = '';

  const pickBestToolIndexForSlug = (slug: string): number => {
    const matches = allTools
      .map((tool, idx) => ({ tool, idx }))
      .filter(({ tool }) => generateToolSlug(tool.title) === slug);

    if (matches.length === 0) return -1;
    if (matches.length === 1) return matches[0].idx;

    // Prefer entries that actually have media (video > image), then keep first stable
    const score = (t: (typeof matches)[number]["tool"]) =>
      (t.videoUrl ? 2 : 0) + (t.imageUrl ? 1 : 0) + (t.directUrl ? 0.1 : 0);

    return matches
      .sort((a, b) => score(b.tool) - score(a.tool))
      .map((m) => m.idx)[0];
  };

  if (toolSlug) {
    // If accessing via slug route (/:toolSlug)
    toolIndex = pickBestToolIndexForSlug(toolSlug);
  } else if (toolId) {
    // If accessing via legacy numeric route (/tool/:toolId)
    const numericId = parseInt(toolId);
    if (!isNaN(numericId) && numericId >= 0 && numericId < allTools.length) {
      toolIndex = numericId;
      // Redirect old numeric URLs to new slug-based URLs
      shouldRedirect = true;
      redirectSlug = generateToolSlug(allTools[numericId].title);
    } else {
      // toolId might actually be a slug on the /tool/ route
      toolIndex = pickBestToolIndexForSlug(toolId);
      if (toolIndex !== -1) {
        // Redirect /tool/slug to /slug
        shouldRedirect = true;
        redirectSlug = toolId;
      }
    }
  } else {
    toolIndex = -1;
  }
  
  // Redirect to new slug-based URL if accessing via old format
  if (shouldRedirect && redirectSlug) {
    return <Navigate to={`/${redirectSlug}`} replace />;
  }
  
  const {
    tool,
    searchTerm,
    showMoreTools,
    handleSearchChange,
    handleSeeMoreTools,
    handleToolsLoaded
  } = useToolDetail(toolIndex);

  // Debug logging removed for production performance

  if (!tool) {
    return <ToolNotFound requestedSlug={toolSlug || toolId} totalTools={allTools.length} />;
  }

  const defaultRatings = [4.1, 4.2, 4.3, 4.4];
  const defaultRating = tool.rating || defaultRatings[toolIndex % defaultRatings.length];
  const defaultVotes = tool.totalVotes || Math.floor(Math.random() * 3000) + 2000;

  const toolStructuredData = generateStructuredData('tool');

  const breadcrumbItems = [
    { name: "Home", url: "https://aiwebtools.app" },
    { name: "AI Tools", url: "https://aiwebtools.app/#tools-section" },
    { name: tool.category || "Tools", url: `https://aiwebtools.app/category/${encodeURIComponent(tool.category || "")}` },
    { name: tool.title, url: `https://aiwebtools.app/${generateToolSlug(tool.title)}` }
  ];

  // Check if this is an AI Web Tools GPT (has lovable.app in the URL)
  const isAIWebToolsGPT = tool.directUrl?.includes('lovable.app') || false;
  
  // Check for required disclaimers
  const showSpiritualDisclaimer = needsSpiritualDisclaimer(tool);
  const showMedicalDisclaimer = needsMedicalDisclaimer(tool);
  const showCompanionDisclaimer = needsCompanionDisclaimer(tool);
  const showDivinationDisclaimer = needsDivinationDisclaimer(tool);

  // Find the main category for this tool
  const toolMainCategory = mainCategories.find(cat => 
    cat.subcategories.some(sub => 
      sub.toLowerCase() === tool.category?.toLowerCase()
    )
  );

  // Build visual breadcrumb items
  const visualBreadcrumbItems = [
    ...(toolMainCategory ? [{
      label: toolMainCategory.name,
      path: `/main-category/${encodeURIComponent(toolMainCategory.name)}`,
      emoji: toolMainCategory.emoji
    }] : []),
    { label: tool.title }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      <ImprovedSEOHead pageType="tool" tool={tool} />
      <BreadcrumbSEO items={breadcrumbItems} />
      
      <DeferredMount delay={50}>
        <AnimatedBackground />
      </DeferredMount>
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Visual Breadcrumb Trail */}
            <BreadcrumbNav items={visualBreadcrumbItems} className="mb-4" />
            
            <ToolPageHeader totalTools={allTools.length} />

            <div className="mb-6">
              <GlobalSearchBar />
            </div>

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
                <ToolMedia tool={tool} toolIndex={toolIndex} />
                <ToolActions tool={tool} />
                <ToolDescription tool={tool} />
                <ToolTags tool={tool} />
              </CardContent>
            </Card>

            <div className="mt-8 space-y-6">
              <DeferredMount delay={300}>
              {/* Show prominent disclaimer badges at top */}
              {(showSpiritualDisclaimer || showMedicalDisclaimer || showCompanionDisclaimer || showDivinationDisclaimer) && (
                <div className="flex justify-center">
                  <ToolDisclaimerBadges tool={tool} size="md" showFullText={true} />
                </div>
              )}
              
              {/* Show full spiritual simulation disclaimer */}
              {showSpiritualDisclaimer && (
                <FullSpiritualDisclaimer tool={tool} />
              )}
              
              {/* Show full medical disclaimer */}
              {showMedicalDisclaimer && (
                <FullMedicalDisclaimer tool={tool} />
              )}
              
              {/* Show full AI companion disclaimer - emphasize real human connection */}
              {showCompanionDisclaimer && (
                <FullCompanionDisclaimer tool={tool} />
              )}
              
              {/* Show full divination/fortune telling disclaimer */}
              {showDivinationDisclaimer && (
                <FullDivinationDisclaimer tool={tool} />
              )}
              
              {/* Show AI Web Tools disclaimer for GPTs created by AI Web Tools */}
              {isAIWebToolsGPT && (
                <AIWebToolsDisclaimer tool={tool} />
              )}
              
              {/* Show general third-party disclaimer for all tools */}
              <ToolDisclaimer tool={tool} />
              </DeferredMount>
            </div>

            <DeferredMount delay={400}>
              <ToolSearch 
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                totalTools={allTools.length}
              />
            </DeferredMount>

            <DeferredMount delay={600}>
              <SimilarTools currentTool={tool} currentToolIndex={toolIndex} />
            </DeferredMount>

            <DeferredMount delay={800}>
              <MoreToolsSection
                showMoreTools={showMoreTools}
                totalTools={allTools.length}
                onSeeMoreTools={handleSeeMoreTools}
                onToolsLoaded={handleToolsLoaded}
              />
            </DeferredMount>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ToolDetail;
