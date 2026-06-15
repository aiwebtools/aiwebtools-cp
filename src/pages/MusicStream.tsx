import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, SkipForward, SkipBack, Volume2, VolumeX, Home, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { MUSIC_VIDEO_GALLERY } from "@/components/PinnedVideoPlayer";
import mtvaiLogoSquare from "@/assets/mtvai-logo-square.png";
import mtvaiLogoWide from "@/assets/mtvai-logo-wide.png";
import GlobalSearchBar from "@/components/LazyGlobalSearchBar";

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
  const [introPhase, setIntroPhase] = useState<"explode" | "curtain">("explode");
  const [searchOpen, setSearchOpen] = useState(false);

  const playlist = useMemo(() => {
    // Smarter ordering: cinematic MTVai drops play FIRST (longest / most produced),
    // then "Official Music Video" cinematic clips, then everything else randomized.
    const tier1 = MUSIC_VIDEO_GALLERY.filter(v => /MTVai Music Video/i.test(v.title));
    const tier2 = MUSIC_VIDEO_GALLERY.filter(
      v => !/MTVai Music Video/i.test(v.title) && /Official Music Video|Cinematic|Showcase/i.test(v.title)
    );
    const tier3 = MUSIC_VIDEO_GALLERY.filter(
      v => !/MTVai Music Video/i.test(v.title) && !/Official Music Video|Cinematic|Showcase/i.test(v.title)
    );
    return [...shuffle(tier1), ...shuffle(tier2), ...shuffle(tier3)];
  }, []);

  // Resume from ?v=ID if user came back via the BackToMusic pill
  const [idx, setIdx] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const wanted = params.get("v") || sessionStorage.getItem("lastMusicStreamId");
      if (wanted) {
        const i = playlist?.findIndex?.(v => v.id === wanted) ?? -1;
        if (i >= 0) return i;
      }
    } catch { /* noop */ }
    return 0;
  });
  const current = playlist[idx % playlist.length];

  // Persist a "came from music stream" flag so the global back-to-music
  // pill can render on any tool/category page the user navigates to.
  useEffect(() => {
    try { sessionStorage.setItem("cameFromMusicStream", "1"); } catch { /* noop */ }
  }, []);

  // Remember the current track so BackToMusicPill can resume it exactly.
  useEffect(() => {
    try { sessionStorage.setItem("lastMusicStreamId", current?.id || ""); } catch { /* noop */ }
  }, [current?.id]);

  // Two-phase intro: (1) MTVai logo explosion (~1.1s) → (2) matrix
  // curtain-call loader with MTVai voice (~5s). The page exits intro
  // when the voice ends OR after 6s max.
  useEffect(() => {
    const t1 = window.setTimeout(() => setIntroPhase("curtain"), 1100);
    return () => window.clearTimeout(t1);
  }, []);

  const send = useCallback((func: string, args: unknown[] = []) => {
    try {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "*"
      );
    } catch {}
  }, []);

  // Listen for end-of-video to auto-advance.
  // CRITICAL: YouTube embed only emits onStateChange messages once we
  // subscribe via {"event":"listening"} + addEventListener. Without
  // this, videos at the theater page would play but never advance.
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

  const handleIframeLoad = useCallback(() => {
    try {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "listening", id: 1, channel: "widget" }),
        "*"
      );
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "addEventListener", args: ["onStateChange"] }),
        "*"
      );
    } catch {}
  }, []);

  // IMPORTANT: keep mute OUT of the iframe src so toggling mute does NOT
  // reload the iframe (which previously felt like the track was being skipped).
  // We start muted=0 always at load and control mute purely via postMessage.
  const src = `https://www.youtube.com/embed/${current.id}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080`;

  const toggleMute = useCallback(() => {
    setMuted(prev => {
      const next = !prev;
      send(next ? "mute" : "unMute");
      return next;
    });
  }, [send]);

  const next = useCallback(() => setIdx(i => (i + 1) % playlist.length), [playlist.length]);
  const prev = useCallback(() => setIdx(i => (i - 1 + playlist.length) % playlist.length), [playlist.length]);

  // Keyboard navigation for desktop theater
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key.toLowerCase() === "m") toggleMute();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, toggleMute]);

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden">
      <Helmet>
        <title>MTVai.live — AiWebTools Music Stream · 24/7 AI Music Channel</title>
        <meta name="description" content="MTVai.live by AiWebTools.ai — the world's first 24/7 AI-powered music video channel. Cinematic 1080p autoplay, theater mode, drag-anywhere mini player." />
        <link rel="canonical" href="https://aiwebtools.ai/music-stream" />
        <meta property="og:title" content="MTVai.live — AiWebTools Music Stream" />
        <meta property="og:description" content="24/7 AI-crafted music videos in cinematic theater mode. Powered by AiWebTools.ai." />
      </Helmet>

      {showIntro && (
        <MtvaiCurtainLoader
          phase={introPhase}
          onDone={() => setShowIntro(false)}
        />
      )}

      {/* Header / back nav */}
      <div className="fixed top-0 inset-x-0 z-40 flex items-center justify-between gap-2 px-2 sm:px-3 py-2 bg-gradient-to-b from-black/90 to-transparent">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 px-2 py-1.5 rounded bg-black/70 border border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/15 text-[11px] font-mono uppercase tracking-wider"
            title="Back"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Back</span>
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 px-2 py-1.5 rounded bg-black/70 border border-emerald-500/40 text-emerald-200 hover:bg-emerald-500/15 text-[11px] font-mono uppercase tracking-wider"
            title="Home"
          >
            <Home className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Home</span>
          </button>
          <button
            onClick={() => setSearchOpen(s => !s)}
            className="flex items-center gap-1 px-2 py-1.5 rounded bg-black/70 border border-fuchsia-500/40 text-fuchsia-200 hover:bg-fuchsia-500/15 text-[11px] font-mono uppercase tracking-wider"
            title="Search AI Tools"
          >
            {searchOpen ? <X className="w-3.5 h-3.5" /> : <Search className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">Tools</span>
          </button>
        </div>
        <div className="flex items-center gap-2 min-w-0">
          <img src={mtvaiLogoSquare} alt="MTVai.live" className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] shrink-0" draggable={false} />
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-fuchsia-300 truncate" style={{ textShadow: "0 0 8px #a855f7" }}>
            MTVai.live · AiWebTools
          </span>
        </div>
        <button
          onClick={toggleMute}
          className="flex items-center gap-1 px-2 py-1.5 rounded bg-black/70 border border-fuchsia-500/40 text-fuchsia-200 hover:bg-fuchsia-500/15 text-[11px]"
          title={muted ? "Unmute" : "Mute"}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* AI Tools slide-out search panel */}
      <div
        className={`fixed top-12 inset-x-0 z-[45] mx-auto max-w-2xl px-3 transition-all duration-300 ease-out ${
          searchOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="rounded-xl border border-fuchsia-500/40 bg-black/90 backdrop-blur p-3 shadow-[0_0_40px_rgba(168,85,247,0.35)]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fuchsia-300">
              🔎 AI Tools Search · MTVai
            </span>
            <button
              onClick={() => setSearchOpen(false)}
              className="text-fuchsia-200/70 hover:text-white"
              aria-label="Close tools search"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {searchOpen && <GlobalSearchBar />}
        </div>
      </div>

      {/* Theater stage with spotlight wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(168,85,247,0.22), transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(34,211,238,0.15), transparent 60%)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center px-2 md:px-16">
        {/* Desktop left/right arrow navigation */}
        <button
          onClick={prev}
          aria-label="Previous track"
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-30 h-16 w-12 items-center justify-center rounded-r-xl bg-black/60 hover:bg-fuchsia-500/30 border border-fuchsia-500/40 text-fuchsia-100 backdrop-blur transition-colors"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={next}
          aria-label="Next track"
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-30 h-16 w-12 items-center justify-center rounded-l-xl bg-black/60 hover:bg-fuchsia-500/30 border border-fuchsia-500/40 text-fuchsia-100 backdrop-blur transition-colors"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Player frame — 9:16 on mobile (tall cinema), 16:9 wide theater on desktop */}
        <div
          className="relative w-full md:w-auto md:h-[min(86vh,900px)] h-full md:max-w-[min(96vw,1600px)]"
          style={{ aspectRatio: "9 / 16" }}
        >
          <DesktopAspect>
            <iframe
              ref={iframeRef}
              key={current.id}
              src={src}
              title={current.title}
              onLoad={handleIframeLoad}
              className="w-full h-full block bg-black"
              style={{ boxShadow: "0 0 60px rgba(168,85,247,0.35), 0 0 140px rgba(168,85,247,0.18)" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
            />
          </DesktopAspect>
          {/* MTVai bug overlay (bottom-left) */}
          <img
            src={mtvaiLogoSquare}
            alt=""
            aria-hidden
            draggable={false}
            className="pointer-events-none absolute bottom-4 left-4 w-14 h-14 md:w-20 md:h-20 opacity-70 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          />
          {/* Title strap */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/85 to-transparent">
            <p className="font-mono text-sm md:text-base font-bold text-fuchsia-200" style={{ textShadow: "0 0 8px #a855f7" }}>
              ♪ {current.title}
            </p>
            <p className="font-mono text-[10px] text-cyan-300/80 tracking-widest uppercase mt-0.5">
              Track {idx + 1} / {playlist.length} · MTVai.live · AiWebTools.ai
            </p>
          </div>
        </div>
      </div>

      {/* Footer transport */}
      <div className="fixed bottom-0 inset-x-0 z-40 flex items-center justify-center gap-2 p-3 bg-gradient-to-t from-black/90 to-transparent">
        <button
          onClick={prev}
          className="h-9 w-12 flex items-center justify-center rounded bg-black/70 border border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/15"
          title="Previous"
        >
          <SkipBack className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="h-9 w-12 flex items-center justify-center rounded bg-black/70 border border-fuchsia-500/40 text-fuchsia-200 hover:bg-fuchsia-500/15"
          title="Next"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/**
 * Picks between mobile (9:16) and desktop (16:9 wide cinema) layouts.
 * Pure presentational helper so the parent only manages logic.
 */
const DesktopAspect = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full md:aspect-video md:w-full md:h-full overflow-hidden rounded-md border border-fuchsia-500/30">
      {children}
    </div>
  );
};

/**
 * Exclusive curtain-call loader for MTVai.live theater entry.
 * Phase 1: MTVai logo explosion (no curtains yet).
 * Phase 2: Red velvet curtains close → matrix code rains → MTVai voice
 * plays → curtains pull open to reveal the stream.
 * Used ONLY on /music-stream — no other loader competes here.
 */
const MtvaiCurtainLoader = ({
  phase,
  onDone,
}: {
  phase: "explode" | "curtain";
  onDone: () => void;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [curtainsOpen, setCurtainsOpen] = useState(false);

  useEffect(() => {
    if (phase !== "curtain") return;
    // Try to play the MTVai intro voice. Browsers may block; fall back to timer.
    const a = new Audio("/audio/mtvai-intro.mp3");
    a.preload = "auto";
    a.volume = 0.95;
    audioRef.current = a;
    let timer: number | undefined;
    a.play().then(() => {
      a.onended = () => {
        setCurtainsOpen(true);
        window.setTimeout(onDone, 1400);
      };
      // Safety net: max 7s total in case onended never fires.
      timer = window.setTimeout(() => {
        setCurtainsOpen(true);
        window.setTimeout(onDone, 1400);
      }, 7000);
    }).catch(() => {
      // Autoplay blocked — open curtains after a short matrix sequence.
      timer = window.setTimeout(() => {
        setCurtainsOpen(true);
        window.setTimeout(onDone, 1200);
      }, 2400);
    });
    return () => {
      try { a.pause(); } catch { /* noop */ }
      if (timer) window.clearTimeout(timer);
    };
  }, [phase, onDone]);

  return (
    <div className="fixed inset-0 z-[2147483646] bg-black overflow-hidden pointer-events-none">
      <style>{`
        @keyframes mtvaiPop {
          0%   { transform: perspective(900px) translateZ(-900px) rotateY(180deg) scale(0.1); opacity: 0; filter: blur(20px); }
          45%  { transform: perspective(900px) translateZ(0) rotateY(0) scale(1.35); opacity: 1; filter: blur(0); }
          80%  { transform: perspective(900px) translateZ(0) rotateY(0) scale(1.05); opacity: 1; }
          100% { transform: perspective(900px) translateZ(0) rotateY(0) scale(0.55); opacity: 0; }
        }
        @keyframes mtvaiCode {
          0% { opacity: 0; transform: scale(0.6); }
          30% { opacity: 1; }
          100% { opacity: 0.85; transform: scale(2.4); }
        }
        @keyframes mtvaiFlyLogo {
          0%   { opacity: 0; transform: translate(-50%, -50%) translateZ(-1400px) rotateY(0deg) scale(.15); }
          20%  { opacity: 1; }
          75%  { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -50%) translateZ(450px) rotateY(720deg) scale(2.2); }
        }
        @keyframes mtvaiFlicker { from { opacity: .82; } to { opacity: 1; } }
        @keyframes mtvaiLoadBar { to { width: 100%; } }
      `}</style>

      {/* Matrix code burst — always behind everything */}
      <div
        aria-hidden
        className="absolute inset-0 font-mono text-[10px] leading-[12px] text-[#00ff41] whitespace-pre overflow-hidden"
        style={{ animation: "mtvaiCode 2.4s ease-out forwards", textShadow: "0 0 6px #00ff41" }}
      >
        {Array.from({ length: 80 }).map(() => "01001010 11001101 10101110 11110000 00111100 11000011\n").join("")}
      </div>

      {/* Spotlight wash */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.22), transparent 55%)" }}
      />

      {/* Phase 1: hero MTVai logo explosion */}
      {phase === "explode" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={mtvaiLogoSquare}
            alt="MTVai.live"
            draggable={false}
            className="w-[62vmin] h-[62vmin] max-w-[640px] max-h-[640px] object-contain drop-shadow-[0_0_70px_rgba(168,85,247,0.95)]"
            style={{ animation: "mtvaiPop 1.1s cubic-bezier(.2,.7,.2,1) forwards" }}
          />
        </div>
      )}

      {/* Phase 2: curtain-call loader with flying logos + branding + bar */}
      {phase === "curtain" && (
        <>
          {/* Branding */}
          <div
            className="absolute top-[7%] left-0 right-0 text-center z-20"
            style={{
              textShadow: "0 0 15px #a855f7, 0 0 40px #a855f7",
              animation: "mtvaiFlicker 2s infinite alternate",
            }}
          >
            <img
              src={mtvaiLogoWide}
              alt="MTVai.live presented by AiWebTools.ai"
              draggable={false}
              className="mx-auto h-[12vmin] max-h-[180px] object-contain"
            />
            <p className="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-fuchsia-300">
              Presented by AiWebTools.ai
            </p>
          </div>

          {/* Flying logo tunnel */}
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ perspective: "1200px", transformStyle: "preserve-3d" as const }}>
            {[0, 0.4, 0.8, 1.2, 1.6, 2.0, 2.4, 2.8].map((d, i) => (
              <img
                key={i}
                src={mtvaiLogoSquare}
                alt=""
                aria-hidden
                draggable={false}
                className="absolute"
                style={{
                  width: "120px",
                  left: ["50%", "42%", "58%", "50%", "50%", "35%", "65%", "50%"][i],
                  top: ["50%", "50%", "50%", "42%", "58%", "45%", "55%", "35%"][i],
                  transform: "translate(-50%, -50%)",
                  transformStyle: "preserve-3d" as const,
                  filter: "drop-shadow(0 0 18px #a855f7)",
                  animation: `mtvaiFlyLogo 5.6s linear ${d}s infinite`,
                  opacity: 0,
                }}
              />
            ))}
          </div>

          {/* Velvet curtains */}
          <div
            className="absolute top-0 left-0 h-full z-30"
            style={{
              width: "50%",
              background:
                "repeating-linear-gradient(90deg, #3b0000 0px, #8b0000 24px, #240000 48px)",
              boxShadow: "inset 0 0 80px #000",
              transition: "transform 1.4s ease-in-out",
              transform: curtainsOpen ? "translateX(-100%)" : "translateX(0)",
              borderRight: "5px solid #160000",
            }}
          />
          <div
            className="absolute top-0 right-0 h-full z-30"
            style={{
              width: "50%",
              background:
                "repeating-linear-gradient(90deg, #240000 0px, #8b0000 24px, #3b0000 48px)",
              boxShadow: "inset 0 0 80px #000",
              transition: "transform 1.4s ease-in-out",
              transform: curtainsOpen ? "translateX(100%)" : "translateX(0)",
              borderLeft: "5px solid #160000",
            }}
          />

          {/* Loading bar */}
          <div className="absolute bottom-[9%] left-0 right-0 z-40 text-center font-mono text-fuchsia-200 tracking-[0.18em] text-xs sm:text-sm" style={{ textShadow: "0 0 12px #a855f7" }}>
            INITIALIZING MTVai.live MATRIX STREAM
            <div
              className="mx-auto mt-4"
              style={{
                width: "min(600px, 80vw)",
                height: "10px",
                border: "1px solid #a855f7",
                overflow: "hidden",
                boxShadow: "0 0 18px #a855f7",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "0%",
                  background: "linear-gradient(90deg, #1a0029, #a855f7, #ffffff)",
                  animation: "mtvaiLoadBar 5s forwards",
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MusicStream;