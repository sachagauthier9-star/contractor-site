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
        className="h-8 sm:h-12 w-auto shrink-0"
      />
      <span className="text-sm sm:text-xl font-bold tracking-tight truncate sm:whitespace-normal">
        White Pine Construction Ottawa
      </span>
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

        {/* Services Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
            <p className="text-slate-600 mt-2">
              Professional trade services tailored to your project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/services/kitchens"
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-3">Kitchen Renovations</h3>
              <p className="text-slate-600">
                Full kitchen remodels including custom cabinetry, countertops, and modern layouts.
              </p>
            </a>

            <a
              href="/services/bathrooms"
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-3">Bathroom Upgrades</h3>
              <p className="text-slate-600">
                Custom tile work, modern vanity installations, and complete bathroom overhauls.
              </p>
            </a>

            {/* TEMPORARILY HIDDEN: Basements & Additions
            <a
              href="/services/basements"
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-3">Basements & Additions</h3>
              <p className="text-slate-600">
                Transform unused spaces into finished living quarters, suites, or structural additions.
              </p>
            </a>
            */}

            {/* TEMPORARILY HIDDEN: Home Gyms & Personal Spaces
            <a
              href="/services/gyms"
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-3">Home Gyms & Personal Spaces</h3>
              <p className="text-slate-600">
                Build dream home gyms and personalized retreats tailored to your needs.
              </p>
            </a>
            */}

            <a
              href="/services/accent-walls"
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-3">Accent Walls & Architectural Details</h3>
              <p className="text-slate-600">
                Custom feature walls, slat paneling, floating shelving, and finish carpentry that elevate your interior aesthetic.
              </p>
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

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} White Pine Construction Ottawa Inc. All rights reserved.
        </p>
      </footer>
    </>
  );
}