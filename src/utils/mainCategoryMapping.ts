
export interface MainCategory {
  name: string;
  emoji: string;
  description: string;
  subcategories: string[];
}

export const mainCategories: MainCategory[] = [
  {
    name: "ALL AI TOOLS",
    emoji: "🌟",
    description: "Complete collection of all AI tools across every category and subcategory",
    subcategories: ["*"] // Special indicator for all tools
  },
  {
    name: "AI CHAT & ASSISTANTS",
    emoji: "🤖",
    description: "Advanced AI chatbots, virtual assistants, and conversational AI platforms for various applications",
    subcategories: [
      "AI Chat Platforms",
      "AI Assistants", 
      "Advanced Chat Platforms",
      "AI Agents",
      "Conversational AI"
    ]
  },
  {
    name: "CONTENT CREATION & WRITING",
    emoji: "✍️", 
    description: "AI-powered tools for writing, content generation, copywriting, and creative writing assistance",
    subcategories: [
      "AI Content Generators",
      "Writing & Content",
      "Content Creation Tools",
      "Writing Assistants",
      "Creative Writing Tools",
      "Grammar & Writing Assistants",
      "Content Creation & Writing Tools",
      "Writing And Content",
      "Content Creation And Writing Tools",
      "Writing And Content Enhancement"
    ]
  },
  {
    name: "IMAGE & DESIGN TOOLS",
    emoji: "🎨",
    description: "AI tools for image generation, graphic design, photo editing, and visual content creation",
    subcategories: [
      "AI Art Tools",
      "AI Image Generation",
      "Image Generation Platforms",
      "Design & Graphics Tools",
      "Creative Design Tools",
      "Image & Design",
      "Image Editing Tools",
      "Specialized Image Tools",
      "Background & Object Tools",
      "Core Image Generators",
      "Design And Graphics Tools",
      "Design Assistant Tools"
    ]
  },
  {
    name: "VIDEO & MULTIMEDIA",
    emoji: "🎬",
    description: "AI-powered video creation, editing, and multimedia production tools",
    subcategories: [
      "Video Tools",
      "Video Generation Tools", 
      "Video Editing Tools",
      "Advanced Video Tools",
      "Video & Content Tools",
      "Video Editing & Content Tools",
      "Video Marketing Tools",
      "Video Business Tools",
      "Entertainment Media Tools",
      "Video And Content Tools",
      "Video Editing And Content Tools"
    ]
  },
  {
    name: "AUDIO & VOICE TOOLS",
    emoji: "🎵",
    description: "AI tools for audio processing, voice synthesis, music generation, and sound editing",
    subcategories: [
      "Audio & Voice Tools",
      "Audio Music Tools",
      "Transcription & Document Tools",
      "Meeting & Transcription Tools",
      "Document And Research Tools",
      "Transcription And Document Tools"
    ]
  },
  {
    name: "BUSINESS & PRODUCTIVITY",
    emoji: "💼",
    description: "AI tools for business automation, productivity enhancement, and workflow optimization",
    subcategories: [
      "Business Tools",
      "Business & Productivity", 
      "Productivity & Automation Tools",
      "Business & Team Tools",
      "Automation & Workflow Tools",
      "Business Sales Tools",
      "Traditional Business Tools",
      "Search & Productivity Tools",
      "Business And Productivity",
      "Business And Team Tools",
      "Automation And Workflow Tools",
      "Productivity And Automation Tools",
      "Search And Productivity Tools"
    ]
  },
  {
    name: "MARKETING & SALES AI TOOLS",
    emoji: "📈",
    description: "AI-powered marketing automation, sales optimization, and customer engagement tools",
    subcategories: [
      "MARKETING & SALES AI TOOLS",
      "Marketing & Analytics",
      "E-commerce & Marketing Tools", 
      "Business & Sales Tools",
      "Social Media Tools",
      "Email Management Tools",
      "Marketing Sales Tools",
      "Marketing Tools",
      "Ecommerce And Marketing Tools",
      "Business Sales Tools",
      "Email Management Tools"
    ]
  },
  {
    name: "DATA & ANALYTICS AI TOOLS", 
    emoji: "📊",
    description: "AI tools for data analysis, business intelligence, and analytics platforms",
    subcategories: [
      "DATA & ANALYTICS AI TOOLS",
      "Data & Analytics Tools",
      "Data Analytics Tools",
      "Financial & Trading Tools",
      "Data Analytics Tools",
      "Financial And Trading Tools"
    ]
  },
  {
    name: "DEVELOPMENT & CODING",
    emoji: "⚡",
    description: "AI-powered development tools, code assistants, and programming utilities",
    subcategories: [
      "Developer Tools",
      "AI Development Tools",
      "Developer & Coding Tools",
      "Web Development Tools",
      "AI Tools & Development",
      "Platforms & Development",
      "Developer And Coding Tools",
      "AI Tools And Development",
      "Platforms And Development",
      "AI Development Tools"
    ]
  },
  {
    name: "COMMUNICATION & COLLABORATION AI TOOLS",
    emoji: "💬", 
    description: "AI tools for communication, collaboration, entertainment, and social interaction",
    subcategories: [
      "COMMUNICATION & COLLABORATION AI TOOLS",
      "Communication & Entertainment",
      "Communication Tools",
      "Collaboration Tools",
      "Entertainment Tools",
      "Game Design & Development",
      "Communication And Entertainment",
      "Game Design And Development"
    ]
  },
  {
    name: "EDUCATION & LEARNING",
    emoji: "🎓",
    description: "AI-powered educational tools, learning platforms, and knowledge management systems",
    subcategories: [
      "Education & Learning",
      "Learning & Education",
      "Learning Platforms",
      "Research & Learning",
      "Education And Learning",
      "Learning And Education",
      "Research And Learning"
    ]
  },
  {
    name: "HEALTH & WELLNESS",
    emoji: "🏥",
    description: "AI tools for healthcare, wellness, medical assistance, and health monitoring",
    subcategories: [
      "Health & Wellness",
      "Health & Wellness Tools",
      "Healthcare Professionals",
      "Health And Wellness",
      "Health And Wellness Tools"
    ]
  },
  {
    name: "LEGAL & PROFESSIONAL SERVICES",
    emoji: "⚖️", 
    description: "AI tools for legal assistance, professional services, and compliance management",
    subcategories: [
      "Legal Professionals",
      "Professional Services",
      "Personal Services",
      "Resume & Career Tools",
      "Resume And Career Tools"
    ]
  },
  {
    name: "3D & VISUALIZATION",
    emoji: "🧊",
    description: "AI tools for 3D modeling, visualization, and immersive content creation",
    subcategories: [
      "3D & Visualization Tools",
      "ThreeD And Visualization Tools"
    ]
  },
  {
    name: "SPECIALIZED & NICHE TOOLS",
    emoji: "🔧",
    description: "Specialized AI tools for specific industries, niche applications, and unique use cases",
    subcategories: [
      "Specialized Tools",
      "Specialized AI Tools",
      "Specialized & Niche", 
      "Specialized Niche Tools",
      "Specialized Policy Tools",
      "Technical & Utility Tools",
      "Utilities Tools",
      "News & Information Tools",
      "Local AI Solutions",
      "Open Source AI Models",
      "Robotics Companies",
      "Cloud Services",
      "Emergency Services",
      "Art & Collectibles",
      "Historical & Cultural",
      "Spirituality Tools",
      "Time & History",
      "Specialized And Niche",
      "Technical And Utility Tools",
      "News And Information Tools",
      "Open Source AI Models",
      "Art And Collectibles",
      "Historical And Cultural",
      "Time And History"
    ]
  }
];
