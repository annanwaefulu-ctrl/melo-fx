import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Il Codice Del Trading By MeloFX",
  description:
    "Impara Il Codice Per Diventare Un Trader Profittevole E Generare 6 Zeri In 90 Giorni.",
  generator: "Melo fx",
  keywords: [
    "trading",
    "forex",
    "MeloFX",
    "trading course",
    "trading strategy",
    "forex trading",
    "day trading",
    "financial education",
  ],
  authors: [{ name: "MeloFX" }],
  creator: "MeloFX",
  publisher: "MeloFX",
  metadataBase: new URL("https://melo-fx.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://melo-fx.vercel.app/",
    title: "Il Codice Del Trading By MeloFX",
    description:
      "Impara Il Codice Per Diventare Un Trader Profittevole E Generare 6 Zeri In 90 Giorni.",
    siteName: "Il Codice Del Trading",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Il Codice Del Trading By MeloFX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Il Codice Del Trading By MeloFX",
    description:
      "Impara Il Codice Per Diventare Un Trader Profittevole E Generare 6 Zeri In 90 Giorni.",
    images: ["/og-image.png"],
    creator: "@melofx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons: {
  //   icon: [
  //     {
  //       url: "/icon-light-32x32.png",
  //       media: "(prefers-color-scheme: light)",
  //     },
  //     {
  //       url: "/icon-dark-32x32.png",
  //       media: "(prefers-color-scheme: dark)",
  //     },
  //     {
  //       url: "/icon.svg",
  //       type: "image/svg+xml",
  //     },
  //   ],
  //   apple: "/apple-icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
