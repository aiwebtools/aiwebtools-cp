
import { useMemo, useRef } from "react";
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import { allTools } from "@/data/toolsData";
// Removed embla carousel in favor of reliable native scrolling
import { getContextAwareAdditionalTools, getHighlyRelevantSimilarTools } from "@/utils/contextAwareSimilarTools";

interface SimilarToolsProps {
  currentTool: Tool;
  currentToolIndex: number;
}

const SimilarTools = ({ currentTool, currentToolIndex }: SimilarToolsProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const recommendations = useMemo(() => {
    return getHighlyRelevantSimilarTools(currentTool, 12);
  }, [currentTool, currentToolIndex]);

  if (recommendations.length === 0) return null;

  return (
    <section className="mt-16" aria-label="Recommended similar AI tools">
      <h2 className="text-2xl font-semibold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8 cyber-glow">
        Recommended Similar Tools
      </h2>

      <div className="relative">
        <div className="flex items-stretch gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory touch-pan-x select-none px-1" ref={scrollRef}>
          {recommendations.map((tool, index) => (
            <div key={`sim-${tool.title}-${index}`} className="snap-start shrink-0 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <ToolCard tool={tool} index={index} />
            </div>
          ))}
        </div>
        {/* Nav buttons */}
        <button
          type="button"
          onClick={() => scrollRef.current?.scrollBy({ left: -window.innerWidth * 0.6, behavior: 'smooth' })}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 text-cyan-200 bg-black/40 hover:bg-black/60"
          aria-label="Scroll recommendations left"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollRef.current?.scrollBy({ left: window.innerWidth * 0.6, behavior: 'smooth' })}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 text-cyan-200 bg-black/40 hover:bg-black/60"
          aria-label="Scroll recommendations right"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default SimilarTools;
