
import { Tool } from "@/types/tools";

export const generateToolDisclaimer = (tool: Tool): string => {
  const baseDisclaimer = `
**IMPORTANT LEGAL DISCLAIMER**

This AI tool ("${tool.title}") is provided for educational, informational, and research purposes only. By using this tool, you acknowledge and agree to the following:

**Tool Capabilities and Limitations:**
`;

  let specificCapabilities = "";
  let limitations = "";

  // Generate specific disclaimers based on tool category
  switch (tool.category?.toLowerCase()) {
    case "content creation":
    case "writing":
      specificCapabilities = `
• ${tool.title} can assist with generating text, content ideas, and writing suggestions
• Designed to help with creative writing, copywriting, and content development
• May provide templates, prompts, and automated text generation`;
      limitations = `
• Generated content may not be accurate, factual, or suitable for professional use
• Results may contain biases, errors, or inappropriate content
• Content should be reviewed, fact-checked, and edited before publication
• Not suitable for legal, medical, or financial advice`;
      break;

    case "image generation":
    case "art":
    case "design":
      specificCapabilities = `
• ${tool.title} can generate, edit, or enhance digital images and artwork
• Provides AI-powered visual content creation and design assistance
• May offer style transfer, image manipulation, or artistic rendering`;
      limitations = `
• Generated images may have artifacts, distortions, or quality issues
• Results may inadvertently replicate copyrighted content or styles
• Not suitable for professional graphics without proper review
• Image accuracy and appropriateness cannot be guaranteed`;
      break;

    case "video":
      specificCapabilities = `
• ${tool.title} can assist with video creation, editing, or enhancement
• Provides automated video processing and content generation
• May offer features like video synthesis, editing, or effects`;
      limitations = `
• Video quality and accuracy may vary significantly
• Processing times and results are not guaranteed
• Generated content may have technical flaws or inappropriate elements
• Not suitable for professional video production without verification`;
      break;

    case "audio":
    case "music":
      specificCapabilities = `
• ${tool.title} can generate, edit, or enhance audio content and music
• Provides AI-powered sound creation and audio processing
• May offer music composition, voice synthesis, or audio effects`;
      limitations = `
• Audio quality and musical accuracy cannot be guaranteed
• Generated content may inadvertently resemble copyrighted material
• Results may have technical artifacts or quality issues
• Not suitable for professional audio production without review`;
      break;

    case "business":
    case "productivity":
      specificCapabilities = `
• ${tool.title} can assist with business tasks, productivity, and workflow optimization
• Provides automated analysis, recommendations, and business insights
• May offer data processing, scheduling, or management features`;
      limitations = `
• Business recommendations are not professional advice
• Data accuracy and analysis results cannot be guaranteed
• Not suitable for critical business decisions without verification
• Financial or strategic advice should be validated by professionals`;
      break;

    case "education":
    case "learning":
      specificCapabilities = `
• ${tool.title} can provide educational content, tutoring, and learning assistance
• Offers AI-powered explanations, study aids, and educational resources
• May help with skill development and knowledge acquisition`;
      limitations = `
• Educational content accuracy cannot be guaranteed
• Not a replacement for formal education or professional instruction
• Information may be outdated, incomplete, or incorrect
• Academic work should be independently verified`;
      break;

    default:
      specificCapabilities = `
• ${tool.title} provides AI-powered functionality in the ${tool.category || 'general'} category
• Designed to assist users with automated tasks and intelligent processing
• May offer various features depending on the specific tool implementation`;
      limitations = `
• Tool functionality and accuracy cannot be guaranteed
• Results may be unpredictable, biased, or inappropriate
• Not suitable for critical applications without proper validation
• Performance may vary based on input and usage conditions`;
  }

  const fullDisclaimer = `${baseDisclaimer}${specificCapabilities}

**Limitations and Risks:**${limitations}

**General Terms:**
• **No Warranty:** This tool is provided "as is" without any warranties of any kind
• **User Responsibility:** You are solely responsible for verifying and validating all results
• **Third-Party Service:** This tool may be operated by a third party with separate terms
• **Data Privacy:** Be cautious about sharing sensitive or personal information
• **Educational Use Only:** Results are for learning and research purposes only
• **No Professional Advice:** This tool does not provide professional, legal, medical, or financial advice

**Limitation of Liability:**
We disclaim all liability for any damages, losses, or consequences arising from the use of this AI tool. Users assume all risks associated with tool usage.

**By proceeding to use ${tool.title}, you acknowledge that you have read, understood, and agree to these terms and limitations.**
`;

  return fullDisclaimer;
};
