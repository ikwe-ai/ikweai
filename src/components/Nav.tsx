import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const routes = [
  { path: "/reports", label: "Reports" },
  { path: "/technology/architecture", label: "Architecture" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const researchMenu = [
  {
    path: "/research",
    label: "Research Overview",
    desc: "Benchmark summary, methodology lineage, and canonical terminology.",
  },
  {
    path: "/research/writings",
    label: "Writing Library",
    desc: "Opinion pieces, research notes, and linked full essays.",
  },
  {
    path: "/research/case-studies",
    label: "Case Studies",
    desc: "Indexed behavioral risk cases and governance analyses.",
  },
  {
    path: "/research/press",
    label: "Press & Updates",
    desc: "Media notes, team updates, and release communications.",
  },
];

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const researchActive = useMemo(
    () => location.pathname === "/research" || location.pathname.startsWith("/research/"),
    [location.pathname]
  );

  const isRouteActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileResearchOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
        setMobileResearchOpen(false);
        setMegaOpen(false);
      }
    };

    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMobileResearchOpen(false);
        setMegaOpen(false);
      }
    };

    document.addEventListener("click", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header
      ref={headerRef}
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
          <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0">
            <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background-card/70 p-1 nav-pill">
              <Link
                to="/"
                className={`rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                  isRouteActive("/") ? "bg-lilac/15 text-lilac" : "text-foreground-muted hover:text-foreground"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMegaOpen((v) => !v)}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                    researchActive ? "bg-lilac/15 text-lilac" : "text-foreground-muted hover:text-foreground"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                  aria-expanded={megaOpen}
                  aria-controls="research-mega-menu"
                >
                  Research
                  <ChevronDown size={14} className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                </button>

                {megaOpen && (
                  <div id="research-mega-menu" className="mega-panel">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-foreground-subtle mb-3">
                          Research Sections
                        </p>
                        <div className="space-y-2">
                          {researchMenu.map((item) => (
                            <Link key={item.path} to={item.path} className="mega-link">
                              <span className="mega-link-title">{item.label}</span>
                              <span className="mega-link-desc">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mega-side">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Quick Access</p>
                        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                          Start with research overview, then move into writings and case-study details.
                        </p>
                        <a href="/consult" className="text-sm link-lilac">
                          Request consultation →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {routes.map((r) => {
                const active = isRouteActive(r.path);
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
            Request Consultation
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground-muted hover:text-foreground p-1 ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="font-mono text-sm">{mobileOpen ? "[×]" : "[≡]"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden nav-blur border-t border-border">
          <nav className="container mx-auto max-w-6xl px-6 py-5 flex flex-col gap-3">
            <Link
              to="/"
              className={`rounded border px-3 py-2 text-sm ${
                isRouteActive("/") ? "border-lilac/40 text-lilac bg-lilac/10" : "border-border text-foreground-muted"
              }`}
            >
              Home
            </Link>

            <div className="rounded border border-border p-2">
              <button
                type="button"
                onClick={() => setMobileResearchOpen((v) => !v)}
                className="w-full flex items-center justify-between text-sm text-foreground"
              >
                <span>Research Menu</span>
                <ChevronDown size={15} className={`transition-transform ${mobileResearchOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileResearchOpen && (
                <div className="mt-2 space-y-2">
                  {researchMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block rounded border px-3 py-2 text-sm ${
                        isRouteActive(item.path)
                          ? "border-lilac/40 text-lilac bg-lilac/10"
                          : "border-border text-foreground-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {routes.map((r) => {
              const active = isRouteActive(r.path);
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
              Request Consultation →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
