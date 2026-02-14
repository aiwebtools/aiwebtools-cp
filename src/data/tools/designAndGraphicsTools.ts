import { PenTool, FileText, Mic, Music, BookOpen, Edit, Type, Megaphone, Image, Palette, Wand2, Sparkles, Camera, Brush, Settings } from "lucide-react";
import { Tool } from "@/types/tools";

import canvaHero from "@/assets/tools/canva-hero.jpg";
import adobePhotoshopHero from "@/assets/tools/adobe-photoshop-hero.jpg";
import adobeIllustratorHero from "@/assets/tools/adobe-illustrator-hero.jpg";
import figmaHero from "@/assets/tools/figma-hero.jpg";
import coreldrawHero from "@/assets/tools/coreldraw-hero.jpg";

export const designAndGraphicsTools: Tool[] = [
  {
    icon: PenTool,
    title: "Canva",
    description: "Create beautiful designs with Canva's drag-and-drop interface and extensive library of templates and graphics. Perfect for social media, presentations, and more.",
    emoji: "🎨",
    color: "from-blue-400 to-purple-500",
    directUrl: "https://www.canva.com/?via=aiwebtools",
    imageUrl: canvaHero,
    tags: ["Graphic Design", "design", "templates", "social media", "presentations", "graphics"],
    category: "Design & Graphics Tools",
    rating: 4.8,
    totalVotes: 4500
  },
  {
    icon: FileText,
    title: "Adobe Photoshop",
    description: "Edit and enhance your photos with Adobe Photoshop, the industry-standard software for image editing and graphic design. Create stunning visuals for web and print.",
    emoji: "🖼️",
    color: "from-green-400 to-teal-500",
    directUrl: "https://www.adobe.com/products/photoshop.html?via=aiwebtools",
    imageUrl: adobePhotoshopHero,
    tags: ["Photo Editor", "Graphic Design", "photo editing", "graphic design", "image editing", "web design", "print design"],
    category: "Design & Graphics Tools",
    rating: 4.7,
    totalVotes: 4200
  },
  {
    icon: Mic,
    title: "Adobe Illustrator",
    description: "Create vector graphics and illustrations with Adobe Illustrator, the perfect tool for creating logos, icons, and typography. Scale your designs without losing quality.",
    emoji: "✒️",
    color: "from-orange-400 to-red-500",
    directUrl: "https://www.adobe.com/products/illustrator.html?via=aiwebtools",
    imageUrl: adobeIllustratorHero,
    tags: ["Graphic Design", "Logo Design", "Illustration", "vector graphics", "illustrations", "logos", "icons", "typography"],
    category: "Design & Graphics Tools",
    rating: 4.6,
    totalVotes: 4000
  },
  {
    icon: Music,
    title: "Figma",
    description: "Collaborate on design projects with Figma, the web-based design tool that allows teams to work together in real-time. Create prototypes, mockups, and user interfaces.",
    emoji: "🤝",
    color: "from-purple-400 to-indigo-500",
    directUrl: "https://www.figma.com/?via=aiwebtools",
    imageUrl: figmaHero,
    tags: ["UI/UX Design", "Graphic Design", "collaboration", "design", "prototypes", "mockups", "user interfaces"],
    category: "Design & Graphics Tools",
    rating: 4.5,
    totalVotes: 3800
  },
  {
    icon: Edit,
    title: "Sketch",
    description: "Design user interfaces and websites with Sketch, the vector-based design tool for macOS. Create high-fidelity designs with ease and precision.",
    emoji: "✏️",
    color: "from-pink-400 to-purple-500",
    directUrl: "https://www.sketch.com/?via=aiwebtools",
    tags: ["UI/UX Design", "Graphic Design", "user interfaces", "web design", "vector graphics", "macOS", "high-fidelity"],
    category: "Design & Graphics Tools",
    rating: 4.4,
    totalVotes: 3600
  },
  {
    icon: Type,
    title: "GIMP",
    description: "Edit and manipulate images with GIMP, the free and open-source image editor. A powerful alternative to Photoshop for budget-conscious designers.",
    emoji: "🖌️",
    color: "from-cyan-400 to-blue-500",
    directUrl: "https://www.gimp.org/?via=aiwebtools",
    tags: ["Photo Editor", "Graphic Design", "image editing", "open-source", "free", "photo manipulation", "graphic design"],
    category: "Design & Graphics Tools",
    rating: 4.3,
    totalVotes: 3400
  },
  {
    icon: Megaphone,
    title: "CorelDRAW",
    description: "Create vector graphics and illustrations with CorelDRAW, the professional design software for Windows and macOS. Design logos, brochures, and more.",
    emoji: "⭐",
    color: "from-yellow-400 to-orange-500",
    directUrl: "https://www.coreldraw.com/?via=aiwebtools",
    imageUrl: coreldrawHero,
    tags: ["Graphic Design", "Logo Design", "Illustration", "vector graphics", "illustrations", "logos", "brochures", "professional design"],
    category: "Design & Graphics Tools",
    rating: 4.2,
    totalVotes: 3200
  },
  {
    icon: Palette,
    title: "AI ART QR CODE Generator",
    description: "Innovative tool hosted on Hugging Face that seamlessly blends functional QR codes with AI-generated art, creating visually appealing designs that maintain scannability.",
    emoji: "📱",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://huggingface.co/spaces/huggingface-projects/QR-code-AI-art-generator?via=aiwebtools",
    tags: ["AI Art", "Graphic Design", "QR codes", "AI art", "Hugging Face", "visual design", "functional art"],
    category: "Design & Graphics Tools",
    rating: 4.4,
    totalVotes: 2456
  },
  {
    icon: Wand2,
    title: "TLDRAW Computer",
    description: "Experimental feature enabling users to create AI workflows through intuitive flowchart interface, designing and executing complex processes by visually connecting nodes.",
    emoji: "🔗",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://computer.tldraw.com/?via=aiwebtools",
    tags: ["UI/UX Design", "Graphic Design", "AI workflows", "flowchart interface", "visual design", "process automation", "infinite canvas"],
    category: "Design & Graphics Tools",
    rating: 4.3,
    totalVotes: 2123
  },
  {
    icon: Sparkles,
    title: "Omagic.ai",
    description: "AI platform transforming static images, logos, and product visuals into dynamic 3D videos effortlessly with professional templates and high-quality animations.",
    emoji: "🎬",
    color: "from-gold-500 to-orange-600",
    directUrl: "https://omagic.ai/try?via=aiwebtools",
    tags: ["3D Modeling", "Graphic Design", "3D videos", "logo animation", "product visuals", "professional templates", "marketing"],
    category: "Design & Graphics Tools",
    rating: 4.5,
    totalVotes: 2678
  },
  {
    icon: PenTool,
    title: "Banani UI",
    description: "AI-powered UI design tool generating stunning, user-friendly interfaces from text descriptions with multi-screen prototypes and seamless team collaboration.",
    emoji: "🎨",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.banani.co/?via=aiwebtools",
    tags: ["UI/UX Design", "UI design", "text to interface", "prototypes", "team collaboration", "15000+ users"],
    category: "Design & Graphics Tools",
    rating: 4.6,
    totalVotes: 3234
  },
  {
    icon: Image,
    title: "Formia",
    description: "Innovative platform transforming 2D logos into dynamic 3D designs effortlessly by uploading SVG files, enhancing brand visibility with modern appeal.",
    emoji: "📐",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://formia.so/?via=aiwebtools",
    tags: ["3D Modeling", "Logo Design", "2D to 3D", "logo transformation", "SVG files", "brand enhancement", "3D design"],
    category: "Design & Graphics Tools",
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: Palette,
    title: "Uiverse",
    description: "Community-driven platform offering extensive library of 5,900+ open-source UI elements including buttons, inputs, checkboxes, and cards for personal and commercial use.",
    emoji: "🌐",
    color: "from-green-500 to-blue-600",
    directUrl: "https://uiverse.io/?via=aiwebtools",
    tags: ["UI/UX Design", "UI elements", "open source", "community driven", "CSS Tailwind", "5900+ components"],
    category: "Design & Graphics Tools",
    rating: 4.5,
    totalVotes: 2789
  },
  {
    icon: Edit,
    title: "AniEraser Watermark Remover",
    description: "AI-powered tool removing unwanted elements from photos and videos, eliminating watermarks, text overlays, emojis while maintaining image integrity seamlessly.",
    emoji: "🧹",
    color: "from-red-500 to-pink-600",
    directUrl: "https://anieraser.media.io/?via=aiwebtools",
    tags: ["Photo Editor", "Background Removal", "watermark removal", "photo editing", "video editing", "AI powered", "image integrity"],
    category: "Design & Graphics Tools",
    rating: 4.3,
    totalVotes: 2234
  },
  {
    icon: Settings,
    title: "Akto Developer Tools",
    description: "Suite of free developer tools including RegEx testers, Base64/URL decoders, credit card generators, DNS lookup, and reverse IP lookup services for enhanced development.",
    emoji: "🛠️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://www.akto.io/tools?via=aiwebtools",
    tags: ["developer tools", "RegEx tester", "Base64 decoder", "DNS lookup", "free utilities"],
    category: "Design & Graphics Tools",
    rating: 4.2,
    totalVotes: 2123
  }
];
