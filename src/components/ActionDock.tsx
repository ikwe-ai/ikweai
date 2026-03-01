type ActionDockItem = {
  href: string;
  label: string;
  tone?: "primary" | "outline" | "quiet";
  external?: boolean;
};

interface ActionDockProps {
  title: string;
  subtitle?: string;
  items: ActionDockItem[];
}

export default function ActionDock({ title, subtitle, items }: ActionDockProps) {
  return (
    <aside className="action-dock">
      <div>
        <p className="action-dock-title">{title}</p>
        {subtitle ? <p className="action-dock-subtitle">{subtitle}</p> : null}
      </div>
      <div className="action-dock-actions">
        {items.map((item) => {
          const className =
            item.tone === "outline"
              ? "btn-outline"
              : item.tone === "quiet"
                ? "btn-quiet"
                : "bg-lilac";

          return (
            <a
              key={`${item.href}-${item.label}`}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center rounded px-4 py-2 text-sm transition-colors ${className} ${
                item.tone === "primary"
                  ? "font-medium text-primary-foreground"
                  : "text-foreground"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
