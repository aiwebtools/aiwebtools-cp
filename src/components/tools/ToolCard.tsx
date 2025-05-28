
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
    <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 bg-gray-800/80 backdrop-blur-sm h-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="text-center pb-4 flex-shrink-0 relative z-10">
        <div className={`${cardSize} mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
          {tool.emoji}
        </div>
        <div className="space-y-2">
          <CardTitle className={`${titleSize} font-bold text-white group-hover:text-purple-300 transition-colors leading-tight`}>
            {tool.title}
          </CardTitle>
          {tool.category && (
            <Badge variant="outline" className="text-xs border-purple-400 text-purple-300 bg-purple-500/10">
              {tool.category}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="text-center flex-grow flex flex-col relative z-10">
        <CardDescription className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
          {tool.description}
        </CardDescription>
        <div className="mb-4 rounded-lg overflow-hidden border border-gray-600">
          {tool.imageUrl ? (
            <img
              src={tool.imageUrl}
              alt={`${tool.title} Preview`}
              className="w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
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
              className="w-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-gray-400 border border-gray-600"
              style={{ height: imageHeight }}
            >
              <span className="text-4xl">{tool.emoji}</span>
            </div>
          )}
        </div>
        <Link to={`/tool/${toolIndex}`} className="mt-auto">
          <Button 
            size={buttonSize as any}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105 glow-effect"
          >
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
