import { useState } from "react";
import { Wand2, Loader2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tool } from "@/types/tools";
import { useSiteAI, isSiteAIDisabled } from "@/hooks/useSiteAI";

interface ToolPromptHelperProps {
  tool: Tool;
}

/** Only our own custom GPTs / Gemini Gems get the prompt helper. */
export const supportsPromptHelper = (tool: Tool): boolean => {
  const url = (tool.directUrl || "").toLowerCase();
  return (
    url.includes("lovable.app") ||
    url.includes("chatgpt.com/g/") ||
    url.includes("chat.openai.com/g/") ||
    url.includes("gemini.google.com/gem/")
  );
};

const ToolPromptHelper = ({ tool }: ToolPromptHelperProps) => {
  const { ask, loading, error, result } = useSiteAI();
  const [goal, setGoal] = useState("");
  const [copied, setCopied] = useState(false);

  if (isSiteAIDisabled() || !supportsPromptHelper(tool)) return null;

  const handleGenerate = () => {
    ask({
      mode: "prompt",
      query: goal,
      tool: { title: tool.title, category: tool.category, description: tool.description },
    });
  };

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  };

  return (
    <div className="mt-6 rounded-lg border border-purple-500/30 bg-gray-900/60 p-4">
      <h3 className="text-purple-200 font-semibold text-sm mb-1 flex items-center">
        <Wand2 className="mr-2 h-4 w-4" /> Starter prompt helper
      </h3>
      <p className="text-gray-400 text-xs mb-3">
        Not sure what to ask {tool.title}? Tell it what you want and get a ready-to-paste prompt.
      </p>

      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          value={goal}
          onChange={(e) => setGoal(e.target.value.slice(0, 160))}
          placeholder="What do you want to get done? (optional)"
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-500 text-sm"
        />
        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white whitespace-nowrap"
        >
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
          Write my prompt
        </Button>
      </div>

      {error && <p className="mt-3 text-amber-300 text-sm">{error}</p>}

      {result && !loading && (
        <div className="mt-3 rounded-md border border-purple-500/20 bg-black/40 p-3">
          <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">{result}</p>
          <Button
            onClick={handleCopy}
            size="sm"
            variant="outline"
            className="mt-3 border-purple-500/50 text-purple-200 hover:bg-purple-500/20"
          >
            {copied ? <Check className="mr-2 h-3 w-3" /> : <Copy className="mr-2 h-3 w-3" />}
            {copied ? "Copied" : "Copy prompt"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ToolPromptHelper;
