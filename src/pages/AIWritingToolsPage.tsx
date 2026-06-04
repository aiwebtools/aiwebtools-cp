import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allTools } from "@/data/toolsData";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, PenTool, BookOpen, FileText, Edit3, Feather, Star, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Featured writing GPTs - our custom tools
const featuredWritingGPTs = [
  {
    title: "Book Writer GPT",
    description: "Create complete novels and books with professional structure, engaging dialogue, and seamless continuity.",
    url: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    icon: "📚",
    videoUrl: "https://www.youtube.com/watch?v=xNQi8wuM3DQ",
    features: ["Full novel creation", "Character development", "Plot structuring"]
  },
  {
    title: "Movie Script Writer GPT",
    description: "Write award-winning movie scripts with professional formatting, scene descriptions, and captivating dialogue.",
    url: "https://moviescriptwritergpt.lovable.app/?via=aiwebtools",
    icon: "🎬",
    videoUrl: "https://www.youtube.com/watch?v=4e3Rkurt3-c",
    features: ["Industry formatting", "Scene breakdown", "Dialogue mastery"]
  },
  {
    title: "Playwriter GPT",
    description: "Craft professional theatrical plays from start to finish with structured acts and compelling narratives.",
    url: "https://playwritergpt.lovable.app/?via=aiwebtools",
    icon: "🎭",
    videoUrl: "https://www.youtube.com/watch?v=KKldzg40wEI",
    features: ["Stage directions", "Act structure", "Dramatic dialogue"]
  },
  {
    title: "Article & Blog Rewriter GPT",
    description: "Rewrite SEO-optimized articles and blogs with fresh perspective while maintaining the core message.",
    url: "https://rewritergpt.lovable.app/?via=aiwebtools",
    icon: "📝",
    features: ["SEO optimization", "Plagiarism-free", "Tone matching"]
  },
  {
    title: "Grant Writer GPT",
    description: "Craft compelling, funder-ready grant proposals that maximize your chances of securing funding.",
    url: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    icon: "💰",
    features: ["Proposal structure", "Budget planning", "Funder alignment"]
  },
  {
    title: "Podcast Script Writer GPT",
    description: "Create engaging podcast scripts and episode outlines optimized for audio storytelling.",
    url: "https://podcastwritergpt.lovable.app/?via=aiwebtools",
    icon: "🎙️",
    features: ["Episode structure", "Intro/outro scripts", "Interview prep"]
  },
  {
    title: "Public Testimony Writer GPT",
    description: "Streamline legislative testimony writing to promote public engagement in policy.",
    url: "https://publictestimonywriter.lovable.app/?via=aiwebtools",
    icon: "📢",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4",
    features: ["Policy focus", "Persuasive writing", "Civic engagement"]
  },
  {
    title: "Legislation Writer GPT",
    description: "Draft complete legislation with clear, precise legal language and seamless continuity.",
    url: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    icon: "⚖️",
    videoUrl: "https://www.youtube.com/watch?v=poOGR-6bb2g",
    features: ["Legal language", "Section structure", "Policy compliance"]
  }
];

