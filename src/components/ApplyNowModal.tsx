import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

export const ApplyNowModal = ({ product }: { product: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="btn-primary">Apply Now</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Apply for {product}</DialogTitle>
        </DialogHeader>
        <form className="mt-2 space-y-4" onSubmit={e => { e.preventDefault(); toast.success("Application received! Our team will reach out within 24 hours."); setOpen(false); }}>
          {[
            { l: "Full Name", t: "text" },
            { l: "Mobile Number", t: "tel" },
            { l: "Email", t: "email" },
            { l: "City", t: "text" },
            { l: "Amount Required (₹)", t: "number" },
          ].map(f => (
            <div key={f.l}>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.l}</label>
              <input type={f.t} required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            </div>
          ))}
          <button type="submit" className="btn-primary w-full justify-center">Submit Application</button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
