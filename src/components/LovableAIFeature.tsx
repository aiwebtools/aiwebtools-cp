import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Zap } from "lucide-react";

export const LovableAIFeature = () => {
  const features = [
    { icon: Brain, text: "AI summaries & smart condensing" },
    { icon: Sparkles, text: "Conversational AI agents & chatbots" },
    { icon: Zap, text: "Document Q&A & image analysis" },
    { icon: Brain, text: "Sentiment detection at scale" },
    { icon: Sparkles, text: "Creative generation & brainstorming" },
    { icon: Zap, text: "Multilingual translation" },
    { icon: Brain, text: "Task automation & workflow optimization" },
  ];

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30 border-purple-500/30">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <CardHeader className="relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Lovable AI
          </CardTitle>
        </div>
        <p className="text-muted-foreground text-sm">
          Unlock powerful models like Gemini and GPT—no API keys, no setup.
        </p>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-gray-200">{feature.text}</span>
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-white/10">
          <p className="text-xs text-muted-foreground mb-3">
            Normally, adding AI to an app means hunting down API keys, setting up billing with providers, 
            and wiring it all together yourself. Lovable AI makes it simple to quickly add powerful AI features 
            to your app so you can start building smarter and more engaging apps right away.
          </p>
          <Button
            onClick={() => window.open('https://docs.lovable.dev/features/ai', '_blank')}
            className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
          >
            Learn More About Lovable AI
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
