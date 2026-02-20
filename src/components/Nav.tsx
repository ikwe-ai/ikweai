import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const routes = [
  { path: "/", label: "Home" },
  { path: "/research", label: "Research" },
  { path: "/reports", label: "Reports" },
  { path: "/technology/architecture", label: "Architecture" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("header")) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo + Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity shrink-0"
            aria-label="Ikwe.ai home"
          >
            <img
              src="/ikwe_logo_dark.png"
              alt="Ikwe.ai"
              width={28}
              height={28}
              style={{ borderRadius: "50%", display: "block" }}
            />
            <span className="font-display text-lg font-medium tracking-tight text-foreground">
              Ikwe<span className="text-lilac">.ai</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center justify-center flex-1 min-w-0">
            <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background-card/70 p-1">
              {routes.map((r) => {
                const active = location.pathname === r.path;
                return (
                  <Link
                    key={r.path}
                    to={r.path}
                    className={`rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                      active
                        ? "bg-lilac/15 text-lilac"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {r.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Consultation CTA */}
          <a
            href="/consult"
            className="hidden md:inline-flex items-center gap-1.5 shrink-0 rounded bg-lilac px-4 py-2 text-xs font-medium text-primary-foreground uppercase tracking-widest hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Start Consult
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground-muted hover:text-foreground p-1 ml-auto"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="font-mono text-sm">{open ? "[×]" : "[≡]"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-blur border-t border-border">
          <nav className="container mx-auto max-w-6xl px-6 py-5 flex flex-col gap-3">
            {routes.map((r) => {
              const active = location.pathname === r.path;
              return (
                <Link
                  key={r.path}
                  to={r.path}
                  className={`rounded border px-3 py-2 text-sm ${
                    active ? "border-lilac/40 text-lilac bg-lilac/10" : "border-border text-foreground-muted"
                  }`}
                >
                  {r.label}
                </Link>
              );
            })}
            {/* CTA in mobile menu */}
            <a
              href="/consult"
              className="mt-2 inline-flex w-full items-center justify-center rounded bg-lilac px-4 py-2.5 text-xs font-medium text-primary-foreground uppercase tracking-widest hover:bg-lilac-glow transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Start Consultation →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
