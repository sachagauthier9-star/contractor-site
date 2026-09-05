"use client";

import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        {/* Hero Section with Full Background Image */}
        <section className="relative bg-slate-900 text-white py-28 px-6 overflow-hidden">
          {/* Background Image */}
          <img
            src="/Hero1.png"
            alt="Quality Renovation Showcase"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-950/75" />

          <div className="relative max-w-4xl mx-auto text-center space-y-6 z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
              Quality Renovations & Contracting
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto drop-shadow">
              Kitchens, bathrooms, basements, and custom builds built with quality craftsmanship and reliable project management.
            </p>
            <div className="pt-4 space-y-2">
              <a
                href="#contact"
                className="bg-[#15933a] hover:bg-[#1fd655] text-slate-950 font-bold px-6 py-3 rounded-lg text-lg transition inline-block shadow-lg"
              >
                Request a Free Estimate
              </a>
              <p className="text-sm font-medium text-slate-300 tracking-wide uppercase">
                Fully Licensed & Insured
              </p>
            </div>
          </div>
        </section>

        {/* Services Section with Visual Cards */}
        <section id="services" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-16">
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
                  src="/After3.png"
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
                  src="/bathroom1.png"
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
                  src="/accent1.png"
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

        {/* About Us Section */}
        <section id="about" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-16 border-t border-slate-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-[#15933a] font-bold text-sm tracking-wider uppercase">
                About White Pine Construction
              </span>
              <h2 className="text-3xl font-bold text-slate-900">
                Dedicated Craftsmanship & Local Expertise
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Based in Ottawa, White Pine Construction Ottawa Inc. specializes in high-quality residential renovations and custom builds. We take pride in delivering precise craftsmanship, clear communication, and dependable project management from concept to completion.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you are updating a kitchen, transforming a bathroom, or adding custom architectural details to your home, our focus is always on durable materials, transparent pricing, and completing your project on schedule.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-80">
              <img
                src="/about1.png"
                alt="White Pine Construction craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
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
        <section id="contact" className="py-20 px-6 max-w-3xl mx-auto scroll-mt-16">
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-3xl font-bold text-center mb-2">
              Ready to start your project?
            </h2>

            <p className="text-center text-slate-600 mb-2">
              Request a free estimate and we'll get back to you shortly.
            </p>

            <p className="text-center text-sm font-semibold text-[#15933a] mb-8">
              100% Free, No-Obligation Quotes
            </p>

            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}