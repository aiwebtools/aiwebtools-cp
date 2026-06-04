import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allTools } from "@/data/toolsData";
import { Link } from "react-router-dom";
import { Gift, Sparkles, Check } from "lucide-react";
import { generateToolSlug } from "@/utils/urlGenerator";

const FreeAIToolsPage = () => {
  // Filter for free tools (our custom GPTs and tools marked as free)
  const freeTools = allTools.filter(tool => 
    tool.isFree || 
    tool.directUrl?.includes('lovable.app') || 
    tool.directUrl?.includes('chatgpt.com/g/')
  );

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Free AI Tools - No Cost AI Tools Directory 2026",
    "description": `Collection of ${freeTools.length}+ completely free AI tools for writing, design, productivity, and more.`,
    "numberOfItems": freeTools.length,
    "itemListElement": freeTools.slice(0, 50).map((tool, index) => ({
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
        <title>Free AI Tools - {freeTools.length}+ No-Cost AI Tools | 100% Free AI Tools Directory 2026</title>
        <meta name="description" content={`Discover ${freeTools.length}+ completely free AI tools. No signup, no credit card, no hidden costs. Free AI tools for writing, design, coding, and productivity.`} />
        <meta name="keywords" content="free AI tools, free AI, no cost AI tools, free artificial intelligence, free AI software, free AI apps, free chatgpt, free AI writing tools, free AI image generator, free AI tools 2026, AI tools without payment" />
        <link rel="canonical" href="https://ai-webtools.com/free-ai-tools" />
        
        <meta property="og:title" content={`Free AI Tools - ${freeTools.length}+ No-Cost AI Tools`} />
        <meta property="og:description" content={`${freeTools.length}+ completely free AI tools. No signup required.`} />
        <meta property="og:url" content="https://ai-webtools.com/free-ai-tools" />
        
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="py-16 px-4 bg-gradient-to-b from-background to-green-500/5">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Gift className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Free AI Tools
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {freeTools.length}+ AI Tools - 100% Free, No Hidden Costs
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto">
              Access powerful <strong>free AI tools</strong> without signup, credit cards, or subscriptions. 
              Our collection includes <strong>free AI tools</strong> for writing, design, coding, and much more.
            </p>
          </div>
        </section>

        <section className="py-8 px-4 bg-green-500/5">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {["No Signup Required", "No Credit Card", "No Hidden Fees", "Instant Access"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
                  <Check className="w-4 h-4" />
                  <span className="font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">All Free AI Tools</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {freeTools.slice(0, 60).map((tool) => (
                <Link 
                  key={tool.title}
                  to={`/${generateToolSlug(tool.title)}`}
                  className="bg-card border border-border/50 rounded-lg p-4 hover:border-green-500/50 transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{tool.emoji}</span>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-semibold truncate group-hover:text-green-400 transition-colors">{tool.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{tool.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-medium">FREE</span>
                        {tool.category && (
                          <span className="text-xs text-muted-foreground">{tool.category}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {freeTools.length > 60 && (
              <div className="text-center mt-8">
                <Link 
                  to="/"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors"
                >
                  <Sparkles className="w-5 h-5" />
                  View All {freeTools.length} Free AI Tools
                </Link>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FreeAIToolsPage;
