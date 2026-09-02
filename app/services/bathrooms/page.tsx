import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bathroom Renovations & Upgrades",
  description:
    "Custom bathroom remodels, tile walk-in showers, vanity installations, and complete bathroom updates in Ottawa.",
  keywords: [
    "Bathroom Renovations Ottawa",
    "Bathroom Remodeling Ottawa",
    "Custom Shower Builder Ottawa",
    "Tile Installation Ottawa",
    "Vanity Installation Ottawa",
    "Bathroom Contractor Ottawa",
  ],
  openGraph: {
    title: "Bathroom Renovations & Upgrades | White Pine Construction Ottawa",
    description:
      "Transform your bathroom with custom tiling, modern vanity installations, and full layout redesigns in Ottawa.",
    url: "https://whitepineconstruction.ca/services/bathrooms",
    type: "website",
    images: [
      {
        url: "https://whitepineconstruction.ca/bathroom1.png",
        width: 1200,
        height: 630,
        alt: "Custom Bathroom Renovation Project",
      },
    ],
  },
};

export default function BathroomsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Bathroom Renovation & Remodeling",
    provider: {
      "@type": "GeneralContractor",
      name: "White Pine Construction Ottawa Inc.",
      url: "https://whitepineconstruction.ca",
    },
    areaServed: {
      "@type": "City",
      name: "Ottawa",
    },
    description:
      "Full bathroom renovations, custom tile installation, walk-in showers, vanity upgrades, and modern plumbing fixtures in Ottawa.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 px-6 relative">
          {/* Back to Home Button aligned to far left */}
          <div className="absolute top-6 left-6">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-slate-200 transition font-medium"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight">
              Bathroom Upgrades & Renovations
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Modern, functional bathroom transformations tailored to your style.
            </p>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="px-6 max-w-6xl mx-auto pt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="/bathroom1.png"
              alt="Custom bathroom renovation project in Ottawa"
              className="w-full h-auto object-cover rounded-none"
            />
            <img
              src="/bathroom2.png"
              alt="Modern tile shower installation and bathroom design"
              className="w-full h-auto object-cover rounded-none"
            />
            <img
              src="/bathroom3.png"
              alt="Updated bathroom vanity and custom plumbing fixtures"
              className="w-full h-auto object-cover rounded-none"
            />
          </div>
        </section>

        {/* Project Description */}
        <section className="pb-20 pt-10 px-6 max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-700 leading-relaxed">
            From custom tile work and walk-in shower installs to modern vanity 
            replacements and complete layout overhauls, we craft clean, durable, 
            and high-quality bathrooms built to last.
          </p>
        </section>
      </main>
    </>
  );
}