import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Benchmark", path: "/benchmark" },
  { label: "Research", path: "/research" },
  { label: "Deliverables", path: "/deliverables" },
  { label: "Samples", path: "/samples" },
  { label: "Audit & Validation", path: "/audit" },
  { label: "Trust", path: "/trust" },
] as const;

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
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

          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border bg-background-card p-1 nav-pill">
            <Link
              to="/"
              className={`rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                isActive("/") ? "bg-lilac-dim text-lilac-bright" : "text-foreground-muted hover:text-foreground"
              }`}
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                  isActive(link.path)
                    ? "bg-lilac-dim text-lilac-bright"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/intake#application-form"
            className="hidden md:inline-flex items-center gap-1.5 shrink-0 rounded bg-lilac px-4 py-2 text-xs font-medium text-primary-foreground uppercase tracking-widest hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Request Audit
          </Link>

          <button
            className="lg:hidden text-foreground-muted hover:text-foreground p-1 ml-auto"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="font-mono text-sm">{mobileOpen ? "[×]" : "[≡]"}</span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="lg:hidden nav-blur border-t border-border">
          <nav className="container mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col gap-3">
            <Link
              to="/"
              className={`rounded border px-3 py-2 text-sm ${
                isActive("/") ? "border-lilac text-lilac-bright bg-lilac-dim" : "border-border text-foreground-muted"
              }`}
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded border px-3 py-2 text-sm ${
                  isActive(link.path)
                    ? "border-lilac text-lilac-bright bg-lilac-dim"
                    : "border-border text-foreground-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/intake#application-form"
              className="mt-2 inline-flex w-full items-center justify-center rounded bg-lilac px-4 py-2.5 text-xs font-medium text-primary-foreground uppercase tracking-widest hover:bg-lilac-glow transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Request Audit →
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
