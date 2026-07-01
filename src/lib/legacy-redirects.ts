/**
 * Permanent redirects for legacy URLs reported in Google Search Console (404).
 * Add new entries here; consumed by next.config.ts redirects().
 */
export type LegacyRedirect = {
  source: string;
  destination: string;
};

/** Exact legacy paths from GSC and prior site builds */
export const legacyExactRedirects: LegacyRedirect[] = [
  { source: "/visit-api", destination: "/" },
  { source: "/lc", destination: "/contact" },
  /** Prior site share/messaging UI (GSC: excluded by noindex on 404) */
  { source: "/message/share", destination: "/contact" },
];

/** Legacy messaging paths from a prior site build */
export const legacyMessagePathRedirect: LegacyRedirect = {
  source: "/message/:path*",
  destination: "/contact",
};

/** Defunct IDX-style listing URLs (single path segment): /4041-elkridge-drive */
export const legacyListingSlugRedirect: LegacyRedirect = {
  source: "/:listingSlug(\\d+-[a-zA-Z0-9-]+)",
  destination: "/search",
};
