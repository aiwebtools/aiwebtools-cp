import SEOHead from '@/components/SEOHead';
import BreadcrumbSEO from '@/components/BreadcrumbSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to AI Tools in 2025: Transform Your Business with Artificial Intelligence",
    excerpt: "Discover how AI tools are revolutionizing industries and learn which AI solutions can boost your productivity by 300%. Complete guide with real case studies.",
    content: "Complete comprehensive guide content...",
    category: "AI Trends",
    publishDate: "2025-01-25",
    readTime: "12 min read",
    keywords: ["AI tools 2025", "artificial intelligence business", "AI productivity", "best AI tools"]
  },
  {
    id: 2,
    title: "ChatGPT vs Claude vs Gemini: Complete AI Assistant Comparison 2025",
    excerpt: "In-depth comparison of the top AI assistants. Which one delivers the best results for your specific needs? We tested them all with real-world scenarios.",
    content: "Detailed comparison content...",
    category: "Tool Reviews",
    publishDate: "2025-01-20",
    readTime: "8 min read",
    keywords: ["ChatGPT comparison", "AI assistant comparison", "Claude vs ChatGPT", "best AI assistant 2025"]
  },
  {
    id: 3,
    title: "How Small Businesses Save $50,000 Annually with AI Automation Tools",
    excerpt: "Case study: 3 small businesses that transformed their operations using AI tools. See the exact tools they used and ROI calculations.",
    content: "Case study content...",
    category: "Case Studies",
    publishDate: "2025-01-15",
    readTime: "10 min read",
    keywords: ["AI business automation", "small business AI", "AI ROI", "business AI tools"]
  }
];

export default function BlogPage() {
  return (
    <>
      <SEOHead
        title="AI Tools Blog & Tutorials | Expert Reviews & Business Case Studies"
        description="Stay ahead with our expert AI tools blog. In-depth tutorials, business case studies, and comprehensive reviews of the latest AI technologies. Learn how AI can transform your business."
        keywords={["AI tools blog", "AI tutorials", "AI business case studies", "AI tool reviews", "artificial intelligence guides", "AI productivity tips"]}
      />
      
      <BreadcrumbSEO
        items={[
          { name: 'Home', url: '/' },
          { name: 'AI Tools Blog', url: '/blog' }
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              AI Tools Blog & Tutorials
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert insights, comprehensive tutorials, and real-world case studies on AI tools that transform businesses. 
              Stay ahead with the latest AI trends and practical guides.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/main-category/ALL%20AI%20TOOLS">
                  Explore AI Tools
                </Link>
              </Button>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" size="sm" asChild className="group">
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Categories Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Categories</h2>
            <div className="grid gap-4 md:grid-cols-4">
              {['AI Trends', 'Tool Reviews', 'Case Studies', 'Tutorials'].map((category) => (
                <Card key={category} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{category}</h3>
                    <p className="text-sm text-muted-foreground">Latest insights and guides</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}