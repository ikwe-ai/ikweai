type VisualTone = "violet" | "teal" | "danger" | "safe";

type HeroVisualCardProps = {
  kicker?: string;
  title?: string;
  points: string[];
  tone?: VisualTone;
  compact?: boolean;
};

function normalizePoint(text: string) {
  return text
    .replace(/[→↓↗↘↖↙]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export default function HeroVisualCard({
  kicker,
  title = "Key Points",
  points,
  tone = "violet",
  compact = false,
}: HeroVisualCardProps) {
  const normalizedPoints = points.map(normalizePoint).filter(Boolean).slice(0, 4);

  if (!normalizedPoints.length) return null;

  return (
    <article className={`hero-visual hero-visual-${tone}${compact ? " is-compact" : ""}`}>
      {kicker ? <p className="hero-visual-kicker">{kicker}</p> : null}
      <p className="hero-visual-title">{title}</p>
      <div className="hero-visual-flow">
        {normalizedPoints.map((item, index) => (
          <div key={`${item}-${index}`} className="hero-visual-node">
            <span className="hero-visual-index">{index + 1}</span>
            <span className="hero-visual-text">{item}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
