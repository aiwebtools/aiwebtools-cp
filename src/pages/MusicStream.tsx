import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, SkipForward, SkipBack, Volume2, VolumeX } from "lucide-react";
import { MUSIC_VIDEO_GALLERY } from "@/components/PinnedVideoPlayer";
import mtvAiWebToolsLogo from "@/assets/mtv-aiwebtools-logo.png";

const shuffle = <T,>(a: T[]): T[] => {
  const s = [...a];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
};

const MusicStream = () => {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const playlist = useMemo(() => {
    // Lead with the latest MTV cinematic drops, then shuffle the rest
    const head = MUSIC_VIDEO_GALLERY.filter(v => /MTVai Music Video/i.test(v.title));
    const tail = MUSIC_VIDEO_GALLERY.filter(v => !/MTVai Music Video/i.test(v.title));
    return [...head, ...shuffle(tail)];
  }, []);

  const [idx, setIdx] = useState(0);
  const current = playlist[idx % playlist.length];

  // 3D MTV pop-out intro
  useEffect(() => {
    const t = window.setTimeout(() => setShowIntro(false), 1900);
    return () => window.clearTimeout(t);
  }, []);

  const send = (func: string, args: unknown[] = []) => {
    try {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "*"
      );
    } catch {}
  };

  // Listen for end-of-video to auto-advance
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (data?.event === "onStateChange" && data?.info === 0) {
          setIdx(i => (i + 1) % playlist.length);
        }
      } catch {}
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [playlist.length]);

  const src = `https://www.youtube.com/embed/${current.id}?autoplay=1&mute=${muted ? 1 : 0}&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080`;

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden">
      <Helmet>
        <title>AiWebTools Music Stream — 24/7 MTVai Channel</title>
        <meta name="description" content="The official AiWebTools.ai MTVai Music Stream — non-stop AI-crafted music videos in cinematic 9:16, autoplay 1080p." />
      </Helmet>

      {/* 3D MTV pop-out intro */}
      {showIntro && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black pointer-events-none">
          <style>{`
            @keyframes mtvPopOut {
              0%   { transform: perspective(900px) translateZ(-800px) rotateY(180deg) scale(0.1); opacity: 0; filter: blur(20px); }
              40%  { transform: perspective(900px) translateZ(0)      rotateY(0deg)   scale(1.4); opacity: 1; filter: blur(0); }
              70%  { transform: perspective(900px) translateZ(0)      rotateY(0deg)   scale(1.1); opacity: 1; }
              100% { transform: perspective(900px) translateZ(0)      rotateY(0deg)   scale(0.2); opacity: 0; }
            }
            @keyframes codeBurst {
              0% { opacity: 0; transform: scale(0.5); }
              30% { opacity: 1; }
              100% { opacity: 0; transform: scale(2.5); }
            }
          `}</style>
          <div
            aria-hidden
            className="absolute inset-0 font-mono text-[10px] leading-[12px] text-[#00ff41] whitespace-pre overflow-hidden"
            style={{ animation: "codeBurst 1.9s ease-out forwards", textShadow: "0 0 6px #00ff41" }}
          >
            {Array.from({ length: 60 }).map(() => "01001010 11001101 10101110 11110000 00111100 11000011\n").join("")}
          </div>
          <img
            src={mtvAiWebToolsLogo}
            alt="MTV AiWebTools"
            className="w-[60vmin] h-[60vmin] object-contain drop-shadow-[0_0_60px_rgba(168,85,247,0.9)]"
            style={{ animation: "mtvPopOut 1.9s cubic-bezier(.2,.7,.2,1) forwards" }}
            draggable={false}
          />
        </div>
      )}

      {/* Header / back nav */}
      <div className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-3 py-2 bg-gradient-to-b from-black/90 to-transparent">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-black/70 border border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/15 text-xs font-mono uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </button>
        <div className="flex items-center gap-2">
          <img src={mtvAiWebToolsLogo} alt="MTV AiWebTools" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]" draggable={false} />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-fuchsia-300" style={{ textShadow: "0 0 8px #a855f7" }}>
            AiWebTools Music Stream · LIVE
          </span>
        </div>
        <button
          onClick={() => { setMuted(m => !m); send(muted ? "unMute" : "mute"); }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-black/70 border border-fuchsia-500/40 text-fuchsia-200 hover:bg-fuchsia-500/15 text-xs"
          title={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Theater player — giant 9:16 center stage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative h-full"
          style={{ aspectRatio: "9 / 16", maxWidth: "100vw", maxHeight: "100vh" }}
        >
          <iframe
            ref={iframeRef}
            key={current.id}
            src={src}
            title={current.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
          />
          {/* MTV bug overlay (bottom-left) */}
          <img
            src={mtvAiWebToolsLogo}
            alt=""
            aria-hidden
            draggable={false}
            className="pointer-events-none absolute bottom-4 left-4 w-16 h-16 md:w-20 md:h-20 opacity-70 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          />
          {/* Title strap */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/85 to-transparent">
            <p className="font-mono text-sm md:text-base font-bold text-fuchsia-200" style={{ textShadow: "0 0 8px #a855f7" }}>
              ♪ {current.title}
            </p>
            <p className="font-mono text-[10px] text-cyan-300/80 tracking-widest uppercase mt-0.5">
              Track {idx + 1} / {playlist.length} · AiWebTools.ai MTVai Channel
            </p>
          </div>
        </div>
      </div>

      {/* Footer transport */}
      <div className="fixed bottom-0 inset-x-0 z-40 flex items-center justify-center gap-2 p-3 bg-gradient-to-t from-black/90 to-transparent">
        <button
          onClick={() => setIdx(i => (i - 1 + playlist.length) % playlist.length)}
          className="h-9 w-12 flex items-center justify-center rounded bg-black/70 border border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/15"
          title="Previous"
        >
          <SkipBack className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIdx(i => (i + 1) % playlist.length)}
          className="h-9 w-12 flex items-center justify-center rounded bg-black/70 border border-fuchsia-500/40 text-fuchsia-200 hover:bg-fuchsia-500/15"
          title="Next"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MusicStream;