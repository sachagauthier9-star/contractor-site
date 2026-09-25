"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";

// Array of images with descriptions and area information for the slider
const sliderImages = [
  {
    src: "/Paint1.JPG",
    title: "Interior Living Space Refresh",
    description: "Precision wall prep, smooth coat finishing, and custom trim painting.",
    area: "Orléans / Navan",
  },
  {
    src: "/Paint2.JPG",
    title: "Full Bathroom Painting",
    description: "Drywall patching, stain blocking, and low-VOC durable interior paint.",
    area: "Rockland / Cumberland",
  },
  {
    src: "/Paint3.JPG",
    title: "Full Bathroom Painting",
    description: "Drywall patching, stain blocking, and low-VOC durable interior paint.",
    area: "Rockland / Cumberland",
  },
  {
    src: "/Paint4.JPG",
    title: "Full Bathroom Painting",
    description: "Drywall patching, stain blocking, and low-VOC durable interior paint.",
    area: "Rockland / Cumberland",
  },
  {
    src: "/Paint5.JPG",
    title: "Interior Living Space Refresh",
    description: "Precision wall prep, smooth coat finishing, and custom trim painting.",
    area: "Orléans / Navan",
  },
];

// Painting specific FAQs
const paintingFaqs = [
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
    question: "Do I need to supply the paint, or do you provide it?",
    answer:
      "We typically supply premium-grade paints from trusted brands like Benjamin Moore and Sherwin-Williams as part of our quote. However, if you already have specific paint purchased, we are happy to work with your materials.",
  },
  {
    question: "How do you handle surface preparation before painting?",
    answer:
      "Surface prep is our highest priority. We fill nail holes, repair drywall cracks, sand rough surfaces smooth, apply stain-blocking primer where needed, and caulk trim/baseboards to ensure a flawless, long-lasting finish.",
  },
  {
    question: "How long does a typical interior painting project take?",
    answer:
      "Most single-room or small residential painting projects are completed in 1 to 2 days. Full-home interior painting usually takes 3 to 5 days, depending on drywall repair needs, trim complexity, and square footage.",
  },
  {
    question: "Do you move furniture and cover floors?",
    answer:
      "Yes! We protect your home as if it were our own. We move light furniture away from walls, cover flooring with drop cloths, and shield furniture and fixtures with plastic sheeting before opening any paint.",
  },
  {
    question: "What type of paint do you use for exterior painting in Ottawa?",
    answer:
      "We use high-durability, weather-resistant exterior acrylics designed specifically to endure Ottawa's extreme seasonal shifts—from hot summers to frozen winters—without peeling or fading prematurely.",
  },
];

export default function PaintingPage() {
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

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Service Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Painting2.jpg"
            alt="Professional painting service showcase"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover opacity-100"
          />
          {/* Subtle overlay to ensure clear image visibility while keeping text readable */}
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Interior &amp; Exterior Painting in Ottawa
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto drop-shadow">
            Transform your spaces with meticulous surface prep, premium materials, and flawless finishes delivered by experienced local trades.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setShowEstimateForm(!showEstimateForm)}
              className="bg-[#15933a] hover:bg-[#1fd655] text-slate-950 font-bold px-8 py-3.5 rounded-lg text-lg transition inline-block shadow-lg cursor-pointer"
            >
              {showEstimateForm ? "Hide Estimate Form" : "Request a Free Painting Quote"}
            </button>
          </div>
        </div>
      </section>

      {/* Overview & Craftsmanship Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-slate-900">
              Precision Surface Preparation &amp; Lasting Results
            </h2>

            <p className="text-slate-600 leading-relaxed">
              A great paint job is 80% preparation. At White Pine Construction, we take the time to inspect, repair, and prepare every surface before opening a paint can. From filling nail holes and repairing drywall cracks to precision trim caulking, we ensure every detail is crisp and durable.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you want to refresh a single bedroom, update interior trim and doors, refinish kitchen cabinets, or boost curb appeal with exterior painting, we deliver clean, efficient, and hassle-free service across the Ottawa region.
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

          {/* Interactive Image Slider Container */}
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
                  alt={`Painting project - ${slide.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                
                {/* Image Overlay Banner with Dark Capsule Location Badge */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-5 pb-10 text-white z-10">
                  <div className="inline-flex items-center gap-1.5 bg-slate-900/90 text-white font-medium text-xs px-3 py-1 rounded-md shadow border border-slate-700/60 mb-2 backdrop-blur-sm">
                    <span className="text-[#15933a] font-bold">📍</span>
                    <span>{slide.area}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white drop-shadow">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 drop-shadow-sm mt-0.5">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Left Navigation Arrow */}
            <button
              onClick={prevImage}
              aria-label="Previous Image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-slate-950/50 hover:bg-[#15933a] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md backdrop-blur-sm"
            >
              ‹
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={nextImage}
              aria-label="Next Image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-slate-950/50 hover:bg-[#15933a] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md backdrop-blur-sm"
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
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
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

      {/* Core Painting Capabilities */}
      <section className="bg-slate-100 py-20 px-6 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              What Our Painting Services Include
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl mx-auto">
              Comprehensive interior and exterior finishes engineered for longevity and visual impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-[#15933a] text-2xl font-bold">01</div>
              <h3 className="text-xl font-bold text-slate-900">Interior Walls &amp; Ceilings</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Full room painting, accent walls, high-ceiling painting, drywall patching, stain blocking, and smooth coat finishes using low-VOC premium paints.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-[#15933a] text-2xl font-bold">02</div>
              <h3 className="text-xl font-bold text-slate-900">Trim, Baseboards &amp; Doors</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Precision spray or hand-brushed coatings for crown molding, baseboards, door frames, wainscoting, and solid interior doors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-[#15933a] text-2xl font-bold">03</div>
              <h3 className="text-xl font-bold text-slate-900">Exterior Coatings &amp; Decks</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Weather-resistant exterior paint and wood staining for siding, fascia, soffits, front entry doors, porches, and exterior trim.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Frequently Asked Questions Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-b border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 mt-2 max-w-xl mx-auto">
            Got questions about our painting process? Here are answers to what clients ask us most.
          </p>
        </div>

        <div className="space-y-4">
          {paintingFaqs.map((faq, index) => (
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
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto scroll-mt-16 text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">
          Ready to Paint Your Space?
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Request a free estimate or discuss your colour ideas with us.
        </p>

        <div>
          <button
            onClick={() => setShowEstimateForm(!showEstimateForm)}
            className="bg-[#15933a] hover:bg-[#1fd655] text-slate-950 font-bold px-8 py-3 text-base transition shadow-md cursor-pointer rounded-lg"
          >
            {showEstimateForm ? "Hide Estimate Form" : "Request a Free Estimate"}
          </button>
        </div>

        {/* Accordion Form Container */}
        {showEstimateForm && (
          <div className="mt-6 max-w-2xl mx-auto text-left bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
              Tell Us About Your Painting Project
            </h3>
            <p className="text-sm text-slate-600 mb-2 text-center">
              Describe your project below and we will get back to you shortly with a free quote.
            </p>
            <p className="text-center text-sm font-semibold text-[#15933a] mb-6">
              100% Free, No-Obligation Quotes
            </p>
            <ContactForm />
          </div>
        )}
      </section>
    </main>
  );
}