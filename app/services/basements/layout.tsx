import type { Metadata } from "next";

// This page is unfinished and not linked from the site, so keep it out of search results.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
