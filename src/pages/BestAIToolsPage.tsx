import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allTools } from "@/data/toolsData";
import { Link } from "react-router-dom";
import { Star, Trophy, TrendingUp, CheckCircle } from "lucide-react";
import { generateToolSlug } from "@/utils/urlGenerator";

const BestAIToolsPage = () => {
  const toolCount = allTools.length;
  
  // Get top-rated tools
  const topTools = [...allTools]
    .filter(tool => tool.rating && tool.rating >= 4.5)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 50);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ai-webtools.com" },
      { "@type": "ListItem", "position": 2, "name": "Best AI Tools", "item": "https://ai-webtools.com/best-ai-tools" }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best AI Tools 2026 - Top Rated AI Tools Directory",
    "description": "Curated list of the best AI tools in 2026, ranked by user ratings and expert reviews.",
    "numberOfItems": topTools.length,
    "itemListElement": topTools.slice(0, 30).map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": tool.title,
      "description": tool.description?.substring(0, 150),
      "url": `https://ai-webtools.com/${generateToolSlug(tool.title)}`
    }))
  };

  return (
    <>
      <Helmet>
        <title>Best AI Tools 2026 — Top Rated AI Directory</title>
        <meta name="description" content={`Discover the best AI tools of 2026. Our curated list of ${topTools.length}+ top-rated AI tools includes ChatGPT, Midjourney, Claude, and more. Find the perfect AI tool for your needs.`} />
        <meta name="keywords" content="best AI tools, top AI tools, best AI tools 2026, highest rated AI tools, AI tools ranking, best artificial intelligence tools, top rated AI software, best AI apps, AI tools comparison, best free AI tools" />
        <link rel="canonical" href="https://ai-webtools.com/best-ai-tools" />
        
        <meta property="og:title" content="Best AI Tools 2026 - Top Rated AI Tools Directory" />
        <meta property="og:description" content={`Discover the best AI tools of 2026. Curated list of ${topTools.length}+ top-rated AI tools.`} />
        <meta property="og:url" content="https://ai-webtools.com/best-ai-tools" />
        
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="py-16 px-4 bg-gradient-to-b from-background to-yellow-500/5">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Trophy className="w-16 h-16 text-yellow-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Best AI Tools 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Top {topTools.length} Highest Rated AI Tools
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto">
              Our curated list of the <strong>best AI tools</strong> ranked by user ratings, expert reviews, 
              and real-world performance. Updated regularly to bring you the <strong>top AI tools</strong> of 2026.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Top Rated AI Tools</h2>
            
            <div className="grid gap-4">
              {topTools.map((tool, index) => (
                <Link 
                  key={tool.title}
                  to={`/${generateToolSlug(tool.title)}`}
                  className="bg-card border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-all hover:shadow-lg flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-semibold text-lg truncate">{tool.emoji} {tool.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{tool.description}</p>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-1 text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">{tool.rating?.toFixed(1)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-accent/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">How We Rank the Best AI Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border/50 rounded-lg p-6 text-center">
                <Star className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">User Ratings</h3>
                <p className="text-sm text-muted-foreground">Based on thousands of real user reviews and ratings</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-6 text-center">
                <TrendingUp className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">Evaluated for speed, accuracy, and reliability</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-6 text-center">
                <CheckCircle className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Expert Review</h3>
                <p className="text-sm text-muted-foreground">Verified by our team of AI experts</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BestAIToolsPage;
