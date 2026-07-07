import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const categories = [
  "Education",
  "Productivity",
  "Creative",
  "Business",
  "Developer",
  "Research",
  "Healthcare",
  "Entertainment",
  "Communication",
  "Other",
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const empty = {
  name: "",
  description: "",
  url: "",
  category: "",
  videoUrl: "",
  imageUrl: "",
  submitterName: "",
  submitterEmail: "",
};

const SubmitToolModal = ({ open, onOpenChange }: Props) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(empty);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.url || !formData.category || !formData.submitterEmail) {
      toast({ title: "Missing information", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-tool", { body: formData });
      if (error) throw error;
      setDone(true);
      toast({ title: "🕊️ Submission received", description: "The AIWebTools team has your tool — we'll review it soon." });
      setTimeout(() => {
        onOpenChange(false);
        setDone(false);
        setFormData(empty);
      }, 2200);
    } catch (err: any) {
      console.error("Submit tool error:", err);
      toast({ title: "Submission failed", description: err?.message || "Please try again in a moment.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black border-2 border-green-500/50 text-green-100 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle
            className="text-green-400 font-mono text-xl flex items-center gap-2"
            style={{ textShadow: "0 0 8px rgba(0,255,65,0.6)" }}
          >
            <Send className="w-5 h-5" /> Submit Your AI Tool
          </DialogTitle>
          <DialogDescription className="text-green-200/80 font-mono text-sm">
            Send your tool straight to the AIWebTools review team — no email client required.
          </DialogDescription>
        </DialogHeader>

        {done ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-400 mb-3" style={{ filter: "drop-shadow(0 0 12px rgba(0,255,65,0.8))" }} />
            <p className="text-green-300 font-mono">Submission delivered. 🕊️ Thank you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 mt-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="stm-name" className="text-green-300 font-mono">Your Name</Label>
                <Input
                  id="stm-name"
                  value={formData.submitterName}
                  onChange={(e) => setFormData({ ...formData, submitterName: e.target.value })}
                  placeholder="Optional"
                  className="bg-black/60 border-green-500/40 text-green-100 placeholder:text-green-500/40 font-mono"
                  maxLength={200}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stm-email" className="text-green-300 font-mono">Your Email *</Label>
                <Input
                  id="stm-email"
                  type="email"
                  required
                  value={formData.submitterEmail}
                  onChange={(e) => setFormData({ ...formData, submitterEmail: e.target.value })}
                  placeholder="you@example.com"
                  className="bg-black/60 border-green-500/40 text-green-100 placeholder:text-green-500/40 font-mono"
                  maxLength={320}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="stm-tool-name" className="text-green-300 font-mono">Tool Name *</Label>
              <Input
                id="stm-tool-name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="My Awesome AI Tool"
                className="bg-black/60 border-green-500/40 text-green-100 placeholder:text-green-500/40 font-mono"
                maxLength={200}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stm-desc" className="text-green-300 font-mono">Description *</Label>
              <Textarea
                id="stm-desc"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="What does your tool do, who is it for, what problem does it solve?"
                rows={4}
                className="bg-black/60 border-green-500/40 text-green-100 placeholder:text-green-500/40 font-mono"
                maxLength={2000}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="stm-url" className="text-green-300 font-mono">Tool URL *</Label>
                <Input
                  id="stm-url"
                  type="url"
                  required
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="https://yourtool.com"
                  className="bg-black/60 border-green-500/40 text-green-100 placeholder:text-green-500/40 font-mono"
                  maxLength={2048}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stm-cat" className="text-green-300 font-mono">Category *</Label>
                <Select value={formData.category} onValueChange={(v) => setFormData({ ...formData, category: v })}>
                  <SelectTrigger id="stm-cat" className="bg-black/60 border-green-500/40 text-green-100 font-mono">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-green-500/40 text-green-100">
                    {categories.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="stm-video" className="text-green-300 font-mono">YouTube Demo (optional)</Label>
                <Input
                  id="stm-video"
                  type="url"
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  placeholder="https://youtube.com/watch?v=..."
                  className="bg-black/60 border-green-500/40 text-green-100 placeholder:text-green-500/40 font-mono"
                  maxLength={2048}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stm-img" className="text-green-300 font-mono">Image URL (optional)</Label>
                <Input
                  id="stm-img"
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://example.com/image.png"
                  className="bg-black/60 border-green-500/40 text-green-100 placeholder:text-green-500/40 font-mono"
                  maxLength={2048}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold font-mono"
              style={{ boxShadow: "0 0 20px rgba(0,255,65,0.5)" }}
            >
              {submitting ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</>
              ) : (
                <><Send className="w-4 h-4 mr-2" /> Submit Tool for Review</>
              )}
            </Button>
            <p className="text-[10px] text-green-500/60 text-center font-mono">
              Delivered securely to the AIWebTools review team. Admin addresses are stored as encrypted secrets.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SubmitToolModal;