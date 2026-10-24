/** Hyperlocal Lone Mountain / northwest Las Vegas reference data for pages, maps, and schema. */

export type LocalPlace = {
  name: string;
  slug: string;
  category: "park" | "shopping" | "corridor" | "landmark" | "community";
  description: string;
  address?: string;
  zip?: string;
  /** Google Maps search/embed query */
  mapQuery: string;
  geo?: { latitude: number; longitude: number };
};

/** Lone Mountain butte — Wikipedia / USGS reference coordinates */
export const loneMountainPeakGeo = {
  latitude: 36.23833,
  longitude: -115.31639,
} as const;

export const loneMountainZipCodes = [
  {
    zip: "89129",
    label: "Lone Mountain & northwest Las Vegas",
    primary: true,
    href: "/zip-codes/89129",
    description:
      "Primary ZIP for Lone Mountain residential pockets, Lone Mountain Regional Park, and most MLS searches typed as “Lone Mountain homes.”",
  },
  {
    zip: "89128",
    label: "Summerlin-adjacent northwest",
    primary: false,
    href: "/search",
    description: "Nearby northwest valley ZIP often compared when shopping west of US-95.",
  },
  {
    zip: "89149",
    label: "Skye Canyon / northwest growth corridor",
    primary: false,
    href: "/search",
    description: "Newer-build corridor northwest of Lone Mountain; buyers cross-shop with Skye Canyon.",
  },
  {
    zip: "89134",
    label: "Office & Centennial Hills access",
    primary: false,
    href: "/contact",
    description: "Office ZIP for Dr. Jan Duffy’s office location.",
  },
] as const;

export const commuteCorridors = [
  {
    name: "CC-215 (Bruce Woodbury Beltway) Exit 32 — Lone Mountain Road",
    detail:
      "Direct beltway access near Lone Mountain Regional Park; links northwest Las Vegas to Centennial Hills, Skye Canyon, and I-11/US-95 at the Centennial Bowl.",
  },
  {
    name: "US-95 / I-11",
    detail: "North–south freeway spine east of Lone Mountain; common commute path toward downtown and Henderson.",
  },
  {
    name: "Lone Mountain Road",
    detail: "East–west arterial tying Cliff Shadows, Craig Ranch Regional Park, and Camino Al Norte.",
  },
  {
    name: "Craig Road & Ann Road",
    detail: "Major northwest cross-streets with retail, medical, and school access—verify drive times from your target block.",
  },
] as const;

export const loneMountainAmenities: LocalPlace[] = [
  {
    name: "Lone Mountain Regional Park",
    slug: "lone-mountain-regional-park",
    category: "park",
    description:
      "Clark County park with a ~2-mile base loop trail, tennis courts, basketball, and equestrian paths—popular for families and active buyers.",
    address: "4445 N Jensen St",
    zip: "89129",
    mapQuery: "Lone Mountain Regional Park Las Vegas NV 89129",
    geo: { latitude: 36.2389, longitude: -115.3145 },
  },
  {
    name: "Lone Mountain Discovery Park",
    slug: "lone-mountain-discovery-park",
    category: "park",
    description:
      "Trailhead area on Jensen Road with access to the base circuit around Lone Mountain—starting point for many neighborhood walks.",
    address: "N Jensen St area",
    zip: "89129",
    mapQuery: "Lone Mountain Discovery Park Las Vegas NV",
    geo: { latitude: 36.23932, longitude: -115.30911 },
  },
  {
    name: "Lone Mountain summit & Vegas Vista trailhead",
    slug: "lone-mountain-summit",
    category: "landmark",
    description:
      "The namesake butte rises ~560 ft above the valley with panoramic views toward Spring Mountains and the Strip corridor—surrounded by a multi-use perimeter trail.",
    mapQuery: "Vegas Vista Trail Lone Mountain Las Vegas NV",
    geo: loneMountainPeakGeo,
  },
  {
    name: "Mountain Crest Park",
    slug: "mountain-crest-park",
    category: "park",
    description: "Northwest park with disc golf and open recreation space near Lone Mountain pockets.",
    mapQuery: "Mountain Crest Park Las Vegas NV",
  },
  {
    name: "Craig Ranch Regional Park",
    slug: "craig-ranch-regional-park",
    category: "park",
    description:
      "Large regional park east along Lone Mountain Road—sports fields, community events, and a common weekend destination for northwest families.",
    mapQuery: "Craig Ranch Regional Park North Las Vegas NV",
  },
  {
    name: "Craig Marketplace",
    slug: "craig-marketplace",
    category: "shopping",
    description: "Grocery-anchored retail along Craig Road near the 215—everyday errands without driving to Summerlin.",
    mapQuery: "Craig Marketplace Las Vegas NV",
  },
  {
    name: "Centennial Center",
    slug: "centennial-center",
    category: "shopping",
    description: "Retail cluster along the Centennial Parkway / 215 northwest corridor.",
    mapQuery: "Centennial Center Las Vegas NV",
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    category: "community",
    description:
      "Master-planned community northwest of Lone Mountain—buyers often compare newer Skye Canyon builds with established 89129 pockets.",
    mapQuery: "Skye Canyon Las Vegas NV",
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    category: "community",
    description:
      "Established northwest neighborhood along the 215 with medical, retail, and varied housing stock—frequent cross-shop with Lone Mountain.",
    mapQuery: "Centennial Hills Las Vegas NV",
  },
];

export const loneMountainSchools = [
  {
    level: "Elementary",
    name: "Dean LaMar Allen Elementary School",
    note: "CCSD assignment varies by address—confirm for each listing before you offer.",
  },
  {
    level: "Middle",
    name: "Edmundo Escobedo Middle School",
    note: "One of several CCSD middle schools serving northwest 89129 pockets.",
  },
  {
    level: "Middle",
    name: "Justice Myron Leavitt Middle School",
    note: "Serves parts of the Lone Mountain / northwest Las Vegas area; verify boundaries annually.",
  },
  {
    level: "High",
    name: "Centennial High School",
    note: "Large northwest high school; athletics and programs draw families to the corridor.",
  },
] as const;

export function googleMapsEmbedSrc(query: string, zoom = 14): string {
  const params = new URLSearchParams({
    q: query,
    hl: "en",
    z: String(zoom),
    output: "embed",
  });
  return `https://maps.google.com/maps?${params.toString()}`;
}

export function googleMapsSearchUrl(query: string): string {
  const params = new URLSearchParams({
    api: "1",
    query,
  });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}
