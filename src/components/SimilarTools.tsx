
import { useMemo, useRef } from "react";
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import { allTools } from "@/data/toolsData";
// Removed embla carousel in favor of reliable native scrolling
import { getContextAwareAdditionalTools } from "@/utils/contextAwareSimilarTools";

interface SimilarToolsProps {
  currentTool: Tool;
  currentToolIndex: number;
}

const SimilarTools = ({ currentTool, currentToolIndex }: SimilarToolsProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
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

    const desired = 12;
    let result = baseSimilar;

    // Top-up with context-aware tools related to this tool's category/tags
    const needed = Math.max(desired - result.length, 0);
    if (needed > 0) {
      const extras = getContextAwareAdditionalTools(
        // seed with current result so we avoid dupes
        result,
        "",
        currentTool.category || null,
        needed
      );
      const existingTitles = new Set(result.map((t) => t.title));
      const uniqueExtras = extras.filter((t) => !existingTitles.has(t.title));
      result = [...result, ...uniqueExtras];
    }

    // Final fallback: ensure we always reach desired by filling from allTools (closest by category first)
    if (result.length < desired) {
      const existing = new Set(result.map((t) => t.title));
      const sameCategory = allTools.filter(
        (t, i) => i !== currentToolIndex && t.category === currentTool.category && !existing.has(t.title)
      );
      const others = allTools.filter(
        (t, i) => i !== currentToolIndex && t.category !== currentTool.category && !existing.has(t.title)
      );
      const fill = [...sameCategory, ...others].slice(0, desired - result.length);
      result = [...result, ...fill];
    }

    // Dedupe and limit
    const unique = result.filter((t, i, arr) => arr.findIndex((x) => x.title === t.title) === i);
    return unique.slice(0, desired);
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
