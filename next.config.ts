import type { NextConfig } from "next";

const securityHeaders = [
  // Stop other sites from embedding this site in a frame (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  // Stop browsers from guessing file types
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only send the domain, not full URLs, to other sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Always use HTTPS
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  // Turn off browser features the site doesn't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
