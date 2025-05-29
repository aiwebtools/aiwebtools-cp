
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ToolPageHeaderProps {
  totalTools: number;
}

const ToolPageHeader = ({ totalTools }: ToolPageHeaderProps) => {
  return (
    <Link to="/" className="inline-block mb-8">
      <Button variant="outline" size="sm" className="border-cyan-500/30 bg-gray-900/80 text-cyan-100 hover:bg-cyan-500/20 transition-all duration-300 interactive-button">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to All {totalTools}+ AI Web Tools
      </Button>
    </Link>
  );
};

export default ToolPageHeader;
