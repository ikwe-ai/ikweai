import { useEffect, useRef } from "react";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  const shellRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      shell.style.setProperty("--parallax-y-slow", "0px");
      shell.style.setProperty("--parallax-y-fast", "0px");
      return;
    }

    let rafId = 0;

    const updateParallax = () => {
      const y = window.scrollY || 0;
      shell.style.setProperty("--parallax-y-slow", `${y * 0.08}px`);
      shell.style.setProperty("--parallax-y-fast", `${y * 0.16}px`);
      rafId = 0;
    };

    const onScroll = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <main ref={shellRef} className="page-canvas min-h-screen pt-16">
      <div aria-hidden="true" className="page-parallax page-parallax-a" />
      <div aria-hidden="true" className="page-parallax page-parallax-b" />
      <div aria-hidden="true" className="page-canvas-glow" />
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="page-frame">{children}</div>
      </div>
    </main>
  );
}
