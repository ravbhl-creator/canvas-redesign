import { Briefcase, Building2, Calculator, FileText, Heart, Home as HomeIcon, Receipt, Scale, Shield, ShieldCheck, TrendingUp, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  features: { title: string; desc: string }[];
  why: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "gst",
    title: "GST Compliance & Advisory",
    short: "End-to-end GST registration, returns, refunds, audits and litigation support.",
    icon: Receipt,
    features: [
      { title: "GST Registration", desc: "New GST registration for businesses, professionals and e-commerce sellers across India." },
      { title: "GSTR-1 & GSTR-3B Filing", desc: "Accurate monthly/quarterly outward supply and summary returns with reconciliation." },
      { title: "GSTR-9 / 9C Annual Return", desc: "Annual return preparation and reconciliation statement with self-certification." },
      { title: "GST Refund Applications", desc: "Refunds for exports, inverted duty structure and excess balance claims." },
      { title: "E-Way Bill Management", desc: "End-to-end e-way bill generation, tracking and compliance for goods movement." },
      { title: "GST Audit & Assessment", desc: "Department audits, assessments and pre-audit health checks for your books." },
      { title: "Reply to SCN & Appeals", desc: "Drafting replies to show-cause notices and representation before authorities." },
      { title: "ITC Reconciliation", desc: "Vendor-wise GSTR-2B reconciliation to maximise eligible Input Tax Credit." },
    ],
    why: [
      "13+ years of GST and indirect tax expertise",
      "Dedicated relationship manager for your account",
      "Real-time GSTR-2B reconciliation tools",
      "Transparent monthly retainer pricing",
    ],
  },
  {
    slug: "income-tax",
    title: "Income Tax Services",
    short: "Tax filing, planning, scrutiny and litigation support for individuals and businesses.",
    icon: FileText,
    features: [
      { title: "ITR Filing (Individuals/HUF)", desc: "ITR-1 to ITR-4 filings with regime comparison and maximum-refund optimisation." },
      { title: "ITR Filing (Business/Companies)", desc: "ITR-5, ITR-6 and ITR-7 with full schedule reporting and computation." },
      { title: "TDS Returns", desc: "Quarterly TDS/TCS return filing — Form 24Q, 26Q, 27Q and corrections." },
      { title: "Advance Tax", desc: "Quarterly advance tax computation and timely deposit to avoid 234B/234C interest." },
      { title: "Tax Planning", desc: "Year-round planning across salary structuring, investments and capital gains." },
      { title: "Notice & Assessment", desc: "Reply to 143(1)/(2), 148, 142(1) notices and faceless assessment representation." },
      { title: "Capital Gains", desc: "LTCG/STCG on shares, mutual funds, property and crypto with exemption planning." },
      { title: "NRI Taxation", desc: "Residential status, DTAA, repatriation, Form 15CA/CB and NRO/NRE compliance." },
    ],
    why: [
      "Filed 10,000+ returns over the last decade",
      "48-hour turnaround promise on standard ITRs",
      "Year-round tax planning support",
      "Secure document handling — encrypted at rest",
    ],
  },
  {
    slug: "audit",
    title: "Audit & Assurance",
    short: "Independent, decision-grade audit and assurance across statutory and tax frameworks.",
    icon: ShieldCheck,
    features: [
      { title: "Statutory Audit", desc: "Companies Act statutory audit with rigorous documentation and ICAI standards." },
      { title: "Tax Audit (Section 44AB)", desc: "Form 3CA/3CB-3CD reporting with disclosures and timely portal upload." },
      { title: "Internal Audit", desc: "Risk-based internal audit, control testing and process improvement reports." },
      { title: "GST Audit", desc: "Independent GST audit with reconciliation, ITC review and compliance scoring." },
      { title: "Concurrent Audit", desc: "Concurrent audit assignments for banks, NBFCs and large enterprises." },
      { title: "Stock Audit", desc: "Inventory verification, valuation review and lender-mandated stock audits." },
      { title: "Forensic Audit", desc: "Fraud investigation, data analytics and forensic reporting for litigation." },
      { title: "Due Diligence", desc: "Buy-side / sell-side financial, tax and statutory due diligence reports." },
    ],
    why: [
      "Peer-reviewed firm following ICAI standards",
      "Multi-disciplinary audit teams",
      "Industry experience: BFSI, Manufacturing, IT, Retail",
      "Crisp, board-ready deliverables",
    ],
  },
  {
    slug: "registration",
    title: "Business Setup & Registration",
    short: "Incorporate and license your venture in days, not weeks.",
    icon: Building2,
    features: [
      { title: "Private Limited Company", desc: "End-to-end Pvt Ltd incorporation, MOA/AOA, PAN, TAN and bank account opening." },
      { title: "LLP", desc: "Limited Liability Partnership registration with agreement drafting and FiLLiP." },
      { title: "OPC", desc: "One-Person Company registration for solo founders with full statutory kit." },
      { title: "Partnership / Proprietorship", desc: "Partnership deed, sole-prop registration, GST and bank-account setup." },
      { title: "MSME / Udyam", desc: "Free Udyam registration for eligible MSMEs with category classification." },
      { title: "FSSAI", desc: "Basic, State and Central FSSAI licences for food businesses." },
      { title: "Import Export Code (IEC)", desc: "DGFT IEC registration for exporters and importers." },
      { title: "Trademark Registration", desc: "Trademark search, filing and prosecution across all classes." },
    ],
    why: [
      "500+ companies incorporated",
      "Single-window for all licences",
      "Transparent flat fees, no hidden charges",
      "Post-incorporation compliance retainer",
    ],
  },
  {
    slug: "accounting",
    title: "Accounting & Bookkeeping",
    short: "Outsourced finance function — books, payroll, MIS and virtual CFO.",
    icon: Calculator,
    features: [
      { title: "Monthly Bookkeeping", desc: "Daily/weekly bookkeeping in Tally, Zoho Books or QuickBooks." },
      { title: "Accounts Payable / Receivable", desc: "Vendor and customer ledger management with ageing reports." },
      { title: "Bank Reconciliation", desc: "Periodic BRS preparation across all bank, credit-card and wallet accounts." },
      { title: "MIS Reports", desc: "Monthly P&L, balance sheet and cash-flow MIS for management decisions." },
      { title: "Payroll", desc: "Salary processing, payslips, PF/ESI/PT and Form 16 — fully managed." },
      { title: "Virtual CFO", desc: "Strategic CFO support — budgeting, forecasting, fundraising and board reporting." },
      { title: "Tally / Zoho Setup", desc: "Chart of accounts, masters, GST configuration and team training." },
      { title: "Year-End Finalization", desc: "Year-end adjustments, schedules and audit-ready financial statements." },
    ],
    why: [
      "Cloud-first accounting workflows",
      "Daily bookkeeping support available",
      "Industry-specific chart of accounts",
      "Senior CA review on every MIS",
    ],
  },
];

export const HOME_SERVICE_CARDS = [
  ...SERVICES.map(s => ({ to: `/services/${s.slug}`, title: s.title, desc: s.short, icon: s.icon })),
  { to: "/loans", title: "Loans", desc: "Home and business loans from 25+ partner lenders at the best market rates.", icon: Wallet },
  { to: "/insurance", title: "Insurance", desc: "Health and term life insurance with 80C/80D tax benefits and cashless networks.", icon: Shield },
];

export const TESTIMONIALS = [
  { name: "Rohan Mehta", role: "Founder, Mehta Exports Pvt Ltd", text: "YKC has handled our GST and audit for five years. Punctual, proactive and brilliant on notices. Cannot recommend them more highly." },
  { name: "Ananya Shah", role: "Director, Shah Realty", text: "Their tax planning saved us materially this year, and their team responds within hours. A genuine partner, not a vendor." },
  { name: "Imran Qureshi", role: "Salaried Professional, Mumbai", text: "Got my ITR filed in under 48 hours with capital gains correctly reported. Smooth and professional from start to finish." },
];
