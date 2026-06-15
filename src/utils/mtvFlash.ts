import mtvLogo from "@/assets/mtv-aiwebtools-logo.png";

/**
 * Brief full-screen MTV pop-out flash used when entering the Music Stream.
 * Returns a Promise that resolves after the flash plays (caller can navigate).
 */
export const playMtvFlash = (durationMs = 850): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof document === "undefined") return resolve();

    const root = document.createElement("div");
    root.setAttribute("aria-hidden", "true");
    root.style.cssText = [
      "position:fixed",
      "inset:0",
      "z-index:2147483647",
      "background:radial-gradient(circle at center, rgba(168,85,247,0.35), rgba(0,0,0,0.95) 60%, #000 100%)",
      "display:flex",
      "align-items:center",
      "justify-content:center",
      "pointer-events:none",
      "overflow:hidden",
    ].join(";");

    const style = document.createElement("style");
    style.textContent = `
      @keyframes mtvFlashPop {
        0%   { transform: perspective(900px) translateZ(-900px) rotateY(180deg) scale(0.1); opacity:0; filter: blur(24px); }
        45%  { transform: perspective(900px) translateZ(0) rotateY(0) scale(1.35); opacity:1; filter: blur(0); }
        80%  { transform: perspective(900px) translateZ(0) rotateY(0) scale(1.05); opacity:1; }
        100% { transform: perspective(900px) translateZ(0) rotateY(0) scale(0.25); opacity:0; }
      }
      @keyframes mtvFlashBurst {
        0% { opacity:0; transform: scale(0.5); }
        30% { opacity:1; }
        100% { opacity:0; transform: scale(2.4); }
      }
    `;
    root.appendChild(style);

    const burst = document.createElement("div");
    burst.style.cssText = [
      "position:absolute",
      "inset:0",
      "font-family:ui-monospace, SFMono-Regular, monospace",
      "font-size:10px",
      "line-height:12px",
      "color:#00ff41",
      "white-space:pre",
      "overflow:hidden",
      "text-shadow:0 0 6px #00ff41",
      `animation: mtvFlashBurst ${durationMs}ms ease-out forwards`,
    ].join(";");
    burst.textContent = Array.from({ length: 50 })
      .map(() => "01001010 11001101 10101110 11110000 00111100 11000011")
      .join("\n");
    root.appendChild(burst);

    const img = document.createElement("img");
    img.src = mtvLogo;
    img.alt = "";
    img.draggable = false;
    img.style.cssText = [
      "width:60vmin",
      "height:60vmin",
      "max-width:600px",
      "max-height:600px",
      "object-fit:contain",
      "filter:drop-shadow(0 0 60px rgba(168,85,247,0.9))",
      `animation: mtvFlashPop ${durationMs}ms cubic-bezier(.2,.7,.2,1) forwards`,
    ].join(";");
    root.appendChild(img);

    document.body.appendChild(root);

    // Tiny audio chord
    try {
      const AC = (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext
        || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AC) {
        const ctx = new AC();
        [392, 523.25, 659.25].forEach((f, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = "sawtooth";
          o.frequency.value = f;
          g.gain.value = 0.0001;
          o.connect(g).connect(ctx.destination);
          const t0 = ctx.currentTime + i * 0.07;
          g.gain.exponentialRampToValueAtTime(0.18, t0 + 0.04);
          g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.45);
          o.start(t0);
          o.stop(t0 + 0.5);
        });
      }
    } catch {
      /* audio optional */
    }

    window.setTimeout(() => {
      try { root.remove(); } catch { /* noop */ }
      resolve();
    }, durationMs);
  });
};
