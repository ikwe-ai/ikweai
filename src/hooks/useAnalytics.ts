import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 page_view event on every route change.
 * Drop this hook inside a component that's rendered inside <BrowserRouter>.
 */
export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
    });
  }, [location.pathname, location.search]);
}
