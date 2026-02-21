import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageShell>
      <PageMeta
        title="Page Not Found | Ikwe.ai"
        description="The page you requested could not be found."
        path={location.pathname}
        noIndex
      />
      <section className="summary-hero border-b border-border">
        <div className="relative z-10 py-16 max-w-2xl">
          <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-3">404</p>
          <h1 className="font-display text-4xl text-foreground mb-3">Page not found</h1>
          <p className="text-sm text-foreground-muted leading-relaxed mb-6">
            The route <span className="font-mono text-foreground">{location.pathname}</span> does not map to a
            published public page.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/"
              className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
            >
              Return Home
            </a>
            <a
              href="/research"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
            >
              Open Research
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default NotFound;
