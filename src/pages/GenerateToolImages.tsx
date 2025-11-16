import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const toolsNeedingImages = [
  {
    title: "Playwriter GPT",
    prompt: "Generate a professional, cinematic advertisement image for Playwriter GPT. Show a theatrical stage with dramatic lighting, red curtains, a spotlight, and floating script pages with elegant text. Include theatrical masks (comedy and tragedy) and a sense of creative drama. Modern, sleek design with gradients from red to purple. High quality, 16:9 aspect ratio.",
    id: "playwriter",
    targetLine: 24
  },
  {
    title: ".WorldPeace Web3 Registration",
    prompt: "Generate a professional Web3/blockchain advertisement image for .WorldPeace domain registration. Show a glowing globe with digital network connections, blockchain elements, NFT badges, and a dove symbolizing peace. Use emerald and teal gradients. Include crypto wallet icons (MetaMask, Phantom, Coinbase). Modern, futuristic, high-tech aesthetic. 16:9 aspect ratio.",
    id: "worldpeace",
    targetLine: 34
  },
  {
    title: ".WorldTrade Web3 Registration",
    prompt: "Generate a professional Web3/blockchain advertisement image for .WorldTrade domain registration. Show a digital globe with trading routes, blockchain connections, cryptocurrency symbols, and commerce icons. Use cyan and blue gradients. Include NFT elements and wallet icons. Modern, professional, global commerce aesthetic. 16:9 aspect ratio.",
    id: "worldtrade",
    targetLine: 45
  },
  {
    title: "Farm Finder & Barter GPT",
    prompt: "Generate a professional advertisement image for Farm Finder & Barter GPT. Show a beautiful farm landscape with a red barn, green fields, fresh produce, a farmer's market scene, and digital elements showing bartering/exchange. Include sustainable farming symbols, local food icons, and economic resilience themes. Use green and amber gradients. 16:9 aspect ratio.",
    id: "farmfinder",
    targetLine: 56
  },
  {
    title: "ALAN WATTS GPT",
    prompt: "Generate a serene, philosophical advertisement image for ALAN WATTS GPT. Show a peaceful meditation scene with Eastern philosophy elements, zen garden aesthetics, cosmic consciousness imagery, flowing water, and spiritual enlightenment symbols. Use purple and orange gradients. Include philosophical themes and wisdom symbols. Calming, contemplative aesthetic. 16:9 aspect ratio.",
    id: "alanwatts",
    targetLine: 66
  },
  {
    title: "Bob Ross GPT",
    prompt: "Generate a warm, artistic advertisement image for Bob Ross GPT. Show a serene painting studio with mountains, happy trees, fluffy clouds, and an easel. Include Bob Ross-style landscape painting elements, soft brushes, warm earth tones, calming natural scenery. Use gentle blues, greens, and earth tone gradients. Peaceful, creative, inspiring aesthetic. 16:9 aspect ratio.",
    id: "bobross",
    targetLine: 0
  },
  {
    title: "Cyber-Kabbalah Light Code Translation Engine GPT",
    prompt: "Generate a mystical, technological advertisement image for Cyber-Kabbalah Light Code Translation Engine GPT. Show sacred geometry overlaid with digital code, glowing light codes, Hebrew letters merging with binary, quantum patterns, and ethereal energy. Use purple, cyan, and gold gradients. Include mystical tech elements, spiritual symbols, and futuristic aesthetics. 16:9 aspect ratio.",
    id: "cyberkabbalah",
    targetLine: 0
  }
];

export default function GenerateToolImages() {
  const [generating, setGenerating] = useState<string | null>(null);
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const generateImage = async (tool: typeof toolsNeedingImages[0]) => {
    setGenerating(tool.id);
    try {
      const { data, error } = await supabase.functions.invoke('generate-tool-images', {
        body: { prompt: tool.prompt }
      });

      if (error) throw error;

      if (data.imageUrl) {
        setGeneratedImages(prev => ({
          ...prev,
          [tool.id]: data.imageUrl
        }));
        toast({
          title: "Image Generated!",
          description: `Successfully generated image for ${tool.title}`,
        });
      }
    } catch (error) {
      console.error("Error generating image:", error);
      toast({
        title: "Error",
        description: `Failed to generate image for ${tool.title}`,
        variant: "destructive",
      });
    } finally {
      setGenerating(null);
    }
  };

  const generateAllImages = async () => {
    for (const tool of toolsNeedingImages) {
      await generateImage(tool);
      // Wait a bit between generations to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  };

  const copyImageData = (id: string) => {
    const imageData = generatedImages[id];
    if (imageData) {
      navigator.clipboard.writeText(`imageUrl: "${imageData}",`);
      toast({
        title: "Copied!",
        description: "Image URL copied to clipboard",
      });
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Generate Tool Images
      </h1>

      <div className="mb-8 text-center">
        <Button 
          onClick={generateAllImages}
          disabled={generating !== null}
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-600"
        >
          {generating ? "Generating..." : "Generate All Images"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {toolsNeedingImages.map((tool) => (
          <Card key={tool.id} className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-cyan-400">{tool.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-400">{tool.prompt}</p>
              
              <Button
                onClick={() => generateImage(tool)}
                disabled={generating === tool.id}
                className="w-full"
              >
                {generating === tool.id ? "Generating..." : "Generate Image"}
              </Button>

              {generatedImages[tool.id] && (
                <div className="space-y-2">
                  <img 
                    src={generatedImages[tool.id]} 
                    alt={tool.title}
                    className="w-full rounded-lg"
                  />
                  <Button
                    onClick={() => copyImageData(tool.id)}
                    variant="outline"
                    className="w-full"
                  >
                    Copy Image URL
                  </Button>
                  <div className="p-2 bg-gray-800 rounded text-xs text-gray-300 break-all max-h-32 overflow-y-auto">
                    {generatedImages[tool.id].substring(0, 200)}...
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-cyan-400">Instructions:</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li>Click "Generate All Images" or generate individual images</li>
          <li>Wait for each image to be generated (takes a few seconds)</li>
          <li>Click "Copy Image URL" to copy the base64 data</li>
          <li>Paste the imageUrl into the corresponding tool object in SpecialServices.tsx</li>
          <li>The format should be: <code className="bg-gray-700 px-2 py-1 rounded">imageUrl: "data:image/png;base64,..."</code></li>
        </ol>
      </div>
    </div>
  );
}
