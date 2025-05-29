
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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchTools } from "@/utils/searchUtils";

const ToolDetail = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const toolIndex = parseInt(toolId || "0");
  const tool = allTools[toolIndex];
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [toolIndex]);

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
        <AnimatedBackground />
        <div className="relative z-10 min-h-screen flex items-center justify-center cyber-grid">
          <div className="text-center p-8 bg-gray-900/80 backdrop-blur-md rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <h1 className="text-3xl font-bold text-cyan-100 mb-4 cyber-glow">Tool Not Found</h1>
            <p className="text-gray-300 mb-6">This AI tool seems to have vanished into the digital matrix.</p>
            <Link to="/">
              <Button variant="outline" className="border-cyan-500/30 bg-gray-900/80 text-cyan-100 hover:bg-cyan-500/20 interactive-button">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
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

  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-block mb-8">
              <Button variant="outline" size="sm" className="border-cyan-500/30 bg-gray-900/80 text-cyan-100 hover:bg-cyan-500/20 transition-all duration-300 interactive-button">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All AI Web Tools
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
                <p className="text-gray-300 mb-6">Search through our collection of 600+ AI tools to find your next favorite</p>
              </div>
              <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
              />
            </div>

            <SimilarTools currentTool={tool} currentToolIndex={toolIndex} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ToolDetail;
