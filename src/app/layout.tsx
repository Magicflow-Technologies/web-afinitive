import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";
import "./globals.css";

const afinitiveSerif = localFont({
  src: [
    {
      path: "./fonts/georgia.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/georgiab.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-afinitive-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const afinitiveSans = localFont({
  src: [
    {
      path: "./fonts/segoeuil.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/segoeui.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/segoeuib.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-afinitive-sans",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Afinitive | Preservando tu patrimonio",
  description:
    "Asesoría patrimonial objetiva e integral para preservar, ordenar y acompañar decisiones sobre tu patrimonio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${afinitiveSerif.variable} ${afinitiveSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
