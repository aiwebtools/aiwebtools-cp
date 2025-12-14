import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import DeferredMount from '@/components/DeferredMount';
import ScrollToTop from '@/components/ui/scroll-to-top';
import SEOHead from '@/components/SEOHead';
import ToolCard from '@/components/tools/ToolCard';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/useFavorites';
import { Heart, Trash2 } from 'lucide-react';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favorites, clearFavorites } = useFavorites();

  const handleClearFavorites = () => {
    if (confirm('Are you sure you want to clear all favorites? This action cannot be undone.')) {
      clearFavorites();
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <SEOHead
        title="My Favorite AI Tools - AIWebTools.AI"
        description="Your personal collection of favorite AI tools. Save and organize the best AI tools for future use."
        keywords={["favorite ai tools", "saved ai tools", "ai bookmarks", "ai tools collection"]}
      />
      
      <DeferredMount delay={50}><AnimatedBackground /></DeferredMount>
      
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <main className="container mx-auto px-4 py-8 pt-32 md:pt-36 lg:pt-40">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">❤️</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-red-500 to-pink-600 bg-clip-text text-transparent cyber-glow">
              My Favorite AI Tools
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Your personal collection of saved AI tools. Keep track of tools you want to try later or use regularly.
            </p>
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <li>
                  <button 
                    onClick={() => navigate('/')}
                    className="hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:text-cyan-400"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <span className="mx-2">›</span>
                  <span className="text-pink-400">My Favorites</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Favorites Count and Actions */}
          {favorites.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <div className="text-cyan-400 font-semibold">
                <Heart className="inline w-5 h-5 mr-2 text-red-500" fill="currentColor" />
                {favorites.length} {favorites.length === 1 ? 'favorite tool' : 'favorite tools'} saved
              </div>
              
              <Button
                onClick={handleClearFavorites}
                variant="outline"
                size="sm"
                className="border-red-500/50 text-red-400 hover:bg-red-500/20 hover:border-red-400"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All Favorites
              </Button>
            </div>
          )}

          {/* Favorites Grid or Empty State */}
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((tool, index) => (
                <ToolCard 
                  key={`favorite-${tool.title}-${index}`} 
                  tool={tool} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">💔</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-4">No Favorite Tools Yet</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Start exploring our AI tools collection and click the heart icon on any tool to add it to your favorites!
              </p>
              <div className="space-y-4">
                <Button
                  onClick={() => navigate('/')}
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Discover AI Tools
                </Button>
                <div className="text-sm text-gray-500">
                  Look for the ❤️ heart icon in the top-right corner of each tool card
                </div>
              </div>
            </div>
          )}
        </main>
        
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default FavoritesPage;