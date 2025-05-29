import { Separator } from "@/components/ui/separator";
import { Globe, Mail, Phone, Home, MapPin, Shield, Plus, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";

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

  const handleRequestTool = () => {
    const subject = encodeURIComponent('AI Tool Request - New Tool Build');
    const body = encodeURIComponent(`Hi AI Web Tools Team,

I would like to request a new AI tool to be built for your website.

Tool Details:
1. What should this AI tool do? (Describe the main functionality)
   [Your answer here]

2. What category would this tool fit into? (e.g., Writing, Business, Creative, etc.)
   [Your answer here]

3. Who is the target audience for this tool? (e.g., Students, Professionals, Content Creators, etc.)
   [Your answer here]

4. Are there any specific features or capabilities you'd like included?
   [Your answer here]

5. Do you have any examples of similar tools or references?
   [Your answer here]

6. How would this tool benefit users?
   [Your answer here]

Additional Information:
[Any other details or requirements]

Thank you for considering my request!

Best regards,
[Your name]`);
    
    const mailtoUrl = `mailto:contact@ai-webtools.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmitTool = () => {
    const subject = encodeURIComponent('AI Tool Submission - List My Tool');
    const body = encodeURIComponent(`Hi AI Web Tools Team,

I would like to submit my AI tool to be listed on your platform.

Tool Information:
1. Tool Name:
   [Your tool name here]

2. Tool Description (brief overview):
   [Describe what your tool does]

3. Tool URL/Website:
   [Your tool's website or access link]

4. Category (e.g., Writing, Business, Creative, etc.):
   [Which category does your tool fit into]

5. Target Audience:
   [Who is your tool designed for]

6. Key Features:
   [List the main features and capabilities]

7. Pricing Model (Free, Freemium, Paid):
   [How is your tool priced]

8. Tool Logo/Icon (if available):
   [Please attach or provide link to your tool's logo]

9. Screenshots or Demo (optional):
   [Any visual examples of your tool in action]

10. Contact Information:
    Name: [Your name]
    Email: [Your email]
    Company/Organization: [If applicable]

Additional Information:
[Any other details about your tool]

I confirm that I own or have permission to submit this tool for listing.

Thank you for considering my submission!

Best regards,
[Your name]`);
    
    const mailtoUrl = `mailto:contact@ai-webtools.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  // Enhanced external link handler with time portal effect
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in footer:', url);
    createTimePortalEffect(url);
  };

  return (
    <footer className="bg-black text-cyan-100 py-16 border-t border-cyan-500/30">
      <div className="container mx-auto px-4">
        {/* Big Action Buttons */}
        <div className="text-center mb-12 space-y-4">
          <button
            onClick={(e) => handleExternalLink("https://aitools.company/terms-of-services", e)}
            className="inline-flex items-center justify-center space-x-3 px-12 py-6 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-400 hover:to-cyan-500 text-black font-bold text-lg rounded-full shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transform hover:scale-105 transition-all duration-300 border-2 border-cyan-400 hover:border-cyan-300 cyber-glow"
          >
            <Shield className="w-6 h-6" />
            <span className="text-xl">READ FULL DISCLAIMER AND TERMS OF SERVICE</span>
            <Shield className="w-6 h-6" />
          </button>
          
          <div className="pt-2 space-y-3">
            <button
              onClick={handleSubmitTool}
              className="inline-flex items-center justify-center space-x-3 px-12 py-6 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-purple-500/40 hover:shadow-purple-400/60 transform hover:scale-105 transition-all duration-300 border-2 border-purple-400 hover:border-purple-300 cyber-glow"
            >
              <Upload className="w-6 h-6" />
              <span className="text-xl">SUBMIT YOUR AI TOOL</span>
              <Upload className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleRequestTool}
              className="inline-flex items-center justify-center space-x-3 px-12 py-6 bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-500 hover:via-green-400 hover:to-green-500 text-black font-bold text-lg rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-400/60 transform hover:scale-105 transition-all duration-300 border-2 border-green-400 hover:border-green-300 cyber-glow"
            >
              <Plus className="w-6 h-6" />
              <span className="text-xl">REQUEST A TOOL BUILD</span>
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>

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
            <button 
              onClick={(e) => handleExternalLink("https://www.AiWebTools.AI", e)}
              className="text-cyan-300 hover:text-cyan-400 transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={(e) => handleExternalLink("https://openai.com/policies/privacy-policy/", e)}
                className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button 
                onClick={(e) => handleExternalLink("https://aitools.company/terms-of-services", e)}
                className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm"
              >
                Terms of Service
              </button>
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
  );
};

export default Footer;
