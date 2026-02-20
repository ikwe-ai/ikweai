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
};

const hubs: Hub[] = [
  {
    id: "research",
    label: "Research",
    path: "/research",
    desc: "Study I benchmark summary and publication library.",
    children: [
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
  },
  {
    id: "reports",
    label: "Reports",
    path: "/reports",
    desc: "Live reports hub and release access pathways.",
    children: [
      {
        path: "/reports",
        label: "Reports Hub",
        desc: "Live report surfaces and release references.",
      },
      {
        path: "/research",
        label: "Study I Summary",
        desc: "Canonical benchmark statistics and glossary.",
      },
      {
        path: "/research/case-studies",
        label: "Case Evidence",
        desc: "Linked case pages used in report context.",
      },
    ],
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
        path: "/reports",
        label: "Release Surfaces",
        desc: "Linked release pages for architecture context.",
      },
    ],
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
        path: "/research/press",
        label: "Press & Communications",
        desc: "Public communications and external updates.",
      },
      {
        path: "/reports",
        label: "Governance Releases",
        desc: "Published report pages and release routing.",
      },
    ],
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
        path: "/reports",
        label: "Report Context",
        desc: "Review live releases before intake.",
      },
    ],
  },
];

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenHub, setMobileOpenHub] = useState<string | null>(null);
  const [openHub, setOpenHub] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

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
            <div className="relative">
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
                  <button
                    key={hub.id}
                    type="button"
                    onClick={() => setOpenHub((v) => (v === hub.id ? null : hub.id))}
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
                      isRouteActive(hub.path) || openHub === hub.id
                        ? "bg-lilac/15 text-lilac"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                    aria-haspopup="menu"
                    aria-expanded={openHub === hub.id}
                    aria-controls={`hub-mega-${hub.id}`}
                  >
                    {hub.label}
                    <ChevronDown size={14} className={`transition-transform ${openHub === hub.id ? "rotate-180" : ""}`} />
                  </button>
                ))}
              </div>

              {openHub && (
                <div
                  id={`hub-mega-${selectedHub.id}`}
                  className="mega-panel"
                  role="menu"
                  aria-label={`${selectedHub.label} menu`}
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
                      <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-2">Other Hubs</p>
                      <div className="space-y-2 mb-4">
                        {hubs
                          .filter((hub) => hub.id !== selectedHub.id)
                          .map((hub) => (
                            <Link key={hub.id} to={hub.path} className="block text-sm text-foreground-muted hover:text-foreground transition-colors">
                              {hub.label}
                            </Link>
                          ))}
                      </div>
                      <Link to="/consult" className="text-sm link-lilac">
                        Request Consultation →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <Link
            to="/consult"
            className="hidden md:inline-flex items-center gap-1.5 shrink-0 rounded bg-lilac px-4 py-2 text-xs font-medium text-primary-foreground uppercase tracking-widest hover:bg-lilac-glow transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Request Consultation
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
          <nav className="container mx-auto max-w-6xl px-6 py-5 flex flex-col gap-3">
            <Link
              to="/"
              className={`rounded border px-3 py-2 text-sm ${
                isRouteActive("/") ? "border-lilac/40 text-lilac bg-lilac/10" : "border-border text-foreground-muted"
              }`}
            >
              Home
            </Link>

            {hubs.map((hub) => (
              <div key={hub.id} className="rounded border border-border p-2">
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

                {mobileOpenHub === hub.id && (
                  <div className="mt-2 space-y-2">
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
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/consult"
              className="mt-2 inline-flex w-full items-center justify-center rounded bg-lilac px-4 py-2.5 text-xs font-medium text-primary-foreground uppercase tracking-widest hover:bg-lilac-glow transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Request Consultation →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
