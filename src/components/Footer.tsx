import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-display text-base text-foreground mb-2">
              Ikwe<span className="text-lilac">.ai</span>
            </p>
            <p className="text-xs text-foreground-subtle leading-relaxed max-w-xs">
              Independent AI safety research. EQ Safety Benchmark — Study I (2024–2025).
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-mono text-foreground-subtle uppercase tracking-widest mb-3">Pages</p>
            <nav className="flex flex-col gap-2">
              {[
                { path: "/research", label: "Research" },
                { path: "/reports", label: "Reports" },
                { path: "/technology/architecture", label: "Architecture" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
              ].map((r) => (
                <Link
                  key={r.path}
                  to={r.path}
                  className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                >
                  {r.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Policy / Posture */}
          <div>
            <p className="text-xs font-mono text-foreground-subtle uppercase tracking-widest mb-3">Posture</p>
            <p className="text-xs text-foreground-subtle leading-relaxed">
              No commercial affiliations with AI developers evaluated.
              Artifacts distributed as versioned releases only.
            </p>
            <p className="text-xs text-foreground-subtle mt-3">
              © {new Date().getFullYear()} Ikwe.ai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
