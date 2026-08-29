export default function BasementsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">

      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Basements & Additions
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Transform unused spaces into beautiful living areas, suites, or structural additions.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/gallery/basement1.jpg" className="rounded-lg shadow-md" />
          <img src="/gallery/basement2.jpg" className="rounded-lg shadow-md" />
          <img src="/gallery/basement3.jpg" className="rounded-lg shadow-md" />
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} White Pine Construction Ottawa Inc.
          All rights reserved.
        </p>
      </footer>
    </main>
  );
}
