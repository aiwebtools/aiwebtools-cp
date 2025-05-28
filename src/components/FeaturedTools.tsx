
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Film, Clock, Car, GraduationCap, Shield, Theater, Heart, Music, Beaker, Gavel, Palette, Search, Leaf, Zap, Brain, Home, Fish, Sprout, Gem, Camera, Gamepad2, Calculator, Globe, TrendingUp, Stethoscope, Scale, Briefcase, PenTool, Code, Utensils, Brush, Phone, DollarSign, Dna, Binary, Star, Eye, FileText, Hammer, Award } from "lucide-react";

const featuredTools = [
  {
    icon: BookOpen,
    title: "Book Writer GPT",
    description: "Create professionally written full books about any topic",
    emoji: "✍️",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Film,
    title: "Movie Script Writer GPT",
    description: "AI companion for industry-standard movie scripts and storytelling",
    emoji: "🎬",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: Clock,
    title: "Time Machine GPT",
    description: "Explore the past, potential futures, and alternative realities",
    emoji: "🌀",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Car,
    title: "Automobile GPT",
    description: "Comprehensive automotive expert for deals, repairs, and maintenance advice",
    emoji: "🏎️",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: GraduationCap,
    title: "College Degree GPT",
    description: "Complete college education experience with accessible learning resources",
    emoji: "🎓",
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Shield,
    title: "Survivalist GPT",
    description: "Comprehensive survival companion with practical knowledge and experience",
    emoji: "🛡️",
    color: "from-gray-500 to-slate-600"
  }
];

const allTools = [
  ...featuredTools,
  {
    icon: Leaf,
    title: "Sustainable Futures GPT",
    description: "Assist governments and communities in making data-driven decisions for environmental sustainability",
    emoji: "🌍",
    color: "from-green-600 to-emerald-700"
  },
  {
    icon: Zap,
    title: "Nikola Tesla GPT",
    description: "Investigate scientific mysteries and craft groundbreaking theories with innovative brilliance",
    emoji: "⚡",
    color: "from-purple-600 to-indigo-700"
  },
  {
    icon: Search,
    title: "Food Quality Inspector GPT",
    description: "Smart companion for grocery shopping, assessing food quality and safety",
    emoji: "🛒",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: Home,
    title: "Home Renovator GPT",
    description: "AI-powered home improvement assistant for repairs and renovations",
    emoji: "🏡",
    color: "from-brown-500 to-orange-700"
  },
  {
    icon: Fish,
    title: "Fisherman GPT",
    description: "Expert virtual fishing assistant for finding spots, gear, and regulations",
    emoji: "🎣",
    color: "from-blue-600 to-cyan-700"
  },
  {
    icon: Sprout,
    title: "Agronomus",
    description: "AI Farming Expert for agricultural guidance and crop optimization",
    emoji: "🌱",
    color: "from-green-700 to-lime-600"
  },
  {
    icon: Gem,
    title: "Antique & Collectible Appraisal GPT",
    description: "Expert appraisals and valuations of antiques, collectibles, and coins",
    emoji: "💎",
    color: "from-purple-700 to-pink-600"
  },
  {
    icon: Eye,
    title: "Oraculum",
    description: "Reveals hidden systems, symbols, and histories shaping our world",
    emoji: "👁️",
    color: "from-gray-700 to-purple-800"
  },
  {
    icon: Brain,
    title: "Trivia Night GPT",
    description: "AI-powered trivia showdown for friends and family",
    emoji: "🧠",
    color: "from-indigo-600 to-purple-700"
  },
  {
    icon: Heart,
    title: "Veterinarian GPT",
    description: "Compassionate virtual veterinarian offering expert pet health advice",
    emoji: "🐾",
    color: "from-pink-600 to-red-600"
  },
  {
    icon: Shield,
    title: "Insurance Claims GPT",
    description: "Advanced claims management and estimation with detailed damage analysis",
    emoji: "🔒",
    color: "from-blue-700 to-indigo-800"
  },
  {
    icon: Leaf,
    title: "Cannabis GPT",
    description: "Multimodal AI for legal cannabis users, growers, and professionals",
    emoji: "🌿",
    color: "from-green-600 to-teal-700"
  },
  {
    icon: Scale,
    title: "Probability GPT",
    description: "Discover truth with precise probability scores and unbiased analysis",
    emoji: "⚖️",
    color: "from-gray-600 to-slate-700"
  },
  {
    icon: BookOpen,
    title: "Learn Any Course GPT",
    description: "AI-powered tutor for comprehensive courses on any subject",
    emoji: "📚",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: Gavel,
    title: "Public Defender GPT",
    description: "Advanced legal assistant for defense research and trial strategy",
    emoji: "⚖️",
    color: "from-gray-800 to-blue-900"
  },
  {
    icon: Home,
    title: "Property Data Finder GPT",
    description: "Precise property information from market value to geocoordinates",
    emoji: "🏠",
    color: "from-orange-600 to-red-700"
  },
  {
    icon: Calculator,
    title: "Algebraic Expression Inventor GPT",
    description: "Tackle mathematical challenges with creativity and precision",
    emoji: "🔢",
    color: "from-purple-600 to-indigo-700"
  },
  {
    icon: Code,
    title: "Bolt.New",
    description: "AI-powered web development platform for full-stack applications",
    emoji: "⚡",
    color: "from-cyan-600 to-blue-700"
  },
  {
    icon: Gamepad2,
    title: "Multitasker GPT",
    description: "Handle multiple unrelated tasks simultaneously with efficiency",
    emoji: "🎯",
    color: "from-red-600 to-pink-700"
  },
  {
    icon: TrendingUp,
    title: "Fortune Teller GPT",
    description: "Data-backed forecasts using statistical modeling and predictive algorithms",
    emoji: "🔮",
    color: "from-purple-700 to-pink-800"
  },
  {
    icon: Brain,
    title: "Learn Any Skill GPT",
    description: "Dynamic educational assistant guiding you from beginner to expert",
    emoji: "🎯",
    color: "from-green-700 to-blue-700"
  },
  {
    icon: Gem,
    title: "Materiumor",
    description: "Next-generation valuation assistant for physical and digital assets",
    emoji: "💰",
    color: "from-yellow-600 to-orange-700"
  },
  {
    icon: Code,
    title: "Lovable.dev",
    description: "AI-powered platform transforming ideas into web applications without coding",
    emoji: "💻",
    color: "from-blue-700 to-purple-800"
  },
  {
    icon: Briefcase,
    title: "MicroSaaS GPT",
    description: "Turn niche ideas into fully structured, ready-to-build SaaS applications",
    emoji: "🚀",
    color: "from-indigo-600 to-purple-700"
  },
  {
    icon: Brain,
    title: "Albert Einstein GPT",
    description: "Advanced AI embodiment of Einstein's intellect and scientific rigor",
    emoji: "🧮",
    color: "from-gray-700 to-blue-800"
  }
];

const FeaturedTools = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">AI Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular AI-powered tools designed to enhance your creative process
          </p>
        </div>
        
        {/* Featured Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredTools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {tool.emoji}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-ai-purple transition-colors">
                  {tool.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/80 hover:to-ai-blue/80 text-white transition-all duration-300">
                  Try Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Tools Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Complete <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">AI Tools Collection</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allTools.slice(6).map((tool, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300`}>
                  {tool.emoji}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-ai-purple transition-colors">
                  {tool.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {tool.description}
                </CardDescription>
                <Button size="sm" className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/80 hover:to-ai-blue/80 text-white transition-all duration-300">
                  Try Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white px-8 py-4 rounded-xl transition-all duration-300"
          >
            View All AI Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
