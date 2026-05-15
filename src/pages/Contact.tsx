import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO, breadcrumbSchema, localBusinessSchema } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";

const offices = [
  {
    city: "Mumbai (Head Office)",
    address: "4th Floor 421 Meadows Sahar Plaza Complex, JB Nagar Metro Andheri (East),Maharashtra — 400059",
    phone: "+91 9172737370",
    email: "caanilkabra@gmail.com",
  },
  {
    city: "Ahmedabad",
    address: "12th Floor, 1209, Addore Aspire, Gulbai Tekra Road, Ahmedabad — 380015",
    phone: "+91 8291494160",
    email: "caravikabra01@gmail.com",
  },
];

const faqs = [
  { q: "What are your office hours?", a: "Our offices are open Monday to Saturday, 10:00 AM to 7:00 PM IST. Sundays are by appointment only." },
  { q: "Do you offer a free consultation?", a: "Yes — your first 30-minute consultation with a Chartered Accountant is complimentary, in-person or virtual." },
  { q: "Can you serve clients outside Mumbai and Ahmedabad?", a: "Absolutely. We work with clients across India through secure cloud-based document sharing and video calls." },
  { q: "What is your typical turnaround time?", a: "Standard ITR filings: 48 hours. GST returns: same-day if documents are received by 4 PM. Audits: as per agreed timelines." },
  { q: "Are you registered with ICAI?", a: "Yes — YKC & Company is a duly registered firm with the Institute of Chartered Accountants of India (ICAI)." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const Contact = () => (
  <>
    <SEO
      title="Contact YKC & Company — CA Firm in Mumbai & Ahmedabad"
      description="Get in touch with YKC & Company — Chartered Accountants in Mira Road Mumbai & Ahmedabad. Phone, email, WhatsApp and inquiry form."
      path="/contact"
      schema={[faqSchema, localBusinessSchema, breadcrumbSchema([{name:"Home",url:"/"},{name:"Contact",url:"/contact"}])]}
    />
    <PageHero
      eyebrow="Get in touch"
      title={<>Begin a <span className="gold-text">conversation</span>.</>}
      description="Tell us about your business and the matter at hand. We will write back, candidly, within one business day."
      breadcrumbs={[{label:"Home",to:"/"},{label:"Contact"}]}
    />

    <section className="section-py">
      <div className="container-px">
        <div className="grid gap-6 md:grid-cols-2">
          {offices.map(o => (
            <article key={o.city} className="card-elev">
              <h2 className="font-serif text-2xl text-[hsl(var(--navy))]">{o.city}</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[hsl(var(--gold))]" /><span className="text-[hsl(var(--navy))]/85">{o.address}</span></li>
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-[hsl(var(--gold))]" /><a href={`tel:${o.phone.replace(/ /g,"")}`} className="text-[hsl(var(--navy))]/85 hover:text-[hsl(var(--gold))]">{o.phone}</a></li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-[hsl(var(--gold))]" /><a href={`mailto:${o.email}`} className="text-[hsl(var(--navy))]/85 hover:text-[hsl(var(--gold))]">{o.email}</a></li>
                <li className="flex items-start gap-3"><MessageCircle className="mt-0.5 h-5 w-5 text-[hsl(var(--gold))]" /><a href="https://wa.me/918291494160" className="text-[hsl(var(--navy))]/85 hover:text-[hsl(var(--gold))]">WhatsApp: +91 8291494160</a></li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-py bg-secondary/50">
      <div className="container-px grid gap-12 lg:grid-cols-2">
        <div>
          <div className="eyebrow">Inquiry form</div>
          <h2 className="mt-4 font-serif text-4xl text-[hsl(var(--navy))] md:text-5xl">Send us a <span className="gold-text">message</span></h2>
          <p className="mt-4 text-muted-foreground">Share a few details and our team will respond within one business day.</p>
        </div>
        <form className="card-elev space-y-5" onSubmit={e => { e.preventDefault(); toast.success("Thank you! We've received your inquiry."); }}>
          {[
            { l: "Name", t: "text" },
            { l: "Phone", t: "tel" },
            { l: "Email", t: "email" },
          ].map(f => (
            <div key={f.l}>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.l}</label>
              <input required type={f.t} maxLength={120} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            </div>
          ))}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service Required</label>
            <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
              {["GST Compliance","Income Tax Filing","Audit & Assurance","Business Registration","Accounting","Home Loan","Business Loan","Health Insurance","Term Insurance","Other"].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea required maxLength={1000} rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">Send Inquiry</button>
        </form>
      </div>
    </section>

    <section className="section-py">
      <div className="container-px max-w-3xl">
        <div className="eyebrow">FAQ</div>
        <h2 className="mt-4 font-serif text-4xl text-[hsl(var(--navy))] md:text-5xl">Frequently asked <span className="gold-text">questions</span></h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`}>
              <AccordionTrigger className="text-left font-serif text-lg text-[hsl(var(--navy))]">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default Contact;
