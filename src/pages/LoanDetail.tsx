import { Navigate, useParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ApplyNowModal } from "@/components/ApplyNowModal";

const LOANS = {
  home: {
    title: "Home Loan",
    desc: "Best rates from 25+ lenders, end-to-end paperwork support.",
    benefits: ["Interest from 8.25% p.a.", "Loan up to ₹10 Crore", "Tenure up to 30 years", "Balance transfer & top-up", "Tax benefits under Sec 24(b) & 80C", "Pre-approved offers in 24 hours"],
    eligibility: ["Salaried or self-employed", "Age 21-65 years", "Minimum income ₹25,000/month", "CIBIL score 700+", "Stable employment / business vintage"],
    documents: ["PAN Card", "Aadhaar Card", "Bank statements (6 months)", "ITR (last 3 years)", "Salary slips (latest 3)", "Property documents", "Sale agreement", "Address proof"],
    partners: ["SBI", "HDFC", "ICICI", "Axis Bank", "Bank of Baroda", "Kotak", "LIC Housing", "PNB Housing"],
    keywords: "home loan best rates, home loan Mumbai, balance transfer home loan",
  },
  business: {
    title: "Business Loan",
    desc: "Working capital, expansion and equipment financing for SMEs and enterprises.",
    benefits: ["Unsecured loans up to ₹50L", "Secured loans up to ₹5 Cr", "Tenure up to 7 years", "Minimal documentation", "Disbursal in 48-72 hours", "Flexible EMI options"],
    eligibility: ["Business vintage 2+ years", "Annual turnover ₹10L+", "CIBIL score 650+", "GST registered", "Profitable for at least 1 year"],
    documents: ["Business registration proof", "ITR (last 2 years)", "Bank statements (12 months)", "GST returns (last year)", "KYC of promoters", "Audited financials", "Address proof of business"],
    partners: ["HDFC", "ICICI", "Bajaj Finserv", "Tata Capital", "Axis Bank", "IndusInd", "Yes Bank", "Lendingkart"],
    keywords: "business loan India, MSME loan, working capital loan",
  },
} as const;

const LoanDetail = () => {
  const { slug } = useParams<{ slug: keyof typeof LOANS }>();
  const loan = slug && LOANS[slug];
  if (!loan) return <Navigate to="/loans" replace />;

  return (
    <>
      <SEO
        title={`${loan.title} — Best Rates from 25+ Lenders | YKC & Company`}
        description={loan.desc}
        keywords={loan.keywords}
        path={`/loans/${slug}`}
        schema={breadcrumbSchema([{name:"Home",url:"/"},{name:"Loans",url:"/loans"},{name:loan.title,url:`/loans/${slug}`}])}
      />
      <PageHero
        eyebrow="Loans"
        title={<><span className="gold-text">{loan.title}</span></>}
        description={loan.desc}
        breadcrumbs={[{label:"Home",to:"/"},{label:"Loans",to:"/loans"},{label:loan.title}]}
      />

      <section className="section-py">
        <div className="container-px grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <Block title="Key Benefits" items={loan.benefits} />
            <Block title="Eligibility" items={loan.eligibility} />
            <Block title="Documents Required" items={loan.documents} />
            <div>
              <h3 className="font-serif text-2xl text-[hsl(var(--navy))]">Partner Banks & NBFCs</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {loan.partners.map(p => (
                  <span key={p} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-[hsl(var(--navy))]">{p}</span>
                ))}
              </div>
            </div>
          </div>
          <aside className="card-elev sticky top-24 h-fit">
            <h3 className="font-serif text-2xl text-[hsl(var(--navy))]">Apply for {loan.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">Get a personalised quote in 24 hours from our loan-desk team.</p>
            <div className="mt-6"><ApplyNowModal product={loan.title} /></div>
          </aside>
        </div>
      </section>

      <CTASection title={`Need help choosing the right ${loan.title.toLowerCase()}?`} cta="Talk to Our Loan Desk" />
    </>
  );
};

const Block = ({ title, items }: { title: string; items: readonly string[] }) => (
  <div>
    <h3 className="font-serif text-2xl text-[hsl(var(--navy))]">{title}</h3>
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map(i => (
        <li key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-[hsl(var(--navy))]/85">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[hsl(var(--gold))]" /> {i}
        </li>
      ))}
    </ul>
  </div>
);

export default LoanDetail;
