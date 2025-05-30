
import { useMemo } from "react";
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import { allTools } from "@/data/toolsData";
import { createFeaturedTools } from "@/utils/featuredTools";

const FeaturedToolsSection = () => {
  // Generate featured tools from all available tools
  const featuredTools = useMemo(() => {
    return createFeaturedTools(allTools);
  }, []);

  return (
    <>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-cyan-100 mb-8 cyber-glow">
          🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">FEATURED AI TOOLS</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredTools.map((tool, index) => (
          <ToolCard key={`featured-${tool.title}-${index}`} tool={tool} isFeatured={true} />
        ))}
      </div>
    </>
  );
};

export default FeaturedToolsSection;
