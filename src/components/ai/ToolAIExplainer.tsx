import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tool } from "@/types/tools";
import { useSiteAI, isSiteAIDisabled } from "@/hooks/useSiteAI";

interface ToolAIExplainerProps {
  tool: Tool;
}

const ToolAIExplainer = ({ tool }: ToolAIExplainerProps) => {
  const { ask, loading, error, result } = useSiteAI();
  const [opened, setOpened] = useState(false);

  if (isSiteAIDisabled()) return null;

  const handleClick = () => {
    setOpened(true);
    if (!result) {
      ask({
        mode: "explain",
        tool: { title: tool.title, category: tool.category, description: tool.description },
      });
    }
  };

  return (
    <div className="mt-6">
      <Button
        onClick={handleClick}
        variant="outline"
        className="w-full sm:w-auto border-cyan-500/50 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
      >
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Sparkles className="mr-2 h-4 w-4" />
        )}
        Explain this tool in plain English
      </Button>

      {opened && (loading || result || error) && (
        <div className="mt-4 rounded-lg border border-cyan-500/30 bg-gray-900/70 p-4">
          {loading && <p className="text-cyan-300 text-sm animate-pulse">Thinking…</p>}
          {!loading && error && <p className="text-amber-300 text-sm">{error}</p>}
          {!loading && result && (
            <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">{result}</p>
          )}
          {!loading && result && (
            <p className="mt-3 text-[11px] text-gray-500">
              AI-generated summary — always double-check before relying on it.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ToolAIExplainer;
