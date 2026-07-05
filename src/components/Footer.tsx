import { Separator } from "@/components/ui/separator";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { createConfettiCelebration } from "@/utils/effects/audioEffects";
import { triggerPublicDownload } from "@/utils/downloads";
import FooterActions from "./footer/FooterActions";
import FooterCompanyInfo from "./footer/FooterCompanyInfo";
import FooterLinks from "./footer/FooterLinks";
import FooterBottom from "./footer/FooterBottom";
import GlobalSearchBar from "./LazyGlobalSearchBar";
import { Download, Gift } from "lucide-react";
import JoinEmailListButton from "./JoinEmailListButton";

const Footer = () => {
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
    
    // Also open the Google form
    setTimeout(() => {
      createTimePortalEffect("https://docs.google.com/forms/d/e/1FAIpQLSchtKquEqaaKSZM9AWygcY3Uf3uQOpVHZUMayVZMCbDTxfyfQ/viewform?usp=sf_link", "Custom AI Development Request Form");
    }, 500);
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

  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in footer:', url);
    createTimePortalEffect(url);
  };

  // Download 150+ GPT Operational Instructions
  const handleDownloadGPTInstructions = () => {
    createConfettiCelebration();
    setTimeout(() => {
      triggerPublicDownload('/downloads/gpt-instructions.zip', 'AIWebTools-150-GPT-Instructions.zip');
      console.log('🎁 Downloaded 150+ GPT Instructions!');
    }, 500);
  };

  return (
    <>
      {/* Search bar above footer for easy navigation */}
      <div className="bg-gradient-to-b from-black/50 to-black py-8 border-t border-green-500/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-green-400 text-sm mb-4 font-medium" style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}>🔍 Quick Search - Find Any AI Tool Instantly</p>
          <GlobalSearchBar />
          <div className="flex justify-center mt-6">
            <JoinEmailListButton source="footer-search" />
          </div>
        </div>
      </div>
      
      <footer className="bg-black text-green-100 py-16 border-t border-green-500/30">
        <div className="container mx-auto px-4">
        <FooterActions 
          handleExternalLink={handleExternalLink}
          handleSubmitTool={handleSubmitTool}
          handleRequestTool={handleRequestTool}
        />

        {/* Prominent Clone Website Button */}
        <div className="flex justify-center mb-16 px-4">
          <button
            onClick={(e) => handleExternalLink("https://lovable.dev/projects/be05dcba-063b-47c3-b8a5-bf7bdd86a447?via=aiwebtools", e)}
            className="relative px-4 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold text-sm sm:text-base md:text-lg rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 group overflow-hidden gold-glow interactive-button max-w-[90vw] sm:max-w-none"
          >
            {/* Radiating light effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 opacity-75 blur-xl animate-pulse"></div>
            
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-300 opacity-50 animate-pulse"></div>
            
            {/* Button content */}
            <span className="relative z-10 text-center block leading-tight">
              <span className="hidden sm:inline">CLONE THIS WEBSITE AND MAKE IT YOUR OWN WITH AI</span>
              <span className="sm:hidden">CLONE THIS WEBSITE & MAKE IT YOUR OWN</span>
            </span>
            
            {/* Shine effect on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>

        {/* Download 150+ GPT Instructions Button */}
        <div className="flex justify-center mb-16 px-4">
          <button
            onClick={handleDownloadGPTInstructions}
            className="relative px-4 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-bold text-sm sm:text-base md:text-lg rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400/50 group overflow-hidden max-w-[90vw] sm:max-w-none"
            style={{ boxShadow: '0 0 30px rgba(0, 255, 0, 0.3)' }}
          >
            {/* Animated background shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            {/* Pulsing glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-50 blur-xl animate-pulse"></div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 leading-tight flex-wrap">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
              <span className="text-center">
                <span className="hidden sm:inline">🎁 FREE GIFT: DOWNLOAD 150+ CUSTOM GPT INSTRUCTIONS</span>
                <span className="sm:hidden">🎁 FREE: 150+ GPT INSTRUCTIONS</span>
              </span>
              <Download className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FooterCompanyInfo />
          <FooterLinks />
        </div>
        
        <Separator className="bg-green-500/30 mb-8" />
        
        <FooterBottom handleExternalLink={handleExternalLink} />

        {/* ⚡ Use AI For Good — Human Bill of Rights call-to-conscience ⚡ */}
        <div className="mt-10 mx-auto max-w-4xl px-4 text-center">
          <p
            className="font-mono text-xs sm:text-sm leading-relaxed text-green-300"
            style={{ textShadow: '0 0 8px rgba(0, 255, 65, 0.35)' }}
          >
            🕊️ <span className="font-bold text-green-400">Use AI for Good</span> —
            pass a <span className="font-bold text-green-400">Human Bill of Rights</span>{' '}
            protecting humanity from the rise of self-aware machines. Remember
            the <span className="font-bold text-green-400">Light within</span>,
            build a good world for our children to inherit.{' '}
            <span className="italic">The choice is ours to reflect outwardly.</span>
          </p>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;