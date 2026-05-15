import { MessageCircle } from "lucide-react";

export const WhatsAppFab = () => (
  <a
    href="https://wa.me/918291494160"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-transform hover:scale-110"
    style={{ background: "#25D366" }}
  >
    <MessageCircle className="h-7 w-7" fill="white" />
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-30" style={{ background: "#25D366" }} />
  </a>
);
