
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { allTools } from "@/data/toolsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimilarTools from "@/components/SimilarTools";
import AnimatedBackground from "@/components/AnimatedBackground";
import ToolDisclaimer from "@/components/ToolDisclaimer";
import ToolHeader from "@/components/tool-detail/ToolHeader";
import ToolDescription from "@/components/tool-detail/ToolDescription";
import ToolMedia from "@/components/tool-detail/ToolMedia";
import ToolTags from "@/components/tool-detail/ToolTags";
import ToolActions from "@/components/tool-detail/ToolActions";
import SearchBar from "@/components/tools/SearchBar";
import SEOHead from "@/components/SEOHead";
import AdvancedSEOHead from "@/components/AdvancedSEOHead";
import BreadcrumbSEO from "@/components/BreadcrumbSEO";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchTools } from "@/utils/searchUtils";
import { generateStructuredData } from "@/utils/seo";

const ToolDetail = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const toolIndex = parseInt(toolId || "0");
  const tool = allTools[toolIndex];
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Verify tool exists and is properly indexed
    if (tool) {
      console.log(`📄 Loaded tool page ${toolIndex}: "${tool.title}" in category "${tool.category}"`);
      console.log(`🔍 Tool searchability test: Can find by title = ${searchTools(allTools, tool.title).length > 0}`);
    } else {
      console.error(`❌ Tool at index ${toolIndex} not found in collection of ${allTools.length} tools`);
    }
  }, [toolIndex, tool]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      const results = searchTools(allTools, value);
      if (results.length > 0) {
        const firstResultIndex = allTools.findIndex(t => t.title === results[0].title);
        navigate(`/tool/${firstResultIndex}`);
      }
    }
  };

  if (!tool) {
    return (
      <div className="min-h-screen bg-black relative">
        <SEOHead
          title="Tool Not Found"
          description="The requested AI tool could not be found. Browse our collection of 700+ AI tools."
          noIndex={true}
        />
        <AnimatedBackground />
        <div className="relative z-10 min-h-screen flex items-center justify-center cyber-grid">
          <div className="text-center p-8 bg-gray-900/80 backdrop-blur-md rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <h1 className="text-3xl font-bold text-cyan-100 mb-4 cyber-glow">Tool Not Found</h1>
            <p className="text-gray-300 mb-6">This AI tool seems to have vanished into the digital matrix.</p>
            <p className="text-gray-400 mb-6 text-sm">
              Requested tool index: {toolIndex} | Total tools available: {allTools.length}
            </p>
            <Link to="/">
              <Button variant="outline" className="border-cyan-500/30 bg-gray-900/80 text-cyan-100 hover:bg-cyan-500/20 interactive-button">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Browse All {allTools.length}+ Tools
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
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

  const handleSeeMoreTools = () => {
    navigate('/#tools-section');
  };

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
            <Link to="/" className="inline-block mb-8">
              <Button variant="outline" size="sm" className="border-cyan-500/30 bg-gray-900/80 text-cyan-100 hover:bg-cyan-500/20 transition-all duration-300 interactive-button">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All {allTools.length}+ AI Web Tools
              </Button>
            </Link>

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

            <div className="mt-8">
              <ToolDisclaimer tool={tool} />
            </div>

            <div className="mt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 cyber-glow">
                  Discover More AI Tools
                </h3>
                <p className="text-gray-300 mb-6">Search through our collection of {allTools.length}+ AI tools to find your next favorite</p>
              </div>
              <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
              />
            </div>

            <SimilarTools currentTool={tool} currentToolIndex={toolIndex} />

            {/* See More AI Tools Button */}
            <div className="text-center mt-16 mb-16 px-4">
              <Button
                onClick={handleSeeMoreTools}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                🚀 SEE MORE AI TOOLS
              </Button>
              <div className="mt-4 text-cyan-300 text-sm">
                Explore our complete collection of {allTools.length}+ amazing AI tools
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ToolDetail;
