import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import { KioskController } from "@/components/chrome/KioskController";
import { PwaRegister } from "@/components/chrome/PwaRegister";
import { strings } from "@/content/strings";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wellspect — Blås- och tarmskötsel",
    template: "%s · Wellspect",
  },
  description:
    "Utbildningsstöd för förskrivna LoFric- och Navina-produkter. Ersätter inte råd från din vårdkontakt.",
  applicationName: "Wellspect",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Wellspect",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  themeColor: "#005A9C",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={strings.locale} className={`${sourceSans.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <a className="skip-link" href="#innehall">
          {strings.home.skip}
        </a>
        <KioskController />
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}
