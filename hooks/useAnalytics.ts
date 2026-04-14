import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    // Customer.io CDP analytics snippet
    cioanalytics?: {
      identify: (userId: string, traits?: Record<string, unknown>) => void;
      track: (event: string, properties?: Record<string, unknown>) => void;
      page: (name?: string, properties?: Record<string, unknown>) => void;
      reset: () => void;
      push: (args: unknown[]) => void;
    };
  }
}

/**
 * Fires a GA4 page_view event on every route change.
 * Drop this hook inside a component that's rendered inside <BrowserRouter>.
 */
export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;

    // GA4 page view
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: path,
        page_location: window.location.href,
      });
    }

    // Customer.io page view (SPA — must be called manually per route)
    // Guard: only call if the real analytics.min.js has loaded (not the stub)
    if (typeof window.cioanalytics?.page === 'function' &&
        typeof window.cioanalytics?.push !== 'function') {
      window.cioanalytics.page(document.title, {
        path,
        url: window.location.href,
        title: document.title,
      });
    }
  }, [location.pathname, location.search]);
}

/**
 * Identify a visitor in Customer.io.
 * Call after a form submission when you have their email.
 */
export function cioIdentify(
  email: string,
  traits?: Record<string, unknown>,
) {
  try {
    if (typeof window.cioanalytics?.identify === 'function') {
      window.cioanalytics.identify(email, { email, ...traits });
    }
  } catch { /* silently skip if CIO not loaded */ }
}

/**
 * Fire a named Customer.io event.
 */
export function cioTrack(
  event: string,
  properties?: Record<string, unknown>,
) {
  try {
    if (typeof window.cioanalytics?.track === 'function') {
      window.cioanalytics.track(event, properties ?? {});
    }
  } catch { /* silently skip if CIO not loaded */ }
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
