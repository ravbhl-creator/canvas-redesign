import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import caLogo from "@/assets/ca-logo.png";

const services = [
  { to: "/services/gst", label: "GST Compliance" },
  { to: "/services/income-tax", label: "Income Tax" },
  { to: "/services/audit", label: "Audit & Assurance" },
  { to: "/services/registration", label: "Business Registration" },
  { to: "/services/accounting", label: "Accounting & Bookkeeping" },
];
const loans = [
  { to: "/loans/home", label: "Home Loan" },
  { to: "/loans/business", label: "Business Loan" },
];
const insurance = [
  { to: "/insurance/health", label: "Health Insurance" },
  { to: "/insurance/term", label: "Term Insurance" },
];

const Drop = ({ label, items, base }: { label: string; items: { to: string; label: string }[]; base: string }) => (
  <div className="group relative">
    <Link to={base} className="flex items-center gap-1 px-1 py-2 text-sm font-medium text-[hsl(var(--navy))] hover:text-[hsl(var(--gold))]">
      {label} <ChevronDown className="h-3.5 w-3.5" />
    </Link>
    <div className="invisible absolute left-0 top-full z-50 w-64 -translate-y-1 rounded-2xl border border-border bg-card p-2 opacity-0 shadow-card-hover transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {items.map((i) => (
        <Link key={i.to} to={i.to} className="block rounded-xl px-4 py-2.5 text-sm text-[hsl(var(--navy))] hover:bg-secondary hover:text-[hsl(var(--gold))]">
          {i.label}
        </Link>
      ))}
    </div>
  </div>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-px flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={caLogo} alt="YKC & Company CA Logo" className="h-11 w-11 object-contain" />
          <div className="leading-tight">
            <div className="font-serif text-lg text-[hsl(var(--navy))]">YKC <span className="gold-text">& Company</span></div>
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Chartered Accountants</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" end className={({isActive}) => cn("text-sm font-medium hover:text-[hsl(var(--gold))]", isActive ? "text-[hsl(var(--gold))]" : "text-[hsl(var(--navy))]")}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => cn("text-sm font-medium hover:text-[hsl(var(--gold))]", isActive ? "text-[hsl(var(--gold))]" : "text-[hsl(var(--navy))]")}>About</NavLink>
          <Drop label="Services" base="/services" items={services} />
          <Link to="/tax-filing" className="text-sm font-medium text-[hsl(var(--navy))] hover:text-[hsl(var(--gold))]">Tax Filing</Link>
          <Drop label="Loans" base="/loans" items={loans} />
          <Drop label="Insurance" base="/insurance" items={insurance} />
          <NavLink to="/contact" className={({isActive}) => cn("text-sm font-medium hover:text-[hsl(var(--gold))]", isActive ? "text-[hsl(var(--gold))]" : "text-[hsl(var(--navy))]")}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+918291494160" className="hidden items-center gap-2 text-sm font-semibold text-[hsl(var(--navy))] md:flex">
            <Phone className="h-4 w-4 text-[hsl(var(--gold))]" /> +91 8291494160
          </a>
          <Link to="/contact" className="hidden rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-[hsl(var(--navy))] shadow-gold md:inline-flex">Book Consultation</Link>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-px space-y-1 py-4">
            {[["Home","/"],["About","/about"],["Services","/services"],["Tax Filing","/tax-filing"],["Loans","/loans"],["Insurance","/insurance"],["Contact","/contact"]].map(([l,t]) => (
              <Link key={t} to={t} onClick={() => setOpen(false)} className={cn("block rounded-lg px-4 py-3 text-sm font-medium", loc.pathname===t ? "bg-secondary text-[hsl(var(--gold))]" : "text-[hsl(var(--navy))]")}>{l}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
