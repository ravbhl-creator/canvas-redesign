import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SERVICES } from "@/data/site";

const Services = () => (
  <>
    <SEO
      title="CA Services — GST, Income Tax, Audit, Registration, Accounting | YKC & Company"
      description="Full-suite CA services: GST compliance, ITR filing, statutory audit, business registration and accounting. ICAI-registered firm in Mumbai & Ahmedabad."
      keywords="CA services Mumbai, GST consultant, statutory audit firm, business registration India"
      path="/services"
      schema={breadcrumbSchema([{name:"Home",url:"/"},{name:"Services",url:"/services"}])}
    />
    <PageHero
      eyebrow="Our practice"
      title={<>Five disciplines. One <span className="gold-text">unhurried standard</span>.</>}
      description="From quarterly compliance to bet-the-company audits, our work is built to sit beside the people who run your business."
      breadcrumbs={[{label:"Home",to:"/"},{label:"Services"}]}
    />
    <section className="section-py">
      <div className="container-px">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(s => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="card-elev group block">
              <div className="icon-tile mb-5"><s.icon className="h-6 w-6" /></div>
              <h2 className="font-serif text-2xl text-[hsl(var(--navy))]">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <ul className="mt-5 space-y-1.5 text-xs text-muted-foreground">
                {s.features.slice(0,4).map(f => <li key={f.title}>• {f.title}</li>)}
              </ul>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[hsl(var(--gold))]">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <CTASection />
  </>
);

export default Services;
