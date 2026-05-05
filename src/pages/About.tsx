import { Award, Building2, FileText, Heart, Sparkles, Target, Users, Wallet } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const stats = [
  { k: "2013", v: "Year Established", icon: Award },
  { k: "500+", v: "Active Clients", icon: Users },
  { k: "13+ yrs", v: "Experience", icon: Sparkles },
  { k: "2", v: "Office Locations", icon: Building2 },
  { k: "10,000+", v: "Returns Filed", icon: FileText },
  { k: "₹250 Cr+", v: "Loans Facilitated", icon: Wallet },
];

const values = [
  { t: "Integrity", d: "We hold ourselves to ICAI's highest ethical standards in every engagement.", icon: Award },
  { t: "Accuracy", d: "Numbers we sign off on are precise, peer-reviewed and audit-ready.", icon: Target },
  { t: "Client-First", d: "Our work begins with understanding your goals — not selling our services.", icon: Heart },
  { t: "Innovation", d: "Cloud-first workflows and analytics keep your finance function future-ready.", icon: Sparkles },
];

const About = () => (
  <>
    <SEO
      title="About YKC & Company — CA Firm in Mumbai & Ahmedabad Since 2013"
      description="Learn about YKC & Company — an ICAI-registered chartered accountancy firm serving 500+ clients from Mumbai and Ahmedabad with integrity, accuracy and innovation."
      path="/about"
      schema={breadcrumbSchema([{name:"Home",url:"/"},{name:"About",url:"/about"}])}
    />
    <PageHero
      eyebrow="About the Firm"
      title={<>A house of <span className="gold-text">considered counsel</span>, since 2013.</>}
      description="From a single Mira Road office to a two-city practice, YKC & Company has spent over a decade helping promoters, businesses and professionals navigate India's financial landscape."
      breadcrumbs={[{label:"Home",to:"/"},{label:"About"}]}
    />

    <section className="section-py">
      <div className="container-px grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="eyebrow">Our story</div>
          <h2 className="mt-4 font-serif text-4xl text-[hsl(var(--navy))] md:text-5xl">From Mira Road to <span className="gold-text">Ahmedabad</span> — and beyond.</h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-[hsl(var(--navy))]/80 lg:col-span-7">
          <p>YKC & Company was founded in 2013 with a simple conviction: small and growing businesses deserve the same quality of financial counsel that large corporations enjoy. From a single office in Mira Road, Mumbai, we have grown into a two-city practice with deep expertise across taxation, audit, advisory and finance facilitation.</p>
          <p>Today our team of Chartered Accountants, tax specialists and finance professionals serves 500+ active clients — from salaried individuals filing their first ITR to private companies raising growth capital. Our second office in Ahmedabad opened to serve the booming Gujarat startup and SME ecosystem.</p>
          <p>Above all, we measure ourselves by one standard: the trust our clients place in us, year after year.</p>
        </div>
      </div>
    </section>

    <section className="section-py bg-secondary/50">
      <div className="container-px">
        <div className="text-center">
          <div className="eyebrow justify-center">By the numbers</div>
          <h2 className="mt-4 font-serif text-4xl text-[hsl(var(--navy))] md:text-5xl">Thirteen years. <span className="gold-text">Real results.</span></h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(s => (
            <div key={s.v} className="card-elev">
              <s.icon className="h-7 w-7 text-[hsl(var(--gold))]" />
              <div className="mt-4 font-serif text-4xl text-[hsl(var(--navy))]">{s.k}</div>
              <div className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-py">
      <div className="container-px">
        <div className="text-center">
          <div className="eyebrow justify-center">What we stand for</div>
          <h2 className="mt-4 font-serif text-4xl text-[hsl(var(--navy))] md:text-5xl">Four values, <span className="gold-text">non-negotiable</span>.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map(v => (
            <div key={v.t} className="card-elev">
              <div className="icon-tile"><v.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 font-serif text-2xl text-[hsl(var(--navy))]">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default About;
