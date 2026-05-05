import heroImg from "@/assets/hero-desk.jpg";
import { ArrowUpRight, Calculator, FileText, Scale, Briefcase, Building2, Receipt, ShieldCheck, TrendingUp, Mail, Phone, MapPin } from "lucide-react";

const services = [
  { icon: Receipt, title: "Accounting", desc: "Outsourced bookkeeping, payroll and management reporting tailored to your operating cadence." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal, tax and bank audits — rigorous, independent and decision-grade." },
  { icon: TrendingUp, title: "Corporate Finance", desc: "Project financing, working-capital structuring and lender negotiation." },
  { icon: Building2, title: "Corporate Governance", desc: "Secretarial compliance, board advisory and ROC matters end-to-end." },
  { icon: FileText, title: "Income Tax", desc: "Direct-tax planning, return filing, scrutiny and litigation support." },
  { icon: Scale, title: "GST & Indirect Tax", desc: "Registration, returns, refunds and advisory across the GST regime." },
];

const news = [
  { date: "05 May 2026", text: "ICAI invites candidate observations on May 2026 examination question papers." },
  { date: "05 May 2026", text: "RBI extends curbs on Pusad Bank; election 2026 updates released." },
  { date: "02 May 2026", text: "GST revenue collections — gross and net figures for April 2026." },
  { date: "02 May 2026", text: "India launches cell-broadcast technology for disaster alerts." },
  { date: "30 Apr 2026", text: "RBI tightens bad-loan rules to align with global norms." },
];

const circulars = [
  { date: "04/05/2026", text: "ICAI announces CA September–November 2026 examination schedule." },
  { date: "30/04/2026", text: "RBI (Commercial Banks – Resolution of Stressed Assets) Second Amendment Directions, 2026." },
  { date: "30/04/2026", text: "RBI (Non-Banking Financial Companies – Registration & Framework) Amendment Directions, 2026." },
  { date: "28/04/2026", text: "RBI (NBFC – Undertaking of Financial Services) Amendment Directions, 2026." },
  { date: "27/04/2026", text: "CBDT corrigendum on Form ITR-1, 2, 3, 5, 6, 7 — income-tax rules and forms." },
  { date: "24/04/2026", text: "Customs Notification 41/2026: revised duty drawback rates for select tariff items." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="border-b border-border/40 bg-[hsl(var(--navy-deep))] text-xs">
        <div className="container-luxe flex items-center justify-between py-2.5 text-muted-foreground">
          <span className="hidden md:inline tracking-wider">CHARTERED ACCOUNTANTS · INDIA · EST. PRACTICE</span>
          <div className="flex items-center gap-5">
            <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-1.5"><Phone className="h-3 w-3" /> Enquiry</a>
            <a href="#" className="hover:text-primary transition-colors">Client Login</a>
            <a href="#" className="hover:text-primary transition-colors">CPE Status</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="container-luxe flex items-center justify-between py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="h-11 w-11 border border-primary/60 flex items-center justify-center font-serif text-primary text-xl">Y</div>
            <div className="leading-tight">
              <div className="font-serif text-xl tracking-wide">YKC <span className="gold-text">& Company</span></div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Chartered Accountants</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-9 text-sm">
            {["Firm", "Practice", "Insights", "Resources", "Careers", "Contact"].map(i => (
              <a key={i} href={`#${i.toLowerCase()}`} className="text-foreground/80 hover:text-primary transition-colors tracking-wide">{i}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 border border-primary/60 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            Engage Us <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Chartered accountants' desk" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="container-luxe relative z-10 py-32 fade-up">
          <p className="eyebrow mb-8"><span className="inline-block w-10 h-px bg-primary align-middle mr-3" />Since a tradition of trust</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl mb-8">
            Counsel that quietly <em className="gold-text not-italic">compounds</em> — across accounts, audit and advisory.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12">
            YKC & Company is a chartered accountancy firm serving promoters, boards and institutions with discreet, decision-grade work in taxation, assurance, finance and governance.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#practice" className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] shadow-gold hover:translate-y-[-2px] transition-transform">
              Explore the Practice <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a href="#firm" className="inline-flex items-center gap-2 px-2 py-4 text-xs uppercase tracking-[0.25em] text-foreground/80 hover:text-primary border-b border-transparent hover:border-primary transition-colors">
              The Firm — A Brief
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container-luxe flex justify-between items-end text-xs text-muted-foreground">
            <span className="tracking-[0.3em] uppercase">Estd. Practice</span>
            <span className="tracking-[0.3em] uppercase hidden md:inline">Mumbai · Pan India</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 bg-[hsl(var(--navy-deep))]">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4 divide-x divide-border/40">
          {[
            { k: "20+", v: "Years of practice" },
            { k: "400+", v: "Clients advised" },
            { k: "07", v: "Service verticals" },
            { k: "100%", v: "Quality assurance" },
          ].map(s => (
            <div key={s.v} className="px-6 py-12 text-center">
              <div className="font-serif text-5xl md:text-6xl gold-text mb-2">{s.k}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Firm */}
      <section id="firm" className="py-32">
        <div className="container-luxe grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">— The Firm</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">A house of <em className="gold-text not-italic">considered</em> counsel.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-lg font-light leading-relaxed text-foreground/85">
            <p>
              YKC & Company is a well-established firm of chartered accountants engaged across accounts, audit, taxation, investment, RBI matters, legal and secretarial services, business processing and project financing.
            </p>
            <p>
              We are a team of experienced and motivated professionals. We provide our clients with business solutions under one roof — and we keep their knowledge, and ours, current with a changing economy.
            </p>
            <div className="hairline my-10" />
            <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-foreground/95 italic">
              “We do not stop at observations and inferences — we give solid recommendations, and merge knowledge, experience and creativity into every consultation.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Practice */}
      <section id="practice" className="py-32 bg-[hsl(var(--navy-deep))] border-y border-border/40">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <p className="eyebrow mb-6">— The Practice</p>
              <h2 className="font-serif text-5xl md:text-6xl leading-tight max-w-2xl">Seven disciplines.<br /> One <em className="gold-text not-italic">unhurried</em> standard.</h2>
            </div>
            <p className="max-w-md text-muted-foreground font-light">From quarterly compliance to bet-the-company audits, our work is built to sit beside the people who run your business.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.title} className="group relative p-10 border-t border-l border-border/40 [&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r [&:last-child]:border-b lg:border-b-0 hover:bg-secondary/30 transition-colors">
                <div className="absolute top-6 right-6 text-xs text-muted-foreground/50 font-mono">0{i+1}</div>
                <s.icon className="h-7 w-7 text-primary mb-8" strokeWidth={1.2} />
                <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">{s.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-primary group-hover:gap-3 transition-all">
                  Discuss <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="py-32">
        <div className="container-luxe">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-6">— Desk Notes</p>
              <h2 className="font-serif text-5xl md:text-6xl">Markets &amp; <em className="gold-text not-italic">memoranda</em>.</h2>
            </div>
            <a href="#" className="text-xs uppercase tracking-[0.25em] text-primary border-b border-primary/40 pb-1 hover:border-primary">All Updates</a>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif text-2xl mb-8 flex items-center gap-3"><span className="h-px w-8 bg-primary" /> News &amp; Events</h3>
              <ul className="divide-y divide-border/40">
                {news.map((n, i) => (
                  <li key={i} className="py-5 group">
                    <div className="text-[11px] uppercase tracking-[0.25em] text-primary mb-2">{n.date}</div>
                    <a href="#" className="block text-foreground/90 group-hover:text-primary transition-colors leading-snug">{n.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-8 flex items-center gap-3"><span className="h-px w-8 bg-primary" /> Notifications &amp; Circulars</h3>
              <ul className="divide-y divide-border/40">
                {circulars.map((n, i) => (
                  <li key={i} className="py-5 group">
                    <div className="text-[11px] uppercase tracking-[0.25em] text-primary mb-2">{n.date}</div>
                    <a href="#" className="block text-foreground/90 group-hover:text-primary transition-colors leading-snug">{n.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-32 bg-[hsl(var(--navy-deep))] border-y border-border/40">
        <div className="container-luxe">
          <p className="eyebrow mb-6">— For Professionals</p>
          <h2 className="font-serif text-5xl md:text-6xl mb-16 max-w-3xl">A small library of <em className="gold-text not-italic">working tools</em>.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-border/40">
            {[
              { icon: FileText, t: "Useful Links", d: "Curated portals and references for Indian professionals." },
              { icon: Calculator, t: "Calculators", d: "EMI, tax, GST and depreciation — quick and reliable." },
              { icon: Briefcase, t: "Key Dates", d: "Statutory due dates across direct and indirect tax." },
            ].map(r => (
              <a key={r.t} href="#" className="group block bg-background p-12 hover:bg-secondary/40 transition-colors">
                <r.icon className="h-8 w-8 text-primary mb-8" strokeWidth={1.2} />
                <h3 className="font-serif text-3xl mb-3">{r.t}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">{r.d}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary group-hover:gap-3 transition-all">Open <ArrowUpRight className="h-3 w-3" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32">
        <div className="container-luxe grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">— Engage</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-8">Begin a <em className="gold-text not-italic">conversation</em>.</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-12 max-w-md">
              Tell us about your business, the matter at hand, and the standard you expect. We will write back, candidly.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4"><MapPin className="h-5 w-5 text-primary mt-1" strokeWidth={1.4} /><div><div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Office</div><div className="font-light">YKC & Company, Chartered Accountants — India</div></div></div>
              <div className="flex items-start gap-4"><Mail className="h-5 w-5 text-primary mt-1" strokeWidth={1.4} /><div><div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Write</div><div className="font-light">enquiry@ykcandcompany.com</div></div></div>
              <div className="flex items-start gap-4"><Phone className="h-5 w-5 text-primary mt-1" strokeWidth={1.4} /><div><div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Speak</div><div className="font-light">By appointment</div></div></div>
            </div>
          </div>
          <form className="lg:col-span-6 lg:col-start-7 space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Name</label>
                <input className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 font-light transition-colors" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Organisation</label>
                <input className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 font-light transition-colors" />
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 font-light transition-colors" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">The matter</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 font-light transition-colors resize-none" />
            </div>
            <button className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.25em] shadow-gold hover:translate-y-[-2px] transition-transform">
              Send Enquiry <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--navy-deep))] border-t border-border/40 pt-20 pb-10">
        <div className="container-luxe">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="font-serif text-2xl mb-4">YKC <span className="gold-text">& Company</span></div>
              <p className="text-sm text-muted-foreground font-light max-w-sm leading-relaxed">Chartered accountants serving India with accounts, audit, tax, finance and governance counsel.</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-5">Firm</div>
              <ul className="space-y-3 text-sm font-light text-muted-foreground">
                <li><a href="#firm" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Vision &amp; Mission</a></li>
                <li><a href="#" className="hover:text-primary">Team</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-5">Resources</div>
              <ul className="space-y-3 text-sm font-light text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Acts &amp; Rules</a></li>
                <li><a href="#" className="hover:text-primary">Forms</a></li>
                <li><a href="#" className="hover:text-primary">Calculators</a></li>
                <li><a href="#" className="hover:text-primary">Key Dates</a></li>
              </ul>
            </div>
          </div>
          <div className="hairline mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} YKC & Company · Chartered Accountants. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Disclaimer</a>
              <a href="#" className="hover:text-primary">CPE Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
