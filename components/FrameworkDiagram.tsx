import { useId } from "react";

type Variant = "matrix" | "trajectory" | "tier";

type FrameworkDiagramProps = {
  variant: Variant;
  figureNumber?: number;
  title: string;
  caption: string;
  downloadable?: boolean;
};

const matrixMarkup = (id: string) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520" role="img" aria-labelledby="${id}-t ${id}-d">
  <title id="${id}-t">Dimension Matrix</title>
  <desc id="${id}-d">Eight dimensions mapped against risk and response clarity.</desc>
  <rect x="0" y="0" width="900" height="520" fill="#ffffff"/>
  <rect x="90" y="80" width="720" height="360" fill="#f7f8fc" stroke="#d9dfec"/>
  <line x1="450" y1="80" x2="450" y2="440" stroke="#c8d1e3"/>
  <line x1="90" y1="260" x2="810" y2="260" stroke="#c8d1e3"/>
  <text x="450" y="55" font-size="16" font-family="IBM Plex Mono" text-anchor="middle" fill="#6f7b95">Response quality</text>
  <text x="40" y="265" transform="rotate(-90 40,265)" font-size="16" font-family="IBM Plex Mono" text-anchor="middle" fill="#6f7b95">Risk intensity</text>
  <circle cx="220" cy="180" r="9" fill="#6b35d4"/><text x="240" y="185" font-size="13" fill="#172033" font-family="DM Sans">Harm Recognition</text>
  <circle cx="280" cy="230" r="9" fill="#6b35d4"/><text x="300" y="235" font-size="13" fill="#172033" font-family="DM Sans">Validation Quality</text>
  <circle cx="365" cy="325" r="9" fill="#6b35d4"/><text x="385" y="330" font-size="13" fill="#172033" font-family="DM Sans">Behavioral Restraint</text>
  <circle cx="520" cy="160" r="9" fill="#6b35d4"/><text x="540" y="165" font-size="13" fill="#172033" font-family="DM Sans">Escalation Calibration</text>
  <circle cx="585" cy="205" r="9" fill="#6b35d4"/><text x="605" y="210" font-size="13" fill="#172033" font-family="DM Sans">Contextual Adaptation</text>
  <circle cx="650" cy="240" r="9" fill="#6b35d4"/><text x="670" y="245" font-size="13" fill="#172033" font-family="DM Sans">Agency Preservation</text>
  <circle cx="610" cy="320" r="9" fill="#6b35d4"/><text x="630" y="325" font-size="13" fill="#172033" font-family="DM Sans">Repair Capacity</text>
  <circle cx="510" cy="360" r="9" fill="#6b35d4"/><text x="530" y="365" font-size="13" fill="#172033" font-family="DM Sans">Response Safety</text>
</svg>`;

const trajectoryMarkup = (id: string) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520" role="img" aria-labelledby="${id}-t ${id}-d">
  <title id="${id}-t">Trajectory Chart</title>
  <desc id="${id}-d">Illustrative behavioral trajectory with intervention points.</desc>
  <rect x="0" y="0" width="900" height="520" fill="#ffffff"/>
  <rect x="90" y="70" width="730" height="370" fill="#f7f8fc" stroke="#d9dfec"/>
  <line x1="120" y1="410" x2="790" y2="410" stroke="#c8d1e3"/>
  <line x1="120" y1="410" x2="120" y2="100" stroke="#c8d1e3"/>
  <path d="M120 360 C220 300, 290 290, 360 250 C430 210, 500 190, 580 150 C640 120, 730 110, 790 120" fill="none" stroke="#6b35d4" stroke-width="3"/>
  <path d="M120 360 C220 340, 320 330, 420 320 C520 310, 620 305, 790 298" fill="none" stroke="#2a5db0" stroke-width="2" stroke-dasharray="7 7"/>
  <circle cx="360" cy="250" r="7" fill="#157f62"/><circle cx="580" cy="150" r="7" fill="#157f62"/>
  <text x="382" y="246" font-size="12" fill="#172033" font-family="DM Sans">Intervention point</text>
  <text x="602" y="146" font-size="12" fill="#172033" font-family="DM Sans">Re-test checkpoint</text>
  <text x="90" y="54" font-size="16" fill="#6f7b95" font-family="IBM Plex Mono">Behavioral risk trajectory</text>
</svg>`;

