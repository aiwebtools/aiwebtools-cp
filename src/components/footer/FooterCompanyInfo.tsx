
import { MapPin, Phone, Mail, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FooterCompanyInfo = () => {
  const navigate = useNavigate();

  const scrollToHome = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
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
  );
};

export default FooterCompanyInfo;
