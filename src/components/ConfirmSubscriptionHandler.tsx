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
    if (!confirmToken) return;

    const cleanUrl = () => {
      params.delete("confirm");
      const qs = params.toString();
      const url = window.location.pathname + (qs ? `?${qs}` : "") + window.location.hash;
      window.history.replaceState({}, "", url);
    };

    (async () => {
      try {
        const { error } = await supabase.functions.invoke("confirm-subscription", {
          body: { token: confirmToken },
        });
        if (error) throw error;
        toast({
          title: "🕊️ Subscription confirmed",
          description: "You're on the AIWebTools Signal. Welcome.",
        });
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