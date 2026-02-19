import "./globals.css"
import type { Metadata } from "next"
import { DM_Sans, Outfit } from "next/font/google"
import SiteLayout from "../components/layout/SiteLayout"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: {
    default: "Dlaw Chauffeur Services | Premium Chauffeur Services in Nigeria",
    template: "%s | Dlaw Chauffeur Services",
  },
  description:
    "Premium chauffeur-driven car services in Nigeria for airport transfers, corporate travel, weddings, and events. Book a luxury ride with trusted professional drivers.",
  keywords: [
    "chauffeur services",
    "Nigeria chauffeur",
    "airport transfers",
    "luxury car service",
    "corporate travel",
    "wedding car service",
    "event transportation",
    "Dlaw Chauffeur Services",
  ],
  applicationName: "Dlaw Chauffeur Services",
  authors: [{ name: "Dlaw Chauffeur Services" }],
  creator: "Dlaw Chauffeur Services",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    title: "Dlaw Chauffeur Services | Premium Chauffeur Services in Nigeria",
    description:
      "Premium chauffeur-driven car services in Nigeria for airport transfers, corporate travel, weddings, and events.",
    siteName: "Dlaw Chauffeur Services",
    images: [
      {
        url: "/images/hero-bg.avif",
        width: 1200,
        height: 630,
        alt: "Dlaw Chauffeur Services luxury chauffeur rides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dlaw Chauffeur Services | Premium Chauffeur Services in Nigeria",
    description:
      "Premium chauffeur-driven car services in Nigeria for airport transfers, corporate travel, weddings, and events.",
    images: ["/images/hero-bg.avif"],
  },
  icons: {
    icon: "/images/dlaw-logo.jpeg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${outfit.variable} bg-white text-slate-900 antialiased`}
      >
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
