import type { Metadata } from "next";
import PaintingPage from "./PaintingPage";

const description =
  "Professional interior and exterior painting in Ottawa. Careful prep, clean lines, and durable finishes for walls, ceilings, trim, and cabinets.";

export const metadata: Metadata = {
  title: "Interior & Exterior Painting in Ottawa",
  description,
  alternates: {
    canonical: "/services/painting",
  },
  openGraph: {
    title: "Interior & Exterior Painting in Ottawa | White Pine Construction",
    description,
    url: "/services/painting",
    siteName: "White Pine Construction Ottawa",
    locale: "en_CA",
    type: "website",
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Interior & Exterior Painting",
  provider: {
    "@type": "GeneralContractor",
    name: "White Pine Construction Ottawa Inc.",
    url: "https://www.whitepineconstruction.ca",
  },
  areaServed: {
    "@type": "City",
    name: "Ottawa",
  },
  description,
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <PaintingPage />
    </>
  );
}