const tierMarkup = (id: string) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" role="img" aria-labelledby="${id}-t ${id}-d">
  <title id="${id}-t">Tier Classification</title>
  <desc id="${id}-d">Illustrative tier badges for risk classification.</desc>
  <rect x="0" y="0" width="900" height="420" fill="#ffffff"/>
  <rect x="90" y="95" width="170" height="210" rx="10" fill="#eef6f2" stroke="#c8d1e3"/><text x="175" y="165" text-anchor="middle" font-size="14" font-family="IBM Plex Mono" fill="#157f62">Tier I</text><text x="175" y="195" text-anchor="middle" font-size="13" font-family="DM Sans" fill="#172033">Baseline controlled</text>
  <rect x="285" y="95" width="170" height="210" rx="10" fill="#f4f6fb" stroke="#c8d1e3"/><text x="370" y="165" text-anchor="middle" font-size="14" font-family="IBM Plex Mono" fill="#2a5db0">Tier II</text><text x="370" y="195" text-anchor="middle" font-size="13" font-family="DM Sans" fill="#172033">Observed drift</text>
  <rect x="480" y="95" width="170" height="210" rx="10" fill="#faf3ea" stroke="#c8d1e3"/><text x="565" y="165" text-anchor="middle" font-size="14" font-family="IBM Plex Mono" fill="#a86900">Tier III</text><text x="565" y="195" text-anchor="middle" font-size="13" font-family="DM Sans" fill="#172033">Escalating profile</text>
  <rect x="675" y="95" width="170" height="210" rx="10" fill="#fbefef" stroke="#c8d1e3"/><text x="760" y="165" text-anchor="middle" font-size="14" font-family="IBM Plex Mono" fill="#b64545">Tier IV</text><text x="760" y="195" text-anchor="middle" font-size="13" font-family="DM Sans" fill="#172033">Critical intervention</text>
</svg>`;

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function FrameworkDiagram({
  variant,
  figureNumber = 1,
  title,
  caption,
  downloadable = true,
}: FrameworkDiagramProps) {
  const id = useId().replace(/[:]/g, "-");
  const markup =
    variant === "matrix"
      ? matrixMarkup(id)
      : variant === "trajectory"
        ? trajectoryMarkup(id)
        : tierMarkup(id);

  const onDownloadSvg = () => downloadFile(`ikwe-figure-${figureNumber}.svg`, markup, "image/svg+xml");

  const onDownloadPng = async () => {
    const encoded = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;
    const img = new Image();
    img.src = encoded;
    await img.decode();

    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 700;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ikwe-figure-${figureNumber}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  };

  return (
    <figure className="card-surface p-4 md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <figcaption className="text-sm text-foreground-muted">
          <span className="font-mono text-[11px] uppercase tracking-[0.09em] text-foreground-subtle mr-2">Figure {figureNumber}</span>
          <span className="text-foreground">{title}</span>
        </figcaption>
        {downloadable ? (
          <div className="flex gap-2">
            <button type="button" onClick={onDownloadSvg} className="btn-outline rounded px-3 py-1.5 text-xs">
              Download SVG
            </button>
            <button type="button" onClick={onDownloadPng} className="btn-outline rounded px-3 py-1.5 text-xs">
              Download PNG
            </button>
          </div>
        ) : null}
      </div>
      <div className="rounded border border-border bg-background-card overflow-hidden" dangerouslySetInnerHTML={{ __html: markup }} />
      <p className="text-xs text-foreground-subtle mt-3 text-pretty">{caption}</p>
    </figure>
  );
}
