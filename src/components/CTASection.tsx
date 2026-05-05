import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTASection = ({ title = "Ready to simplify your finances?", subtitle = "Book a free 30-minute consultation with our Chartered Accountants today.", cta = "Book Free Consultation", to = "/contact" }) => (
  <section className="section-py">
    <div className="container-px">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-navy p-10 text-center text-white md:p-16">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative">
          <h2 className="font-serif text-3xl md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">{subtitle}</p>
          <Link to={to} className="btn-primary mt-8">{cta} <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </div>
  </section>
);
