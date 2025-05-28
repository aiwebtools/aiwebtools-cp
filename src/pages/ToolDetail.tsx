
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Play, Image as ImageIcon } from "lucide-react";
import { allTools } from "@/data/toolsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimilarTools from "@/components/SimilarTools";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useState, useEffect } from "react";

const ToolDetail = () => {
  const { toolId } = useParams();
  const toolIndex = parseInt(toolId || "0");
  const tool = allTools[toolIndex];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Reset loading states when tool changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setVideoError(false);
  }, [toolIndex]);

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

  const handleUseItNow = () => {
    if (tool.directUrl) {
      window.open(tool.directUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Optimized YouTube URL conversion
  const getOptimizedEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?quality=hd1080&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?quality=hd1080&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`;
    }
    return url;
  };

  // Enhanced description for individual tool pages
  const getEnhancedDescription = () => {
    if (tool.description && tool.description.length > 100) {
      return tool.description;
    }
    
    let description = tool.description || "This advanced AI-powered tool is designed to revolutionize your workflow and enhance productivity.";
    
    if (tool.category) {
      description += ` Specifically crafted for ${tool.category.toLowerCase()}, this tool provides specialized functionality that addresses the unique challenges in this field.`;
    }
    
    if (tool.tags && tool.tags.length > 0) {
      description += ` Key features include ${tool.tags.join(', ')}, making it a comprehensive solution for both beginners and professionals.`;
    }
    
    description += " Experience the power of artificial intelligence and transform the way you work with this cutting-edge technology.";
    
    return description;
  };

  // Optimized media component for detail page
  const DetailMediaComponent = () => {
    if (tool.imageUrl && !imageError) {
      return (
        <div className="relative w-full h-80 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center animate-pulse">
              <ImageIcon className="w-12 h-12 text-gray-500" />
            </div>
          )}
          <img
            src={tool.imageUrl}
            alt={`${tool.title} Preview`}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      );
    }
    
    if (tool.videoUrl && !videoError) {
      return (
        <div className="relative w-full h-80">
          <iframe
            width="100%"
            height="320"
            src={getOptimizedEmbedUrl(tool.videoUrl)}
            title={`${tool.title} Demo`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
            loading="eager"
            onError={() => setVideoError(true)}
          />
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
            <Play className="w-6 h-6 text-white" />
          </div>
        </div>
      );
    }
    
    return (
      <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-cyan-500/30 neon-border">
        <span className="text-6xl glow-effect">{tool.emoji}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/" className="inline-block mb-8">
              <Button variant="outline" size="sm" className="border-cyan-500/30 bg-gray-900/80 text-cyan-100 hover:bg-cyan-500/20 transition-all duration-300 interactive-button">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Tools
              </Button>
            </Link>

            {/* Tool Detail Card */}
            <Card className="overflow-hidden bg-gray-900/80 backdrop-blur-md shadow-2xl shadow-cyan-500/20 border border-cyan-500/30 neon-border">
              <CardHeader className="text-center pb-6 bg-gradient-to-r from-gray-900/50 to-gray-800/30">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-4xl shadow-lg shadow-cyan-500/30 glow-effect`}>
                  {tool.emoji}
                </div>
                <div className="space-y-4">
                  <CardTitle className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cyber-glow">
                    {tool.title}
                  </CardTitle>
                  {tool.category && (
                    <Badge variant="outline" className="text-sm border-cyan-400 text-cyan-400 bg-cyan-400/10 px-4 py-2 glow-effect">
                      {tool.category}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-8 bg-gray-900/50">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 cyber-glow">About This Tool</h3>
                  <CardDescription className="text-lg text-gray-300 leading-relaxed">
                    {getEnhancedDescription()}
                  </CardDescription>
                </div>

                {/* Media Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 cyber-glow">Preview</h3>
                  <div className="rounded-xl overflow-hidden shadow-lg border border-cyan-500/30 neon-border">
                    <DetailMediaComponent />
                  </div>
                </div>

                {/* Tags */}
                {tool.tags && tool.tags.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 cyber-glow">Features & Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-sm px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 glow-effect">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <div className="text-center pt-6 border-t border-cyan-500/30">
                  <Button 
                    size="lg"
                    onClick={handleUseItNow}
                    disabled={!tool.directUrl}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 interactive-button glow-effect"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {tool.directUrl ? "USE IT NOW" : "COMING SOON"}
                  </Button>
                  <p className="text-sm text-gray-400 mt-3">
                    {tool.directUrl ? "Click to access this AI tool and start using it immediately" : "Direct access coming soon - check back later"}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/80 backdrop-blur-md shadow-lg border border-cyan-500/30 neon-border">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cyber-glow">
                    How to Get Started
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-300">
                    <p>1. Click the "USE IT NOW" button above</p>
                    <p>2. Follow the tool's setup instructions</p>
                    <p>3. Start exploring the AI capabilities</p>
                    <p>4. Experiment with different features and settings</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 backdrop-blur-md shadow-lg border border-cyan-500/30 neon-border">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cyber-glow">
                    Best Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-300">
                    <p>• Be specific and clear in your requests</p>
                    <p>• Experiment with different prompt styles</p>
                    <p>• Save successful configurations for future use</p>
                    <p>• Explore advanced features gradually</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Similar Tools */}
            <SimilarTools currentTool={tool} currentToolIndex={toolIndex} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ToolDetail;
