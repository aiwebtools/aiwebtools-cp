
import { useMemo } from "react";
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import { allTools } from "@/data/toolsData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getContextAwareAdditionalTools } from "@/utils/contextAwareSimilarTools";

interface SimilarToolsProps {
  currentTool: Tool;
  currentToolIndex: number;
}

const SimilarTools = ({ currentTool, currentToolIndex }: SimilarToolsProps) => {
  const recommendations = useMemo(() => {
    // Base: similar by exact category or tag overlap
    const baseSimilar = allTools.filter((tool, index) => {
      if (index === currentToolIndex) return false;
      const categoryMatch = tool.category === currentTool.category;
      const tagOverlap = currentTool.tags && tool.tags
        ? tool.tags.some((tag) => currentTool.tags?.includes(tag))
        : false;
      return categoryMatch || tagOverlap;
    });

    // Top-up to ensure we always have at least 12 items using context-aware expansion
    const desired = 12;
    let result = baseSimilar;
    const needed = desired - result.length;
    if (needed > 0) {
      const extras = getContextAwareAdditionalTools(
        result,
        "",
        currentTool.category || null,
        needed
      );
      // Avoid duplicates
      const existingTitles = new Set(result.map((t) => t.title));
      const uniqueExtras = extras.filter((t) => !existingTitles.has(t.title));
      result = [...result, ...uniqueExtras];
    }

    // Final dedupe and limit
    const unique = result.filter(
      (t, i, arr) => arr.findIndex((x) => x.title === t.title) === i
    );
    return unique.slice(0, desired);
  }, [currentTool, currentToolIndex]);

  if (recommendations.length === 0) return null;

  return (
    <section className="mt-16" aria-label="Recommended similar AI tools">
      <h2 className="text-2xl font-semibold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8 cyber-glow">
        Recommended Similar Tools
      </h2>

      <div className="relative">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {recommendations.map((tool, index) => (
              <CarouselItem
                key={`sim-${tool.title}-${index}`}
                className="pl-2 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <ToolCard tool={tool} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-cyan-500/40 text-cyan-200 bg-black/40 hover:bg-black/60" />
          <CarouselNext className="border-cyan-500/40 text-cyan-200 bg-black/40 hover:bg-black/60" />
        </Carousel>
      </div>
    </section>
  );
};

export default SimilarTools;
