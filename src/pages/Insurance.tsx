import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const Insurance = () => (
  <>
    <SEO
      title="Insurance — Health & Term Life Plans from Top Insurers | YKC & Company"
      description="Compare health insurance (cashless at 10K+ hospitals) and term life cover (up to ₹5 Cr) from leading IRDAI-registered insurers."
      keywords="health insurance plans, term life insurance India, family floater plan, 80D tax benefit"
      path="/insurance"
      schema={breadcrumbSchema([{name:"Home",url:"/"},{name:"Insurance",url:"/insurance"}])}
    />
    <PageHero
      eyebrow="Insurance Advisory"
      title={<>Protect what <span className="gold-text">matters most</span>.</>}
      description="Health and term life cover from IRDAI-licensed insurers — with tax benefits under Section 80C and 80D."
      breadcrumbs={[{label:"Home",to:"/"},{label:"Insurance"}]}
    />
    <section className="section-py">
      <div className="container-px grid gap-6 md:grid-cols-2">
        {[
          { to: "/insurance/health", t: "Health Insurance", d: "Cashless treatment at 10,000+ hospitals — coverage from ₹3L to ₹1 Cr.", icon: Heart },
          { to: "/insurance/term", t: "Term Life Insurance", d: "Pure protection up to ₹5 Cr — premiums starting at just ₹500/month.", icon: Shield },
        ].map(l => (
          <Link key={l.to} to={l.to} className="card-elev group block">
            <div className="icon-tile mb-5"><l.icon className="h-6 w-6" /></div>
            <h2 className="font-serif text-3xl text-[hsl(var(--navy))]">{l.t}</h2>
            <p className="mt-3 text-muted-foreground">{l.d}</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[hsl(var(--gold))]">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
          </Link>
        ))}
      </div>
    </section>
    <CTASection />
  </>
);

export default Insurance;
