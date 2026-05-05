import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, CheckCircle2, FileText, Star, Users } from "lucide-react";
import { SEO, localBusinessSchema, orgSchema } from "@/components/SEO";
import { CTASection } from "@/components/CTASection";
import { HOME_SERVICE_CARDS, TESTIMONIALS } from "@/data/site";
import heroImg from "@/assets/hero-desk.jpg";

const stats = [
  { k: "13+", v: "Years of Practice" },
  { k: "500+", v: "Active Clients" },
  { k: "10K+", v: "Returns Filed" },
  { k: "2", v: "Offices" },
];

const Index = () => {
  return (
    <>
      <SEO
        title="YKC & Company — Chartered Accountants in Mumbai & Ahmedabad"
        description="ICAI-registered Chartered Accountants since 2013. GST, Income Tax, Audit, Business Registration, Loans & Insurance services across Mumbai & Ahmedabad."
        keywords="Chartered Accountant Mumbai, CA firm Mira Road, CA firm Ahmedabad, GST return filing, ITR filing consultant"
        path="/"
        schema={[orgSchema, localBusinessSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <img src={heroImg} alt="Chartered accountant office" className="absolute inset-0 h-full w-full object-cover opacity-25" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy))] via-[hsl(var(--navy))]/85 to-transparent" />
        <div className="container-px relative z-10 grid items-center gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-7 fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--gold))]/40 bg-[hsl(var(--gold))]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--gold))]">
              <Award className="h-3.5 w-3.5" /> ICAI Registered • Trusted Since 2013
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              Your Trusted <span className="gold-text">Chartered Accountants</span> for Growth & Compliance
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              From GST and tax filing to audit, business setup, loans and insurance — YKC & Company delivers decision-grade financial counsel across Mumbai and Ahmedabad.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Book Free Consultation <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/services" className="btn-secondary">Explore Services</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
              {["100% ICAI Compliant", "48-hour ITR turnaround", "Cashless insurance support"].map(t => (
                <span key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[hsl(var(--gold))]" />{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container-px grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map(s => (
            <div key={s.v} className="text-center">
              <div className="font-serif text-4xl text-[hsl(var(--navy))] md:text-5xl">{s.k}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-py">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">What we do</div>
            <h2 className="mt-5 font-serif text-4xl text-[hsl(var(--navy))] md:text-5xl">A complete <span className="gold-text">financial partner</span> under one roof</h2>
            <p className="mt-4 text-muted-foreground">Seven service verticals built around what businesses and professionals actually need.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICE_CARDS.map(s => (
              <Link key={s.title} to={s.to} className="card-elev group block">
                <div className="icon-tile mb-5"><s.icon className="h-6 w-6" /></div>
                <h3 className="font-serif text-2xl text-[hsl(var(--navy))]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[hsl(var(--gold))]">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Filing promo */}
      <section className="section-py bg-secondary/50">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Income Tax Filing</div>
            <h2 className="mt-5 font-serif text-4xl text-[hsl(var(--navy))] md:text-5xl">File your ITR in <span className="gold-text">48 hours</span> — expertly, accurately</h2>
            <p className="mt-4 text-muted-foreground">Use our ClearTax-style filing tool: estimate your tax with the New vs Old regime calculator, upload Form 16, and let a Chartered Accountant file for you.</p>
            <ul className="mt-6 space-y-3">
              {["AY 2026-27 ready • Old & New regime", "Section 87A rebate auto-applied", "Capital gains, HRA, NRI returns covered", "Plans starting ₹499"].map(t => (
                <li key={t} className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--gold))]" />{t}</li>
              ))}
            </ul>
            <Link to="/tax-filing" className="btn-primary mt-8">Open Tax Tool <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-3xl bg-gradient-navy p-8 text-white shadow-card-hover">
            <div className="grid grid-cols-2 gap-6">
              {[
                { k: "₹499", v: "Basic Plan" },
                { k: "₹1,499", v: "Pro Plan" },
                { k: "₹4,999", v: "Business Plan" },
                { k: "48 hr", v: "Turnaround" },
              ].map(p => (
                <div key={p.v} className="rounded-2xl border border-white/10 p-5">
                  <div className="font-serif text-3xl text-[hsl(var(--gold))]">{p.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{p.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-py">
        <div className="container-px">
          <div className="text-center">
            <div className="eyebrow justify-center">Client voices</div>
            <h2 className="mt-5 font-serif text-4xl text-[hsl(var(--navy))] md:text-5xl">Trusted by founders & professionals</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map(t => (
              <article key={t.name} className="card-elev">
                <div className="flex gap-1 text-[hsl(var(--gold))]">
                  {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[hsl(var(--navy))]/85">"{t.text}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold text-[hsl(var(--navy))]">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Index;
