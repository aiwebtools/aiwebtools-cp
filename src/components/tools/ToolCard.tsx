import { Tool } from "@/types/tools";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  const handleDirectAccess = (e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      console.log('🌀 Direct access clicked for:', tool.title);
      createTimePortalEffect(tool.directUrl);
    }
  };

  return (
    <Card 
      className={`group bg-gradient-to-br ${tool.color} backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer h-full flex flex-col`}
      data-tool-title={tool.title}
    >
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center space-x-4 mb-4">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-2xl text-white shadow-md`}>
            {tool.emoji}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors duration-300 leading-tight">
              {tool.title}
            </h3>
            <p className="text-gray-300 text-sm truncate max-w-xs">{tool.category}</p>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
          {tool.description}
        </p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 bg-transparent border-t-0 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-400">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm">{tool.rating || '4.5'}</span>
        </div>
        <div className="flex space-x-2">
          {tool.directUrl && (
            <Button 
              size="sm"
              variant="outline"
              className="border-green-500/50 bg-green-500/10 text-green-300 hover:bg-green-500/20"
              onClick={handleDirectAccess}
            >
              🚀
            </Button>
          )}
          <Link to={`/tool/${tool.id}`}>
            <Button size="sm">
              More Info
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
