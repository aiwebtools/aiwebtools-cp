import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Sparkles } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to AI Tools in 2025: Transform Your Business",
    excerpt: "Discover how AI tools are revolutionizing industries and learn which AI solutions can boost your productivity by 300%. Complete guide with real case studies.",
    category: "AI Trends",
    publishDate: "2025-01-25",
    readTime: "12 min",
    keywords: ["AI tools 2025", "artificial intelligence business", "AI productivity"]
  },
  {
    id: 2,
    title: "ChatGPT vs Claude vs Gemini: Complete AI Assistant Comparison",
    excerpt: "In-depth comparison of the top AI assistants. Which one delivers the best results for your specific needs? We tested them all.",
    category: "Reviews",
    publishDate: "2025-01-20",
    readTime: "8 min",
    keywords: ["ChatGPT comparison", "AI assistant comparison", "Claude vs ChatGPT"]
  },
  {
    id: 3,
    title: "How Small Businesses Save $50,000 Annually with AI Automation",
    excerpt: "Case study: 3 small businesses that transformed their operations using AI tools. See the exact tools they used and ROI.",
    category: "Case Studies",
    publishDate: "2025-01-15",
    readTime: "10 min",
    keywords: ["AI business automation", "small business AI", "AI ROI"]
  },
  {
    id: 4,
    title: "Best Free AI Tools in 2025: No Subscription Required",
    excerpt: "Complete list of powerful AI tools you can use for free. From image generation to code assistants and writing tools.",
    category: "Free Tools",
    publishDate: "2025-01-12",
    readTime: "15 min",
    keywords: ["free AI tools", "AI tools no subscription", "free GPT tools"]
  },
  {
    id: 5,
    title: "AI Image Generators: Midjourney vs DALL-E vs Stable Diffusion",
    excerpt: "Head-to-head comparison of the top AI image generators. See which one is best for your creative needs.",
    category: "Reviews",
    publishDate: "2025-01-08",
    readTime: "11 min",
    keywords: ["AI image generator", "Midjourney", "DALL-E", "Stable Diffusion"]
  },
  {
    id: 6,
    title: "AI Writing Tools for Authors: Book Writer GPT Review",
    excerpt: "Can AI help you write a book? We tested Book Writer GPT and other AI writing assistants for authors.",
    category: "Reviews",
    publishDate: "2025-01-05",
    readTime: "9 min",
    keywords: ["AI writing tools", "Book Writer GPT", "AI for authors"]
  },
  {
    id: 7,
    title: "Best AI Video Creation Tools 2025: From Script to Screen",
    excerpt: "Create professional videos with AI. Explore tools for scriptwriting, editing, voiceover, and more.",
    category: "Tutorials",
    publishDate: "2025-01-03",
    readTime: "13 min",
    keywords: ["AI video tools", "AI video generator", "video creation AI"]
  },
  {
    id: 8,
    title: "AI Coding Assistants: GitHub Copilot vs Cursor vs Alternatives",
    excerpt: "Which AI coding assistant will make you the most productive developer? We compare the top options.",
    category: "Reviews",
    publishDate: "2024-12-28",
    readTime: "10 min",
    keywords: ["AI coding assistant", "GitHub Copilot", "Cursor AI"]
  },
  {
    id: 9,
    title: "AI Agents Explained: The Future of Autonomous AI Tools",
    excerpt: "What are AI agents and how will they change the way we work? Complete guide to autonomous AI.",
    category: "AI Trends",
    publishDate: "2024-12-20",
    readTime: "14 min",
    keywords: ["AI agents", "autonomous AI", "AI automation"]
  },
  {
    id: 10,
    title: "Top 10 AI Tools for Content Creators in 2025",
    excerpt: "The essential AI toolkit for YouTubers, bloggers, and social media creators. Boost your content production.",
    category: "Tutorials",
    publishDate: "2024-12-15",
    readTime: "8 min",
    keywords: ["AI content creation", "AI for creators", "AI YouTube tools"]
  },
  {
    id: 11,
    title: "AI Music Generation: Create Songs with Suno, Udio & More",
    excerpt: "Generate original music with AI. Compare the best AI music generators and learn how to use them.",
    category: "Tutorials",
    publishDate: "2024-12-10",
    readTime: "12 min",
    keywords: ["AI music generation", "Suno AI", "Udio AI", "AI songs"]
  },
  {
    id: 12,
    title: "Enterprise AI Tools: What Fortune 500 Companies Use",
    excerpt: "Discover the AI tools used by the world's largest companies and how you can access them too.",
    category: "Case Studies",
    publishDate: "2024-12-05",
    readTime: "11 min",
    keywords: ["enterprise AI", "corporate AI tools", "business AI solutions"]
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "AI Web Tools Blog",
  "description": "Expert insights, tutorials, and reviews on AI tools for productivity, creativity, and business",
  "url": "https://aitools.studio/blog",
  "publisher": {
    "@type": "Organization",
    "name": "AI Web Tools",
    "url": "https://aitools.studio"
  },
  "blogPost": blogPosts.map(post => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.publishDate,
    "author": {
      "@type": "Organization",
      "name": "AI Web Tools"
    },
    "keywords": post.keywords.join(", ")
  }))
};

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>AI Tools Blog | Expert Reviews, Tutorials & Case Studies | AI Web Tools</title>
        <meta name="description" content="Stay ahead with our expert AI tools blog. In-depth tutorials, business case studies, and comprehensive reviews of the latest AI technologies. Updated daily." />
        <meta name="keywords" content="AI tools blog, AI tutorials, AI business case studies, AI tool reviews, artificial intelligence guides, ChatGPT tutorials, AI productivity tips" />
        <link rel="canonical" href="https://aitools.studio/blog" />
        
        <meta property="og:title" content="AI Tools Blog | Expert Reviews & Tutorials" />
        <meta property="og:description" content="Expert insights, tutorials, and reviews on 2195+ AI tools. Learn how AI can transform your business and creativity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aitools.studio/blog" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Tools Blog | Expert Reviews & Tutorials" />
        <meta name="twitter:description" content="Expert insights, tutorials, and reviews on 2195+ AI tools." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />

      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-cyan-400">AI Tools</span> Blog & Tutorials
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
              Expert insights, reviews, and guides on 2195+ AI tools. Stay ahead with the latest AI trends.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link to="/main-category/ALL%20AI%20TOOLS">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Browse All Tools
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-cyan-500/20">
              <div className="text-2xl font-bold text-cyan-400">{blogPosts.length}+</div>
              <div className="text-xs text-gray-500">Articles</div>
            </div>
            <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-cyan-500/20">
              <div className="text-2xl font-bold text-cyan-400">2195+</div>
              <div className="text-xs text-gray-500">Tools Covered</div>
            </div>
            <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-cyan-500/20">
              <div className="text-2xl font-bold text-cyan-400">Daily</div>
              <div className="text-xs text-gray-500">Updates</div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-base text-white leading-tight">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold text-white mb-6">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['AI Trends', 'Reviews', 'Case Studies', 'Tutorials', 'Free Tools'].map((cat) => (
                <span key={cat} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400 cursor-pointer transition-colors">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-xl border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Explore AI Tools?</h2>
            <p className="text-gray-400 mb-6">Discover 2195+ AI tools for every need in our comprehensive directory.</p>
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              <Link to="/">
                Browse AI Tools Directory
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
