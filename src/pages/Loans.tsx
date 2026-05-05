import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home as HomeIcon } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const Loans = () => (
  <>
    <SEO
      title="Loans — Home Loan & Business Loan from Top Lenders | YKC & Company"
      description="Compare home loans (8.25% onwards) and business loans (up to ₹5 Cr) from 25+ partner banks and NBFCs. Quick disbursal, lowest rates."
      keywords="home loan best rates, business loan India, loan against property, MSME loan"
      path="/loans"
      schema={breadcrumbSchema([{name:"Home",url:"/"},{name:"Loans",url:"/loans"}])}
    />
    <PageHero
      eyebrow="Loan Facilitation"
      title={<>Find your <span className="gold-text">best-fit loan</span> in 24 hours.</>}
      description="We negotiate with 25+ banks and NBFCs to bring you the lowest rates and fastest disbursal — for your home, your business and beyond."
      breadcrumbs={[{label:"Home",to:"/"},{label:"Loans"}]}
    />
    <section className="section-py">
      <div className="container-px grid gap-6 md:grid-cols-2">
        {[
          { to: "/loans/home", t: "Home Loan", d: "Buy your dream home with rates starting from 8.25% — up to ₹10 Cr, tenure up to 30 years.", icon: HomeIcon },
          { to: "/loans/business", t: "Business Loan", d: "Unsecured loans up to ₹50L, secured up to ₹5 Cr — for working capital, expansion or equipment.", icon: Building2 },
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

export default Loans;
