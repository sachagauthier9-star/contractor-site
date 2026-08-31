import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "White Pine Construction Ottawa | Renovations & Contracting",
    template: "%s | White Pine Construction Ottawa",
  },
  description:
    "Professional renovations in Ottawa including kitchens, bathrooms, basements, accent walls, and custom builds.",
  keywords: [
    "White Pine Construction",
    "Ottawa renovation contractor",
    "kitchen remodeling Ottawa",
    "bathroom upgrades Ottawa",
    "basement finishing Ottawa",
    "custom accent walls Ottawa",
    "general contractor Ottawa",
  ],
  authors: [{ name: "White Pine Construction Ottawa Inc." }],
  creator: "White Pine Construction Ottawa Inc.",
  openGraph: {
    title: "White Pine Construction Ottawa | Renovations & Contracting",
    description:
      "Quality renovations and custom contracting in Ottawa. Specializing in kitchens, bathrooms, basements, and architectural details.",
    url: "https://whitepineconstruction.ca",
    siteName: "White Pine Construction Ottawa",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://whitepineconstruction.ca/1logo.png",
        width: 1200,
        height: 630,
        alt: "White Pine Construction Ottawa Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "White Pine Construction Ottawa Inc.",
    image: "https://whitepineconstruction.ca/1logo.png",
    url: "https://whitepineconstruction.ca",
    telephone: "+1-613-000-0000",
    email: "info@whitepineconstruction.ca",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ottawa",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Ottawa",
      },
    ],
    priceRange: "$$",
    description:
      "Quality residential remodeling, kitchen renovations, bathroom upgrades, basements, and custom carpentry in Ottawa.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}