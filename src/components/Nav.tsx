import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

type HubChild = {
  path: string;
  label: string;
  desc: string;
};

type Hub = {
  id: string;
  label: string;
  path: string;
  desc: string;
  children: HubChild[];
  asideHeading: string;
  asideBody: string;
  asideLinks: Array<{
    label: string;
    path: string;
  }>;
  ctaLabel: string;
  ctaPath: string;
};

const hubs: Hub[] = [
  {
    id: "research",
    label: "Research",
    path: "/research",
    desc: "Study I benchmark summary and publication library.",
    children: [
      {
        path: "/eq-safety-benchmark",
        label: "EQ Safety Benchmark",
        desc: "Dedicated EQSB page with baseline metrics and framework boundary.",
      },
      {
        path: "/research/writings",
        label: "Writing Library",
        desc: "Published essays, notes, and opinion writing.",
      },
      {
        path: "/research/case-studies",
        label: "Case Studies",
        desc: "Case index with full trajectory analyses.",
      },
      {
        path: "/research/press",
        label: "Press & Updates",
        desc: "Published communications and media routing.",
      },
    ],
    asideHeading: "Research Quick Access",
    asideBody: "Start with benchmark context, then move into writing and case evidence.",
    asideLinks: [
      { label: "EQ Safety Benchmark", path: "/eq-safety-benchmark" },
      { label: "Study I Overview", path: "/research" },
      { label: "Writing Library", path: "/research/writings" },
      { label: "Case Studies", path: "/research/case-studies" },
      { label: "Press & Updates", path: "/research/press" },
    ],
    ctaLabel: "Request Consultation →",
    ctaPath: "/consult",
  },
  {
    id: "outputs",
    label: "Outputs",
    path: "/outputs",
    desc: "IP-safe output previews and gated artifact access pathways.",
    children: [
      {
        path: "/outputs",
        label: "Outputs Hub",
        desc: "Public preview of board-facing and governance-facing deliverables.",
      },
      {
        path: "/audit",
        label: "Audit Pathway",
        desc: "Engagement structure and audit delivery sequence.",
      },
      {
        path: "/trust",
        label: "Trust & Confidentiality",
        desc: "Public handling boundary and protected artifact posture.",
      },
    ],
    asideHeading: "Outputs Navigation",
    asideBody: "Show output structure publicly while keeping implementation mechanics protected.",
    asideLinks: [
      { label: "Outputs Hub", path: "/outputs" },
      { label: "Research Overview", path: "/research" },
      { label: "Trust & Confidentiality", path: "/trust" },
      { label: "Architecture", path: "/technology/architecture" },
    ],
    ctaLabel: "Request Audit Intake →",
    ctaPath: "/consult#application-form",
  },
  {
    id: "architecture",
    label: "Architecture",
    path: "/technology/architecture",
    desc: "Pipeline and control-language overview.",
    children: [
      {
        path: "/technology/architecture",
        label: "Architecture Hub",
        desc: "Public pipeline and control terms overview.",
      },
      {
        path: "/audit",
        label: "Audit Pathway",
        desc: "Audit structure and workflow framing.",
      },
      {
        path: "/outputs",
        label: "Outputs Hub",
        desc: "Public output preview and artifact-access boundary.",
      },
    ],
    asideHeading: "Architecture Navigation",
    asideBody: "Use this hub for the pipeline, terms, and audit pathway context.",
    asideLinks: [
      { label: "Architecture Overview", path: "/technology/architecture" },
      { label: "Audit Pathway", path: "/audit" },
      { label: "Outputs Hub", path: "/outputs" },
      { label: "Research Glossary", path: "/research" },
    ],
    ctaLabel: "Request Consultation →",
    ctaPath: "/consult",
  },
  {
    id: "about",
    label: "About",
    path: "/about",
    desc: "Independence posture and governance discipline.",
    children: [
      {
        path: "/about",
        label: "About Hub",
        desc: "Independence, COI policy, and version posture.",
      },
      {
        path: "/trust",
        label: "Trust & Confidentiality",
        desc: "Public confidentiality and protected-access standards.",
      },
      {
        path: "/research/press",
        label: "Press & Communications",
        desc: "Public communications and external updates.",
      },
      {
        path: "/outputs",
        label: "Outputs & Transparency",
        desc: "Public output previews and gated artifact pathways.",
      },
    ],
    asideHeading: "About Navigation",
    asideBody: "Company posture, governance commitments, and release discipline.",
    asideLinks: [
      { label: "About Overview", path: "/about" },
      { label: "Trust & Confidentiality", path: "/trust" },
      { label: "Press & Updates", path: "/research/press" },
      { label: "Outputs Hub", path: "/outputs" },
      { label: "Consultation Intake", path: "/consult" },
    ],
    ctaLabel: "Contact Governance Team →",
    ctaPath: "/consult",
  },
  {
    id: "consultation",
    label: "Consultation",
    path: "/consult",
    desc: "Guided intake and audit-start workflow.",
    children: [
      {
        path: "/consult",
        label: "Consultation Hub",
        desc: "Intake form and scope request flow.",
      },
      {
        path: "/audit",
        label: "Audit Pathway",
        desc: "Audit structure and engagement sequence.",
      },
      {
        path: "/outputs",
        label: "Outputs Context",
        desc: "Review public output formats before intake.",
      },
    ],
    asideHeading: "Consultation Quick Start",
    asideBody: "Share deployment context and review goals to receive scope guidance.",
    asideLinks: [
      { label: "Consultation Intake", path: "/consult#application-form" },
      { label: "Audit Pathway", path: "/audit" },
      { label: "Outputs Hub", path: "/outputs" },
      { label: "Research Overview", path: "/research" },
    ],
    ctaLabel: "Open Consultation Intake →",
    ctaPath: "/consult",
  },
];

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenHub, setMobileOpenHub] = useState<string | null>(null);
  const [openHub, setOpenHub] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const isRouteActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  const activeHub = useMemo(
    () => hubs.find((hub) => isRouteActive(hub.path)) ?? hubs[0],
    [location.pathname]
  );

  const selectedHub = useMemo(
    () => hubs.find((hub) => hub.id === openHub) ?? activeHub,
    [openHub, activeHub]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileOpenHub(null);
    setOpenHub(null);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
        setMobileOpenHub(null);
        setOpenHub(null);
      }
    };

    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMobileOpenHub(null);
        setOpenHub(null);
      }
    };

    document.addEventListener("click", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenHub(null);
    }, 120);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6">
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

          <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0">
            <div
              className="relative"
              onMouseEnter={clearCloseTimer}
              onMouseLeave={scheduleClose}
            >
              <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background-card/80 p-1 nav-pill">
                <Link
                  to="/"
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                    isRouteActive("/")
                      ? "bg-lilac/15 text-lilac"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Home
                </Link>

                {hubs.map((hub) => (
                  <div
                    key={hub.id}
                    className={`inline-flex items-center rounded-full text-sm transition-colors whitespace-nowrap ${
                      isRouteActive(hub.path) || openHub === hub.id
                        ? "bg-lilac/15 text-lilac"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                    onMouseEnter={() => {
                      clearCloseTimer();
                      setOpenHub(hub.id);
                    }}
                  >
                    <Link to={hub.path} className="px-3 py-1.5 rounded-l-full">
                      {hub.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        clearCloseTimer();
                        setOpenHub((v) => (v === hub.id ? null : hub.id));
                      }}
                      className="inline-flex items-center pr-2 py-1.5 rounded-r-full"
                      aria-haspopup="menu"
                      aria-expanded={openHub === hub.id}
                      aria-controls={`hub-mega-${hub.id}`}
                    >
                      <ChevronDown size={14} className={`transition-transform ${openHub === hub.id ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                ))}
              </div>

              {openHub && (
                <div
                  id={`hub-mega-${selectedHub.id}`}
                  className="mega-panel"
                  role="menu"
                  aria-label={`${selectedHub.label} menu`}
                  onMouseEnter={clearCloseTimer}
                  onMouseLeave={scheduleClose}
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-foreground-subtle mb-3">
                        {selectedHub.label} Hub
                      </p>
                      <Link to={selectedHub.path} className="mega-link mb-2">
                        <span className="mega-link-title">Open {selectedHub.label} Overview</span>
                        <span className="mega-link-desc">{selectedHub.desc}</span>
                      </Link>
                      <div className="space-y-2">
                        {selectedHub.children.map((item) => (
                          <Link key={item.path} to={item.path} className="mega-link">
                            <span className="mega-link-title">{item.label}</span>
                            <span className="mega-link-desc">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="mega-side">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">
                        {selectedHub.asideHeading}
                      </p>
                      <p className="text-xs text-foreground-subtle leading-relaxed mb-3">
                        {selectedHub.asideBody}
                      </p>
                      <div className="space-y-2 mb-4">
                        {selectedHub.asideLinks.map((item) => (
                          <Link key={item.path} to={item.path} className="block text-sm text-foreground-muted hover:text-foreground transition-colors">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <Link to={selectedHub.ctaPath} className="text-sm link-lilac">
                        {selectedHub.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <Link
            to="/consult#application-form"
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

      {mobileOpen && (
        <div className="lg:hidden nav-blur border-t border-border">
          <nav className="container mx-auto max-w-6xl px-6 py-5 flex flex-col gap-3 max-h-[calc(100vh-4rem)] overflow-auto">
            <Link
              to="/"
              className={`rounded border px-3 py-2 text-sm ${
                isRouteActive("/") ? "border-lilac/40 text-lilac bg-lilac/10" : "border-border text-foreground-muted"
              }`}
            >
              Home
            </Link>

            {hubs.map((hub) => (
              <div key={hub.id} className="rounded border border-border p-2 bg-background-card/40">
                <div className="flex items-center gap-2">
                  <Link
                    to={hub.path}
                    className={`flex-1 rounded px-2 py-1.5 text-sm ${
                      isRouteActive(hub.path) ? "text-lilac bg-lilac/10" : "text-foreground"
                    }`}
                  >
                    {hub.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileOpenHub((v) => (v === hub.id ? null : hub.id))}
                    className="rounded px-2 py-1 text-foreground-muted hover:text-foreground"
                    aria-expanded={mobileOpenHub === hub.id}
                  >
                    <ChevronDown size={15} className={`transition-transform ${mobileOpenHub === hub.id ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <p className="text-xs text-foreground-subtle px-2 pb-1">{hub.desc}</p>

                {mobileOpenHub === hub.id && (
                  <div className="mt-2 space-y-2">
                    <Link
                      to={hub.path}
                      className={`block rounded border px-3 py-2 text-sm ${
                        isRouteActive(hub.path)
                          ? "border-lilac/40 text-lilac bg-lilac/10"
                          : "border-border text-foreground-muted"
                      }`}
                    >
                      <span className="block">Open {hub.label} Overview</span>
                      <span className="block text-xs text-foreground-subtle mt-1">{hub.desc}</span>
                    </Link>
                    {hub.children.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block rounded border px-3 py-2 text-sm ${
                          isRouteActive(item.path)
                            ? "border-lilac/40 text-lilac bg-lilac/10"
                            : "border-border text-foreground-muted"
                        }`}
                      >
                        <span className="block">{item.label}</span>
                        <span className="block text-xs text-foreground-subtle mt-1">{item.desc}</span>
                      </Link>
                    ))}
                    <div className="rounded border border-border px-3 py-2 bg-background/40">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-1">{hub.asideHeading}</p>
                      <p className="text-xs text-foreground-subtle leading-relaxed mb-2">{hub.asideBody}</p>
                      <div className="space-y-1.5">
                        {hub.asideLinks.map((item) => (
                          <Link key={item.path} to={item.path} className="block text-xs text-foreground-muted hover:text-foreground">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/consult#application-form"
              className="mt-2 inline-flex w-full items-center justify-center rounded bg-lilac px-4 py-2.5 text-xs font-medium text-primary-foreground uppercase tracking-widest hover:bg-lilac-glow transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Request Audit →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
