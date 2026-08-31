export default function AccentWallsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Accent Walls & Architectural Details
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Custom interior features designed to elevate your living space.
          </p>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-10 px-6 max-w-3xl mx-auto text-center">
        <p className="text-lg text-slate-700 leading-relaxed">
          From custom slat wood feature walls and decorative paneling to floating 
          shelving and finish carpentry, we build tailored architectural elements 
          that add character, modern texture, and visual interest to any room.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="px-6 max-w-6xl mx-auto pb-20">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img
            src="/accent1.png"
            alt="Custom Accent Wall Project 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="/accent2.png"
            alt="Custom Accent Wall Project 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="/accent3.png"
            alt="Custom Accent Wall Project 3"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} White Pine Construction Ottawa Inc.
          All rights reserved.
        </p>
      </footer>
    </main>
  );
}