"use client";

import { useState } from "react";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        {/* Full-Width Branded Header Bar */}
        <header className="sticky top-0 z-50 bg-slate-200 text-slate-900 border-b border-slate-300 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center relative gap-2">
            {/* Logo + Brand Name */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <img
                src="/1logo.png"
                alt="White Pine Construction Ottawa Logo"
                className="h-10 sm:h-12 w-auto shrink-0"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm sm:text-xl font-bold tracking-tight">
                  White Pine
                </span>
                <span className="text-xs sm:text-lg font-semibold text-slate-700">
                  Construction Ottawa
                </span>
              </div>
            </div>

            {/* Header Contact Dropdown Button */}
            <div className="relative shrink-0">
              <button
                onClick={() => setShowContact(!showContact)}
                className="bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>📞 Contact Us</span>
                <span className="text-[10px] sm:text-xs">{showContact ? "▲" : "▼"}</span>
              </button>

              {/* Dropdown Menu */}
              {showContact && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-4 text-slate-800 flex flex-col gap-3 text-sm z-50">
                  <span className="font-bold border-b border-slate-100 pb-2 text-slate-900">
                    Direct Contact
                  </span>
                  
                  <a
                    href="tel:+16130000000"
                    className="flex items-center gap-2 font-medium hover:text-[#15933a] transition"
                  >
                    <span>📞</span> (613) 000-0000
                  </a>

                  <a
                    href="mailto:info@whitepineconstruction.ca"
                    className="flex items-center gap-2 font-medium hover:text-[#15933a] transition break-all"
                  >
                    <span>✉️</span> info@whitepineconstruction.ca
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Quality Renovations & Contracting
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Kitchens, bathrooms, basements, and custom builds built with quality craftsmanship and reliable project management.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="bg-[#15933a] hover:bg-[#1fd655] text-slate-950 font-bold px-6 py-3 rounded-lg text-lg transition inline-block"
              >
                Request a Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Services Section with Visual Cards */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
            <p className="text-slate-600 mt-2">
              Professional trade services tailored to your project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kitchen Renovations */}
            <a
              href="/services/kitchens"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src="After3.png"
                  alt="Modern kitchen renovation with custom cabinets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#15933a] transition-colors">
                    Kitchen Renovations
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Full kitchen remodels including custom cabinetry, countertops, tile backsplashes, and modern functional layouts.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-[#15933a]">
                  Explore Kitchens <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>

            {/* Bathroom Upgrades */}
            <a
              href="/services/bathrooms"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src="bathroom3.png"
                  alt="Custom bathroom walk-in tile shower and vanity"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#15933a] transition-colors">
                    Bathroom Upgrades
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Custom tile work, walk-in glass showers, modern vanity installations, and complete bathroom overhauls.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-[#15933a]">
                  Explore Bathrooms <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>

            {/* Accent Walls & Architectural Details */}
            <a
              href="/services/accent-walls"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src="accent3.png"
                  alt="Custom slat wood accent wall and architectural trim"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#15933a] transition-colors">
                    Accent Walls & Details
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Custom feature walls, slat paneling, floating shelving, and finish carpentry that elevate your interior aesthetic.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-[#15933a]">
                  Explore Feature Walls <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-slate-200 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="text-slate-700 text-lg">
              We deliver clear communication, transparent pricing, and dependable timeline management from initial framing to final trim.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-3xl font-bold text-center mb-2">
              Ready to start your project?
            </h2>

            <p className="text-center text-slate-600 mb-8">
              Request a free estimate and we'll get back to you shortly.
            </p>

<ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}