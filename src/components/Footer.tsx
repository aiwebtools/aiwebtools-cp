
import { Separator } from "@/components/ui/separator";
import { Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
              AI Web Tools LLC
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Crafting the future of AI-powered web tools and services. Empowering creators, businesses, and innovators worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>475-800-8096</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Popular Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-ai-cyan transition-colors">Book Writer GPT</a></li>
              <li><a href="#" className="hover:text-ai-cyan transition-colors">Movie Script Writer</a></li>
              <li><a href="#" className="hover:text-ai-cyan transition-colors">Time Machine GPT</a></li>
              <li><a href="#" className="hover:text-ai-cyan transition-colors">College Degree GPT</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Premium Suites</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-ai-cyan transition-colors">Movie Maker Studio</a></li>
              <li><a href="#" className="hover:text-ai-cyan transition-colors">StageMaster AI</a></li>
              <li><a href="#" className="hover:text-ai-cyan transition-colors">ImmortalizeMe™</a></li>
              <li><a href="#" className="hover:text-ai-cyan transition-colors">GodMode GPT</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-ai-cyan transition-colors">Free AI Tools List</a></li>
              <li><a href="#" className="hover:text-ai-cyan transition-colors">Open Source Prompts</a></li>
              <li><a href="#" className="hover:text-ai-cyan transition-colors">Domain Services</a></li>
              <li><a href="#" className="hover:text-ai-cyan transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400">
            © 2024 AI Web Tools LLC. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-gray-400">
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
