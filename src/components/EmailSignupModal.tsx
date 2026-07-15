import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmailSignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

const EmailSignupModal = ({ open, onOpenChange, source = "website" }: EmailSignupModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("subscribe-email", {
        body: { email: email.trim().toLowerCase(), name: name.trim() || null, source },
      });
      if (error) throw error;
      setDone(true);
      toast({
        title: "🕊️ Check your inbox",
        description: "Click the confirmation link we just emailed to activate your subscription.",
      });
      setTimeout(() => {
        onOpenChange(false);
        setDone(false);
        setEmail("");
        setName("");
      }, 3000);
    } catch (err: any) {
      console.error("Subscribe error:", err);
      toast({ title: "Signup failed", description: err?.message || "Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black border-2 border-green-500/50 text-green-100 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-green-400 font-mono text-xl flex items-center gap-2" style={{ textShadow: "0 0 8px rgba(0,255,65,0.6)" }}>
            <Mail className="w-5 h-5" /> Join the AIWebTools Signal
          </DialogTitle>
          <DialogDescription className="text-green-200/80 font-mono text-sm">
            Get weekly transmissions of the newest AI tools, custom GPTs, and music videos — straight to your inbox.
          </DialogDescription>
        </DialogHeader>

        {done ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-400 mb-3" style={{ filter: "drop-shadow(0 0 12px rgba(0,255,65,0.8))" }} />
            <p className="text-green-300 font-mono">Check your inbox 📬</p>
            <p className="text-green-200/70 font-mono text-xs mt-2 max-w-sm">
              Click the confirmation link we just sent to activate your subscription. If you don't see it, check spam.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <Input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-black/60 border-green-500/40 text-green-100 placeholder:text-green-500/40 font-mono"
              maxLength={200}
            />
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-black/60 border-green-500/40 text-green-100 placeholder:text-green-500/40 font-mono"
              maxLength={320}
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold font-mono"
              style={{ boxShadow: "0 0 20px rgba(0,255,65,0.5)" }}
            >
              {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Subscribing…</> : "🕊️ Join the Signal"}
            </Button>
            <p className="text-[10px] text-green-500/60 text-center font-mono">
              No spam. Unsubscribe anytime. Use AI for good.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EmailSignupModal;