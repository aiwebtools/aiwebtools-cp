import { Separator } from "@/components/ui/separator";
import { Globe, Mail, Phone, Home, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToHome = () => {
    // If we're already on the home page, just scroll to top
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
      navigate('/');
    }
  };

  return (
    <div>
      <footer className="bg-black text-cyan-100 py-16 border-t border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent cyber-glow">
                  AI Web Tools LLC
                </h3>
                <button
                  onClick={scrollToHome}
                  className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                  title="Go to Home"
                >
                  <Home className="w-4 h-4 text-white" />
                </button>
              </div>
              <p className="text-cyan-300 leading-relaxed">
                Crafting the future of AI-powered web tools and services. Empowering creators, businesses, and innovators worldwide.
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-cyan-300">
                  <MapPin className="w-4 h-4" />
                  <span>One World Drive, Earth</span>
                </div>
                <a 
                  href="tel:+14758008096" 
                  className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(475) 800-8096</span>
                </a>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-cyan-100">Popular Tools</h4>
              <ul className="space-y-2 text-cyan-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Book Writer GPT</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Movie Script Writer</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Time Machine GPT</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">College Degree GPT</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-cyan-100">Tool Suites</h4>
              <ul className="space-y-2 text-cyan-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Movie Maker Studio</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">StageMaster AI</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">ImmortalizeMe™</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">GodMode GPT</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-cyan-100">Resources</h4>
              <ul className="space-y-2 text-cyan-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Free AI Tools List</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Open Source Prompts</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Domain Services</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-cyan-500/30 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <a 
                href="https://www.AiWebTools.AI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-400 transition-colors"
              >
                © 2025 AI WEB TOOLS LLC All rights reserved.
              </a>
              <div className="flex space-x-4">
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a 
                  href="https://aitools.company/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-cyan-300">
              <span className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Launch your next idea with .aiwebtools or .ai-tools</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Personal Note Section */}
      <div className="bg-black/95 text-center py-8 px-4 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-xs text-cyan-300/80 leading-relaxed space-y-3">
          <p className="text-sm font-medium text-cyan-200 mb-3">
            Best of luck on your inspiring AI journey!<br />
            We Thank You for Visiting AiTools.Studio
          </p>
          
          <p>The future is unwritten — it can be shaped by human choice and collective action.</p>
          <p>Knowledge and technology are not ends in themselves; they are tools meant to serve people, helping each of us fulfill our potential.</p>
          <p>Power should be decentralized, fairness upheld, and human dignity honored through creativity, uniqueness, and compassion.</p>
          <p>Let justice, integrity, and imagination guide us toward building a better world — not through control, but through cooperation.</p>
          <p>We offer these tools and ideas freely, without seeking profit, because access to opportunity should not depend on status or wealth.</p>
          <p>Together, we can create a world where knowledge is a right, not a privilege, and where progress benefits everyone.</p>
          <p>The accompanying art reflects this vision — a mirror of our shared humanity, a map guiding us forward through thoughtful choices.</p>
          <p>Let us move with courage and open minds — for the path ahead is ours to shape, together. 🕊️</p>
          
          <p className="text-sm font-medium text-cyan-400 mt-4 pt-2">
            "Choose your path. The future is yours to create." - KB
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
