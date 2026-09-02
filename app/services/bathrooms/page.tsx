"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";

export default function BathroomsPage() {
  const [showEstimateForm, setShowEstimateForm] = useState(false);

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
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 px-6 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#15933a_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Far Left Back Button */}
          <div className="absolute top-6 left-6 z-20">
            <Link
              href="/"
              className="inline-flex items-center text-slate-300 hover:text-white transition-colors font-medium text-sm group"
            >
              <span className="group-hover:-translate-x-1 transition-transform mr-1">←</span> Back to Home
            </Link>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
            <span className="text-[#15933a] font-bold text-xs uppercase tracking-widest bg-[#15933a]/10 px-3 py-1 rounded-full border border-[#15933a]/20 inline-block">
              Ottawa Portfolio Showcase
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
              Bathroom Upgrades & Renovations
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-normal">
              Modern, functional bathroom transformations tailored to your style.
            </p>
          </div>
        </section>

        {/* Full-Width Main Section */}
        <div className="w-full px-4 sm:px-8 max-w-[1400px] mx-auto -mt-6 relative z-20">
          <div className="bg-white shadow-xl border border-slate-200/80 p-6 md:p-10 space-y-8">
            
            {/* Header Title */}
            <div className="pb-6 border-b border-slate-100">
              <span className="font-semibold text-slate-800 text-lg">
                Featured Projects Showcase
              </span>
            </div>

            {/* Equal Height Desktop Image Gallery Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-100 border border-slate-200 overflow-hidden">
                <img
                  src="/bathroom1.png"
                  alt="Custom bathroom renovation project in Ottawa"
                  className="w-full h-80 md:h-[420px] object-cover rounded-none"
                />
              </div>
              <div className="bg-slate-100 border border-slate-200 overflow-hidden">
                <img
                  src="/bathroom2.png"
                  alt="Modern tile shower installation and bathroom design"
                  className="w-full h-80 md:h-[420px] object-cover rounded-none"
                />
              </div>
              <div className="bg-slate-100 border border-slate-200 overflow-hidden">
                <img
                  src="/bathroom3.png"
                  alt="Updated bathroom vanity and custom plumbing fixtures"
                  className="w-full h-80 md:h-[420px] object-cover rounded-none"
                />
              </div>
            </div>

            {/* Main Narrative Description */}
            <div className="bg-slate-900 text-white p-8 space-y-3 text-center">
              <h3 className="text-xl font-bold text-white">Project Summary</h3>
              <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
                From custom tile work and walk-in shower installs to modern vanity replacements and complete layout overhauls, we craft clean, durable, and high-quality bathrooms built to last.
              </p>
            </div>

            {/* Call to Action with Inline Accordion Form */}
            <div className="pt-4 text-center space-y-4">
              <h4 className="text-lg font-bold text-slate-900">Planning a bathroom project in Ottawa?</h4>
              
              <div>
                <button
                  onClick={() => setShowEstimateForm(!showEstimateForm)}
                  className="bg-[#15933a] hover:bg-[#1fd655] text-slate-950 font-bold px-8 py-3 text-base transition shadow-md cursor-pointer"
                >
                  {showEstimateForm ? "Hide Estimate Form" : "Request a Free Estimate"}
                </button>
              </div>

              {/* Accordion Form Container */}
              {showEstimateForm && (
                <div className="mt-6 max-w-2xl mx-auto text-left bg-slate-50 p-6 md:p-8 border border-slate-200 shadow-inner transition-all duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                    Request a Free Estimate
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 text-center">
                    Fill out the form below and we will get back to you shortly regarding your bathroom renovation project.
                  </p>
                  <ContactForm />
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </>
  );
}