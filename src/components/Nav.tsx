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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Logo + Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
            aria-label="Ikwe.ai home"
          >
            <img
              src="/ikwe_logo_dark.png"
              alt="Ikwe.ai"
              width={32}
              height={32}
              style={{ borderRadius: "50%", display: "block" }}
            />
            <span className="font-display text-lg font-medium tracking-tight text-foreground">
              Ikwe<span className="text-lilac">.ai</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {routes.map((r) => {
              const active = location.pathname === r.path;
              return (
                <Link
                  key={r.path}
                  to={r.path}
                  className={`text-sm transition-colors ${
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

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground-muted hover:text-foreground p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="font-mono text-xs">{open ? "[×]" : "[≡]"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-blur border-t border-border">
          <nav className="container mx-auto max-w-5xl px-6 py-4 flex flex-col gap-3">
            {routes.map((r) => {
              const active = location.pathname === r.path;
              return (
                <Link
                  key={r.path}
                  to={r.path}
                  className={`text-sm py-1 ${
                    active ? "text-lilac" : "text-foreground-muted"
                  }`}
                >
                  {r.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
