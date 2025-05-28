
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { allTools } from "@/data/toolsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ToolDetail = () => {
  const { toolId } = useParams();
  const tool = allTools.find((t, index) => index.toString() === toolId);

  if (!tool) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tool Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleUseItNow = () => {
    if (tool.directUrl) {
      window.open(tool.directUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-block mb-8">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Button>
          </Link>

          {/* Tool Detail Card */}
          <Card className="overflow-hidden bg-white shadow-xl">
            <CardHeader className="text-center pb-6 bg-gradient-to-r from-gray-50 to-gray-100">
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-4xl shadow-lg`}>
                {tool.emoji}
              </div>
              <div className="space-y-4">
                <CardTitle className="text-4xl font-bold text-gray-900">
                  {tool.title}
                </CardTitle>
                {tool.category && (
                  <Badge variant="outline" className="text-sm border-ai-purple text-ai-purple px-4 py-2">
                    {tool.category}
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="p-8">
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">About This Tool</h3>
                <CardDescription className="text-lg text-gray-700 leading-relaxed">
                  {tool.description}
                </CardDescription>
              </div>

              {/* Media Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Preview</h3>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  {tool.imageUrl ? (
                    <img
                      src={tool.imageUrl}
                      alt={`${tool.title} Preview`}
                      className="w-full h-80 object-cover"
                    />
                  ) : tool.videoUrl ? (
                    <iframe
                      width="100%"
                      height="320"
                      src={tool.videoUrl}
                      title={`${tool.title} Demo`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full"
                    />
                  ) : (
                    <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-6xl">{tool.emoji}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              {tool.tags && tool.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Features & Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="text-center pt-6 border-t border-gray-200">
                <Button 
                  size="lg"
                  onClick={handleUseItNow}
                  disabled={!tool.directUrl}
                  className="bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/80 hover:to-ai-blue/80 text-white px-12 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  USE IT NOW
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  {tool.directUrl ? "Click to access this AI tool and start using it immediately" : "Direct access coming soon"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  How to Get Started
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-700">
                  <p>1. Click the "USE IT NOW" button above</p>
                  <p>2. Follow the tool's setup instructions</p>
                  <p>3. Start exploring the AI capabilities</p>
                  <p>4. Experiment with different features and settings</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-700">
                  <p>• Be specific and clear in your requests</p>
                  <p>• Experiment with different prompt styles</p>
                  <p>• Save successful configurations for future use</p>
                  <p>• Explore advanced features gradually</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ToolDetail;
