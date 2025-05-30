
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import EnhancedSEOHead from "@/components/EnhancedSEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Ultimate Guide to AI Tools in 2025: Transform Your Business Today",
      excerpt: "Discover the most powerful AI tools that are revolutionizing industries. From ChatGPT to specialized business automation tools, learn how to choose the right AI solutions for your needs.",
      category: "AI Guides",
      readTime: "8 min read",
      date: "2025-01-15",
      author: "AI WEB TOOLS Team",
      featured: true
    },
    {
      title: "How AI Image Generators Are Changing Creative Industries",
      excerpt: "Explore how Midjourney, DALL-E, and Stable Diffusion are transforming graphic design, marketing, and content creation. Real examples and practical tips included.",
      category: "Creative AI",
      readTime: "6 min read",
      date: "2025-01-12",
      author: "Creative AI Specialist"
    },
    {
      title: "AI Writing Tools: Complete Comparison and Review",
      excerpt: "Compare the top AI writing assistants including GPT-4, Claude, and specialized copywriting tools. Find out which one is best for your content needs.",
      category: "Writing AI",
      readTime: "10 min read",
      date: "2025-01-10",
      author: "Content Strategy Team"
    },
    {
      title: "Business Automation with AI: ROI Calculator and Implementation Guide",
      excerpt: "Learn how to calculate the return on investment for AI tools in your business. Step-by-step implementation strategies and real case studies.",
      category: "Business AI",
      readTime: "12 min read",
      date: "2025-01-08",
      author: "Business AI Consultant"
    },
    {
      title: "Free vs Premium AI Tools: Which Should You Choose?",
      excerpt: "Comprehensive breakdown of free AI tools vs their premium counterparts. Make informed decisions about where to invest your AI budget.",
      category: "AI Strategy",
      readTime: "7 min read",
      date: "2025-01-05",
      author: "AI Economics Team"
    },
    {
      title: "AI Ethics and Best Practices for Businesses",
      excerpt: "Navigate the ethical considerations of AI implementation. Guidelines for responsible AI use and compliance with emerging regulations.",
      category: "AI Ethics",
      readTime: "9 min read",
      date: "2025-01-03",
      author: "AI Ethics Committee"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <EnhancedSEOHead
        title="AI Tools Blog - Expert Guides, Reviews & Industry Insights | AI WEB TOOLS LLC"
        description="Stay ahead with the latest AI tools insights, expert reviews, and comprehensive guides. Learn how to leverage artificial intelligence for business growth, creative projects, and productivity enhancement. Updated regularly by AI WEB TOOLS LLC experts."
        keywords={[
          "AI tools blog",
          "artificial intelligence guides",
          "AI tool reviews",
          "AI business strategies",
          "AI implementation guides",
          "AI industry insights",
          "AI WEB TOOLS LLC blog",
          "AI technology news",
          "AI tool comparisons",
          "AI best practices"
        ]}
        schemaType="Blog"
      />
      
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-glow">
                AI Tools <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
                Expert insights, comprehensive guides, and the latest trends in artificial intelligence tools and technology.
              </p>
            </div>

            {/* Featured Post */}
            {blogPosts
              .filter(post => post.featured)
              .map((post, index) => (
                <Card key={index} className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 border-cyan-500/50 backdrop-blur-sm mb-12">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <Badge className="bg-cyan-500 text-black mb-4">Featured</Badge>
                        <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                          {post.title}
                        </h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                            {post.category}
                          </Badge>
                        </div>
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                          Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(post => !post.featured)
                .map((post, index) => (
                  <Card key={index} className="bg-gray-900/80 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 mb-4">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 w-full">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16">
              <Card className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-cyan-500/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Stay Updated with AI Tools Insights
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Get the latest AI tools reviews, guides, and industry insights delivered to your inbox. Join thousands of AI enthusiasts and professionals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
                    />
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
