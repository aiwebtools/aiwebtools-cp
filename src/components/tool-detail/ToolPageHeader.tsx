
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Grid3X3 } from "lucide-react";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { useEffect, useState, useCallback } from "react";
import { prefetchCategory } from "@/utils/categoryUtils/precomputedCache";

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

  const handleAllToolsHover = useCallback(() => {
    // Warm up the ALL AI TOOLS category cache so navigation feels instant
    void prefetchCategory("ALL AI TOOLS");
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-24 sm:mt-8 pt-4">
      <Link to="/" className="inline-block">
        <Button variant="outline" size="sm" className="border-cyan-500/30 bg-gray-900/80 text-cyan-100 hover:bg-cyan-500/20 transition-all duration-300 interactive-button">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>
      
      <Link
        to="/main-category/ALL%20AI%20TOOLS"
        className="inline-block"
        onMouseEnter={handleAllToolsHover}
        onFocus={handleAllToolsHover}
      >
        <Button variant="outline" size="sm" className="border-purple-500/30 bg-gray-900/80 text-purple-100 hover:bg-purple-500/20 transition-all duration-300 interactive-button">
          <Grid3X3 className="w-4 h-4 mr-2" />
          Back to all categories
        </Button>
      </Link>
    </div>
  );
};

export default ToolPageHeader;
