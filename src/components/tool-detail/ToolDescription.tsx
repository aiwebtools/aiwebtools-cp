
import { CardDescription } from "@/components/ui/card";
import { Tool } from "@/types/tools";

interface ToolDescriptionProps {
  tool: Tool;
}

const ToolDescription = ({ tool }: ToolDescriptionProps) => {
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

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 cyber-glow">About This Tool</h3>
      <CardDescription className="text-lg text-gray-300 leading-relaxed">
        {getEnhancedDescription()}
      </CardDescription>
    </div>
  );
};

export default ToolDescription;
