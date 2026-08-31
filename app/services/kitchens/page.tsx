"use client";

import { useState } from "react";

export default function KitchensPage() {
  const [showBefore, setShowBefore] = useState(false);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Kitchen Remodeling & Renovation",
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
      "Full kitchen remodels, open-concept conversions, custom cabinetry, countertop installation, and layout redesigns in Ottawa.",
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
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight">
              Kitchen Renovations in Ottawa
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Click below to compare the transformation.
            </p>
          </div>
        </section>

        {/* Project Description */}
        <section className="py-10 px-6 max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-700 leading-relaxed">
            This kitchen and dining room were redesigned into an open‑concept layout 
            to create more space, improve flow, and bring in natural light. The 
            renovation included removing dividing walls, updating custom cabinetry, and 
            modernizing finishes for a clean, functional look.
          </p>
        </section>

        {/* Toggle Button */}
        <section className="py-6 px-6 text-center">
          <button
            onClick={() => setShowBefore(!showBefore)}
            className="px-6 py-3 bg-slate-900 text-white font-semibold hover:bg-slate-700 transition"
          >
            {showBefore ? "Show After" : "Show Before"}
          </button>
        </section>

        {/* Image Gallery */}
        <section className="px-6 max-w-6xl mx-auto pb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {showBefore ? "Before Renovations" : "After Renovations"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {!showBefore ? (
              <>
                <img
                  src="/After1.png"
                  alt="Completed open-concept kitchen remodeling project in Ottawa"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/After4.png"
                  alt="Modern kitchen cabinetry and island installation detail"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/After3.png"
                  alt="Updated kitchen layout and dining area renovation"
                  className="w-full h-auto object-cover"
                />
              </>
            ) : (
              <>
                <img
                  src="/Before1.png"
                  alt="Original kitchen layout prior to wall removal and renovation"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/Before2.png"
                  alt="Kitchen cabinets and enclosed space before remodeling"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/Before3.png"
                  alt="Kitchen area before open-concept transformation"
                  className="w-full h-auto object-cover"
                />
              </>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} White Pine Construction Ottawa Inc.
            All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}