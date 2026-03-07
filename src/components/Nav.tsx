import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Benchmark", path: "/benchmark" },
  { label: "Audit & Validation", path: "/audit" },
  { label: "Writings", path: "/archive/research/writings" },
  { label: "Trust", path: "/trust" },
] as const;

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = location.pathname === "/";

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

  const homeSectionLinks = [
    { label: "The Problem", href: "#thesis" },
    { label: "The Benchmark", href: "#benchmark" },
    { label: "How It Works", href: "#system" },
    { label: "Results", href: "#output" },
    { label: "Work With Us", href: "#engage" },
  ] as const;

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isHome ? "home-nav-shell" : scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className={`container mx-auto max-w-6xl px-4 sm:px-6 ${isHome ? "home-nav-container" : ""}`}>
        <div className={`flex h-16 items-center justify-between gap-4 ${isHome ? "home-nav-bar" : ""}`}>
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

          {isHome ? (
            <nav className="home-nav-links hidden lg:flex" aria-label="Home sections">
              {homeSectionLinks.map((link) => (
                <a key={link.href} href={link.href} className="home-nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
          ) : (
            <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border bg-background-card p-1 nav-pill">
              <Link
                to="/"
                className={`nav-link-pill rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                  isActive("/") ? "bg-lilac-dim text-lilac-bright" : "text-foreground-muted hover:text-foreground"
                }`}
              >
                Home
              </Link>
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link-pill rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                    isActive(link.path)
                      ? "bg-lilac-dim text-lilac-bright"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

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

      {mobileOpen ? (
        isHome ? (
          <div className="home-nav-mobile lg:hidden">
            <nav className="container mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col gap-3" aria-label="Home sections">
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
                Request Evaluation →
              </Link>
            </nav>
          </div>
        )
      ) : null}
    </header>
  );
}
