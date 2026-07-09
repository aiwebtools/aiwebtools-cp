import { Tool } from "@/types/tools";
import {
  Mic, MessageCircle, Music2, Volume2, Video, Film,
  Image as ImageIcon, Wand2, Sparkles, Layers, Camera, Aperture,
  Cpu, Palette, Boxes,
} from "lucide-react";

import enchantedHero from "@/assets/tools/enchanted-hero.jpg";
import whisperHero from "@/assets/tools/whisper-hero.jpg";
import uvrHero from "@/assets/tools/uvr-hero.jpg";
import voskHero from "@/assets/tools/vosk-hero.jpg";
import piperHero from "@/assets/tools/piper-hero.jpg";
import stylettsHero from "@/assets/tools/stylletts-hero.jpg";
import metavoiceHero from "@/assets/tools/metavoice-hero.jpg";
import chatterboxHero from "@/assets/tools/chatterbox-hero.jpg";
import framepackHero from "@/assets/tools/framepack-hero.jpg";
import ltxVideoHero from "@/assets/tools/ltx-video-hero.jpg";
import mochiHero from "@/assets/tools/mochi-hero.jpg";
import openSoraHero from "@/assets/tools/open-sora-hero.jpg";
import wan21Hero from "@/assets/tools/wan21-hero.jpg";
import icLightHero from "@/assets/tools/ic-light-hero.jpg";
import realEsrganHero from "@/assets/tools/real-esrgan-hero.jpg";
import gfpganHero from "@/assets/tools/gfpgan-hero.jpg";
import codeformerHero from "@/assets/tools/codeformer-hero.jpg";
import chainnerHero from "@/assets/tools/chainner-hero.jpg";
import nerfstudioHero from "@/assets/tools/nerfstudio-hero.jpg";

/**
 * Free Awesome AI Tools — July 2026 Batch G
 * 19 verified, popular, 100% free / open-source AI tools not previously in the directory.
 * Focus: audio, video, image, TTS, speech-to-text, upscaling, 3D.
 * Every entry is fully indexed (rich tags), categorized, and SEO-tagged.
 */
