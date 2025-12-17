import { useState, useEffect, useRef, memo } from "react";

interface KeystrokeLatencyMeterProps {
  inputSelector?: string;
}

const KeystrokeLatencyMeter = memo(({ inputSelector = '[data-testid="global-search-input"]' }: KeystrokeLatencyMeterProps) => {
  const [latency, setLatency] = useState<number | null>(null);
  const [avg, setAvg] = useState<number | null>(null);
  const lastKeystroke = useRef<number>(0);
  const samples = useRef<number[]>([]);

  useEffect(() => {
    // Only run in development
    if (import.meta.env.PROD) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (!target.matches(inputSelector)) return;

      const now = performance.now();
      if (lastKeystroke.current > 0) {
        const delta = now - lastKeystroke.current;
        setLatency(Math.round(delta));
        
        // Keep last 10 samples for average
        samples.current.push(delta);
        if (samples.current.length > 10) samples.current.shift();
        setAvg(Math.round(samples.current.reduce((a, b) => a + b, 0) / samples.current.length));
      }
      lastKeystroke.current = now;
    };

    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, [inputSelector]);

  // Only show in dev
  if (import.meta.env.PROD) return null;

  const getColor = (ms: number | null) => {
    if (ms === null) return "text-gray-500";
    if (ms < 50) return "text-green-400";
    if (ms < 100) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="fixed bottom-2 left-2 z-[9999] bg-black/90 border border-gray-700 rounded px-2 py-1 text-xs font-mono pointer-events-none">
      <div className="flex gap-3">
        <span className="text-gray-400">⌨️</span>
        <span className={getColor(latency)}>
          {latency !== null ? `${latency}ms` : "--"}
        </span>
        <span className="text-gray-500">|</span>
        <span className="text-gray-400">avg:</span>
        <span className={getColor(avg)}>
          {avg !== null ? `${avg}ms` : "--"}
        </span>
      </div>
    </div>
  );
});

KeystrokeLatencyMeter.displayName = "KeystrokeLatencyMeter";
export default KeystrokeLatencyMeter;
