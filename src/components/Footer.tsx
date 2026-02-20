import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 bg-background-card/35">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="card-surface p-4 mb-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="font-mono text-[10px] uppercase tracking-widest text-foreground-subtle">
              Public Site Map
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              <Link to="/research" className="text-foreground-muted hover:text-foreground transition-colors">Research</Link>
              <Link to="/reports" className="text-foreground-muted hover:text-foreground transition-colors">Reports</Link>
              <Link to="/technology/architecture" className="text-foreground-muted hover:text-foreground transition-colors">Architecture</Link>
              <Link to="/about" className="text-foreground-muted hover:text-foreground transition-colors">About</Link>
              <Link to="/consult" className="text-foreground-muted hover:text-foreground transition-colors">Consultation</Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/ikwe_logo_dark.png"
                alt="Ikwe.ai"
                width={22}
                height={22}
                style={{ borderRadius: "50%", display: "block" }}
              />
              <p className="font-display text-base text-foreground">
                Ikwe<span className="text-lilac">.ai</span>
              </p>
            </div>
            <p className="text-xs text-foreground-subtle leading-relaxed max-w-xs">
              Independent AI behavioral validation. EQ Safety Benchmark — Study I (2024–2025).
            </p>
            <p className="text-xs text-foreground-subtle mt-4">
              © {new Date().getFullYear()} Visible Healing Inc. (dba Ikwe.ai)
            </p>
          </div>

          {/* Research */}
          <div>
            <p className="text-xs font-mono text-foreground-subtle uppercase tracking-widest mb-3">Research</p>
            <nav className="flex flex-col gap-2.5">
              <Link to="/research" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Study I
              </Link>
              <a href="/research/writings" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Writing Library
              </a>
              <a href="/research/case-studies" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Case Studies
              </a>
              <a href="/research/press" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Press &amp; Updates
              </a>
              <Link to="/technology/architecture" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Architecture
              </Link>
              <Link to="/reports" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Reports &amp; Releases
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-mono text-foreground-subtle uppercase tracking-widest mb-3">Company</p>
            <nav className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                About &amp; Independence
              </Link>
              <Link to="/consult" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Consultation
              </Link>
              <a href="/consult" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Request Consultation
              </a>
            </nav>
          </div>

          {/* Posture */}
          <div>
            <p className="text-xs font-mono text-foreground-subtle uppercase tracking-widest mb-3">Posture</p>
            <p className="text-xs text-foreground-subtle leading-relaxed">
              No commercial affiliations with AI developers evaluated.
              Reports distributed as versioned releases only.
              Results are not shared with evaluated parties before publication.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
