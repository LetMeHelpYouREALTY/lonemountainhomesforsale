import type { NextConfig } from "next";
import {
  legacyExactRedirects,
  legacyListingSlugRedirect,
  legacyMessagePathRedirect,
} from "./src/lib/legacy-redirects";

const csp = [
  "default-src 'self'",
  "script-src https://widgetbe.com https://d1buiexcd5gara.cloudfront.net 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com",
  "connect-src https://widgetbe.com https://d1buiexcd5gara.cloudfront.net 'self' https://www.realscout.com https://em.realscout.com wss: https:",
  "img-src https://widgetbe.com https://d1buiexcd5gara.cloudfront.net 'self' data: blob: https:",
  "style-src https://widgetbe.com https://d1buiexcd5gara.cloudfront.net 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src https://widgetbe.com https://d1buiexcd5gara.cloudfront.net 'self' https://fonts.gstatic.com data:",
  "frame-src https://widgetbe.com https://d1buiexcd5gara.cloudfront.net https://www.google.com https://maps.google.com https://www.google.com/maps",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      ...legacyExactRedirects.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),
      {
        source: legacyListingSlugRedirect.source,
        destination: legacyListingSlugRedirect.destination,
        permanent: true,
      },
      {
        source: legacyMessagePathRedirect.source,
        destination: legacyMessagePathRedirect.destination,
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
