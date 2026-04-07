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

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const researchRef = useRef<HTMLDivElement>(null);

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
    isActive("/archive/research");

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileResearchOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* ── Brand ── */}
          <Link
            to="/"
            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity shrink-0"
            aria-label="ikwe.ai home"
          >
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'conic-gradient(#191a2e 0deg 90deg, #f7a192 90deg 180deg, #b894f6 180deg 270deg, #f6d993 270deg 360deg)',
              border: '1.5px solid rgba(184,148,246,0.35)',
              flexShrink: 0,
            }} />
            <span className="font-display text-lg font-medium tracking-tight text-foreground">
              ikwe<span className="text-lilac">.ai</span>
            </span>
          </Link>

          {/* ── Desktop nav ── */}
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
              <Link
                to="/research"
                aria-haspopup="true"
                aria-expanded={researchOpen}
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
              </Link>

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
              to="/benchmark"
              className={`nav-link-pill rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                isActive("/benchmark") ? "bg-lilac-dim text-lilac-bright" : "text-foreground-muted hover:text-foreground"
              }`}
            >
              Benchmark
            </Link>

            <Link
              to="/audit"
              className={`nav-link-pill rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                isActive("/audit") ? "bg-lilac-dim text-lilac-bright" : "text-foreground-muted hover:text-foreground"
              }`}
            >
              Audit
            </Link>

            <Link
              to="/about"
              className={`nav-link-pill rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                isActive("/about") ? "bg-lilac-dim text-lilac-bright" : "text-foreground-muted hover:text-foreground"
              }`}
            >
              About
            </Link>
          </nav>

          {/* ── CTA ── */}
          <Link
            to="/get-started"
            className="hidden sm:inline-flex items-center gap-1.5 shrink-0 rounded px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all"
            style={{
              fontFamily: "var(--font-label, 'Space Grotesk', sans-serif)",
              background: "linear-gradient(135deg, #c8a0f8 0%, #9b72e8 100%)",
              color: "#0f0a1a",
              boxShadow: "0 0 16px rgba(155,114,232,0.35)",
            }}
          >
            Get Started
          </Link>

          {/* ── Hamburger ── */}
          <button
            className="lg:hidden p-1 ml-auto text-foreground-muted hover:text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="font-mono text-sm">{mobileOpen ? "[×]" : "[≡]"}</span>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden nav-blur border-t border-border">
          <nav className="container mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col gap-2">
            <Link
              to="/"
              className={`rounded border px-3 py-2 text-sm ${
                isActive("/")
                  ? "border-lilac text-lilac-bright bg-lilac-dim"
                  : "border-border text-foreground-muted"
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            {/* Research — link + expandable sub-pages */}
            <div className={`rounded border flex items-center justify-between ${
              isResearchActive
                ? "border-lilac bg-lilac-dim"
                : "border-border"
            }`}>
              <Link
                to="/research"
                className={`flex-1 px-3 py-2 text-sm ${
                  isResearchActive ? "text-lilac-bright" : "text-foreground-muted"
                }`}
                onClick={closeMobileMenu}
              >
                Research
              </Link>
              <button
                onClick={() => setMobileResearchOpen((v) => !v)}
                className="px-3 py-2 text-foreground-muted hover:text-foreground"
                aria-label="Toggle research sub-pages"
              >
                <span className="font-mono text-[10px] opacity-50">{mobileResearchOpen ? "▲" : "▼"}</span>
              </button>
            </div>

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
              to="/benchmark"
              className={`rounded border px-3 py-2 text-sm ${
                isActive("/benchmark")
                  ? "border-lilac text-lilac-bright bg-lilac-dim"
                  : "border-border text-foreground-muted"
              }`}
              onClick={closeMobileMenu}
            >
              Benchmark
            </Link>

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
              to="/about"
              className={`rounded border px-3 py-2 text-sm ${
                isActive("/about")
                  ? "border-lilac text-lilac-bright bg-lilac-dim"
                  : "border-border text-foreground-muted"
              }`}
              onClick={closeMobileMenu}
            >
              About
            </Link>

            <Link
              to="/get-started"
              className="mt-2 inline-flex w-full items-center justify-center rounded px-4 py-2.5 text-xs font-medium uppercase tracking-widest transition-all"
              style={{
                fontFamily: "var(--font-label, 'Space Grotesk', sans-serif)",
                background: "linear-gradient(135deg, #c8a0f8 0%, #9b72e8 100%)",
                color: "#0f0a1a",
                boxShadow: "0 0 16px rgba(155,114,232,0.35)",
              }}
              onClick={closeMobileMenu}
            >
              Get Started →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
