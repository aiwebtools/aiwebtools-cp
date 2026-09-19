import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const STAGES = ["Reading your message", "Thinking carefully", "Writing your reply"];

export const ThinkingStatus = ({ avatar, name }: { avatar: string; name: string }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const stage = STAGES[Math.min(Math.floor(seconds / 4), STAGES.length - 1)];

  return (
    <div className="gpt-thinking" role="status" aria-live="polite">
      <img src={avatar} alt="" className="gpt-thinking-avatar" aria-hidden="true" />
      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      <span><strong>{name}</strong> · {stage}</span>
      <span className="tabular-nums opacity-70">{seconds}s</span>
    </div>
  );
};
