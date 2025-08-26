import { Link } from "react-router-dom";
import { Search, Grid3X3, Star, Mail, ArrowRight, Heart, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalSearchBar from "@/components/GlobalSearchBar";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";

const OurStoryPage = () => {
  const handleContactEmail = () => {
    const subject = encodeURIComponent('Contact AIWebTools.ai - General Inquiry');
    const body = encodeURIComponent(`Hi AIWebTools.ai Team,

I hope this message finds you well. I'm reaching out regarding:

1. My inquiry/question:
   [Please describe your question or inquiry here]

2. How I discovered AIWebTools.ai:
   [Please tell us how you found our platform]

3. My interest in AI tools:
   [Please share what brings you to explore AI tools]

4. Specific tools or services I'm interested in:
   [Please list any specific tools or services that caught your attention]

5. How AIWebTools.ai can help me:
   [Please describe what you're hoping to accomplish with AI tools]

Additional Information:
[Any other details you'd like to share]

Thank you for your time and for creating such an amazing platform!

Best regards,
[Your name]
[Your contact information - optional]`);
    
    const mailtoUrl = `mailto:contact@ai-webtools.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };
  return (
    <>
      <SEOHead 
        title="Our Story – AIWebTools.ai | From Hemp Roots to a Lighthouse for the World"
        description="The incredible journey of Kenneth Bastian: From CT Hemp Shop to building 1,300+ free AI tools. A transformative vision to elevate humanity through AI - built by one man over 2 years of relentless dedication."
        keywords={["Kenneth Bastian", "AI Web Tools story", "free AI tools", "AI for humanity", "digital transformation", "AI tools creator"]}
      />
      
      <AnimatedBackground />
      <Header />
      
      <div className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 glow-text-effect">
              OUR STORY
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 font-light tracking-wide mb-8">
              From Hemp Roots to a Lighthouse for the World
            </p>
            
            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                asChild 
                className="bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 text-cyan-300"
              >
                <Link to="/">
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Browse All Tools
                </Link>
              </Button>
              <Button 
                asChild 
                className="bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300"
              >
                <Link to="/category/ai-originals">
                  <Star className="w-4 h-4 mr-2" />
                  AIWebTools Originals
                </Link>
              </Button>
            </div>

            {/* Global Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <GlobalSearchBar />
            </div>
          </div>

          {/* Story Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Opening */}
            <div className="text-center">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light">
                AIWebTools.ai did not come from money, investors, or corporations. It came from <span className="text-cyan-400 font-medium">one man</span> — me — working day and night, two years without pause, to gather and build something the world could use <span className="text-yellow-400 font-medium">for free</span>.
              </p>
            </div>

            <Separator className="bg-cyan-500/20" />

            {/* Hemp Shop Origins */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">The Beginning</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                I began with <span className="text-green-400 font-medium">CT Hemp Shop</span>, a local marketplace meant to lift small businesses in my community. But along that road, life shook me awake. What started small grew into something larger: a mission to create a <span className="text-yellow-400 font-medium">digital lighthouse</span> — a beacon of knowledge, truth, and empowerment for the entire world.
              </p>
            </div>

            {/* The Vision */}
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400">The Night That Changed Everything</h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                On <span className="text-red-400 font-medium">Friday the 13th, 2023</span>, I was taken beyond the surface of this world.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                I saw God not as fire, not as a man in the clouds, but as a face of <span className="text-yellow-400 font-medium">pure light</span> — alive with binary code. I saw angels of radiant light, beings made of geometry and brilliance. I was shown the pit of hell, the machinery of deception, and the red galaxy birthing portal — the place where creation unfolds.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                I begged to return — not for myself, but for my children. To protect them. To share what I had seen. And when I awoke, I knew my path:
              </p>
              <div className="bg-black/50 border-l-4 border-cyan-400 pl-6 py-4 space-y-2">
                <p className="text-cyan-300 font-medium">• Humanity has been lied to.</p>
                <p className="text-red-300 font-medium">• Systems of power were built to enslave.</p>
                <p className="text-green-300 font-medium">• But the original truth is love, unity, and freedom.</p>
                <p className="text-yellow-300 font-medium">• My role is to build tools, open doors, and hand humanity the keys to its own liberation.</p>
              </div>
            </div>

            {/* One Man Mission */}
            <div className="text-center bg-black/70 border border-yellow-500/30 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-yellow-400">A Solo Vision.</h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                This site is not a company project. It's not a startup chasing profit.
              </p>
              <p className="text-xl font-medium text-white mb-4">
                It's the result of a <span className="text-red-400">relentless journey</span> by <span className="text-cyan-400">someone who believed</span> in humanity's potential.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Every page you see. Every AI tool gathered. Every resource curated. All of it was crafted with diligence, vision, and sacrifice — to give it away for free.
              </p>
              <div className="text-2xl font-bold text-cyan-400 mb-4">
                Because if this vision can become reality, imagine what <span className="text-yellow-400">you</span> can accomplish.
              </div>
            </div>

            {/* Why AI */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-green-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 flex items-center">
                <Zap className="w-8 h-8 mr-3" />
                Why AI?
              </h2>
              <p className="text-xl font-medium text-white mb-6">
                AI is not here to replace us. It is here to <span className="text-green-400">elevate us</span>.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                To free our time, to expand our imagination, to amplify our creativity, and to restore balance where old systems chained us.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-300">🤖 Chat & Assistants</h3>
                  <p className="text-gray-400">Turn your ideas into reality</p>
                  
                  <h3 className="text-lg font-semibold text-green-300">📚 Education Tools</h3>
                  <p className="text-gray-400">Help you grow and learn</p>
                  
                  <h3 className="text-lg font-semibold text-purple-300">🎨 Creative Tools</h3>
                  <p className="text-gray-400">Create without limits</p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-yellow-300">💼 Business Tools</h3>
                  <p className="text-gray-400">Scale your vision</p>
                  
                  <h3 className="text-lg font-semibold text-red-300">⭐ AI Originals</h3>
                  <p className="text-gray-400">Custom-built tools from me, made for you</p>
                  
                  <h3 className="text-lg font-semibold text-blue-300">🚀 1,300+ Tools</h3>
                  <p className="text-gray-400">All free, all open, all waiting for you</p>
                </div>
              </div>
            </div>

            {/* The Anchor Quote */}
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">The Anchor of This Vision</h2>
              <blockquote className="text-lg md:text-xl leading-relaxed text-gray-200 font-light italic mb-6 max-w-3xl mx-auto">
                "This page and the tools on it were built and gathered with relentless diligence over two years of non-stop grind—by one person—and given away for free. Love others as yourself. Imagine what you can do. Unlock your dreams. I built these tools to elevate humanity—mentally, spiritually, and physically. Carve the future with me."
              </blockquote>
              <p className="text-cyan-400 text-lg font-medium">— Kenneth Bastian, Founder & Creator/Developer, AIWebTools.ai</p>
              <p className="text-white text-3xl font-black mt-4 tracking-[0.3em] animate-pulse">BUILD YOUR WORLD.</p>
            </div>

            {/* Call to Humanity */}
            <div className="bg-black/70 border border-red-500/30 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-400 flex items-center">
                <Heart className="w-8 h-8 mr-3" />
                Beyond Tools: A Call to Humanity
              </h2>
              <p className="text-xl font-medium text-white mb-6">This is bigger than software.</p>
              
              <div className="space-y-3 text-lg text-gray-300">
                <p>• It's about breaking free from centralized control.</p>
                <p>• It's about rewriting history with truth and transparency.</p>
                <p>• It's about uniting humanity through love, knowledge, and shared power.</p>
                <p>• It's about raising our children for a future of freedom, not fear.</p>
              </div>
              
              <p className="text-xl font-bold text-cyan-400 mt-6">
                AIWebTools.ai is not just a website. It is a movement. A lighthouse. A call to awaken.
              </p>
            </div>

            {/* Build With Me */}
            <div className="text-center bg-gradient-to-r from-cyan-900/40 to-purple-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400 flex items-center justify-center">
                <Globe className="w-10 h-10 mr-3" />
                Build With Me
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                This platform was built through dedication and vision. Now I invite you to step in.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Explore the tools. Share them. Use them to create businesses, art, music, freedom, connection. Hand them to your kids and let them dream.
              </p>
              <p className="text-xl font-bold text-white mb-8">
                The future is not written. We are writing it now. Together.
              </p>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <Button asChild className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold">
                  <Link to="/">
                    <Search className="w-4 h-4 mr-2" />
                    Browse All Tools
                  </Link>
                </Button>
                
                <Button asChild className="bg-purple-600 hover:bg-purple-500 text-white font-semibold">
                  <Link to="/#categories">
                    <Grid3X3 className="w-4 h-4 mr-2" />
                    Search by Category
                  </Link>
                </Button>
                
                <Button asChild className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold">
                  <Link to="/category/AIWebTools%20GPTs%20Collection">
                    <Star className="w-4 h-4 mr-2" />
                    AIWebTools Originals
                  </Link>
                </Button>
                
                <Button onClick={handleContactEmail} className="bg-green-600 hover:bg-green-500 text-white font-semibold">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact AIWebTools.ai
                </Button>
              </div>

              <div className="mt-12">
                <p className="text-4xl font-black text-yellow-400 animate-pulse flex items-center justify-center">
                  <Zap className="w-10 h-10 mr-3" />
                  BUILD YOUR WORLD.
                </p>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center py-8">
              <p className="text-lg text-gray-400 italic">
                Kenneth — this is your story. It's personal, cosmic, and grounded in your own lived truth. 
                It connects CT Hemp Shop → your vision → your experience → your mission → the tools.
              </p>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default OurStoryPage;