import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecialServices from "@/components/SpecialServices";
import FeaturedTools from "@/components/FeaturedTools";
import { allTools } from "@/data/toolsData";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Shield, Globe } from "lucide-react";

const AIToolsPage = () => {
  // Get tool count for SEO
  const toolCount = allTools.length;
  
  // Generate ItemList structured data for SEO
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AI Tools Directory - Complete List of AI Tools 2026",
    "description": `Comprehensive directory of ${toolCount}+ AI tools for productivity, creativity, business, and more.`,
    "numberOfItems": toolCount,
    "itemListElement": allTools.slice(0, 100).map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": tool.title,
      "description": tool.description?.substring(0, 150),
      "url": `https://aiwebtools.ai/${tool.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').substring(0, 50)}`
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are AI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI tools are software applications powered by artificial intelligence that automate tasks, enhance productivity, and enable new capabilities across various domains including writing, design, coding, business, and more."
        }
      },
      {
        "@type": "Question",
        "name": "How many AI tools are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our directory features ${toolCount}+ verified AI tools across all categories, making it one of the most comprehensive AI tools directories available.`
        }
      },
      {
        "@type": "Question",
        "name": "Are these AI tools free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many AI tools in our directory offer free tiers or trials. We clearly indicate pricing for each tool so you can find the best AI tools that fit your budget."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best AI tools in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best AI tools in 2026 include ChatGPT for conversational AI, Midjourney for image generation, Claude for advanced reasoning, and many specialized tools for specific industries. Our directory helps you discover and compare them all."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Tools - Complete Directory of {toolCount}+ Best AI Tools 2026 | Free AI Tools Database</title>
        <meta name="description" content={`Discover ${toolCount}+ AI tools in our comprehensive AI tools directory. Find the best AI tools for writing, design, coding, business, and productivity. Free AI tools database updated daily.`} />
        <meta name="keywords" content="AI tools, ai tools, artificial intelligence tools, best AI tools, free AI tools, AI tools directory, AI tools 2026, AI software, AI applications, machine learning tools, AI productivity tools, AI business tools, AI writing tools, AI design tools, AI coding tools" />
        <link rel="canonical" href="https://aiwebtools.ai/ai-tools" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`AI Tools - ${toolCount}+ Best AI Tools Directory 2026`} />
        <meta property="og:description" content={`Complete directory of ${toolCount}+ AI tools. Find the best AI tools for any task - writing, design, coding, business & more.`} />
        <meta property="og:url" content="https://aiwebtools.ai/ai-tools" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content={`AI Tools - ${toolCount}+ Best AI Tools Directory 2026`} />
        <meta name="twitter:description" content={`Complete directory of ${toolCount}+ AI tools. Find the best AI tools for any task.`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section - Keyword Optimized */}
        <section className="py-16 px-4 bg-gradient-to-b from-background to-accent/5">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Tools Directory
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Discover {toolCount}+ Verified AI Tools for Every Task
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto mb-8">
              The most comprehensive <strong>AI tools</strong> directory on the web. Find the best <strong>AI tools</strong> for writing, 
              design, coding, business, productivity, and more. Updated daily with new <strong>AI tools</strong> and reviews.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
                <Shield className="w-5 h-5" />
                <span className="font-medium">{toolCount}+ Verified AI Tools</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30">
                <Zap className="w-5 h-5" />
                <span className="font-medium">Updated Daily</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full border border-purple-500/30">
                <Globe className="w-5 h-5" />
                <span className="font-medium">100% Free to Browse</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Quick Links for SEO */}
        <section className="py-8 px-4 bg-accent/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Browse AI Tools by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { name: "Writing AI Tools", link: "/main-category/WRITING%20%26%20CONTENT%20AI%20TOOLS" },
                { name: "Image AI Tools", link: "/main-category/IMAGE%20%26%20DESIGN%20AI%20TOOLS" },
                { name: "Video AI Tools", link: "/main-category/VIDEO%20%26%20MULTIMEDIA%20AI%20TOOLS" },
                { name: "Coding AI Tools", link: "/main-category/CODING%20%26%20DEVELOPMENT%20AI%20TOOLS" },
                { name: "Business AI Tools", link: "/main-category/BUSINESS%20%26%20PRODUCTIVITY%20AI%20TOOLS" },
                { name: "AI Agents", link: "/ai-agents-directory" },
              ].map((cat) => (
                <Link 
                  key={cat.name}
                  to={cat.link}
                  className="bg-card hover:bg-accent/20 border border-border/50 rounded-lg p-3 text-center text-sm font-medium transition-all hover:scale-105 hover:border-primary/50"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured AI Tools */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Featured AI Tools</h2>
            <p className="text-muted-foreground text-center mb-8">
              Hand-picked AI tools created by our team - 100% free to use
            </p>
            <SpecialServices />
          </div>
        </section>

        {/* All AI Tools Grid */}
        <section className="py-12 px-4 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">All AI Tools</h2>
            <p className="text-muted-foreground text-center mb-8">
              Browse our complete directory of {toolCount}+ AI tools
            </p>
            <FeaturedTools />
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions About AI Tools</h2>
            
            <div className="space-y-6">
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What are AI tools?</h3>
                <p className="text-muted-foreground">
                  AI tools are software applications powered by artificial intelligence that automate tasks, 
                  enhance productivity, and enable new capabilities across various domains including writing, 
                  design, coding, business, and more. They use machine learning and natural language processing 
                  to understand and complete complex tasks.
                </p>
              </div>
              
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">How many AI tools are in this directory?</h3>
                <p className="text-muted-foreground">
                  Our directory features <strong>{toolCount}+ verified AI tools</strong> across all categories, 
                  making it one of the most comprehensive AI tools directories available. We add new AI tools daily 
                  and regularly review existing tools to ensure accuracy.
                </p>
              </div>
              
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Are these AI tools free to use?</h3>
                <p className="text-muted-foreground">
                  Many AI tools in our directory offer free tiers or trials. We clearly indicate pricing for each 
                  tool so you can find the best AI tools that fit your budget. Our own custom GPTs are 100% free to use.
                </p>
              </div>
              
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What are the best AI tools in 2026?</h3>
                <p className="text-muted-foreground">
                  The best AI tools in 2026 include ChatGPT for conversational AI, Midjourney for image generation, 
                  Claude for advanced reasoning, Runway for video AI, and many specialized tools for specific industries. 
                  Our directory helps you discover and compare them all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Start Exploring AI Tools Today</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of professionals who use our AI tools directory to discover the perfect tools for their needs.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all"
            >
              Explore All AI Tools <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIToolsPage;
