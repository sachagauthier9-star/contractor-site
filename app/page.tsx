// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">White Pine Construction Ottawa
          </span>
          <a
            href="#contact"
            className="bg-[#1fd655] hover:bg-[#18ab45] text-slate-950 font-semibold px-4 py-2 rounded-lg transition"
          >
            Get a Quote
          </a>
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
              className="bg-[#1fd655] hover:bg-[#18ab45] text-slate-950 font-bold px-6 py-3 rounded-lg text-lg transition inline-block"
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
          <p className="text-slate-600 mt-2">Professional trade services tailored to your project.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-3">Kitchen Renovations</h3>
            <p className="text-slate-600">Full kitchen remodels including custom cabinetry, countertops, and modern layouts.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-3">Bathroom Upgrades</h3>
            <p className="text-slate-600">Custom tile work, modern vanity installations, and complete bathroom overhauls.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-3">Basements & Additions</h3>
            <p className="text-slate-600">Transform unused spaces into finished living quarters, suites, or structural additions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-3">Home Gyms & Personal Spaces</h3>
            <p className="text-slate-600">Build dream home gyms and personalized retreats tailored to your needs.</p>
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

      {/* Contact / Estimate Form */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
          <h2 className="text-2xl font-bold mb-6 text-center">Ready to start your project?</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email or Phone</label>
              <input
                type="text"
                placeholder="john@example.com"
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project scope, timeline, and location..."
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Contracting Co. All rights reserved.</p>
      </footer>
    </main>
  );
}