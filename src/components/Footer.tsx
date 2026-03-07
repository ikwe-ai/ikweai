import { Link, useLocation } from "react-router-dom";

import { PUBLIC_STATS } from "@/content/stats";

export default function Footer() {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <footer className="home-footer">
        <div className="home-footer-left">
          <strong>ikwe.ai</strong> · Independent AI behavior review · Third-party evaluation for human-facing systems
        </div>
        <div className="home-footer-right">
          {PUBLIC_STATS.outputsEvaluatedLabel} · {PUBLIC_STATS.scenarios} scenarios · {PUBLIC_STATS.behavioralDomains}{" "}
          risk categories
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-border mt-20 bg-background-card">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="card-surface p-4 mb-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="font-mono text-[10px] uppercase tracking-widest text-foreground-subtle">Public Site Map</p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              <Link to="/" className="text-foreground-muted hover:text-foreground transition-colors">Home</Link>
              <Link to="/research" className="text-foreground-muted hover:text-foreground transition-colors">Research</Link>
              <Link to="/benchmark" className="text-foreground-muted hover:text-foreground transition-colors">Benchmark</Link>
              <Link to="/archive/research/writings" className="text-foreground-muted hover:text-foreground transition-colors">Writings</Link>
              <Link to="/audit#deliverables-previews" className="text-foreground-muted hover:text-foreground transition-colors">Sample Outputs</Link>
              <Link to="/audit" className="text-foreground-muted hover:text-foreground transition-colors">Audit &amp; Validation</Link>
              <Link to="/trust" className="text-foreground-muted hover:text-foreground transition-colors">Trust</Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/ikwe_logo_dark.png"
                alt="ikwe.ai"
                width={22}
                height={22}
                style={{ borderRadius: "50%", display: "block" }}
              />
              <p className="font-display text-base text-foreground">
                ikwe<span className="text-lilac">.ai</span>
              </p>
            </div>
            <p className="text-xs text-foreground-subtle leading-relaxed max-w-xs">
              The Behavioral Safety Layer for AI. Independent validation for AI systems that interact with humans.
            </p>
            <p className="text-xs text-foreground-subtle mt-4">© {new Date().getFullYear()} Visible Healing Inc. (dba Ikwe.ai)</p>
            <p className="text-xs text-foreground-subtle mt-2 leading-relaxed">
              Ikwe.ai, EQ Safety Benchmark, and Ikwe Certified are proprietary names of Visible Healing Inc. Use by
              written permission only.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono text-foreground-subtle uppercase tracking-widest mb-3">Core Pages</p>
            <nav className="flex flex-col gap-2.5">
              <Link to="/research" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Research Summary
              </Link>
              <Link to="/benchmark" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Benchmark Framework
              </Link>
              <Link to="/archive/research/writings" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Writings
              </Link>
              <Link to="/audit#deliverables-previews" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Sample Outputs &amp; Transparency
              </Link>
              <Link to="/audit" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Audit &amp; Validation
              </Link>
              <Link to="/intake#application-form" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Request Evaluation
              </Link>
              <Link to="/trust" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Trust &amp; Confidentiality
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-mono text-foreground-subtle uppercase tracking-widest mb-3">Reference</p>
            <nav className="flex flex-col gap-2.5">
              <Link to="/archive" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Archived Pages
              </Link>
              <a href="/privacy.html" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="/terms.html" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="/research-access-terms.html" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Research Access Terms
              </a>
              <a href="mailto:research@ikwe.ai" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                research@ikwe.ai
              </a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-mono text-foreground-subtle uppercase tracking-widest mb-3">Standards</p>
            <p className="text-xs text-foreground-subtle leading-relaxed">
              No commercial affiliations with AI developers evaluated. Reports distributed through controlled,
              versioned documentation. Results are not shared with evaluated parties before publication.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
