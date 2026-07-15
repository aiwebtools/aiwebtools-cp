import { useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

/**
 * Reads ?confirm=<token> or ?unsubscribe=<token> from the URL and calls the
 * matching edge function, then strips the param from the URL.
 */
const ConfirmSubscriptionHandler = () => {
  const { toast } = useToast();
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const params = new URLSearchParams(window.location.search);
    const confirmToken = params.get("confirm");
    const unsubToken = params.get("unsubscribe");
    if (!confirmToken && !unsubToken) return;

    const cleanUrl = () => {
      params.delete("confirm");
      params.delete("unsubscribe");
      const qs = params.toString();
      const url = window.location.pathname + (qs ? `?${qs}` : "") + window.location.hash;
      window.history.replaceState({}, "", url);
    };

    (async () => {
      try {
        if (confirmToken) {
          const { error } = await supabase.functions.invoke("confirm-subscription", {
            body: { token: confirmToken },
          });
          if (error) throw error;
          toast({
            title: "🕊️ Subscription confirmed",
            description: "You're on the AIWebTools Signal. Welcome.",
          });
        } else if (unsubToken) {
          const { error } = await supabase.functions.invoke("unsubscribe-email", {
            body: { token: unsubToken },
          });
          if (error) throw error;
          toast({
            title: "Unsubscribed",
            description: "You've been removed from the list.",
          });
        }
      } catch (err: any) {
        console.error("Subscription action failed:", err);
        toast({
          title: "Link expired or invalid",
          description: "Please try signing up again.",
          variant: "destructive",
        });
      } finally {
        cleanUrl();
      }
    })();
  }, [toast]);

  return null;
};

export default ConfirmSubscriptionHandler;