/**
 * Single source of truth for NAP and entity fields.
 * Align visible copy and JSON-LD with Google Business Profile.
 * Phone and office address match Dr. Jan Duffy’s published contact page (heyberkshire.com) as of 2026.
 * Site email is the branded inbox for this domain.
 * primaryArea uses ZIP 89129 (Lone Mountain market); postalCode is the office ZIP 89134 (GBP pin).
 */
export const siteContact = {
  siteName: "Lone Mountain Heights",
  siteTagline: "Homes for Sale",
  businessName: "Dr. Jan Duffy",
  legalBrokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  license: "S.0197614.LLC",
  siteUrl: "https://www.lonemountainhomesforsale.com",
  primaryArea: "Lone Mountain & Northwest Las Vegas, NV 89129",
  phoneDisplay: "(702) 500-1942",
  phoneE164: "+17025001942",
  email: "ChanceSells@LoneMountainHomesForSale.com",
  streetAddress: "9406 W Lake Mead Blvd, Suite 100",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89134",
  addressCountry: "US",
  /** Rough geo for schema (office); adjust if GBP pin differs */
  geo: {
    latitude: 36.1962,
    longitude: -115.2869,
  },
  openingHours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { dayOfWeek: ["Saturday", "Sunday"], opens: "10:00", closes: "16:00" },
  ],
  googleMapsPlaceUrl:
    "https://www.google.com/maps/search/?api=1&query=Berkshire+Hathaway+HomeServices+Nevada+Properties+9406+W+Lake+Mead+Blvd+Las+Vegas+NV+89134",
  googleDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134",
  /** Use your GBP “review” link when available; maps place search opens the knowledge panel. */
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Berkshire+Hathaway+HomeServices+Nevada+Properties+9406+W+Lake+Mead+Blvd+Las+Vegas+NV+89134",
  /** Official brokerage bio — also used in schema sameAs */
  brokerageBioUrl: "https://www.bhhsnv.com/bio/drjanduffy",
  /**
   * Google My Maps embed iframe `src` (defaults below).
   * To update: Google My Maps → Share → Embed → copy the `src` URL, then either paste into
   * `NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_SRC` in Vercel or replace this string (keep `mid` and `ehbc` in sync).
   * The embedded map cannot show Google’s layer legend open by default; use on-site legend + viewer link.
   */
  openHousesMapEmbedSrc:
    "https://www.google.com/maps/d/u/0/embed?mid=12gQ1w5bzxrQ41HSGCdEJWFfhMtSkBwI&ehbc=2E312F",
  /**
   * Full My Maps viewer — same `mid` as embed. User sees Google’s native legend UI here.
   * Update `NEXT_PUBLIC_OPEN_HOUSES_MAP_VIEWER_URL` or this string when `mid` changes.
   */
  openHousesMapViewerUrl:
    "https://www.google.com/maps/d/u/0/viewer?mid=12gQ1w5bzxrQ41HSGCdEJWFfhMtSkBwI",
} as const;

/** Prefer env so you can swap My Maps URLs without a code deploy (Vercel env vars). */
export function getOpenHousesMapEmbedSrc(): string {
  const fromEnv = process.env.NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_SRC?.trim();
  return fromEnv || siteContact.openHousesMapEmbedSrc;
}

export function getOpenHousesMapViewerUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_OPEN_HOUSES_MAP_VIEWER_URL?.trim();
  return fromEnv || siteContact.openHousesMapViewerUrl;
}

/** RealScout expects base64 of `Agent-<numericId>` (e.g. Agent-225050 → QWdlbnQtMjI1MDUw). */
const REALSCOUT_AGENT_ENCODED_FALLBACK = "QWdlbnQtMjI1MDUw";

function toBase64Utf8(value: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(value, "utf8").toString("base64");
  }
  return btoa(value);
}

function resolveRealScoutAgentEncodedId(): string {
  const raw = process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID?.trim() ?? "";
  if (!raw) return REALSCOUT_AGENT_ENCODED_FALLBACK;
  // Already encoded
  if (raw === REALSCOUT_AGENT_ENCODED_FALLBACK || raw.startsWith("QWdlbnQ")) {
    return raw;
  }
  // Numeric office/agent id from dashboards → encode as RealScout expects
  if (/^\d+$/.test(raw)) {
    return toBase64Utf8(`Agent-${raw}`);
  }
  // Accidental "Agent-225050" paste
  if (/^Agent-\d+$/i.test(raw)) {
    return toBase64Utf8(raw.replace(/^agent-/i, "Agent-"));
  }
  return raw;
}

export const realScoutDefaults = {
  /** Override with NEXT_PUBLIC_REALSCOUT_AGENT_ID (base64 or numeric). Empty → fallback. */
  agentEncodedId: resolveRealScoutAgentEncodedId(),
  scriptSrc: "https://em.realscout.com/widgets/realscout-web-components.umd.js",
} as const;
