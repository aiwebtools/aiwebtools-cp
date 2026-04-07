import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const APP_READY_EVENT = "ait:app-ready";

const AppReadySignal = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafOne = 0;
    let rafTwo = 0;
    let timeoutId = 0;

    const markReady = () => {
      (window as any).__AIT_APP_READY__ = true;
      document.documentElement.setAttribute("data-app-ready", "true");
      window.dispatchEvent(
        new CustomEvent(APP_READY_EVENT, {
          detail: { path: location.pathname },
        }),
      );
    };

    rafOne = window.requestAnimationFrame(() => {
      rafTwo = window.requestAnimationFrame(() => {
        timeoutId = window.setTimeout(markReady, 120);
      });
    });

    return () => {
      window.cancelAnimationFrame(rafOne);
      window.cancelAnimationFrame(rafTwo);
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  return null;
};

export default AppReadySignal;
