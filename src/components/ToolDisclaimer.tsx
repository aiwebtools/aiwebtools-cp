
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { Tool } from "@/types/tools";
import { generateToolDisclaimer } from "@/utils/toolDisclaimers";

interface ToolDisclaimerProps {
  tool: Tool;
}

const ToolDisclaimer = ({ tool }: ToolDisclaimerProps) => {
  const disclaimer = generateToolDisclaimer(tool);

  return (
    <Card className="bg-gray-900/80 backdrop-blur-md border-yellow-500/30 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-yellow-400">
          <AlertTriangle className="w-5 h-5" />
          Legal Disclaimer & Terms of Use
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-sm prose-invert max-w-none">
          <div className="whitespace-pre-line text-gray-300 text-xs leading-relaxed">
            {disclaimer}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolDisclaimer;
