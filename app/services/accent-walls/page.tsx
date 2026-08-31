import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accent Walls & Architectural Details",
  description:
    "Custom wood slat feature walls, board and batten, decorative paneling, floating shelving, and finish carpentry in Ottawa.",
  keywords: [
    "Accent Walls Ottawa",
    "Feature Wall Contractor Ottawa",
    "Slat Wood Wall Ottawa",
    "Board and Batten Ottawa",
    "Custom Carpentry Ottawa",
    "Architectural Details Ottawa",
  ],
  openGraph: {
    title: "Accent Walls & Architectural Details | White Pine Construction Ottawa",
    description:
      "Transform your space with custom feature walls, wood slat paneling, and floating shelves built by Ottawa experts.",
    url: "https://whitepineconstruction.ca/services/accent-walls",
    type: "website",
    images: [
      {
        url: "https://whitepineconstruction.ca/accent1.png",
        width: 1200,
        height: 630,
        alt: "Custom Accent Wall Project",
      },
    ],
  },
};

export default function AccentWallsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Accent Wall Installation & Custom Carpentry",
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
      "Custom feature walls, wood slat paneling, decorative trim work, floating shelves, and fine interior carpentry in Ottawa.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
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
              alt="Custom wood slat accent wall installation in Ottawa home"
              className="w-full h-auto object-cover"
            />
            <img
              src="/accent2.png"
              alt="Modern geometric feature wall carpentry project"
              className="w-full h-auto object-cover"
            />
            <img
              src="/accent3.png"
              alt="Custom architectural detail and floating shelf carpentry"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
}