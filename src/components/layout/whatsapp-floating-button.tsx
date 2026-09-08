import Link from "next/link";
import { whatsappFloatingHref } from "@/data/contact-links";

export function WhatsAppFloatingButton() {
  if (!whatsappFloatingHref) {
    return null;
  }

  return (
    <Link
      href={whatsappFloatingHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.32)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(37,211,102,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E] focus-visible:ring-offset-2 sm:right-6 sm:bottom-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.4 11.7a8.3 8.3 0 0 1-12.3 7.3L4 20l1.1-4a8.3 8.3 0 1 1 15.3-4.3Z" />
        <path d="M9.1 7.8c.2-.4.4-.5.7-.5h.6c.2 0 .4.1.5.4l.5 1.1c.1.3.1.5-.1.7l-.4.5c-.1.2-.1.3 0 .5.4.8 1.1 1.5 1.9 1.9.2.1.4.1.5 0l.5-.4c.2-.2.5-.2.7-.1l1.1.5c.3.1.4.3.4.5v.6c0 .3-.2.5-.5.7-.6.3-1.8.2-3.5-.7-1.5-.8-2.8-2.1-3.6-3.6-.9-1.6-1-2.8-.7-3.4Z" />
      </svg>
    </Link>
  );
}
