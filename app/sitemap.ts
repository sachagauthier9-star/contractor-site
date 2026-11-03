import type { MetadataRoute } from "next";

const siteUrl = "https://www.whitepineconstruction.ca";

// Only pages linked from the site are listed here.
const pages = [
  { path: "", priority: 1 },
  { path: "/services/painting", priority: 0.8 },
  { path: "/services/bathrooms", priority: 0.8 },
  { path: "/services/accent-walls", priority: 0.8 },
  { path: "/services/contracting", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
