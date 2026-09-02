"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";

export default function KitchensPage() {
  const [showBefore, setShowBefore] = useState(false);
  const [showEstimateForm, setShowEstimateForm] = useState(false);

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
              Kitchen Renovations in Ottawa
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-normal">
              Compare the transformation below.
            </p>
          </div>
        </section>

        {/* Full-Width Main Section */}
        <div className="w-full px-4 sm:px-8 max-w-[1400px] mx-auto -mt-6 relative z-20">
          <div className="bg-white shadow-xl border border-slate-200/80 p-6 md:p-10 space-y-8">
            
            {/* Controls Bar & Status Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15933a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#15933a]"></span>
                </span>
                <span className="font-semibold text-slate-800 text-lg">
                  Viewing: <span className="text-[#15933a]">{showBefore ? "Before Renovation" : "After Transformation"}</span>
                </span>
              </div>

              {/* Clean Toggle Switch Button */}
              <button
                onClick={() => setShowBefore(!showBefore)}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer border border-slate-700"
              >
                {showBefore ? "Show After" : "Show Before"}
              </button>
            </div>

            {/* Maximized Full-Size Image Gallery without Overlay Text */}
            <div className="grid md:grid-cols-3 gap-6">
              {!showBefore ? (
                <>
                  <div className="bg-slate-100 border border-slate-200">
                    <img
                      src="/After1.png"
                      alt="Completed open-concept kitchen remodeling project in Ottawa"
                      className="w-full h-auto object-cover rounded-none"
                    />
                  </div>
                  <div className="bg-slate-100 border border-slate-200">
                    <img
                      src="/After4.png"
                      alt="Modern kitchen cabinetry and island installation detail"
                      className="w-full h-auto object-cover rounded-none"
                    />
                  </div>
                  <div className="bg-slate-100 border border-slate-200">
                    <img
                      src="/After3.png"
                      alt="Updated kitchen layout and dining area renovation"
                      className="w-full h-auto object-cover rounded-none"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-slate-100 border border-slate-200">
                    <img
                      src="/Before1.png"
                      alt="Original kitchen layout prior to wall removal and renovation"
                      className="w-full h-auto object-cover rounded-none"
                    />
                  </div>
                  <div className="bg-slate-100 border border-slate-200">
                    <img
                      src="/Before2.png"
                      alt="Kitchen cabinets and enclosed space before remodeling"
                      className="w-full h-auto object-cover rounded-none"
                    />
                  </div>
                  <div className="bg-slate-100 border border-slate-200">
                    <img
                      src="/Before3.png"
                      alt="Kitchen area before open-concept transformation"
                      className="w-full h-auto object-cover rounded-none"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Main Narrative Description */}
            <div className="bg-slate-900 text-white p-8 space-y-3 text-center">
              <h3 className="text-xl font-bold text-white">Project Summary</h3>
              <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
                This kitchen and dining room were redesigned into an open‑concept layout to create more space, improve flow, and bring in natural light. The renovation included removing dividing walls, updating custom cabinetry, and modernizing finishes for a clean, functional look.
              </p>
            </div>

            {/* Call to Action with Inline Accordion Form */}
            <div className="pt-4 text-center space-y-4">
              <h4 className="text-lg font-bold text-slate-900">Planning a kitchen project in Ottawa?</h4>
              
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
                    Fill out the form below and we will get back to you shortly regarding your kitchen project.
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