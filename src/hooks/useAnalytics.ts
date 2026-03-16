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

/**
 * Fire a named GA4 custom event.
 * Safe to call even when gtag is absent (ad blockers, dev environment).
 *
 * Conversion events wired across the funnel:
 *
 *   audit_cta_hero          Homepage hero primary CTA
 *   audit_cta_who_soft      Homepage #who "See how an Ikwe audit answers these questions →"
 *   audit_cta_drift_soft    Homepage #drift "Learn how the audit works →"
 *   audit_cta_two_ways      Homepage "Two ways" Evaluation & Audits primary CTA
 *   audit_cta_engage        Homepage #engage "Book an Audit Scope Call"
 *   audit_cta_close         Homepage #close "Book an Audit Scope Call"
 *   audit_cta_audit_page    /audit page "Book an Audit Scope Call" (outcomes block)
 *   audit_cta_research      /research page "Request an Audit →"
 *   cta_sample_report       Any "See a Sample Risk Report" secondary CTA
 *   cta_benchmark           Any "View the Benchmark" secondary CTA
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params ?? {});
}
