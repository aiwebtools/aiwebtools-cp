
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import { Tool } from "@/types/tools";

interface ToolActionsProps {
  tool: Tool;
}

const ToolActions = ({ tool }: ToolActionsProps) => {
  const handleUseItNow = () => {
    if (tool.directUrl) {
      window.open(tool.directUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSendFeedback = () => {
    const subject = encodeURIComponent(`Feedback for ${tool.title}`);
    const body = encodeURIComponent(`Hi,

I would like to provide feedback about ${tool.title}:

[Please describe your concerns, bugs, or suggestions here]

Thank you!`);
    
    const mailtoUrl = `mailto:contact@ai-webtools.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  // Check if this is a GPT tool (contains "GPT" in title)
  const isGPTTool = tool.title.toUpperCase().includes('GPT');

  return (
    <div className="text-center pt-6 border-t border-cyan-500/30">
      <div className="space-y-4">
        <Button 
          size="lg"
          onClick={handleUseItNow}
          disabled={!tool.directUrl}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 interactive-button glow-effect"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          {tool.directUrl ? "USE IT NOW" : "COMING SOON"}
        </Button>
        
        {isGPTTool && (
          <Button 
            size="lg"
            onClick={handleSendFeedback}
            variant="outline"
            className="border-yellow-500/50 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500/20 hover:border-yellow-400 px-12 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            SEND THE CREATOR FEEDBACK
          </Button>
        )}
      </div>
      
      <p className="text-sm text-gray-400 mt-3">
        {tool.directUrl ? "Click to access this AI tool and start using it immediately" : "Direct access coming soon - check back later"}
        {isGPTTool && (
          <>
            <br />
            <span className="text-yellow-400">Have feedback? Send concerns or bug reports directly to the creator!</span>
          </>
        )}
      </p>
    </div>
  );
};

export default ToolActions;
