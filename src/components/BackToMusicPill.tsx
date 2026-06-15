import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Music } from "lucide-react";
import mtvLogo from "@/assets/mtvai-logo-square.png";

/**
 * Tiny floating pill that appears on every page (EXCEPT /music-stream itself)
 * once the user has visited the music stream in this session, letting them
 * jump back in one tap. Cleared when they explicitly dismiss it.
 */
const BackToMusicPill = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith("/music-stream")) {
      setVisible(false);
      return;
    }
    try {
      const flag = sessionStorage.getItem("cameFromMusicStream") === "1";
      const dismissed = sessionStorage.getItem("backToMusicDismissed") === "1";
      setVisible(flag && !dismissed);
    } catch {
      setVisible(false);
    }
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed z-[2147483645] left-3 bottom-3 sm:left-4 sm:bottom-4 flex items-center gap-2 rounded-full pl-1 pr-3 py-1 bg-black/85 border border-fuchsia-500/50 shadow-[0_0_20px_rgba(168,85,247,0.45)] backdrop-blur"
      style={{ animation: "fade-in 0.25s ease-out" }}
    >
      <button
        onClick={() => {
          let lastId = "";
          try { lastId = sessionStorage.getItem("lastMusicStreamId") || ""; } catch { /* noop */ }
          navigate(lastId ? `/music-stream?v=${encodeURIComponent(lastId)}` : "/music-stream");
        }}
        className="flex items-center gap-1.5 text-fuchsia-200 hover:text-white text-[11px] font-mono uppercase tracking-wider"
        title="Back to AiWebTools Music Stream"
      >
        <img src={mtvLogo} alt="" className="w-6 h-6 drop-shadow-[0_0_6px_rgba(168,85,247,0.7)]" draggable={false} />
        <Music className="w-3 h-3" />
        <span>Back to Music</span>
      </button>
      <button
        onClick={() => {
          try { sessionStorage.setItem("backToMusicDismissed", "1"); } catch { /* noop */ }
          setVisible(false);
        }}
        className="text-fuchsia-300/60 hover:text-white text-xs ml-1 leading-none"
        aria-label="Dismiss back to music"
      >
        ×
      </button>
    </div>
  );
};

export default BackToMusicPill;
