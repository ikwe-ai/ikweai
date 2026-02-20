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
        <div className="flex h-14 items-center justify-between gap-6">

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
          <nav className="hidden md:flex items-center gap-5 flex-1">
            {routes.map((r) => {
              const active = location.pathname === r.path;
              return (
                <Link
                  key={r.path}
                  to={r.path}
                  className={`text-sm transition-colors whitespace-nowrap ${
                    active
                      ? "text-lilac"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {r.label}
                </Link>
              );
            })}
          </nav>

          {/* Request Audit CTA */}
          <a
            href="/audit"
            className="hidden md:inline-flex items-center gap-1.5 shrink-0 rounded border border-lilac/30 px-4 py-1.5 text-xs font-medium text-lilac uppercase tracking-widest hover:bg-lilac/10 transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Request Audit
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
          <nav className="container mx-auto max-w-6xl px-6 py-5 flex flex-col gap-4">
            {routes.map((r) => {
              const active = location.pathname === r.path;
              return (
                <Link
                  key={r.path}
                  to={r.path}
                  className={`text-sm py-1 border-b border-border/50 pb-3 ${
                    active ? "text-lilac" : "text-foreground-muted"
                  }`}
                >
                  {r.label}
                </Link>
              );
            })}
            {/* CTA in mobile menu */}
            <a
              href="/audit"
              className="mt-2 inline-flex items-center justify-center rounded border border-lilac/40 px-4 py-2.5 text-xs font-medium text-lilac uppercase tracking-widest hover:bg-lilac/10 transition-colors self-start"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Request Audit →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
