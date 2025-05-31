
import { Button } from "@/components/ui/button";
import FeaturedToolsSection from "@/components/tools/FeaturedToolsSection";

interface SeeMoreSectionProps {
  showAllTools: boolean;
  decodedCategoryName: string;
  allToolsLength: number;
  onSeeMoreAITools: () => void;
}

const SeeMoreSection = ({
  showAllTools,
  decodedCategoryName,
  allToolsLength,
  onSeeMoreAITools
}: SeeMoreSectionProps) => {
  if (showAllTools || decodedCategoryName === "ALL AI TOOLS") return null;

  return (
    <div className="mt-16">
      <FeaturedToolsSection />
      
      {/* SEE MORE AI TOOLS Button */}
      <div className="text-center mt-12 mb-16 px-4">
        <Button
          onClick={onSeeMoreAITools}
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
        >
          🚀 SEE MORE AI TOOLS
        </Button>
        <div className="mt-4 text-cyan-300 text-sm">
          Explore our complete collection of {allToolsLength}+ amazing AI tools
        </div>
      </div>
    </div>
  );
};

export default SeeMoreSection;
