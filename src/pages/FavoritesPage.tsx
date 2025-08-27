import { FavoritesList } from '@/components/favorites/FavoritesList';
import SEOHead from '@/components/SEOHead';
import BreadcrumbSEO from '@/components/BreadcrumbSEO';
import { useFavorites } from '@/hooks/useFavorites';

export default function FavoritesPage() {
  const { getFavoritesCount } = useFavorites();
  const favoritesCount = getFavoritesCount();

  return (
    <>
      <SEOHead
        title={`My Favorite AI Tools (${favoritesCount}) | AI Web Tools`}
        description={`Your personal collection of ${favoritesCount} favorite AI tools. Save and organize the best AI tools for your workflow and productivity.`}
        keywords={["favorite AI tools", "saved AI tools", "AI tool collection", "personal AI tools", "bookmarked AI tools"]}
      />
      
      <BreadcrumbSEO
        items={[
          { name: 'Home', url: '/' },
          { name: 'Favorites', url: '/favorites' }
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-8">
          <FavoritesList />
        </div>
      </div>
    </>
  );
}