import type { Metadata } from "next";
import BathroomsPage from "./BathroomsPage";

const description =
  "Bathroom renovations in Ottawa: custom tile, walk-in showers, vanity upgrades, and modern fixtures, managed from design to final finish.";

export const metadata: Metadata = {
  title: "Bathroom Renovations in Ottawa",
  description,
  alternates: {
    canonical: "/services/bathrooms",
  },
  openGraph: {
    title: "Bathroom Renovations in Ottawa | White Pine Construction",
    description,
    url: "/services/bathrooms",
    siteName: "White Pine Construction Ottawa",
    locale: "en_CA",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <BathroomsPage />;
}
