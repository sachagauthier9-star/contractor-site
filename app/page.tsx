export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        {/* Navigation */}
        <header className="sticky top-0 z-50 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="text-xl font-bold tracking-tight">
              White Pine Construction Ottawa
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
            <p className="text-slate-600 mt-2">
              Professional trade services tailored to your project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-3">Kitchen Renovations</h3>
              <p className="text-slate-600">
                Full kitchen remodels including custom cabinetry, countertops, and modern layouts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-3">Bathroom Upgrades</h3>
              <p className="text-slate-600">
                Custom tile work, modern vanity installations, and complete bathroom overhauls.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-3">Basements & Additions</h3>
              <p className="text-slate-600">
                Transform unused spaces into finished living quarters, suites, or structural additions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-3">Home Gyms & Personal Spaces</h3>
              <p className="text-slate-600">
                Build dream home gyms and personalized retreats tailored to your needs.
              </p>
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
        <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Ready to start your project?
            </h2>

            <div className="w-full overflow-hidden rounded-lg h-[350px]">
              <iframe
                src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAYk3gvJUQzBYQk8xREdOSU1OQlU2NTlJSFRZSVhaMC4u&embed=true"
                className="w-full h-[620px] -mb-[140px] border-none"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} White Pine Construction Ottawa Inc.
          All rights reserved.
        </p>
      </footer>
    </>
  );
}
