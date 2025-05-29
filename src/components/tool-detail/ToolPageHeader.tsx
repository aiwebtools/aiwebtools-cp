
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { useEffect, useState } from "react";

interface ToolPageHeaderProps {
  totalTools?: number; // Make optional since we'll calculate it
}

const ToolPageHeader = ({ totalTools }: ToolPageHeaderProps) => {
  const [accurateCount, setAccurateCount] = useState(totalTools || 0);

  useEffect(() => {
    if (!totalTools) {
      const stats = getCurrentToolCount();
      setAccurateCount(stats.total);
    }
  }, [totalTools]);

  return (
    <Link to="/" className="inline-block mb-8">
      <Button variant="outline" size="sm" className="border-cyan-500/30 bg-gray-900/80 text-cyan-100 hover:bg-cyan-500/20 transition-all duration-300 interactive-button">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to All {accurateCount}+ AI Web Tools
      </Button>
    </Link>
  );
};

export default ToolPageHeader;
