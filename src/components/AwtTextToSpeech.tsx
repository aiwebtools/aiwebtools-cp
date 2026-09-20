import React, { useEffect, useMemo, useRef, useState } from "react";
import { Volume2, Square, Play, Pause, Mic2 } from "lucide-react";

/**
 * AWT Free Text-to-Speech Generator.
 * Uses the browser's built-in speech engine so it is truly free, instant,
 * works offline after load, and never touches a server or API key.
 */
const AwtTextToSpeech: React.FC = () => {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const [text, setText] = useState(
    "Welcome to AI Web Tools — the largest free directory of AI tools on the internet."
  );
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceName] = useState<string>("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!supported) return;
    const load = () => {
      const list = window.speechSynthesis.getVoices();
      if (list.length) {
        setVoices(list);
        setVoiceName((current) => {
          if (current) return current;
          const preferred =
            list.find((v) => v.lang.startsWith("en") && /google/i.test(v.name)) ||
            list.find((v) => v.lang.startsWith("en") && v.default) ||
            list.find((v) => v.lang.startsWith("en")) ||
            list[0];
          return preferred?.name ?? "";
        });
      }
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  const englishFirst = useMemo(() => {
    const en = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
    const rest = voices.filter((v) => !v.lang.toLowerCase().startsWith("en"));
    return [...en, ...rest];
  }, [voices]);

  const stop = () => {
    window.speechSynthesis.cancel();
    utterRef.current = null;
    setSpeaking(false);
    setPaused(false);
  };

  const speak = () => {
    const trimmed = text.trim();
    if (!trimmed || !supported) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(trimmed);
    const voice = voices.find((v) => v.name === voiceName);
    if (voice) utterance.voice = voice;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.onend = () => {
      setSpeaking(false);
      setPaused(false);
      utterRef.current = null;
    };
    utterance.onerror = () => {
      setSpeaking(false);
      setPaused(false);
      utterRef.current = null;
    };
    utterRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
    setPaused(false);
  };

  const togglePause = () => {
    if (!speaking) return;
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
    } else {
      window.speechSynthesis.pause();
      setPaused(true);
    }
  };

  if (!supported) return null;

  const charCount = text.length;

  return (
    <section
      aria-label="Free AI Web Tools text to speech generator"
      className="py-12 md:py-16 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #001400 50%, #0a0a0a 100%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-green-400" style={{ textShadow: "0 0 20px rgba(0, 255, 0, 0.5)" }}>
              🔊 FREE AWT TEXT-TO-SPEECH GENERATOR
            </span>
          </h2>
          <p className="text-green-200 max-w-2xl mx-auto">
            Type or paste anything below and AIWebTools will read it out loud — free forever,
            no account, no limits, right in your browser.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl border border-green-500/30 bg-slate-950/80 p-4 sm:p-6 shadow-2xl shadow-green-500/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-green-500/40 bg-green-500/10">
              <Mic2 className="h-4 w-4 text-green-400" aria-hidden="true" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-green-400">
              AWT Voice Studio
            </span>
            <span className="ml-auto text-[10px] text-green-200/70">{charCount.toLocaleString()} characters</span>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            maxLength={5000}
            placeholder="Type or paste the words you want spoken out loud…"
            aria-label="Text to speak"
            className="w-full resize-y rounded-xl border border-green-500/25 bg-black/60 p-3 text-sm text-green-100 placeholder:text-green-200/40 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 min-h-[120px]"
          />

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <label className="flex flex-col gap-1 sm:col-span-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-green-300/80">Voice</span>
              <select
                value={voiceName}
                onChange={(e) => setVoiceName(e.target.value)}
                className="w-full rounded-lg border border-green-500/25 bg-black/70 px-2 py-2 text-xs text-green-100 focus:border-green-400 focus:outline-none"
              >
                {englishFirst.map((v) => (
                  <option key={`${v.name}-${v.lang}`} value={v.name}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-green-300/80">
                Speed · {rate.toFixed(2)}x
              </span>
              <input
                type="range"
                min={0.5}
                max={2}
                step={0.05}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="accent-green-400 mt-2"
                aria-label="Speech speed"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-green-300/80">
                Pitch · {pitch.toFixed(2)}
              </span>
              <input
                type="range"
                min={0.5}
                max={2}
                step={0.05}
                value={pitch}
                onChange={(e) => setPitch(Number(e.target.value))}
                className="accent-green-400 mt-2"
                aria-label="Speech pitch"
              />
            </label>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={speak}
              disabled={!text.trim()}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2.5 text-sm font-bold text-white transition hover:from-green-600 hover:to-emerald-700 disabled:opacity-50"
              style={{ boxShadow: "0 0 20px rgba(0, 255, 0, 0.3)" }}
            >
              <Volume2 className="h-4 w-4" aria-hidden="true" />
              Speak It
            </button>
            <button
              type="button"
              onClick={togglePause}
              disabled={!speaking}
              className="inline-flex items-center gap-2 rounded-full border border-green-500/50 px-5 py-2.5 text-sm font-bold text-green-300 transition hover:bg-green-500/10 disabled:opacity-40"
            >
              {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
              {paused ? "Resume" : "Pause"}
            </button>
            <button
              type="button"
              onClick={stop}
              disabled={!speaking}
              className="inline-flex items-center gap-2 rounded-full border border-green-500/50 px-5 py-2.5 text-sm font-bold text-green-300 transition hover:bg-green-500/10 disabled:opacity-40"
            >
              <Square className="h-4 w-4" aria-hidden="true" />
              Stop
            </button>
          </div>

          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.18em] text-green-200/60">
            100% free · no sign-up · powered by your device · AIWEBTOOLS.APP
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwtTextToSpeech;
