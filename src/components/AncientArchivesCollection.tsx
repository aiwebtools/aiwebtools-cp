import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { BookOpen, Scroll, Sparkles, Star } from "lucide-react";
import { getAllToolCategories } from "@/data/toolsCollection";

/**
 * Ancient Archives Collection Component
 * 
 * Showcases ancient wisdom and historical archival GPTs for easier discovery.
 * Features tools related to ancient civilizations, mystical knowledge, 
 * historical records, and timeless wisdom teachings.
 */

const AncientArchivesCollection = () => {
  const navigate = useNavigate();
  const allTools = getAllToolCategories();

  // Filter for ancient wisdom, historical, archival, and mystical knowledge tools
  const ancientArchiveTools = allTools.filter(tool => {
    const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ')}`.toLowerCase();
    
    return (
      searchText.includes('ancient') ||
      searchText.includes('archivist') ||
      searchText.includes('historical') ||
      searchText.includes('atlantis') ||
      searchText.includes('egypt') ||
      searchText.includes('babylon') ||
      searchText.includes('maya') ||
      searchText.includes('thoth') ||
      searchText.includes('emerald') ||
      searchText.includes('gematria') ||
      searchText.includes('sacred') ||
      searchText.includes('wisdom') ||
      searchText.includes('timeless') ||
      searchText.includes('civilization') ||
      searchText.includes('archival') ||
      searchText.includes('keeper') ||
      searchText.includes('tablet') ||
      searchText.includes('intergalactic') ||
      searchText.includes('cosmic') && searchText.includes('archive')
    );
  });

  const handleToolClick = (toolIndex: number) => {
    navigate(`/tool/${toolIndex}`);
  };

  if (ancientArchiveTools.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-amber-900/20 via-purple-900/30 to-indigo-900/20 relative overflow-hidden">
      {/* Ancient Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Scroll className="w-8 h-8 text-amber-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                Ancient Archives Collection
              </span>
            </h2>
            <BookOpen className="w-8 h-8 text-amber-400 animate-pulse" />
          </div>
          
          <p className="text-xl text-amber-200/90 max-w-3xl mx-auto leading-relaxed">
            Journey through the wisdom of ancient civilizations, mystical knowledge, and timeless teachings. 
            Unlock the secrets of history's greatest minds and cosmic archives.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge variant="outline" className="bg-amber-950/40 text-amber-300 border-amber-600/50">
              <Sparkles className="w-3 h-3 mr-1" />
              Ancient Wisdom
            </Badge>
            <Badge variant="outline" className="bg-purple-950/40 text-purple-300 border-purple-600/50">
              <Star className="w-3 h-3 mr-1" />
              Sacred Knowledge
            </Badge>
            <Badge variant="outline" className="bg-indigo-950/40 text-indigo-300 border-indigo-600/50">
              <BookOpen className="w-3 h-3 mr-1" />
              Historical Archives
            </Badge>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {ancientArchiveTools.slice(0, 9).map((tool, index) => {
            const toolIndex = allTools.findIndex(t => t.title === tool.title);
            const Icon = tool.icon;
            
            return (
              <Card 
                key={index}
                className="group bg-gradient-to-br from-slate-900/90 to-purple-900/40 border-amber-600/30 hover:border-amber-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer relative overflow-hidden"
                onClick={() => handleToolClick(toolIndex)}
              >
                {/* Mystical Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-purple-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:via-purple-500/10 group-hover:to-amber-500/5 transition-all duration-500"></div>
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 flex-1">
                      {typeof Icon === 'string' ? (
                        <span className="text-3xl">{Icon}</span>
                      ) : (
                        <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-purple-500/20 border border-amber-600/30">
                          <Icon className="w-6 h-6 text-amber-400" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg text-amber-100 group-hover:text-amber-300 transition-colors line-clamp-2">
                          {tool.title}
                        </CardTitle>
                      </div>
                    </div>
                    <span className="text-2xl flex-shrink-0">{tool.emoji}</span>
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-sm text-amber-200/70 line-clamp-3 mb-4">
                    {tool.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tool.tags?.slice(0, 3).map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="secondary" 
                        className="text-xs bg-amber-950/60 text-amber-300 border-amber-700/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-amber-600 to-purple-600 hover:from-amber-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-amber-500/20 group-hover:shadow-xl group-hover:shadow-amber-500/30 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToolClick(toolIndex);
                    }}
                  >
                    <Scroll className="w-4 h-4 mr-2" />
                    Explore Ancient Wisdom
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        {ancientArchiveTools.length > 9 && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-500 hover:via-yellow-400 hover:to-amber-500 text-black font-bold shadow-2xl shadow-amber-500/50 px-8 py-6 text-lg"
              onClick={() => navigate('/main-category/MYSTERIOUS%20%26%20UNUSUAL')}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All {ancientArchiveTools.length} Ancient Archive Tools
              <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AncientArchivesCollection;
