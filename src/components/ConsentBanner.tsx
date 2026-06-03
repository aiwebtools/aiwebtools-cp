import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getConsentAccepted, setConsentAccepted } from "@/utils/consent";

const ConsentBanner: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Never show on the existing /welcome gate route.
    if (location.pathname === "/welcome") {
      setOpen(false);
      return;
    }

    const hasAccepted = getConsentAccepted();
    setOpen(!hasAccepted);
  }, [location.pathname]);

  const handleAccept = () => {
    setConsentAccepted(true);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <aside
      role="dialog"
      aria-label="Site guidelines"
      className="fixed inset-x-0 bottom-0 z-50"
    >
      <div className="mx-auto w-full max-w-5xl px-4 pb-4">
        <div className="rounded-2xl border border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-lg">
          <div className="p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
            <div className="flex-1">
              <p className="text-sm md:text-base font-semibold text-foreground">
                Quick guidelines before you browse
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                21+ only • Educational use • You may be interacting with AI — verify outputs • Use AI ethically.{' '}
                <Link to="/disclaimers" className="underline underline-offset-4">
                  Read full disclaimers
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={handleAccept} className="font-semibold">
                I Understand
              </Button>
              <Button
                variant="outline"
                asChild
                className="font-semibold"
              >
                <Link to="/welcome">Open full screen</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ConsentBanner;
