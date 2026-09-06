import React, { useEffect, useRef, useState } from "react";

const TIKTOK_URL = "https://www.tiktok.com/@aiwebtools";
const EMBED_SCRIPT = "https://www.tiktok.com/embed.js";

/**
 * Live TikTok window for @aiwebtools.
 * The official creator embed refreshes itself, so new posts show up here
 * automatically the moment they go live on TikTok.
 * The embed script is only fetched once this section scrolls into view,
 * keeping the homepage's first paint untouched.
 */
const TikTokFeedSection: React.FC = () => {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = hostRef.current;
    if (!node || visible) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SCRIPT}"]`,
    );
    if (existing) {
      // Script already present: ask it to re-scan for the new blockquote.
      const rescan = document.createElement("script");
      rescan.src = `${EMBED_SCRIPT}?r=${Date.now()}`;
      rescan.async = true;
      document.body.appendChild(rescan);
      return;
    }
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, [visible]);

  return (
    <section
      id="tiktok-feed"
      aria-labelledby="tiktok-feed-heading"
      className="py-16 relative"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #001a00 50%, #0a0a0a 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2
            id="tiktok-feed-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            <span
              className="text-green-400"
              style={{ textShadow: "0 0 20px rgba(0, 255, 0, 0.5)" }}
            >
              🎵 AIWEBTOOLS ON TIKTOK
            </span>
          </h2>
          <p className="text-lg text-green-200 max-w-2xl mx-auto mb-6">
            Watch our newest AI tool demos, tips and drops as we post them —
            straight from{" "}
            <span className="text-green-400 font-semibold">@aiwebtools</span>.
          </p>

          <a
            href={`${TIKTOK_URL}?refer=creator_embed`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow AIWebTools on TikTok (opens in a new window)"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold text-black bg-green-400 hover:bg-green-300 transition-colors shadow-[0_0_25px_rgba(0,255,0,0.35)]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.83-2.48v-3.2a5.79 5.79 0 1 0 4.92 5.72V9.01a7.35 7.35 0 0 0 4.3 1.38v-3.1a4.28 4.28 0 0 1-3.24-1.47Z" />
            </svg>
            Follow us on TikTok
          </a>
        </div>

        <div
          ref={hostRef}
          className="mx-auto w-full max-w-[780px] rounded-2xl border border-green-500/30 bg-black/40 p-2 md:p-4 overflow-hidden"
          style={{ minHeight: 560 }}
        >
          {visible ? (
            <blockquote
              className="tiktok-embed"
              cite={TIKTOK_URL}
              data-unique-id="aiwebtools"
              data-embed-type="creator"
              style={{ maxWidth: 780, minWidth: 288 }}
            >
              <section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${TIKTOK_URL}?refer=creator_embed`}
                >
                  @aiwebtools
                </a>
              </section>
            </blockquote>
          ) : (
            <div
              className="flex items-center justify-center text-green-300/70 text-sm"
              style={{ minHeight: 540 }}
            >
              Loading our latest TikTok posts…
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TikTokFeedSection;
