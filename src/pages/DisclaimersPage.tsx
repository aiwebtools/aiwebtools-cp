import { useEffect } from "react";
import { Shield, AlertTriangle, Scale, FileText, ExternalLink, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createTimePortalEffect } from "@/utils/timeEffects";

const DisclaimersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    createTimePortalEffect(url);
  };

  const toolDisclaimers = [
    {
      title: "Time Machine GPT",
      content: "Explores historical events and future scenarios through interactive simulations for educational purposes. Content is fictional and should not be considered factual. Users should verify historical facts independently."
    },
    {
      title: "College Degree GPT", 
      content: "Provides educational resources structured like college courses but does not confer accredited degrees. Credentials generated are fictional and should not be used for professional purposes."
    },
    {
      title: "Survivalist GPT",
      content: "Offers survival guidance for informational purposes only. Should not replace professional training. Users assume responsibility for their actions in survival situations."
    },
    {
      title: "Cannabis GPT",
      content: "Provides cannabis-related insights for educational purposes. Not medical advice. Users must comply with local laws. For adults 21+ in legal areas only."
    },
    {
      title: "Veterinarian GPT",
      content: "Offers general pet health advice for informational purposes only. Not a substitute for professional veterinary care. Consult licensed veterinarians for specific health concerns."
    },
    {
      title: "Insurance Claims GPT",
      content: "Assists with insurance claims management. Estimates are for guidance only and should not replace professional advice from licensed adjusters or attorneys."
    },
    {
      title: "Resurrection GPT",
      content: "Provides simulated conversations with deceased loved ones for emotional support. This is a simulation, not real interaction. Not a substitute for professional grief counseling."
    },
    {
      title: "Property Data Finder GPT",
      content: "Provides real estate information for informational purposes. Data may not be current or complete. Verify through official sources before making property decisions."
    },
    {
      title: "Public Testimony Writer GPT",
      content: "Assists in drafting legislative testimonies. Does not guarantee legislative impact. Users responsible for testimony content and any legal consequences."
    },
    {
      title: "Dr. GPT",
      content: "Provides general health information for educational purposes. Not intended to replace professional medical advice, diagnosis, or treatment. Consult healthcare providers for medical concerns."
    },
    {
      title: "Firearms Safety Instructor GPT",
      content: "Offers firearm safety guidance for informational purposes. Should not replace certified professional training. Users responsible for legal compliance and safety."
    },
    {
      title: "Trader GPT",
      content: "Provides market analysis for informational purposes only. Not financial advice. Cannot guarantee financial gains. Users responsible for trading decisions and associated risks."
    },
    {
      title: "Contract Review Bot",
      content: "Simplifies contract language for understanding. Not a substitute for legal advice. Users should consult qualified attorneys for comprehensive legal guidance."
    },
    {
      title: "Mental Wellness GPT",
      content: "Offers CBT-inspired emotional support techniques. Not a substitute for professional mental health care, therapy, or diagnosis. Seek licensed professionals for serious concerns."
    }
  ];

  return (
    <div className="min-h-screen bg-black relative divine-spacing">
      <SEOHead
        title="Legal Disclaimers & Terms of Service | AI Web Tools"
        description="Comprehensive legal disclaimers, terms of service, and user agreements for all AI Web Tools GPT applications and third-party AI tools listed in our directory."
        keywords={[
          "legal disclaimers",
          "terms of service", 
          "user agreement",
          "ai tools terms",
          "legal notices",
          "liability disclaimer",
          "ai web tools legal"
        ]}
        url="/disclaimers"
        type="article"
      />
      
      <AnimatedBackground />
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <div className="divine-container divine-section">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 divine-spacing">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-600 flex items-center justify-center text-white text-5xl shadow-2xl shadow-yellow-500/40 glow-effect interactive-button">
                <Scale className="w-14 h-14" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent cyber-glow mb-6 glow-text-effect">
                Legal Disclaimers & Terms of Service
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive legal information for all AI Web Tools GPT applications and third-party services
              </p>
            </div>

            {/* Important Website Disclaimer */}
            <Card className="mb-12 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-2 border-blue-500/40 rounded-2xl backdrop-blur-sm shadow-2xl shadow-blue-500/20 neon-border divine-spacing">
              <CardHeader>
                <CardTitle className="text-3xl text-blue-400 flex items-center glow-text-effect">
                  <Info className="w-8 h-8 mr-4" />
                  Important Website Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-300">
                <div className="bg-blue-900/30 border-2 border-blue-500/40 rounded-xl p-6 divine-spacing">
                  <p className="text-blue-300 font-semibold mb-3 text-lg">📋 Informational, Educational & Research Purposes Only</p>
                  <p className="text-lg leading-relaxed">
                    This website and all AI tools listed in our directory are provided for <strong>informational, educational, and research purposes only</strong>. 
                    The content, tools, and services should not be considered as professional advice, recommendations, or endorsements for any specific purpose. 
                    Users are encouraged to conduct their own research and consult qualified professionals before making any decisions based on the information provided.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* General Terms of Service */}
            <Card className="mb-12 bg-gray-900/90 backdrop-blur-md shadow-2xl shadow-cyan-500/25 border-2 border-cyan-500/40 neon-border rounded-2xl divine-spacing">
              <CardHeader>
                <CardTitle className="text-3xl text-cyan-400 flex items-center glow-text-effect">
                  <FileText className="w-8 h-8 mr-4" />
                  AI Web Tools LLC Terms of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3 glow-text-effect">Service Overview</h3>
                  <p className="text-lg leading-relaxed">AI Web Tools LLC operates a directory service connecting users to AI tools and applications. We create original GPT tools and list third-party services for user convenience.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3 glow-text-effect">User Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                    <li>Users must be 18+ or have parental consent to use our services</li>
                    <li>Users are responsible for compliance with all applicable laws</li>
                    <li>Users must verify information independently before making important decisions</li>
                    <li>Users assume full responsibility for actions taken based on AI-generated content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3 glow-text-effect">Limitation of Liability</h3>
                  <p className="text-lg leading-relaxed">AI Web Tools LLC provides services "as is" without warranties. We are not liable for any direct, indirect, incidental, or consequential damages arising from use of our services or listed tools.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3 glow-text-effect">Third-Party Services</h3>
                  <p className="text-lg leading-relaxed">Our directory includes third-party AI tools that we do not own or control. We are not responsible for their content, availability, terms, or actions. Each third-party service has its own terms and privacy policies.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3 glow-text-effect">Contact Information</h3>
                  <p className="text-lg">
                    For questions about these terms: {" "}
                    <button 
                      onClick={(e) => handleExternalLink("mailto:contact@ai-webtools.com", e)}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors underline interactive-button"
                    >
                      contact@ai-webtools.com
                    </button>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AI Web Tools Original GPTs Disclaimer */}
            <Card className="mb-12 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-2 border-cyan-500/40 rounded-2xl backdrop-blur-sm shadow-2xl shadow-cyan-500/25 neon-border divine-spacing">
              <CardHeader>
                <CardTitle className="text-3xl text-cyan-400 flex items-center glow-text-effect">
                  <Shield className="w-8 h-8 mr-4" />
                  AI Web Tools Original GPTs Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-300">
                <div className="bg-cyan-900/30 border-2 border-cyan-500/40 rounded-xl p-6 divine-spacing">
                  <p className="text-cyan-300 font-semibold mb-3 text-lg">📚 Educational & Informational Use Only</p>
                  <p className="text-lg leading-relaxed">All AI Web Tools GPTs are provided for educational, informational, and research purposes only. They should not be considered professional advice and require verification with qualified professionals.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3 glow-text-effect">No Professional Advice</h3>
                  <p className="text-lg leading-relaxed">Our GPTs do not provide medical, legal, financial, or other professional advice. Users must consult appropriate professionals for such guidance.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3 glow-text-effect">Accuracy Limitations</h3>
                  <p className="text-lg leading-relaxed">While we strive for accuracy, AI-generated content may contain errors, omissions, or outdated information. Users must verify all information independently.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3 glow-text-effect">User Responsibility</h3>
                  <p className="text-lg leading-relaxed">Users assume full responsibility for any actions taken based on AI-generated content. We are not liable for any consequences resulting from use of our GPTs.</p>
                </div>
              </CardContent>
            </Card>

            {/* Individual Tool Disclaimers */}
            <Card className="mb-12 bg-gray-900/90 backdrop-blur-md shadow-2xl shadow-purple-500/25 border-2 border-purple-500/40 neon-border rounded-2xl divine-spacing">
              <CardHeader>
                <CardTitle className="text-3xl text-purple-400 flex items-center glow-text-effect">
                  <AlertTriangle className="w-8 h-8 mr-4" />
                  Individual Tool Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8">
                  {toolDisclaimers.map((disclaimer, index) => (
                    <div key={index} className="border-b-2 border-gray-700/50 pb-6 last:border-b-0 divine-spacing">
                      <h3 className="text-xl font-semibold text-purple-400 mb-3 glow-text-effect">{disclaimer.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{disclaimer.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-purple-900/30 border-2 border-purple-500/40 rounded-xl divine-spacing">
                  <p className="text-purple-300 text-lg">
                    <strong>Note:</strong> This list includes our most popular tools. For tools not listed here, 
                    the general AI Web Tools disclaimer applies. Each tool may have specific limitations based on its function.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Critical Safety Warnings */}
            <Card className="mb-12 bg-gradient-to-r from-red-900/40 to-orange-900/40 border-2 border-red-500/40 rounded-2xl backdrop-blur-sm shadow-2xl shadow-red-500/25 neon-border divine-spacing">
              <CardHeader>
                <CardTitle className="text-3xl text-red-400 flex items-center glow-text-effect">
                  <AlertTriangle className="w-8 h-8 mr-4" />
                  Critical Safety Warnings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-300">
                <div className="bg-red-900/50 border-2 border-red-500/60 rounded-xl p-6 divine-spacing">
                  <h3 className="text-red-300 font-semibold mb-3 text-lg">🍄 Fungus/Mushroom Identification</h3>
                  <p className="text-red-200 text-lg leading-relaxed">
                    <strong>NEVER eat mushrooms identified by AI.</strong> Misidentification can result in severe illness or death. 
                    Always consult multiple expert sources and professional mycologists before consuming any wild fungi.
                  </p>
                </div>

                <div className="bg-red-900/50 border-2 border-red-500/60 rounded-xl p-6 divine-spacing">
                  <h3 className="text-red-300 font-semibold mb-3 text-lg">🔫 Firearms Safety</h3>
                  <p className="text-red-200 text-lg leading-relaxed">
                    AI guidance does not replace certified firearms training. Always follow proper safety protocols 
                    and comply with local, state, and federal firearms laws.
                  </p>
                </div>

                <div className="bg-red-900/50 border-2 border-red-500/60 rounded-xl p-6 divine-spacing">
                  <h3 className="text-red-300 font-semibold mb-3 text-lg">🏥 Medical Information</h3>
                  <p className="text-red-200 text-lg leading-relaxed">
                    Health-related AI tools provide general information only. Never delay seeking professional medical 
                    care based on AI advice. Contact emergency services for urgent medical situations.
                  </p>
                </div>

                <div className="bg-red-900/50 border-2 border-red-500/60 rounded-xl p-6 divine-spacing">
                  <h3 className="text-red-300 font-semibold mb-3 text-lg">💰 Financial Decisions</h3>
                  <p className="text-red-200 text-lg leading-relaxed">
                    Trading and investment AI tools provide information only, not financial advice. All investments 
                    carry risk. Consult licensed financial advisors before making investment decisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-green-900/40 to-blue-900/40 border-2 border-green-500/40 rounded-2xl backdrop-blur-sm shadow-2xl shadow-green-500/25 neon-border divine-spacing">
              <CardHeader>
                <CardTitle className="text-3xl text-green-400 flex items-center glow-text-effect">
                  <ExternalLink className="w-8 h-8 mr-4" />
                  Contact & Legal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3 glow-text-effect">Contact Information</h3>
                  <p className="text-lg">
                    For questions, concerns, or legal matters: {" "}
                    <button 
                      onClick={(e) => handleExternalLink("mailto:contact@ai-webtools.com", e)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors underline interactive-button"
                    >
                      contact@ai-webtools.com
                    </button>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3 glow-text-effect">Updates to Terms</h3>
                  <p className="text-lg leading-relaxed">We may update these terms and disclaimers periodically. Continued use of our services constitutes acceptance of updated terms.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3 glow-text-effect">Governing Law</h3>
                  <p className="text-lg leading-relaxed">These terms are governed by the laws of the jurisdiction where AI Web Tools LLC is incorporated, without regard to conflict of law principles.</p>
                </div>

                <div className="border-t-2 border-green-500/40 pt-6 mt-6">
                  <p className="text-lg text-gray-400">
                    Last Updated: {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-base text-gray-500 mt-3 leading-relaxed">
                    By using any AI Web Tools service or accessing tools through our directory, 
                    you acknowledge that you have read, understood, and agree to be bound by these terms and disclaimers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default DisclaimersPage;
