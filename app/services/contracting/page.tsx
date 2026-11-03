import type { Metadata } from "next";
import ContractingPage from "./ContractingPage";

const description =
  "General contracting and home repairs in Ottawa. Reliable help with renovations, repairs, and troubleshooting, handled with clear communication from start to finish.";

export const metadata: Metadata = {
  title: "General Contracting & Repairs in Ottawa",
  description,
  alternates: {
    canonical: "/services/contracting",
  },
  openGraph: {
    title: "General Contracting & Repairs in Ottawa | White Pine Construction",
    description,
    url: "/services/contracting",
    siteName: "White Pine Construction Ottawa",
    locale: "en_CA",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <ContractingPage />;
}
