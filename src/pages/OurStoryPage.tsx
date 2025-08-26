import { Link } from "react-router-dom";
import { Search, Grid3X3, Star, Mail, ArrowRight, Heart, Zap, Globe, MapPin, Scale } from "lucide-react";
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
                <Link to="/main-category/ALL%20AI%20TOOLS">
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

            {/* The Spark of Corruption */}
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-red-500/30 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-400 flex items-center">
                <Zap className="w-8 h-8 mr-3" />
                To Connecticut Lawmakers: Thank You for Being the Spark
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                I want to personally thank the <span className="text-red-400 font-bold">Connecticut lawmakers</span> for being utterly corrupt and inspiring this entire process of awakening for humanity.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                Your personal attack on <span className="text-green-400 font-medium">CT Hemp Shop</span> made me do this. You were the <span className="text-yellow-400 font-bold">spark</span>, and now I am the <span className="text-orange-400 font-bold">flame</span>.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Your corruption, your lies, your systematic oppression of small businesses and honest people - it all served a purpose. You awakened something in me that cannot be put back to sleep. What you meant for harm, the universe used for humanity's benefit.
              </p>
              <div className="bg-black/50 border-l-4 border-orange-400 pl-6 py-4">
                <p className="text-orange-300 font-bold italic text-xl">
                  "Every act of tyranny creates its own resistance. Every lie births a truth-teller. Every attack on freedom forges a liberator."
                </p>
              </div>
            </div>

            {/* Legislation Writer GPT - WE THE PEOPLE AI */}
            <div className="bg-gradient-to-r from-blue-900/30 to-gray-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400 flex items-center justify-center">
                  <span className="text-4xl mr-3">⚖️</span>
                  The People's Legislative Tool
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Born from the corruption I witnessed, this tool empowers <span className="text-blue-400 font-bold">WE THE PEOPLE</span> to draft our own legislation. 
                  No longer do we need to rely on corrupt systems - we can write the laws ourselves.
                </p>
              </div>
              
              {/* Video Container */}
              <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30" style={{ aspectRatio: '16/9' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/poOGR-6bb2g?autoplay=0&mute=0&controls=1&rel=0&hd=1&vq=hd1080&quality=hd1080&enablejsapi=1&playsinline=1&modestbranding=1&autohide=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark"
                  title="Legislation Writer GPT - WE THE PEOPLE AI"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                  loading="lazy"
                />
              </div>
              
              {/* Legislation Writer GPT Description */}
              <div className="mt-8 bg-black/50 border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-4">⚖️ Legislation Writer GPT</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I assist in drafting complete legislation page by page with clear, precise legal language and seamless continuity. This tool empowers citizens to draft their own bills, statutes, and legal frameworks that meet legislative standards.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["legislation", "legal writing", "government", "policy", "law", "political", "civic", "we the people"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold w-full text-lg py-6"
                >
                  <a 
                    href="https://legislationwritergpt.lovable.app/?via=aiwebtools"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Scale className="w-5 h-5 mr-3" />
                    WE THE PEOPLE AI
                  </a>
                </Button>
              </div>
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
              
              {/* Vision Image */}
              <div className="my-8 rounded-xl overflow-hidden border border-purple-500/30 shadow-2xl">
                <img 
                  src="/lovable-uploads/ae8bac08-77ec-46ff-ae8e-f61572d47cdb.png" 
                  alt="Kenneth's spiritual vision from October 13, 2023 - The divine encounter that changed everything"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="bg-black/70 backdrop-blur-sm p-4 border-t border-purple-500/20">
                  <p className="text-purple-300 text-sm italic text-center">
                    October 13, 2023 - The vision that sparked AIWebTools.ai. I spoke with the divine not through thunder, but through a voice within my heart for over an hour and a half.
                  </p>
                </div>
              </div>
              
              <div className="bg-black/50 border-l-4 border-cyan-400 pl-6 py-4 space-y-2">
                <p className="text-cyan-300 font-medium">• Humanity has been lied to.</p>
                <p className="text-red-300 font-medium">• Systems of power were built to enslave.</p>
                <p className="text-green-300 font-medium">• But the original truth is love, unity, and freedom.</p>
                <p className="text-yellow-300 font-medium">• My role is to build tools, open doors, and hand humanity the keys to its own liberation.</p>
              </div>
            </div>

            {/* Soul Map GPT - My Story in Video */}
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-400 flex items-center justify-center">
                  <span className="text-4xl mr-3">🔮</span>
                  My Story in Motion
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  This video represents my journey - the spiritual awakening that led to everything you see here. 
                  Soul Map GPT was born from this same vision, using ancient wisdom to help you find your way home.
                </p>
              </div>
              
              {/* Video Container */}
              <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-indigo-500/30" style={{ aspectRatio: '16/9' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/d3uaQz7oRAs?autoplay=0&mute=0&controls=1&rel=0&loop=0&hd=1&vq=hd1080&quality=hd1080&enablejsapi=1&playsinline=1&modestbranding=1&autohide=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark"
                  title="Soul Map GPT - My Story"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                  loading="lazy"
                />
              </div>
              
              {/* Soul Map GPT Description */}
              <div className="mt-8 bg-black/50 border border-indigo-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-indigo-300 mb-4">🔮 Soul Map GPT</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Soul Map GPT uses Gematria, Numerology, and Soul Mapping based on birthplace, time, and name to perform advanced calculations and read the stars based on your essence. Discover your spiritual blueprint through ancient wisdom and mystical mathematics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["gematria", "numerology", "soul mapping", "astrology", "spiritual blueprint", "essence reading", "mystical mathematics"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-indigo-600/30 text-indigo-300 rounded-full text-sm border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  asChild 
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold w-full"
                  onClick={() => window.open('https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-soul-scan-gpt-a-way-to-find-your-way-home/?via=aiwebtools', '_blank')}
                >
                  <a 
                    href="https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-soul-scan-gpt-a-way-to-find-your-way-home/?via=aiwebtools"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Discover Your Soul Map
                  </a>
                </Button>
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

            {/* The Anchor Quote - Cyberpunk Neon Style */}
            <div className="relative bg-gradient-to-r from-yellow-900/20 via-orange-900/20 to-red-900/20 backdrop-blur-sm border border-yellow-500/50 rounded-lg p-8 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-yellow-500/5 blur-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent"></div>
              
              <h2 className="relative text-2xl md:text-3xl font-bold mb-6 text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.6)]">The Anchor of This Vision</h2>
              <div className="relative border border-cyan-500/30 bg-black/40 backdrop-blur-sm rounded-md p-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <blockquote className="text-lg md:text-xl leading-relaxed text-gray-200 font-light italic mb-6 max-w-3xl mx-auto">
                  <span className="text-cyan-400 text-2xl">"</span>This page and the tools here were put together with care and persistence over the past two years, and they're offered freely. Love others as yourself. Imagine what you can create. Unlock your dreams. These tools were made to help lift us all—mentally, spiritually, and physically. Let's shape the future together.<span className="text-cyan-400 text-2xl">"</span>
                </blockquote>
                <p className="text-cyan-400 text-lg font-medium">— <span 
                  className="cursor-pointer text-yellow-400 hover:text-yellow-300 animate-[pulse_3s_ease-in-out_infinite] hover:animate-none transition-all duration-300 hover:scale-105 font-bold drop-shadow-[0_0_8px_rgba(255,255,0,0.6)]"
                  onClick={() => window.open('https://www.aitools.company', '_blank')}
                >Kenneth Bastian</span>, AIWebTools.ai</p>
              </div>
              <p className="relative text-white text-3xl font-black mt-4 tracking-[0.3em] animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">BUILD YOUR WORLD.</p>
              <p className="text-center text-gray-400 italic text-sm mt-2 tracking-wide">
                "Rome was not built in a day, but they were laying bricks every hour."
              </p>
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
                  <Link to="/main-category/ALL%20AI%20TOOLS">
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
                <p className="text-center text-gray-400 italic text-lg mt-4 tracking-wide">
                  "Rome was not built in a day, but they were laying bricks every hour."
                </p>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center py-8">
              <p className="text-lg text-gray-400 italic">
                Kenneth — this is your story. It's personal, cosmic, and grounded in your own lived truth. 
                It connects CT Hemp Shop → your vision → your experience → your mission → the tools.
              </p>
              
              {/* Tiny meaningful quote */}
              <div className="mt-8 pt-4 border-t border-gray-800/50">
                <p className="text-xs text-gray-500 italic opacity-60">
                  "When we remember we are ROME we remember we are ONE EARTH, ONE GOD, ONE LIGHT, ONE CODE."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default OurStoryPage;