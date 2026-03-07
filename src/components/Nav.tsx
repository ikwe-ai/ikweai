import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const researchLinks = [
  {
    title: "Research Summary",
    desc: "EQ Safety Benchmark findings and public baseline scores",
    path: "/research",
  },
  {
    title: "Benchmark Framework",
    desc: "Eight dimensions, Safety Gate methodology, 79 scenarios",
    path: "/benchmark",
  },
  {
    title: "Writing Library",
    desc: "Analysis and commentary on AI behavioral safety",
    path: "/archive/research/writings",
  },
  {
    title: "Case Studies",
    desc: "Applied evaluation examples across deployment contexts",
    path: "/archive/research/case-studies",
  },
] as const;

const homeSectionLinks = [
  { label: "The Problem", href: "#thesis" },
  { label: "The Benchmark", href: "#benchmark" },
  { label: "Safety Gate", href: "#safety-gate" },
  { label: "How We Evaluate", href: "#system" },
  { label: "Work With Us", href: "#engage" },
] as const;

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const researchRef = useRef<HTMLDivElement>(null);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileResearchOpen(false);
    setResearchOpen(false);
  }, [location.pathname]);

  // Close mega panel on outside click (touch-device fallback)
  useEffect(() => {
    if (!researchOpen) return;
    const handler = (e: MouseEvent) => {
      if (researchRef.current && !researchRef.current.contains(e.target as Node)) {
        setResearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [researchOpen]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname === path || location.pathname.startsWith(`${path}/`);

  const isResearchActive =
    isActive("/research") ||
    isActive("/benchmark") ||
    isActive("/archive/research");

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileResearchOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isHome ? "home-nav-shell" : scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className={`container mx-auto max-w-6xl px-4 sm:px-6 ${isHome ? "home-nav-container" : ""}`}>
        <div className={`flex h-16 items-center justify-between gap-4 ${isHome ? "home-nav-bar" : ""}`}>

          {/* ── Brand ── */}
          <Link
            to="/"
            className={`hover:opacity-90 transition-opacity shrink-0 ${
              isHome ? "home-nav-brand" : "flex items-center gap-2.5"
            }`}
            aria-label="ikwe.ai home"
          >
            {isHome ? (
              <>
                <span aria-hidden="true" className="home-nav-brand-mark" />
                <span className="home-nav-brand-name">ikwe.ai</span>
              </>
            ) : (
              <>
                <img
                  src="/ikwe_logo_dark.png"
                  alt="ikwe.ai"
                  width={28}
                  height={28}
                  style={{ borderRadius: "50%", display: "block" }}
                />
                <span className="font-display text-lg font-medium tracking-tight text-foreground">
                  ikwe<span className="text-lilac">.ai</span>
                </span>
              </>
            )}
          </Link>

          {/* ── Desktop nav ── */}
          {isHome ? (
            <nav className="home-nav-links hidden lg:flex" aria-label="Homepage sections">
              {homeSectionLinks.map((link) => (
                <a key={link.href} href={link.href} className="home-nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
          ) : (
            <nav
              className="hidden lg:flex items-center gap-1 rounded-full border border-border bg-background-card p-1 nav-pill"
              aria-label="Site navigation"
            >
              <Link
                to="/"
                className={`nav-link-pill rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                  isActive("/") ? "bg-lilac-dim text-lilac-bright" : "text-foreground-muted hover:text-foreground"
                }`}
              >
                Home
              </Link>

              {/* ── Research dropdown ── */}
              <div
                ref={researchRef}
                className="relative"
                onMouseEnter={() => setResearchOpen(true)}
                onMouseLeave={() => setResearchOpen(false)}
              >
                <button
                  onClick={() => setResearchOpen((v) => !v)}
                  aria-expanded={researchOpen}
                  aria-haspopup="true"
                  className={`nav-link-pill rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isResearchActive ? "bg-lilac-dim text-lilac-bright" : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  Research
                  <span
                    aria-hidden="true"
                    className="text-[9px] opacity-50 transition-transform duration-200 inline-block"
                    style={{ transform: researchOpen ? "rotate(180deg)" : "none" }}
                  >
                    ▾
                  </span>
                </button>

                {researchOpen && (
                  <div className="mega-panel" role="menu" aria-label="Research pages">
                    <div className="grid grid-cols-2 gap-2">
                      {researchLinks.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="mega-link"
                          role="menuitem"
                          onClick={() => setResearchOpen(false)}
                        >
                          <span className="mega-link-title">{item.title}</span>
                          <span className="mega-link-desc">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/audit"
                className={`nav-link-pill rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                  isActive("/audit") ? "bg-lilac-dim text-lilac-bright" : "text-foreground-muted hover:text-foreground"
                }`}
              >
                Audit
              </Link>

              <Link
                to="/trust"
                className={`nav-link-pill rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                  isActive("/trust") ? "bg-lilac-dim text-lilac-bright" : "text-foreground-muted hover:text-foreground"
                }`}
              >
                Trust
              </Link>
            </nav>
          )}

          {/* ── CTA ── */}
          {isHome ? (
            <Link to="/intake#application-form" className="home-nav-cta hidden md:inline-flex">
              Request Evaluation
            </Link>
          ) : (
            <Link
              to="/intake#application-form"
              className="hidden md:inline-flex items-center gap-1.5 shrink-0 rounded bg-lilac px-4 py-2 text-xs font-medium text-primary-foreground uppercase tracking-widest hover:bg-lilac-glow transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Request Evaluation
            </Link>
          )}

          {/* ── Hamburger ── */}
          <button
            className={`lg:hidden p-1 ml-auto ${isHome ? "home-nav-menu" : "text-foreground-muted hover:text-foreground"}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="font-mono text-sm">{mobileOpen ? "[×]" : "[≡]"}</span>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen ? (
        isHome ? (
          <div className="home-nav-mobile lg:hidden">
            <nav
              className="container mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col gap-3"
              aria-label="Homepage sections"
            >
              {homeSectionLinks.map((link) => (
                <a key={link.href} href={link.href} className="home-nav-mobile-link" onClick={closeMobileMenu}>
                  {link.label}
                </a>
              ))}
              <Link to="/intake#application-form" className="home-nav-mobile-cta" onClick={closeMobileMenu}>
                Request Evaluation
              </Link>
            </nav>
          </div>
        ) : (
          <div className="lg:hidden nav-blur border-t border-border">
            <nav className="container mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col gap-2">
              <Link
                to="/"
                className={`rounded border px-3 py-2 text-sm ${
                  isActive("/") ? "border-lilac text-lilac-bright bg-lilac-dim" : "border-border text-foreground-muted"
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              {/* Research group — accordion on mobile */}
              <button
                onClick={() => setMobileResearchOpen((v) => !v)}
                className={`text-left rounded border px-3 py-2 text-sm flex items-center justify-between ${
                  isResearchActive
                    ? "border-lilac text-lilac-bright bg-lilac-dim"
                    : "border-border text-foreground-muted"
                }`}
              >
                <span>Research</span>
                <span className="font-mono text-[10px] opacity-50">{mobileResearchOpen ? "▲" : "▼"}</span>
              </button>

              {mobileResearchOpen && (
                <div className="pl-3 flex flex-col gap-1.5 pb-1">
                  {researchLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="rounded border border-border/50 px-3 py-2 text-sm text-foreground-subtle hover:text-foreground hover:border-border transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/audit"
                className={`rounded border px-3 py-2 text-sm ${
                  isActive("/audit")
                    ? "border-lilac text-lilac-bright bg-lilac-dim"
                    : "border-border text-foreground-muted"
                }`}
                onClick={closeMobileMenu}
              >
                Audit
              </Link>

              <Link
                to="/trust"
                className={`rounded border px-3 py-2 text-sm ${
                  isActive("/trust")
                    ? "border-lilac text-lilac-bright bg-lilac-dim"
                    : "border-border text-foreground-muted"
                }`}
                onClick={closeMobileMenu}
              >
                Trust
              </Link>

              <Link
                to="/intake#application-form"
                className="mt-2 inline-flex w-full items-center justify-center rounded bg-lilac px-4 py-2.5 text-xs font-medium text-primary-foreground uppercase tracking-widest hover:bg-lilac-glow transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
                onClick={closeMobileMenu}
              >
                Request Evaluation →
              </Link>
            </nav>
          </div>
        )
      ) : null}
    </header>
  );
}
