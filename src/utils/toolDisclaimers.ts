
import { Tool } from "@/types/tools";

export const generateToolDisclaimer = (tool: Tool): string => {
  const toolTitle = tool.title;
  
  // Generate specific disclaimers based on exact tool titles
  if (toolTitle.includes("Book Writer GPT")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI book writing tool is provided for creative and educational purposes only. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities:**
• Creates professionally written full books with well-structured content
• Provides seamless page-to-page continuity and engaging dialogue
• Offers captivating storytelling assistance and narrative development

**Important Limitations:**
• Generated content may require significant editing and fact-checking
• AI-created books may inadvertently resemble existing copyrighted works
• Content accuracy, originality, and quality cannot be guaranteed
• Not suitable for academic, legal, or professional publication without thorough review
• Authors remain responsible for ensuring originality and avoiding plagiarism

**Copyright and Publishing:**
• You are responsible for verifying the originality of all generated content
• AI-generated content may not be eligible for certain copyright protections
• Publishers may have specific policies regarding AI-assisted content
• Professional editing and legal review recommended before publication

**By using ${toolTitle}, you acknowledge that you have read, understood, and agree to these terms and that the generated content is for creative assistance only.**`;
  }

  if (toolTitle.includes("Movie Script Writer GPT")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI screenwriting tool is provided for creative development and educational purposes only. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities:**
• Creates industry-standard movie scripts with professional formatting
• Provides scene planning, character development, and captivating dialogue
• Offers detailed descriptions and cinematic storytelling assistance

**Important Limitations:**
• Generated scripts may require substantial professional development
• Content may inadvertently resemble existing copyrighted screenplays
• Industry standards and commercial viability cannot be guaranteed
• Not suitable for production without professional script review and legal clearance

**Industry and Legal Considerations:**
• Entertainment industry has specific requirements for script submission
• Generated content may need significant revision for production readiness
• Copyright and intellectual property laws apply to all created content
• Professional representation recommended for industry submissions

**By using ${toolTitle}, you acknowledge this is a creative development tool and that professional industry guidance is essential for commercial use.**`;
  }

  if (toolTitle.includes("Time Machine GPT")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI historical simulation tool is provided for educational, entertainment, and research purposes only. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities:**
• Provides immersive historical experiences and alternative reality exploration
• Offers interactions with historical figures and time period simulations
• Creates educational content about past events and potential futures

**Important Limitations:**
• All historical interactions are AI simulations, not actual time travel
• Historical accuracy may vary and should be independently verified
• Content is interpretive and may contain historical inaccuracies or biases
• Not suitable as a primary source for academic or professional historical research

**Educational Use:**
• Designed for learning and exploration, not authoritative historical reference
• Historical figures' responses are AI interpretations, not actual personalities
• Users should consult verified historical sources for accurate information
• Time travel scenarios are fictional and for entertainment purposes only

**By using ${toolTitle}, you acknowledge this is a simulation tool for educational entertainment and not a source of historical fact.**`;
  }

  if (toolTitle.includes("Automobile GPT")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI automotive assistant is provided for informational and educational purposes only. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities:**
• Provides automotive guidance, dealership information, and repair cost assessments
• Offers maintenance advice and vehicle upgrade recommendations
• Assists with automotive decision-making and market analysis

**Important Limitations:**
• Vehicle recommendations and repair costs are estimates only
• Actual prices, availability, and conditions may vary significantly
• Not a substitute for professional mechanic inspection or automotive expertise
• Dealership information and pricing may be outdated or inaccurate

**Safety and Professional Advice:**
• Always consult qualified mechanics for vehicle safety and repair decisions
• Professional inspection required before any major automotive purchase
• Tool does not replace certified automotive diagnostics or professional advice
• Vehicle modifications should only be performed by qualified professionals

**By using ${toolTitle}, you acknowledge this is an informational tool and that professional automotive expertise is required for all major vehicle decisions.**`;
  }

  if (toolTitle.includes("College Degree GPT")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI educational tool is provided for learning assistance and educational exploration only. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities:**
• Provides comprehensive educational content mimicking college-level instruction
• Offers structured learning experiences across various academic subjects
• Delivers educational guidance and study assistance

**Important Educational Limitations:**
• Does NOT provide accredited degrees or official academic credentials
• Cannot replace formal education or accredited institutions
• Educational content accuracy and completeness cannot be guaranteed
• Not suitable for official academic transcripts or professional certification

**Academic Integrity:**
• Users are responsible for maintaining academic honesty in formal education
• Generated content should not be submitted as original work in academic settings
• Always verify information through official academic sources
• Consult with accredited institutions for official degree requirements

**By using ${toolTitle}, you acknowledge this is a learning assistance tool only and does not provide official academic credentials or replace formal education.**`;
  }

  if (toolTitle.includes("Survivalist GPT")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI survival guidance tool is provided for educational and preparedness purposes only. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities:**
• Provides survival techniques and emergency preparedness guidance
• Offers step-by-step survival strategies and practical survival knowledge
• Assists with wilderness survival and emergency scenario planning

**Critical Safety Limitations:**
• Survival advice may not be suitable for all environments or situations
• Real-world survival scenarios require professional training and experience
• Generated guidance cannot account for specific environmental conditions
• Not a substitute for professional survival training or emergency services

**Emergency Situations:**
• In actual emergencies, contact professional emergency services immediately
• Survival techniques should be practiced in safe, controlled environments first
• Medical emergencies require immediate professional medical attention
• Tool cannot assess real-time environmental dangers or conditions

**By using ${toolTitle}, you acknowledge this is educational content only and that professional survival training and emergency services are essential for actual survival situations.**`;
  }

  if (toolTitle.includes("Leonardo AI")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI image generation platform is provided for creative and commercial purposes. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities:**
• Advanced AI image generation with fine-tuned models and creative controls
• Professional-grade image creation for various commercial applications
• Customizable artistic styles and high-quality visual content generation

**Important Creative Limitations:**
• Generated images may inadvertently resemble copyrighted artwork or photography
• Quality and accuracy of generated content cannot be guaranteed
• Commercial use may require additional licensing or rights verification
• Not suitable for creating content that mimics specific artists' styles without permission

**Intellectual Property Considerations:**
• Users are responsible for ensuring generated content doesn't infringe on existing copyrights
• Commercial use of generated images may require legal review
• Platform terms of service apply to all generated content usage
• Professional legal advice recommended for commercial applications

**By using ${toolTitle}, you acknowledge responsibility for lawful use of generated images and compliance with intellectual property laws.**`;
  }

  if (toolTitle.includes("MicroSaaS GPT")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI business development tool is provided for entrepreneurial guidance and educational purposes only. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities:**
• Provides micro-SaaS business development guidance and strategic planning
• Offers assistance with software business building, launching, and scaling
• Delivers entrepreneurial advice and business development insights

**Important Business Limitations:**
• Business advice and recommendations are not professional consulting services
• Market analysis and business projections cannot be guaranteed for accuracy
• Success of business ventures depends on numerous factors beyond AI guidance
• Not a substitute for professional business, legal, or financial consulting

**Entrepreneurial Risks:**
• All business ventures involve inherent risks and potential for loss
• Professional legal and financial advice essential for business formation
• Market conditions and competition may affect business viability
• Users assume full responsibility for business decisions and outcomes

**By using ${toolTitle}, you acknowledge this is guidance only and that professional business consulting is recommended for actual business ventures.**`;
  }

  if (toolTitle.includes("Groq")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI inference platform is provided for development and computational purposes. By using this tool, you acknowledge and agree to the following:

**Platform Capabilities:**
• Ultra-fast AI inference with lightning-speed response times
• High-performance computing for real-time AI applications
• Advanced processing capabilities for AI model deployment

**Technical Limitations:**
• Processing speed and availability may vary based on system load and usage
• Platform uptime and performance cannot be guaranteed
• Generated outputs depend on underlying AI models and their inherent limitations
• Not suitable for mission-critical applications without backup systems

**Development Use:**
• Intended for development, testing, and experimental applications
• Production use requires careful consideration of reliability requirements
• Users responsible for implementing appropriate error handling and fallbacks
• Service terms and usage limits apply to all platform interactions

**By using ${toolTitle}, you acknowledge this is a development platform and that production applications require careful implementation and monitoring.**`;
  }

  if (toolTitle.includes("BIG-AGI")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This comprehensive AI platform is provided for development and advanced AI applications. By using this tool, you acknowledge and agree to the following:

**Platform Capabilities:**
• Access to multiple AI models and advanced features
• Comprehensive AI functionality for developers and power users
• Advanced AI model management and deployment capabilities

**Technical Limitations:**
• Multiple AI models may have varying capabilities and limitations
• Platform complexity requires technical expertise for optimal use
• Model outputs may vary in quality and accuracy across different AI systems
• Advanced features may require additional technical knowledge

**Developer Responsibility:**
• Users responsible for understanding limitations of each AI model used
• Proper implementation and error handling required for applications
• Advanced features should be thoroughly tested before production use
• Platform documentation and guidelines should be carefully followed

**By using ${toolTitle}, you acknowledge this is an advanced AI platform requiring technical expertise and careful implementation.**`;
  }

  if (toolTitle.includes("Game Design Document") || toolTitle.includes("Developer GPT")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI game development tool is provided for creative and development purposes only. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities:**
• Creates comprehensive game design documents and development plans
• Provides game mechanics, storyline development, and project planning assistance
• Offers guidance for indie and professional game development projects

**Development Limitations:**
• Generated game designs may inadvertently resemble existing games or concepts
• Technical implementation requires professional game development expertise
• Market viability and commercial success cannot be predicted or guaranteed
• Not a substitute for professional game development experience and testing

**Intellectual Property:**
• Users responsible for ensuring originality of game concepts and designs
• Professional legal review recommended for commercial game development
• Game industry standards and platform requirements must be independently verified
• Copyright and trademark considerations apply to all game content

**By using ${toolTitle}, you acknowledge this is a development assistance tool and that professional game development expertise is required for commercial projects.**`;
  }

  if (toolTitle.includes("ENTER THE MATRIX GPT") || toolTitle.includes("NEO👁️MATRIX GPT")) {
    return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI simulation and entertainment tool is provided for philosophical exploration and entertainment purposes only. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities:**
• Provides Matrix universe simulations and philosophical discussions
• Offers interactive experiences exploring reality, technology, and existence
• Creates immersive fictional scenarios based on The Matrix franchise

**Important Reality Distinctions:**
• All content is fictional simulation based on The Matrix movies and philosophy
• Not intended to provide real-world advice or factual information about reality
• Philosophical discussions are interpretive and not authoritative guidance
• Entertainment content should not influence real-world decisions or beliefs

**Fictional Content:**
• All interactions are based on fictional characters and scenarios
• Matrix concepts are science fiction, not scientific fact
• Users should distinguish between entertainment content and reality
• Not suitable for making real-world philosophical or life decisions

**By using ${toolTitle}, you acknowledge this is entertainment and philosophical exploration only, not guidance for real-world decisions.**`;
  }

  // Default disclaimer for tools without specific disclaimers
  return `**IMPORTANT LEGAL DISCLAIMER FOR ${toolTitle}**

This AI tool is provided for educational, informational, and research purposes only. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities:**
• ${toolTitle} provides AI-powered functionality in the ${tool.category || 'general'} category
• Designed to assist users with automated tasks and intelligent processing
• May offer various features depending on the specific tool implementation

**General Limitations:**
• Tool functionality and accuracy cannot be guaranteed
• Results may be unpredictable, biased, or inappropriate for your specific needs
• Not suitable for critical applications without proper validation and professional oversight
• Performance may vary based on input quality and usage conditions

**User Responsibility:**
• You are solely responsible for verifying and validating all results
• Professional advice should be sought for important decisions
• Tool outputs should be reviewed and fact-checked before use
• Compliance with applicable laws and regulations is your responsibility

**Limitation of Liability:**
We disclaim all liability for any damages, losses, or consequences arising from the use of this AI tool. Users assume all risks associated with tool usage.

**By using ${toolTitle}, you acknowledge that you have read, understood, and agree to these terms and limitations.**`;
};
