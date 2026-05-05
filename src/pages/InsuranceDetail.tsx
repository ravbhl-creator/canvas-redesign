import { Navigate, useParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ApplyNowModal } from "@/components/ApplyNowModal";

const PLANS = {
  health: {
    title: "Health Insurance",
    desc: "Cashless treatment at 10,000+ hospitals across India, with 80D tax benefit.",
    benefits: ["Cashless at 10,000+ hospitals", "Coverage from ₹3L to ₹1 Cr", "Section 80D tax benefit", "Pre & post hospitalisation cover", "Lifetime renewability", "No-claim bonus up to 100%"],
    types: ["Individual Health", "Family Floater", "Senior Citizen", "Super Top-Up", "Critical Illness", "Group Health"],
    insurers: ["Star Health", "HDFC ERGO", "ICICI Lombard", "Niva Bupa", "Care Health", "Bajaj Allianz", "New India", "Manipal Cigna"],
    keywords: "health insurance plans, family floater health insurance, 80D tax benefit",
  },
  term: {
    title: "Term Life Insurance",
    desc: "Pure protection cover up to ₹5 Cr at premiums starting ₹500/month — Section 80C benefit.",
    benefits: ["Coverage up to ₹5 Cr", "Premiums from ₹500/month", "Section 80C tax benefit", "Optional riders (CI, accidental)", "Tax-free death benefit (Sec 10(10D))", "Joint-life options available"],
    types: ["Level Term Plan", "Increasing Cover", "Return of Premium", "Whole Life", "Joint Life", "Group Term"],
    insurers: ["HDFC Life", "ICICI Pru", "Max Life", "Tata AIA", "SBI Life", "Bajaj Allianz Life", "Kotak Life", "PNB MetLife"],
    keywords: "term life insurance India, term plan premium, 1 crore term insurance",
  },
} as const;

const InsuranceDetail = () => {
  const { slug } = useParams<{ slug: keyof typeof PLANS }>();
  const plan = slug && PLANS[slug];
  if (!plan) return <Navigate to="/insurance" replace />;

  return (
    <>
      <SEO
        title={`${plan.title} — Compare Top Insurers | YKC & Company`}
        description={plan.desc}
        keywords={plan.keywords}
        path={`/insurance/${slug}`}
        schema={breadcrumbSchema([{name:"Home",url:"/"},{name:"Insurance",url:"/insurance"},{name:plan.title,url:`/insurance/${slug}`}])}
      />
      <PageHero
        eyebrow="Insurance"
        title={<><span className="gold-text">{plan.title}</span></>}
        description={plan.desc}
        breadcrumbs={[{label:"Home",to:"/"},{label:"Insurance",to:"/insurance"},{label:plan.title}]}
      />

      <section className="section-py">
        <div className="container-px grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-[hsl(var(--navy))]">Key Benefits</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {plan.benefits.map(b => (
                  <li key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-[hsl(var(--navy))]/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[hsl(var(--gold))]" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[hsl(var(--navy))]">Plan Types</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {plan.types.map(t => (
                  <div key={t} className="rounded-2xl border border-border bg-card p-5">
                    <div className="font-serif text-lg text-[hsl(var(--navy))]">{t}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[hsl(var(--navy))]">Partner Insurers</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {plan.insurers.map(i => (
                  <span key={i} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-[hsl(var(--navy))]">{i}</span>
                ))}
              </div>
            </div>
          </div>
          <aside className="card-elev sticky top-24 h-fit">
            <h3 className="font-serif text-2xl text-[hsl(var(--navy))]">Get a Quote</h3>
            <p className="mt-3 text-sm text-muted-foreground">Personalised {plan.title.toLowerCase()} comparison from our insurance desk in 24 hours.</p>
            <div className="mt-6"><ApplyNowModal product={plan.title} /></div>
          </aside>
        </div>
      </section>

      <CTASection title={`Need help choosing the right ${plan.title.toLowerCase()}?`} cta="Talk to Our Insurance Desk" />
    </>
  );
};

export default InsuranceDetail;
