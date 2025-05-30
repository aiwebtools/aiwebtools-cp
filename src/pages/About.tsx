
import { Phone, Mail, Globe, MapPin, Users, Target, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import EnhancedSEOHead from "@/components/EnhancedSEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { createTimePortalEffect } from "@/utils/timeEffects";

const About = () => {
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    createTimePortalEffect(url);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <EnhancedSEOHead
        title="About AI WEB TOOLS LLC - Leading AI Tools Directory Company | 475-800-8096"
        description="Learn about AI WEB TOOLS LLC, the premier artificial intelligence tools directory company. Founded to uplift humanity with AI technology. Contact us at 475-800-8096 or visit our office at One World Drive, EARTH. Discover our mission, vision, and commitment to providing the world's most comprehensive AI tools collection."
        keywords={[
          "AI WEB TOOLS LLC about",
          "artificial intelligence company",
          "AI tools directory company",
          "AI technology leadership",
          "475-800-8096",
          "One World Drive EARTH",
          "AI innovation company",
          "AI solutions provider",
          "contact AI WEB TOOLS",
          "aiwebtools.ai company info"
        ]}
        schemaType="Organization"
      />
      
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-glow">
                About <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">AI WEB TOOLS LLC</span>
              </h1>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
                We are here to uplift humanity with the power of AI for various niche purposes and specific industries & specialty purposes.
              </p>
            </div>

            {/* Company Info Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gray-900/80 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-white">Contact Us</h3>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <button 
                      onClick={(e) => handleExternalLink("tel:+14758008096", e)}
                      className="block text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      📞 475-800-8096
                    </button>
                    <button 
                      onClick={(e) => handleExternalLink("mailto:contact@ai-webtools.com", e)}
                      className="block text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      📧 contact@ai-webtools.com
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-white">Location</h3>
                  </div>
                  <p className="text-gray-300">
                    🌍 One World Drive, EARTH
                  </p>
                  <button 
                    onClick={(e) => handleExternalLink("https://aiwebtools.ai", e)}
                    className="mt-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    🌐 www.aiwebtools.ai
                  </button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                  </div>
                  <p className="text-gray-300">
                    Providing the world's most comprehensive directory of AI tools and solutions to empower businesses and individuals.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Company Story */}
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="bg-gray-900/80 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                      AI WEB TOOLS LLC was founded with a singular vision: to democratize access to artificial intelligence tools and make cutting-edge AI technology accessible to everyone, everywhere. From our headquarters at One World Drive, EARTH, we serve a global community of innovators, entrepreneurs, and creators.
                    </p>
                    <p>
                      Our team of AI experts and technology enthusiasts curates the world's most comprehensive directory of AI tools, ensuring that whether you're a Fortune 500 company or a solo entrepreneur, you have access to the best AI solutions for your specific needs.
                    </p>
                    <p>
                      We believe that AI has the power to solve humanity's greatest challenges, and our mission is to connect people with the right tools to make that vision a reality. Every tool in our directory is carefully vetted and categorized to help you find exactly what you need.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/80 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Global Community</h3>
                  <p className="text-gray-300">
                    Serving millions of users worldwide with the most comprehensive AI tools directory.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Quality Assured</h3>
                  <p className="text-gray-300">
                    Every AI tool is carefully reviewed and verified by our expert team.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Always Updated</h3>
                  <p className="text-gray-300">
                    Our directory is constantly updated with the latest AI innovations and tools.
                  </p>
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

export default About;
