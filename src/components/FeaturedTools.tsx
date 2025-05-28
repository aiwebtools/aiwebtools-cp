
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { featuredTools, allTools, searchTools } from "@/data/toolsData";
import SearchBar from "@/components/tools/SearchBar";
import ToolCard from "@/components/tools/ToolCard";
import NoResults from "@/components/tools/NoResults";

const FeaturedTools = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Use enhanced search functionality
  const filteredTools = searchTools(allTools, searchTerm);
  const filteredFeaturedTools = searchTools(featuredTools, searchTerm);
  const filteredGridTools = filteredTools.slice(6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">AI Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our most popular AI-powered tools designed to enhance your creative process
          </p>
          
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          
          {/* Download Button */}
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/80 hover:to-ai-blue/80 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              DOWNLOAD YOUR FREE MASTER AI TOOLS LIST OF 1000+ AI TOOLS
            </Button>
          </div>
        </div>
        
        {/* Featured Tools Grid */}
        {filteredFeaturedTools.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredFeaturedTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} isFeatured={true} />
            ))}
          </div>
        )}

        {/* All Tools Section */}
        {filteredGridTools.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Complete <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">AI Tools Collection</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredGridTools.map((tool, index) => (
                <ToolCard key={index} tool={tool} />
              ))}
            </div>
          </>
        )}

        {/* No Results Message */}
        {searchTerm && filteredTools.length === 0 && (
          <NoResults searchTerm={searchTerm} onClearSearch={() => setSearchTerm("")} />
        )}
        
        {!searchTerm && (
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white px-8 py-4 rounded-xl transition-all duration-300"
            >
              View All AI Tools
            </Button>
          </div>
        )}

        {/* Inspirational Message */}
        <div className="text-center mt-20 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Best of luck on your inspiring AI journey!
          </h3>
          <p className="text-gray-600 mb-4">We Thank You for Visiting AiWebTools.Ai</p>
          
          <div className="max-w-4xl mx-auto text-sm text-gray-500 leading-relaxed space-y-2">
            <p>The future is unwritten — it can be shaped by human choice and collective action.</p>
            <p>Knowledge and technology are not ends in themselves; they are tools meant to serve people, helping each of us fulfill our potential.</p>
            <p>Power should be decentralized, fairness upheld, and human dignity honored through creativity, uniqueness, and compassion.</p>
            <p>Let justice, integrity, and imagination guide us toward building a better world — not through control, but through cooperation.</p>
            <p>We offer these tools and ideas freely, without seeking profit, because access to opportunity should not depend on status or wealth.</p>
            <p>Together, we can create a world where knowledge is a right, not a privilege, and where progress benefits everyone.</p>
            <p>The accompanying art reflects this vision — a mirror of our shared humanity, a map guiding us forward through thoughtful choices.</p>
            <p>Let us move with courage and open minds — for the path ahead is ours to shape, together. 🕊️</p>
          </div>
          
          <p className="text-lg font-semibold text-ai-purple mt-6">
            "Choose your path. The future is yours to create." - KB
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
