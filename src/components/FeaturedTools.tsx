
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { featuredTools, allTools } from "@/data/toolsData";
import SearchBar from "@/components/tools/SearchBar";
import ToolCard from "@/components/tools/ToolCard";
import NoResults from "@/components/tools/NoResults";

const FeaturedTools = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter tools based on search term
  const filteredTools = allTools.filter(tool =>
    tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFeaturedTools = featuredTools.filter(tool =>
    tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      </div>
    </section>
  );
};

export default FeaturedTools;
