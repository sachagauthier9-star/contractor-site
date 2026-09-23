"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";

// Array of images for the slider
const sliderImages = [
  "/Painting1.png",
  "/After3.png",
  "/Hero1.png",
];

export default function PaintingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
          <span className="text-[#15933a] font-bold text-sm tracking-wider uppercase bg-slate-950/60 px-4 py-1.5 rounded-full border border-[#15933a]/30 inline-block">
            Residential Painting Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Interior &amp; Exterior Painting in Ottawa
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto drop-shadow">
            Transform your spaces with meticulous surface prep, premium materials, and flawless finishes delivered by experienced local trades.
          </p>
          <div className="pt-4">
            <a
              href="#contact"
              className="bg-[#15933a] hover:bg-[#1fd655] text-slate-950 font-bold px-8 py-3.5 rounded-lg text-lg transition inline-block shadow-lg"
            >
              Request a Free Painting Quote
            </a>
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
            {sliderImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Painting service showcase ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
                }`}
              />
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

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto scroll-mt-16">
        <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
          <h2 className="text-3xl font-bold text-center mb-2">
            Ready to Paint Your Space?
          </h2>
          <p className="text-center text-slate-600 mb-2">
            Request a free estimate or discuss your colour ideas with us.
          </p>
          <p className="text-center text-sm font-semibold text-[#15933a] mb-8">
            100% Free, No-Obligation Quotes
          </p>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}