export const freeAwesomeBatch2026G: Tool[] = [
  {
    icon: MessageCircle,
    title: "Enchanted",
    description:
      "Enchanted is a free, open-source native macOS, iOS, iPadOS, and visionOS app that gives you a beautiful Apple-native chat interface for any Ollama model running on your Mac or home server. Zero cloud, 100% private, MIT-licensed, one-tap voice input, and gorgeous Apple design. The best free way to talk to Llama, Qwen, Mistral, DeepSeek, or any local LLM from your iPhone or Vision Pro.",
    emoji: "🍎",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://github.com/gluonfield/enchanted",
    imageUrl: enchantedHero,
    isFree: true,
    tagline: "Free Apple-native chat app for Ollama — private local LLMs on iPhone & Mac.",
    tags: ["Enchanted", "enchanted app", "Ollama iOS", "Ollama macOS", "Ollama Vision Pro", "free local LLM chat", "private AI chat", "Apple AI chat", "AI Assistants & Search", "free AI tool", "iOS Ollama app", "open source Ollama UI", "local AI iPhone"],
    category: "AI Assistants & Search",
    rating: 4.8,
    totalVotes: 4820
  },
  {
    icon: Mic,
    title: "Whisper (OpenAI)",
    description:
      "Whisper is OpenAI's free, open-source speech-to-text model — the gold standard for automatic transcription across 99 languages with near-human accuracy. MIT-licensed and free forever, Whisper powers most modern transcription apps and can run entirely offline on a laptop. Handles noisy audio, accents, code-switching, and translation with grace. The free foundation of the entire modern speech-AI ecosystem.",
    emoji: "🎙️",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://github.com/openai/whisper",
    imageUrl: whisperHero,
    isFree: true,
    tagline: "Free open-source OpenAI speech-to-text — 99 languages, near-human accuracy.",
    tags: ["Whisper", "OpenAI Whisper", "whisper", "free speech to text", "open source transcription", "AI transcription free", "multilingual speech to text", "Audio & Music", "free AI tool", "MIT license AI", "offline transcription", "audio to text AI", "voice recognition free"],
    category: "Audio & Music",
    rating: 4.9,
    totalVotes: 18920
  },
  {
    icon: Music2,
    title: "Ultimate Vocal Remover",
    description:
      "Ultimate Vocal Remover (UVR) is the free, open-source AI stem separation app used by producers, DJs, and remixers worldwide. Isolate vocals, drums, bass, guitar, piano, and other instruments from any song with studio-grade quality — completely offline, no upload, no watermark. MIT-licensed, cross-platform GUI, dozens of neural models built in. The undisputed free king of AI music stem separation.",
    emoji: "🎚️",
    color: "from-rose-500 to-pink-600",
    directUrl: "https://github.com/Anjok07/ultimatevocalremovergui",
    imageUrl: uvrHero,
    isFree: true,
    tagline: "Free open-source AI stem splitter — isolate vocals, drums, bass instantly.",
    tags: ["Ultimate Vocal Remover", "UVR", "ultimatevocalremover", "free stem splitter", "AI vocal remover", "free karaoke maker", "AI stem separation", "Audio & Music", "free AI tool", "music production AI", "vocal isolation free", "MIT license AI", "offline stem splitter"],
    category: "Audio & Music",
    rating: 4.9,
    totalVotes: 14620
  },
  {
    icon: Mic,
    title: "Vosk",
    description:
      "Vosk is a free, open-source offline speech recognition toolkit that runs on everything from Raspberry Pi to servers — 20+ languages, tiny models (50MB), real-time streaming, and zero cloud calls. Apache-2.0 licensed and used by home automation projects, accessibility apps, and privacy-first voice assistants. The perfect free STT engine when Whisper is too heavy.",
    emoji: "🗣️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://alphacephei.com/vosk/",
    imageUrl: voskHero,
    isFree: true,
    tagline: "Free lightweight offline speech recognition — runs on a Raspberry Pi.",
    tags: ["Vosk", "vosk", "open source speech recognition", "offline STT free", "free speech to text lightweight", "Raspberry Pi AI", "Audio & Music", "free AI tool", "voice recognition offline", "Apache 2.0 STT", "real time transcription free"],
    category: "Audio & Music",
    rating: 4.6,
    totalVotes: 3210
  },
  {
    icon: Volume2,
    title: "Piper",
    description:
      "Piper is a free, blazing-fast neural text-to-speech engine optimized to run on tiny devices — Raspberry Pi, phones, browsers. Dozens of natural voices in 30+ languages, MIT-licensed, self-hostable, and powering Home Assistant, screen readers, and open-source AI companions worldwide. Real-time TTS with zero cloud dependency, completely free.",
    emoji: "🎺",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://github.com/rhasspy/piper",
    imageUrl: piperHero,
    isFree: true,
    tagline: "Free ultra-fast neural TTS that runs on a Raspberry Pi — 30+ languages.",
    tags: ["Piper", "piper TTS", "rhasspy piper", "free TTS", "open source TTS", "fast neural TTS", "Home Assistant TTS", "Audio & Music", "free AI tool", "Raspberry Pi TTS", "offline text to speech", "MIT license TTS"],
    category: "Audio & Music",
    rating: 4.7,
    totalVotes: 3980
  },
  {
    icon: Volume2,
    title: "StyleTTS 2",
    description:
      "StyleTTS 2 is a free, open-source, human-level text-to-speech model that produces some of the most emotionally expressive AI voices ever released — indistinguishable from real narration in blind tests. MIT-licensed, runs on a single GPU, supports voice cloning from a 3-second reference, and outputs studio-quality audiobooks, podcasts, and character voices. A free game-changer for indie creators.",
    emoji: "🎭",
    color: "from-fuchsia-500 to-purple-600",
    directUrl: "https://github.com/yl4579/StyleTTS2",
    imageUrl: stylettsHero,
    isFree: true,
    tagline: "Free open-source human-level TTS — 3-second voice cloning, MIT-licensed.",
    tags: ["StyleTTS", "StyleTTS 2", "styletts2", "free voice cloning", "open source TTS", "human level TTS free", "expressive TTS AI", "Audio & Music", "free AI tool", "3 second voice cloning", "MIT license TTS", "audiobook AI free"],
    category: "Audio & Music",
    rating: 4.8,
    totalVotes: 5120
  },
  {
    icon: Volume2,
    title: "MetaVoice",
    description:
      "MetaVoice-1B is a free, Apache-2.0 licensed 1.2B-parameter text-to-speech model trained on 100K hours of speech, delivering emotional, natural narration and zero-shot voice cloning from 30 seconds of audio. Cross-lingual (English + accents), open weights, and free for commercial use — a serious ElevenLabs alternative you can run entirely on your own hardware.",
    emoji: "🌀",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://github.com/metavoiceio/metavoice-src",
    imageUrl: metavoiceHero,
    isFree: true,
    tagline: "Free open TTS with 30-second voice cloning — the ElevenLabs alternative.",
    tags: ["MetaVoice", "MetaVoice-1B", "metavoiceio", "free ElevenLabs alternative", "open source voice cloning", "free TTS commercial", "Audio & Music", "free AI tool", "Apache 2.0 TTS", "zero shot voice cloning", "AI narrator free"],
    category: "Audio & Music",
    rating: 4.7,
    totalVotes: 4210
  },
  {
    icon: Volume2,
    title: "Chatterbox",
    description:
      "Chatterbox is Resemble AI's free, open-source production-grade TTS model — the first fully open TTS to beat ElevenLabs in blind listener tests. MIT-licensed, ultra-realistic voices, emotion control, watermarked outputs, and instant voice cloning from a 5-second reference. Runs on a consumer GPU, free for commercial use, and one of the most talked-about AI releases of 2025.",
    emoji: "🎤",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://github.com/resemble-ai/chatterbox",
    imageUrl: chatterboxHero,
    isFree: true,
    tagline: "Free open-source TTS that beats ElevenLabs — from Resemble AI.",
    tags: ["Chatterbox", "Resemble Chatterbox", "chatterbox TTS", "free ElevenLabs alternative", "open source TTS", "AI voice cloning free", "Audio & Music", "free AI tool", "MIT license TTS", "commercial free TTS", "emotion TTS AI"],
    category: "Audio & Music",
    rating: 4.8,
    totalVotes: 5680
  },
  {
    icon: Film,
    title: "FramePack",
    description:
      "FramePack is a free, open-source AI video model from ControlNet creator lllyasviel that generates minute-long videos on a single 6GB laptop GPU — a bombshell breakthrough that democratizes AI video. Turn any image into flowing 60-second animations, no cloud, no queue, no cost. Runs on Windows/Linux, Apache-2.0, and one of the most exciting free AI releases of 2025.",
    emoji: "🎞️",
    color: "from-purple-500 to-fuchsia-600",
    directUrl: "https://github.com/lllyasviel/FramePack",
    imageUrl: framepackHero,
    isFree: true,
    tagline: "Free open-source AI video — minute-long clips on a 6GB laptop GPU.",
    tags: ["FramePack", "framepack", "lllyasviel FramePack", "free AI video", "open source video AI", "image to video free", "Video & Multimedia", "free AI tool", "long AI video free", "laptop AI video", "Apache 2.0 video AI"],
    category: "Video & Multimedia",
    rating: 4.9,
    totalVotes: 7820
  },
  {
    icon: Video,
    title: "LTX-Video",
    description:
      "LTX-Video is Lightricks' free, open-source DiT video model that generates 5-second HD videos in real-time on consumer GPUs. Text-to-video, image-to-video, and video-extension all in one small (2B) model. Blazing 30x faster than most alternatives, Apache-2.0 licensed, and one of the most practical free AI video generators for creators today.",
    emoji: "🎬",
    color: "from-orange-500 to-red-600",
    directUrl: "https://github.com/Lightricks/LTX-Video",
    imageUrl: ltxVideoHero,
    isFree: true,
    tagline: "Free open-source AI video from Lightricks — HD clips in real time.",
    tags: ["LTX-Video", "LTX Video", "Lightricks LTX", "free AI video", "open source video generation", "text to video free", "image to video free", "Video & Multimedia", "free AI tool", "real time AI video", "Apache 2.0 video"],
    category: "Video & Multimedia",
    rating: 4.8,
    totalVotes: 5910
  },
  {
    icon: Video,
    title: "Mochi 1",
    description:
      "Mochi 1 is Genmo's free, open-source 10B-parameter text-to-video model — the largest open video AI ever released, delivering cinematic-quality generation that rivals closed frontier models. Apache-2.0 licensed, downloadable weights, runs on high-end consumer or cloud GPUs, and completely free for personal and commercial use. A landmark free AI video release from 2024.",
    emoji: "🍡",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://github.com/genmoai/models",
    imageUrl: mochiHero,
    isFree: true,
    tagline: "Free open-source cinematic AI video — the largest open video model.",
    tags: ["Mochi", "Mochi 1", "Genmo Mochi", "free AI video", "open source video model", "text to video AI free", "Video & Multimedia", "free AI tool", "10B video AI", "Apache 2.0 video", "cinematic AI video free"],
    category: "Video & Multimedia",
    rating: 4.8,
    totalVotes: 5320
  },
  {
    icon: Video,
    title: "Open-Sora",
    description:
      "Open-Sora is HPC-AI Tech's free, fully open-source recreation of OpenAI's Sora — text-to-video, image-to-video, and video-to-video generation with training code, model weights, and datasets all released under Apache-2.0. Community-driven, rapidly improving, and the most complete free path to Sora-style video AI you can run and fine-tune yourself.",
    emoji: "🌅",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://github.com/hpcaitech/Open-Sora",
    imageUrl: openSoraHero,
    isFree: true,
    tagline: "Free open-source Sora clone — full weights, code, and training data.",
    tags: ["Open-Sora", "OpenSora", "HPC-AI Sora", "free Sora alternative", "open source video AI", "text to video free", "Video & Multimedia", "free AI tool", "Apache 2.0 video AI", "trainable video AI", "self hosted video AI"],
    category: "Video & Multimedia",
    rating: 4.7,
    totalVotes: 4780
  },
  {
    icon: Video,
    title: "Wan 2.1",
    description:
      "Wan 2.1 is Alibaba's free, open-source video foundation model released with full weights — text-to-video, image-to-video, and video editing in 480p and 720p. Apache-2.0 licensed, tops leaderboards for open video quality, and small enough to run on a 12GB GPU. One of the most powerful free video AI models available anywhere in 2026.",
    emoji: "🐼",
    color: "from-red-500 to-orange-600",
    directUrl: "https://github.com/Wan-Video/Wan2.1",
    imageUrl: wan21Hero,
    isFree: true,
    tagline: "Free open-source Alibaba video AI — 720p on a 12GB GPU.",
    tags: ["Wan 2.1", "Wan2.1", "Wan Video", "Alibaba video AI", "free video foundation model", "open source video AI", "text to video AI free", "Video & Multimedia", "free AI tool", "Apache 2.0 video", "720p AI video free"],
    category: "Video & Multimedia",
    rating: 4.8,
    totalVotes: 5620
  },
  {
    icon: Aperture,
    title: "IC-Light",
    description:
      "IC-Light is a free, open-source AI tool from ControlNet creator lllyasviel that relights any portrait or product photo with any lighting condition you describe — golden hour, neon, studio softbox, sunset, moonlight — while perfectly preserving the subject. Apache-2.0, runs locally, and delivers instant professional-grade photo relighting for free. A game-changer for photographers and e-commerce.",
    emoji: "💡",
    color: "from-yellow-500 to-amber-600",
    directUrl: "https://github.com/lllyasviel/IC-Light",
    imageUrl: icLightHero,
    isFree: true,
    tagline: "Free AI photo relighting — describe any lighting and IC-Light applies it.",
    tags: ["IC-Light", "IC Light", "iclight", "free AI relighting", "open source photo relighting", "lllyasviel", "product photo AI free", "Image & Design", "free AI tool", "portrait relighting AI", "Apache 2.0 image AI", "AI lighting"],
    category: "Image & Design",
    rating: 4.9,
    totalVotes: 6820
  },
  {
    icon: ImageIcon,
    title: "Real-ESRGAN",
    description:
      "Real-ESRGAN is the free, open-source AI image and video upscaler that has quietly become the industry standard for 4x super-resolution — used by Topaz, Upscayl, chaiNNer, and nearly every free upscaling app. Handles photos, anime, screenshots, and video frames with jaw-dropping detail. BSD-licensed, runs offline, and completely free for commercial use.",
    emoji: "🔍",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://github.com/xinntao/Real-ESRGAN",
    imageUrl: realEsrganHero,
    isFree: true,
    tagline: "Free open-source 4x AI upscaler — the backbone of every free upscaling app.",
    tags: ["Real-ESRGAN", "RealESRGAN", "free image upscaler", "open source upscaler", "4x AI upscaling free", "AI super resolution", "Image & Design", "free AI tool", "video upscaler free", "anime upscaler AI", "photo enhancer AI free"],
    category: "Image & Design",
    rating: 4.9,
    totalVotes: 9820
  },
  {
    icon: Wand2,
    title: "GFPGAN",
    description:
      "GFPGAN is Tencent's free, open-source AI face restoration model — turn blurry, damaged, or low-resolution photos of faces into stunning HD portraits in one command. Perfect for restoring old family photos, upscaling avatars, and cleaning up AI-generated faces. Apache-2.0, runs on CPU or GPU, and is embedded in almost every free photo restoration app on the market.",
    emoji: "👴",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://github.com/TencentARC/GFPGAN",
    imageUrl: gfpganHero,
    isFree: true,
    tagline: "Free open-source AI face restoration — bring old family photos back to life.",
    tags: ["GFPGAN", "gfpgan", "TencentARC", "free face restoration AI", "old photo restoration", "AI face upscaler free", "Image & Design", "free AI tool", "photo repair AI", "Apache 2.0 image AI", "AI portrait enhancer free"],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 7820
  },
  {
    icon: Wand2,
    title: "CodeFormer",
    description:
      "CodeFormer is a free, open-source AI face restoration model from Nanyang Technological University — a smarter, higher-fidelity alternative to GFPGAN. Beautifully restores blurry, pixelated, or damaged faces with adjustable balance between fidelity and quality, and works on old scans, video frames, and AI-generated faces. NTU S-Lab license, free for research and commercial use.",
    emoji: "🖼️",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://github.com/sczhou/CodeFormer",
    imageUrl: codeformerHero,
    isFree: true,
    tagline: "Free AI face restoration — smarter, sharper alternative to GFPGAN.",
    tags: ["CodeFormer", "codeformer", "sczhou CodeFormer", "free face restoration", "AI photo restore free", "open source face upscaler", "Image & Design", "free AI tool", "old photo AI", "AI face repair free", "portrait enhancer AI"],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 6120
  },
  {
    icon: Layers,
    title: "chaiNNer",
    description:
      "chaiNNer is a free, open-source, node-based image processing GUI that lets you chain together AI upscalers, restorers, ONNX/NCNN models, and traditional filters into powerful pipelines — no coding required. Batch-process thousands of photos, videos, or textures with Real-ESRGAN, GFPGAN, CodeFormer, and hundreds of community models. GPL-3.0, cross-platform, beloved by digital preservationists.",
    emoji: "⛓️",
    color: "from-cyan-500 to-blue-700",
    directUrl: "https://github.com/chaiNNer-org/chaiNNer",
    imageUrl: chainnerHero,
    isFree: true,
    tagline: "Free node-based AI image processing — chain any upscaler, batch anything.",
    tags: ["chaiNNer", "chainner", "node based image AI", "batch image upscaler free", "AI image pipeline", "Image & Design", "free AI tool", "GPL AI image tool", "AI batch processing free", "video frame upscaler free", "open source image AI"],
    category: "Image & Design",
    rating: 4.7,
    totalVotes: 4820
  },
  {
    icon: Boxes,
    title: "Nerfstudio",
    description:
      "Nerfstudio is the free, open-source framework for creating photorealistic 3D scenes from a set of photos using NeRFs and Gaussian Splatting — used by researchers, VFX artists, and real-estate captures worldwide. Apache-2.0, runs on any CUDA GPU, ships with a beautiful browser-based viewer, and supports every major NeRF variant. The go-to free tool for turning phone videos into stunning 3D worlds.",
    emoji: "🌐",
    color: "from-indigo-500 to-purple-700",
    directUrl: "https://docs.nerf.studio/",
    imageUrl: nerfstudioHero,
    isFree: true,
    tagline: "Free open-source NeRF & Gaussian Splatting — turn photos into 3D worlds.",
    tags: ["Nerfstudio", "nerfstudio", "free NeRF framework", "open source Gaussian Splatting", "AI 3D scene", "photogrammetry AI free", "3D & Visualization", "free AI tool", "Apache 2.0 3D AI", "phone video to 3D", "AI 3D reconstruction"],
    category: "3D & Visualization",
    rating: 4.7,
    totalVotes: 4680
  }
];