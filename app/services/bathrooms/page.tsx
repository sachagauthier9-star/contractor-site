"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";

// Array of images for the slider
const sliderImages = [
  { src: "/bathroom1.png", alt: "Custom bathroom renovation project in Ottawa" },
  { src: "/bathroom2.png", alt: "Modern tile shower installation and bathroom design" },
  { src: "/bathroom3.png", alt: "Updated bathroom vanity and custom plumbing fixtures" },
];

// Bathroom specific FAQs
const bathroomFaqs = [
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
    question: "How much does a bathroom renovation cost in Ottawa?",
    answer:
      "Bathroom renovation costs in Ottawa vary based on square footage, material selections, and whether plumbing locations are changing. On average, a full bathroom remodel ranges from $10,000 to $25,000+. We provide detailed, itemized estimates after an on-site consultation.",
  },
  {
    question: "How long does a typical bathroom remodel take?",
    answer:
      "A standard powder room or mid-sized bathroom update typically takes 1 to 2 weeks. Full master bathroom remodels involving layout changes, custom tile showers, or waterproofing systems generally take 2 to 3 weeks.",
  },
  {
    question: "Do you supply the tiles, vanities, and fixtures?",
    answer:
      "We supply all building, structural, waterproofing, and trade materials. For finish materials like tiles, vanities, faucets, and light fixtures, we can source them directly for you or work with fixtures you've pre-selected.",
  },
  {
    question: "How do you handle waterproofing in shower areas?",
    answer:
      "Waterproofing is our top priority. We utilize industry-standard membrane systems (such as Schluter-KERDI) to ensure total moisture barrier protection behind tile walls and beneath shower pans before a single tile is laid.",
  },
  {
    question: "Do you handle plumbing and electrical trades?",
    answer:
      "Yes, as part of our general contracting service, we coordinate all necessary rough-in plumbing, electrical relocations, exhaust fan installations, and trade work required for your renovation.",
  },
];

export default function BathroomsPage() {
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
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
        {/* Original Hero Section */}
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
              Bathroom Upgrades &amp; Renovations
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-normal">
              Modern, functional bathroom transformations tailored to your style.
            </p>
          </div>
        </section>

        {/* Overview & Craftsmanship Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-slate-900">
                Custom Bathroom Craftsmanship Built to Last
              </h2>

              <p className="text-slate-600 leading-relaxed">
                A great bathroom remodel combines elegant design with waterproof integrity. At White Pine Construction, we ensure that behind every beautiful tile finish is an engineered waterproofing system designed to prevent moisture issues for decades to come.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you are replacing an outdated bathtub with a sleek walk-in shower, updating vanities and fixtures, or completing a full floor-to-ceiling master bathroom remodel, we manage every trade and detail with precision across Ottawa.
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

        {/* Core Bathroom Capabilities */}
        <section className="bg-slate-100 py-16 px-6 border-y border-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">
                What Our Bathroom Services Include
              </h2>
              <p className="text-slate-600 mt-2 max-w-xl mx-auto">
                Comprehensive interior upgrades designed for comfort, luxury, and lasting durability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-[#15933a] text-2xl font-bold">01</div>
                <h3 className="text-xl font-bold text-slate-900">Custom Tile &amp; Walk-In Showers</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Schluter waterproofing systems, curbless or low-profile shower pans, niche shelving, accent wall tiling, and glass door installations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-[#15933a] text-2xl font-bold">02</div>
                <h3 className="text-xl font-bold text-slate-900">Vanities, Plumbing &amp; Fixtures</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Single or double vanity installs, custom quartz or granite counter integration, plumbing fixture replacement, and modern LED lighting setup.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-[#15933a] text-2xl font-bold">03</div>
                <h3 className="text-xl font-bold text-slate-900">Complete Layout &amp; Remodeling</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Full tear-out and subfloor prep, drywall repair, moisture-resistant painting, space reconfigurations, and heated floor systems.
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
              Got questions about remodeling your bathroom? Here are answers to what clients ask us most.
            </p>
          </div>

          <div className="space-y-4">
            {bathroomFaqs.map((faq, index) => (
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
            Planning a bathroom project in Ottawa?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Request a free estimate or discuss your custom bathroom design ideas with us.
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
                Request a Free Estimate
              </h3>
              <p className="text-sm text-slate-600 mb-6 text-center">
                Fill out the form below and we will get back to you shortly regarding your bathroom renovation project.
              </p>
              <ContactForm />
            </div>
          )}
        </section>
      </main>
    </>
  );
}