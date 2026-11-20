const BASE = "https://calendly.com/drjanduffy";
const UTM_SOURCE = "lonemountainhomesforsale.com";

export const CALENDLY_EVENTS = {
  showing: `${BASE}/showing`,
  listing: `${BASE}/listing-consultation`,
} as const;

/** Plain Calendly links (CSP blocks embeds on this site). */
export function calendlyUrl(
  event: keyof typeof CALENDLY_EVENTS,
  placement: string,
  medium = "website",
): string {
  const url = new URL(CALENDLY_EVENTS[event]);
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("utm_source", UTM_SOURCE);
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_content", placement);
  return url.toString();
}