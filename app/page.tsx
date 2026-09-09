"use client";

import { useState } from "react";
import ContactForm from "./components/ContactForm";

const faqs = [
  {
    question: "How much does a bathroom renovation cost in Ottawa?",
    answer:
      "Bathroom renovation costs in Ottawa vary based on the size of the space, materials selected, and the scope of work. On average, a full bathroom remodel can range from $10,000 to $25,000 or more. We provide detailed estimates after an on-site consultation to ensure accurate pricing for your specific project.",
  },
  {
    question: "How much does a kitchen renovation cost in Ottawa?",
    answer:
      "In Ottawa, a full kitchen renovation typically ranges from $35,000 to $100,000+, depending on the size of the room, layout changes, and finish selections. We provide a detailed estimate after an on-site consultation to ensure accurate pricing for your specific project.",
  },
  {
    question: "How do I get an estimate for my renovation project?",
    answer:
      "You can request a free estimate by filling out our contact form below or reaching out directly via phone or email. We will schedule a site consultation to evaluate your space, discuss your goals, and provide a detailed quote.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, White Pine Construction Ottawa is fully licensed and carries comprehensive liability insurance to ensure complete peace of mind throughout every stage of your project.",
  },
  {
    question: "What areas do you serve?",
    answer: (
      <div className="space-y-3">
        <p>
          We provide residential interior renovations and general contracting services across the Greater Ottawa Area and surrounding eastern communities. Our core service areas include:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>East Ottawa &amp; Regional:</strong> Orléans, Gloucester, Rockland, Cumberland, Navan, Limoges, and Embrun
          </li>
          <li>
            <strong>Central &amp; Urban Ottawa:</strong> The Glebe, Westboro, Alta Vista, Rockcliffe Park, and Old Ottawa South
          </li>
          <li>
            <strong>Suburban Ottawa:</strong> Kanata, Barrhaven, Stittsville, Riverside South, Greely, and Manotick
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How long does a typical kitchen or bathroom renovation take?",
    answer:
      "Timelines vary based on scope, custom materials, and square footage. A standard bathroom update generally takes 1 to 2 weeks, while full kitchen remodels typically take 4 to 8 weeks. We establish a clear timeline prior to starting work.",
  },
  {
    question: "Do I need to supply my own materials?",
    answer:
      "We handle all framing, structural, trade, and building supplies, as well as finishing fixtures like tiles, vanities, faucets, and lighting. We source high-quality trade materials for every stage of your project to ensure a seamless, hassle-free process from start to finish.",
  },
  {
    question: "How do you handle changes during the project?",
    answer:
      "If you choose to alter the scope of work during construction, we provide a written change order outlining any adjustments to time or cost before proceeding, ensuring total pricing transparency.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
            <p className="text-lg md:text-xl text-slate-180 max-w-2xl mx-auto drop-shadow">
              Bringing quality, precision, and reliable management to your home renovation.
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
        <section id="services" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
            <p className="text-slate-600 mt-2">
              Professional trade services tailored to your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    Full kitchen remodels from personalized layouts to the last paint stroke. Custom cabinetry, modern appliances, and functional design for your dream kitchen.
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
                    Full bathroom remodel from personalized layouts to the last paint stroke. Premium tile work, walk-in showers, bathtub replacements, and vanity/cabinetry installation for your dream bathroom.
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
                    Custom feature walls, slat paneling, floating shelving, and carpentry finishes that elevate your interior aesthetic.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-[#15933a]">
                  Explore Feature Walls <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>

            {/* General Contracting & Home Repairs */}
            <a
              href="/services/contracting"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src="/Contracting3.png"
                  alt="General contracting, home repairs, and troubleshooting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#15933a] transition-colors">
                    General Contracting & Repairs
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Versatile contracting services and custom home repairs. Dedicated to problem solving, maintenance tasks, and home repair needs.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-[#15933a]">
                  Explore Repairs & Services <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
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
                Based in Ottawa, White Pine Construction Ottawa Inc. specializes in high-quality residential renovations. We take pride in delivering precise craftsmanship, clear communication, and dependable project management from concept to completion.
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

        {/* Frequently Asked Questions Section */}
        <section id="faq" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-2">
              Everything you need to know about our renovation process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg">{faq.question}</span>
                  <span className="text-[#15933a] text-xl font-semibold">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Have any more questions callout banner */}
          <div className="mt-12 text-center bg-slate-100 p-6 rounded-xl border border-slate-200">
            <p className="text-lg font-bold text-slate-800">
              Have any more questions?
            </p>
            <p className="text-slate-600 mt-1">
              Don't hesitate to fill out the form below and we'll get back to you directly.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 max-w-3xl mx-auto scroll-mt-16">
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-3xl font-bold text-center mb-2">
              Ready to discuss your project?
            </h2>

            <p className="text-center text-slate-600 mb-2">
              Request a free estimate or ask us any questions using the form below.
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