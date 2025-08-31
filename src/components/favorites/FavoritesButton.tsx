import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/useFavorites';
import { Tool } from '@/types/tools';
import { cn } from '@/lib/utils';

interface FavoritesButtonProps {
  tool: Tool;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function FavoritesButton({ tool, size = 'sm', className }: FavoritesButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isLiked = isFavorite(tool.title);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(tool);
  };

  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-7 w-7', 
    lg: 'h-8 w-8'
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className={cn(
        sizeClasses[size],
        'transition-all duration-200 hover:scale-110',
        isLiked 
          ? 'text-red-500 hover:text-red-600' 
          : 'text-muted-foreground hover:text-red-500',
        className
      )}
      aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart 
        className={cn(
          iconSizes[size],
          'transition-all duration-200',
          isLiked && 'fill-current'
        )} 
      />
    </Button>
  );
}