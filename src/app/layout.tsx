import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { KioskController } from "@/components/chrome/KioskController";
import { PwaRegister } from "@/components/chrome/PwaRegister";
import { SkipLink } from "@/components/i18n/LocaleBits";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { strings } from "@/content/strings";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
  style: ["normal", "italic"],
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
  minimumScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={strings.locale} className={`${montserrat.variable} h-full`}>
      <body className="font-sans antialiased">
        <LocaleProvider>
          <SkipLink />
          <KioskController />
          <PwaRegister />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
