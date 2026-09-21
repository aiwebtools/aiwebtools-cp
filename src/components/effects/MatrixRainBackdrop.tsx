import { memo, useEffect, useRef } from "react";

/**
 * Living Matrix-code backdrop for chat surfaces.
 *
 * Falling glyph columns plus a few rising embers, painted on a single canvas
 * behind the conversation. It sits at low opacity so the text on top stays the
 * brightest thing on screen, pauses when scrolled out of view or when the tab is
 * hidden, and disables itself entirely for visitors who prefer reduced motion.
 */
type Props = {
  /** CSS color for the falling code (defaults to the room's accent). */
  color?: string;
  /** Warm ember color rising through the rain. */
  emberColor?: string;
  /** Overall strength, 0–1. */
  intensity?: number;
  className?: string;
};

const GLYPHS = "01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ<>{}[]/*+-=$#%&@";

const MatrixRainBackdrop = memo(
  ({ color = "rgba(0,255,65,1)", emberColor = "rgba(255,140,40,1)", intensity = 0.5, className = "" }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) return;

      const isSmall = window.innerWidth < 640;
      const fontSize = isSmall ? 12 : 14;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      let width = 0;
      let height = 0;
      let drops: number[] = [];
      let speeds: number[] = [];
      let embers: { x: number; y: number; r: number; v: number; life: number }[] = [];
      let raf = 0;
      let running = false;
      let last = 0;

      const resize = () => {
        const rect = canvas.getBoundingClientRect();
        width = Math.max(1, rect.width);
        height = Math.max(1, rect.height);
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const columns = Math.max(1, Math.floor(width / (fontSize + 4)));
        drops = Array.from({ length: columns }, () => Math.random() * -40);
        speeds = Array.from({ length: columns }, () => 0.35 + Math.random() * 0.75);
        embers = Array.from({ length: isSmall ? 5 : 9 }, () => ({
          x: Math.random() * width,
          y: height + Math.random() * height,
          r: 0.8 + Math.random() * 1.8,
          v: 0.25 + Math.random() * 0.6,
          life: Math.random(),
        }));
      };

      const frame = (now: number) => {
        if (!running) return;
        // ~30fps is plenty for code rain and halves the battery cost.
        if (now - last < 33) {
          raf = requestAnimationFrame(frame);
          return;
        }
        last = now;

        ctx.fillStyle = "rgba(0,0,0,0.16)";
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${fontSize}px "Courier New", monospace`;
        ctx.textBaseline = "top";
        for (let i = 0; i < drops.length; i++) {
          const x = i * (fontSize + 4);
          const y = drops[i] * fontSize;
          const glyph = GLYPHS[(Math.random() * GLYPHS.length) | 0];
          // Bright leading glyph, dimmer trail.
          ctx.fillStyle = color.replace(/[\d.]+\)$/, `${(0.85 * intensity).toFixed(3)})`);
          ctx.fillText(glyph, x, y);
          ctx.fillStyle = color.replace(/[\d.]+\)$/, `${(0.28 * intensity).toFixed(3)})`);
          ctx.fillText(GLYPHS[(Math.random() * GLYPHS.length) | 0], x, y - fontSize);

          drops[i] += speeds[i];
          if (y > height && Math.random() > 0.975) drops[i] = Math.random() * -20;
        }

        for (const e of embers) {
          e.y -= e.v;
          e.x += Math.sin((e.y + e.life * 100) / 40) * 0.35;
          if (e.y < -10) {
            e.y = height + Math.random() * 40;
            e.x = Math.random() * width;
          }
          const glow = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 6);
          glow.addColorStop(0, emberColor.replace(/[\d.]+\)$/, `${(0.5 * intensity).toFixed(3)})`));
          glow.addColorStop(1, emberColor.replace(/[\d.]+\)$/, "0)"));
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(e.x, e.y, e.r * 6, 0, Math.PI * 2);
          ctx.fill();
        }

        raf = requestAnimationFrame(frame);
      };

      const start = () => {
        if (running) return;
        running = true;
        raf = requestAnimationFrame(frame);
      };
      const stop = () => {
        running = false;
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
      };

      resize();

      const ro = new ResizeObserver(resize);
      ro.observe(canvas);

      const io = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting && document.visibilityState === "visible" ? start() : stop()),
        { threshold: 0.01 },
      );
      io.observe(canvas);

      const onVisibility = () => (document.visibilityState === "visible" ? start() : stop());
      document.addEventListener("visibilitychange", onVisibility);

      return () => {
        stop();
        ro.disconnect();
        io.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
      };
    }, [color, emberColor, intensity]);

    return (
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      />
    );
  },
);

MatrixRainBackdrop.displayName = "MatrixRainBackdrop";

export default MatrixRainBackdrop;
