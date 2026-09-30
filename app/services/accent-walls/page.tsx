"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";

// Array of images for the slider
const sliderImages = [
  { src: "/accent1.png", alt: "Custom wood slat feature wall and TV media wall installation in Ottawa" },
  { src: "/accent3.png", alt: "Custom architectural detail, electric fireplace surround, and floating shelves" },
  { src: "/Media1.jpg", alt: "Custom media wall with recessed TV mount and acoustic wood slat paneling" },
  { src: "/Media 2.jpg", alt: "Custom board and batten accent wall with floating shelves and trim work" },
  { src: "/Media 3.jpg", alt: "Custom media wall with electric fireplace framing and hidden cable management" },
];

// Media Walls, Accent Walls & Carpentry specific FAQs
const mediaWallFaqs = [
  {
    question: "What areas do you serve?",
    answer: (
      <div className="space-y-3">
        <p>
          We provide residential interior renovations, media wall builds, and custom finish carpentry across the Greater Ottawa Area and surrounding eastern communities. Our core service areas include:
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
    question: "What is included in a custom media wall installation?",
    answer:
      "A custom media wall can include framing for a recessed TV mount, electric fireplace insert integration, hidden wiring channels for A/V cables, acoustic wood slat paneling, ambient LED backlight channels, and custom floating shelves or side cabinetry.",
  },
  {
    question: "How do you handle TV cables and power outlets?",
    answer:
      "We design our media walls with built-in chase conduits and recessed junction boxes behind the wall structure, keeping all power cords, HDMI cables, and streaming device wires completely hidden for a clean, floating look.",
  },
  {
    question: "What types of accent walls and trim work do you build?",
    answer:
      "In addition to media walls, we build acoustic wood slat panel walls, board and batten, custom geometric trim designs, wainscoting, shiplap, and bedroom headboard feature walls.",
  },
  {
    question: "How long does a media wall or feature wall project take?",
    answer:
      "Standard board and batten or wood slat feature walls take 1 to 2 days. Complete custom media walls with fireplace framing, electrical rough-ins, drywall, and finish paint typically take 2 to 4 days.",
  },
  {
    question: "How much does a custom media wall or accent wall cost in Ottawa?",
    answer:
      "Standard decorative accent walls typically range from $1,200 to $3,500. Full custom media walls with integrated electric fireplace framing, recessed TV enclosures, and custom lighting generally range from $2,800 to $6,500+, depending on materials and scope. We provide exact itemized quotes after an on-site or digital consultation.",
  },
];

export default function MediaAndAccentWallsPage() {
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
    serviceType: "Media Wall & Accent Wall Installation",
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
      "Custom media walls, TV & electric fireplace surrounds, wood slat paneling, decorative accent walls, floating shelves, and fine finish carpentry in Ottawa.",
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
              Media Walls, Accent Walls &amp; Custom Carpentry
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-normal">
              Custom TV entertainment walls, fireplace surrounds, and architectural woodwork designed to elevate your home.
            </p>
          </div>
        </section>

        {/* Overview & Craftsmanship Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-slate-900">
                Custom Media Wall Framing &amp; Fine Finish Carpentry
              </h2>

              <p className="text-slate-600 leading-relaxed">
                A custom media wall or decorative feature wall transforms your main living space into a high-end focal point. At White Pine Construction, we combine precise architectural framing with fine interior finish carpentry to create seamless media centers and feature walls tailored to your home.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you want to frame out a recessed TV and electric fireplace unit with hidden wiring, install acoustic wood slat paneling, or add classic board-and-batten trim work, we handle every step from rough-in framing to fine sanding and finish paint across Ottawa.
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

        {/* Core Capabilities Section */}
        <section className="bg-slate-100 py-16 px-6 border-y border-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">
                What Our Media Wall &amp; Carpentry Services Include
              </h2>
              <p className="text-slate-600 mt-2 max-w-xl mx-auto">
                Custom architectural features designed for style, entertainment, and lasting visual impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-[#15933a] text-2xl font-bold">01</div>
                <h3 className="text-xl font-bold text-slate-900">Custom Media &amp; TV Enclosures</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Recessed TV niches, electric fireplace framing, concealed cable management channels, soundbar integration, and custom soundproofing insulation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-[#15933a] text-2xl font-bold">02</div>
                <h3 className="text-xl font-bold text-slate-900">Wood Slat &amp; Feature Walls</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Vertical and horizontal acoustic wood slat panels, natural wood veneers, modern board and batten, wainscoting, and geometric wall trim designs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-[#15933a] text-2xl font-bold">03</div>
                <h3 className="text-xl font-bold text-slate-900">Custom Carpentry &amp; Floating Shelves</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Heavy-duty hidden-bracket floating shelves, fireplace mantels, ambient LED strip channels, crown molding, and custom trim integration.
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
              Got questions about media walls or feature wall installations? Here are answers to what clients ask us most.
            </p>
          </div>

          <div className="space-y-4">
            {mediaWallFaqs.map((faq, index) => (
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
            Planning a media wall or feature wall project in Ottawa?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Request a free estimate or discuss your custom media wall design ideas with us.
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
                Fill out the form below and we will get back to you shortly regarding your media wall or carpentry project.
              </p>
              <ContactForm />
            </div>
          )}
        </section>
      </main>
    </>
  );
}