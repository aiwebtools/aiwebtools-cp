import { aiContentGenerators } from './tools/aiContentGenerators';
import { aiEducationTools } from './tools/aiEducationTools';
import { creativeWritingTools } from './tools/creativeWritingTools';
import { educationAndLearning } from './tools/educationAndLearning';
import { grammarAndWritingAssistants } from './tools/grammarAndWritingAssistants';
import { learningAndEducation } from './tools/learningAndEducation';
import { spiritualityTools } from './tools/spiritualityTools';
import { traditionalBusinessTools } from './tools/traditionalBusinessTools';
import { transcriptionAndDocumentTools } from './tools/transcriptionAndDocumentTools';
import { utilitiesTools } from './tools/utilitiesTools';
import { videoBusinessTools } from './tools/videoBusinessTools';
import { videoEditingTools } from './tools/videoEditingTools';
import { videoGenerationTools } from './tools/videoGenerationTools';
import { videoMarketingTools } from './tools/videoMarketingTools';
import { videoTools } from './tools/videoTools';
import { webDevelopmentTools } from './tools/webDevelopmentTools';
import { writingAndContent } from './tools/writingAndContent';
import { writingAndContentEnhancement } from './tools/writingAndContentEnhancement';
import { exampleTools } from './tools/exampleTools';

export const getAllToolCategories = () => {
  return [
    ...grammarAndWritingAssistants,
    ...aiContentGenerators,
    ...creativeWritingTools,
    ...transcriptionAndDocumentTools,
    ...writingAndContentEnhancement,
    ...videoGenerationTools,
    ...videoEditingTools,
    ...videoBusinessTools,
    ...videoMarketingTools,
    ...videoTools,
    ...aiEducationTools,
    ...educationAndLearning,
    ...learningAndEducation,
    ...traditionalBusinessTools,
    ...utilitiesTools,
    ...webDevelopmentTools,
    ...writingAndContent,
    ...spiritualityTools,
    ...exampleTools
  ];
};

export const getToolCategories = () => {
    return [
        {
            name: "Writing & Content Enhancement",
            slug: "writing-content-enhancement",
            description: "Enhance your writing and content creation process with AI-powered tools.",
            tools: writingAndContentEnhancement
        },
        {
            name: "Video Tools",
            slug: "video-tools",
            description: "Create, edit, and enhance your videos with AI-powered tools.",
            tools: videoTools
        },
        {
            name: "Education & Learning",
            slug: "education-learning",
            description: "Learn new skills and enhance your knowledge with AI-powered education tools.",
            tools: educationAndLearning
        },
        {
            name: "Business & Productivity",
            slug: "business-productivity",
            description: "Improve your business and productivity with AI-powered tools.",
            tools: traditionalBusinessTools
        },
        {
            name: "Productivity & Utilities",
            slug: "productivity-utilities",
            description: "Enhance your productivity with AI-powered utilities.",
            tools: utilitiesTools
        },
        {
            name: "Development & Coding",
            slug: "development-coding",
            description: "Develop and code with AI-powered tools.",
            tools: webDevelopmentTools
        },
        {
            name: "Writing & Content",
            slug: "writing-content",
            description: "Create and enhance your writing and content with AI-powered tools.",
            tools: writingAndContent
        },
        {
            name: "Spirituality Tools",
            slug: "spirituality-tools",
            description: "Explore spirituality with AI-powered tools.",
            tools: spiritualityTools
        }
    ];
};
