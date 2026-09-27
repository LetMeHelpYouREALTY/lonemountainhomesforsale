import { loneMountainPeakGeo } from "@/lib/lone-mountain-local";

/**
 * Map center for Lone Mountain buyer orientation.
 * Coordinates anchor on Lone Mountain Regional Park (4445 N Jensen St, Las Vegas NV 89129),
 * Clark County’s primary recreation hub for the 89129 pocket — slightly east of the butte summit
 * (USGS/Wikipedia peak: loneMountainPeakGeo).
 */
export const loneMountainCommunityCenter = {
  name: "Lone Mountain",
  city: "Las Vegas",
  region: "NV",
  postalCode: "89129",
  latitude: 36.2389,
  longitude: -115.3145,
  landmarkName: "Lone Mountain Regional Park",
  landmarkAddress: "4445 N Jensen St, Las Vegas, NV 89129",
  peakGeo: loneMountainPeakGeo,
} as const;

export type AmenityFilterId =
  | "parks"
  | "restaurants"
  | "cafes"
  | "grocery"
  | "golf"
  | "healthcare"
  | "pharmacies"
  | "shopping"
  | "parking"
  | "fitness"
  | "schools";

/** Suburban northwest Las Vegas — parks, errands, schools, then medical */
export const amenityFilterOrder: AmenityFilterId[] = [
  "parks",
  "restaurants",
  "grocery",
  "schools",
  "healthcare",
  "pharmacies",
  "shopping",
  "fitness",
  "cafes",
  "golf",
  "parking",
];

export const amenityFilterLabels: Record<AmenityFilterId, string> = {
  parks: "Parks",
  restaurants: "Restaurants",
  cafes: "Cafes",
  grocery: "Grocery",
  golf: "Golf",
  healthcare: "Healthcare",
  pharmacies: "Pharmacies",
  shopping: "Shopping",
  parking: "Parking",
  fitness: "Fitness",
  schools: "Schools",
};

/** Places API (New) primary types — one searchNearby call per filter with all types listed */
export const placesApiTypesByFilter: Record<AmenityFilterId, string[]> = {
  restaurants: ["restaurant"],
  cafes: ["cafe", "bakery"],
  grocery: ["grocery_store", "supermarket"],
  parks: ["park"],
  golf: ["golf_course"],
  healthcare: ["hospital", "doctor"],
  pharmacies: ["pharmacy"],
  shopping: ["shopping_mall", "department_store"],
  parking: ["parking"],
  fitness: ["gym"],
  schools: ["school", "primary_school", "secondary_school"],
};

export const amenitySearchRadiusMeters = 5000;

export function getGoogleMapsApiKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  return key || undefined;
}

export function getGoogleMapsMapId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
  return id || undefined;
}

export function googleMapsDirectionsUrl(lat: number, lng: number, label?: string): string {
  const destination = label ? encodeURIComponent(label) : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

export function googleMapsEmbedAtCoordinates(
  lat: number,
  lng: number,
  zoom = 14,
): string {
  const params = new URLSearchParams({
    q: `${lat},${lng}`,
    z: String(zoom),
    output: "embed",
  });
  return `https://www.google.com/maps?${params.toString()}`;
}
