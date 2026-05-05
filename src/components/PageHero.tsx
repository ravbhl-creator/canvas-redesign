import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  breadcrumbs?: { label: string; to?: string }[];
}

export const PageHero = ({ eyebrow, title, description, breadcrumbs }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-gradient-hero text-white grid-bg">
    <div className="container-px relative z-10 py-20 md:py-28">
      {breadcrumbs && (
        <nav className="mb-6 flex items-center gap-2 text-xs text-white/60" aria-label="Breadcrumb">
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {b.to ? <Link to={b.to} className="hover:text-[hsl(var(--gold))]">{b.label}</Link> : <span className="text-white/90">{b.label}</span>}
              {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
            </span>
          ))}
        </nav>
      )}
      {eyebrow && <div className="eyebrow mb-5 text-[hsl(var(--gold))]">{eyebrow}</div>}
      <h1 className="font-serif text-4xl leading-[1.1] md:text-6xl md:leading-[1.05]">{title}</h1>
      {description && <p className="mt-6 max-w-2xl text-lg text-white/75">{description}</p>}
    </div>
  </section>
);
