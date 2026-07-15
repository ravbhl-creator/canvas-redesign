import { useState } from "react";
import { Calculator, CheckCircle2, FileText, Upload } from "lucide-react";
import { toast } from "sonner";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";

type Regime = "new" | "old";

const computeTax = (taxable: number, regime: Regime): number => {
  let tax = 0;
  if (regime === "new") {
    const slabs = [[400000,0],[800000,0.05],[1200000,0.10],[1600000,0.15],[2000000,0.20],[Infinity,0.30]] as const;
    let prev = 0;
    for (const [limit, rate] of slabs) {
      if (taxable > limit) { tax += (limit - prev) * rate; prev = limit; }
      else { tax += (taxable - prev) * rate; break; }
    }
  } else {
    const slabs = [[250000,0],[500000,0.05],[1000000,0.20],[Infinity,0.30]] as const;
    let prev = 0;
    for (const [limit, rate] of slabs) {
      if (taxable > limit) { tax += (limit - prev) * rate; prev = limit; }
      else { tax += (taxable - prev) * rate; break; }
    }
  }
  return Math.max(tax, 0);
};

const TaxFiling = () => {
  const [tab, setTab] = useState<"calc"|"upload"|"docs">("calc");

  // Calculator state
  const [regime, setRegime] = useState<Regime>("new");
  const [income, setIncome] = useState(1200000);
  const [hra, setHra] = useState(0);
  const [s80c, setS80c] = useState(0);
  const [s80d, setS80d] = useState(0);
  const [other, setOther] = useState(0);
  const [result, setResult] = useState<null | { gross: number; ded: number; taxable: number; tax: number; rebate: number; cess: number; total: number }>(null);

  const calculate = () => {
    let ded = 0;
    if (regime === "old") {
      ded = Math.min(s80c, 150000) + s80d + hra + other;
    }
    const taxable = Math.max(income - ded, 0);
    let tax = computeTax(taxable, regime);
    let rebate = 0;
    if (regime === "new" && taxable <= 1200000) rebate = tax;
    if (regime === "old" && taxable <= 500000) rebate = tax;
    tax = Math.max(tax - rebate, 0);
    const cess = tax * 0.04;
    setResult({ gross: income, ded, taxable, tax, rebate, cess, total: tax + cess });
  };

  const salariedDocs = ["PAN Card", "Aadhaar Card", "Form 16 from employer", "Form 26AS / AIS", "Bank account details", "Salary slips", "Investment proofs (80C/80D)", "Home loan interest certificate", "Rent receipts (HRA)", "Capital gains statements", "Other income proofs"];
  const businessDocs = ["PAN & Aadhaar", "GST registration & returns", "Books of accounts (Tally/Zoho)", "Bank statements (all accounts)", "Sales & purchase ledgers", "Asset register & depreciation", "TDS certificates", "Loan account statements", "Audit report (if applicable)", "Stock statement", "Previous year ITR & balance sheet"];

  const plans = [
    { name: "Basic", price: "₹499", popular: false, desc: "For salaried individuals with single Form 16", features: ["Single Form 16","No capital gains","One bank account","Email support","48-hour filing"] },
    { name: "Pro", price: "₹1,499", popular: true, desc: "Multiple incomes, capital gains, HRA", features: ["Multiple Form 16s","Capital gains (shares/MF)","HRA & home loan","Phone + email support","Regime optimisation","48-hour filing"] },
    { name: "Business", price: "₹4,999", popular: false, desc: "For business owners & professionals", features: ["ITR-3 / ITR-4","P&L & Balance Sheet","Dedicated CA","Audit coordination","Tax planning call","Priority filing"] },
  ];

  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <>
      <SEO
        title="Income Tax Filing AY 2026-27 — Online ITR Filing | YKC & Company"
        description="File your income tax return online with a Chartered Accountant. Free tax calculator (Old vs New regime), Form 16 upload and plans starting ₹499."
        keywords="income tax filing online, ITR filing AY 2026-27, tax calculator new regime, ITR filing consultant"
        path="/tax-filing"
      />
      <PageHero
        eyebrow="Income Tax Filing • AY 2026-27"
        title={<>File your ITR with a <span className="gold-text">Chartered Accountant</span></>}
        description="Calculate your tax, upload Form 16 and let our team file your return — typically within 48 hours."
        breadcrumbs={[{label:"Home",to:"/"},{label:"Tax Filing"}]}
      />

      <section className="section-py">
        <div className="container-px">
          {/* Tabs */}
          <div className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-border bg-card p-2">
            {[
              { id: "calc", label: "Tax Calculator", icon: Calculator },
              { id: "upload", label: "Upload Form 16", icon: Upload },
              { id: "docs", label: "Documents Checklist", icon: FileText },
            ].map(t => (
              <button key={t.id} onClick={() => setTab(t.id as typeof tab)} className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${tab===t.id ? "bg-gradient-navy text-white" : "text-[hsl(var(--navy))] hover:bg-secondary"}`}>
                <t.icon className="h-4 w-4" /> <span className="hidden sm:inline">{t.label}</span>
              </button>
            ))}
          </div>

          {tab === "calc" && (
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="card-elev">
                <h2 className="font-serif text-2xl text-[hsl(var(--navy))]">Tax Calculator FY 2025-26</h2>
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[hsl(var(--navy))]">Tax Regime</label>
                    <select value={regime} onChange={e => setRegime(e.target.value as Regime)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
                      <option value="new">New Regime (Default)</option>
                      <option value="old">Old Regime</option>
                    </select>
                  </div>
                  <NumField label="Gross Annual Income (₹)" value={income} onChange={setIncome} />
                  {regime === "old" && (
                    <>
                      <NumField label="HRA Exemption (₹)" value={hra} onChange={setHra} />
                      <NumField label="Section 80C — max ₹1,50,000 (₹)" value={s80c} onChange={setS80c} />
                      <NumField label="Section 80D — Health Insurance (₹)" value={s80d} onChange={setS80d} />
                      <NumField label="Other Deductions (₹)" value={other} onChange={setOther} />
                    </>
                  )}
                  <button onClick={calculate} className="btn-primary w-full justify-center">Calculate Tax</button>
                </div>
              </div>
              <div className="rounded-3xl bg-gradient-navy p-8 text-white">
                <h3 className="font-serif text-2xl">Your Tax Breakdown</h3>
                {result ? (
                  <div className="mt-6 space-y-4">
                    <Row k="Gross Income" v={fmt(result.gross)} />
                    <Row k="Total Deductions" v={fmt(result.ded)} />
                    <Row k="Taxable Income" v={fmt(result.taxable)} />
                    <div className="my-3 h-px bg-white/15" />
                    <Row k="Income Tax" v={fmt(result.tax + result.rebate)} />
                    {result.rebate > 0 && <Row k="Section 87A Rebate" v={"−" + fmt(result.rebate)} accent />}
                    <Row k="Health & Education Cess (4%)" v={fmt(result.cess)} />
                    <div className="my-3 h-px bg-white/15" />
                    <div className="flex items-center justify-between rounded-2xl bg-[hsl(var(--gold))]/15 p-5">
                      <span className="text-sm uppercase tracking-[0.18em] text-white/80">Total Tax Payable</span>
                      <span className="font-serif text-3xl text-[hsl(var(--gold))]">{fmt(result.total)}</span>
                    </div>
                  </div>
                ) : (
                  <p className="mt-4 text-white/70">Enter your details and click Calculate to see your tax breakdown.</p>
                )}
              </div>
            </div>
          )}

          {tab === "upload" && (
            <form className="card-elev mx-auto max-w-3xl" onSubmit={e => { e.preventDefault(); toast.success("Submitted! Our CA will reach out within 24 hours."); }}>
              <h2 className="font-serif text-2xl text-[hsl(var(--navy))]">Upload Form 16</h2>
              <p className="mt-2 text-sm text-muted-foreground">PDF / JPG / PNG, max 10 MB. Our CA will file within 48 hours.</p>
              <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[hsl(var(--gold))]/40 bg-[hsl(var(--gold))]/5 px-6 py-12 transition-colors hover:bg-[hsl(var(--gold))]/10">
                <Upload className="h-10 w-10 text-[hsl(var(--gold))]" />
                <span className="mt-3 font-semibold text-[hsl(var(--navy))]">Drop Form 16 here, or click to browse</span>
                <span className="mt-1 text-xs text-muted-foreground">Supported: PDF, JPG, PNG</span>
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" />
              </label>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Input label="Full Name" required />
                <Input label="PAN Number" required />
                <Input label="Mobile" type="tel" required />
                <Input label="Email" type="email" required />
                <Select label="Assessment Year" options={["AY 2026-27","AY 2025-26","AY 2024-25"]} />
                <Select label="Preferred Regime" options={["New Regime","Old Regime","Recommend best"]} />
              </div>
              <button className="btn-primary mt-7 w-full justify-center" type="submit">Submit for Expert Filing</button>
              <p className="mt-3 text-center text-xs text-muted-foreground">48-hour turnaround promise</p>
            </form>
          )}

          {tab === "docs" && (
            <div className="grid gap-8 lg:grid-cols-2">
              {[{title:"Salaried", items: salariedDocs},{title:"Business / Professionals", items: businessDocs}].map(b => (
                <div key={b.title} className="card-elev">
                  <h3 className="font-serif text-2xl text-[hsl(var(--navy))]">{b.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {b.items.map(i => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[hsl(var(--navy))]/85">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[hsl(var(--gold))]" />{i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {tab === "plans" && (
            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map(p => (
                <div key={p.name} className={`relative rounded-3xl border p-8 ${p.popular ? "border-[hsl(var(--gold))] bg-gradient-navy text-white shadow-card-hover" : "border-border bg-card"}`}>
                  {p.popular && <div className="absolute -top-3 left-8 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold text-[hsl(var(--navy))]">Most Popular</div>}
                  <h3 className={`font-serif text-2xl ${p.popular ? "text-white" : "text-[hsl(var(--navy))]"}`}>{p.name}</h3>
                  <div className={`mt-3 font-serif text-5xl ${p.popular ? "text-[hsl(var(--gold))]" : "text-[hsl(var(--navy))]"}`}>{p.price}</div>
                  <p className={`mt-3 text-sm ${p.popular ? "text-white/70" : "text-muted-foreground"}`}>{p.desc}</p>
                  <ul className={`mt-6 space-y-3 text-sm ${p.popular ? "text-white/90" : "text-[hsl(var(--navy))]/85"}`}>
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[hsl(var(--gold))]" />{f}</li>
                    ))}
                  </ul>
                  <button onClick={() => { setTab("upload"); toast.success(`${p.name} plan selected`); }} className={`mt-7 w-full rounded-full px-6 py-3 text-sm font-semibold transition-all ${p.popular ? "bg-gradient-gold text-[hsl(var(--navy))]" : "border border-[hsl(var(--navy))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))] hover:text-white"}`}>Select {p.name}</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

const NumField = ({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) => (
  <div>
    <label className="mb-2 block text-sm font-semibold text-[hsl(var(--navy))]">{label}</label>
    <input type="number" min={0} value={value} onChange={e => onChange(Number(e.target.value)||0)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
  </div>
);
const Input = ({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
    <input {...rest} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
  </div>
);
const Select = ({ label, options }: { label: string; options: string[] }) => (
  <div>
    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
    <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  </div>
);
const Row = ({ k, v, accent }: { k: string; v: string; accent?: boolean }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-white/70">{k}</span>
    <span className={accent ? "text-[hsl(var(--gold))]" : "font-semibold text-white"}>{v}</span>
  </div>
);

export default TaxFiling;
