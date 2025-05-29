
import { CardDescription } from "@/components/ui/card";
import { Tool } from "@/types/tools";

interface ToolDescriptionProps {
  tool: Tool;
}

const ToolDescription = ({ tool }: ToolDescriptionProps) => {
  // Use the full description directly if it exists and is substantial
  const getEnhancedDescription = () => {
    // If the tool already has a substantial description (over 100 characters), use it as-is
    if (tool.description && tool.description.length > 100) {
      return tool.description;
    }
    
    // Fallback for tools with shorter descriptions
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

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 cyber-glow">About This Tool</h3>
      <CardDescription className="text-lg text-gray-300 leading-relaxed mb-6">
        {getEnhancedDescription()}
      </CardDescription>
      
      {/* SEO Tagline */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4 mb-4">
        <p className="text-sm text-cyan-300 text-center leading-relaxed">
          <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Discover {tool.title} and 1000+ AI Tools
          </span>
          <br />
          <span className="text-gray-400">
            Curated by <strong className="text-cyan-300">AI WEB TOOLS LLC</strong> | 
            Visit <strong className="text-cyan-300">AIWEBTOOLS.AI</strong> | 
            Your trusted <strong className="text-cyan-300">AI WEB TOOLS</strong> directory
          </span>
        </p>
      </div>
    </div>
  );
};

export default ToolDescription;
