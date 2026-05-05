import { Navigate, useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SERVICES } from "@/data/site";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const related = SERVICES.filter(s => s.slug !== slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    provider: { "@type": "Organization", name: "YKC & Company" },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <>
      <SEO
        title={`${service.title} | YKC & Company — Chartered Accountants`}
        description={service.short}
        path={`/services/${service.slug}`}
        schema={[serviceSchema, breadcrumbSchema([{name:"Home",url:"/"},{name:"Services",url:"/services"},{name:service.title,url:`/services/${service.slug}`}])]}
      />
      <PageHero
        eyebrow={service.title.split(" ")[0]}
        title={<><span className="gold-text">{service.title.split(" ")[0]}</span> {service.title.split(" ").slice(1).join(" ")}</>}
        description={service.short}
        breadcrumbs={[{label:"Home",to:"/"},{label:"Services",to:"/services"},{label:service.title}]}
      />

      <section className="section-py">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">What's included</div>
            <h2 className="mt-4 font-serif text-3xl text-[hsl(var(--navy))] md:text-4xl">Eight ways we work alongside you</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {service.features.map((f, i) => (
              <article key={f.title} className="card-elev relative">
                <div className="absolute right-6 top-6 font-serif text-3xl text-[hsl(var(--gold))]/30">0{i+1}</div>
                <h3 className="pr-12 font-serif text-xl text-[hsl(var(--navy))]">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-secondary/50">
        <div className="container-px grid gap-10 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Why YKC</div>
            <h2 className="mt-4 font-serif text-4xl text-[hsl(var(--navy))] md:text-5xl">Why choose <span className="gold-text">YKC & Company</span></h2>
            <p className="mt-4 text-muted-foreground">A 13-year track record, ICAI rigour and a partnership-led approach to your finance function.</p>
          </div>
          <ul className="space-y-4">
            {service.why.map(w => (
              <li key={w} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[hsl(var(--gold))]" />
                <span className="text-[hsl(var(--navy))]">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-py">
        <div className="container-px">
          <div className="eyebrow">Related services</div>
          <h3 className="mt-4 font-serif text-3xl text-[hsl(var(--navy))]">Explore more from our practice</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map(r => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="card-elev group block">
                <div className="icon-tile mb-4"><r.icon className="h-6 w-6" /></div>
                <h4 className="font-serif text-xl text-[hsl(var(--navy))]">{r.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--gold))]">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Need help with ${service.title}?`} cta="Talk to a CA" />
    </>
  );
};

export default ServiceDetail;
