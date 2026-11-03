import type { Metadata } from "next";
import AccentWallsPage from "./AccentWallsPage";

const description =
  "Custom media walls, slat accent walls, and finish carpentry in Ottawa. Built-in TV walls, fireplaces, and architectural details made to fit your home.";

export const metadata: Metadata = {
  title: "Media Walls & Accent Walls in Ottawa",
  description,
  alternates: {
    canonical: "/services/accent-walls",
  },
  openGraph: {
    title: "Media Walls & Accent Walls in Ottawa | White Pine Construction",
    description,
    url: "/services/accent-walls",
    siteName: "White Pine Construction Ottawa",
    locale: "en_CA",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <AccentWallsPage />;
}
