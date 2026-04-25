import { Tool } from "@/types/tools";
import { Image, Layout, FileText, Package, Sparkles } from "lucide-react";
import photopeaHero from "@/assets/tools/photopea-hero.jpg";
import penpotHero from "@/assets/tools/penpot-hero.jpg";
import stirlingPdfHero from "@/assets/tools/stirling-pdf-hero.jpg";
import pinokioHero from "@/assets/tools/pinokio-hero.jpg";
import fooocusHero from "@/assets/tools/fooocus-hero.jpg";

/**
 * Free Awesome AI Tools — April 2026 Batch B
 * 5 more verified, popular, 100% free AI tools we did not yet have.
 * Each entry is fully indexed (rich tags), categorized, and SEO-tagged.
 */
export const freeAwesomeBatch2026B: Tool[] = [
  {
    icon: Image,
    title: "Photopea",
    description:
      "Photopea is the world's most powerful FREE in-browser photo editor — a near pixel-perfect Photoshop alternative that opens PSD, AI, XD, Sketch, XCF, RAW, and PDF files with full layer, mask, smart-object, and adjustment-layer support. With AI-powered features like background removal, generative fill, smart selection, content-aware retouching, and one-click upscaling, Photopea handles professional design, photo retouching, and graphic work with zero installation, zero signup, and zero cost. Loved by millions of designers, students, marketers, and creators worldwide.",
    emoji: "🎨",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.photopea.com/",
    imageUrl: photopeaHero,
    isFree: true,
    tagline: "Free in-browser Photoshop alternative with AI editing tools.",
    tags: [
      "Photopea", "photopea", "free Photoshop", "Photoshop alternative",
      "online photo editor", "free PSD editor", "browser photo editor",
      "AI background remover", "AI generative fill", "free image editor",
      "PSD online", "RAW editor", "free graphic design", "online design tool",
      "no signup photo editor", "AI retouching", "free photo manipulation",
      "Image & Design", "AI image editor", "free design tool",
      "photo editing", "open PSD online", "free online editor"
    ],
    category: "Image & Design",
    rating: 4.9,
    totalVotes: 12840
  },
  {
    icon: Layout,
    title: "Penpot",
    description:
      "Penpot is the first 100% FREE and open-source design and prototyping platform built for cross-domain product teams. A genuine Figma alternative, Penpot runs on open web standards (SVG, CSS, HTML), making it the only design tool that produces real, developer-ready code. Features include real-time multiplayer collaboration, interactive prototypes, design tokens, component libraries, design systems, plugins, and self-hosting options. With AI-assisted layout suggestions and accessibility checks, Penpot is the go-to choice for designers and developers who want freedom from vendor lock-in.",
    emoji: "🎯",
    color: "from-emerald-500 to-purple-600",
    directUrl: "https://penpot.app/",
    imageUrl: penpotHero,
    isFree: true,
    tagline: "Free open-source Figma alternative for designers and developers.",
    tags: [
      "Penpot", "penpot", "free Figma alternative", "open source design",
      "free prototyping tool", "free UI design", "free UX tool",
      "design system tool", "self-hosted design", "collaborative design",
      "free wireframing", "vector design free", "SVG design tool",
      "developer-ready design", "AI design assistant", "free design platform",
      "Image & Design", "Productivity", "design and prototyping",
      "open source UI tool", "free design software", "Figma free alternative",
      "no vendor lock-in"
    ],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 6920
  },
  {
    icon: FileText,
    title: "Stirling PDF",
    description:
      "Stirling PDF is a powerful, locally-hosted, 100% FREE web-based PDF manipulation tool that performs over 50 operations on your documents — including merging, splitting, converting, OCR (text recognition), compressing, watermarking, signing, redacting, and AI-powered text extraction. Privacy-first: everything runs on your own machine or server, so no documents ever leave your control. Open-source, Docker-ready, and constantly updated, Stirling PDF replaces expensive Adobe Acrobat workflows for free. Perfect for businesses, students, lawyers, and anyone serious about document privacy.",
    emoji: "📄",
    color: "from-red-500 to-orange-600",
    directUrl: "https://stirlingpdf.com/",
    imageUrl: stirlingPdfHero,
    isFree: true,
    tagline: "Free open-source PDF toolkit with 50+ AI-powered operations.",
    tags: [
      "Stirling PDF", "stirling pdf", "free PDF editor", "PDF tool free",
      "merge PDF free", "split PDF", "PDF OCR free", "AI PDF tool",
      "free Adobe Acrobat alternative", "PDF converter free",
      "self-hosted PDF", "open source PDF", "PDF manipulation",
      "compress PDF free", "watermark PDF", "redact PDF free",
      "sign PDF free", "extract text PDF", "PDF privacy",
      "Productivity", "Business & Productivity", "document tools",
      "free PDF software", "Docker PDF tool"
    ],
    category: "Productivity",
    rating: 4.8,
    totalVotes: 8450
  },
  {
    icon: Package,
    title: "Pinokio",
    description:
      "Pinokio is a revolutionary FREE 1-click AI app launcher that lets anyone install, run, and automate hundreds of cutting-edge open-source AI applications on their own computer — including Stable Diffusion, ComfyUI, Whisper, Llama, Bark TTS, Fooocus, Forge, Open WebUI, and many more. No command line, no Python errors, no Docker headaches: Pinokio handles all dependencies automatically. Run state-of-the-art AI completely offline, privately, and for free — turning your PC or Mac into a personal AI supercomputer.",
    emoji: "🎭",
    color: "from-amber-500 to-emerald-600",
    directUrl: "https://pinokio.computer/",
    imageUrl: pinokioHero,
    isFree: true,
    tagline: "Free 1-click installer for hundreds of local open-source AI apps.",
    tags: [
      "Pinokio", "pinokio", "pinokio computer", "local AI launcher",
      "free AI app installer", "1-click AI install", "run AI locally",
      "offline AI tools", "Stable Diffusion installer", "ComfyUI installer",
      "Llama local", "free local AI", "AI app store", "open source AI launcher",
      "private AI", "self-hosted AI", "no-code AI install",
      "AI Development", "Developer Tools", "free AI tool",
      "AI workflow", "local LLM", "Pinokio AI browser"
    ],
    category: "AI Development",
    rating: 4.9,
    totalVotes: 7320
  },
  {
    icon: Sparkles,
    title: "Fooocus",
    description:
      "Fooocus is a FREE, open-source AI image generator built on Stable Diffusion XL that delivers Midjourney-quality results with absolutely zero prompt-engineering knowledge required. Just type what you want and Fooocus handles all the technical complexity (samplers, schedulers, refiners, LoRAs, prompt expansion) automatically behind the scenes. Features include image variation, upscaling, inpainting, outpainting, face swap, style presets, and image prompt support. Runs locally on your GPU for unlimited free generations with full privacy and no censorship — perfect for artists, designers, and creators.",
    emoji: "✨",
    color: "from-indigo-500 to-pink-600",
    directUrl: "https://github.com/lllyasviel/Fooocus",
    imageUrl: fooocusHero,
    isFree: true,
    tagline: "Free local Stable Diffusion image generator with Midjourney quality.",
    tags: [
      "Fooocus", "fooocus", "fooocus AI", "free image generator",
      "free Stable Diffusion", "SDXL free", "local image generator",
      "free Midjourney alternative", "AI art free", "open source image AI",
      "no prompt engineering", "free AI image", "unlimited AI images",
      "free AI art generator", "inpainting free", "outpainting AI",
      "face swap AI", "image variation AI", "AI upscaler free",
      "Image & Design", "AI art tool", "free creative AI",
      "Stable Diffusion XL", "private AI image", "uncensored AI image"
    ],
    category: "Image & Design",
    rating: 4.9,
    totalVotes: 11260
  }
];