const AIWritingToolsPage = () => {
  // Get all writing-related tools from database
  const writingTools = allTools.filter(tool => 
    tool.category?.toLowerCase().includes('writing') ||
    tool.category?.toLowerCase().includes('content') ||
    tool.tags?.some(tag => 
      ['writing', 'writer', 'content', 'blog', 'article', 'book', 'script', 'copywriting'].includes(tag.toLowerCase())
    ) ||
    tool.title?.toLowerCase().includes('writer') ||
    tool.title?.toLowerCase().includes('writing')
  );
  
  const writingToolCount = writingTools.length;

  // Structured data for SEO
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AI Writing Tools Directory 2026",
    "description": `Complete directory of ${writingToolCount}+ AI writing tools including book writers, script writers, blog tools, and more.`,
    "numberOfItems": featuredWritingGPTs.length,
    "itemListElement": featuredWritingGPTs.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": tool.title,
      "description": tool.description,
      "url": tool.url
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are AI writing tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI writing tools are software applications that use artificial intelligence to help create, edit, and improve written content. They can generate blog posts, books, scripts, marketing copy, and more with human-like quality."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best AI writing tool in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best AI writing tool depends on your needs. For books, Book Writer GPT excels at long-form content. For marketing, tools like Jasper AI work well. For general writing, ChatGPT and Claude offer versatility. Our directory helps you find the perfect tool for your specific writing needs."
        }
      },
      {
        "@type": "Question",
        "name": "Are AI writing tools free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many AI writing tools offer free tiers or trials. Our custom GPTs like Book Writer GPT and Movie Script Writer GPT are 100% free to use with a ChatGPT account. Some premium tools require paid subscriptions for advanced features."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI write a complete book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! AI tools like Book Writer GPT can help create complete books with proper structure, character development, and plot continuity. While human editing is recommended, AI can dramatically accelerate the writing process and help overcome writer's block."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Writing Tools - Best AI Writers, Book Writers & Content Generators 2026</title>
        <meta name="description" content={`Discover ${writingToolCount}+ AI writing tools for books, scripts, blogs, and marketing. Free AI writers including Book Writer GPT, Script Writer GPT, and more. The ultimate AI writing tools directory.`} />
        <meta name="keywords" content="AI writing tools, AI writer, AI content generator, AI book writer, AI script writer, AI blog writer, best AI writing tool, free AI writing tools, AI copywriting, AI content creation, writing assistant AI" />
        <link rel="canonical" href="https://ai-webtools.com/ai-writing-tools" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Writing Tools - Best AI Writers & Content Generators 2026" />
        <meta property="og:description" content={`${writingToolCount}+ AI writing tools for books, scripts, blogs & more. Find the perfect AI writer for your needs.`} />
        <meta property="og:url" content="https://ai-webtools.com/ai-writing-tools" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="AI Writing Tools - Best AI Writers 2026" />
        <meta name="twitter:description" content={`${writingToolCount}+ AI writing tools. Free book writers, script writers, blog tools & more.`} />
        
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
        
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-background via-purple-500/5 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <PenTool className="w-10 h-10 text-purple-400" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                AI Writing Tools
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              The Ultimate Directory of AI Writers & Content Generators
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto mb-8">
              Discover <strong>{writingToolCount}+ AI writing tools</strong> for every creative need. From <strong>AI book writers</strong> to 
              <strong> script generators</strong>, blog tools to marketing copy - find the perfect <strong>AI writing assistant</strong> for your project.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-purple-500/10 text-purple-400 px-5 py-3 rounded-full border border-purple-500/30">
                <FileText className="w-5 h-5" />
                <span className="font-bold">{writingToolCount}+ Writing Tools</span>
              </div>
              <div className="flex items-center gap-2 bg-pink-500/10 text-pink-400 px-5 py-3 rounded-full border border-pink-500/30">
                <BookOpen className="w-5 h-5" />
                <span className="font-bold">Books, Scripts & More</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-5 py-3 rounded-full border border-green-500/30">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold">100% Free Custom GPTs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Writing GPTs */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Featured AI Writing Tools</h2>
              <p className="text-muted-foreground">Our handpicked collection of powerful AI writers - all 100% free to use</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredWritingGPTs.map((tool, index) => (
                <Card key={index} className="group bg-card/50 border-border/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{tool.description}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tool.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-purple-500/10 text-purple-300 border-purple-500/30">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <a 
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all"
                      >
                        Try Free <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Writing Categories */}
        <section className="py-12 px-4 bg-accent/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">AI Writing Tools by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Book Writing", icon: "📚", count: "15+" },
                { name: "Script Writing", icon: "🎬", count: "10+" },
                { name: "Blog & Articles", icon: "📝", count: "20+" },
                { name: "Marketing Copy", icon: "📣", count: "25+" },
                { name: "Academic Writing", icon: "🎓", count: "12+" },
                { name: "Technical Writing", icon: "⚙️", count: "8+" },
              ].map((cat, i) => (
                <div key={i} className="bg-card border border-border/50 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all cursor-pointer">
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <div className="font-medium text-sm">{cat.name}</div>
                  <div className="text-xs text-muted-foreground">{cat.count} tools</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why AI Writing Tools */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Why Use AI Writing Tools?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <Feather className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="font-bold mb-2">10x Faster Writing</h3>
                <p className="text-muted-foreground text-sm">Generate first drafts in minutes instead of hours. Overcome writer's block instantly.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                  <Edit3 className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="font-bold mb-2">Professional Quality</h3>
                <p className="text-muted-foreground text-sm">AI writing tools produce polished, publication-ready content with proper structure.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-bold mb-2">Unlimited Creativity</h3>
                <p className="text-muted-foreground text-sm">Explore countless ideas, styles, and approaches. AI never runs out of inspiration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-accent/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">AI Writing Tools FAQ</h2>
            
            <div className="space-y-6">
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What are AI writing tools?</h3>
                <p className="text-muted-foreground">
                  AI writing tools use artificial intelligence to help create, edit, and improve written content. 
                  They can generate blog posts, books, scripts, marketing copy, and more with human-like quality, 
                  significantly speeding up the writing process while maintaining high standards.
                </p>
              </div>
              
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What is the best AI writing tool in 2026?</h3>
                <p className="text-muted-foreground">
                  The best AI writing tool depends on your specific needs. For book writing, our <strong>Book Writer GPT</strong> excels 
                  at long-form content with proper structure. For screenplays, <strong>Movie Script Writer GPT</strong> provides 
                  industry-standard formatting. For general content, ChatGPT and Claude offer excellent versatility.
                </p>
              </div>
              
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Are AI writing tools free?</h3>
                <p className="text-muted-foreground">
                  Many AI writing tools offer free tiers. Our custom GPTs including Book Writer GPT, Movie Script Writer GPT, 
                  and Playwriter GPT are <strong>100% free to use</strong> with a ChatGPT account. Premium tools like Jasper 
                  and Copy.ai require subscriptions for advanced features.
                </p>
              </div>
              
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Can AI write a complete book?</h3>
                <p className="text-muted-foreground">
                  Yes! AI tools like <strong>Book Writer GPT</strong> can help create complete books with proper structure, 
                  character development, plot continuity, and engaging dialogue. While human editing is always recommended, 
                  AI can dramatically accelerate the writing process and help overcome creative blocks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <PenTool className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Start Writing with AI Today</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of writers using our free AI writing tools to create books, scripts, and content faster than ever.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://bookwritergpt.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all"
              >
                Try Book Writer GPT <ArrowRight className="w-5 h-5" />
              </a>
              <Link 
                to="/main-category/WRITING%20%26%20CONTENT%20AI%20TOOLS"
                className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent transition-all"
              >
                Browse All Writing Tools <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIWritingToolsPage;
