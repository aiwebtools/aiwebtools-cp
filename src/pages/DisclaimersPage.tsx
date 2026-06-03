
import { useEffect } from "react";
import { Shield, AlertTriangle, Scale, FileText, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import DeferredMount from "@/components/DeferredMount";
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
    <div className="min-h-screen bg-black relative">
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
      
      <DeferredMount delay={50}><AnimatedBackground /></DeferredMount>
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center text-white text-4xl shadow-lg shadow-yellow-500/30 glow-effect">
                <Scale className="w-12 h-12" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent cyber-glow mb-4">
                Legal Disclaimers & Terms of Service
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive legal information for all AI Web Tools GPT applications and third-party services
              </p>
            </div>

            {/* General Terms of Service */}
            <Card className="mb-8 bg-gray-900/80 backdrop-blur-md shadow-2xl shadow-cyan-500/20 border border-cyan-500/30 neon-border">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400 flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  AI Web Tools Terms of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Service Overview</h3>
                  <p>AI Web Tools operates a directory service connecting users to AI tools and applications. We create original GPT tools and list third-party services for user convenience.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">User Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Users must be 18+ or have parental consent to use our services</li>
                    <li>Users are responsible for compliance with all applicable laws</li>
                    <li>Users must verify information independently before making important decisions</li>
                    <li>Users assume full responsibility for actions taken based on AI-generated content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Limitation of Liability</h3>
                  <p>AI Web Tools provides services "as is" without warranties. We are not liable for any direct, indirect, incidental, or consequential damages arising from use of our services or listed tools.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Third-Party Services</h3>
                  <p>Our directory includes third-party AI tools that we do not own or control. We are not responsible for their content, availability, terms, or actions. Each third-party service has its own terms and privacy policies.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Contact Information</h3>
                  <p>
                    For questions about these terms: {" "}
                    <button 
                      onClick={(e) => handleExternalLink("mailto:contact@ai-webtools.com", e)}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors underline"
                    >
                      contact@ai-webtools.com
                    </button>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AI Web Tools Original GPTs Disclaimer */}
            {/* Connecticut AI Disclosure (State Law Compliance) */}
            <Card className="mb-8 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border border-emerald-500/40 rounded-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-400 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Connecticut AI Disclosure & Transparency Notice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p className="text-emerald-300 text-sm font-semibold">
                  AI Web Tools LLC is headquartered in the State of Connecticut. In compliance with Connecticut's AI transparency and disclosure standards, the following notices apply to all users of this platform.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">General AI Interaction Notice</h3>
                  <p>
                    Certain features of this platform utilize artificial intelligence ("AI"). By using our services, you acknowledge and understand that you may be interacting with AI-generated systems, agents, chatbots, content, recommendations, images, audio, video, or other automated outputs rather than a human. AI-generated outputs may contain errors, inaccuracies, omissions, biases, or outdated information. Users are solely responsible for independently verifying any information before relying upon it for business, legal, financial, medical, compliance, safety, or other important decisions. AI Web Tools LLC makes no guarantee regarding the accuracy, completeness, reliability, or suitability of AI-generated content and disclaims all liability arising from its use.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">Employment & HR-Related AI Tools</h3>
                  <p>
                    Where AI-assisted decision-making tools are utilized for employment-related functions, users acknowledge that such tools are intended solely to assist human decision-makers and shall not be relied upon as the sole basis for employment decisions. Users remain responsible for ensuring compliance with all applicable federal, state, and local employment and anti-discrimination laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">AI-Generated Images, Video & Media</h3>
                  <p>
                    Content generated through AI image, video, audio, or media generation tools may depict fictional, altered, simulated, or synthetic representations and should not be assumed to reflect actual events, persons, statements, endorsements, or factual circumstances unless independently verified.
                  </p>
                </div>
                <p className="text-xs text-gray-400 border-t border-emerald-500/30 pt-3">
                  This notice is provided to satisfy Connecticut AI disclosure standards and does not constitute legal advice. Users with specific compliance questions should consult Connecticut counsel.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  AI Web Tools Original GPTs Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-cyan-300 font-semibold mb-2">Educational & Informational Use Only</p>
                  <p>All AI Web Tools GPTs are provided for educational, informational, and research purposes only. They should not be considered professional advice and require verification with qualified professionals.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">No Professional Advice</h3>
                  <p>Our GPTs do not provide medical, legal, financial, or other professional advice. Users must consult appropriate professionals for such guidance.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Accuracy Limitations</h3>
                  <p>While we strive for accuracy, AI-generated content may contain errors, omissions, or outdated information. Users must verify all information independently.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">User Responsibility</h3>
                  <p>Users assume full responsibility for any actions taken based on AI-generated content. We are not liable for any consequences resulting from use of our GPTs.</p>
                </div>
              </CardContent>
            </Card>

            {/* Individual Tool Disclaimers */}
            <Card className="mb-8 bg-gray-900/80 backdrop-blur-md shadow-2xl shadow-purple-500/20 border border-purple-500/30 neon-border">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Individual Tool Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {toolDisclaimers.map((disclaimer, index) => (
                    <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">{disclaimer.title}</h3>
                      <p className="text-gray-300 text-sm">{disclaimer.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                  <p className="text-purple-300 text-sm">
                    <strong>Note:</strong> This list includes our most popular tools. For tools not listed here, 
                    the general AI Web Tools disclaimer applies. Each tool may have specific limitations based on its function.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Critical Safety Warnings */}
            <Card className="mb-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-red-400 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Critical Safety Warnings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="bg-red-900/40 border border-red-500/60 rounded-lg p-4">
                  <h3 className="text-red-300 font-semibold mb-2">🍄 Fungus/Mushroom Identification</h3>
                  <p className="text-red-200 text-sm">
                    <strong>NEVER eat mushrooms identified by AI.</strong> Misidentification can result in severe illness or death. 
                    Always consult multiple expert sources and professional mycologists before consuming any wild fungi.
                  </p>
                </div>

                <div className="bg-red-900/40 border border-red-500/60 rounded-lg p-4">
                  <h3 className="text-red-300 font-semibold mb-2">🔫 Firearms Safety</h3>
                  <p className="text-red-200 text-sm">
                    AI guidance does not replace certified firearms training. Always follow proper safety protocols 
                    and comply with local, state, and federal firearms laws.
                  </p>
                </div>

                <div className="bg-red-900/40 border border-red-500/60 rounded-lg p-4">
                  <h3 className="text-red-300 font-semibold mb-2">🏥 Medical Information</h3>
                  <p className="text-red-200 text-sm">
                    Health-related AI tools provide general information only. Never delay seeking professional medical 
                    care based on AI advice. Contact emergency services for urgent medical situations.
                  </p>
                </div>

                <div className="bg-red-900/40 border border-red-500/60 rounded-lg p-4">
                  <h3 className="text-red-300 font-semibold mb-2">💰 Financial Decisions</h3>
                  <p className="text-red-200 text-sm">
                    Trading and investment AI tools provide information only, not financial advice. All investments 
                    carry risk. Consult licensed financial advisors before making investment decisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400 flex items-center">
                  <ExternalLink className="w-6 h-6 mr-3" />
                  Contact & Legal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Contact Information</h3>
                  <p>
                    For questions, concerns, or legal matters: {" "}
                    <button 
                      onClick={(e) => handleExternalLink("mailto:contact@ai-webtools.com", e)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                    >
                      contact@ai-webtools.com
                    </button>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Updates to Terms</h3>
                  <p>We may update these terms and disclaimers periodically. Continued use of our services constitutes acceptance of updated terms.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Governing Law</h3>
                  <p>These terms are governed by the laws of the jurisdiction where AI Web Tools is incorporated, without regard to conflict of law principles.</p>
                </div>

                <div className="border-t border-green-500/30 pt-4 mt-4">
                  <p className="text-sm text-gray-400">
                    Last Updated: {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
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
