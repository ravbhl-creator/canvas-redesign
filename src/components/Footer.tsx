import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import caLogo from "@/assets/ca-logo.png";

export const Footer = () => (
  <footer className="bg-gradient-navy text-white/80">
    <div className="container-px section-py">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--gold))]/40 font-serif text-2xl text-[hsl(var(--gold))]">Y</div>
            <div className="leading-tight">
              <div className="font-serif text-xl text-white">YKC <span className="gold-text">& Company</span></div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">Chartered Accountants</div>
            </div>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white/65">Your trusted Chartered Accountants for growth & compliance — serving clients across India since 2013.</p>
          <div className="mt-6 space-y-1.5 text-xs text-white/50">
            <div>MSME: UDYAM-MH-33-0196286</div>
            <div>GST: 27AABFY3431C1ZI</div>
          </div>
        </div>
        <div>
          <h4 className="mb-5 font-serif text-lg text-white">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services/gst" className="hover:text-[hsl(var(--gold))]">GST Compliance</Link></li>
            <li><Link to="/services/income-tax" className="hover:text-[hsl(var(--gold))]">Income Tax</Link></li>
            <li><Link to="/services/audit" className="hover:text-[hsl(var(--gold))]">Audit & Assurance</Link></li>
            <li><Link to="/services/registration" className="hover:text-[hsl(var(--gold))]">Business Setup</Link></li>
            <li><Link to="/services/accounting" className="hover:text-[hsl(var(--gold))]">Accounting</Link></li>
            <li><Link to="/tax-filing" className="hover:text-[hsl(var(--gold))]">Tax Filing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 font-serif text-lg text-white">Financial Products</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/loans/home" className="hover:text-[hsl(var(--gold))]">Home Loan</Link></li>
            <li><Link to="/loans/business" className="hover:text-[hsl(var(--gold))]">Business Loan</Link></li>
            <li><Link to="/insurance/health" className="hover:text-[hsl(var(--gold))]">Health Insurance</Link></li>
            <li><Link to="/insurance/term" className="hover:text-[hsl(var(--gold))]">Term Insurance</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 font-serif text-lg text-white">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-[hsl(var(--gold))]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[hsl(var(--gold))]">Contact</Link></li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="https://linkedin.com/company/ykc-company" aria-label="LinkedIn" className="rounded-lg border border-white/15 p-2 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"><Linkedin className="h-4 w-4" /></a>
            <a href="https://instagram.com/ykcandcompany" aria-label="Instagram" className="rounded-lg border border-white/15 p-2 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"><Instagram className="h-4 w-4" /></a>
            <a href="https://x.com/ykcandcompany" aria-label="X" className="rounded-lg border border-white/15 p-2 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"><Twitter className="h-4 w-4" /></a>
          </div>
          <div className="mt-6 space-y-2 text-xs text-white/60">
            <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[hsl(var(--gold))]" /> info@ykcandcompany.com</div>
            <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[hsl(var(--gold))]" /> Mumbai: +91 9172737370</div>
            <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[hsl(var(--gold))]" /> Ahmedabad: +91 8291494160</div>
            <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 text-[hsl(var(--gold))]" /> Mumbai · Ahmedabad</div>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
        <div>© 2013–{new Date().getFullYear()} YKC & Company. All rights reserved.</div>
        <div>Mumbai | Ahmedabad</div>
      </div>
    </div>
  </footer>
);
