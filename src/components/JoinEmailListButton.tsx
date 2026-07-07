import { useState } from "react";
import { Mail } from "lucide-react";
import EmailSignupModal from "./EmailSignupModal";

interface Props {
  source?: string;
  variant?: "default" | "compact" | "mobile";
  className?: string;
  onBeforeOpen?: () => void;
}

const JoinEmailListButton = ({ source = "website", variant = "default", className = "", onBeforeOpen }: Props) => {
  const [open, setOpen] = useState(false);

  const base =
    "inline-flex items-center justify-center gap-2 font-mono font-bold rounded-lg transition-all duration-200 border-2 border-green-400/60 bg-black text-green-300 hover:bg-green-500/20 hover:border-green-300 hover:text-green-100";
  const size =
    variant === "compact"
      ? "px-3 py-1.5 text-xs"
      : variant === "mobile"
      ? "px-4 py-3 text-sm w-full"
      : "px-5 py-2.5 text-sm";

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onBeforeOpen?.();
          // Delay slightly so any parent dropdown/menu can close first
          setTimeout(() => setOpen(true), 60);
        }}
        className={`${base} ${size} ${className}`}
        style={{ boxShadow: "0 0 12px rgba(0,255,65,0.35)", textShadow: "0 0 6px rgba(0,255,65,0.5)" }}
        aria-label="Join our email list"
      >
        <Mail className="w-4 h-4" />
        <span>Join Email List</span>
      </button>
      <EmailSignupModal open={open} onOpenChange={setOpen} source={source} />
    </>
  );
};

export default JoinEmailListButton;