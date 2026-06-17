import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ModalProvider } from "@/context/ModalContext";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marvonix - AI Automation Agency",
  description:
    "Marvonix is an AI Automation Agency that helps businesses streamline operations, save time, and boost efficiency with custom-built AI workflows. From lead management to internal automation, we make your business smarter—fast.",
  icons: {
    icon: "/seo/marvonix-symbol.svg",
    shortcut: "/seo/marvonix-favicon.ico",
    apple: "/seo/marvonix-symbol.svg",
  },
  metadataBase: new URL("https://marvonix.com"),
  openGraph: {
    title: "Marvonix - AI Automation Agency",
    description:
      "Marvonix helps businesses streamline operations, save time, and boost efficiency with custom-built AI workflows.",
    url: "https://marvonix.com",
    siteName: "Marvonix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvonix - AI Automation Agency",
    description:
      "Custom AI automation for businesses. Save hours, capture every lead, scale without headcount.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Marvonix",
  "url": "https://marvonix.com",
  "logo": "https://marvonix.com/images/marvonix-symbol.svg",
  "foundingDate": "2023",
  "founders": [
    { "@type": "Person", "name": "Manish Vaghamshi" },
    { "@type": "Person", "name": "Meet Domadiya" }
  ],
  "description": "Marvonix is an AI automation agency that builds custom AI workflows and automation systems for SMEs and growing businesses, specialising in lead generation automation, AI chatbots, data processing, and CRM integration.",
  "areaServed": ["United Kingdom", "India"],
  "sameAs": [
    "https://www.linkedin.com/company/marvonix",
    "https://www.instagram.com/marvonix.tech",
    "https://x.com/marvonix",
    "https://reddit.com/r/marvonix"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "support@marvonix.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip">
        <GoogleAnalytics />
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
