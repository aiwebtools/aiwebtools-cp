
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tool } from "@/types/tools";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { allTools } from "@/data/toolsData";

interface ToolCardProps {
  tool: Tool;
  isFeatured?: boolean;
}

const ToolCard = ({ tool, isFeatured = false }: ToolCardProps) => {
  const imageHeight = isFeatured ? "200px" : "120px";
  const cardSize = isFeatured ? "w-16 h-16" : "w-12 h-12";
  const titleSize = isFeatured ? "text-xl" : "text-lg";
  const buttonSize = isFeatured ? "default" : "sm";

  // Find the tool index for the URL
  const toolIndex = allTools.findIndex(t => t.title === tool.title);

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm h-full flex flex-col">
      <CardHeader className="text-center pb-4 flex-shrink-0">
        <div className={`${cardSize} mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
          {tool.emoji}
        </div>
        <div className="space-y-2">
          <CardTitle className={`${titleSize} font-bold text-gray-900 group-hover:text-ai-purple transition-colors leading-tight`}>
            {tool.title}
          </CardTitle>
          {tool.category && (
            <Badge variant="outline" className="text-xs border-ai-purple text-ai-purple">
              {tool.category}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="text-center flex-grow flex flex-col">
        <CardDescription className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
          {tool.description}
        </CardDescription>
        <div className="mb-4 rounded-lg overflow-hidden">
          {tool.imageUrl ? (
            <img
              src={tool.imageUrl}
              alt={`${tool.title} Preview`}
              className="w-full rounded-lg object-cover"
              style={{ height: imageHeight }}
            />
          ) : tool.videoUrl ? (
            <iframe
              width="100%"
              height={imageHeight}
              src={tool.videoUrl}
              title={`${tool.title} Demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          ) : (
            <div 
              className="w-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500"
              style={{ height: imageHeight }}
            >
              <span className="text-4xl">{tool.emoji}</span>
            </div>
          )}
        </div>
        <Link to={`/tool/${toolIndex}`} className="mt-auto">
          <Button 
            size={buttonSize as any}
            className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/80 hover:to-ai-blue/80 text-white transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
