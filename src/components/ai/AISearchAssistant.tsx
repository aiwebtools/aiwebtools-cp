import { useEffect, useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tool } from "@/types/tools";
import { useSiteAI, isSiteAIDisabled } from "@/hooks/useSiteAI";

interface AISearchAssistantProps {
  query: string;
  candidates: Tool[];
  onPick: (tool: Tool) => void;
}

interface Pick {
  tool: Tool;
  reason: string;
}

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const AISearchAssistant = ({ query, candidates, onPick }: AISearchAssistantProps) => {
  const { ask, loading, error } = useSiteAI();
  const [picks, setPicks] = useState<Pick[]>([]);

  // Reset whenever the question changes.
  useEffect(() => {
    setPicks([]);
  }, [query]);

  if (isSiteAIDisabled()) return null;
  if (query.trim().split(/\s+/).length < 3) return null;

  const shortlist = candidates.slice(0, 30);

  const handleAsk = async () => {
    const text = await ask({
      mode: "match",
      query,
      candidates: shortlist.map((t) => ({ title: t.title, category: t.category })),
    });
    if (!text) return;

    const parsed: Pick[] = [];
    for (const line of text.split("\n")) {
      const clean = line.replace(/^[\s\d.•*-]+/, "").trim();
      if (!clean) continue;
      const [rawTitle, ...rest] = clean.split(/\s+[—–-]\s+/);
      const key = normalize(rawTitle || "");
      const tool =
        shortlist.find((t) => normalize(t.title) === key) ||
        shortlist.find((t) => normalize(t.title).includes(key) && key.length > 3);
      if (tool && !parsed.some((p) => p.tool.title === tool.title)) {
        parsed.push({ tool, reason: rest.join(" — ").trim() });
      }
      if (parsed.length === 3) break;
    }
    setPicks(parsed);
  };

  return (
    <div className="mb-4 rounded-lg border border-cyan-500/30 bg-gray-900/60 p-3">
      {picks.length === 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-gray-300 text-xs">
            Not sure which one fits? Let our AI pick the best matches for you.
          </p>
          <Button
            onClick={handleAsk}
            disabled={loading || shortlist.length === 0}
            size="sm"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white whitespace-nowrap"
          >
            {loading ? (
              <Loader2 className="mr-2 h-3 w-3 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-3 w-3" />
            )}
            Ask AI for the best match
          </Button>
        </div>
      )}

      {error && <p className="mt-2 text-amber-300 text-xs">{error}</p>}

      {picks.length > 0 && (
        <div className="space-y-2">
          <p className="text-cyan-300 text-xs font-semibold">AI picks for "{query}"</p>
          {picks.map((p) => (
            <button
              key={p.tool.title}
              onClick={() => onPick(p.tool)}
              className="w-full text-left rounded-md border border-cyan-500/20 bg-black/40 p-2 hover:border-cyan-400/60 transition-colors"
            >
              <span className="block text-white text-sm font-medium">{p.tool.title}</span>
              {p.reason && <span className="block text-gray-400 text-xs">{p.reason}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AISearchAssistant;
