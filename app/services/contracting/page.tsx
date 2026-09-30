"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";

// Array of images for the slider
const sliderImages = [
  { src: "/Contracting1.png", alt: "General contracting and carpentry repairs in Ottawa" },
  { src: "/Contracting2.png", alt: "Structural updates and home repairs" },
  { src: "/Contracting3.png", alt: "Custom fixes, trim, and home maintenance" },
];

// General Contracting specific FAQs
const contractingFaqs = [
  {
    question: "What areas do you serve?",
    answer: (
      <div className="space-y-3">
        <p>
          We provide general contracting, home repair, and custom carpentry services across the Greater Ottawa Area and surrounding eastern communities. Our core service areas include:
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
    question: "What types of general contracting jobs do you handle?",
    answer:
      "We handle a wide range of home maintenance and renovation challenges—from structural wood rot repair, floor joist leveling, and drywall patching to exterior siding repair, door hangs, custom trim work, and general problem-solving around the house.",
  },
  {
    question: "Do you take on smaller repair jobs or home maintenance tasks?",
    answer:
      "Yes! While we build full decks, media walls, and finish basements, we also assist Ottawa homeowners with targeted repairs and custom fixes that require trade-level carpentry and structural knowledge.",
  },
  {
    question: "How do free estimates work for general repairs?",
    answer:
      "You can submit details and photos of the problem using our contact form. For straightforward repairs, we can often provide an initial quote digitally. For more complex structural or multi-trade fixes, we schedule a brief on-site visit to inspect the site.",
  },
  {
    question: "Do I need a building permit for general contracting or structural repairs?",
    answer:
      "Minor repairs, trim work, drywall, and non-structural changes do not require permits. If your project involves structural beam installations, load-bearing wall alterations, or major additions, we handle the city permit process with the City of Ottawa on your behalf.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, White Pine Construction Ottawa Inc. is fully incorporated, carries comprehensive general liability insurance, and maintains active WSIB coverage for all on-site work.",
  },
];

export default function GeneralContractingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showEstimateForm, setShowEstimateForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  // Switch image automatically every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "General Contracting & Home Repair Services",
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
      "Comprehensive general contracting, handyman services, structural repairs, maintenance, and tailored home problem-solving in Ottawa.",
  };

  return (
    <>
      {/* Structured Schema Data */}
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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
              General Contracting &amp; Home Problem Solving
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-normal">
              From everyday repairs to custom fixes, we help homeowners solve whatever issues arise around the house.
            </p>
          </div>
        </section>

        {/* Overview & Craftsmanship Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-slate-900">
                Reliable Contracting &amp; Quality Home Repairs
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Every home eventually encounters unique issues that require trade-level expertise to diagnose and fix correctly. At White Pine Construction, we offer full general contracting services designed to tackle projects of all shapes and sizes across Ottawa.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you are dealing with structural wood rot, water damage repair, shifting deck footings, sticking interior doors, or outdated trim work, we deliver durable, clean, and professional solutions tailored to your needs.
              </p>
              <div className="pt-2">
                <Link
                  href="/#services"
                  className="text-[#15933a] font-semibold flex items-center hover:underline"
                >
                  ← Back to all services
                </Link>
              </div>
            </div>

            {/* Clean Interactive Image Slider Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-96 group">
              {/* Image Slides */}
              {sliderImages.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Left Navigation Arrow */}
              <button
                onClick={prevImage}
                aria-label="Previous Image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-slate-950/50 hover:bg-[#15933a] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md backdrop-blur-sm cursor-pointer"
              >
                ‹
              </button>

              {/* Right Navigation Arrow */}
              <button
                onClick={nextImage}
                aria-label="Next Image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-slate-950/50 hover:bg-[#15933a] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md backdrop-blur-sm cursor-pointer"
              >
                ›
              </button>

              {/* Slide Indicators Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      index === currentImageIndex
                        ? "bg-[#15933a] w-6"
                        : "bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Contracting Capabilities Section */}
        <section className="bg-slate-100 py-16 px-6 border-y border-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">
                How We Help Ottawa Homeowners
              </h2>
              <p className="text-slate-600 mt-2 max-w-xl mx-auto">
                Comprehensive repair and contracting solutions to keep your home safe, solid, and functional.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-[#15933a] text-2xl font-bold">01</div>
                <h3 className="text-xl font-bold text-slate-900">Structural &amp; Framing Repairs</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Rot removal, subfloor replacements, structural post and beam repairs, sagging joist reinforcement, and framing modifications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-[#15933a] text-2xl font-bold">02</div>
                <h3 className="text-xl font-bold text-slate-900">Interior Repairs &amp; Carpentry</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Drywall patching and mudding, interior door replacement and re-alignments, casing, baseboard updates, and custom cabinetry touch-ups.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-[#15933a] text-2xl font-bold">03</div>
                <h3 className="text-xl font-bold text-slate-900">Exterior &amp; Maintenance Fixes</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Siding repairs, soffit/fascia work, deck structural tune-ups, porch step repairs, weatherproofing, and preventative home maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section className="py-16 px-6 max-w-4xl mx-auto border-b border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl mx-auto">
              Have questions about home repairs or contracting services? Here are answers to common questions.
            </p>
          </div>

          <div className="space-y-4">
            {contractingFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-shadow shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 font-semibold text-slate-900 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-[#15933a] font-bold text-xl leading-none">
                    {openFaqIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action with Inline Accordion Contact Form */}
        <section id="contact" className="py-16 px-6 max-w-3xl mx-auto scroll-mt-16 text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Have a problem around the house that needs fixing?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Contact White Pine Construction for honest advice and a clear, itemized repair estimate.
          </p>

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
                Tell Us What You Need Fixed
              </h3>
              <p className="text-sm text-slate-600 mb-6 text-center">
                Describe the issue or project below and we will get back to you shortly with a solution and estimate.
              </p>
              <ContactForm />
            </div>
          )}
        </section>
      </main>
    </>
  );
}