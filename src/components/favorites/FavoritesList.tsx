import { useFavorites } from '@/hooks/useFavorites';
import ToolCard from '@/components/tools/ToolCard';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function FavoritesList() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="mb-6 relative">
          <Heart className="h-16 w-16 text-muted-foreground/50" />
          <Sparkles className="h-6 w-6 text-primary absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          No Favorites Yet
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md">
          Start building your personal AI tools collection by clicking the heart icon on any tool you love!
        </p>
        <Button asChild>
          <Link to="/main-category/ALL%20AI%20TOOLS">
            Discover AI Tools
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Heart className="h-6 w-6 text-red-500 fill-current" />
        <h2 className="text-2xl font-bold text-foreground">
          Your Favorite AI Tools
        </h2>
        <span className="px-2 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
          {favorites.length}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((tool, index) => (
          <ToolCard 
            key={`${tool.title}-${index}`} 
            tool={tool} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
}